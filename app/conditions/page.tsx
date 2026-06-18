import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { AZIndex, type AZEntry } from "@/components/AZIndex";
import { getAllConditions } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Conditions A–Z",
  description:
    "An A–Z of medical conditions explained in plain language for Nigerian patients and families — symptoms, treatment, prevention and when to seek urgent care.",
  alternates: { canonical: "/conditions" },
};

// A small set of common conditions we will publish next, shown as "coming soon"
// so the index reads as an institution-in-progress rather than a thin list.
const upcoming: { title: string; slug: string; blurb: string }[] = [
  { title: "Anaemia", slug: "anaemia", blurb: "Low blood count — causes, testing and treatment." },
  { title: "Asthma", slug: "asthma", blurb: "Managing the airways and avoiding attacks." },
  { title: "Hepatitis B", slug: "hepatitis-b", blurb: "A common liver infection in Nigeria — testing and care." },
  { title: "Peptic ulcer", slug: "peptic-ulcer", blurb: "Stomach and duodenal ulcers explained." },
  { title: "Sickle cell disease", slug: "sickle-cell-disease", blurb: "Living well and preventing crises." },
  { title: "Tuberculosis", slug: "tuberculosis", blurb: "Recognising TB and completing treatment." },
  { title: "Typhoid fever", slug: "typhoid-fever", blurb: "Diagnosis beyond the Widal test, and treatment." },
  { title: "Urinary tract infection", slug: "uti", blurb: "Symptoms, testing and safe treatment." },
];

export default function ConditionsIndexPage() {
  const published: AZEntry[] = getAllConditions().map((c) => ({
    title: c.title,
    href: `/conditions/${c.slug}`,
    blurb: c.summary,
    available: true,
  }));

  const coming: AZEntry[] = upcoming.map((u) => ({
    title: u.title,
    href: "/conditions",
    blurb: u.blurb,
    available: false,
  }));

  const entries = [...published, ...coming];

  return (
    <>
      <PageHero
        eyebrow="Health library"
        title="Conditions A–Z"
        lede="Clear, reviewed guides to medical conditions — what they are, how they are diagnosed and treated, and the Nigerian realities of getting care. Entries marked “coming soon” are being prepared for review."
      />
      <Container className="py-12 md:py-16">
        <AZIndex entries={entries} />
      </Container>
    </>
  );
}
