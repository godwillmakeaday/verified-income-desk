import type { Metadata } from "next";
import Link from "next/link";
import Signal from "@/components/Signal";

export const metadata: Metadata = {
  title: "Local business website services",
  description:
    "A verified, low-capital income model: building and maintaining simple websites for nearby businesses that have none. Field-tested by Verified Income Desk.",
};

const facts: [string, string][] = [
  ["Registry code", "IM-01"],
  ["Proof signal", "Verified"],
  ["Capital required", "Low"],
  ["Effort profile", "Skill-led"],
  ["Field reference", "FT-2024-07"],
  ["Hard part", "Client acquisition"],
];

const steps = [
  {
    n: "01",
    t: "Build one real reference site",
    d: "Before charging anyone, build a single clean site for a real or sample local business so prospects can see exactly what they are buying.",
  },
  {
    n: "02",
    t: "Pick a narrow local segment",
    d: "Choose one type of business with no web presence — a clinic, a school, a tradesperson, a small shop — so your outreach and examples stay focused.",
  },
  {
    n: "03",
    t: "Run direct outreach",
    d: "Acquisition is the constraint, not the build. Approach businesses directly with a fixed, transparent price and a working example.",
  },
  {
    n: "04",
    t: "Charge build plus maintenance",
    d: "Quote a one-time build fee and a small recurring maintenance fee. The recurring fee is what turns a gig into income.",
  },
  {
    n: "05",
    t: "Keep delivery simple",
    d: "Use a small, repeatable stack you can deliver reliably. Resist over-building; the client wants to be found and contacted, nothing more.",
  },
];

const honest = [
  {
    t: "Why it carries a Verified signal",
    d: "In a 12-week field test, a single operator landed and retained three paying clients using cold outreach and a fixed maintenance fee. The path was reproducible.",
  },
  {
    t: "What is genuinely hard",
    d: "Delivery is straightforward; getting the first clients is not. Expect most outreach to go unanswered. The model rewards persistence in acquisition, not technical flash.",
  },
  {
    t: "What it is not",
    d: "Not passive income, not a guaranteed pipeline, and not a substitute for actually learning to build and maintain a site. It is honest, skill-led service work.",
  },
];

export default function LocalBusinessWebsiteServices() {
  return (
    <>
      {/* Breadcrumb + header */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50" aria-label="Breadcrumb">
            <Link href="/" className="focusable hover:text-paper">
              Desk
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#income-models" className="focusable hover:text-paper">
              Income models
            </Link>
            <span aria-hidden>/</span>
            <span className="text-paper/80">IM-01</span>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Signal kind="verified" />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">
              Featured income model
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-[2.2rem] font-medium leading-[1.12] md:text-[3.2rem]">
            Local business website services
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-paper/75">
            Building and maintaining simple websites for nearby shops, clinics, schools, and
            tradespeople who currently have no web presence. The most reproducible model on the
            Verified Income Desk — low capital, skill-led, and honest about where the difficulty
            really sits.
          </p>
        </div>
      </section>

      {/* Fact panel */}
      <section className="desk-wrap py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-verified">A</span>
              <span className="h-px w-8 bg-line" />
              <span className="eyebrow">The model in plain terms</span>
            </div>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-ink/80">
              <p>
                A large number of small businesses still have no website at all. They lose
                customers who search for them and find nothing. This model closes that gap: you
                build a small, professional site and keep it running for a modest recurring fee.
              </p>
              <p>
                It is service work, not a system. There is no deposit to pay, no one to recruit,
                and no promise of fixed returns. You are paid by a real client for a real
                deliverable — which is exactly why it earns a Verified signal here.
              </p>
            </div>
          </div>

          <aside className="rounded-md border border-line bg-surface p-6">
            <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">
              Model facts
            </h2>
            <dl className="mt-4 space-y-3 font-mono text-[12px]">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-line pb-3 last:border-0 last:pb-0">
                  <dt className="uppercase tracking-[0.08em] text-slate">{k}</dt>
                  <dd className={v === "Verified" ? "text-verified" : "text-ink"}>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Operating sequence */}
      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[12px] text-verified">B</span>
            <span className="h-px w-8 bg-line" />
            <span className="eyebrow">How to run it</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
            Operating sequence
          </h2>

          <ol className="mt-10 space-y-px overflow-hidden rounded-md border border-line bg-line">
            {steps.map((s) => (
              <li key={s.n} className="grid gap-3 bg-paper p-6 md:grid-cols-[64px_1fr] md:gap-6">
                <span className="font-display text-3xl font-medium text-verified/40">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Honest assessment */}
      <section className="desk-wrap py-16 md:py-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] text-verified">C</span>
          <span className="h-px w-8 bg-line" />
          <span className="eyebrow">Read before you start</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
          Honest assessment
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {honest.map((h) => (
            <div key={h.t} className="rounded-md border border-line bg-surface p-6">
              <h3 className="font-display text-lg font-medium text-ink">{h.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{h.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-caution/40 bg-caution/[0.05] p-6">
          <Signal kind="caution" label="Standing notice" />
          <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-ink/80">
            This page is income literacy, not financial advice or a guarantee of earnings. Results
            depend on your skill, your market, and your effort. Always follow lawful business
            practice and apply your own judgement.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/#income-models"
            className="focusable inline-flex items-center rounded-sm border border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            ← Back to all models
          </Link>
          <Link
            href="/#anti-scam"
            className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-verified/90"
          >
            Read the anti-scam notes
          </Link>
        </div>
      </section>
    </>
  );
}
