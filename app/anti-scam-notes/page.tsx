import type { Metadata } from "next";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { scamSignals } from "@/lib/scamSignals";

export const metadata: Metadata = {
  title: "Anti-Scam Notes",
  description:
    "Educational notes on common scam patterns in income claims, including payment-before-work, fixed-return promises, recruitment dependence, and withdrawal delays.",
};

export default function AntiScamNotesPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Anti-scam notes</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            Scam patterns are usually visible before money is lost.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            These notes are educational, not alarmist. They teach users to read the structure of a claim before responding to the reward.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <SectionHead index="01" eyebrow="Red flags" title="Questions to ask before believing an income claim" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scamSignals.map((signal, index) => (
            <article key={signal.title} className="rounded-md border border-line bg-surface p-6">
              <span className="font-mono text-[12px] text-flag">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 font-display text-xl font-medium text-ink">{signal.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/72">{signal.summary}</p>
              <p className="mt-4 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
                Test question
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/80">{signal.question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap grid gap-6 md:grid-cols-3">
          {[
            ["Slow the claim down", "Do not accept compressed urgency. A legitimate model can survive careful questions."],
            ["Find the mechanism", "Identify the buyer, product, service, asset, skill, or lawful business process that creates the income."],
            ["Protect the downside", "Start with evidence review before spending money. Avoid deposits where the operator is unclear."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-md border border-line bg-paper p-6">
              <h2 className="font-display text-lg font-medium text-ink">{title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="rounded-md border border-line bg-ink p-8 text-paper md:p-10">
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug">
            If a model leads with reward and hides the work, treat the reward as bait until the mechanism is explained.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/submit-claim" className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">Submit a suspicious claim</Link>
            <Link href="/proof-signals" className="focusable inline-flex items-center rounded-sm border border-paper/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:border-paper/60">Read proof signals</Link>
          </div>
        </div>
      </section>
    </>
  );
}
