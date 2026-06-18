import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="desk-wrap flex min-h-16 items-center justify-between gap-5 py-3">
        <Link href="/" className="focusable group flex items-center gap-3" aria-label={`${site.name} home`}>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-sm border border-verified/40 bg-verified/10 font-mono text-[12px] font-medium tracking-tight text-verified"
          >
            VID
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-medium text-ink">
              {site.name}
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-slate-soft">
              Income literacy without illusion
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focusable font-mono text-[11px] uppercase tracking-[0.1em] text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/submit-claim"
          className="focusable hidden shrink-0 items-center rounded-sm border border-ink bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-ink-2 md:inline-flex"
        >
          Submit claim
        </Link>

        <details className="group relative lg:hidden">
          <summary className="focusable list-none rounded-sm border border-line bg-surface px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-[min(82vw,22rem)] overflow-hidden rounded-md border border-line bg-paper shadow-xl">
            <nav className="grid" aria-label="Mobile primary">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focusable border-b border-line px-5 py-4 font-mono text-[12px] uppercase tracking-[0.1em] text-slate last:border-b-0 hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
