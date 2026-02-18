import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getAboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Lee Gordon — Product Designer with 15+ years of experience in UX research, design leadership, and product strategy.",
};

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            About
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-display-md font-bold text-white mb-8">
            {about.heading}{" "}
            <span className="text-gradient-accent">{about.headingAccent}</span> to use.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl space-y-6">
            {about.bioParagraphs.map((paragraph, i) => (
              <p key={i} className="text-white/60 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="line-accent" />
      </div>

      {/* Career Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <h2 className="font-display text-display-sm font-bold text-white mb-12">
            Career Timeline
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent" />

          <div className="space-y-0">
            {about.timeline.map((item, index) => (
              <ScrollReveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
                <div className="relative pl-8 md:pl-20 py-6 group">
                  {/* Dot */}
                  <div className="absolute left-0 md:left-8 top-8 w-2 h-2 -translate-x-[3px] rounded-full bg-white/20 group-hover:bg-amber-400 transition-colors duration-300 ring-4 ring-surface" />

                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {item.company}
                    </h3>
                    <span className="text-white/30 hidden md:inline">&middot;</span>
                    <span className="text-amber-400/70 text-sm font-medium">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs font-medium tracking-wider uppercase mb-2">
                    {item.period}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="line-accent" />
      </div>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <h2 className="font-display text-display-sm font-bold text-white mb-12">
            Skills &amp; Expertise
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {about.skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <div>
                <h3 className="text-amber-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-surface-100 text-white/60 border border-white/5 hover:border-amber-500/30 hover:text-white/80 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pt-8">
        <ScrollReveal>
          <div className="rounded-2xl bg-surface-50 border border-white/5 p-10 md:p-16 text-center">
            <h2 className="font-display text-display-sm font-bold text-white mb-4">
              {about.ctaHeading}
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              {about.ctaDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-all duration-300"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
