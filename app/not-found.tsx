import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { SearchBar } from "@/components/SearchBar";
import { ArrowRightIcon } from "@/components/icons";

const quickLinks = [
  { label: "Conditions A–Z", href: "/conditions" },
  { label: "Health Library", href: "/health-library" },
  { label: "Specialist Centres", href: "/specialist-centres" },
  { label: "Nigerian Health Context", href: "/nigerian-health-context" },
];

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-16">
      <div className="max-w-prose">
        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-clinical-blueDark">
          Error 404
        </p>
        <h1 className="mt-4 text-h1">We couldn’t find that page.</h1>
        <p className="mt-4 text-[1.1rem] leading-relaxed text-slate">
          The page may have moved, or the guide may not be published yet. Try searching the
          library, or use one of the links below.
        </p>

        <div className="mt-8 max-w-xl">
          <SearchBar />
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                {l.label}
                <ArrowRightIcon
                  size={14}
                  className="text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:text-clinical-blue"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
