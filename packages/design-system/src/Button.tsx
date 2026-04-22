import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-pp-accent to-amber-500 text-neutral-950 font-semibold shadow-glow hover:brightness-105 active:scale-[0.98]",
  secondary:
    "bg-pp-surface text-pp-text border border-pp-border hover:border-pp-accent/40 hover:bg-pp-elevated",
  ghost: "text-pp-muted hover:text-pp-text hover:bg-white/5",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pp-accent2 disabled:pointer-events-none disabled:opacity-50 ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
