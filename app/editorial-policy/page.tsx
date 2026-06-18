import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How Health Clarity Institute writes, structures, reviews and updates its health content — and the principles that keep it clear, accurate and safe.",
  alternates: { canonical: "/editorial-policy" },
};

const sections: { heading: string; paras: string[] }[] = [
  {
    heading: "Our purpose",
    paras: [
      "Our content exists to help people understand health conditions, tests, medicines and prevention, and to navigate care with more confidence. It is educational. It does not diagnose, prescribe, or replace assessment by a qualified professional.",
    ],
  },
  {
    heading: "How we write",
    paras: [
      "We write in plain language, for a reader who may be anxious and short of time. We prefer short sentences, define terms when we must use them, and structure every condition guide in the same predictable order so readers always know where to look.",
      "We avoid hype, miracle claims and fear for its own sake. Where evidence is uncertain, we say so. Where a decision belongs to a clinician, we say that too.",
    ],
  },
  {
    heading: "Accuracy and sources",
    paras: [
      "Guides are based on reputable clinical and public-health sources, and each lists the references it draws on. Where Nigerian guidance or context exists, we prioritise it. We aim to reflect current consensus, not any single opinion.",
    ],
  },
  {
    heading: "The Nigerian context standard",
    paras: [
      "Every major guide carries a dedicated section on Nigerian realities — late diagnosis, cost, access, family decision-making, self-medication, pharmacy habits and rural–urban barriers. This is a requirement of our editorial standard, not an optional extra.",
    ],
  },
  {
    heading: "Safety and emergencies",
    paras: [
      "Where a condition can become an emergency, the guide states the warning signs plainly and early, and tells the reader to seek urgent care. Safety guidance is never buried.",
    ],
  },
  {
    heading: "Review and updating",
    paras: [
      "Content is prepared for review by qualified professionals before publication, and is dated with its last review and next scheduled review. We update guides when evidence changes, when readers flag an issue, or when a scheduled review falls due.",
    ],
  },
  {
    heading: "Independence and corrections",
    paras: [
      "Our editorial judgement is not for sale; institutional clients do not influence clinical content. If you believe something is inaccurate or unclear, please tell us and we will review it.",
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Editorial Policy"
        lede="The principles and process behind every guide we publish — written so you can judge our work, not just trust it."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-slate-soft">
            This policy applies to all clinical content on the platform.
          </p>
          <div className="mt-8 space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading} className="border-t border-line pt-7 first:border-0 first:pt-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-clinical-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl text-navy">{s.heading}</h2>
                </div>
                <div className="prose-clinical mt-3">
                  {s.paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-line bg-offwhite p-6 text-sm leading-relaxed text-slate">
            See also our{" "}
            <Link href="/medical-review-policy">Medical Review Policy</Link> for how clinical
            review works, or <Link href="/contact">contact us</Link> with a correction.
          </div>
        </div>
      </Container>
    </>
  );
}
