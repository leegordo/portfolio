import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ChatbotButton from "@/components/ChatbotButton";
import { getFooterContent } from "@/lib/content";
import "@/styles/globals.css";

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
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
      </head>
      <body className="font-sans bg-surface text-white antialiased">
        <ScrollProgress />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer content={footerContent} />
        {/* <ChatbotButton /> */}
      </body>
    </html>
  );
}
