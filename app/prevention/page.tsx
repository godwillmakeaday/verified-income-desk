import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { AZIndex, type AZEntry } from "@/components/AZIndex";
import { preventionGuides } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prevention Guides",
  description:
    "Screening schedules, vaccines, malaria prevention and everyday habits that lower your risk — practical, affordable prevention for Nigerian families.",
  alternates: { canonical: "/prevention" },
};

export default function PreventionPage() {
  const entries: AZEntry[] = preventionGuides.map((p) => ({
    title: p.title,
    href: "/prevention",
    blurb: p.blurb,
    available: false,
  }));

  return (
    <>
      <PageHero
        eyebrow="Health library"
        title="Prevention Guides"
        lede="The most affordable medicine is prevention. These guides cover what to screen for and how often, which vaccines matter, and the everyday habits that lower risk. Full guides are being prepared for review."
      />
      <Container className="py-12 md:py-16">
        <AZIndex entries={entries} />
      </Container>
    </>
  );
}
