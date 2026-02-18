"use client";

import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import type { Project } from "@/lib/content";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
            <span className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase">
              Selected Work
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-amber-500/30 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold text-center text-white mb-16">
            Projects & Case Studies
          </h2>
        </ScrollReveal>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <div
                key={project.slug}
                className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <ProjectCard
                  slug={project.slug}
                  frontmatter={project.frontmatter}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
