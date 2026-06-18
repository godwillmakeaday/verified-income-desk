import type { SignalKind } from "./site";

export type IncomeCategory =
  | "Local Services"
  | "Smartphone Work"
  | "Digital Tasks"
  | "Resale/Sourcing"
  | "High-Risk Claims";

export type IncomeModel = {
  slug: string;
  code: string;
  title: string;
  category: IncomeCategory;
  status: SignalKind;
  summary: string;
  startingTools: string[];
  startingCostLevel: "Very low" | "Low" | "Medium" | "High" | "Avoid deposits";
  skillLevel: "Beginner" | "Beginner to intermediate" | "Intermediate" | "Advanced" | "Not recommended";
  realisticTimeframe: string;
  mainRisk: string;
  proofSignals: string[];
  failurePoints: string[];
  verdict: string;
  detailPath: string;
};

export const incomeCategories: IncomeCategory[] = [
  "Local Services",
  "Smartphone Work",
  "Digital Tasks",
  "Resale/Sourcing",
  "High-Risk Claims",
];

export const incomeModels: IncomeModel[] = [
  {
    slug: "local-business-website-services",
    code: "IM-01",
    title: "Local Business Website Services",
    category: "Local Services",
    status: "verified",
    summary:
      "A lawful service model: build and maintain simple websites for nearby businesses that need a credible online presence.",
    startingTools: ["Smartphone or laptop", "Basic website builder or Next.js template", "Portfolio sample", "Direct outreach list"],
    startingCostLevel: "Low",
    skillLevel: "Beginner to intermediate",
    realisticTimeframe:
      "A first serious test can run for 7 days; a fair market reading usually needs 30 days of outreach and follow-up.",
    mainRisk:
      "Client acquisition is harder than building the first simple website. Most outreach will not convert immediately.",
    proofSignals: [
      "Businesses visibly need websites, menus, contact pages, service pages, and trust signals.",
      "A buyer pays for a concrete deliverable, not a deposit-based income promise.",
      "The service can be demonstrated with a sample site before money changes hands.",
    ],
    failurePoints: [
      "Weak outreach or vague offer",
      "Overbuilding beyond the client’s actual need",
      "Poor maintenance agreement",
      "No proof sample to show prospects",
    ],
    verdict:
      "A realistic service pathway when kept simple, lawful, and evidence-led. Evidence for any individual user’s result remains personal and must be tested small.",
    detailPath: "/income-models/local-business-website-services",
  },
  {
    slug: "document-and-form-assistance",
    code: "IM-02",
    title: "Document and Form Assistance",
    category: "Local Services",
    status: "test",
    summary:
      "Helping people prepare, format, organize, and submit routine documents where the user already understands the lawful boundary of the task.",
    startingTools: ["Smartphone", "Document editor", "Printer or business centre access", "Checklist templates"],
    startingCostLevel: "Very low",
    skillLevel: "Beginner to intermediate",
    realisticTimeframe:
      "A 7-day test can identify demand; quality and trust normally take longer to establish.",
    mainRisk:
      "Crossing into unauthorized professional advice, mishandling personal information, or promising outcomes outside your control.",
    proofSignals: [
      "Clear task requested by a real customer",
      "Transparent fee before work starts",
      "No claim that the form outcome is controlled by the assistant",
    ],
    failurePoints: [
      "Privacy mistakes",
      "Unclear scope",
      "Poor formatting quality",
      "Taking tasks that require a licensed professional",
    ],
    verdict:
      "Possible as a small service model, but it must be bounded, careful, and respectful of legal, professional, and privacy limits.",
    detailPath: "/income-models/document-and-form-assistance",
  },
  {
    slug: "smartphone-content-production",
    code: "IM-03",
    title: "Smartphone Content Production",
    category: "Smartphone Work",
    status: "test",
    summary:
      "Producing useful phone-first video, audio, or written content for a defined audience or client, without overstating platform payouts.",
    startingTools: ["Smartphone", "Data plan", "Editing app", "Topic list", "Publishing account"],
    startingCostLevel: "Very low",
    skillLevel: "Beginner to intermediate",
    realisticTimeframe:
      "Audience trust usually takes months; a 7-day test should measure consistency, quality, and response, not income.",
    mainRisk:
      "Mistaking attention for income and accepting unrealistic payout timelines from content-course promoters.",
    proofSignals: [
      "Published examples",
      "Audience response data",
      "Client briefs or paid content tasks",
      "Clear path from content to service, product, or sponsorship",
    ],
    failurePoints: [
      "Random topics",
      "Poor audio or unclear message",
      "No distribution plan",
      "No buyer or service connection",
    ],
    verdict:
      "Useful as a skill-building and visibility pathway, but direct income is under review and should not be assumed.",
    detailPath: "/income-models/smartphone-content-production",
  },
  {
    slug: "freelance-digital-tasks",
    code: "IM-04",
    title: "Freelance Digital Tasks",
    category: "Digital Tasks",
    status: "caution",
    summary:
      "Selling specific deliverable tasks such as writing, transcription, simple design, spreadsheet cleanup, or research assistance.",
    startingTools: ["Smartphone or laptop", "Work samples", "Freelance profile", "Reliable delivery process"],
    startingCostLevel: "Low",
    skillLevel: "Intermediate",
    realisticTimeframe:
      "Profile setup can happen in 7 days; paid traction often requires repeated proposals, samples, and trust-building.",
    mainRisk:
      "Headline rates often ignore unpaid bidding time, platform competition, revisions, and fees.",
    proofSignals: [
      "Completed work samples",
      "Defined task scope",
      "Real buyer communication",
      "Transparent payment channel",
    ],
    failurePoints: [
      "No portfolio",
      "Undifferentiated profile",
      "Underpricing without a delivery system",
      "Relying on platform visibility alone",
    ],
    verdict:
      "Can work for specific skills, but it is often oversold. Treat it as skill commerce, not automatic online income.",
    detailPath: "/income-models/freelance-digital-tasks",
  },
  {
    slug: "local-resale-and-sourcing",
    code: "IM-05",
    title: "Local Resale and Sourcing",
    category: "Resale/Sourcing",
    status: "caution",
    summary:
      "Finding goods locally, confirming demand, and reselling with a margin after transport, defects, delays, and trust costs are counted.",
    startingTools: ["Market knowledge", "Supplier list", "Phone camera", "Delivery plan", "Basic records"],
    startingCostLevel: "Medium",
    skillLevel: "Intermediate",
    realisticTimeframe:
      "A test can begin with one low-risk item, but reliable margins require repeated buying and selling data.",
    mainRisk:
      "Margins can disappear through transport, spoilage, failed delivery, price changes, and slow-moving stock.",
    proofSignals: [
      "Known buyer before purchase",
      "Clear landed cost",
      "Documented sale price",
      "Repeat demand from more than one buyer",
    ],
    failurePoints: [
      "Buying before confirming demand",
      "Ignoring transport and defects",
      "Poor cash record",
      "Overtrusting supplier claims",
    ],
    verdict:
      "Workable in narrow cases, but capital risk is real. Start with one small, documented transaction.",
    detailPath: "/income-models/local-resale-and-sourcing",
  },
  {
    slug: "guaranteed-daily-returns-programs",
    code: "IM-06",
    title: "Guaranteed Daily Returns Programs",
    category: "High-Risk Claims",
    status: "flag",
    summary:
      "Deposit-based schemes that promise fixed daily or weekly returns. Listed for warning and pattern recognition, not participation.",
    startingTools: ["None recommended"],
    startingCostLevel: "Avoid deposits",
    skillLevel: "Not recommended",
    realisticTimeframe:
      "The advertised timeframe is part of the risk signal and should not be treated as evidence.",
    mainRisk:
      "Loss of funds, recruitment pressure, withdrawal blockage, and unclear operator identity.",
    proofSignals: [
      "Claim not independently confirmed",
      "Operator identity often unclear",
      "Promised payout is not evidence of capacity to pay",
    ],
    failurePoints: [
      "Deposit required before work",
      "Withdrawal delay",
      "New fee required at cash-out",
      "Income tied to recruitment",
    ],
    verdict:
      "Flagged. Do not treat fixed-return deposit claims as income opportunities.",
    detailPath: "/income-models/guaranteed-daily-returns-programs",
  },
];

export function getIncomeModel(slug: string) {
  return incomeModels.find((model) => model.slug === slug);
}
