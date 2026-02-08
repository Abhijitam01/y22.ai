import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FAFAFA",
          dark: "#0A0A0B",
        },
        primary: {
          text: {
            light: "#0A0A0B",
            dark: "#F5F5F7",
          },
        },
        subtle: {
          text: {
            light: "#52525B",
            dark: "#A1A1AA",
          },
        },
        card: {
          bg: {
            light: "#FFFFFF",
            dark: "#F5F5F70A",
            hover: {
              light: "#F4F4F5",
              dark: "#F5F5F714",
            },
          },
          border: {
            light: "#E4E4E7",
            dark: "#F5F5F714",
          },
        },
        dividers: {
          light: "#E4E4E7",
          dark: "#F5F5F714",
        },
        /* Primary accent — Monochrome (Black/White) */
        stream: "#0A0A0B", // Black for light mode
        "stream-light": "#18181B", // Slightly lighter black
        /* Secondary intelligence/system color — Neutral Gray */
        studio: "#71717A", // Zinc-500
        "studio-light": "#52525B", // Zinc-600
        "studio-dim": "#3F3F46", // Zinc-700
        /* Tertiary — soft gray for accents */
        cloud: "#A1A1AA", // Zinc-400
        "cloud-light": "#D4D4D8", // Zinc-300
        "cloud-alt": "#71717A", // Zinc-500
        /* Lavender-white tones for logos -> Clean White/Off-white */
        "lavender-white": "#FAFAFA",
        "lavender-white-dim": "#F4F4F5",
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
      },
      fontSize: {
        /* Display-level headings for hero */
        "display": ["80px", { lineHeight: "1.0", fontWeight: "700", letterSpacing: "-0.03em" }],
        "display-sm": ["64px", { lineHeight: "1.05", fontWeight: "700", letterSpacing: "-0.025em" }],
        /* Section headings */
        h1: ["64px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.025em" }],
        h2: ["48px", { lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.02em" }],
        h3: ["36px", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.015em" }],
        h4: ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        h5: ["22px", { lineHeight: "1.4", fontWeight: "600" }],
        /* Body text — noticeably bigger */
        "body-xl": ["22px", { lineHeight: "1.6", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["18px", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-xs": ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        /* Labels */
        "label": ["13px", { lineHeight: "1", fontWeight: "600", letterSpacing: "0.08em" }],
        "label-sm": ["11px", { lineHeight: "1", fontWeight: "700", letterSpacing: "0.1em" }],
      },
      screens: {
        tablet: "641px",
        desktop: "1025px",
      },
      animation: {
        "wave-blur": "wave-blur 10s ease-in-out infinite",
        ticker: "ticker 15s linear infinite",
        "ticker-reverse": "ticker-reverse 15s linear infinite",
        "ecosystem-left": "ticker 30s linear infinite",
        "ecosystem-right": "ticker-reverse 30s linear infinite",
        "pulse-flow": "pulse-flow 2s ease-in-out infinite",
        heartbeat: "heartbeat 3s ease-in-out infinite",
      },
      keyframes: {
        "wave-blur": {
          "0%": { opacity: ".3", transform: "translate(-100%) scaleX(.6)" },
          "25%": { opacity: "1", transform: "translate(0) scaleX(1)" },
          "50%": { opacity: ".6", transform: "translate(100%) scaleX(1)" },
          "75%": { opacity: "1", transform: "translate(0) scaleX(1)" },
          to: { opacity: ".3", transform: "translate(-100%) scaleX(.6)" },
        },
        ticker: {
          "0%": { transform: "translate(0)" },
          to: { transform: "translate(-50%)" },
        },
        "ticker-reverse": {
          "0%": { transform: "translate(-50%)" },
          to: { transform: "translate(0)" },
        },
        "pulse-flow": {
          "0%": { strokeDashoffset: "250px", opacity: "0" },
          "20%": { opacity: "1" },
          to: { strokeDashoffset: "0", opacity: "0" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.05)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.025)" },
          "70%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
