import type { Metadata } from "next";
import Link from "next/link";
import Signal from "@/components/Signal";
import SectionHead from "@/components/SectionHead";
import { proofSignals } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proof Signals",
  description:
    "How users can judge whether an income model has evidence, including Verified, Under Test, Caution, and Flagged classifications.",
};

const evidenceQuestions = [
  "Who pays, and for what exact value?",
  "Is there a real product, service, asset, task, or lawful business process?",
  "What tools, skills, trust, and capital are required before the first result?",
  "Can the claim be tested small without paying the promoter?",
  "What failure point would make the model stop working?",
  "Is the operator identity clear and accountable?",
  "Are screenshots and testimonials independently checkable?",
  "Does the model still make sense without recruiting new participants?",
];

export default function ProofSignalsPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Proof signals</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            How to judge whether an income model has evidence.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            Proof is not the same as excitement. A useful model must reveal its mechanism, required inputs, limits, and failure points.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <SectionHead index="01" eyebrow="Classification" title="The four proof signals" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {proofSignals.map((signal) => (
            <article key={signal.kind} className="bg-paper p-7">
              <Signal kind={signal.kind} />
              <h2 className="mt-4 font-display text-xl font-medium text-ink">{signal.name}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{signal.meaning}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap">
          <SectionHead index="02" eyebrow="Evidence questions" title="Ask these before trusting the claim" />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {evidenceQuestions.map((question, index) => (
              <li key={question} className="bg-paper p-6">
                <span className="font-mono text-[12px] text-verified">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/78">{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="rounded-md border border-line bg-ink p-8 text-paper md:p-10">
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug">
            The strongest proof is not a screenshot. It is a clear mechanism that can be tested, repeated, limited, and explained.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/income-models" className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">View registry</Link>
            <Link href="/methodology" className="focusable inline-flex items-center rounded-sm border border-paper/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:border-paper/60">Read methodology</Link>
          </div>
        </div>
      </section>
    </>
  );
}
