import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CisoAssistant } from '../src/client.js';
import { MissingParameterError } from '../src/errors.js';

describe('CisoAssistant', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('requires token or credentials', () => {
    expect(() => new CisoAssistant({})).toThrow(MissingParameterError);
  });

  it('normalizes base URL', () => {
    const client = new CisoAssistant({ baseUrl: 'https://example.com/', token: 'abc' });
    expect(client.baseUrl).toBe('https://example.com');
  });

  it('exposes domain clients', () => {
    const client = new CisoAssistant({ token: 'abc' });
    expect(client.assets).toBeDefined();
    expect(client.compliance).toBeDefined();
    expect(client.riskManagement).toBeDefined();
    expect(typeof client.assets.apiAssetsList).toBe('function');
  });

  it('sends Token authorization header', async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify({ results: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );

    const client = new CisoAssistant({
      baseUrl: 'http://localhost:8000',
      token: 'my-pat-token',
    });

    await client.assets.apiAssetsList();

    expect(mockFetch).toHaveBeenCalledOnce();
    const [, init] = mockFetch.mock.calls[0];
    const headers = new Headers(init?.headers);
    expect(headers.get('Authorization')).toBe('Token my-pat-token');
  });

  it('logs in with email/password when no token is provided', async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ token: 'session-token' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ version: '3.19.1' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      );

    const client = new CisoAssistant({
      baseUrl: 'http://localhost:8000',
      email: 'admin@example.com',
      password: 'secret',
    });

    await client.integrations.apiBuildRetrieve();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    const [loginUrl, loginInit] = mockFetch.mock.calls[0];
    expect(String(loginUrl)).toContain('/api/iam/login/');
    expect(loginInit?.method).toBe('POST');
    expect(JSON.parse(String(loginInit?.body))).toMatchObject({
      email: 'admin@example.com',
      password: 'secret',
    });

    const [, apiInit] = mockFetch.mock.calls[1];
    const headers = new Headers(apiInit?.headers);
    expect(headers.get('Authorization')).toBe('Token session-token');
  });

  it('supports arbitrary requests via request()', async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );

    const client = new CisoAssistant({ token: 't' });
    const result = await client.request('GET', '/api/health/');

    expect(result.data).toEqual({ ok: true });
    expect(result.status).toBe(200);
  });
});
