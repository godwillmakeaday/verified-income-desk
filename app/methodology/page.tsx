import type { Metadata } from "next";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import Signal from "@/components/Signal";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How Verified Income Desk evaluates income claims through claim intake, model classification, proof review, field testing, risk scoring, and publication standards.",
};

const method = [
  {
    title: "Claim intake",
    body:
      "The process begins with the exact claim: what is promised, who is making the claim, where it was found, what payment is requested, and what evidence is offered.",
  },
  {
    title: "Model classification",
    body:
      "The claim is classified by income mechanism: service work, product resale, platform task, content pathway, recruitment structure, deposit scheme, or another identifiable model.",
  },
  {
    title: "Proof review",
    body:
      "The desk looks for observable evidence: real buyers, delivered work, repeatable process, transparent operator identity, clear costs, and verifiable limitations.",
  },
  {
    title: "Field testing",
    body:
      "Where lawful and possible, the model can be tested through a small documented experiment. Sample logs are clearly marked until real evidence is collected.",
  },
  {
    title: "Risk scoring",
    body:
      "Risks are recorded across starting cost, required skill, trust burden, legal boundary, operator transparency, withdrawal risk, and failure points.",
  },
  {
    title: "Limitations",
    body:
      "A model may work in one location and fail in another. A status label does not predict personal earnings. Evidence can be incomplete, local, or time-sensitive.",
  },
  {
    title: "Publication standard",
    body:
      "Briefs are written in sober language. Unverified claims are labeled under review. Prototype logs are not presented as real field results.",
  },
  {
    title: "No-guarantee principle",
    body:
      "Verified Income Desk does not guarantee income, provide financial advice, or endorse illegal, deceptive, or exploitative earning schemes.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Methodology</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            How Verified Income Desk evaluates income claims.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            The method is designed to slow down the promise, identify the mechanism, test what can be tested, and publish the limits before the conclusion.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <SectionHead index="01" eyebrow="Evaluation sequence" title="From claim to sober verdict" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {method.map((item, index) => (
            <article key={item.title} className="bg-paper p-7">
              <span className="font-mono text-[12px] text-verified">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 font-display text-xl font-medium text-ink">{item.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-line bg-paper p-7">
            <Signal kind="test" label="Under review language" />
            <p className="mt-5 text-[16px] leading-relaxed text-ink/78">
              When evidence is incomplete, the page must say so: “Evidence not yet verified,” “Prototype field-test format,” “Under review,” or “Claim not independently confirmed.”
            </p>
          </div>
          <div className="rounded-md border border-line bg-paper p-7">
            <Signal kind="flag" label="Publication boundary" />
            <p className="mt-5 text-[16px] leading-relaxed text-ink/78">
              The desk does not publish income claims as instructions to participate. It publishes judgment tools: mechanism, proof, risk, failure points, and limitations.
            </p>
          </div>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="rounded-md border border-line bg-ink p-8 text-paper md:p-10">
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug">
            A claim is not credible because it is exciting. It becomes useful only when the mechanism, evidence, cost, limits, and risk can be seen.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/submit-claim" className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">Submit a claim</Link>
            <Link href="/proof-signals" className="focusable inline-flex items-center rounded-sm border border-paper/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:border-paper/60">Read proof signals</Link>
          </div>
        </div>
      </section>
    </>
  );
}
