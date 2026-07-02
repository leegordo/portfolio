import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import BrandMarquee from "@/components/BrandMarquee";
import ScrollTheme from "@/components/ScrollTheme";
import { getAllProjects, getHeroContent } from "@/lib/content";

export default function HomePage() {
  const projects = getAllProjects();
  const heroContent = getHeroContent();

  return (
    <>
      <ScrollTheme />

      <section id="hero" data-section-theme="void-rose">
        <Hero content={heroContent} />
      </section>

      <section id="brands" data-section-theme="void-rose">
        <BrandMarquee />
      </section>

      <section id="services" data-section-theme="cinnabar">
        <div className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
                01 — Services
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-display-md font-bold text-primary mb-16">
                Design <span className="text-accent">leadership</span>
                <br />
                for the AI era
              </h2>
            </ScrollReveal>

            <ServicesGrid
              services={[
                {
                  num: "01",
                  title: "Agentic Interface Design",
                  description:
                    "Designing the UX of autonomous agents\u2014 when the product makes decisions, not just takes commands. Conversation flows, tool-calling patterns, human-in-the-loop moments.",
                },
                {
                  num: "02",
                  title: "Product Design & Strategy",
                  description:
                    "End-to-end product design from zero to launch. UX research, information architecture, interaction design, and the strategic narrative that gets stakeholders aligned.",
                },
                {
                  num: "03",
                  title: "Design Systems & Scale",
                  description:
                    "Building design systems that don't just look consistent\u2014 they accelerate the team. Tokens, components, documentation, and the governance that keeps them alive.",
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
        </div>
      </section>

      <section id="work" data-section-theme="cinnabar">
        <ProjectGrid projects={projects} />
      </section>

      <section id="approach" data-section-theme="abyssal">
        <div className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
                03 — Testimonials
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-display-md font-bold text-primary mb-16">
                Results that
                <br />
                <span className="text-accent">speak</span>
              </h2>
            </ScrollReveal>

            <TestimonialsGrid
              testimonials={[
                {
                  metric: "3x onboarding completion",
                  quote:
                    "Lee transformed not just our product, but our entire approach to design. The research-driven culture he built continues to drive our decision-making.",
                  name: "Will Reeves",
                  title: "CEO, Fold",
                },
                {
                  metric: "23% mobile conversion increase",
                  quote:
                    "The strategic framework Lee's team delivered didn't just solve today's problems\u2014 it gave us a roadmap for the next five years of digital evolution.",
                  name: "Qantas Digital Team",
                  title: "",
                },
                {
                  metric: "94% setup completion rate",
                  quote:
                    "Lee brought a rare combination of strategic thinking and human empathy to a deeply technical product challenge.",
                  name: "Nokia Connected Home",
                  title: "",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="about" data-section-theme="abyssal">
        <div className="py-24 md:py-32 px-6 md:px-12 border-t border-subtle">
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
                From R/GA to Nokia to leading design at Fold, I&apos;ve built and scaled design teams,
                launched products used by millions, and helped organizations discover what thoughtful
                design can really do. Now I&apos;m focused on the most interesting design problem of the
                next decade: the interface between humans and intelligent systems.
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
        </div>
      </section>
    </>
  );
}
