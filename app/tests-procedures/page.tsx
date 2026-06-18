import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { AZIndex, type AZEntry } from "@/components/AZIndex";
import { tests } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tests & Procedures",
  description:
    "Understand common medical tests and procedures — what they check, how they are done, and what the results mean, explained for Nigerian patients.",
  alternates: { canonical: "/tests-procedures" },
};

export default function TestsPage() {
  const entries: AZEntry[] = tests.map((t) => ({
    title: t.title,
    href: "/tests-procedures",
    blurb: t.blurb,
    available: false,
  }));

  return (
    <>
      <PageHero
        eyebrow="Health library"
        title="Tests & Procedures"
        lede="What a test checks, how it is done, and how to read the result. Knowing what to expect makes a hospital visit calmer and your questions clearer. Full guides are being prepared for review."
      />
      <Container className="py-12 md:py-16">
        <AZIndex entries={entries} />
      </Container>
    </>
  );
}
