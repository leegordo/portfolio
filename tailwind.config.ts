import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        faint: "var(--text-faint)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          muted: "var(--accent-muted)",
          border: "var(--accent-border)",
          glow: "var(--accent-glow)",
        },
        surface: {
          DEFAULT: "var(--bg)",
          50: "var(--surface)",
          100: "var(--surface-raised)",
          200: "var(--surface-raised)",
        },
        body: "var(--text-secondary)",
        muted: "var(--text-tertiary)",
        subtle: "var(--border-subtle)",
        theme: "var(--border)",
      },
      borderColor: {
        subtle: "var(--border-subtle)",
        theme: "var(--border)",
        hover: "var(--border-hover)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        label: ["var(--font-label)", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(4rem, 16vw, 14rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
