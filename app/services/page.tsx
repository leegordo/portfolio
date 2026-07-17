import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product design support for focused sprints, ongoing team support, and full projects from discovery through launch.",
};

const pricingOptions = [
  {
    tier: "Sprint",
    price: "$2,500",
    desc: "Two focused weeks on one problem: a product direction, working prototype, design-system audit, or team workshop. We agree on the question and the output before the sprint starts.",
  },
  {
    tier: "Retainer",
    price: "From $4,500",
    priceSuffix: "/mo",
    desc: "Ongoing support with the monthly capacity agreed before we start. I can lead the design work, make the work, improve the system around it, or cover all three.",
  },
  {
    tier: "Project",
    price: "Custom",
    desc: "A defined product problem from discovery through launch. The work can include research, flows, prototypes, testing, production UI, and implementation support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
              Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-display-md font-bold text-primary mb-6">
              Pick the shape
              <br />
              of the <span className="text-accent">work</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-secondary text-lg font-light leading-relaxed max-w-2xl mb-16">
              Some problems need two focused weeks. Others need a senior designer in the room every
              week. These are the three ways I usually structure the work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((option, i) => (
              <ScrollReveal key={option.tier} delay={0.15 + i * 0.1}>
                <div className="p-8 border border-subtle relative overflow-hidden hover:border-hover hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent opacity-0 hover:opacity-50 transition-opacity" />
                  <div className="font-mono text-[0.65rem] text-faint uppercase tracking-[0.2em] mb-4">
                    {option.tier}
                  </div>
                  <div className="text-[3rem] font-bold text-accent leading-none mb-6">
                    {option.price}
                    {option.priceSuffix && (
                      <span className="text-[1.1rem] text-tertiary font-normal ml-1">
                        {option.priceSuffix}
                      </span>
                    )}
                  </div>
                  <p className="text-[0.95rem] text-secondary font-light leading-relaxed">
                    {option.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-black font-medium hover:bg-accent-soft transition-all duration-300"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
