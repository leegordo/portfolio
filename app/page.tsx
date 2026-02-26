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

      <ProjectGrid projects={projects} />

      {/* Brief intro section between hero and projects */}
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
              design can really do.
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
