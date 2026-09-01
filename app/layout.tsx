import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorTracer from "@/components/CursorTracer";
import { getFooterContent } from "@/lib/content";
import "@/styles/globals.css";

/**
 * Three families, no more:
 *   Geist Sans  — everything structural (self-hosted, variable 100–900)
 *   Geist Mono  — labels, metadata, numerals
 *   Newsreader  — editorial voice, used sparingly for pull quotes
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  // Newsreader ships no fallback metrics, so pick the fallback explicitly
  // rather than letting Next guess and warn.
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Lee Gordon | Product Designer",
    template: "%s | Lee Gordon",
  },
  description:
    "Product designer with 15+ years of experience across AI products, product design, research, and design systems.",
  keywords: [
    "AI design",
    "AI interfaces",
    "product design",
    "design systems",
    "UX research",
    "Lee Gordon",
  ],
  authors: [{ name: "Lee Gordon" }],
  openGraph: {
    title: "Lee Gordon | Product Designer",
    description:
      "Product designer working on AI products, product design, research, and design systems. Previously at Fold, Lightning Labs, Nokia, and R/GA.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Gordon | Product Designer",
    description:
      "Product designer working on AI products, product design, research, and design systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerContent = getFooterContent();

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable}`}
    >
      <head>
        {/* Framer Motion server-renders its initial state, so entrance
            animations would leave a JS-less page blank. Reveal them. */}
        <noscript>
          {/* Raw HTML: React escapes quotes in <style> text, which would
              turn these attribute selectors into invalid CSS. */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"],[style*="translate"]{opacity:1!important;transform:none!important}' +
                "[data-scroll-progress]{display:none!important}",
            }}
          />
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <ScrollProgress />
        <CursorTracer />
        <Navigation />
        <main id="main">{children}</main>
        <Footer content={footerContent} />
      </body>
    </html>
  );
}
