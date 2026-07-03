/** Auto-generated domain client registry. */
import { BaseClient } from '../base-client.js';
import type { CisoAssistantOptions } from '../types.js';
import { AnalyticsMetrologyClient } from './analyticsMetrology.js';
import { AssetsClient } from './assets.js';
import { AuthUsersClient } from './authUsers.js';
import { ChatClient } from './chat.js';
import { ComplianceClient } from './compliance.js';
import { CrqClient } from './crq.js';
import { EbiosRmClient } from './ebiosRm.js';
import { EvidenceClient } from './evidence.js';
import { FrameworksLibrariesClient } from './frameworksLibraries.js';
import { GovernanceClient } from './governance.js';
import { IncidentsClient } from './incidents.js';
import { IntegrationsClient } from './integrations.js';
import { PrivacyClient } from './privacy.js';
import { ResilienceClient } from './resilience.js';
import { RiskManagementClient } from './riskManagement.js';
import { SecurityFindingsClient } from './securityFindings.js';
import { SettingsClient } from './settings.js';
import { TasksTimelineClient } from './tasksTimeline.js';
import { ThirdPartyClient } from './thirdParty.js';

export class GeneratedClient extends BaseClient {
  readonly analyticsMetrology: AnalyticsMetrologyClient;
  readonly assets: AssetsClient;
  readonly authUsers: AuthUsersClient;
  readonly chat: ChatClient;
  readonly compliance: ComplianceClient;
  readonly crq: CrqClient;
  readonly ebiosRm: EbiosRmClient;
  readonly evidence: EvidenceClient;
  readonly frameworksLibraries: FrameworksLibrariesClient;
  readonly governance: GovernanceClient;
  readonly incidents: IncidentsClient;
  readonly integrations: IntegrationsClient;
  readonly privacy: PrivacyClient;
  readonly resilience: ResilienceClient;
  readonly riskManagement: RiskManagementClient;
  readonly securityFindings: SecurityFindingsClient;
  readonly settings: SettingsClient;
  readonly tasksTimeline: TasksTimelineClient;
  readonly thirdParty: ThirdPartyClient;

  constructor(options: CisoAssistantOptions = {}) {
    super(options);
    this.analyticsMetrology = new AnalyticsMetrologyClient(this);
    this.assets = new AssetsClient(this);
    this.authUsers = new AuthUsersClient(this);
    this.chat = new ChatClient(this);
    this.compliance = new ComplianceClient(this);
    this.crq = new CrqClient(this);
    this.ebiosRm = new EbiosRmClient(this);
    this.evidence = new EvidenceClient(this);
    this.frameworksLibraries = new FrameworksLibrariesClient(this);
    this.governance = new GovernanceClient(this);
    this.incidents = new IncidentsClient(this);
    this.integrations = new IntegrationsClient(this);
    this.privacy = new PrivacyClient(this);
    this.resilience = new ResilienceClient(this);
    this.riskManagement = new RiskManagementClient(this);
    this.securityFindings = new SecurityFindingsClient(this);
    this.settings = new SettingsClient(this);
    this.tasksTimeline = new TasksTimelineClient(this);
    this.thirdParty = new ThirdPartyClient(this);
  }
}

export { AnalyticsMetrologyClient } from './analyticsMetrology.js';
export { AssetsClient } from './assets.js';
export { AuthUsersClient } from './authUsers.js';
export { ChatClient } from './chat.js';
export { ComplianceClient } from './compliance.js';
export { CrqClient } from './crq.js';
export { EbiosRmClient } from './ebiosRm.js';
export { EvidenceClient } from './evidence.js';
export { FrameworksLibrariesClient } from './frameworksLibraries.js';
export { GovernanceClient } from './governance.js';
export { IncidentsClient } from './incidents.js';
export { IntegrationsClient } from './integrations.js';
export { PrivacyClient } from './privacy.js';
export { ResilienceClient } from './resilience.js';
export { RiskManagementClient } from './riskManagement.js';
export { SecurityFindingsClient } from './securityFindings.js';
export { SettingsClient } from './settings.js';
export { TasksTimelineClient } from './tasksTimeline.js';
export { ThirdPartyClient } from './thirdParty.js';
