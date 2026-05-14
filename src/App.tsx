import {
  ArrowRight,
  Check,
  CircleAlert,
  Coins,
  ExternalLink,
  FileCog,
  Shield,
} from "lucide-react";
import {
  accessModeRows,
  architectureCallouts,
  architectureHighlights,
  billingCards,
  comparisonRows,
  conceptItems,
  evidenceImages,
  glossaryItems,
  heroContent,
  heroDiagram,
  implementationPhases,
  misconceptions,
  pageCallouts,
  permissionLayers,
  powerShellCommand,
  pricingFacts,
  readingGroups,
  sharingCallouts,
  sharingFlow,
} from "./data/sharepointEmbedded";
import type { Callout } from "./types";
import type { ReactNode } from "react";

function SectionShell({
  id,
  kicker,
  title,
  description,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">{kicker}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function CalloutCard({ callout }: { callout: Callout }) {
  const toneClasses =
    callout.tone === "warning"
      ? "border-amber-400/30 bg-amber-500/10"
      : "border-cyan-400/20 bg-white/5";

  return (
    <div className={`rounded-3xl border p-5 backdrop-blur ${toneClasses}`}>
      <div className="flex items-start gap-3">
        {callout.tone === "warning" ? (
          <CircleAlert className="mt-0.5 h-5 w-5 text-amber-300" />
        ) : (
          <Check className="mt-0.5 h-5 w-5 text-cyan-300" />
        )}
        <div>
          <h3 className="text-sm font-semibold text-white">{callout.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{callout.body}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.18),_transparent_20%),linear-gradient(180deg,_#030712_0%,_#08111f_40%,_#020617_100%)]" />
      <div className="fixed inset-0 -z-10 bg-grid-fade bg-[size:42px_42px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.28),transparent_75%)]" />

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-14">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/75">Technical Frontpage</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {heroContent.eyebrow}
              </h1>
            </div>
            <a
              href="#reading"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              跳到官方资料
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,31,0.84))] p-8 shadow-glow backdrop-blur-xl">
              <div className="absolute -left-10 top-0 h-44 w-44 rounded-full bg-cyan-300/12 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <p className="relative text-sm font-medium text-cyan-200">{heroContent.subtitle}</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {heroContent.title}
              </h2>
              <p className="relative mt-6 max-w-2xl text-base leading-8 text-slate-200">{heroContent.summary}</p>

              <div className="relative mt-6 flex flex-wrap gap-3">
                {heroContent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
                {heroContent.quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-sm text-slate-300">{fact.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(8,17,31,0.88))] p-6 shadow-panel">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <p className="text-sm font-medium text-cyan-100">Mental Model</p>
              <div className="mt-6 space-y-4">
                {heroDiagram.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="relative">
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300">Layer {index + 1}</p>
                          <p className="text-base font-semibold text-white">{item.label}</p>
                        </div>
                      </div>
                      {index < heroDiagram.length - 1 ? (
                        <div className="ml-8 h-6 w-px bg-gradient-to-b from-cyan-300/50 to-transparent" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {pageCallouts.map((callout) => (
              <CalloutCard key={callout.title} callout={callout} />
            ))}
          </div>
        </section>

        <SectionShell
          id="concepts"
          kicker="Core Concepts"
          title="核心对象不是很多，但边界非常重要。"
          description="SPE 的理解门槛不在术语数量，而在对象之间的 ownership、权限交集与部署关系。"
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {conceptItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30"
                >
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  {item.emphasis ? <p className="mt-4 text-sm font-medium text-cyan-100">{item.emphasis}</p> : null}
                </article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="architecture"
          kicker="Tenant Model"
          title="这是一个跨租户能力分发模型，而不是站点部署模型。"
          description="Owning Tenant 管理模板与应用；Consuming Tenant 承载内容与客户侧治理。Container Type Registration 连接了两者。"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              {architectureHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="grid gap-4">
                {architectureCallouts.map((callout) => (
                  <CalloutCard key={callout.title} callout={callout} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-panel">
              <img
                src={evidenceImages.keyComponents}
                alt="SPE Key Components 架构图"
                className="h-full max-h-[880px] w-full bg-white object-contain p-3"
              />
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="permissions"
          kicker="Auth & Permissions"
          title="权限问题的本质，是三层授权同时成立。"
          description="Graph 权限、Container Type 权限与 Container 用户权限共同决定了你的应用到底能做什么。"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {permissionLayers.map((layer) => (
              <div key={layer.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                    {layer.layer}
                  </span>
                  <Shield className="h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{layer.description}</p>
                <div className="mt-5 space-y-3">
                  {layer.items.map((item) => (
                    <div key={item.name} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
                {layer.notes ? <p className="mt-5 text-sm leading-6 text-cyan-100">{layer.notes}</p> : null}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">核心关系</p>
            <p className="mt-3 text-2xl font-semibold text-white">完整 App 权限 = Graph API 权限 ∩ Container Type 权限</p>
            <p className="mt-2 text-base text-slate-200">当使用 Delegated 调用时，还要继续与 Container 用户权限取交集。</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-300 md:grid-cols-4">
              <div>访问模式</div>
              <div>适用场景</div>
              <div>权限效果</div>
              <div>审计特点</div>
            </div>
            {accessModeRows.map((row) => (
              <div
                key={row.mode}
                className="grid grid-cols-1 gap-3 border-b border-white/10 px-6 py-5 text-sm text-slate-300 last:border-b-0 md:grid-cols-4 md:gap-6"
              >
                <div className="font-semibold text-white">{row.mode}</div>
                <div>{row.bestFor}</div>
                <div>{row.permission}</div>
                <div>{row.audit}</div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="sharing"
          kicker="Sharing Model"
          title="SPE 允许细粒度共享，但不会打断继承链。"
          description="这部分最容易和普通 SharePoint 体验混淆，因此页面保留了 Direct Access 对照与明确限制。"
        >
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-4">
              {sharingFlow.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="grid gap-4">
                {sharingCallouts.map((callout) => (
                  <CalloutCard key={callout.title} callout={callout} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-panel">
              <img
                src={evidenceImages.directAccess}
                alt="Direct Access 共享权限对照图"
                className="h-full max-h-[760px] w-full bg-white object-contain p-3"
              />
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="billing"
          kicker="Billing"
          title="Container Type 同时决定环境类型、计费方向与一些关键限制。"
          description="页面保留了源文档里的 billingClassification 值、数量限制与价格数字，不做任何推断式包装。"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {billingCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-panel">
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <code className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-cyan-100">
                      {card.code}
                    </code>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.summary}</p>
                  <div className="mt-5 space-y-3">
                    {card.limits.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 text-cyan-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <Coins className="h-5 w-5 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">计费模型</h3>
              </div>
              <div className="mt-5 space-y-3">
                {pricingFacts.map((fact) => (
                  <p key={fact} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-300">
                    {fact}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6">
              <div className="flex items-center gap-3">
                <FileCog className="h-5 w-5 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">Standard 计费绑定命令</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                源文档中的标准计费设置流程明确要求 Owning Tenant 管理员准备 Azure 订阅与资源组，并通过 PowerShell 绑定计费。
              </p>
              <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-cyan-100">
                <code>{powerShellCommand}</code>
              </pre>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="implementation"
          kicker="Implementation Path"
          title="从试跑到上线，路径可以压缩成三个阶段。"
          description="这不是完整教程，而是把原文 10 个关键步骤变成一个更容易交流与评审的项目时间线。"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {implementationPhases.map((phase, index) => (
              <div key={phase.title} className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="absolute left-6 top-6 h-10 w-10 rounded-full border border-cyan-300/20 bg-cyan-300/10 text-center text-sm font-semibold leading-10 text-cyan-100">
                  {index + 1}
                </div>
                <div className="pl-16">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{phase.title}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{phase.subtitle}</h3>
                </div>
                <div className="mt-6 space-y-3">
                  {phase.steps.map((step) => (
                    <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm leading-6 text-slate-300">
                      {step}
                    </div>
                  ))}
                </div>
                {phase.note ? (
                  <div className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-100">
                    {phase.note}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="compare"
          kicker="Compare"
          title="SPE 不是替代 SharePoint，而是把 SharePoint 的能力改造成 API 产品。"
          description="如果要快速判断某个方案是否适合 SPE，最有帮助的往往是和普通 SharePoint 的对照。"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="min-w-[780px]">
              <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200">
                <div>维度</div>
                <div>普通 SharePoint</div>
                <div>SharePoint Embedded</div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/10 px-6 py-5 text-sm leading-7 text-slate-300 last:border-b-0"
                >
                  <div className="font-semibold text-white">{row.dimension}</div>
                  <div>{row.sharePoint}</div>
                  <div>{row.spe}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="pitfalls"
          kicker="Common Mistakes"
          title="多数误判都来自“把 SPE 当成普通 SharePoint 站点能力”。"
          description="这里保留了源文档中的误区与事实对照，适合做团队对齐与方案评审前的快速复盘。"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {misconceptions.map((item) => (
              <div key={item.myth} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-200/85">误区</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.myth}</h3>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/85">事实</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.reality}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="glossary"
          kicker="Glossary"
          title="术语一旦对齐，后续讨论会顺很多。"
          description="这里压缩了原文中的术语速查表，适合作为读完页面后的快速回看区。"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {glossaryItems.map((item) => (
              <div key={item.term} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{item.term}</h3>
                  <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300">
                    {item.meaning}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="reading"
          kicker="Further Reading"
          title="官方资料入口已经按任务场景重新分组。"
          description="继续深入时，建议先按问题类型找入口，而不是直接回到完整文档目录。"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {readingGroups.map((group) => (
              <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>
      </main>
    </div>
  );
}

export default App;
