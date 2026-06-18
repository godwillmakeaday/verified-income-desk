import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, UrgencyPill, Pill } from "@/components/ui";
import {
  EmergencyCallout,
  NigerianContextBlock,
  Disclaimer,
  MetadataStrip,
} from "@/components/callouts";
import { CheckIcon, ArrowRightIcon, AlertIcon } from "@/components/icons";
import {
  getConditionBySlug,
  getConditionSlugs,
  getAllConditions,
} from "@/lib/conditions";
import { getCentreBySlug } from "@/lib/site";

export function generateStaticParams() {
  return getConditionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getConditionBySlug(params.slug);
  if (!article) return { title: "Condition not found" };
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/conditions/${article.slug}` },
    openGraph: {
      title: `${article.title} · Health Clarity Institute`,
      description: article.metaDescription,
      type: "article",
    },
  };
}

/** A standard prose section with a serif heading and id anchor. */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-line pt-9">
      <h2 className="text-h2">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ProseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 prose-clinical">
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-blue"
            aria-hidden="true"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const TOC: { id: string; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "Causes" },
  { id: "risk-factors", label: "Risk factors" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "prevention", label: "Prevention" },
  { id: "complications", label: "Complications" },
  { id: "urgent", label: "When it is urgent" },
  { id: "nigerian-context", label: "Nigerian context" },
  { id: "questions", label: "Questions for your doctor" },
  { id: "faqs", label: "FAQs" },
  { id: "sources", label: "Sources" },
];

export default function ConditionPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getConditionBySlug(params.slug);
  if (!article) notFound();

  const centre = article.specialtyCentre
    ? getCentreBySlug(article.specialtyCentre)
    : undefined;

  const related = getAllConditions()
    .filter((c) => c.slug !== article.slug)
    .filter((c) =>
      centre ? c.specialtyCentre === article.specialtyCentre : true
    )
    .slice(0, 3);

  // Only show TOC rows that have content.
  const toc = TOC.filter((t) => {
    switch (t.id) {
      case "symptoms":
        return Boolean(article.symptoms);
      case "causes":
        return Boolean(article.causes?.length);
      case "risk-factors":
        return Boolean(article.riskFactors?.length);
      case "diagnosis":
        return Boolean(article.diagnosis?.length);
      case "treatment":
        return Boolean(article.treatment);
      case "prevention":
        return Boolean(article.prevention?.length);
      case "complications":
        return Boolean(article.complications?.length);
      case "urgent":
        return Boolean(article.urgentCare?.length);
      case "questions":
        return Boolean(article.questionsForDoctor?.length);
      case "faqs":
        return Boolean(article.faqs?.length);
      default:
        return true;
    }
  });

  return (
    <>
      {/* ── Header band */}
      <section className="border-b border-line bg-offwhite">
        <Container className="py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-slate-soft">
              <li>
                <Link href="/" className="link-quiet">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/conditions" className="link-quiet">
                  Conditions
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy">{article.title}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <UrgencyPill level={article.urgency} />
            {centre && (
              <Link href={`/specialist-centres#${centre.slug}`} className="no-underline">
                <Pill tone="navy">{centre.name}</Pill>
              </Link>
            )}
          </div>

          <h1 className="mt-5 max-w-3xl text-h1">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-[1.15rem] leading-relaxed text-slate">
            {article.summary}
          </p>
        </Container>
      </section>

      {/* ── Body: TOC + article */}
      <Container className="grid gap-10 py-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14 lg:py-16">
        {/* TOC */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
            On this page
          </p>
          <nav className="mt-3 border-l border-line">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm no-underline transition-colors ${
                  t.id === "urgent"
                    ? "border-transparent text-clinical-red hover:border-clinical-red"
                    : "border-transparent text-slate hover:border-clinical-blue hover:text-clinical-blue"
                }`}
              >
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Article */}
        <article className="min-w-0 max-w-prose">
          <div className="space-y-9">
            {/* Overview (no top border) */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-h2">Overview</h2>
              <div className="prose-clinical mt-4">
                {article.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {article.symptoms && (
              <Section id="symptoms" title="Symptoms">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg text-navy">Common symptoms</h3>
                    <div className="mt-3">
                      <ProseList items={article.symptoms.common} />
                    </div>
                  </div>
                  {article.symptoms.warning.length > 0 && (
                    <div className="rounded-lg border border-clinical-amber/30 bg-clinical-amberSoft/60 p-5">
                      <div className="flex items-center gap-2">
                        <AlertIcon size={18} className="text-clinical-amber" />
                        <h3 className="font-serif text-lg text-clinical-amber">
                          Warning symptoms — do not ignore
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {article.symptoms.warning.map((it, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/90"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-amber"
                              aria-hidden="true"
                            />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {article.causes?.length ? (
              <Section id="causes" title="Causes">
                <ProseList items={article.causes} />
              </Section>
            ) : null}

            {article.riskFactors?.length ? (
              <Section id="risk-factors" title="Risk factors">
                <ProseList items={article.riskFactors} />
              </Section>
            ) : null}

            {article.diagnosis?.length ? (
              <Section id="diagnosis" title="Diagnosis">
                <ProseList items={article.diagnosis} />
              </Section>
            ) : null}

            {article.treatment && (
              <Section id="treatment" title="Treatment">
                <div className="space-y-6">
                  {article.treatment.lifestyle.length > 0 && (
                    <div>
                      <h3 className="font-serif text-lg text-navy">
                        Lifestyle and self-care
                      </h3>
                      <div className="mt-3">
                        <ProseList items={article.treatment.lifestyle} />
                      </div>
                    </div>
                  )}
                  {article.treatment.medical.length > 0 && (
                    <div>
                      <h3 className="font-serif text-lg text-navy">
                        Medical treatment
                      </h3>
                      <div className="mt-3">
                        <ProseList items={article.treatment.medical} />
                      </div>
                    </div>
                  )}
                </div>
              </Section>
            )}

            {article.prevention?.length ? (
              <Section id="prevention" title="Prevention">
                <ProseList items={article.prevention} />
              </Section>
            ) : null}

            {article.complications?.length ? (
              <Section id="complications" title="Complications">
                <ProseList items={article.complications} />
              </Section>
            ) : null}

            {/* Urgent care — full-bleed callout */}
            {article.urgentCare?.length ? (
              <div id="urgent" className="scroll-mt-32 border-t border-line pt-9">
                <EmergencyCallout items={article.urgentCare} />
              </div>
            ) : null}

            {/* Nigerian context — signature block */}
            <div className="scroll-mt-32 border-t border-line pt-9">
              <NigerianContextBlock items={article.nigerianContext} />
            </div>

            {article.questionsForDoctor?.length ? (
              <Section id="questions" title="Questions to ask your doctor">
                <ul className="space-y-3">
                  {article.questionsForDoctor.map((q, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-lg border border-line bg-white p-4 prose-clinical shadow-card"
                    >
                      <CheckIcon size={18} className="mt-0.5 shrink-0 text-clinical-green" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}

            {article.faqs?.length ? (
              <Section id="faqs" title="Frequently asked questions">
                <div className="divide-y divide-line">
                  {article.faqs.map((f, i) => (
                    <div key={i} className="py-4 first:pt-0">
                      <h3 className="font-serif text-lg text-navy">{f.question}</h3>
                      <p className="mt-2 prose-clinical">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {/* Sources */}
            <Section id="sources" title="Sources">
              <ol className="space-y-3">
                {article.sources.map((s, i) => (
                  <li key={i} className="text-sm leading-relaxed text-slate">
                    <span className="font-medium text-navy">{s.label}.</span>{" "}
                    {s.publisher}
                    {s.year ? `, ${s.year}` : ""}.
                    {s.url && (
                      <>
                        {" "}
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-words"
                        >
                          {s.url}
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </Section>

            {/* Metadata + disclaimer */}
            <div className="space-y-5 border-t border-line pt-9">
              <MetadataStrip article={article} />
              <Disclaimer reviewer={article.reviewer} />
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14 border-t border-line pt-9">
              <h2 className="font-serif text-xl text-navy">Related guides</h2>
              <ul className="mt-5 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/conditions/${r.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-white p-4 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover"
                    >
                      <span>
                        <span className="block font-medium text-navy group-hover:text-clinical-blue">
                          {r.title}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate">{r.summary}</span>
                      </span>
                      <ArrowRightIcon
                        size={18}
                        className="shrink-0 text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:text-clinical-blue"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </Container>
    </>
  );
}
