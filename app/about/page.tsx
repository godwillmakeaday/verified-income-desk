import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { trustPoints } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Health Clarity Institute Nigeria is a health education, patient clarity and specialist-care intelligence platform built for Nigerian patients, families and institutions.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Clarity over noise",
    body: "Health information is only useful if it can be understood under stress. We write plainly, structure carefully, and cut anything that does not help a reader decide what to do.",
  },
  {
    title: "Honest about Nigeria",
    body: "We do not pretend every reader has easy access to a specialist. We name the realities of cost, distance and delay, and we give guidance that holds up in them.",
  },
  {
    title: "Reviewed, dated, sourced",
    body: "Every guide is written for education, prepared for professional review, dated for its last check, and tied to its references. Trust is earned through process, not tone.",
  },
  {
    title: "Safety first",
    body: "When a situation is an emergency, we say so plainly and early. No guide should ever leave a reader unsure whether to seek urgent care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the institute"
        title="A serious health institution for Nigerian patients and institutions."
        lede="Health Clarity Institute Nigeria exists to make medical knowledge clear, local and trustworthy — for the patient trying to understand a diagnosis, the family weighing a decision, and the institution building better care."
      />

      <Container className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="max-w-prose prose-clinical">
            <p>
              Most Nigerians meet the health system at a moment of worry, with limited time
              and limited information. Too often the guidance available is either too
              technical to act on, or too vague to trust. The result is late diagnosis,
              avoidable self-medication, and decisions made in the dark.
            </p>
            <p>
              We are building the alternative: a structured, reviewed library of medical
              knowledge written for Nigerian realities. Every condition guide explains the
              same things in the same clear order — what it is, how it is found and treated,
              how to prevent it, when it becomes urgent, and what it means here, at home.
            </p>
            <p>
              The platform is designed from the start to grow into hundreds and then
              thousands of guides, and to serve institutions as much as individuals. The
              same standards that make a single guide trustworthy — clarity, review, dating,
              sourcing — are what let an institution build on it with confidence.
            </p>

            <h2 className="mt-10 font-serif text-2xl text-navy">What we stand for</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 not-prose">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-line bg-white p-5 shadow-card"
                >
                  <h3 className="font-serif text-lg text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-line bg-offwhite p-6">
              <Eyebrow>Our standards</Eyebrow>
              <ul className="mt-4 space-y-3">
                {trustPoints.map((t) => (
                  <li key={t.label} className="flex gap-3">
                    <CheckIcon size={18} className="mt-0.5 shrink-0 text-clinical-green" />
                    <span>
                      <span className="block text-sm font-medium text-navy">{t.label}</span>
                      <span className="block text-sm text-slate">{t.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5 text-sm">
                <Link href="/editorial-policy" className="block py-1">
                  Editorial policy
                </Link>
                <Link href="/medical-review-policy" className="block py-1">
                  Medical review policy
                </Link>
                <Link href="/contact" className="block py-1">
                  Contact us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
