export default function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  inverse = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[12px] text-verified">{index}</span>
        <span className={inverse ? "h-px w-8 bg-paper/25" : "h-px w-8 bg-line"} />
        <span className={inverse ? "eyebrow text-paper/50" : "eyebrow"}>{eyebrow}</span>
      </div>
      <h2 className={inverse ? "mt-4 font-display text-3xl font-medium leading-tight text-paper md:text-[2.6rem]" : "mt-4 font-display text-3xl font-medium leading-tight text-ink md:text-[2.6rem]"}>
        {title}
      </h2>
      {lead ? (
        <p className={inverse ? "mt-4 text-[17px] leading-relaxed text-paper/70" : "mt-4 text-[17px] leading-relaxed text-ink/75"}>{lead}</p>
      ) : null}
    </div>
  );
}
