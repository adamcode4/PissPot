import type { Config } from "tailwindcss";

/**
 * Tailwind preset for PissPot apps. Extend in each app:
 * presets: [require("@pisspot/design-system/tailwind-preset")]
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        pp: {
          bg: "var(--pp-bg)",
          elevated: "var(--pp-bg-elevated)",
          surface: "var(--pp-surface)",
          border: "var(--pp-border)",
          text: "var(--pp-text)",
          muted: "var(--pp-text-muted)",
          accent: "var(--pp-accent)",
          accent2: "var(--pp-accent-2)",
        },
      },
      fontFamily: {
        display: ["var(--pp-font-display)", "system-ui", "sans-serif"],
        sans: ["var(--pp-font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px var(--pp-glow)",
        card: "0 24px 80px -32px rgba(0,0,0,0.65)",
      },
      backgroundImage: {
        "pp-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(192,132,252,0.22), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(244,185,66,0.12), transparent), radial-gradient(ellipse 50% 30% at 0% 20%, rgba(192,132,252,0.1), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
};

export default preset;
