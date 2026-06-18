# Health Clarity Institute Nigeria

A premium institutional health-knowledge and patient-navigation platform for
Nigerian patients, families and institutions. Built with **Next.js 14 (App
Router)**, **TypeScript** and **Tailwind CSS**.

The platform provides reviewed, plain-language medical guides with a recurring
**Nigerian context** layer (cost, access, late diagnosis, self-medication and
when to seek urgent care), organised into specialist centres and a searchable
health library designed to scale to thousands of entries.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

Requires Node.js 18.17+ (Next.js 14).

---

## Project structure

```
app/                         App Router pages
  layout.tsx                 Root layout: fonts, header, footer, SEO base
  page.tsx                   Homepage (9 sections)
  globals.css                Tailwind layers + component classes
  conditions/
    page.tsx                 Conditions A–Z index
    [slug]/page.tsx          Dynamic condition guide template (SSG)
  health-library/page.tsx    Library hub + search
  symptoms/page.tsx          Symptoms A–Z
  tests-procedures/page.tsx  Tests & Procedures A–Z
  medicines/page.tsx         Medicines & Treatment A–Z
  prevention/page.tsx        Prevention Guides A–Z
  specialist-centres/page.tsx
  nigerian-health-context/page.tsx
  for-hospitals/page.tsx     Institutional services
  about/page.tsx
  editorial-policy/page.tsx
  medical-review-policy/page.tsx
  contact/page.tsx
  not-found.tsx              Custom 404

components/                  Reusable UI (Header, Footer, SearchBar, callouts,
                             cards, icons, PageHero, AZIndex)

lib/
  types.ts                   HealthArticle data model (the core record shape)
  conditions.ts              6 fully-authored condition guides + helpers
  site.ts                    Site metadata, nav, centres, library indexes
  search.ts                  Flat search index + scoring
```

---

## The data model

Every clinical page is one `HealthArticle` record (see `lib/types.ts`). Adding a
new guide means adding **data**, not new code — the dynamic template at
`app/conditions/[slug]/page.tsx` renders any well-formed record and is
pre-generated at build time via `generateStaticParams`.

Six guides are authored in full: **hypertension, diabetes, malaria, stroke,
kidney disease, pregnancy danger signs**. The Symptoms / Tests / Medicines /
Prevention sections currently use lightweight placeholder indexes in `lib/site.ts`
that can later be promoted to full `HealthArticle` records.

---

## Important notes

- **Educational only.** All content is for education and is not a substitute for
  professional medical diagnosis or treatment. Emergency guidance is surfaced
  prominently where relevant.
- **Reviewer & review dates are placeholders** pending real clinical sign-off,
  as stated on each guide and in the Medical Review Policy.
- **Design system:** Newsreader (serif headings), IBM Plex Sans (body) and IBM
  Plex Mono (clinical metadata), on a navy / medical-blue / clinical-green
  palette over warm off-white. Tokens live in `tailwind.config.ts`.

---

## Customising

- **Brand / contact:** edit the `site` object in `lib/site.ts`.
- **Navigation & centres:** `primaryNav`, `specialistCentres`, `coreNavCards` in
  `lib/site.ts`.
- **Add a condition:** append a `HealthArticle` to `conditions` in
  `lib/conditions.ts`. It will appear in search, the A–Z, its specialist centre,
  and get its own statically-generated page automatically.
