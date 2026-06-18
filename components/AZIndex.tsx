import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export interface AZEntry {
  title: string;
  href: string;
  blurb: string;
  available?: boolean; // false = listed but not yet published
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function AZIndex({ entries }: { entries: AZEntry[] }) {
  const groups = new Map<string, AZEntry[]>();
  for (const e of entries) {
    const letter = e.title[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(e);
  }
  for (const list of groups.values()) list.sort((a, b) => a.title.localeCompare(b.title));
  const activeLetters = [...groups.keys()].sort();

  return (
    <div>
      {/* Letter jump nav */}
      <nav
        aria-label="Jump to letter"
        className="sticky top-[112px] z-20 -mx-1 mb-10 flex flex-wrap gap-1 rounded-lg border border-line bg-white/95 p-2 backdrop-blur"
      >
        {ALPHABET.map((letter) => {
          const has = groups.has(letter);
          return has ? (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="flex h-8 w-8 items-center justify-center rounded font-mono text-sm font-medium text-clinical-blueDark no-underline transition-colors hover:bg-clinical-blueSoft"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center font-mono text-sm text-slate-soft/40"
            >
              {letter}
            </span>
          );
        })}
      </nav>

      <div className="space-y-12">
        {activeLetters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-40">
            <div className="flex items-baseline gap-4 border-b border-line pb-2">
              <h2 className="font-serif text-3xl text-navy">{letter}</h2>
              <span className="font-mono text-xs uppercase tracking-wide text-slate-soft">
                {groups.get(letter)!.length} entr{groups.get(letter)!.length === 1 ? "y" : "ies"}
              </span>
            </div>
            <ul className="mt-4 divide-y divide-lineSoft">
              {groups.get(letter)!.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    className="group flex items-center justify-between gap-4 py-4 no-underline"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium text-navy group-hover:text-clinical-blue">
                        {e.title}
                        {e.available === false && (
                          <span className="ml-2 font-mono text-[0.6rem] uppercase tracking-wide text-slate-soft">
                            · coming soon
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate">{e.blurb}</span>
                    </span>
                    <ArrowRightIcon
                      size={18}
                      className="shrink-0 text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:text-clinical-blue"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
