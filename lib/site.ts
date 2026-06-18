export const site = {
  name: "Verified Income Desk",
  short: "VID",
  tagline: "Income literacy, tested in public.",
  description:
    "Verified Income Desk is a public-interest income literacy platform for tested income models, realistic digital work pathways, local business service experiments, anti-scam education, proof signals, and field-tested earning playbooks.",
  url: "https://verifiedincomedesk.org",
};

export type SignalKind = "verified" | "test" | "caution" | "flag";

export const signalLabels: Record<SignalKind, string> = {
  verified: "Verified",
  test: "Under test",
  caution: "Caution",
  flag: "Flagged",
};

export const nav = [
  { label: "What this is", href: "/#what-this-is" },
  { label: "Income models", href: "/#income-models" },
  { label: "Field tests", href: "/#field-tests" },
  { label: "Proof signals", href: "/#proof-signals" },
  { label: "Anti-scam", href: "/#anti-scam" },
  { label: "Playbooks", href: "/#playbooks" },
  { label: "Methodology", href: "/#methodology" },
];

export type IncomeModel = {
  code: string;
  title: string;
  href?: string;
  signal: SignalKind;
  effort: string;
  capital: string;
  summary: string;
};

export const incomeModels: IncomeModel[] = [
  {
    code: "IM-01",
    title: "Local business website services",
    href: "/income-models/local-business-website-services",
    signal: "verified",
    effort: "Skill-led",
    capital: "Low",
    summary:
      "Building and maintaining simple websites for nearby shops, clinics, schools, and tradespeople who currently have no web presence.",
  },
  {
    code: "IM-02",
    title: "Document and form assistance",
    signal: "verified",
    effort: "Service",
    capital: "Very low",
    summary:
      "Helping people prepare, format, and submit common documents and applications correctly the first time, charging a transparent per-task fee.",
  },
  {
    code: "IM-03",
    title: "Smartphone content production",
    signal: "test",
    effort: "Time-led",
    capital: "Very low",
    summary:
      "Producing useful short video and written content from a phone for a defined niche, measured against real audience and payout data over time.",
  },
  {
    code: "IM-04",
    title: "Freelance digital tasks",
    signal: "test",
    effort: "Skill-led",
    capital: "Low",
    summary:
      "Selling discrete, deliverable skills — design, writing, data entry, transcription — on platforms, tracked for realistic effective hourly rates.",
  },
  {
    code: "IM-05",
    title: "Local resale and sourcing",
    signal: "caution",
    effort: "Capital-led",
    capital: "Medium",
    summary:
      "Buying and reselling goods within a local market. Workable, but margins and demand are frequently overstated by sellers of 'systems'.",
  },
  {
    code: "IM-06",
    title: '"Guaranteed daily returns" programs',
    signal: "flag",
    effort: "—",
    capital: "Your money, lost",
    summary:
      "Any model promising fixed daily or weekly returns for a deposit. Recorded here only so it can be recognised and avoided.",
  },
];

export type FieldTest = {
  id: string;
  model: string;
  question: string;
  status: SignalKind;
  finding: string;
  window: string;
};

export const fieldTests: FieldTest[] = [
  {
    id: "FT-2024-07",
    model: "Local business website services",
    question: "Can one operator land and keep three paying local clients in a quarter?",
    status: "verified",
    finding:
      "Reproducible with cold outreach and a fixed maintenance fee. Acquisition is the hard part, not delivery.",
    window: "12-week run",
  },
  {
    id: "FT-2024-11",
    model: "Smartphone content production",
    question: "Does a phone-only niche channel reach payout thresholds in 90 days?",
    status: "test",
    finding:
      "Partial. Reach grows, but monetisation lags well past the timelines sold by most courses. Ongoing.",
    window: "Open",
  },
  {
    id: "FT-2025-02",
    model: "Freelance digital tasks",
    question: "What is the real effective hourly rate after fees and unpaid bidding time?",
    status: "caution",
    finding:
      "Viable, but headline rates ignore proposal time. Measured net rate landed far below advertised figures.",
    window: "8-week run",
  },
  {
    id: "FT-2025-05",
    model: '"Guaranteed returns" deposit program',
    question: "Does the advertised payout schedule survive contact with a small test deposit?",
    status: "flag",
    finding:
      "No. Payouts stopped once reinvestment was declined. Classic withdrawal-block pattern. Do not participate.",
    window: "Closed — flagged",
  },
];

