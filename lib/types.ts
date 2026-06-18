// lib/types.ts
// Core data model for Health Clarity Institute Nigeria.
// Every clinical page in the platform is one HealthArticle record. This shape is
// designed so the library can grow to hundreds or thousands of entries without
// changing the rendering layer — new content is data, not new code.

export type ArticleCategory =
  | "condition"
  | "symptom"
  | "test"
  | "medicine"
  | "prevention";

export type UrgencyLevel = "routine" | "see-doctor" | "urgent" | "emergency";

export interface MedicalReviewer {
  name: string;
  credentials: string; // e.g. "MBBS, FWACP"
  specialty: string; // e.g. "Internal Medicine / Cardiology"
  institution?: string;
}

export interface Source {
  label: string; // human-readable citation
  publisher: string; // e.g. "World Health Organization"
  year?: number;
  url?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

/**
 * A full clinical knowledge article. Optional sections allow lighter entries
 * (e.g. a symptom or medicine page) to reuse the same record shape as a full
 * condition guide.
 */
export interface HealthArticle {
  slug: string;
  title: string;
  category: ArticleCategory;
  /** Short plain-language sentence used on cards and in search results. */
  summary: string;
  /** SEO meta description (≤ ~160 chars). */
  metaDescription: string;
  /** Specialist centre this article is filed under, if any. */
  specialtyCentre?: string;
  readingTimeMinutes: number;
  urgency: UrgencyLevel;

  overview: string[];
  symptoms?: { common: string[]; warning: string[] };
  causes?: string[];
  riskFactors?: string[];
  diagnosis?: string[];
  treatment?: { lifestyle: string[]; medical: string[] };
  prevention?: string[];
  complications?: string[];
  /** When to seek urgent care — safety-critical, always rendered prominently. */
  urgentCare?: string[];
  /** Nigerian realities: cost, access, late diagnosis, self-medication, etc. */
  nigerianContext: string[];
  questionsForDoctor?: string[];
  faqs?: FAQ[];
  sources: Source[];

  reviewer: MedicalReviewer;
  lastReviewed: string; // ISO date, e.g. "2026-04-12"
  nextReview: string; // ISO date
}

export interface SpecialistCentre {
  slug: string;
  name: string;
  focus: string;
  description: string;
  conditionSlugs: string[];
}

export interface NavCard {
  title: string;
  description: string;
  href: string;
}
