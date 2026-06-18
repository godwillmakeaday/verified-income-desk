import type { Metadata } from "next";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { playbooks } from "@/lib/playbooks";

export const metadata: Metadata = {
  title: "Starter Playbooks",
  description:
    "Practical, low-hype 7-day starting guides for testing selected income models with evidence collection and clear stop rules.",
};

export default function StarterPlaybooksPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Starter playbooks</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            Seven-day tests for learning before committing.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            These playbooks are practical evidence-gathering guides. They are designed to produce a clearer reading of the model, not a promised income outcome.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <SectionHead index="01" eyebrow="Initial playbooks" title="Start small, record honestly, stop when the evidence says stop" />
        <div className="mt-12 grid gap-8">
          {playbooks.map((playbook, index) => (
            <article key={playbook.slug} id={playbook.slug} className="scroll-mt-24 rounded-md border border-line bg-surface p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[12px] text-verified">PB-{String(index + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">{playbook.model}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium text-ink">{playbook.title}</h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink/75">{playbook.summary}</p>
              <div className="mt-7 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <ol className="space-y-px overflow-hidden rounded-md border border-line bg-line">
                  {playbook.days.map((day, dayIndex) => (
                    <li key={day} className="grid grid-cols-[56px_1fr] gap-4 bg-paper p-5">
                      <span className="font-display text-2xl text-verified/45">{String(dayIndex + 1).padStart(2, "0")}</span>
                      <span className="text-[15px] leading-relaxed text-ink/78">{day}</span>
                    </li>
                  ))}
                </ol>
                <div className="grid gap-4">
                  <div className="rounded-md border border-line bg-paper p-5">
                    <h3 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Evidence to collect</h3>
                    <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink/75">
                      {playbook.evidenceToCollect.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-md border border-caution/30 bg-paper p-5">
                    <h3 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Stop rule</h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-ink/75">{playbook.stopRule}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap rounded-md border border-line bg-paper p-8 md:p-10">
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink">
            A playbook is successful when it produces better judgment, even where the model is rejected.
          </p>
          <Link href="/field-tests" className="focusable mt-7 inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">
            Turn a playbook into a field-test log
          </Link>
        </div>
      </section>
    </>
  );
}
