// lib/search.ts
// A flat, searchable index across every content type. As the library grows,
// new records flow into this index automatically.

import { conditions } from "./conditions";
import { symptoms, tests, medicines, preventionGuides } from "./site";

export interface SearchItem {
  title: string;
  href: string;
  kind: string;
  blurb: string;
  keywords: string;
}

export const searchIndex: SearchItem[] = [
  ...conditions.map((c) => ({
    title: c.title,
    href: `/conditions/${c.slug}`,
    kind: "Condition",
    blurb: c.summary,
    keywords: `${c.title} ${c.summary} condition`.toLowerCase(),
  })),
  ...symptoms.map((s) => ({
    title: s.title,
    href: `/symptoms#${s.slug}`,
    kind: "Symptom",
    blurb: s.blurb,
    keywords: `${s.title} ${s.blurb} symptom`.toLowerCase(),
  })),
  ...tests.map((t) => ({
    title: t.title,
    href: `/tests-procedures#${t.slug}`,
    kind: "Test",
    blurb: t.blurb,
    keywords: `${t.title} ${t.blurb} test procedure`.toLowerCase(),
  })),
  ...medicines.map((m) => ({
    title: m.title,
    href: `/medicines#${m.slug}`,
    kind: "Medicine",
    blurb: m.blurb,
    keywords: `${m.title} ${m.blurb} medicine treatment`.toLowerCase(),
  })),
  ...preventionGuides.map((p) => ({
    title: p.title,
    href: `/prevention#${p.slug}`,
    kind: "Prevention",
    blurb: p.blurb,
    keywords: `${p.title} ${p.blurb} prevention screening`.toLowerCase(),
  })),
];

export function searchLibrary(query: string, limit = 6): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((item) => {
      let score = 0;
      for (const term of terms) {
        if (item.title.toLowerCase().includes(term)) score += 3;
        if (item.keywords.includes(term)) score += 1;
      }
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
}
