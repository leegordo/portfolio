import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";
import { getAboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lee Gordon is a product designer working across research, product direction, interface design, design systems, and AI products.",
};

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <div className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      {/* Opening */}
      <section className="shell pb-20 md:pb-28">
        <ScrollReveal>
          <p className="t-label">About</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="t-display mt-7 max-w-[14ch]">
            {about.heading} {about.headingAccent}
            <span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div className="measure mt-12 space-y-6">
            {about.bioParagraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "t-lede" : "t-body"}>
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Experience */}
      <section className="shell section pt-0">
        <Rule />
        <ScrollReveal delay={0.08}>
          <h2 className="t-h1 mt-7">Experience</h2>
        </ScrollReveal>

        <ol className="mt-16">
          {about.timeline.map((item, index) => (
            <ScrollReveal key={`${item.company}-${item.period}`} delay={Math.min(index, 5) * 0.04} as="li">
              <div
                className="group grid grid-cols-1 gap-x-12 gap-y-3 py-8 md:grid-cols-12"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="md:col-span-3">
                  <span className="t-label transition-colors duration-fast group-hover:text-accent">
                    {item.period}
                  </span>
                </div>

                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="t-h3">{item.company}</h3>
                    <span className="text-sm font-ui text-ink-3">{item.role}</span>
                  </div>
                  <p className="t-small mt-3 max-w-[58ch]">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </section>

      {/* Capabilities */}
      <section className="shell section pt-0">
        <Rule />
        <ScrollReveal delay={0.08}>
          <h2 className="t-h1 mt-7">What I work on</h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {about.skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.07}>
              <div style={{ borderTop: "1px solid var(--line)" }} className="pt-6">
                <h3 className="t-label text-accent">{group.category}</h3>
                <ul className="mt-5 space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-base font-ui text-ink-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="shell pb-24 md:pb-32">
        <Rule accent />
        <ScrollReveal delay={0.08}>
          <h2 className="t-h1 mt-10 max-w-[18ch]">{about.ctaHeading}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="t-lede measure mt-6">{about.ctaDescription}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link href="/contact" className="btn btn-primary mt-10">
            Get in touch
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
