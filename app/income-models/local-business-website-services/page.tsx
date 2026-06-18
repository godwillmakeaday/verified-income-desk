import type { Metadata } from "next";
import Link from "next/link";
import Signal from "@/components/Signal";
import SectionHead from "@/components/SectionHead";
import { getIncomeModel } from "@/lib/incomeModels";

const model = getIncomeModel("local-business-website-services");

export const metadata: Metadata = {
  title: "Local Business Website Services",
  description:
    "A formal Verified Income Desk model brief on local business website services, including fit, tools, first 7 days, risks, proof signals, and ethical boundary.",
};

const whoFits = [
  "People who can learn simple website delivery and communicate clearly with small business owners.",
  "People with patience for direct outreach, follow-up, revisions, and basic customer service.",
  "People who can show a clean sample before asking a business owner to pay.",
];

const whoDoesNotFit = [
  "Anyone expecting immediate earnings without outreach, skill, trust, or delivery discipline.",
  "Anyone who wants to sell complicated builds before mastering simple, useful pages.",
  "Anyone unwilling to support clients after the first delivery.",
];

const firstSevenDays = [
  "Build one sample site for a realistic local business category.",
  "Write a one-page offer with scope, price range, and maintenance boundary.",
  "List 20 nearby businesses with weak or absent web presence.",
  "Contact five prospects respectfully and record every response.",
  "Improve the sample using real objections and questions.",
  "Follow up once with prospects who showed interest.",
  "Review evidence: replies, objections, meetings, and any serious inquiry.",
];

const firstThirtyDays = [
  "Contact a narrow group of prospects consistently rather than changing market every day.",
  "Create two additional sample pages for different business types.",
  "Test one fixed build price and one maintenance option.",
  "Keep a simple ledger of outreach, replies, meetings, objections, paid work, and delivery time.",
  "Document every failure point: pricing resistance, trust concern, delivery issue, or weak proof sample.",
];

const commonLies = [
  "Every business owner wants a website immediately.",
  "The build is the hard part and clients will come once you can design.",
  "A beautiful homepage is enough without trust, contact clarity, and follow-up.",
  "Monthly maintenance happens automatically after the first sale.",
];

const ethicalBoundary = [
  "Do not copy another business site and present it as original work.",
  "Do not promise search rankings, sales, or customer flow you cannot control.",
  "Do not hide hosting, domain, renewal, or maintenance costs from the client.",
  "Do not collect client passwords without explaining access, security, and handover.",
];

export default function LocalBusinessWebsiteServices() {
  if (!model) return null;

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
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">Formal model brief</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-[2.3rem] font-medium leading-[1.08] md:text-[3.8rem]">
            {model.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/75">{model.summary}</p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <SectionHead index="01" eyebrow="Summary" title="A simple service model, not an income promise" />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink/78">
              <p>
                This model begins from a clear business need: many local operators need a credible page that explains what they do, where they are, how to contact them, and why a customer should trust them. The worker earns by delivering that service and maintaining it responsibly.
              </p>
              <p>
                The model is realistic because the mechanism is visible: a client pays for a useful service. The risk is also visible: the client must first trust the operator, understand the offer, and agree that the website solves a real problem.
              </p>
            </div>
          </div>
          <aside className="rounded-md border border-line bg-surface p-6">
            <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-slate">Model facts</h2>
            <dl className="mt-4 space-y-3 text-[13px] leading-relaxed">
              {[
                ["Registry code", model.code],
                ["Category", model.category],
                ["Status", "Verified mechanism; individual results not guaranteed"],
                ["Cost level", model.startingCostLevel],
                ["Skill level", model.skillLevel],
                ["Timeframe", model.realisticTimeframe],
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
        <div className="desk-wrap grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-line bg-paper p-7">
            <Signal kind="verified" label="Who it fits" />
            <ul className="mt-5 space-y-3.5">
              {whoFits.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/78"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-verified" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-paper p-7">
            <Signal kind="caution" label="Who it does not fit" />
            <ul className="mt-5 space-y-3.5">
              {whoDoesNotFit.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/78"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-caution" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <SectionHead index="02" eyebrow="Tools required" title="Start with tools that prove competence before complexity" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {model.startingTools.map((tool) => (
            <div key={tool} className="rounded-md border border-line bg-surface p-6">
              <p className="font-display text-lg font-medium text-ink">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead index="03" eyebrow="First 7 days" title="A small test for outreach and proof" />
            <ol className="mt-8 space-y-px overflow-hidden rounded-md border border-line bg-line">
              {firstSevenDays.map((step, index) => (
                <li key={step} className="grid grid-cols-[56px_1fr] gap-4 bg-paper p-5">
                  <span className="font-display text-2xl text-verified/45">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] leading-relaxed text-ink/78">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHead index="04" eyebrow="First 30 days" title="Read the market, not the fantasy" />
            <ol className="mt-8 space-y-px overflow-hidden rounded-md border border-line bg-line">
              {firstThirtyDays.map((step, index) => (
                <li key={step} className="grid grid-cols-[56px_1fr] gap-4 bg-paper p-5">
                  <span className="font-display text-2xl text-verified/45">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] leading-relaxed text-ink/78">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <SectionHead index="05" eyebrow="Pricing reality" title="Pricing must match trust, scope, and support" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Build fee", "A one-time fee should reflect a clear deliverable: pages, contact details, images, copy support, and handover."],
            ["Maintenance", "A recurring fee only makes sense when it covers real support: updates, edits, backups, hosting coordination, or periodic improvements."],
            ["Trust discount", "Early clients may need a lower-risk first offer because they are buying trust as much as a website."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-md border border-line bg-surface p-6">
              <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink py-16 text-paper md:py-20">
        <div className="desk-wrap grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead index="06" eyebrow="Common lies" title="What the pitch often hides" inverse />
            <ul className="mt-8 space-y-3">
              {commonLies.map((item) => (
                <li key={item} className="rounded-md border border-line-dark bg-ink-2 p-4 text-[15px] leading-relaxed text-paper/72">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead index="07" eyebrow="Proof signals and failure points" title="How to judge the model honestly" inverse />
            <div className="mt-8 grid gap-4">
              <div className="rounded-md border border-line-dark bg-ink-2 p-5">
                <Signal kind="verified" label="Proof signals" />
                <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-paper/72">
                  {model.proofSignals.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div className="rounded-md border border-line-dark bg-ink-2 p-5">
                <Signal kind="caution" label="Failure points" />
                <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-paper/72">
                  {model.failurePoints.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-line bg-surface p-7">
            <Signal kind="caution" label="Ethical boundary" />
            <ul className="mt-5 space-y-3.5">
              {ethicalBoundary.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-ink/78">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-verified/30 bg-surface p-7">
            <Signal kind={model.status} label="Verdict" />
            <p className="mt-5 text-[16px] leading-relaxed text-ink/78">{model.verdict}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
              Evidence not yet verified for any specific reader. Treat the next step as a bounded test, not a commitment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/field-tests" className="focusable inline-flex items-center rounded-sm bg-verified px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-verified/90">
                Start a 7-day test
              </Link>
              <Link href="/income-models" className="focusable inline-flex items-center rounded-sm border border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink hover:bg-ink hover:text-paper">
                Back to registry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
