import * as React from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./ui";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Health Library",
    links: [
      { label: "Conditions A–Z", href: "/conditions" },
      { label: "Symptoms A–Z", href: "/symptoms" },
      { label: "Tests & Procedures", href: "/tests-procedures" },
      { label: "Medicines", href: "/medicines" },
      { label: "Prevention", href: "/prevention" },
    ],
  },
  {
    heading: "Centres & Context",
    links: [
      { label: "Specialist Centres", href: "/specialist-centres" },
      { label: "Nigerian Health Context", href: "/nigerian-health-context" },
      { label: "For Hospitals & Institutions", href: "/for-hospitals" },
    ],
  },
  {
    heading: "Trust & Governance",
    links: [
      { label: "About the Institute", href: "/about" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Medical Review Policy", href: "/medical-review-policy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-navy text-white/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded border border-white/20 font-mono text-[0.78rem] font-semibold text-white">
                HCI
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                Health Clarity Institute Nigeria
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A Nigerian health education, patient clarity and specialist-care intelligence
              platform. Evidence-informed guides written to help you understand your health.
            </p>
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/55">
              {site.email}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 no-underline transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-xs leading-relaxed text-white/60">
            The information on Health Clarity Institute Nigeria is provided for general education
            only. It is not a diagnosis, prescription or substitute for professional medical advice.
            Always consult a qualified health professional about your own health, and seek urgent
            care for any emergency.
          </p>
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white/45">
            © {new Date().getFullYear()} {site.name}. Educational use.
          </p>
        </div>
      </Container>
    </footer>
  );
}
