import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, LinkCard } from "@/components/ui";
import { SearchBar } from "@/components/SearchBar";
import {
  BookIcon,
  PulseIcon,
  ClipboardIcon,
  PillIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { getAllConditions } from "@/lib/conditions";
import { symptoms, tests, medicines, preventionGuides } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health Library",
  description:
    "Search the Health Clarity Institute library — conditions, symptoms, tests and procedures, medicines and prevention guides, written for Nigerian patients and institutions.",
  alternates: { canonical: "/health-library" },
};

const categories = [
  {
    title: "Conditions A–Z",
    href: "/conditions",
    icon: BookIcon,
    count: getAllConditions().length,
    blurb: "Plain-language guides to diseases and long-term conditions.",
  },
  {
    title: "Symptoms A–Z",
    href: "/symptoms",
    icon: PulseIcon,
    count: symptoms.length,
    blurb: "Understand what a symptom may mean and when to act.",
  },
  {
    title: "Tests & Procedures",
    href: "/tests-procedures",
    icon: ClipboardIcon,
    count: tests.length,
    blurb: "What common tests check and what the results mean.",
  },
  {
    title: "Medicines & Treatment",
    href: "/medicines",
    icon: PillIcon,
    count: medicines.length,
    blurb: "How treatments work and how to use them safely.",
  },
  {
    title: "Prevention Guides",
    href: "/prevention",
    icon: ShieldIcon,
    count: preventionGuides.length,
    blurb: "Screening, vaccines and habits that lower your risk.",
  },
];

export default function HealthLibraryPage() {
  return (
    <>
      <section className="border-b border-line bg-offwhite">
        <Container className="py-14 md:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Health library</Eyebrow>
            <h1 className="mt-4 text-h1">
              One library for conditions, symptoms, tests, medicines and prevention.
            </h1>
            <p className="mt-5 text-[1.15rem] leading-relaxed text-slate">
              Search reviewed, plain-language medical information written for Nigerian
              patients, families and institutions. Start with a search, or browse by
              category below.
            </p>
          </div>
          <div className="mt-8 max-w-2xl">
            <SearchBar />
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <LinkCard key={c.href} href={c.href} className="p-6">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blue">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-slate-soft">
                    {c.count} {c.count === 1 ? "entry" : "entries"}
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-xl text-navy group-hover:text-clinical-blue">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-clinical-blueDark">
                  Browse
                  <ArrowRightIcon
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </LinkCard>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-line bg-offwhite p-6 md:p-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-xl text-navy">
              How our library is written
            </h2>
            <p className="mt-3 text-[0.99rem] leading-relaxed text-slate">
              Every guide is written for education, reviewed by qualified professionals,
              dated for its last review, and referenced to its sources. Guides flag clearly
              when a situation needs urgent care, and each major guide carries a Nigerian
              context section on cost, access and the realities of getting seen.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/editorial-policy"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                Editorial policy
              </Link>
              <Link
                href="/medical-review-policy"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                Medical review policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
