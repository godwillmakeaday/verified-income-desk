import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, LinkCard, Card, UrgencyPill } from "@/components/ui";
import { SearchBar } from "@/components/SearchBar";
import {
  PulseIcon,
  BookIcon,
  ClipboardIcon,
  PillIcon,
  ShieldIcon,
  AlertIcon,
  MapPinIcon,
  StethoscopeIcon,
  ArrowRightIcon,
  CheckIcon,
  HospitalIcon,
  iconBySlug,
} from "@/components/icons";
import {
  coreNavCards,
  specialistCentres,
  patientNavigation,
  institutionalServices,
  trustPoints,
  featuredGuideSlugs,
} from "@/lib/site";
import { getConditionBySlug } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Clear Medical Knowledge for Nigerian Patients and Institutions",
  description:
    "Evidence-informed health guides, patient navigation, specialist insight and Nigerian-context medical education from Health Clarity Institute Nigeria.",
};

const navCardIcons = [BookIcon, PulseIcon, ClipboardIcon, PillIcon, ShieldIcon, AlertIcon, MapPinIcon, StethoscopeIcon];

export default function HomePage() {
  const featured = featuredGuideSlugs
    .map((s) => getConditionBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      {/* ─────────────────────────────── 1 + 2. Hero with search */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-offwhite to-white" aria-hidden="true" />
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Nigerian health education · patient clarity · specialist intelligence</Eyebrow>
            <h1 className="mt-5 text-display">
              Clear medical knowledge for Nigerian patients and institutions.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.2rem] leading-relaxed text-slate">
              Evidence-informed health guides, patient navigation, specialist insight, and
              Nigerian-context medical education — written to help you understand, not to replace
              your clinician.
            </p>
          </div>

          <div className="mt-9 max-w-2xl">
            <SearchBar size="lg" />
            <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-slate-soft">
              Try: hypertension · malaria · chest pain · blood sugar test
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/health-library"
              className="inline-flex items-center gap-2 rounded border border-navy bg-navy px-5 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-700 hover:text-white"
            >
              Search Health Library
            </Link>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 rounded border border-line bg-white px-5 py-3 text-sm font-medium text-navy no-underline transition-colors hover:border-clinical-blue"
            >
              Explore Conditions
            </Link>
            <Link
              href="/for-hospitals"
              className="inline-flex items-center gap-2 rounded border border-line bg-white px-5 py-3 text-sm font-medium text-navy no-underline transition-colors hover:border-clinical-blue"
            >
              For Hospitals & Institutions
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 3. Core navigation cards */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where to begin"
            title="Find your way through the library"
            intro="Eight clear doors into Nigerian-context medical knowledge — from conditions and symptoms to tests, treatment and prevention."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreNavCards.map((card, i) => {
              const Icon = navCardIcons[i] ?? BookIcon;
              return (
                <LinkCard key={card.href} href={card.href} className="p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded border border-clinical-blue/20 bg-clinical-blueSoft text-clinical-blueDark">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-navy group-hover:text-clinical-blue">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{card.description}</p>
                </LinkCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 4. Featured specialist centres */}
      <section className="border-y border-line bg-offwhite py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Specialist Centres"
            title="Knowledge organised by area of care"
            intro="Curated centres bring together guides, symptoms and prevention for each major area of health."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialistCentres.map((centre) => {
              const Icon = iconBySlug[centre.slug] ?? HospitalIcon;
              return (
                <LinkCard key={centre.slug} href={`/specialist-centres#${centre.slug}`} className="p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded border border-clinical-green/25 bg-clinical-greenSoft text-clinical-green">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-slate-soft">
                      {centre.focus}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-navy group-hover:text-clinical-blue">
                    {centre.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{centre.description}</p>
                </LinkCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 5. Nigerian context layer */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-clinical-green/25 bg-clinical-greenSoft px-3 py-1">
                <MapPinIcon size={15} className="text-clinical-green" />
                <span className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.14em] text-clinical-green">
                  The Nigerian context layer
                </span>
              </div>
              <h2 className="mt-5 text-h2">
                Every major guide is written for Nigerian realities — not borrowed from elsewhere.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-slate">
                Global medical facts matter, but how care actually reaches people in Nigeria is
                different. Each guide speaks to the realities patients and families face here, so the
                information is not only correct, but usable.
              </p>
            </div>
            <Card className="p-7">
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {[
                  "Late diagnosis and silent conditions",
                  "Cost and access to care",
                  "Family decision-making",
                  "Self-medication risks",
                  "Pharmacy and over-the-counter habits",
                  "Rural and urban barriers",
                  "Herbal remedy safety",
                  "When to seek urgent care",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinical-greenSoft text-clinical-green">
                      <CheckIcon size={13} strokeWidth={2} />
                    </span>
                    <span className="text-[0.95rem] leading-snug text-ink/85">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/nigerian-health-context"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-clinical-blueDark no-underline hover:text-clinical-blue"
              >
                Read about the Nigerian context layer
                <ArrowRightIcon size={16} />
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 6. Featured guides */}
      <section className="border-y border-line bg-offwhite py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Featured Guides"
              title="Start with the most needed guides"
              intro="Reviewed, plain-language guides to the conditions Nigerian families face most."
            />
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 text-sm font-medium text-clinical-blueDark no-underline hover:text-clinical-blue"
            >
              All conditions A–Z
              <ArrowRightIcon size={16} />
            </Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <LinkCard key={c.slug} href={`/conditions/${c.slug}`} className="flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <UrgencyPill level={c.urgency} />
                  <span className="font-mono text-[0.62rem] uppercase tracking-wide text-slate-soft">
                    {c.readingTimeMinutes} min
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy group-hover:text-clinical-blue">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{c.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-clinical-blueDark">
                  Read the guide
                  <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </LinkCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 7. Patient navigation */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Patient navigation"
            title="Start from where you are"
            intro="Different needs call for different starting points. Choose what is true for you right now."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {patientNavigation.map((item, i) => (
              <LinkCard key={item.href} href={item.href} className="flex items-start gap-4 p-6">
                <span className="font-mono text-sm font-medium text-clinical-blueDark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3 className="font-serif text-lg text-navy group-hover:text-clinical-blue">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{item.description}</p>
                </span>
              </LinkCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 8. Institutional services */}
      <section className="bg-navy py-16 text-white md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-clinical-blueSoft">
                For institutions
              </p>
              <h2 className="mt-4 font-serif text-h2 text-white">
                Health infrastructure for hospitals, clinics and organisations.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-white/75">
                We build the digital and editorial backbone serious health institutions need — for
                hospitals, clinics, NGOs, schools, companies and professionals.
              </p>
              <Link
                href="/for-hospitals"
                className="mt-7 inline-flex items-center gap-2 rounded border border-white/30 bg-white px-5 py-3 text-sm font-medium text-navy no-underline transition-colors hover:bg-white/90 hover:text-navy"
              >
                Explore institutional services
                <ArrowRightIcon size={16} />
              </Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-2">
              {institutionalServices.map((svc) => (
                <div key={svc.title} className="bg-navy p-5">
                  <h3 className="font-serif text-base text-white">{svc.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────── 9. Trust system */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why you can trust this"
            title="A clear standard behind every guide"
            intro="We hold our content to an institutional standard — transparent, reviewed and honest about its limits."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((t) => (
              <Card key={t.label} className="p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-clinical-greenSoft text-clinical-green">
                    <CheckIcon size={15} strokeWidth={2} />
                  </span>
                  <h3 className="font-serif text-base text-navy">{t.label}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate">{t.detail}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/editorial-policy" className="text-sm font-medium text-clinical-blueDark no-underline hover:text-clinical-blue">
              Editorial Policy
            </Link>
            <Link href="/medical-review-policy" className="text-sm font-medium text-clinical-blueDark no-underline hover:text-clinical-blue">
              Medical Review Policy
            </Link>
            <Link href="/about" className="text-sm font-medium text-clinical-blueDark no-underline hover:text-clinical-blue">
              About the Institute
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
