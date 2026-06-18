"use client";

import * as React from "react";
import Link from "next/link";
import { searchLibrary, type SearchItem } from "@/lib/search";
import { SearchIcon } from "./icons";

export function SearchBar({
  size = "lg",
  placeholder = "Search conditions, symptoms, tests, medicines…",
}: {
  size?: "lg" | "md";
  placeholder?: string;
}) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const results: SearchItem[] = React.useMemo(() => searchLibrary(query), [query]);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  React.useEffect(() => setActive(0), [query]);

  const big = size === "lg";

  return (
    <div ref={rootRef} className="relative w-full">
      <div
        className={`flex items-center gap-3 rounded-lg border border-line bg-white shadow-card transition-colors focus-within:border-clinical-blue ${
          big ? "px-5 py-4" : "px-4 py-3"
        }`}
      >
        <SearchIcon size={big ? 22 : 20} className="shrink-0 text-clinical-blueDark" />
        <input
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls="search-results"
          aria-label="Search the health library"
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === "Enter" && results[active]) {
              window.location.href = results[active].href;
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          className={`w-full bg-transparent text-ink placeholder:text-slate-soft focus:outline-none ${
            big ? "text-[1.05rem]" : "text-base"
          }`}
        />
        <kbd className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-slate sm:block">
          Search
        </kbd>
      </div>

      {open && query && (
        <div
          id="search-results"
          role="listbox"
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-lg border border-line bg-white shadow-cardHover"
        >
          {results.length === 0 ? (
            <p className="px-5 py-4 text-sm text-slate">
              No matches yet. Try a condition like “hypertension” or a symptom like “fever”.
            </p>
          ) : (
            <ul className="max-h-[22rem] overflow-y-auto py-1">
              {results.map((r, i) => (
                <li key={r.href} role="option" aria-selected={i === active}>
                  <Link
                    href={r.href}
                    className={`flex items-start gap-3 px-5 py-3 no-underline ${
                      i === active ? "bg-offwhite" : "hover:bg-offwhite"
                    }`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mt-0.5 shrink-0 rounded bg-clinical-blueSoft px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-clinical-blueDark">
                      {r.kind}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-navy">{r.title}</span>
                      <span className="block truncate text-sm text-slate">{r.blurb}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
