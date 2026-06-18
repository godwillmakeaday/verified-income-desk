export type Playbook = {
  slug: string;
  title: string;
  model: string;
  summary: string;
  days: string[];
  evidenceToCollect: string[];
  stopRule: string;
};

export const playbooks: Playbook[] = [
  {
    slug: "7-day-local-business-website-test",
    title: "7-day local business website test",
    model: "Local Business Website Services",
    summary:
      "A small test for checking whether nearby businesses will respond to a simple, useful website offer.",
    days: [
      "Day 1: Build or polish one clean sample page.",
      "Day 2: List 20 businesses with weak or absent online presence.",
      "Day 3: Write one clear offer with price range and maintenance boundary.",
      "Day 4: Contact five businesses respectfully.",
      "Day 5: Contact another five and record replies.",
      "Day 6: Follow up once with those who showed interest.",
      "Day 7: Review replies, objections, and next action.",
    ],
    evidenceToCollect: ["Number contacted", "Replies", "Questions asked", "Sample shown", "Objections", "Any paid or serious inquiry"],
    stopRule:
      "Stop or revise if nobody understands the offer, the sample is weak, or the price cannot be explained clearly.",
  },
  {
    slug: "7-day-document-assistance-test",
    title: "7-day document assistance test",
    model: "Document and Form Assistance",
    summary:
      "A bounded test for routine formatting and submission support, with privacy and professional limits clearly stated.",
    days: [
      "Day 1: Define the exact documents you can handle safely.",
      "Day 2: Create a privacy checklist and task boundary.",
      "Day 3: Prepare two sample before-and-after documents.",
      "Day 4: Share the service with a small trusted audience.",
      "Day 5: Record questions without collecting unnecessary personal data.",
      "Day 6: Complete one practice task or low-risk paid task if available.",
      "Day 7: Review errors, time spent, and boundary risks.",
    ],
    evidenceToCollect: ["Requests received", "Task type", "Time spent", "Errors", "Privacy risk", "Customer feedback"],
    stopRule:
      "Stop if the task requires licensed advice, sensitive handling beyond your capacity, or an outcome promise.",
  },
  {
    slug: "7-day-smartphone-content-service-test",
    title: "7-day smartphone content service test",
    model: "Smartphone Content Production",
    summary:
      "A test for whether a phone-first content service can produce useful samples for a niche or small client group.",
    days: [
      "Day 1: Choose one niche and one content format.",
      "Day 2: Draft seven useful content ideas.",
      "Day 3: Record two short samples with clear audio.",
      "Day 4: Edit and publish or present the samples.",
      "Day 5: Ask three potential users or clients for feedback.",
      "Day 6: Improve the best sample.",
      "Day 7: Decide whether the service has a buyer, not just attention.",
    ],
    evidenceToCollect: ["Samples produced", "Audience response", "Client feedback", "Time per asset", "Quality issues", "Buyer interest"],
    stopRule:
      "Stop treating it as an income model if there is attention but no credible buyer, service offer, or distribution pathway.",
  },
  {
    slug: "7-day-freelance-profile-setup-test",
    title: "7-day freelance profile setup test",
    model: "Freelance Digital Tasks",
    summary:
      "A setup test for turning one skill into a credible profile with evidence, scope, and realistic delivery terms.",
    days: [
      "Day 1: Pick one narrow task you can actually deliver.",
      "Day 2: Create two work samples.",
      "Day 3: Write a profile that states scope and limits.",
      "Day 4: Study ten real buyer requests.",
      "Day 5: Send three careful proposals or direct messages.",
      "Day 6: Improve samples based on buyer language.",
      "Day 7: Review whether the task has demand and whether your offer is credible.",
    ],
    evidenceToCollect: ["Profile completeness", "Samples", "Buyer requests", "Proposals sent", "Replies", "Revisions needed"],
    stopRule:
      "Stop or narrow the service if the task is too broad, samples are weak, or delivery time would make the price unrealistic.",
  },
];
