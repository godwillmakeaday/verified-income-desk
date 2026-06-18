"use client";

import * as React from "react";
import Link from "next/link";
import { primaryNav, site } from "@/lib/site";
import { Container } from "./ui";
import { AlertIcon } from "./icons";

function Monogram() {
  return (
    <span className="flex items-center gap-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded border border-clinical-blue/30 bg-navy font-mono text-[0.78rem] font-semibold tracking-tight text-white"
        aria-hidden="true"
      >
        HCI
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-[1.05rem] font-semibold text-navy">
          Health Clarity Institute
        </span>
        <span className="block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-slate">
          Nigeria
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Emergency strip */}
      <div className="bg-navy text-white">
        <Container className="flex items-center gap-2 py-1.5">
          <AlertIcon size={14} className="shrink-0 text-clinical-redSoft" />
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-white/85">
            In an emergency, go to the nearest hospital now — this site is for education, not urgent care.
          </p>
        </Container>
      </div>

      <div className="border-b border-line shadow-header">
        <Container className="flex items-center justify-between py-3.5">
          <Link href="/" className="no-underline" aria-label={site.name}>
            <Monogram />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy no-underline transition-colors hover:text-clinical-blue"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/for-hospitals"
              className="rounded border border-navy bg-navy px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700 hover:text-white"
            >
              For Institutions
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-line p-2 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </Container>

        {open && (
          <div className="border-t border-line lg:hidden">
            <Container className="flex flex-col py-2">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-lineSoft py-3 text-[0.95rem] font-medium text-navy no-underline last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
