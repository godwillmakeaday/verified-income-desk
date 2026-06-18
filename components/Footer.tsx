import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-paper">
      <div className="desk-wrap py-14">
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-sm border border-verified/50 bg-verified/15 font-mono text-[12px] text-verified"
              >
                VID
              </span>
              <span>
                <span className="block font-display text-lg">{site.name}</span>
                <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-paper/45">
                  {site.tagline}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
              Verified Income Desk studies income claims, proof signals, scam behavior, and realistic service pathways for phone-first and local economies.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/50">
              Desk links
            </h2>
            <ul className="mt-4 grid gap-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focusable text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/50">
              Disclaimer
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              Verified Income Desk provides educational income-literacy content. It does not guarantee income, provide financial advice, or endorse illegal, deceptive, or exploitative earning schemes.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-6 text-[12px] text-paper/50 md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono uppercase tracking-[0.1em]">
            Internet income literacy without illusion
          </p>
        </div>
      </div>
    </footer>
  );
}
