import type { Metadata } from "next";
import SectionHead from "@/components/SectionHead";

export const metadata: Metadata = {
  title: "Submit an Income Claim",
  description:
    "Prototype claim submission page for Verified Income Desk. Users can structure an income claim for review and copy it for email or WhatsApp submission.",
};

const fields = [
  ["Income claim or model name", "Example: local resale system, task platform, daily returns offer"],
  ["Where the user found it", "Website, WhatsApp group, TikTok, Facebook, local promoter, friend, poster"],
  ["What the promoter promised", "Write the promise exactly as stated"],
  ["Amount required to start", "Include registration fee, starter kit, deposit, upgrade, training fee, or tools"],
  ["Screenshots/proof available", "List what you have: screenshots, receipts, chats, links, wallet records"],
  ["User’s question", "What do you want Verified Income Desk to examine?"],
  ["Contact email or WhatsApp optional", "Optional contact detail for follow-up when backend collection is enabled"],
];

export default function SubmitClaimPage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-paper">
        <div className="desk-wrap py-16 md:py-20">
          <p className="eyebrow text-verified">Claim intake</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.08] md:text-[3.8rem]">
            Submit an income claim for structured review.
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-paper/72">
            Use this page to organize the claim, promise, starting cost, available proof, and your question. The form is a front-end prototype only.
          </p>
        </div>
      </section>

      <section className="desk-wrap py-16 md:py-20">
        <div className="rounded-md border border-caution/40 bg-caution/[0.06] p-6">
          <p className="text-[15px] leading-relaxed text-ink/80">
            This form is a prototype. Until backend collection is enabled, users may copy their submission and send it by email or WhatsApp.
          </p>
        </div>

        <form className="mt-10 grid gap-6 rounded-md border border-line bg-surface p-6 md:p-8">
          {fields.map(([label, placeholder], index) => (
            <label key={label} className="grid gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                {String(index + 1).padStart(2, "0")} · {label}
              </span>
              {index === 2 || index === 4 || index === 5 ? (
                <textarea
                  className="min-h-28 rounded-sm border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none focus:border-verified"
                  placeholder={placeholder}
                />
              ) : (
                <input
                  className="rounded-sm border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none focus:border-verified"
                  placeholder={placeholder}
                />
              )}
            </label>
          ))}
          <button
            type="button"
            className="cursor-not-allowed rounded-sm border border-line bg-ink/10 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-slate"
            aria-disabled="true"
          >
            Backend not enabled — copy submission manually
          </button>
        </form>
      </section>

      <section className="border-y border-line bg-surface py-16 md:py-20">
        <div className="desk-wrap">
          <SectionHead index="01" eyebrow="Before submitting" title="A useful claim includes the promise and the mechanism" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["The exact promise", "Avoid summarizing too quickly. Write the promoter’s claim as closely as possible."],
              ["The required payment", "Separate tool costs from promoter payments, deposits, upgrades, and access fees."],
              ["The proof offered", "Screenshots, testimonials, account balances, and withdrawal claims are starting points, not conclusions."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-md border border-line bg-paper p-6">
                <h2 className="font-display text-lg font-medium text-ink">{title}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
