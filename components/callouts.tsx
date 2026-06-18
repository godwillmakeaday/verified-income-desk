import * as React from "react";
import { AlertIcon, MapPinIcon } from "./icons";
import type { HealthArticle } from "@/lib/types";

/** Emergency / when-it-is-urgent callout — clinical red, high-prominence. */
export function EmergencyCallout({
  items,
  title = "When to seek urgent care",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <aside
      id="urgent"
      className="rounded-lg border border-clinical-red/30 bg-clinical-redSoft p-6 md:p-7"
      role="note"
      aria-label={title}
    >
      <div className="flex items-center gap-2.5">
        <AlertIcon size={20} className="text-clinical-red" />
        <h3 className="font-serif text-lg text-clinical-red">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-red" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** The recurring Nigerian-context block — the platform's signature element. */
export function NigerianContextBlock({ items }: { items: string[] }) {
  return (
    <section
      id="nigerian-context"
      className="overflow-hidden rounded-lg border border-line bg-offwhite"
    >
      <div className="flex items-center gap-2.5 border-l-4 border-clinical-green bg-clinical-greenSoft/60 px-6 py-3.5">
        <MapPinIcon size={18} className="text-clinical-green" />
        <h3 className="font-mono text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-clinical-green">
          The Nigerian context
        </h3>
      </div>
      <div className="border-l-4 border-clinical-green px-6 py-5">
        <div className="space-y-3.5">
          {items.map((it, i) => (
            <p key={i} className="text-[0.99rem] leading-[1.7] text-ink/90">
              {it}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Educational disclaimer — appears on every clinical page. */
export function Disclaimer({ reviewer }: { reviewer?: HealthArticle["reviewer"] }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5 text-sm leading-relaxed text-slate">
      <p>
        <span className="font-medium text-navy">Educational information only.</span> This guide is
        written to help you understand your health. It is not a diagnosis, a prescription, or a
        substitute for assessment by a qualified health professional. Always seek personal medical
        advice for your own situation, and get urgent care in an emergency.
      </p>
      {reviewer && (
        <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-slate-soft">
          Reviewer and review dates shown on this page are placeholders pending clinical sign-off.
        </p>
      )}
    </div>
  );
}

/** Clinical-record metadata strip: reviewer, last reviewed, reading time. */
export function MetadataStrip({ article }: { article: HealthArticle }) {
  const reviewed = new Date(article.lastReviewed).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const next = new Date(article.nextReview).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

  const rows: { label: string; value: string }[] = [
    { label: "Reviewed by", value: `${article.reviewer.name} · ${article.reviewer.credentials}` },
    { label: "Specialty", value: article.reviewer.specialty },
    { label: "Last reviewed", value: reviewed },
    { label: "Next review", value: next },
    { label: "Reading time", value: `${article.readingTimeMinutes} min` },
    { label: "Sources", value: `${article.sources.length} references` },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-lg border border-line bg-offwhite p-5 sm:grid-cols-3">
      {rows.map((r) => (
        <div key={r.label}>
          <dt className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-slate-soft">
            {r.label}
          </dt>
          <dd className="mt-1 text-sm font-medium text-navy">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
