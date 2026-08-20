import type { Config } from "tailwindcss";

/**
 * Tailwind mirrors the tokens declared in styles/globals.css.
 * Nothing here invents a value — it only exposes the design system
 * as utilities so components stay on the ramp.
 */
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
        },
        ink: {
          1: "var(--text-1)",
          2: "var(--text-2)",
          3: "var(--text-3)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          dim: "var(--accent-dim)",
          line: "var(--accent-line)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
      },
      borderColor: {
        DEFAULT: "var(--line)",
        line: "var(--line)",
        strong: "var(--line-strong)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      fontSize: {
        micro: ["var(--fs-micro)", { lineHeight: "1.4" }],
        xs: ["var(--fs-xs)", { lineHeight: "1.5" }],
        sm: ["var(--fs-sm)", { lineHeight: "1.55" }],
        base: ["var(--fs-base)", { lineHeight: "1.62" }],
        md: ["var(--fs-md)", { lineHeight: "1.68" }],
        lg: ["var(--fs-lg)", { lineHeight: "1.6" }],
        xl: ["var(--fs-xl)", { lineHeight: "1.28" }],
        "2xl": ["var(--fs-2xl)", { lineHeight: "1.18" }],
        "3xl": ["var(--fs-3xl)", { lineHeight: "1.08" }],
        "4xl": ["var(--fs-4xl)", { lineHeight: "1.02" }],
      },
      fontWeight: {
        display: "200",
        h1: "250",
        h2: "280",
        h3: "320",
        lede: "300",
        body: "350",
        ui: "400",
        label: "500",
      },
      letterSpacing: {
        display: "var(--ls-display)",
        h1: "var(--ls-h1)",
        h2: "var(--ls-h2)",
        h3: "var(--ls-h3)",
        body: "var(--ls-body)",
        label: "var(--ls-label)",
      },
      maxWidth: {
        shell: "var(--max)",
        measure: "var(--measure)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--ease-soft)",
        out: "var(--ease)",
        soft: "var(--ease-soft)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        mid: "var(--dur-mid)",
        slow: "var(--dur-slow)",
      },
    },
  },
  plugins: [],
};

export default config;
