export type ScamSignal = {
  title: string;
  summary: string;
  question: string;
};

export const scamSignals: ScamSignal[] = [
  {
    title: "Pay first before earning",
    summary:
      "The promoter requires an activation fee, starter payment, upgrade fee, or compulsory package before any real work or service is delivered.",
    question: "Why must money leave the worker before the worker has earned anything?",
  },
  {
    title: "Guaranteed daily returns",
    summary:
      "Fixed daily or weekly payout claims usually hide the true mechanism. A promise is not proof of capacity to pay.",
    question: "What real product, service, asset, or lawful trade produces this return?",
  },
  {
    title: "Recruitment-based income",
    summary:
      "The user earns mainly by bringing in new participants rather than by selling a real product or performing a real service.",
    question: "Would the model still work if nobody recruited new people?",
  },
  {
    title: "Withdrawal delays",
    summary:
      "Deposits are easy, but withdrawals are delayed by new fees, unexplained reviews, taxes, upgrades, or identity demands.",
    question: "Can existing users withdraw without paying another charge?",
  },
  {
    title: "Pressure to act urgently",
    summary:
      "The claim uses countdowns, limited slots, private groups, or emotional pressure to stop careful checking.",
    question: "What changes if you take 48 hours to verify the claim?",
  },
  {
    title: "Secrecy around the business model",
    summary:
      "The operator talks about outcomes but avoids explaining the mechanism, the buyer, the product, or the service.",
    question: "Can the income mechanism be explained in plain language?",
  },
  {
    title: "Fake testimonials",
    summary:
      "Screenshots, staged balances, and repeated success stories appear without verifiable identity, dates, or independent context.",
    question: "Can any testimonial be independently checked without relying on the promoter?",
  },
  {
    title: "Unclear operator identity",
    summary:
      "The platform hides who owns it, where it operates from, how it is regulated, or who is accountable when money is lost.",
    question: "Who is legally responsible for this claim?",
  },
  {
    title: "Reward without skill, product, service, or asset",
    summary:
      "The claim says users can earn without learning, selling, producing, serving, investing lawfully, or bearing any real business process.",
    question: "What value is being created, and who is paying for it?",
  },
];
