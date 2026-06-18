import Link from "next/link";
import Signal from "@/components/Signal";
import {
  incomeModels,
  fieldTests,
  proofSignals,
  scamNotes,
  playbooks,
  methodology,
} from "@/lib/site";

function SectionHead({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[12px] text-verified">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink md:text-[2.6rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{lead}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden border-b border-line bg-ink text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="desk-wrap relative py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="eyebrow text-verified">Public-interest desk</span>
            <span className="h-px w-10 bg-paper/25" />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/55">
              Proof over promises
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.12] tracking-[-0.01em] md:text-[3.6rem]">
            Verified Income Desk is a public-interest income literacy platform
            for <span className="text-verified">tested income models</span>,
            realistic digital work pathways, local business service experiments,
            anti-scam education, proof signals, and field-tested earning
            playbooks.
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#income-models"
              className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-verified/90"
            >
              Browse income models
            </Link>
            <Link
              href="#anti-scam"
              className="focusable inline-flex items-center rounded-sm border border-paper/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:border-paper/60"
            >
              Read the anti-scam notes
            </Link>
          </div>

          {/* Live-feeling signal legend — the brand's console */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-paper/12 pt-7 sm:grid-cols-4">
            {proofSignals.map((s) => (
              <div key={s.kind}>
                <Signal kind={s.kind} />
                <p className="mt-2 text-[13px] leading-snug text-paper/55">
                  {s.name === "Verified"
                    ? "Reproduced in the field"
                    : s.name === "Under test"
                    ? "Evidence still forming"
                    : s.name === "Caution"
                    ? "Workable but oversold"
                    : "Scam structure present"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── What This Platform Is / What It Is Not ───────── */}
      <section id="what-this-is" className="desk-wrap scroll-mt-20 py-20 md:py-24">
        <SectionHead
          index="01"
          eyebrow="Scope of the desk"
          title="What this platform is — and what it is not"
          lead="The boundaries matter as much as the content. Read both columns before you read anything else."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-verified/30 bg-surface p-7">
            <div className="flex items-center gap-2">
              <Signal kind="verified" label="What it is" />
            </div>
            <ul className="mt-5 space-y-3.5">
              {[
                "An income literacy desk",
                "A verified income model registry",
                "A field-testing platform",
                "An anti-scam education system",
                "A local business services guide",
                "A proof-based opportunity briefing platform",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink/85">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-verified" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-flag/30 bg-surface p-7">
            <div className="flex items-center gap-2">
              <Signal kind="flag" label="What it is not" />
            </div>
            <ul className="mt-5 space-y-3.5">
              {[
                "Not a get-rich-quick platform",
                "Not a betting, crypto, forex, or gambling scheme",
                "Not a promise of guaranteed income",
                "Not a marketplace for illegal work",
                "Not financial advice",
                "Not a substitute for personal judgment, skill-building, or lawful business practice",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink/85">
                  <span aria-hidden className="mt-[6px] h-3 w-3 shrink-0 text-flag">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 3l6 6M9 3l-6 6" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────────────── Income Models ───────────────────── */}
      <section id="income-models" className="scroll-mt-20 border-y border-line bg-surface py-20 md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="02"
            eyebrow="The registry"
            title="Income models"
            lead="Each model is logged with a proof signal, an effort profile, and a capital requirement. Open the ones carrying evidence first."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
            {incomeModels.map((m) => {
              const inner = (
                <div className="flex h-full flex-col bg-paper p-6 transition-colors group-hover:bg-surface">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[12px] text-slate">{m.code}</span>
                    <Signal kind={m.signal} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink/70">
                    {m.summary}
                  </p>
                  <div className="mt-5 flex items-center gap-5 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
                    <span>Effort · {m.effort}</span>
                    <span>Capital · {m.capital}</span>
                    {m.href ? (
                      <span className="ml-auto text-verified">Open →</span>
                    ) : null}
                  </div>
                </div>
              );
              return m.href ? (
                <Link key={m.code} href={m.href} className="focusable group block">
                  {inner}
                </Link>
              ) : (
                <div key={m.code} className="group block">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────── Field Tests ────────────────────── */}
      <section id="field-tests" className="desk-wrap scroll-mt-20 py-20 md:py-24">
        <SectionHead
          index="03"
          eyebrow="The evidence log"
          title="Field tests"
          lead="Real, bounded experiments run by an operator — including the ones that failed. The finding is what we keep, not the claim."
        />

        <div className="mt-12 overflow-hidden rounded-md border border-line">
          <div className="hidden grid-cols-[120px_1.6fr_2fr_140px] gap-4 border-b border-line bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/60 md:grid">
            <span>Ref</span>
            <span>Question tested</span>
            <span>Finding</span>
            <span>Status</span>
          </div>
          {fieldTests.map((t, i) => (
            <div
              key={t.id}
              className={`grid gap-2 px-5 py-5 md:grid-cols-[120px_1.6fr_2fr_140px] md:gap-4 md:py-4 ${
                i % 2 ? "bg-surface" : "bg-paper"
              }`}
            >
              <div className="font-mono text-[12px] text-slate">{t.id}</div>
              <div className="text-[14px] font-medium leading-snug text-ink">
                {t.question}
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-slate-soft">
                  {t.model} · {t.window}
                </span>
              </div>
              <div className="text-[14px] leading-relaxed text-ink/75">{t.finding}</div>
              <div className="md:pt-0.5">
                <Signal kind={t.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────── Proof Signals ───────────────────── */}
      <section id="proof-signals" className="scroll-mt-20 border-y border-line bg-ink py-20 text-paper md:py-24">
        <div className="desk-wrap">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-verified">04</span>
              <span className="h-px w-8 bg-paper/25" />
              <span className="eyebrow text-paper/50">The grading key</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-[2.6rem]">
              Proof signals
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-paper/70">
              Every model and field test reduces to one of four signals. This is the legend that
              the whole desk runs on.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line-dark bg-line-dark sm:grid-cols-2">
            {proofSignals.map((s) => (
              <div key={s.kind} className="bg-ink-2 p-7">
                <Signal kind={s.kind} />
                <p className="mt-4 text-[15px] leading-relaxed text-paper/75">{s.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Anti-Scam Notes ──────────────────── */}
      <section id="anti-scam" className="desk-wrap scroll-mt-20 py-20 md:py-24">
        <SectionHead
          index="05"
          eyebrow="Recognise the structure"
          title="Anti-scam notes"
          lead="Most income scams share a small set of tells. Learn the structure once and you can spot the next variation on sight."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scamNotes.map((n, i) => (
            <div key={n.tell} className="rounded-md border border-line bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-sm bg-flag/10 font-mono text-[11px] text-flag">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium text-ink">{n.tell}</h3>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{n.detail}</p>
            </div>
          ))}
          <div className="rounded-md border border-flag/40 bg-flag/[0.04] p-6">
            <Signal kind="flag" label="Rule of thumb" />
            <p className="mt-3 text-[14px] leading-relaxed text-ink/80">
              If a model leads with the reward and hides the work, treat the reward as bait. Real
              income is paid to you, after lawful work, with no fee to begin.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────── Starter Playbooks ─────────────────── */}
      <section id="playbooks" className="scroll-mt-20 border-y border-line bg-surface py-20 md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="06"
            eyebrow="From signal to action"
            title="Starter playbooks"
            lead="A short, ordered sequence for turning a verified model into your own bounded test. Follow it in order."
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {playbooks.map((p) => (
              <li key={p.step} className="relative rounded-md border border-line bg-paper p-6">
                <span className="font-display text-4xl font-medium text-verified/30">{p.step}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Local Business Website Services (feature) ─────── */}
      <section id="local-services" className="desk-wrap scroll-mt-20 py-20 md:py-24">
        <div className="grid items-center gap-10 rounded-md border border-line bg-ink p-8 text-paper md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-verified">07</span>
              <span className="h-px w-8 bg-paper/25" />
              <span className="eyebrow text-paper/50">Featured model · IM-01</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-[2.4rem]">
              Local business website services
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-paper/75">
              The most reproducible model on the desk: build and maintain simple websites for
              nearby businesses that have none. Low capital, skill-led, and verified in the field —
              with acquisition, not delivery, as the real constraint.
            </p>
            <Link
              href="/income-models/local-business-website-services"
              className="focusable mt-7 inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-verified/90"
            >
              Open the full model →
            </Link>
          </div>
          <div className="rounded-md border border-line-dark bg-ink-2 p-6">
            <div className="space-y-4 font-mono text-[12px]">
              {[
                ["Signal", "Verified"],
                ["Capital", "Low"],
                ["Effort", "Skill-led"],
                ["Hard part", "Client acquisition"],
                ["Field ref", "FT-2024-07"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-line-dark pb-3 last:border-0 last:pb-0">
                  <span className="uppercase tracking-[0.1em] text-paper/45">{k}</span>
                  <span className={v === "Verified" ? "text-verified" : "text-paper/85"}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── Smartphone Economy ─────────────────── */}
      <section id="smartphone-economy" className="scroll-mt-20 border-y border-line bg-surface py-20 md:py-24">
        <div className="desk-wrap">
          <SectionHead
            index="08"
            eyebrow="Phone-first work"
            title="Smartphone economy"
            lead="Many readers reach this desk with a phone and a data plan, not a laptop. These are the models that genuinely start from a smartphone — tested against that reality."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "What a phone can actually start",
                d: "Content production, document assistance, simple client comms, and lightweight freelance delivery are all phone-viable. The constraint is skill, not hardware.",
              },
              {
                t: "Where the phone hits a wall",
                d: "Heavier build work, long-form editing, and some delivery tooling still want a keyboard. We mark where a model outgrows the phone so you can plan for it.",
              },
              {
                t: "Honest timelines",
                d: "Phone-first models tend to be slower to monetise than course sellers claim. Field tests here track the lag rather than hiding it.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-md border border-line bg-paper p-6">
                <h3 className="font-display text-lg font-medium text-ink">{c.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── Methodology ─────────────────────── */}
      <section id="methodology" className="desk-wrap scroll-mt-20 py-20 md:py-24">
        <SectionHead
          index="09"
          eyebrow="How a claim becomes a signal"
          title="Methodology"
          lead="The same four steps run on every entry, from a promising model to an outright scam. Order carries the discipline."
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {methodology.map((m) => (
            <li key={m.step} className="bg-paper p-7">
              <span className="font-mono text-[12px] text-verified">{m.step}</span>
              <h3 className="mt-3 font-display text-lg font-medium text-ink">{m.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{m.detail}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-xl italic leading-relaxed text-ink/70">
          A modest result we can reproduce is worth more than an exciting one we cannot.
        </p>
      </section>
    </>
  );
}
