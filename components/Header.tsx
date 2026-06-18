import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <div className="desk-wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="focusable group flex items-center gap-3" aria-label={`${site.name} home`}>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-sm border border-verified/40 bg-verified/8 font-mono text-[12px] font-medium tracking-tight text-verified"
          >
            VID
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-medium text-ink">
              Verified Income Desk
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-slate-soft">
              Public-interest income literacy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focusable font-mono text-[12px] uppercase tracking-[0.1em] text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/income-models/local-business-website-services"
          className="focusable hidden shrink-0 items-center rounded-sm border border-ink bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-ink-2 md:inline-flex"
        >
          Open a model
        </Link>
      </div>
    </header>
  );
}
