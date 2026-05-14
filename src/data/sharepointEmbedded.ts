import {
  AppWindow,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Coins,
  FileLock2,
  FileStack,
  FolderGit2,
  KeyRound,
  Landmark,
  Link2,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import directAccessImage from "../../content/img/DirectAccessShare.jpg";
import keyComponentsImage from "../../content/img/SPEKeyComponents.jpg";
import type {
  Callout,
  ComparisonRow,
  ConceptItem,
  GlossaryItem,
  HeroContent,
  MisconceptionItem,
  PermissionLayer,
  ReadingGroup,
  TimelinePhase,
} from "../types";

export const heroContent: HeroContent = {
  eyebrow: "SharePoint Embedded 核心概念指南",
  title: "把 SharePoint 的文件能力嵌入你自己的应用，而不是嵌入一个站点。",
  subtitle: "面向开发者、管理员与技术决策者的 5-10 分钟理解版",
  summary:
    "SharePoint Embedded 是纯 API 驱动的文件与文档管理平台：数据仍驻留在客户的 Microsoft 365 租户内，但文件体验、权限编排与业务界面由你的应用主导。",
  tags: ["纯 API", "数据驻留客户租户", "独立分区与合规能力"],
  quickFacts: [
    { label: "访问入口", value: "Microsoft Graph" },
    { label: "安全边界", value: "Container" },
    { label: "部署关系", value: "Owning Tenant -> Consuming Tenant" },
  ],
};

export const conceptItems: ConceptItem[] = [
  {
    title: "Container",
    description: "SPE 最基本的存储单元，也是安全与合规的边界，可类比仅通过 API 访问的文档库。",
    emphasis: "每个 Container 可独立设置成员权限并存储多层级文件。",
    icon: FileStack,
  },
  {
    title: "Container Type",
    description: "Container 的配置模板，定义访问授权、计费归属与共享模式、存储上限等统一设置。",
    emphasis: "每个 Container 实例都携带不可变的 ContainerTypeID。",
    icon: Blocks,
  },
  {
    title: "Owning Application",
    description: "与 Container Type 1:1 绑定的拥有应用，负责管理该类型下所有 Container 并声明所需 Graph 权限。",
    emphasis: "默认拥有最高权限，并承担标准计费场景下的责任。",
    icon: BriefcaseBusiness,
  },
  {
    title: "Guest Application",
    description: "经 Owning Application 授权后访问 Container 的其他应用，适用于跨 App 的监控、合规或协同场景。",
    icon: AppWindow,
  },
];

export const architectureHighlights = [
  {
    title: "Owning Tenant",
    body: "开发并管理 App 与 Container Type 的租户，通常对应 ISV 或企业开发团队所在的 Microsoft 365 租户。",
    icon: Landmark,
  },
  {
    title: "Consuming Tenant",
    body: "实际使用应用与存储文件的客户租户，所有 Container 与内容都存储在这里。",
    icon: UsersRound,
  },
  {
    title: "Container Type Registration",
    body: "部署到客户租户后的注册实例，用来承载 App 对该 Container Type 下所有 Container 的访问与计费关系。",
    icon: Network,
  },
];

export const architectureCallouts: Callout[] = [
  {
    title: "单租户与多租户边界",
    body: "同一个租户可以同时充当 Owning Tenant 与 Consuming Tenant；若两者不同，Owning Application 必须是 Multi Tenant。",
  },
  {
    title: "部署前提",
    body: "跨租户部署时，需要先在 Consuming Tenant 安装 Owning app 的 service principal 并完成必要 consent，然后才能注册 Container Type。",
  },
];

export const permissionLayers: PermissionLayer[] = [
  {
    layer: "第一层",
    title: "Microsoft Graph API 权限",
    description: "App 在 Azure AD App Registration 中声明的核心 Graph 权限。",
    notes: "创建 Container Type 后，应移除 FileStorageContainerType.Manage.All 以避免过度权限担忧。",
    items: [
      { name: "FileStorageContainerType.Manage.All", detail: "创建和管理 Container Type，仅 Owning Tenant 需要。" },
      { name: "FileStorageContainerTypeReg.Selected", detail: "在 Consuming Tenant 注册 Container Type。" },
      { name: "FileStorageContainer.Selected", detail: "访问 Container 与内容，Owning 和 Consuming Tenant 都需要。" },
    ],
  },
  {
    layer: "第二层",
    title: "Container Type 权限",
    description: "通过 Container Type Registration API 注册后，决定 App 对该类型下所有 Container 能做什么。",
    items: [
      { name: "ReadContent / WriteContent", detail: "读写 Container 内容。" },
      { name: "Create / Delete", detail: "创建与删除 Container。" },
      { name: "ManagePermissions", detail: "管理 Container 成员。" },
      { name: "Full", detail: "拥有全部权限。" },
    ],
  },
  {
    layer: "第三层",
    title: "Container 权限（用户权限）",
    description: "当 App 代表用户访问 Container 时，用户本身必须是该 Container 的成员。",
    notes: "通过 Delegated 调用创建 Container 的用户会自动分配 Owner 角色。",
    items: [
      { name: "Reader", detail: "只读 Container 属性与内容。" },
      { name: "Writer", detail: "Reader 能力 + 创建、更新、删除内容。" },
      { name: "Manager", detail: "Writer 能力 + 管理 Container 成员。" },
      { name: "Owner", detail: "Manager 能力 + 删除 Container。" },
    ],
  },
];

export const accessModeRows = [
  {
    mode: "Delegated（委托 / 用户代理）",
    bestFor: "面向登录用户的主业务流程",
    permission: "有效权限 = App 权限 ∩ 用户权限",
    audit: "可审计到具体用户",
  },
  {
    mode: "App-only（纯应用）",
    bestFor: "后台任务与服务端自动化",
    permission: "直接使用 Service Principal，不受 Container 权限限制",
    audit: "审计粒度较低",
  },
];

export const sharingFlow = [
  {
    title: "默认继承",
    description: "Container 内内容默认继承父级权限，继承链为 Container -> Folder -> File，且不可打破。",
    icon: FolderGit2,
  },
  {
    title: "Additive Permission",
    description: "可为特定文件或文件夹追加权限，但不能对 Container 本身添加。",
    icon: Link2,
  },
  {
    title: "Delegated-only",
    description: "附加权限只能通过 Delegated 模式设置，且用户仍需通过 App 访问共享内容。",
    icon: KeyRound,
  },
];

export const sharingCallouts: Callout[] = [
  {
    title: "共享模式限制",
    body: "当 isSharingRestricted 为 false 时，任何拥有编辑权限的成员都可为文件添加新权限；为 true 时，仅 Owner 和 Manager 可以操作。",
  },
  {
    title: "文档未表示支持 Shareable Link",
    body: "源文档明确指出：没有文档表示 SPE 支持 Shareable Link，且 createLink API 经验证会报错。",
    tone: "warning",
  },
];

export const billingCards = [
  {
    title: "Trial",
    code: "trial",
    summary: "开发验证与功能评估",
    limits: ["最多 5 个 Container", "每个 1 GB", "30 天过期", "仅限本租户"],
    icon: BadgeCheck,
  },
  {
    title: "Standard",
    code: "standard",
    summary: "生产环境，费用由 Owning Tenant 承担",
    limits: ["费用绑定 Owning Tenant Azure 订阅", "每租户最多同时 25 个 Standard Container Type"],
    icon: Coins,
  },
  {
    title: "Passthrough",
    code: "directToCustomer",
    summary: "生产环境，费用由 Consuming Tenant 承担",
    limits: ["客户租户在 M365 Admin Center 设置计费", "与其他类型互相不可转换"],
    icon: ShieldCheck,
  },
];

export const pricingFacts = [
  "Storage: $0.00667 per GB/day ($0.20 per GB/month)",
  "Graph API transactions: $0.0005 per API call",
  "Egress: $0.05 per GB",
  "SPE 存储不占用客户已有的 M365 SharePoint 存储配额。",
];

export const implementationPhases: TimelinePhase[] = [
  {
    title: "阶段一",
    subtitle: "开发准备",
    steps: [
      "在 Azure AD 中注册 App，配置所需 Graph 权限。",
      "在 Owning Tenant 创建 Container Type（Trial 可快速验证）。",
      "在本地注册 Container Type。",
    ],
    note: "国际版推荐使用 SPE VS Code Extension；21v 版在源文档中标记为“待验证，或许须改 url”。",
  },
  {
    title: "阶段二",
    subtitle: "代码开发",
    steps: [
      "通过 Microsoft Graph API 实现 Container 的创建、查询与文件操作。",
      "使用 MSAL 处理认证流程。",
      "实现 OBO（On-Behalf-Of）流程让后端代表用户调用 Graph API。",
    ],
  },
  {
    title: "阶段三",
    subtitle: "部署上线",
    steps: [
      "将应用清单权限调整为 Consuming Tenant 所需的最小集，并移除 FileStorageContainerType.Manage.All。",
      "在 Consuming Tenant 获取管理员 Admin Consent。",
      "调用 Container Type Registration API 注册 Container Type。",
      "如为 Passthrough 计费，引导客户管理员在 M365 Admin Center 设置计费。",
    ],
  },
];

export const comparisonRows: ComparisonRow[] = [
  { dimension: "访问方式", sharePoint: "站点 UI + API 双通道", spe: "纯 API（Microsoft Graph），无站点 UI" },
  { dimension: "方案架构", sharePoint: "SharePoint Site -> Document Library", spe: "Application -> Container Type -> Container" },
  { dimension: "存储配额", sharePoint: "计入 M365 SharePoint 配额", spe: "独立按量计费，不占 M365 配额" },
  { dimension: "权限管理", sharePoint: "Site、Library、Item 权限 + Link", spe: "Graph、Container Type、Container 权限 + Additive Permission" },
  { dimension: "合规能力", sharePoint: "全部 M365 Purview 能力", spe: "同样享有 eDiscovery、DLP、审计、保留策略、敏感度标签等" },
  { dimension: "协作", sharePoint: "Office Online + Desktop 完整体验", spe: "同样支持" },
  { dimension: "管理员", sharePoint: "SharePoint Administrator", spe: "SharePoint Embedded Administrator" },
  { dimension: "用户许可证", sharePoint: "访问者通常需要 M365 许可证", spe: "访问者通常不需要 M365 许可证（少数操作例外）" },
];

export const misconceptions: MisconceptionItem[] = [
  {
    myth: "SPE 的文件存在开发者的租户里",
    reality: "文件始终存储在 Consuming Tenant，开发者的 App 只拥有 API 访问权，不持有数据。",
  },
  {
    myth: "一个 App 可以创建多个 Container Type",
    reality: "App 与 Container Type 是严格 1:1 关系。",
  },
  {
    myth: "Trial Container Type 可以升级为 Standard",
    reality: "不可以；Trial 过期后必须删除并重新创建 Standard Container Type。",
  },
  {
    myth: "App-only 和 Delegated 的权限效果一样",
    reality: "App-only 不受 Container 权限限制；Delegated 的有效权限是 App 权限和 Container 权限的交集。",
  },
  {
    myth: "SPE 存储算在 M365 的 SharePoint 配额里",
    reality: "SPE 有独立的 Azure 按量计费，不计入 M365 SharePoint 存储配额。",
  },
  {
    myth: "用户需要 Office 许可证才能在 SPE 中协作",
    reality: "大多数操作不需要 Office 许可证，但少数功能目前仍依赖许可证。",
  },
];

export const glossaryItems: GlossaryItem[] = [
  { term: "SharePoint Embedded (SPE)", meaning: "SharePoint 嵌入式", description: "微软纯 API 文件管理平台。" },
  { term: "Container", meaning: "容器", description: "SPE 最小存储与安全边界单元。" },
  { term: "Container Type", meaning: "容器类型", description: "定义应用与 Container 集合之间关系的资源。" },
  { term: "Owning Tenant", meaning: "拥有租户 / 开发租户", description: "创建 Container Type 的租户。" },
  { term: "Consuming Tenant", meaning: "消费租户 / 客户租户", description: "使用应用并存储文件的租户。" },
  { term: "Owning Application", meaning: "拥有应用", description: "创建和管理 Container Type 的 Azure AD 应用。" },
  { term: "Guest Application", meaning: "来宾应用", description: "被授权访问他人 Container Type 的应用。" },
  { term: "Microsoft Graph", meaning: "N/A", description: "SPE 所有操作的统一 API 入口。" },
  { term: "Delegated", meaning: "委托访问 / 用户代理", description: "应用代表登录用户操作。" },
  { term: "App-only", meaning: "纯应用访问", description: "应用用自身身份直接操作。" },
  { term: "OBO", meaning: "代理流程", description: "后端用前端令牌换取 Graph 令牌的认证模式。" },
  { term: "Additive Permission", meaning: "附加权限", description: "在继承权限之上扩展的额外权限。" },
  { term: "Admin Consent", meaning: "管理员同意", description: "租户管理员批准应用所请求的权限。" },
  { term: "PAYG", meaning: "按量付费", description: "SPE 的计费模式。" },
];

export const readingGroups: ReadingGroup[] = [
  {
    title: "入门与总览",
    links: [
      { label: "Overview of SharePoint Embedded", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/overview" },
      { label: "SharePoint Embedded app architecture", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/development/app-architecture" },
      { label: "SharePoint Embedded for VS Code（快速试玩）", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/getting-started/spembedded-for-vscode" },
    ],
  },
  {
    title: "认证与权限",
    links: [
      { label: "Authentication and authorization", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/development/auth" },
      { label: "Sharing and permissions", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/development/sharing-and-perm" },
      { label: "Register container type application permissions", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/getting-started/register-api-documentation" },
    ],
  },
  {
    title: "Container Type 与计费",
    links: [
      { label: "Container types", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/getting-started/containertypes" },
      { label: "Billing models", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/administration/billing/billing" },
      { label: "Limits and calling patterns", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/development/limits-calling" },
    ],
  },
  {
    title: "管理与运维",
    links: [
      { label: "Developer Admin", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/administration/developer-admin/dev-admin" },
      { label: "Consuming Tenant Admin", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta" },
      { label: "Container management in PowerShell", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell" },
      { label: "Container management in SharePoint Admin Center", href: "https://learn.microsoft.com/en-us/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaUX" },
    ],
  },
  {
    title: "开发教程",
    links: [
      { label: "Microsoft Learning: SPE overview & configuration", href: "https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-setup" },
      { label: "Microsoft Learning: SPE building applications", href: "https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-create-app" },
    ],
  },
];

export const heroDiagram = [
  { label: "Owning Tenant", icon: Landmark },
  { label: "Application", icon: BriefcaseBusiness },
  { label: "Container Type", icon: Blocks },
  { label: "Consuming Tenant", icon: UsersRound },
  { label: "Container", icon: FileLock2 },
  { label: "Files / Permissions", icon: ShieldCheck },
];

export const pageCallouts: Callout[] = [
  {
    title: "一句话理解",
    body: "SharePoint Embedded 是无界面 SharePoint：能力来自 Microsoft 365，体验与业务流程属于你的 App。",
  },
  {
    title: "关键点",
    body: "SPE 中的文档始终驻留在客户（消费方）的 M365 租户，开发者的 App 只负责读写而非持有数据。",
  },
];

export const powerShellCommand =
  "Add-SPOContainerTypeBilling –ContainerTypeId <ID> -AzureSubscriptionId <SubId> -ResourceGroup <RG> -Region <Region>";

export const evidenceImages = {
  keyComponents: keyComponentsImage,
  directAccess: directAccessImage,
};
