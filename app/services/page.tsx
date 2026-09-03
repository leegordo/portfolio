import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Short product design sprints, ongoing senior design support, and full projects from discovery through launch.",
};

const engagements = [
  {
    tier: "Sprint",
    price: "$2,500",
    suffix: "",
    summary: "Two focused weeks on one problem.",
    desc: "A product direction, a working prototype, a design-system audit, or a team workshop. We agree on the question and the output before the sprint starts.",
  },
  {
    tier: "Retainer",
    price: "$4,500",
    suffix: "/mo and up",
    summary: "Ongoing support at a monthly capacity we agree on.",
    desc: "I can lead the design work, design the product, improve the team's design system, or cover the lot. We set the monthly capacity before starting.",
  },
  {
    tier: "Project",
    price: "Custom",
    suffix: "",
    summary: "A defined problem, from discovery through launch.",
    desc: "Research, flows, prototypes, testing, production UI, and implementation support, scoped to the project.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      <section className="shell pb-24 md:pb-32">
        <ScrollReveal>
          <p className="t-label">Services</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="t-display mt-7 max-w-[13ch]">
            Ways to work together
            <span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="t-lede measure mt-10">
            I offer short sprints, ongoing support, and full projects. The scope and output are
            agreed before the work starts.
          </p>
        </ScrollReveal>

        <div className="mt-20">
          {engagements.map((option, i) => (
            <ScrollReveal key={option.tier} delay={0.08 + i * 0.07}>
              <div
                className="group grid grid-cols-1 gap-x-12 gap-y-5 py-10 md:grid-cols-12"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="md:col-span-3">
                  <span className="t-label text-accent">{option.tier}</span>
                  <p className="mt-4 text-2xl font-h1 tracking-h1 text-ink-1">
                    {option.price}
                    {option.suffix && (
                      <span className="ml-1.5 text-sm font-ui tracking-body text-ink-3">
                        {option.suffix}
                      </span>
                    )}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <h2 className="t-h3">{option.summary}</h2>
                  <p className="t-small mt-4 max-w-[56ch]">{option.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <Rule />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            <p className="t-lede measure">
              Not sure which one fits? Describe the problem and I&rsquo;ll suggest a way to tackle it.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Get in touch
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
