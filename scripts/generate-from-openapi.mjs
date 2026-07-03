#!/usr/bin/env node
/**
 * Generate domain API clients from the vendored OpenAPI spec.
 *
 * Reads specs/ciso_assistant.json and emits src/generated/*.ts.
 * Re-run after refreshing the spec: npm run generate
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SPEC_PATH = path.join(ROOT, 'specs', 'ciso_assistant.json');
const OUT_DIR = path.join(ROOT, 'src', 'generated');

const HTTP_METHODS = new Set(['get', 'post', 'put', 'patch', 'delete']);

const GROUP_MAP = {
  metrology: 'analyticsMetrology',
  analytics: 'analyticsMetrology',
  agg_data: 'analyticsMetrology',
  composer_data: 'analyticsMetrology',
  get_metrics: 'analyticsMetrology',
  get_counters: 'analyticsMetrology',
  get_audits_metrics: 'analyticsMetrology',
  get_combined_assessments_status: 'analyticsMetrology',
  get_governance_calendar_data: 'analyticsMetrology',
  assets: 'assets',
  'asset-class': 'assets',
  'asset-capabilities': 'assets',
  iam: 'authUsers',
  users: 'authUsers',
  'user-groups': 'authUsers',
  'role-assignments': 'authUsers',
  teams: 'authUsers',
  accounts: 'authUsers',
  'user-preferences': 'authUsers',
  csrf: 'authUsers',
  'compliance-assessments': 'compliance',
  'requirement-assessments': 'compliance',
  'requirement-nodes': 'compliance',
  'requirement-assignments': 'compliance',
  'requirement-mapping-sets': 'compliance',
  'applied-controls': 'compliance',
  'reference-controls': 'compliance',
  policies: 'compliance',
  'mapping-libraries': 'compliance',
  'ebios-rm': 'ebiosRm',
  evidences: 'evidence',
  'evidence-revisions': 'evidence',
  'document-revisions': 'evidence',
  'document-attachments': 'evidence',
  'attachment-metadata': 'evidence',
  'batch-download-attachments': 'evidence',
  'batch-upload-attachments': 'evidence',
  'managed-documents': 'evidence',
  frameworks: 'frameworksLibraries',
  'stored-libraries': 'frameworksLibraries',
  'loaded-libraries': 'frameworksLibraries',
  'library-filtering-labels': 'frameworksLibraries',
  'filtering-labels': 'frameworksLibraries',
  presets: 'frameworksLibraries',
  terminologies: 'frameworksLibraries',
  folders: 'governance',
  perimeters: 'governance',
  'organisation-objectives': 'governance',
  'organisation-issues': 'governance',
  journeys: 'governance',
  'journey-steps': 'governance',
  'validation-flows': 'governance',
  'quick-start': 'governance',
  comments: 'governance',
  incidents: 'incidents',
  'timeline-entries': 'incidents',
  integrations: 'integrations',
  webhooks: 'integrations',
  'data-wizard': 'integrations',
  'dump-db': 'integrations',
  'full-restore': 'integrations',
  'load-backup': 'integrations',
  build: 'integrations',
  'content-types': 'integrations',
  search: 'integrations',
  health: 'integrations',
  serdes: 'integrations',
  privacy: 'privacy',
  crq: 'crq',
  resilience: 'resilience',
  pmbok: 'resilience',
  'risk-assessments': 'riskManagement',
  'risk-scenarios': 'riskManagement',
  'risk-matrices': 'riskManagement',
  'risk-acceptances': 'riskManagement',
  threats: 'riskManagement',
  vulnerabilities: 'riskManagement',
  cwes: 'riskManagement',
  'security-exceptions': 'securityFindings',
  findings: 'securityFindings',
  'findings-assessments': 'securityFindings',
  'security-advisories': 'securityFindings',
  'task-templates': 'tasksTimeline',
  'task-nodes': 'tasksTimeline',
  campaigns: 'tasksTimeline',
  answers: 'tasksTimeline',
  questions: 'tasksTimeline',
  'question-choices': 'tasksTimeline',
  entities: 'thirdParty',
  'entity-assessments': 'thirdParty',
  representatives: 'thirdParty',
  contracts: 'thirdParty',
  solutions: 'thirdParty',
  actors: 'thirdParty',
  chat: 'chat',
};

const RESERVED = new Set([
  'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
  'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally',
  'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 'null', 'return',
  'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void',
  'while', 'with', 'yield', 'let', 'static', 'implements', 'interface', 'package',
  'private', 'protected', 'public', 'await', 'async',
]);

function snake(name) {
  let result = name.replace(/[^0-9a-zA-Z]+/g, '_');
  result = result.replace(/([a-z0-9])([A-Z])/g, '$1_$2');
  result = result.replace(/_+/g, '_').replace(/^_|_$/g, '').toLowerCase();
  if (!result) result = 'op';
  if (/^\d/.test(result)) result = `op_${result}`;
  if (RESERVED.has(result)) result = `${result}_`;
  return result;
}

function camelCase(name) {
  return name.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

function pascalCase(name) {
  const c = camelCase(name);
  return c.charAt(0).toUpperCase() + c.slice(1);
}

function domainFor(urlPath) {
  const parts = urlPath.split('/').filter((p) => p && !p.startsWith('{'));
  let seg;
  if (parts.length > 1 && parts[0] === 'api') {
    seg = parts[1];
  } else if (parts.length > 0) {
    seg = parts[0];
  } else {
    seg = 'root';
  }
  return GROUP_MAP[seg] ?? camelCase(snake(seg));
}

function detectPagination(http, queryParams) {
  if (http.toUpperCase() !== 'GET') return 'none';
  const qs = new Set(queryParams);
  if (qs.has('page') || (qs.has('limit') && qs.has('offset'))) {
    return 'page';
  }
  return 'none';
}

function collectOperations(spec) {
  const byDomain = new Map();
  const globalMethods = new Set();
  let synthetic = 0;

  for (const [urlPath, methods] of Object.entries(spec.paths ?? {})) {
    if (typeof methods !== 'object' || methods === null) continue;
    const shared = Array.isArray(methods.parameters) ? methods.parameters : [];
    const domain = domainFor(urlPath);

    for (const [http, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.has(http) || typeof op !== 'object' || op === null) continue;

      let opId = op.operationId;
      if (!opId) {
        synthetic += 1;
        opId = snake(`${http}_${urlPath}`);
      }

      const params = [...shared, ...(Array.isArray(op.parameters) ? op.parameters : [])];
      const pathParams = params.filter((p) => p.in === 'path').map((p) => p.name);
      for (const token of urlPath.matchAll(/\{([^}]+)\}/g)) {
        if (!pathParams.includes(token[1])) pathParams.push(token[1]);
      }
      const queryParams = params.filter((p) => p.in === 'query').map((p) => p.name);
      const hasBody = 'requestBody' in op;

      let methodName = camelCase(snake(opId));
      while (globalMethods.has(methodName)) {
        methodName += 'X';
      }
      globalMethods.add(methodName);

      const rawSummary = (op.summary || op.description || opId || '').trim();
      const summary = rawSummary
        ? rawSummary.split(/\r?\n/)[0].replace(/\s+/g, ' ').slice(0, 160)
        : opId;

      if (!byDomain.has(domain)) byDomain.set(domain, []);
      byDomain.get(domain).push({
        operationId: opId,
        methodName,
        http: http.toUpperCase(),
        urlTemplate: urlPath,
        pathParams,
        queryParams,
        hasBody,
        paginate: detectPagination(http, queryParams),
        summary,
      });
    }
  }

  const total = [...byDomain.values()].reduce((n, ops) => n + ops.length, 0);
  console.log(`Collected ${total} operations across ${byDomain.size} domains (${synthetic} synthetic ids).`);
  return byDomain;
}

function emitDomainModule(domain, ops) {
  const className = `${pascalCase(domain)}Client`;
  const lines = [
    '/** Auto-generated by scripts/generate-from-openapi.mjs — do not edit by hand. */',
    "import type { BaseClient } from '../base-client.js';",
    "import type { ApiResponse, CallOptions } from '../types.js';",
    '',
    `export class ${className} {`,
    '  constructor(private readonly client: BaseClient) {}',
    '',
  ];

  for (const op of ops) {
    const paramNames = [...new Set([...op.pathParams, ...op.queryParams, ...(op.hasBody ? ['body'] : [])])];
    const optionFields = paramNames.map((p) => `${p}?: unknown;`).join(' ');
    const doc = op.summary.replace(/\*\//g, '*\\/');
    lines.push(`  /** ${doc} */`);
    lines.push(`  async ${op.methodName}(options${optionFields ? `: CallOptions & { ${optionFields} }` : '?: CallOptions'}): Promise<ApiResponse> {`);
    lines.push('    return this.client.call({');
    lines.push(`      http: '${op.http}',`);
    lines.push(`      urlTemplate: ${JSON.stringify(op.urlTemplate)},`);
    lines.push(`      pathParams: ${JSON.stringify(op.pathParams)},`);
    lines.push(`      queryParams: ${JSON.stringify(op.queryParams)},`);
    lines.push(`      hasBody: ${op.hasBody},`);
    lines.push(`      paginate: '${op.paginate}',`);
    lines.push('      options: options as Record<string, unknown>,');
    lines.push('    });');
    lines.push('  }');
    lines.push('');
  }

  lines.push('}');
  lines.push('');
  return lines.join('\n');
}

