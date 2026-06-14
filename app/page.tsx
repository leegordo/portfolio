import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllProjects, getHeroContent } from "@/lib/content";

export default function HomePage() {
  const projects = getAllProjects();
  const heroContent = getHeroContent();

  return (
    <>
      <Hero content={heroContent} />

      {/* Trust Strip */}
      <section className="px-6 md:px-12">
        <div className="border-t border-b border-subtle py-6 flex items-center gap-8 md:gap-12 flex-wrap">
          <span className="font-mono text-[0.65rem] text-faint uppercase tracking-[0.2em] shrink-0">
            Trusted by
          </span>
          <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-3">
            {["Fold", "Lightning Labs", "Qantas", "Nokia", "CZI", "StickerGiant"].map((name) => (
              <span key={name} className="text-[0.9rem] font-medium text-tertiary tracking-[0.02em]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

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
              Design <span className="text-accent">leadership</span>
              <br />
              for the AI era
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Agentic Interface Design",
                description:
                  "Designing the UX of autonomous agents — when the product makes decisions, not just takes commands. Conversation flows, tool-calling patterns, human-in-the-loop moments.",
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
                  "Building design systems that don't just look consistent — they accelerate the team. Tokens, components, documentation, and the governance that keeps them alive.",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={0.15 + i * 0.1}>
                <div className="p-8 md:p-10 border border-subtle -m-px hover:border-accent-glow hover:bg-accent-muted transition-all duration-300">
                  <div className="font-mono text-[0.7rem] text-faint mb-6">{service.num}</div>
                  <h3 className="text-[1.3rem] font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-[0.95rem] text-secondary font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectGrid projects={projects} />

      {/* Testimonials */}
      <section id="approach" className="py-24 md:py-32 px-6 md:px-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
                  "The strategic framework Lee's team delivered didn't just solve today's problems — it gave us a roadmap for the next five years of digital evolution.",
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
            ].map((t, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <div className="p-8 border border-subtle relative hover:border-hover transition-colors duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-40" />
                  <span className="font-mono text-[0.7rem] text-accent-soft mb-6 block">
                    {t.metric}
                  </span>
                  <blockquote className="text-[1.05rem] text-secondary font-light leading-relaxed mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[0.9rem] text-primary">{t.name}</p>
                    {t.title && <p className="text-[0.8rem] text-tertiary mt-1">{t.title}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-subtle">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
              04 — Engage
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-primary mb-16">
              Three ways
              <br />
              to <span className="text-accent">work</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: "Sprint",
                price: "$2,500",
                desc: "Two-week focused engagement for a specific deliverable — a design system audit, a prototype, or a strategic workshop. Quick turnaround, clear output.",
              },
              {
                tier: "Retainer",
                price: "$4,500",
                priceSuffix: "/mo",
                desc: "Ongoing fractional design leadership — a predictable number of days per week embedded with your team. Strategy, execution, and design ops rolled into one.",
              },
              {
                tier: "Project",
                price: "Custom",
                desc: "Full-project engagement from discovery to launch. End-to-end product design with research, prototyping, testing, and handoff. Scoped to your timeline.",
              },
            ].map((option, i) => (
              <ScrollReveal key={option.tier} delay={0.15 + i * 0.1}>
                <div className="p-8 border border-subtle relative overflow-hidden hover:border-hover hover:-translate-y-0.5 transition-all duration-300">
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
      </section>
    </>
  );
}
