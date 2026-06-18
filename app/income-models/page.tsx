import type { Metadata } from "next";
import Link from "next/link";
import Signal from "@/components/Signal";
import SectionHead from "@/components/SectionHead";
import { incomeCategories, incomeModels } from "@/lib/incomeModels";

export const metadata: Metadata = {
  title: "Income Registry",
  description:
    "A structured registry of online and local income models with verification status, starting requirements, main risks, and sober verdicts.",
};

export default function IncomeModelsPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Income registry</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            Income models organized by mechanism, proof signal, and risk.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            This registry lists practical service models, smartphone work, digital tasks, resale pathways, and high-risk claims. Each entry is a briefing record, not an income promise.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-5">
          {incomeCategories.map((category) => (
            <a key={category} href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="focusable rounded-md border border-line bg-surface p-4 font-mono text-[11px] uppercase tracking-[0.12em] text-slate hover:bg-paper hover:text-ink">
              {category}
            </a>
          ))}
        </div>
      </section>

      {incomeCategories.map((category, index) => {
        const models = incomeModels.filter((model) => model.category === category);
        return (
          <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className={index % 2 === 0 ? "border-y border-line bg-surface py-16 md:py-20" : "py-16 md:py-20"}>
            <div className="desk-wrap">
              <SectionHead
                index={String(index + 1).padStart(2, "0")}
                eyebrow="Registry category"
                title={category}
                lead="Cards in this section are arranged as model briefs. Open each record to see the mechanism, tools, risks, proof signals, and failure points."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {models.map((model) => (
                  <Link key={model.slug} href={model.detailPath} className="focusable flex h-full flex-col rounded-md border border-line bg-paper p-6 transition-colors hover:bg-surface">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[12px] text-slate">{model.code}</span>
                      <Signal kind={model.status} />
                    </div>
                    <h2 className="mt-4 font-display text-xl font-medium text-ink">{model.title}</h2>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink/70">{model.summary}</p>
                    <dl className="mt-5 space-y-3 border-t border-line pt-4 text-[13px] leading-relaxed">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">Realistic starting requirement</dt>
                        <dd className="mt-1 text-ink/75">{model.startingTools.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">Main risk</dt>
                        <dd className="mt-1 text-ink/75">{model.mainRisk}</dd>
                      </div>
                    </dl>
                    <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-verified">Open detail page →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
