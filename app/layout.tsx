import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ChatbotButton from "@/components/ChatbotButton";
import { getFooterContent } from "@/lib/content";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lee Gordon — Product Designer",
    template: "%s | Lee Gordon",
  },
  description:
    "Product designing, UX researching, vibe-coding, brand building, team leading human. Portfolio of Lee Gordon.",
  keywords: [
    "product design",
    "UX research",
    "design leadership",
    "portfolio",
    "Lee Gordon",
  ],
  authors: [{ name: "Lee Gordon" }],
  openGraph: {
    title: "Lee Gordon — Product Designer",
    description:
      "Product designing, UX researching, vibe-coding, brand building, team leading human.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Gordon — Product Designer",
    description:
      "Product designing, UX researching, vibe-coding, brand building, team leading human.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerContent = getFooterContent();

  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
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
