import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { AZIndex, type AZEntry } from "@/components/AZIndex";
import { Disclaimer } from "@/components/callouts";
import { medicines } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicines & Treatment Guides",
  description:
    "How common medicines work, how to use them safely and as prescribed, and why finishing a course matters — written for Nigerian patients.",
  alternates: { canonical: "/medicines" },
};

export default function MedicinesPage() {
  const entries: AZEntry[] = medicines.map((m) => ({
    title: m.title,
    href: "/medicines",
    blurb: m.blurb,
    available: false,
  }));

  return (
    <>
      <PageHero
        eyebrow="Health library"
        title="Medicines & Treatment Guides"
        lede="How treatments work, how to take them safely, and the habits that keep them effective — including why self-medication and unfinished courses cause harm. Full guides are being prepared for review."
      />
      <Container className="py-12 md:py-16">
        <div className="mb-10 max-w-prose">
          <Disclaimer />
        </div>
        <AZIndex entries={entries} />
      </Container>
    </>
  );
}
