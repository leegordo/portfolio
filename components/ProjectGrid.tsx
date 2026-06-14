"use client";

import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import type { Project } from "@/lib/content";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
            02 — Selected Work
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold text-primary mb-16">
            Projects &amp;<br />
            <span className="text-accent">case studies</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
