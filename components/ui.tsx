// components/ui.tsx
import * as React from "react";
import Link from "next/link";
import type { UrgencyLevel } from "@/lib/types";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-base ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return <p className={muted ? "eyebrow-muted" : "eyebrow"}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-prose ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-h2">{title}</h2>
      {intro && <p className="mt-3 text-[1.05rem] leading-relaxed text-slate">{intro}</p>}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-white shadow-card transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function LinkCard({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group block rounded-lg border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover no-underline ${className}`}
    >
      {children}
    </Link>
  );
}

const urgencyMap: Record<
  UrgencyLevel,
  { label: string; cls: string }
> = {
  routine: { label: "Routine care", cls: "bg-clinical-greenSoft text-clinical-green" },
  "see-doctor": { label: "See a clinician", cls: "bg-clinical-blueSoft text-clinical-blueDark" },
  urgent: { label: "Often urgent", cls: "bg-clinical-amberSoft text-clinical-amber" },
  emergency: { label: "Emergency-level", cls: "bg-clinical-redSoft text-clinical-red" },
};

export function UrgencyPill({ level }: { level: UrgencyLevel }) {
  const u = urgencyMap[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.08em] ${u.cls}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {u.label}
    </span>
  );
}

export function Pill({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "green" | "navy" | "neutral";
}) {
  const tones = {
    blue: "bg-clinical-blueSoft text-clinical-blueDark",
    green: "bg-clinical-greenSoft text-clinical-green",
    navy: "bg-navy/5 text-navy",
    neutral: "bg-offwhite text-slate",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.08em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
