import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How your data is handled when you visit leegordon.design.",
};

const sections = [
  {
    heading: "Overview",
    body: `This is a personal portfolio website for Lee Gordon Design. It is a static site with no user accounts, no contact forms, no newsletter signups, and no e-commerce. In short, this site collects as little about you as technically possible.`,
  },
  {
    heading: "What data is collected",
    body: `This site does not set cookies or run any first-party tracking scripts.\n\nThis site is hosted on GitHub Pages (operated by GitHub, Inc., a subsidiary of Microsoft). GitHub Pages may collect standard web server log data when you visit, including your IP address, browser type, referring URL, and pages requested. This is infrastructure-level logging, not data Lee Gordon controls or processes directly.\n\nTypefaces are bundled with the site at build time and served from the same host, so no font requests are made to Google or any other third party while you browse.\n\nNo analytics platform (Google Analytics, Plausible, Fathom, etc.) is installed on this site.`,
  },
  {
    heading: "How information is used",
    body: `Lee Gordon does not collect, store, or process your personal data through this website.\n\nGitHub's handling of server log data is governed by their own privacy policy, available at github.com/privacy. They use this data to operate and maintain GitHub Pages infrastructure.`,
  },
  {
    heading: "Third-party services",
    body: `GitHub Pages hosts and delivers the site. Typefaces are self-hosted. The site does not include advertising networks, social media trackers, or analytics services.`,
  },
  {
    heading: "AI tools disclosure",
    body: `Lee Gordon uses AI tools, including Claude (Anthropic), Gemini (Google), and Cursor, in his design and development work. Some of the work shown on this site was made with their help.\n\nNo visitor data from this website is shared with or fed into any AI system.`,
  },
  {
    heading: "Your rights",
    body: `If you are located in the European Economic Area (EEA) or the UK, you have rights under GDPR including the right to access, correct, or request deletion of personal data. Given that this site does not collect personal data directly, there is typically nothing to access or delete.\n\nIf you have questions or concerns, contact Lee directly at lee@leegordon.design and he will respond within a reasonable timeframe.`,
  },
  {
    heading: "Contact",
    body: `Privacy questions or requests: lee@leegordon.design\n\nLee Gordon Design`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      <section className="shell pb-24 md:pb-32">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="t-label">Legal</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="t-display mt-7">
              Privacy policy
              <span className="text-accent">.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="t-label mt-8">Effective 27 February 2026</p>
          </ScrollReveal>

          <div className="mt-16">
            {sections.map((section, index) => (
              <ScrollReveal key={section.heading} delay={Math.min(index, 6) * 0.04}>
                <div
                  className="grid grid-cols-1 gap-x-12 gap-y-4 py-9 md:grid-cols-12"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <div className="md:col-span-3">
                    <h2 className="t-h3">{section.heading}</h2>
                  </div>

                  <div className="space-y-4 md:col-span-9">
                    {section.body.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="t-small">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <Rule />
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="t-label normal-case tracking-normal">
                This policy may be updated occasionally.
              </p>
              <Link href="/" className="link">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
