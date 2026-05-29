import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { getFooterContent } from "@/lib/content";
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
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-surface text-[#e8e8f0] antialiased">
        <ScrollProgress />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer content={footerContent} />
      </body>
    </html>
  );
}
