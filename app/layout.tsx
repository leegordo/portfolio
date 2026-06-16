import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProvider from "@/components/ThemeProvider";
import { getFooterContent } from "@/lib/content";
import { DEFAULT_THEME } from "@/lib/themes";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Lee Gordon — Fractional AI Design Lead",
    template: "%s | Lee Gordon",
  },
  description:
    "Product designer with 15+ years experience, now focused on agentic interfaces and AI-native products. I help startups turn technical demos into products people actually want to use.",
  keywords: [
    "AI design",
    "agentic interfaces",
    "product design",
    "UX research",
    "design leadership",
    "fractional design lead",
    "Lee Gordon",
  ],
  authors: [{ name: "Lee Gordon" }],
  openGraph: {
    title: "Lee Gordon — Fractional AI Design Lead",
    description:
      "Product designer with 15+ years experience, now focused on agentic interfaces and AI-native products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Gordon — Fractional AI Design Lead",
    description:
      "Product designer with 15+ years experience, now focused on agentic interfaces and AI-native products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerContent = getFooterContent();

  return (
    <html lang="en" data-theme={DEFAULT_THEME} className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Barlow+Condensed:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Cormorant:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=EB+Garamond:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer content={footerContent} />
        </ThemeProvider>
      </body>
    </html>
  );
}
