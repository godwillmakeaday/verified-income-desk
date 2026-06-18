export const site = {
  name: "Verified Income Desk",
  short: "VID",
  tagline: "Internet income literacy without illusion.",
  description:
    "Verified Income Desk is a public-interest income literacy platform for testing online and local income models, separating realistic opportunity from exaggeration, scam behavior, and false promises.",
  doctrine: "The platform is not selling income. It is building judgment around income claims.",
  url: "https://verified-income-desk.vercel.app",
};

export type SignalKind = "verified" | "test" | "caution" | "flag";

export const signalLabels: Record<SignalKind, string> = {
  verified: "Verified",
  test: "Under Test",
  caution: "Caution",
  flag: "Flagged",
};

export const proofSignals: {
  kind: SignalKind;
  name: string;
  meaning: string;
  short: string;
}[] = [
  {
    kind: "verified",
    name: "Verified",
    short: "Observable and repeatable",
    meaning:
      "The model has observable evidence, real-world use, repeatable process, and clear limitations. It still does not create a promise of earnings.",
  },
  {
    kind: "test",
    name: "Under Test",
    short: "Evidence still being collected",
    meaning:
      "The model may be possible, but evidence is still being collected. Users should treat the claim as provisional and start only with a small, reversible test.",
  },
  {
    kind: "caution",
    name: "Caution",
    short: "Possible but often overstated",
    meaning:
      "The model can work in limited situations but is often exaggerated, misunderstood, or dependent on skill, location, trust, timing, or capital.",
  },
  {
    kind: "flag",
    name: "Flagged",
    short: "Scam-like pattern detected",
    meaning:
      "The model shows scam-like patterns, unrealistic promises, unclear operators, withdrawal problems, or exploitative design.",
  },
];

export const nav = [
  { label: "Registry", href: "/income-models" },
  { label: "Methodology", href: "/methodology" },
  { label: "Submit Claim", href: "/submit-claim" },
  { label: "Scam Signals", href: "/anti-scam-notes" },
  { label: "Field Tests", href: "/field-tests" },
  { label: "Playbooks", href: "/starter-playbooks" },
];

export const footerLinks = [
  { label: "Income Registry", href: "/income-models" },
  { label: "Methodology", href: "/methodology" },
  { label: "Submit Claim", href: "/submit-claim" },
  { label: "Anti-Scam Notes", href: "/anti-scam-notes" },
  { label: "Field Tests", href: "/field-tests" },
  { label: "Starter Playbooks", href: "/starter-playbooks" },
];
