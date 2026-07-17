import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import BrandMarquee from "@/components/BrandMarquee";
import { getAllProjects, getHeroContent } from "@/lib/content";

export default function HomePage() {
  const projects = getAllProjects();
  const heroContent = getHeroContent();

  return (
    <>
      <Hero content={heroContent} />

      <BrandMarquee />

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
              01 — Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-primary mb-16">
              Design for products
              <br />
              with <span className="text-accent">hard questions</span>
            </h2>
          </ScrollReveal>

          <ServicesGrid
            services={[
              {
                num: "01",
                title: "Agentic Interface Design",
                description:
                  "I design what happens when software can plan, act, and make decisions: what people can see, where they stay in control, and how the system recovers when it gets something wrong.",
              },
              {
                num: "02",
                title: "Product Design & Strategy",
                description:
                  "I take products from a messy problem to a tested direction and working interface. That can include research, flows, prototypes, production UI, and implementation support.",
              },
              {
                num: "03",
                title: "Design Systems & Scale",
                description:
                  "I build systems people and agents can both use: tokens, components, content rules, documentation, and the checks that keep the product from drifting.",
              },
            ]}
          />

          <ScrollReveal delay={0.45}>
            <div className="mt-12">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group"
              >
                See services
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProjectGrid projects={projects} />

      {/* Approach */}
      <section id="approach" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
              03 — Approach
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-primary mb-16">
              How I stay
              <br />
              <span className="text-accent">useful</span>
            </h2>
          </ScrollReveal>

          <TestimonialsGrid
            items={[
              {
                label: "Start with evidence",
                body:
                  "I use interviews, behavior, and working prototypes to get past opinions and find the part of the problem that matters.",
              },
              {
                label: "Make the system explicit",
                body:
                  "Decisions, tokens, constraints, and open questions should live somewhere the team can use them. I do not rely on memory or a polished handoff deck.",
              },
              {
                label: "Stay through implementation",
                body:
                  "I work in the code when a static prototype cannot answer the question. The design is not done because the file looks finished.",
              },
            ]}
          />
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-6">
              About
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-sm font-bold text-primary mb-6">
              Over 15 years shaping digital products
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-secondary text-lg leading-relaxed mb-8 font-light">
              I&apos;ve spent 15 years moving between research, product design, design systems, and the
              code underneath the interface. I like complicated products, direct feedback, and
              prototypes that answer real questions. Lately, most of that work involves AI agents.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group"
            >
              Learn more about me
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
