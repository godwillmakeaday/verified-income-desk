import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Disclaimer } from "@/components/callouts";

export const metadata: Metadata = {
  title: "Medical Review Policy",
  description:
    "How clinical content on Health Clarity Institute is reviewed by qualified professionals, dated, and kept current — and what our reviewer placeholders mean.",
  alternates: { canonical: "/medical-review-policy" },
};

const sections: { heading: string; paras: string[] }[] = [
  {
    heading: "Why we review",
    paras: [
      "Health content carries real consequences. A guide that is clear but wrong is more dangerous than one that is merely unclear. Clinical review is how we protect readers from confident error.",
    ],
  },
  {
    heading: "Who reviews",
    paras: [
      "Clinical guides are intended for review by qualified Nigerian health professionals with relevant expertise — for example, a physician for a condition guide, with input from the appropriate specialty. Reviewers check that content is accurate, current, appropriately cautious, and safe.",
    ],
  },
  {
    heading: "What review checks",
    paras: [
      "A reviewer confirms that the clinical facts are correct and current; that symptoms, red flags and urgent-care guidance are complete and not misleading; that treatment descriptions do not amount to a prescription; and that the Nigerian context section is realistic and responsible.",
    ],
  },
  {
    heading: "Dating and re-review",
    paras: [
      "Each guide displays the date it was last reviewed and the date it is next due. Guides are re-reviewed on schedule, and sooner if evidence changes or a reader raises a concern.",
    ],
  },
  {
    heading: "About the placeholders on this site",
    paras: [
      "This platform is in active development. Reviewer names, credentials and review dates currently shown on guides are placeholders, included to demonstrate the structure of a finished, signed-off guide. No guide should be treated as clinically signed off until a named reviewer and real dates appear and these placeholder notices are removed.",
    ],
  },
];

export default function MedicalReviewPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Medical Review Policy"
        lede="Clinical review is the backbone of a trustworthy health library. This is how it works at Health Clarity Institute — including an honest note on the placeholders you will currently see."
      />
      <Container className="py-12 md:py-16">
        <div className="max-w-prose">
          <div className="space-y-10">
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

          <div className="mt-12">
            <Disclaimer reviewer={{ name: "", credentials: "", specialty: "" }} />
          </div>

          <div className="mt-6 rounded-lg border border-line bg-offwhite p-6 text-sm leading-relaxed text-slate">
            Read our <Link href="/editorial-policy">Editorial Policy</Link> for how guides are
            written and structured, or <Link href="/contact">contact us</Link> to raise a
            clinical concern.
          </div>
        </div>
      </Container>
    </>
  );
}
