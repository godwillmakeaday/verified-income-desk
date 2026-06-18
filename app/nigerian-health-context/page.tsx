import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { MapPinIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nigerian Health Context",
  description:
    "Why every major guide carries a Nigerian context section — late diagnosis, cost, access, family decision-making, self-medication, pharmacy habits and rural–urban barriers.",
  alternates: { canonical: "/nigerian-health-context" },
};

const realities: { title: string; body: string }[] = [
  {
    title: "Late diagnosis",
    body: "Many conditions are found late, after symptoms become hard to ignore. Guides explain the early signs worth acting on, so problems are caught when they are still easier to treat.",
  },
  {
    title: "Cost and who decides",
    body: "Care is often paid for out of pocket, and the decision to spend may sit with a family rather than an individual. We are honest about what testing and treatment involve so families can plan rather than be caught unprepared.",
  },
  {
    title: "Access and distance",
    body: "Distance to a facility, transport, and the availability of a clinician all shape what is realistic. Guidance distinguishes what truly needs a hospital now from what can be planned.",
  },
  {
    title: "Self-medication and the patent shop",
    body: "Medicines are widely bought without prescription. We explain why this is risky for certain conditions, what to ask a pharmacist, and when a proper diagnosis must come first.",
  },
  {
    title: "Pharmacy and prescribing habits",
    body: "Unfinished courses and shared medicines drive resistance and relapse. Guides stress completing treatment and confirming a diagnosis before taking antibiotics or antimalarials.",
  },
  {
    title: "Rural and urban barriers",
    body: "The same condition is navigated differently in a city teaching hospital and a rural community. We acknowledge both, and point clearly to when referral upward is needed.",
  },
  {
    title: "When to seek urgent care",
    body: "The most important judgement is often timing. Every guide flags the signs that mean go now, in plain language, so a delay does not become a tragedy.",
  },
];

export default function NigerianContextPage() {
  return (
    <>
      <PageHero
        eyebrow="The layer that makes our guides local"
        title="Nigerian Health Context"
        lede="Good medical information is necessary but not sufficient. What changes outcomes is whether a guide reckons with the realities of getting care in Nigeria. That is why every major guide carries a dedicated Nigerian context section."
      />

      <Container className="py-12 md:py-16">
        <div className="max-w-prose prose-clinical">
          <p>
            International references describe medicine as it should be practised. They
            rarely describe the choices a family makes at 9pm when a clinic is far, money is
            tight, and a relative is unwell. Our guides are written to sit between the two:
            clinically sound, and honest about the path a Nigerian patient actually walks.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {realities.map((r) => (
            <div
              key={r.title}
              className="overflow-hidden rounded-lg border border-line bg-offwhite"
            >
              <div className="flex items-center gap-2.5 border-l-4 border-clinical-green bg-clinical-greenSoft/50 px-5 py-3">
                <MapPinIcon size={16} className="text-clinical-green" />
                <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-clinical-green">
                  {r.title}
                </h2>
              </div>
              <p className="border-l-4 border-clinical-green px-5 py-4 text-[0.97rem] leading-[1.7] text-ink/90">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-line bg-white p-6 shadow-card md:p-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-xl text-navy">See it in a guide</h2>
            <p className="mt-3 text-[0.99rem] leading-relaxed text-slate">
              Every condition guide carries this section near the end, just before the
              questions to ask your doctor. Read one to see how it works in practice.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/conditions/hypertension#nigerian-context"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700"
              >
                Hypertension — Nigerian context
                <ArrowRightIcon
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/conditions"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
              >
                Browse all conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
