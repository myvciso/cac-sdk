/** Result of a single API call. */
export interface ApiResponse<T = unknown> {
  /** Parsed response body (or concatenated pages for auto-paginated list calls). */
  data: T;
  /** HTTP status code. */
  status: number;
  /** Response headers. */
  headers: Headers;
  /** Raw fetch Response for advanced use. */
  response: Response;
}

export interface PaginatedResponse<T = unknown> {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: T[];
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface CallOptions {
  /** Follow DRF pagination and return all pages (GET list endpoints only). */
  paginate?: boolean;
  /** Cap pages fetched when paginate is true (default: 50). */
  maxPages?: number;
  /** Extra fetch options (signal, etc.). */
  fetchOptions?: Omit<RequestInit, 'method' | 'headers' | 'body'>;
}

export interface CisoAssistantOptions {
  /** Backend base URL, e.g. `https://localhost:8443` or `http://localhost:8000`. */
  baseUrl?: string;
  /** Personal Access Token (PAT). Sent as `Authorization: Token <token>`. */
  token?: string;
  /** Email for Knox login (alternative to token). */
  email?: string;
  /** Username for Knox login (alias for email). */
  username?: string;
  /** Password for Knox login. */
  password?: string;
  /** Verify TLS certificates (default: true). */
  verifySsl?: boolean;
  /** Max retries on 429/502/503/504 (default: 3). */
  maxRetries?: number;
  /** Default max pages when paginate is true (default: 50). */
  maxPages?: number;
  /** Request timeout in ms (default: 60000). */
  timeout?: number;
}

export interface InternalCallParams {
  http: HttpMethod;
  urlTemplate: string;
  pathParams: string[];
  queryParams: string[];
  hasBody: boolean;
  paginate: 'page' | 'none';
  options?: Record<string, unknown>;
}
