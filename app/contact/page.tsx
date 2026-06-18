import * as React from "react";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { HospitalIcon, BookIcon, AlertIcon, ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Health Clarity Institute Nigeria — for institutions and partnerships, for content corrections and clinical concerns, and where to turn in an emergency.",
  alternates: { canonical: "/contact" },
};

const routes = [
  {
    icon: HospitalIcon,
    title: "Institutions & partnerships",
    body: "Hospitals, clinics, NGOs, schools and companies interested in websites, patient education or documentation systems.",
    subject: "Institutional enquiry",
  },
  {
    icon: BookIcon,
    title: "Content & corrections",
    body: "Spotted something inaccurate or unclear in a guide, or want to suggest a topic? We take this seriously and will review it.",
    subject: "Content feedback",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Health Clarity Institute"
        lede="Whether you are an institution exploring a project or a reader with feedback on a guide, we would like to hear from you."
      />

      <Container className="py-12 md:py-16">
        {/* Emergency notice first — safety always leads */}
        <div className="mb-10 max-w-3xl rounded-lg border border-clinical-red/30 bg-clinical-redSoft p-5">
          <div className="flex items-center gap-2.5">
            <AlertIcon size={20} className="text-clinical-red" />
            <h2 className="font-serif text-lg text-clinical-red">Medical emergency?</h2>
          </div>
          <p className="mt-2 text-[0.97rem] leading-relaxed text-ink/90">
            Do not use this page for urgent medical problems. {site.emergencyNote} This
            platform cannot provide diagnosis, treatment or emergency response.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          {/* Routes */}
          <div>
            <Eyebrow>What is your enquiry about?</Eyebrow>
            <div className="mt-6 space-y-4">
              {routes.map((r) => {
                const Icon = r.icon;
                return (
                  <a
                    key={r.title}
                    href={`mailto:${site.email}?subject=${encodeURIComponent(r.subject)}`}
                    className="group flex items-start gap-4 rounded-lg border border-line bg-white p-6 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-clinical-blueSoft text-clinical-blue">
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 font-serif text-lg text-navy group-hover:text-clinical-blue">
                        {r.title}
                        <ArrowRightIcon
                          size={16}
                          className="text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:text-clinical-blue"
                        />
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate">
                        {r.body}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-lg border border-line bg-offwhite p-6">
              <h3 className="font-serif text-lg text-navy">Helping us help you</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                When you write, please include the name of your organisation or the guide in
                question, what you are trying to achieve, and the best way to reach you. The
                more context you give, the more useful our reply will be.
              </p>
            </div>
          </div>

          {/* Direct details */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-soft">
                Reach us directly
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-soft">Email</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${site.email}`} className="font-medium">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-soft">Institution</dt>
                  <dd className="mt-0.5 font-medium text-navy">{site.name}</dd>
                </div>
                <div>
                  <dt className="text-slate-soft">Response time</dt>
                  <dd className="mt-0.5 text-navy">
                    We aim to reply to institutional enquiries within a few working days.
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
