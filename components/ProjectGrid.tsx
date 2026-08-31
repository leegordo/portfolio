import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import type { Project } from "@/lib/content";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading
          label="Selected work"
          title={
            <>
              A selection of
              <br />
              product work
            </>
          }
        />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
