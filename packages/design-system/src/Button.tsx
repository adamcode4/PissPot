import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-pp-ember text-pp-ink shadow-ember hover:-translate-y-px hover:brightness-[1.04] active:scale-[0.98]",
  secondary:
    "bg-pp-surface3 text-pp-text border border-pp-borderStrong hover:border-pp-orange/50 hover:-translate-y-px",
  ghost: "text-pp-muted hover:text-pp-text hover:bg-white/[0.03]",
  icon:
    "bg-pp-surface2 text-pp-text border border-pp-border hover:border-pp-borderStrong",
};

const sizeClass: Record<Size, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-[52px] px-7 text-[15px]",
};

export function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-[0.01em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pp-orange disabled:pointer-events-none disabled:opacity-50 ${sizeClass[size]} ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
