import type { Config } from "tailwindcss";
import pisspotPreset from "@pisspot/design-system/tailwind-preset";

const config: Config = {
  presets: [pisspotPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/design-system/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
