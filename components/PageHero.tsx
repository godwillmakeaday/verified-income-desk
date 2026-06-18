import * as React from "react";
import { Container, Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-offwhite">
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-h1">{title}</h1>
          {lede && (
            <p className="mt-5 text-[1.15rem] leading-relaxed text-slate">{lede}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
