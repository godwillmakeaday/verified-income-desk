import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-paper">
      <div className="desk-wrap py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-sm border border-verified/50 bg-verified/15 font-mono text-[12px] text-verified"
              >
                VID
              </span>
              <span className="font-display text-lg">Verified Income Desk</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              {site.description}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/50">
              Sections
            </h2>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
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
              Standing notice
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              Verified Income Desk publishes income literacy, not financial advice. Nothing here
              is a promise of earnings. Always apply your own judgement and follow lawful business
              practice.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-6 text-[12px] text-paper/50 md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono uppercase tracking-[0.1em]">
            Proof over promises
          </p>
        </div>
      </div>
    </footer>
  );
}
