import { GeneratedClient } from './generated/index.js';

/**
 * Client for the [CISO Assistant Community](https://github.com/intuitem/ciso-assistant-community) REST API.
 *
 * Authenticate with a Personal Access Token (PAT) or email/password credentials.
 * All ~1,500 API operations are available via namespaced domain clients.
 *
 * @example
 * ```ts
 * import { CisoAssistant } from '@myvciso/cac-sdk';
 *
 * const ca = new CisoAssistant({
 *   baseUrl: 'https://localhost:8443',
 *   token: process.env.CISO_ASSISTANT_TOKEN,
 * });
 *
 * const { data: assets } = await ca.assets.apiAssetsList({ paginate: true });
 * const { data: health } = await ca.integrations.apiHealthRetrieve();
 * ```
 */
export class CisoAssistant extends GeneratedClient {}
