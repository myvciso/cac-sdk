# @myvciso/cac-sdk

**Community-maintained SDK.** This project is not affiliated with, endorsed by, or sponsored by [Intuitem](https://intuitem.com) or the [CISO Assistant](https://github.com/intuitem/ciso-assistant-community) project and its maintainers.

**Trademarks.** "CISO Assistant" and related names, logos, and marks are trademarks of their respective owners. Their use here is for identification and interoperability only and does not imply affiliation, sponsorship, or endorsement.

**Disclaimer.** This software is provided **"as is"**, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from use of this software.

Node.js SDK for [CISO Assistant Community](https://github.com/intuitem/ciso-assistant-community) — the open-source GRC platform for risk management, compliance, audit, TPRM, and more.

This package provides **full coverage** of the CISO Assistant REST API (~1,565 operations), generated from the vendored OpenAPI spec. Methods are grouped into **19 domain clients** that mirror the [official API documentation](https://ca-api-doc.pages.dev/).

## Requirements

- Node.js 18+
- A running CISO Assistant instance (local Docker, self-hosted, or cloud trial)
- A [Personal Access Token (PAT)](https://intuitem.gitbook.io/ciso-assistant/product-docs/ai-and-integrations/api) or user credentials

## Installation

```bash
npm install @myvciso/cac-sdk
```

## Quick start

```typescript
import { CisoAssistant } from '@myvciso/cac-sdk';

const ca = new CisoAssistant({
  baseUrl: 'https://localhost:8443',  // your instance URL (no /api suffix)
  token: process.env.CISO_ASSISTANT_TOKEN,
  verifySsl: false,                   // common for local Docker with self-signed certs
});

// List all assets (auto-paginates DRF list endpoints)
const { data: assets } = await ca.assets.apiAssetsList({ paginate: true });

// Check API health / build version
const { data: build } = await ca.integrations.apiBuildRetrieve();
console.log(build);
```

### Login with email and password

Instead of a PAT, exchange credentials for a Knox session token:

```typescript
const ca = new CisoAssistant({
  baseUrl: 'http://localhost:8000',
  email: 'admin@example.com',
  password: process.env.CISO_ASSISTANT_PASSWORD,
});

// Token is obtained automatically on the first API call, or explicitly:
await ca.login();
```

### Environment variables

| Variable | Description |
|----------|-------------|
| `CISO_ASSISTANT_URL` | Backend base URL (default: `http://localhost:8000`) |
| `CISO_ASSISTANT_TOKEN` | Personal Access Token |
| `CISO_ASSISTANT_EMAIL` | Email for login |
| `CISO_ASSISTANT_USERNAME` | Alias for email |
| `CISO_ASSISTANT_PASSWORD` | Password for login |
| `CISO_ASSISTANT_VERIFY_SSL` | Set to `false` to allow self-signed certificates |

## API domains

All operations are available through namespaced clients on the main `CisoAssistant` instance:

| Client property | Domain |
|-----------------|--------|
| `analyticsMetrology` | Analytics & metrology |
| `assets` | Assets & asset classes |
| `authUsers` | Authentication & users |
| `chat` | AI chat |
| `compliance` | Compliance assessments, controls, requirements |
| `crq` | Quantitative risk (CRQ) |
| `ebiosRm` | EBIOS RM |
| `evidence` | Evidence & attachments |
| `frameworksLibraries` | Frameworks & libraries |
| `governance` | Folders, perimeters, governance |
| `incidents` | Incidents & timeline |
| `integrations` | Integrations, health, search, build info |
| `privacy` | Privacy module |
| `resilience` | Resilience & PMBOK |
| `riskManagement` | Risk assessments, scenarios, threats |
| `securityFindings` | Findings & security exceptions |
| `settings` | Global settings |
| `tasksTimeline` | Tasks, campaigns, questionnaires |
| `thirdParty` | TPRM — entities, contracts, assessments |

Method names follow the OpenAPI `operationId` in camelCase (e.g. `api_assets_list` → `apiAssetsList`).

## Pagination

DRF list endpoints support automatic pagination:

```typescript
// Fetch all pages (default cap: 50 pages)
const { data } = await ca.compliance.apiComplianceAssessmentsList({ paginate: true });

// Custom page cap
const { data } = await ca.compliance.apiComplianceAssessmentsList({
  paginate: true,
  maxPages: 10,
  page: 1,
});
```

## Raw requests

For endpoints not yet in the spec, use the escape hatch:

```typescript
const { data } = await ca.request('GET', '/api/custom-endpoint/', {
  params: { search: 'iso' },
});
```

## Error handling

```typescript
import { CisoAssistant, AuthError, CisoAssistantError } from '@myvciso/cac-sdk';

try {
  await ca.assets.apiAssetsRetrieve({ id: 'unknown-id' });
} catch (err) {
  if (err instanceof AuthError) {
    // 401 — invalid or expired token
  } else if (err instanceof CisoAssistantError) {
    console.error(err.statusCode, err.body);
  }
}
```

## Authentication notes

CISO Assistant uses Knox token authentication. Include the token as:

```
Authorization: Token <your_token>
```

Use `Token`, **not** `Bearer`. PATs respect MFA — they are issued from an authenticated session.

Always include trailing slashes on paths (`/api/assets/`, not `/api/assets`).

## Development

```bash
git clone https://github.com/myvciso/cac-sdk.git
cd cac-sdk
npm install
npm run generate   # regenerate clients from specs/ciso_assistant.json
npm run build
npm test
```

To refresh the API spec from the upstream Python SDK:

```bash
curl -o specs/ciso_assistant.json \
  https://raw.githubusercontent.com/Knuckles-Team/ciso-assistant-api/main/ciso_assistant_api/specs/ciso_assistant.json
npm run generate
```

## Related projects

- [ciso-assistant-community](https://github.com/intuitem/ciso-assistant-community) — the GRC platform
- [ciso-assistant-api](https://pypi.org/project/ciso-assistant-api/) — Python SDK with MCP server
- [API documentation](https://intuitem.gitbook.io/ciso-assistant/product-docs/ai-and-integrations/api)
- [Live API reference](https://ca-api-doc.pages.dev/)

## License

MIT — see [LICENSE](LICENSE).

For affiliation, trademark, and warranty disclaimers, see [NOTICE](NOTICE).
