import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { HospitalIcon, CheckIcon, ArrowRightIcon } from "@/components/icons";
import { institutionalServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Hospitals & Institutions",
  description:
    "Health Clarity Institute builds premium hospital websites, patient education libraries, doctor profile systems and preventive health campaigns for Nigerian institutions.",
  alternates: { canonical: "/for-hospitals" },
};

const audiences = [
  "Hospitals & clinics",
  "Diagnostic centres",
  "NGOs & foundations",
  "Schools",
  "Companies",
  "Health professionals",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We learn your services, your patients and the standard of care you want reflected online.",
  },
  {
    step: "02",
    title: "Structure",
    body: "We design the information architecture — services, specialties, doctors and patient pathways.",
  },
  {
    step: "03",
    title: "Build & review",
    body: "We build a fast, credible platform, with any clinical content prepared for professional review.",
  },
  {
    step: "04",
    title: "Launch & maintain",
    body: "We launch, train your team, and support ongoing content and documentation.",
  },
];

export default function ForHospitalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For institutions"
        title="Digital infrastructure for serious health institutions."
        lede="We help hospitals, clinics, NGOs, schools and companies present their care with credibility — through premium websites, patient education libraries and the documentation systems a modern institution needs."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700"
          >
            Discuss a project
            <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-navy no-underline shadow-card transition-colors hover:border-clinical-blue/40"
          >
            {site.email}
          </a>
        </div>
      </PageHero>

      {/* Audiences */}
      <Container className="py-10 md:py-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blue">
            <HospitalIcon size={20} />
          </span>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-slate-soft">
            Who we work with
          </p>
          <div className="flex flex-wrap gap-2">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-line bg-white px-3 py-1 text-sm text-navy shadow-card"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Services */}
      <Container className="pb-12 md:pb-16">
        <Eyebrow>What we build</Eyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {institutionalServices.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-line bg-white p-6 shadow-card"
            >
              <CheckIcon size={20} className="text-clinical-green" />
              <h2 className="mt-3 font-serif text-lg text-navy">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Process */}
      <section className="border-y border-line bg-offwhite">
        <Container className="py-12 md:py-16">
          <Eyebrow>How we work</Eyebrow>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <span className="font-mono text-sm font-semibold text-clinical-blue">
                  {p.step}
                </span>
                <h3 className="mt-2 font-serif text-lg text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <Container className="py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-white">
              Build something your patients can trust.
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-white/80">
              Tell us about your institution and what you want to achieve online. We will
              respond with a considered, honest proposal.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-navy no-underline transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
