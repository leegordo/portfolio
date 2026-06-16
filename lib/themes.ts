export type ThemeKey = "void-rose" | "gelato" | "cinnabar" | "vellum" | "tessera";

export interface ColorToken {
  name: string;
  hex: string;
  cssVar: string;
}

export interface TypeToken {
  family: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface ThemeDefinition {
  name: string;
  date: string;
  swatch: string;
  colors: ColorToken[];
  typography: Record<"display" | "h1" | "h2" | "body" | "label", TypeToken>;
}

export const DEFAULT_THEME: ThemeKey = "void-rose";

/** Themes currently shown in the picker. Only dark themes for now —
 *  light themes exist in the library but need light-mode asset variants later. */
export const DARK_THEME_KEYS: ThemeKey[] = ["void-rose", "cinnabar"];

export const THEME_STORAGE_KEY = "portfolio-theme";
export const CART_HINT_SEEN_KEY = "portfolio-theme-cart-hint-seen";

export const themes: Record<ThemeKey, ThemeDefinition> = {
  "void-rose": {
    name: "Void Rose",
    date: "2026-06-14",
    swatch: "#e85a8a",
    colors: [
      { name: "bg", hex: "#0c0c10", cssVar: "--bg" },
      { name: "surface", hex: "#14141c", cssVar: "--surface" },
      { name: "text-primary", hex: "#e8e8f0", cssVar: "--text-primary" },
      { name: "text-secondary", hex: "#a0a0b8", cssVar: "--text-secondary" },
      { name: "accent", hex: "#e85a8a", cssVar: "--accent" },
      { name: "accent-soft", hex: "#f080a0", cssVar: "--accent-soft" },
      { name: "border", hex: "#1a1a22", cssVar: "--border" },
    ],
    typography: {
      display: { family: "Space Grotesk", size: "clamp(3rem, 8vw, 6rem)", weight: "500", lineHeight: "0.95", letterSpacing: "-0.03em" },
      h1: { family: "Space Grotesk", size: "clamp(2rem, 4vw, 3.5rem)", weight: "500", lineHeight: "1.1", letterSpacing: "-0.02em" },
      h2: { family: "Space Grotesk", size: "clamp(1.25rem, 2vw, 1.75rem)", weight: "500", lineHeight: "1.2", letterSpacing: "-0.01em" },
      body: { family: "Space Grotesk", size: "1.125rem", weight: "400", lineHeight: "1.65", letterSpacing: "0" },
      label: { family: "JetBrains Mono", size: "0.75rem", weight: "500", lineHeight: "1.4", letterSpacing: "0.05em" },
    },
  },
  gelato: {
    name: "Gelato",
    date: "2026-06-13",
    swatch: "#DC1C51",
    colors: [
      { name: "bg", hex: "#FDF6F0", cssVar: "--bg" },
      { name: "surface", hex: "#FFFFFF", cssVar: "--surface" },
      { name: "text-primary", hex: "#1A1410", cssVar: "--text-primary" },
      { name: "text-secondary", hex: "#556070", cssVar: "--text-secondary" },
      { name: "sorbet", hex: "#DC1C51", cssVar: "--accent" },
      { name: "pistachio", hex: "#437E51", cssVar: "--accent-soft" },
      { name: "periwinkle", hex: "#4E5FBE", cssVar: "--periwinkle" },
      { name: "limoncello", hex: "#926B07", cssVar: "--limoncello" },
    ],
    typography: {
      display: { family: "Bricolage Grotesque", size: "clamp(2.5rem, 7vw, 5rem)", weight: "600", lineHeight: "1.0", letterSpacing: "-0.02em" },
      h1: { family: "Bricolage Grotesque", size: "clamp(1.75rem, 3.5vw, 3rem)", weight: "600", lineHeight: "1.1", letterSpacing: "-0.01em" },
      h2: { family: "Bricolage Grotesque", size: "clamp(1.25rem, 2vw, 1.75rem)", weight: "600", lineHeight: "1.2", letterSpacing: "0" },
      body: { family: "DM Sans", size: "1.125rem", weight: "400", lineHeight: "1.65", letterSpacing: "0" },
      label: { family: "DM Mono", size: "0.75rem", weight: "500", lineHeight: "1.4", letterSpacing: "0.05em" },
    },
  },
  cinnabar: {
    name: "Cinnabar",
    date: "2026-06-12",
    swatch: "#BE3D2D",
    colors: [
      { name: "lacquer", hex: "#0E0B0A", cssVar: "--bg" },
      { name: "ink", hex: "#1D1714", cssVar: "--surface" },
      { name: "primary", hex: "#F0EAE2", cssVar: "--text-primary" },
      { name: "smoke", hex: "#8A7870", cssVar: "--text-secondary" },
      { name: "cinnabar", hex: "#BE3D2D", cssVar: "--accent" },
      { name: "gold", hex: "#C9982A", cssVar: "--accent-soft" },
      { name: "jade", hex: "#2E8A6A", cssVar: "--jade" },
    ],
    typography: {
      display: { family: "Cormorant", size: "clamp(3rem, 8vw, 6rem)", weight: "300", lineHeight: "1.0", letterSpacing: "-0.02em" },
      h1: { family: "Cormorant", size: "clamp(2rem, 4vw, 3.5rem)", weight: "400", lineHeight: "1.1", letterSpacing: "-0.01em" },
      h2: { family: "Cormorant", size: "clamp(1.5rem, 2.5vw, 2.25rem)", weight: "400", lineHeight: "1.2", letterSpacing: "0" },
      body: { family: "DM Sans", size: "1.125rem", weight: "400", lineHeight: "1.65", letterSpacing: "0" },
      label: { family: "DM Sans", size: "0.75rem", weight: "500", lineHeight: "1.4", letterSpacing: "0.08em" },
    },
  },
  vellum: {
    name: "Vellum",
    date: "2026-06-11",
    swatch: "#A03030",
    colors: [
      { name: "vellum", hex: "#F0EADE", cssVar: "--bg" },
      { name: "pounce", hex: "#E4D9C8", cssVar: "--surface" },
      { name: "primary", hex: "#2C2418", cssVar: "--text-primary" },
      { name: "iron", hex: "#4A4034", cssVar: "--text-secondary" },
      { name: "vermillion", hex: "#A03030", cssVar: "--accent" },
      { name: "verdigris", hex: "#4A6B5E", cssVar: "--accent-soft" },
      { name: "ochre", hex: "#6E4E2E", cssVar: "--ochre" },
    ],
    typography: {
      display: { family: "Playfair Display", size: "clamp(2.5rem, 7vw, 5rem)", weight: "400", lineHeight: "1.05", letterSpacing: "-0.01em" },
      h1: { family: "Playfair Display", size: "clamp(1.75rem, 3.5vw, 3rem)", weight: "400", lineHeight: "1.15", letterSpacing: "0" },
      h2: { family: "Playfair Display", size: "clamp(1.25rem, 2vw, 1.75rem)", weight: "500", lineHeight: "1.2", letterSpacing: "0" },
      body: { family: "EB Garamond", size: "1.125rem", weight: "400", lineHeight: "1.65", letterSpacing: "0" },
      label: { family: "EB Garamond", size: "0.8rem", weight: "600", lineHeight: "1.4", letterSpacing: "0.1em" },
    },
  },
  tessera: {
    name: "Tessera",
    date: "2026-06-10",
    swatch: "#AB5527",
    colors: [
      { name: "parchment", hex: "#F5EFE4", cssVar: "--bg" },
      { name: "plaster", hex: "#EDE3D3", cssVar: "--surface" },
      { name: "primary", hex: "#2C1810", cssVar: "--text-primary" },
      { name: "dust", hex: "#B09878", cssVar: "--text-secondary" },
      { name: "terra", hex: "#AB5527", cssVar: "--accent" },
      { name: "saffron", hex: "#976107", cssVar: "--accent-soft" },
      { name: "olive", hex: "#5A6E3A", cssVar: "--olive" },
    ],
    typography: {
      display: { family: "Cormorant Garamond", size: "clamp(2.75rem, 7vw, 5.5rem)", weight: "400", lineHeight: "1.05", letterSpacing: "-0.01em" },
      h1: { family: "Cormorant Garamond", size: "clamp(1.75rem, 3.5vw, 3rem)", weight: "400", lineHeight: "1.15", letterSpacing: "0" },
      h2: { family: "Cormorant Garamond", size: "clamp(1.25rem, 2vw, 1.75rem)", weight: "500", lineHeight: "1.2", letterSpacing: "0" },
      body: { family: "Source Serif 4", size: "1.125rem", weight: "400", lineHeight: "1.65", letterSpacing: "0" },
      label: { family: "Source Serif 4", size: "0.75rem", weight: "600", lineHeight: "1.4", letterSpacing: "0.05em" },
    },
  },
};

export const themeKeys = Object.keys(themes) as ThemeKey[];

export function isThemeKey(value: string): value is ThemeKey {
  return value in themes;
}
