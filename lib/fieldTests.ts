import type { SignalKind } from "./site";

export type FieldTestLog = {
  testCode: string;
  modelSlug: string;
  modelTested: string;
  label: "Sample field-test format" | "Prototype evidence log" | "Real field test";
  testPeriod: string;
  startingTools: string;
  timeRequired: string;
  result: string;
  whatFailed: string;
  cannotVerify: string;
  status: SignalKind;
};

export const fieldTests: FieldTestLog[] = [
  {
    testCode: "FT-SAMPLE-001",
    modelSlug: "local-business-website-services",
    modelTested: "Local Business Website Services",
    label: "Sample field-test format",
    testPeriod: "7 days",
    startingTools: "Phone, sample website, list of 20 nearby businesses, simple offer note",
    timeRequired: "60–90 minutes per day",
    result: "Prototype only. No real result is claimed from this sample log.",
    whatFailed: "Not applicable. This is a sample structure for future evidence collection.",
    cannotVerify: "Client replies, payment, retention, and delivery outcome are evidence not yet verified.",
    status: "test",
  },
  {
    testCode: "FT-SAMPLE-002",
    modelSlug: "document-and-form-assistance",
    modelTested: "Document and Form Assistance",
    label: "Prototype evidence log",
    testPeriod: "7 days",
    startingTools: "Phone, document templates, privacy checklist, clear task boundary",
    timeRequired: "45–60 minutes per day",
    result: "Evidence not yet verified. This card demonstrates the format of a careful test log.",
    whatFailed: "The test must reject tasks that require licensed professional advice or confidential handling beyond capacity.",
    cannotVerify: "Demand, repeat requests, customer satisfaction, and lawful boundary compliance are under review.",
    status: "test",
  },
  {
    testCode: "FT-SAMPLE-003",
    modelSlug: "smartphone-content-production",
    modelTested: "Smartphone Content Production",
    label: "Prototype evidence log",
    testPeriod: "7 days",
    startingTools: "Smartphone, topic list, editing app, publishing calendar",
    timeRequired: "60 minutes per day",
    result: "Claim not independently confirmed. A 7-day content test should measure consistency and audience response, not earnings.",
    whatFailed: "Platform payout claims cannot be verified in a short test without real account data and published analytics.",
    cannotVerify: "Reach quality, conversion, client interest, and actual earning pathway remain under review.",
    status: "caution",
  },
  {
    testCode: "FT-SAMPLE-004",
    modelSlug: "guaranteed-daily-returns-programs",
    modelTested: "Guaranteed Daily Returns Programs",
    label: "Prototype evidence log",
    testPeriod: "No deposit test recommended",
    startingTools: "Claim screenshot, promoter identity check, withdrawal-policy review",
    timeRequired: "30 minutes of claim review",
    result: "Flagged when a deposit is required and fixed returns are promised without a clear lawful income mechanism.",
    whatFailed: "The claim fails at mechanism review before any money should be risked.",
    cannotVerify: "Ability to pay users, operator identity, source of returns, and withdrawal reliability are not independently confirmed.",
    status: "flag",
  },
];
