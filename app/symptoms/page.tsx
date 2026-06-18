import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { AZIndex, type AZEntry } from "@/components/AZIndex";
import { symptoms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Symptoms A–Z",
  description:
    "An A–Z of common symptoms for Nigerian patients — what each may mean, the warning signs to watch for, and when a symptom needs urgent care.",
  alternates: { canonical: "/symptoms" },
};

export default function SymptomsPage() {
  const entries: AZEntry[] = symptoms.map((s) => ({
    title: s.title,
    href: "/symptoms",
    blurb: s.blurb,
    available: false,
  }));

  return (
    <>
      <PageHero
        eyebrow="Health library"
        title="Symptoms A–Z"
        lede="Start from what you are feeling. These guides explain what a symptom may mean, the features that signal something serious, and when to seek care. Full symptom guides are being prepared for review."
      />
      <Container className="py-12 md:py-16">
        <AZIndex entries={entries} />
      </Container>
    </>
  );
}