function emitManifest(byDomain) {
  const operations = [];
  for (const [domain, ops] of [...byDomain.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    for (const op of ops) {
      operations.push({
        operationId: op.operationId,
        domain,
        method: op.methodName,
        http: op.http,
        path: op.urlTemplate,
        paginate: op.paginate,
      });
    }
  }

  return [
    '/** Auto-generated operation manifest. */',
    'export const OPERATIONS = ' + JSON.stringify(operations, null, 2) + ' as const;',
    '',
    'export const DOMAINS = ' + JSON.stringify([...byDomain.keys()].sort(), null, 2) + ' as const;',
    '',
    'export type Domain = (typeof DOMAINS)[number];',
    '',
  ].join('\n');
}

function emitIndex(byDomain) {
  const domains = [...byDomain.keys()].sort();
  const imports = domains.map(
    (d) => `import { ${pascalCase(d)}Client } from './${d}.js';`,
  );
  const props = domains.map((d) => `  readonly ${d}: ${pascalCase(d)}Client;`);
  const inits = domains.map((d) => `    this.${d} = new ${pascalCase(d)}Client(this);`);

  return [
    '/** Auto-generated domain client registry. */',
    "import { BaseClient } from '../base-client.js';",
    "import type { CisoAssistantOptions } from '../types.js';",
    ...imports,
    '',
    'export class GeneratedClient extends BaseClient {',
    ...props,
    '',
    '  constructor(options: CisoAssistantOptions = {}) {',
    '    super(options);',
    ...inits,
    '  }',
    '}',
    '',
    ...domains.map((d) => `export { ${pascalCase(d)}Client } from './${d}.js';`),
    '',
  ].join('\n');
}

function main() {
  const spec = JSON.parse(fs.readFileSync(SPEC_PATH, 'utf8'));
  const byDomain = collectOperations(spec);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const [domain, ops] of byDomain.entries()) {
    const filePath = path.join(OUT_DIR, `${domain}.ts`);
    fs.writeFileSync(filePath, emitDomainModule(domain, ops));
  }

  fs.writeFileSync(path.join(OUT_DIR, 'manifest.ts'), emitManifest(byDomain));
  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), emitIndex(byDomain));

  console.log(`Generated ${byDomain.size} domain modules in src/generated/.`);
}

main();
