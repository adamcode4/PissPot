import type { ReactNode } from "react";

export type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * PissPot marquee — single tone (dark). See design.md §4.6.
 */
export function Marquee({ items, className = "" }: MarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden border-y border-pp-border bg-pp-surface ${className}`}
      aria-hidden
    >
      <div className="flex min-w-full shrink-0 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((w, i) => (
          <Word key={i}>{w}</Word>
        ))}
      </div>
    </div>
  );
}

function Word({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-10 px-6 py-5 font-display text-xl font-bold lowercase tracking-tightest text-pp-text sm:text-3xl">
      {children}
      <span className="text-3xl leading-none text-pp-ember">·</span>
    </span>
  );
}