export type ProofSignal = {
  kind: SignalKind;
  name: string;
  meaning: string;
};

export const proofSignals: ProofSignal[] = [
  {
    kind: "verified",
    name: "Verified",
    meaning:
      "A real operator reached a stated, modest result under conditions we can describe, and the path is reproducible.",
  },
  {
    kind: "test",
    name: "Under test",
    meaning:
      "An active field test is running. The model is plausible but the evidence is incomplete. Treat as provisional.",
  },
  {
    kind: "caution",
    name: "Caution",
    meaning:
      "The model can work, but it is routinely oversold. Specific claims, margins, or timelines do not hold up.",
  },
  {
    kind: "flag",
    name: "Flagged",
    meaning:
      "Shows scam structure — guaranteed returns, withdrawal blocks, recruitment dependence, or payment to start work.",
  },
];

export type ScamNote = {
  tell: string;
  detail: string;
};

export const scamNotes: ScamNote[] = [
  {
    tell: "Pay to start earning",
    detail:
      "Legitimate work pays you. Activation fees, 'training' deposits, or required starter kits invert that and are a primary red flag.",
  },
  {
    tell: "Guaranteed or fixed returns",
    detail:
      "No lawful income model can promise a fixed daily or weekly return on a deposit. The promise itself is the warning.",
  },
  {
    tell: "Income depends on recruiting",
    detail:
      "If you earn mainly by enrolling others rather than selling a real product or service, the structure is a recruitment scheme.",
  },
  {
    tell: "Withdrawal friction",
    detail:
      "Easy to deposit, hard to withdraw. Sudden 'fees', 'taxes', or 'verification' demands at cash-out are a collapse signal.",
  },
  {
    tell: "Urgency and secrecy",
    detail:
      "Countdown timers, 'limited slots', and pressure not to research are engineered to stop you from checking the facts.",
  },
];

export type Playbook = {
  step: string;
  title: string;
  detail: string;
};

export const playbooks: Playbook[] = [
  {
    step: "01",
    title: "Pick one verified model",
    detail:
      "Choose a single model carrying a Verified signal. Resist running several at once before any one earns.",
  },
  {
    step: "02",
    title: "Define a small, real result",
    detail:
      "Set a modest target you could plausibly hit in weeks — one paying client, one completed order — not a monthly income fantasy.",
  },
  {
    step: "03",
    title: "Run a fixed-window test",
    detail:
      "Give it a defined window. Track effort, cost, and outcome honestly so you can tell signal from noise.",
  },
  {
    step: "04",
    title: "Read the proof, not the pitch",
    detail:
      "Compare your own numbers to the field-test findings here. If a model only works in the brochure, stop and switch.",
  },
];

export const methodology = [
  {
    step: "01",
    title: "Source the claim",
    detail:
      "We start from a specific income claim circulating online or locally, written out in plain terms.",
  },
  {
    step: "02",
    title: "Test in the field",
    detail:
      "Where lawful and safe, the model is run as a small, bounded experiment by a real operator, not simulated.",
  },
  {
    step: "03",
    title: "Record the evidence",
    detail:
      "Effort, capital, timelines, and outcomes are logged — including failures — and reduced to one proof signal.",
  },
  {
    step: "04",
    title: "Publish without hype",
    detail:
      "Findings are written soberly, with the limits stated. A modest verified result beats an exciting unverified one.",
  },
];
