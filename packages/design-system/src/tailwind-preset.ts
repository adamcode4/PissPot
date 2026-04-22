import type { Config } from "tailwindcss";

/**
 * Tailwind preset for PissPot apps. Extend in each app:
 *   presets: [require("@pisspot/design-system/tailwind-preset")]
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
          border: "var(--pp-border)",
          text: "var(--pp-text)",
          muted: "var(--pp-muted)",
          grape: "var(--pp-grape)",
          grapeHover: "var(--pp-grape-hover)",
          grapeSoft: "var(--pp-grape-soft)",
          gold: "var(--pp-gold)",
          pink: "var(--pp-pink)",
          mint: "var(--pp-mint)",
          red: "var(--pp-red)",
          cream: "var(--pp-cream)",
          creamInk: "var(--pp-cream-ink)",
          creamMuted: "var(--pp-cream-muted)",
        },
      },
      fontFamily: {
        display: ["var(--pp-font-display)", "system-ui", "sans-serif"],
        sans: ["var(--pp-font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "var(--pp-radius-card)",
        pill: "var(--pp-radius-pill)",
      },
      boxShadow: {
        glowGrape: "var(--pp-glow-grape)",
        card: "0 24px 80px -32px rgba(0,0,0,0.65)",
        cream: "0 20px 60px -24px rgba(26,11,46,0.25)",
        floating:
          "0 0 80px -12px rgba(124,92,255,0.55), 0 30px 60px -20px rgba(0,0,0,0.75)",
      },
      backgroundImage: {
        "pp-brand": "linear-gradient(135deg, #7c5cff 0%, #ff4f9a 100%)",
        "pp-golden-hour":
          "linear-gradient(135deg, #f4b942 0%, #ff4f9a 60%, #7c5cff 100%)",
        "pp-late-night":
          "radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,0.35), transparent 60%)",
        "pp-cream-glow":
          "radial-gradient(60% 40% at 50% 0%, rgba(244,185,66,0.35), transparent 60%)",
      },
      letterSpacing: {
        eyebrow: "0.22em",
        tightest: "-0.03em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
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
