import type { Config } from "tailwindcss";

/**
 * Tailwind preset for PissPot apps (v2 — black & orange).
 * Extend in each app: presets: [require("@pisspot/design-system/tailwind-preset")]
 * See /design.md for token semantics.
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        pp: {
          ink: "var(--pp-ink)",
          surface: "var(--pp-surface)",
          surface2: "var(--pp-surface-2)",
          surface3: "var(--pp-surface-3)",
          border: "var(--pp-border)",
          borderStrong: "var(--pp-border-strong)",
          text: "var(--pp-text)",
          muted: "var(--pp-muted)",
          muted2: "var(--pp-muted-2)",
          orange: "var(--pp-orange)",
          orangeHi: "var(--pp-orange-hi)",
          orangeDeep: "var(--pp-orange-deep)",
          ember: "var(--pp-ember)",
          mint: "var(--pp-mint)",
          red: "var(--pp-red)",
        },
      },
      fontFamily: {
        display: ["var(--pp-font-display)", "system-ui", "sans-serif"],
        sans: ["var(--pp-font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "var(--pp-radius-card)",
        input: "var(--pp-radius-input)",
        pill: "var(--pp-radius-pill)",
      },
      boxShadow: {
        ember: "var(--pp-glow-ember)",
        insetTop: "var(--pp-inset-highlight)",
        card: "var(--pp-inset-highlight), 0 1px 0 rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "pp-ember": "linear-gradient(135deg, #ff6b1a 0%, #ffa552 100%)",
        "pp-ember-soft": "linear-gradient(135deg, #ff6b1a 0%, #ffc36b 100%)",
        "pp-coal":
          "radial-gradient(60% 40% at 50% -10%, rgba(255,107,26,0.18), transparent 60%)",
        "pp-hairline-b":
          "linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)",
      },
      letterSpacing: {
        eyebrow: "0.24em",
        tightest: "-0.03em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        marquee: "marquee 36s linear infinite",
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
      },
    },
  },
};

export default preset;
