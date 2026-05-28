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

      {/* Trust Bar */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase text-center mb-10">
              Trusted by teams at
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {["Fold", "Lightning Labs", "Qantas", "Nokia", "Chan Zuckerberg Initiative", "StickerGiant"].map((name) => (
                <span
                  key={name}
                  className="text-white/25 text-sm font-medium tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase">
                What I Do
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-center text-white mb-16">
              Design leadership for the AI era
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agentic Interface Design",
                description:
                  "Designing the UX of autonomous agents — when the product makes decisions, not just takes commands. Conversation flows, tool-calling patterns, human-in-the-loop moments.",
              },
              {
                title: "Product Design & Strategy",
                description:
                  "End-to-end product design from zero to launch. UX research, information architecture, interaction design, and the strategic narrative that gets stakeholders aligned.",
              },
              {
                title: "Design Systems & Scale",
                description:
                  "Building design systems that don't just look consistent — they accelerate the team. Tokens, components, documentation, and the governance that keeps them alive.",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={0.15 + i * 0.1}>
                <div className="p-6 rounded-xl border border-white/5 bg-surface-50/50 hover:border-white/10 transition-colors duration-300">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
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
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase">
                What Clients Say
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-center text-white mb-16">
              Results that speak for themselves
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Lee transformed not just our product, but our entire approach to design. The research-driven culture he built continues to drive our decision-making.",
                author: "Will Reeves",
                role: "CEO, Fold",
                metric: "3x onboarding completion",
              },
              {
                quote: "The strategic framework Lee's team delivered didn't just solve today's problems — it gave us a roadmap for the next five years of digital evolution.",
                author: "Qantas Digital Team",
                role: "",
                metric: "23% mobile conversion increase",
              },
              {
                quote: "Lee brought a rare combination of strategic thinking and human empathy to a deeply technical product challenge. His team's work set the standard for how we approach consumer IoT design.",
                author: "Nokia Connected Home Division",
                role: "",
                metric: "94% setup completion rate",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <div className="p-6 rounded-xl border border-white/5 bg-surface-50/30 hover:border-white/10 transition-colors duration-300 h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-emerald-400 text-xs font-medium">{t.metric}</span>
                    </span>
                  </div>
                  <blockquote className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-white text-sm font-medium">{t.author}</p>
                    {t.role && <p className="text-white/40 text-xs">{t.role}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase">
                How I Work
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-center text-white mb-16">
              Three ways to engage
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sprint",
                description: "Two-week focused engagement for a specific deliverable — a design system audit, a prototype, or a strategic workshop. Quick turnaround, clear output.",
                price: "$2,500",
              },
              {
                title: "Retainer",
                description: "Ongoing fractional design leadership — a predictable number of days per week embedded with your team. Strategy, execution, and design ops rolled into one.",
                price: "$4,500/mo",
              },
              {
                title: "Project",
                description: "Full-project engagement from discovery to launch. End-to-end product design with research, prototyping, testing, and handoff. Scoped to your timeline.",
                price: "Custom",
              },
            ].map((option, i) => (
              <ScrollReveal key={option.title} delay={0.15 + i * 0.1}>
                <div className="p-6 rounded-xl border border-white/5 bg-surface-50/50 hover:border-white/10 transition-colors duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {option.title}
                    </h3>
                    <span className="text-emerald-400 text-sm font-medium">{option.price}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">
                    {option.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              About
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-sm font-bold text-white mb-6">
              Over 15 years shaping digital products
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              From R/GA to Nokia to leading design at Fold, I&apos;ve built and scaled design teams,
              launched products used by millions, and helped organizations discover what thoughtful
              design can really do. Now I&apos;m focused on the most interesting design problem of the next decade:
              the interface between humans and intelligent systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-neutral-200 hover:text-white transition-colors duration-300 group"
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
