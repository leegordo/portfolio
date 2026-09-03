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
    title: "AI product design",
    description:
      "I design what people see and control when software plans or acts for them, including what happens when it gets something wrong.",
  },
  {
    title: "Product design and direction",
    description:
      "I use research and prototypes to work out what to build, then design the flows, production interface, and path into implementation.",
  },
  {
    title: "Design systems",
    description:
      "I build tokens, components, content rules, and documentation that product and engineering teams can use day to day.",
  },
];

const principles = [
  {
    label: "Use evidence early",
    body:
      "Interviews, product behaviour, and working prototypes show where the problem is before the team commits to a solution.",
  },
  {
    label: "Write decisions down",
    body:
      "I keep decisions, constraints, tokens, and open questions where the team can find and use them.",
  },
  {
    label: "Work through implementation",
    body:
      "I work with engineering and use code when a static prototype cannot answer the question.",
  },
];

export default function HomePage() {
  const projects = getAllProjects();
  const heroContent = getHeroContent();

  return (
    <>
      <Hero content={heroContent} />

      <BrandMarquee />

      {/* Practice */}
      <section id="services" className="section">
        <div className="shell">
          <SectionHeading
            label="Practice"
            title={
              <>
                Senior design help
                <br />
                where it is needed
              </>
            }
            lede="I can set the direction, design the interface, improve the system around it, or stay through the whole thing."
          />

          <div className="mt-20">
            <ServicesGrid services={services} />
          </div>

          <ScrollReveal delay={0.1}>
            <Link href="/services" className="link mt-14">
              Ways to work together
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Work */}
      <ProjectGrid projects={projects} />

      {/* Approach */}
      <section id="approach" className="section">
        <div className="shell">
          <SectionHeading
            label="Approach"
            title={
              <>
                How I work
                <br />
                on product teams
              </>
            }
          />

          <div className="mt-20">
            <PrincipleList items={principles} />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section pb-0">
        <div className="shell">
          <Rule />

          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p className="t-label">About</p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="t-h2 mt-6">
                  Product design
                  <br />
                  since 2008
                </h2>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={0.12}>
                <p className="t-quote">I like complicated products, direct feedback, and prototypes that answer specific questions.</p>
              </ScrollReveal>

              <ScrollReveal delay={0.18}>
                <p className="t-body mt-8 max-w-[52ch]">
                  I&rsquo;ve worked across research, product design, design systems, and front-end code
                  at R/GA and DigitasLBi, in-house at Nokia and Covetrus, and most recently as Head
                  of Design at Fold. These days, much of my work is on AI products.
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
