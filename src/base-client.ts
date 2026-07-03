import { Agent, fetch as undiciFetch, type Dispatcher } from 'undici';
import {
  AuthError,
  CisoAssistantError,
  MissingParameterError,
  UnauthorizedError,
} from './errors.js';
import type {
  ApiResponse,
  CisoAssistantOptions,
  InternalCallParams,
  PaginatedResponse,
} from './types.js';

const RESERVED_KEYS = new Set(['paginate', 'maxPages', 'fetchOptions', 'body']);

/**
 * HTTP client for the CISO Assistant REST API.
 *
 * Handles Knox token authentication, DRF pagination, and transient-error retries.
 * Domain-specific methods are generated from the OpenAPI spec and exposed via
 * namespaced resource clients on {@link CisoAssistant}.
 */
export class BaseClient {
  readonly baseUrl: string;
  protected readonly verifySsl: boolean;
  protected readonly maxRetries: number;
  protected readonly defaultMaxPages: number;
  protected readonly timeout: number;
  private readonly dispatcher?: Dispatcher;

  private token?: string;
  private readonly email?: string;
  private readonly password?: string;
  private loginPromise?: Promise<string>;

  constructor(options: CisoAssistantOptions = {}) {
    const baseUrl = (options.baseUrl ?? process.env.CISO_ASSISTANT_URL ?? 'http://localhost:8000')
      .trim()
      .replace(/\/$/, '');
    this.baseUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;

    this.token = options.token ?? process.env.CISO_ASSISTANT_TOKEN;
    this.email = options.email ?? options.username ?? process.env.CISO_ASSISTANT_EMAIL ?? process.env.CISO_ASSISTANT_USERNAME;
    this.password = options.password ?? process.env.CISO_ASSISTANT_PASSWORD;
    this.verifySsl = options.verifySsl ?? process.env.CISO_ASSISTANT_VERIFY_SSL !== 'false';
    this.maxRetries = options.maxRetries ?? 3;
    this.defaultMaxPages = options.maxPages ?? 50;
    this.timeout = options.timeout ?? 60_000;
    this.dispatcher = this.verifySsl
      ? undefined
      : new Agent({ connect: { rejectUnauthorized: false } });

    if (!this.token && !(this.email && this.password)) {
      throw new MissingParameterError(
        'Provide a token, or email/username and password for Knox login.',
      );
    }
  }

  /** Set or replace the API token at runtime. */
  setToken(token: string): void {
    this.token = token;
    this.loginPromise = undefined;
  }

