import Link from "next/link";

import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import ProjectGrid from "@/components/ProjectGrid";
import ServicesGrid from "@/components/ServicesGrid";
import PrincipleList from "@/components/PrincipleList";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";
import { getAllProjects, getHeroContent } from "@/lib/content";

const services = [
  {
    num: "01",
    title: "Agentic interface design",
    description:
      "I design what happens when software can plan, act, and decide: what people can see, where they stay in control, and how the system recovers when it gets something wrong.",
  },
  {
    num: "02",
    title: "Product design & strategy",
    description:
      "I take products from a messy problem to a tested direction and a working interface — research, flows, prototypes, production UI, and implementation support.",
  },
  {
    num: "03",
    title: "Design systems at scale",
    description:
      "I build systems people and agents can both use: tokens, components, content rules, documentation, and the checks that keep a product from drifting.",
  },
];

const principles = [
  {
    label: "Start with evidence",
    body:
      "Interviews, behaviour, and working prototypes get past opinions and find the part of the problem that actually matters.",
  },
  {
    label: "Make the system explicit",
    body:
      "Decisions, tokens, constraints, and open questions belong somewhere the team can use them — not in memory or a polished handoff deck.",
  },
  {
    label: "Stay through implementation",
    body:
      "I work in the code when a static prototype cannot answer the question. The design is not done because the file looks finished.",
  },
];

export default function HomePage() {
  const projects = getAllProjects();
  const heroContent = getHeroContent();

  return (
    <>
      <Hero content={heroContent} />

      <BrandMarquee />

      {/* 01 — Practice */}
      <section id="services" className="section">
        <div className="shell">
          <SectionHeading
            index="01"
            label="Practice"
            title={
              <>
                Design for products
                <br />
                with hard questions
              </>
            }
            lede="Some problems need a direction. Some need a system. Most need someone who will stay past the handoff."
          />

          <div className="mt-20">
            <ServicesGrid services={services} />
          </div>

          <ScrollReveal delay={0.1}>
            <Link href="/services" className="link mt-14">
              How the work is structured
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 02 — Work */}
      <ProjectGrid projects={projects} />

      {/* 03 — Approach */}
      <section id="approach" className="section">
        <div className="shell">
          <SectionHeading
            index="03"
            label="Approach"
            title={
              <>
                How I stay
                <br />
                useful
              </>
            }
          />

          <div className="mt-20">
            <PrincipleList items={principles} />
          </div>
        </div>
      </section>

      {/* 04 — About */}
      <section className="section pb-0">
        <div className="shell">
          <Rule />

          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p className="t-label">04 &nbsp;·&nbsp; About</p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="t-h2 mt-6">
                  Fifteen years
                  <br />
                  shaping products
                </h2>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={0.12}>
                <p className="t-quote">
                  &ldquo;I like complicated products, direct feedback, and prototypes that answer
                  real questions.&rdquo;
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.18}>
                <p className="t-body mt-8 max-w-[52ch]">
                  I&rsquo;ve moved between research, product design, design systems, and the code
                  underneath the interface — at R/GA and DigitasLBi, in-house at Nokia and Covetrus,
                  and most recently leading design at Fold. Lately most of that work involves AI
                  agents.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <Link href="/about" className="link mt-9">
                  More about me
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
