import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Signal from "@/components/Signal";
import SectionHead from "@/components/SectionHead";
import { getIncomeModel, incomeModels } from "@/lib/incomeModels";

export function generateStaticParams() {
  return incomeModels
    .filter((model) => model.slug !== "local-business-website-services")
    .map((model) => ({ slug: model.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const model = getIncomeModel(params.slug);
  if (!model) return { title: "Income Model" };
  return {
    title: model.title,
    description: model.summary,
  };
}

export default function IncomeModelDetailPage({ params }: { params: { slug: string } }) {
  const model = getIncomeModel(params.slug);
  if (!model || model.slug === "local-business-website-services") notFound();

  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <nav className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50" aria-label="Breadcrumb">
            <Link href="/" className="focusable hover:text-paper">Desk</Link>
            <span aria-hidden>/</span>
            <Link href="/income-models" className="focusable hover:text-paper">Income Registry</Link>
            <span aria-hidden>/</span>
            <span className="text-paper/80">{model.code}</span>
          </nav>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Signal kind={model.status} />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">Model brief</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-[2.35rem] font-medium leading-[1.08] md:text-[3.8rem]">{model.title}</h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/75">{model.summary}</p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <SectionHead index="01" eyebrow="Mechanism" title="What has to be true for this model to work" />
            <p className="mt-6 text-[16px] leading-relaxed text-ink/78">
              This record reads the model by mechanism, not by promotional promise. The question is simple: who pays, what value is delivered, what tools are needed, and where does the model fail?
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-line bg-surface p-6">
                <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Proof signals</h2>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-ink/75">
                  {model.proofSignals.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div className="rounded-md border border-line bg-surface p-6">
                <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Failure points</h2>
                <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-ink/75">
                  {model.failurePoints.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <aside className="rounded-md border border-line bg-surface p-6">
            <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Registry facts</h2>
            <dl className="mt-4 space-y-3 text-[13px] leading-relaxed">
              {[
                ["Status", model.status === "test" ? "Under review" : model.status],
                ["Category", model.category],
                ["Cost level", model.startingCostLevel],
                ["Skill level", model.skillLevel],
                ["Timeframe", model.realisticTimeframe],
                ["Main risk", model.mainRisk],
              ].map(([key, value]) => (
                <div key={key} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">{key}</dt>
                  <dd className="mt-1 text-ink/78">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap grid gap-6 md:grid-cols-3">
          {model.startingTools.map((tool) => (
            <div key={tool} className="rounded-md border border-line bg-paper p-6">
              <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Starting tool</h2>
              <p className="mt-3 font-display text-lg font-medium text-ink">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="rounded-md border border-verified/30 bg-surface p-7">
          <Signal kind={model.status} label="Sober verdict" />
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ink/78">{model.verdict}</p>
          <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-ink/65">
            Evidence not yet verified for any specific user. Use the registry to design a small test, check the proof, and understand the risk before spending serious time or money.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/field-tests" className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">Start a field-test format</Link>
            <Link href="/submit-claim" className="focusable inline-flex items-center rounded-sm border border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink hover:bg-ink hover:text-paper">Submit related claim</Link>
          </div>
        </div>
      </section>
    </>
  );
}