  /** Exchange credentials for a Knox token via POST /api/iam/login/. */
  async login(credentials?: { email?: string; username?: string; password?: string }): Promise<string> {
    const email = credentials?.email ?? credentials?.username ?? this.email;
    const password = credentials?.password ?? this.password;
    if (!email || !password) {
      throw new MissingParameterError('email/username and password are required to login.');
    }

    const url = `${this.baseUrl}/api/iam/login/`;
    const response = await this.rawRequest('POST', url, {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username: email, password }),
    });

    if (response.status === 401 || response.status === 403) {
      throw new UnauthorizedError(
        `CISO Assistant credentials rejected (${response.status}).`,
        response.status,
        await this.decodeBody(response),
      );
    }
    if (!response.ok) {
      throw new AuthError(
        `CISO Assistant login returned ${response.status}.`,
        response.status,
        await this.decodeBody(response),
      );
    }

    const payload = (await this.decodeBody(response)) as Record<string, unknown>;
    const token = (payload.token ?? payload.key) as string | undefined;
    if (!token) {
      throw new AuthError('CISO Assistant login response contained no token.');
    }
    this.token = token;
    return token;
  }

  /** Make an arbitrary REST request (escape hatch for uncovered endpoints). */
  async request<T = unknown>(
    method: string,
    endpoint: string,
    options?: {
      params?: Record<string, unknown>;
      body?: unknown;
      paginate?: boolean;
      maxPages?: number;
      fetchOptions?: RequestInit;
    },
  ): Promise<ApiResponse<T>> {
    const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = new URL(`${this.baseUrl}${path}`);
    if (options?.params) {
      for (const [key, value] of Object.entries(options.params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, String(value));
        }
      }
    }

    if (method.toUpperCase() === 'GET' && options?.paginate) {
      const maxPages = options.maxPages ?? this.defaultMaxPages;
      const { response, data } = await this.fetchAllPages(
        method,
        url.toString(),
        undefined,
        maxPages,
        options.fetchOptions,
      );
      return { data: data as T, status: response.status, headers: response.headers, response };
    }

    const response = await this.authenticatedRequest(
      method,
      url.toString(),
      {
        body: options?.body !== undefined ? JSON.stringify(options.body) : undefined,
        headers: options?.body !== undefined
          ? { 'Content-Type': 'application/json' }
          : undefined,
        ...options?.fetchOptions,
      },
    );
    return {
      data: (await this.decodeBody(response)) as T,
      status: response.status,
      headers: response.headers,
      response,
    };
  }

  /** Dispatch a generated operation. Used by domain client classes. */
  async call<T = unknown>(params: InternalCallParams): Promise<ApiResponse<T>> {
    const options = { ...(params.options ?? {}) };
    const paginate = Boolean(options.paginate) || (params.paginate === 'page' && params.http === 'GET');
    const maxPages = typeof options.maxPages === 'number' ? options.maxPages : this.defaultMaxPages;
    const fetchOptions = options.fetchOptions as RequestInit | undefined;

    const kwargs: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(options)) {
      if (!RESERVED_KEYS.has(key) && value !== undefined) {
        kwargs[key] = value;
      }
    }

    const pathValues: Record<string, unknown> = {};
    for (const key of params.pathParams) {
      if (key in kwargs) {
        pathValues[key] = kwargs[key];
        delete kwargs[key];
      }
    }

    const url = this.resolveUrl(params.urlTemplate, pathValues);
    const query: Record<string, unknown> = {};
    for (const key of params.queryParams) {
      if (key in kwargs) {
        query[key] = kwargs[key];
        delete kwargs[key];
      }
    }

    let body: unknown;
    if (params.hasBody) {
      body = 'body' in kwargs ? kwargs.body : Object.keys(kwargs).length > 0 ? kwargs : undefined;
      if ('body' in kwargs) {
        delete kwargs.body;
      }
      for (const key of Object.keys(kwargs)) {
        delete kwargs[key];
      }
    }
    Object.assign(query, kwargs);

    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          for (const item of value) {
            search.append(key, String(item));
          }
        } else {
          search.set(key, String(value));
        }
      }
    }
    const queryString = search.toString();
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    if (paginate && params.http === 'GET') {
      const { response, data } = await this.fetchAllPages(
        params.http,
        fullUrl,
        undefined,
        maxPages,
        fetchOptions,
      );
      return { data: data as T, status: response.status, headers: response.headers, response };
    }

    const response = await this.authenticatedRequest(params.http, fullUrl, {
      body: body !== undefined ? JSON.stringify(body) : undefined,
      headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
      ...fetchOptions,
    });

    if (!response.ok) {
      throw new CisoAssistantError(
        `CISO Assistant request failed (${response.status}) ${params.http} ${params.urlTemplate}`,
        response.status,
        await this.decodeBody(response),
      );
    }

    return {
      data: (await this.decodeBody(response)) as T,
      status: response.status,
      headers: response.headers,
      response,
    };
  }

  protected resolveUrl(urlTemplate: string, pathValues: Record<string, unknown>): string {
    let path = urlTemplate;
    for (const [key, value] of Object.entries(pathValues)) {
      path = path.replace(`{${key}}`, encodeURIComponent(String(value)));
    }
    if (path.includes('{')) {
      const match = path.match(/\{([^}]+)\}/);
      throw new MissingParameterError(
        `Missing required path parameter: ${match?.[1] ?? 'unknown'}`,
      );
    }
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    return `${this.baseUrl}/${path.replace(/^\//, '')}`;
  }

  private async ensureToken(): Promise<string> {
    if (this.token) {
      return this.token;
    }
    if (!this.loginPromise) {
      this.loginPromise = this.login();
    }
    return this.loginPromise;
  }

  private async authenticatedRequest(
    method: string,
    url: string,
    init?: RequestInit,
  ): Promise<Response> {
    const token = await this.ensureToken();
    const headers = new Headers(init?.headers);
    headers.set('Authorization', `Token ${token}`);
    headers.set('Accept', 'application/json');
    return this.rawRequest(method, url, { ...init, headers });
  }

  private async rawRequest(method: string, url: string, init?: RequestInit): Promise<Response> {
    let attempt = 0;
    while (true) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);
      const signal = init?.signal
        ? AbortSignal.any([init.signal, controller.signal])
        : controller.signal;

      try {
        const { dispatcher, ...fetchInit } = {
          ...init,
          method: method.toUpperCase(),
          signal,
          ...(this.dispatcher ? { dispatcher: this.dispatcher } : {}),
        };
        const response = this.dispatcher
          ? await undiciFetch(url, { ...fetchInit, dispatcher } as never)
          : await globalThis.fetch(url, fetchInit as RequestInit);

        clearTimeout(timeoutId);

        if (response.status === 429 && attempt < this.maxRetries) {
          await this.sleep(this.retryDelay(response, attempt));
          attempt += 1;
          continue;
        }
        if ([502, 503, 504].includes(response.status) && attempt < this.maxRetries) {
          await this.sleep(this.retryDelay(response, attempt));
          attempt += 1;
          continue;
        }
        if (response.status === 401 || response.status === 403) {
          const body = await this.decodeBody(response);
          if (response.status === 401) {
            throw new AuthError(`CISO Assistant request unauthorized.`, response.status, body);
          }
          throw new UnauthorizedError(`CISO Assistant request forbidden.`, response.status, body);
        }

        return response;
      } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof CisoAssistantError) {
          throw error;
        }
        throw new CisoAssistantError(
          `CISO Assistant request error: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }
  }

  private async fetchAllPages(
    method: string,
    url: string,
    init: RequestInit | undefined,
    maxPages: number,
    fetchOptions?: RequestInit,
  ): Promise<{ response: Response; data: unknown[] }> {
    const first = await this.authenticatedRequest(method, url, { ...init, ...fetchOptions });
    if (!first.ok) {
      throw new CisoAssistantError(
        `CISO Assistant request failed (${first.status}).`,
        first.status,
        await this.decodeBody(first),
      );
    }

    let body = (await this.decodeBody(first)) as PaginatedResponse | unknown[];
    const allData = [...this.extractItems(body)];
    let nextUrl = typeof body === 'object' && body !== null && !Array.isArray(body)
      ? (body as PaginatedResponse).next ?? null
      : null;
    let fetched = 1;
    let lastResponse = first;

    while (nextUrl && fetched < maxPages) {
      const resp = await this.authenticatedRequest(method, nextUrl, fetchOptions);
      if (!resp.ok) {
        throw new CisoAssistantError(
          `CISO Assistant pagination failed (${resp.status}).`,
          resp.status,
          await this.decodeBody(resp),
        );
      }
      body = (await this.decodeBody(resp)) as PaginatedResponse;
      allData.push(...this.extractItems(body));
      nextUrl = body.next ?? null;
      fetched += 1;
      lastResponse = resp;
    }

    return { response: lastResponse, data: allData };
  }

  private extractItems(body: unknown): unknown[] {
    if (Array.isArray(body)) {
      return body;
    }
    if (typeof body === 'object' && body !== null) {
      const record = body as Record<string, unknown>;
      for (const key of ['results', 'content', 'data', 'items', 'records']) {
        if (Array.isArray(record[key])) {
          return record[key] as unknown[];
        }
      }
    }
    return [];
  }

  private async decodeBody(response: Response): Promise<unknown> {
    const text = await response.text();
    if (!text) {
      return null;
    }
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    }
    return text;
  }

  private retryDelay(response: Response, attempt: number): number {
    const retryAfter = response.headers.get('Retry-After');
    if (retryAfter) {
      const seconds = Number(retryAfter);
      if (!Number.isNaN(seconds)) {
        return Math.min(seconds * 1000, 60_000);
      }
    }
    return Math.min(2 ** attempt * 1000, 30_000);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
