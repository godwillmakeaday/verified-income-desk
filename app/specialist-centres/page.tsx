import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ArrowRightIcon, iconBySlug } from "@/components/icons";
import { specialistCentres } from "@/lib/site";
import { getConditionBySlug } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Specialist Centres",
  description:
    "Curated medical knowledge organised by area of care — heart and blood pressure, diabetes, maternal health, kidney health, mental health and preventive health.",
  alternates: { canonical: "/specialist-centres" },
};

export default function SpecialistCentresPage() {
  return (
    <>
      <PageHero
        eyebrow="Organised by area of care"
        title="Specialist Centres"
        lede="Each centre gathers our reviewed guides for one area of care, so patients and clinicians can find related conditions, tests and prevention in one place. More centres and guides are added as they are reviewed."
      />

      <Container className="py-12 md:py-16">
        <div className="space-y-5">
          {specialistCentres.map((centre) => {
            const Icon = iconBySlug[centre.slug];
            const centreConditions = centre.conditionSlugs
              .map((s) => getConditionBySlug(s))
              .filter((c): c is NonNullable<typeof c> => Boolean(c));

            return (
              <section
                key={centre.slug}
                id={centre.slug}
                className="scroll-mt-28 overflow-hidden rounded-lg border border-line bg-white shadow-card"
              >
                <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10 md:p-8">
                  {/* Left: identity */}
                  <div>
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blue">
                          <Icon size={24} />
                        </span>
                      )}
                      <Eyebrow muted>{centre.focus}</Eyebrow>
                    </div>
                    <h2 className="mt-4 font-serif text-2xl text-navy">{centre.name}</h2>
                    <p className="mt-2 text-[0.99rem] leading-relaxed text-slate">
                      {centre.description}
                    </p>
                  </div>

                  {/* Right: guides */}
                  <div className="md:border-l md:border-line md:pl-10">
                    <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
                      Guides in this centre
                    </p>
                    {centreConditions.length > 0 ? (
                      <ul className="mt-4 divide-y divide-lineSoft">
                        {centreConditions.map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={`/conditions/${c.slug}`}
                              className="group flex items-center justify-between gap-4 py-3 no-underline"
                            >
                              <span>
                                <span className="block font-medium text-navy group-hover:text-clinical-blue">
                                  {c.title}
                                </span>
                                <span className="mt-0.5 block text-sm text-slate">
                                  {c.summary}
                                </span>
                              </span>
                              <ArrowRightIcon
                                size={18}
                                className="shrink-0 text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:text-clinical-blue"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 rounded-lg border border-dashed border-line bg-offwhite px-4 py-6 text-sm text-slate">
                        Guides for this centre are being prepared for review. In the
                        meantime, explore the{" "}
                        <Link href="/conditions">Conditions A–Z</Link>.
                      </p>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </>
  );
}
