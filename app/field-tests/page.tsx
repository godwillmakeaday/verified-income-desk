import type { Metadata } from "next";
import Link from "next/link";
import Signal from "@/components/Signal";
import SectionHead from "@/components/SectionHead";
import { fieldTests } from "@/lib/fieldTests";

export const metadata: Metadata = {
  title: "Field Tests",
  description:
    "Field-test log formats for Verified Income Desk. Sample and prototype logs are clearly labeled and not presented as real completed tests.",
};

export default function FieldTestsPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Field tests</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            Evidence logs for small, documented income-model tests.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            Field tests are meant to record what happened, what failed, and what remains unverified. The current logs below are samples or prototypes unless clearly labeled as real.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="rounded-md border border-caution/40 bg-caution/[0.06] p-6">
          <p className="text-[15px] leading-relaxed text-ink/80">
            Important: sample field-test cards are not evidence that a test happened. They are formats for future documentation and are labeled accordingly.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {fieldTests.map((test) => (
            <article key={test.testCode} className="rounded-md border border-line bg-surface p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate">{test.testCode}</span>
                <Signal kind={test.status} label={test.label} />
              </div>
              <h2 className="mt-4 font-display text-xl font-medium text-ink">{test.modelTested}</h2>
              <dl className="mt-5 grid gap-4 text-[14px] leading-relaxed text-ink/75">
                {[
                  ["Test period", test.testPeriod],
                  ["Starting tools", test.startingTools],
                  ["Time required", test.timeRequired],
                  ["Result", test.result],
                  ["What failed", test.whatFailed],
                  ["What cannot yet be verified", test.cannotVerify],
                ].map(([key, value]) => (
                  <div key={key} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">{key}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap">
          <SectionHead index="01" eyebrow="Field-test standard" title="What every future test should record" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
            {[
              "Claim tested",
              "Starting tools",
              "Time and cost",
              "Attempts made",
              "Replies or market response",
              "Result and failure points",
              "What cannot yet be verified",
              "Status and next action",
              "No-guarantee notice",
            ].map((item) => (
              <div key={item} className="bg-paper p-5 font-mono text-[12px] uppercase tracking-[0.1em] text-slate">
                {item}
              </div>
            ))}
          </div>
          <Link href="/starter-playbooks" className="focusable mt-8 inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">
            Open starter playbooks
          </Link>
        </div>
      </section>
    </>
  );
}
