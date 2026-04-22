import type { ReactNode } from "react";

export type MarqueeProps = {
  items: string[];
  tone?: "dark" | "cream";
  className?: string;
};

/**
 * Infinite horizontal band of words — PissPot brand signature (see design.md §4.6).
 * Duplicates the items list so the CSS animation loops seamlessly at -50%.
 */
export function Marquee({ items, tone = "dark", className = "" }: MarqueeProps) {
  const colors =
    tone === "dark"
      ? "bg-pp-ink text-pp-text border-y border-pp-border"
      : "bg-pp-cream text-pp-creamInk border-y border-pp-creamInk/10";
  return (
    <div
      className={`relative overflow-hidden ${colors} ${className}`}
      aria-hidden
    >
      <div className="flex min-w-full shrink-0 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((w, i) => (
          <Word key={i} tone={tone}>
            {w}
          </Word>
        ))}
      </div>
    </div>
  );
}

function Word({ children, tone }: { children: ReactNode; tone: "dark" | "cream" }) {
  const dot = tone === "dark" ? "text-pp-gold" : "text-pp-pink";
  return (
    <span className="flex items-center gap-10 px-6 py-6 font-display text-2xl font-bold tracking-tightest sm:text-4xl">
      {children}
      <span className={`text-3xl leading-none ${dot}`}>·</span>
    </span>
  );
}
