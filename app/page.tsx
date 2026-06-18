import Link from "next/link";
import Signal from "@/components/Signal";
import SectionHead from "@/components/SectionHead";
import { fieldTests } from "@/lib/fieldTests";
import { incomeModels } from "@/lib/incomeModels";
import { playbooks } from "@/lib/playbooks";
import { scamSignals } from "@/lib/scamSignals";
import { proofSignals, site } from "@/lib/site";

const whatItIs = [
  "an income literacy desk",
  "a verified income model registry",
  "a field-testing platform",
  "an anti-scam education system",
  "a local business services guide",
  "a proof-based opportunity briefing platform",
];

const whatItIsNot = [
  "not a get-rich-quick platform",
  "not a betting, crypto, forex, or gambling scheme",
  "not a promise of guaranteed income",
  "not financial advice",
  "not a marketplace for illegal work",
  "not a substitute for personal judgment, skill-building, or lawful business practice",
];

const methodologySteps = [
  "collect the claim",
  "identify the income mechanism",
  "check required skills, tools, and capital",
  "look for proof signals",
  "test where possible",
  "record failure points",
  "publish a sober verdict",
  "avoid guaranteed income language",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-ink text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="desk-wrap relative py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="eyebrow text-verified">Public-interest income desk</span>
            <span className="h-px w-10 bg-paper/25" />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/55">
              Judgment around income claims
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl font-display text-[2.65rem] font-medium leading-[1.06] tracking-[-0.02em] md:text-[4.2rem]">
            Realistic income literacy for the smartphone economy.
          </h1>
          <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-paper/75 md:text-[20px]">
            Verified Income Desk studies online and local income models, tests claims where possible, identifies scam patterns, and publishes sober earning playbooks for people who need opportunity without illusion.
          </p>
          <p className="mt-5 max-w-2xl border-l border-verified/60 pl-5 text-[15px] leading-relaxed text-paper/65">
            {site.doctrine}
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Open the Income Registry", "/income-models"],
              ["Submit an Income Claim", "/submit-claim"],
              ["Read Scam Signals", "/anti-scam-notes"],
              ["Start a Field Test", "/field-tests"],
            ].map(([label, href], i) => (
              <Link
                key={label}
                href={href}
                className={i === 0 ? "focusable inline-flex items-center justify-center rounded-sm bg-verified px-5 py-3 text-center font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-verified/90" : "focusable inline-flex items-center justify-center rounded-sm border border-paper/25 px-5 py-3 text-center font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:border-paper/60 hover:bg-paper/5"}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-paper/12 pt-7 sm:grid-cols-4">
            {proofSignals.map((signal) => (
              <div key={signal.kind}>
                <Signal kind={signal.kind} />
                <p className="mt-2 text-[13px] leading-snug text-paper/55">{signal.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="desk-wrap py-20 md:py-24">
        <SectionHead
          index="01"
          eyebrow="Scope of the desk"
          title="What this platform is — and what it is not"
          lead="The boundary is part of the product. Verified Income Desk is built to reduce confusion around earning claims, not to sell excitement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-verified/30 bg-surface p-7">
            <Signal kind="verified" label="What it is" />
            <ul className="mt-5 space-y-3.5">
              {whatItIs.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink/85">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-verified" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-flag/30 bg-surface p-7">
            <Signal kind="flag" label="What it is not" />
            <ul className="mt-5 space-y-3.5">
              {whatItIsNot.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink/85">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-flag" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="02"
            eyebrow="Income model registry"
            title="A registry of income claims, mechanisms, and risk signals"
            lead="Each card records the mechanism, starting requirement, main risk, and current verification status. A label is not a promise; it is a reading of available evidence and limitations."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {incomeModels.map((model) => (
              <Link key={model.slug} href={model.detailPath} className="focusable group block bg-paper p-6 transition-colors hover:bg-surface">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[12px] text-slate">{model.code}</span>
                  <Signal kind={model.status} />
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">{model.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{model.summary}</p>
                <dl className="mt-5 space-y-2 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.08em]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate">Starting requirement</dt>
                    <dd className="text-right text-ink">{model.startingTools[0]}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate">Main risk</dt>
                    <dd className="max-w-[12rem] text-right normal-case tracking-normal text-ink/75">{model.mainRisk}</dd>
                  </div>
                </dl>
                <span className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.12em] text-verified">
                  Open detail page →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="desk-wrap py-20 md:py-24">
        <SectionHead
          index="03"
          eyebrow="Proof signals"
          title="A four-label classification system"
          lead="The desk separates a working mechanism from a sales pitch by looking for evidence, limits, repeatability, and failure points."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {proofSignals.map((signal) => (
            <div key={signal.kind} className="bg-paper p-7">
              <Signal kind={signal.kind} />
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{signal.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{signal.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-paper md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="04"
            eyebrow="Field tests"
            title="Small, documented experiments — clearly labeled"
            lead="Verified Income Desk tests models through bounded field experiments where lawful and possible. The cards below are sample formats or prototype evidence logs, not claims that a real test has already happened."
            inverse
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {fieldTests.slice(0, 4).map((test) => (
              <article key={test.testCode} className="rounded-md border border-line-dark bg-ink-2 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-paper/55">{test.testCode}</span>
                  <Signal kind={test.status} label={test.label} />
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-paper">{test.modelTested}</h3>
                <dl className="mt-5 grid gap-3 text-[14px] leading-relaxed text-paper/72">
                  <div><dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/42">Test period</dt><dd>{test.testPeriod}</dd></div>
                  <div><dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/42">Starting tools</dt><dd>{test.startingTools}</dd></div>
                  <div><dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/42">Time required</dt><dd>{test.timeRequired}</dd></div>
                  <div><dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/42">Result</dt><dd>{test.result}</dd></div>
                  <div><dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/42">What failed</dt><dd>{test.whatFailed}</dd></div>
                  <div><dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/42">What cannot yet be verified</dt><dd>{test.cannotVerify}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="desk-wrap py-20 md:py-24">
        <SectionHead
          index="05"
          eyebrow="Anti-scam notes"
          title="Common red flags in income claims"
          lead="Most harmful income claims repeat familiar structures. The safest habit is to identify the mechanism before you consider the reward."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scamSignals.map((signal, index) => (
            <article key={signal.title} className="rounded-md border border-line bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-flag/10 font-mono text-[11px] text-flag">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium text-ink">{signal.title}</h3>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{signal.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20 md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="06"
            eyebrow="Smartphone economy"
            title="Phone-first opportunity needs stricter judgment"
            lead="Many people in Nigeria and the wider Global South have a phone and data before they have a laptop, office, capital, or formal employment. That reality deserves careful income literacy, not fantasy."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Phone before office", "Verified Income Desk studies which income models can realistically begin from a smartphone, and which ones require more tools, skill, trust, or capital."],
              ["Mechanism before promise", "A phone can record, communicate, publish, research, sell, and document. But the income mechanism must still be clear."],
              ["Tools have limits", "Some work can start on a phone but becomes serious only with better equipment, records, delivery discipline, and trust."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-md border border-line bg-paper p-6">
                <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="desk-wrap py-20 md:py-24">
        <SectionHead
          index="07"
          eyebrow="Methodology preview"
          title="How the desk reads an income claim"
          lead="The method is designed to slow the claim down until its mechanism, limits, cost, risk, and evidence become visible."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {methodologySteps.map((step, index) => (
            <li key={step} className="bg-paper p-6">
              <span className="font-mono text-[12px] text-verified">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/78">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-surface py-20 md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="08"
            eyebrow="Starter playbooks"
            title="Small tests before serious commitment"
            lead="The playbooks translate a model into a narrow 7-day experiment. They are not outcome promises; they are evidence-gathering formats."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {playbooks.map((playbook) => (
              <Link key={playbook.slug} href={`/starter-playbooks#${playbook.slug}`} className="focusable block rounded-md border border-line bg-paper p-6 transition-colors hover:bg-surface">
                <h3 className="font-display text-lg font-medium text-ink">{playbook.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{playbook.summary}</p>
                <span className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.12em] text-verified">Open playbook →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="desk-wrap py-20 md:py-24">
        <div className="rounded-md border border-line bg-ink p-8 text-paper md:p-12">
          <p className="max-w-3xl font-display text-3xl font-medium leading-tight md:text-[2.8rem]">
            Do not follow income claims blindly. Test the mechanism, check the proof, understand the risk, and start small.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/submit-claim" className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-verified/90">
              Submit a Claim
            </Link>
            <Link href="/income-models" className="focusable inline-flex items-center rounded-sm border border-paper/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:border-paper/60">
              View the Registry
            </Link>
            <Link href="/methodology" className="focusable inline-flex items-center rounded-sm border border-paper/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:border-paper/60">
              Read the Methodology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
