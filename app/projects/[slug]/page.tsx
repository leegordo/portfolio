import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getProjectSlugs,
  getAdjacentProjects,
} from "@/lib/content";
import { renderMDX } from "@/lib/mdx";
import ProjectHero from "./ProjectHero";
import ProjectNav from "./ProjectNav";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = getProjectBySlug(slug);
    return {
      title: `${project.frontmatter.title} — ${project.frontmatter.client}`,
      description: `${project.frontmatter.role} at ${project.frontmatter.client}. ${project.frontmatter.skills.join(", ")}.`,
    };
  } catch {
    return { title: "Project Not Found" };
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  if (project.frontmatter.comingSoon) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-neutral-200 text-sm font-medium mb-6">
            Coming Soon
          </div>
          <h1 className="font-display text-display-md font-bold text-white mb-4">
            {project.frontmatter.title}
          </h1>
          <p className="text-white/50 text-lg mb-4">
            {project.frontmatter.role} at {project.frontmatter.client}
          </p>
          <p className="text-white/40 mb-8">
            This case study is currently being written. Check back soon for a detailed look at this project.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-200 hover:text-white transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);
  const mdxContent = await renderMDX(project.content);

  return (
    <article>
      <ProjectHero frontmatter={project.frontmatter} />

      {/* Meta bar */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-b border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">Client</p>
            <p className="text-white font-medium">{project.frontmatter.client}</p>
          </div>
          <div>
            <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">Role</p>
            <p className="text-white font-medium">{project.frontmatter.role}</p>
          </div>
          <div>
            <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">Year</p>
            <p className="text-white font-medium">{project.frontmatter.year}</p>
          </div>
          <div>
            <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">Skills</p>
            <div className="flex flex-wrap gap-1.5">
              {project.frontmatter.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs rounded bg-white/10 text-neutral-200 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MDX Body */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mdx-content">{mdxContent}</div>
      </div>

      <ProjectNav prev={prev} next={next} />
    </article>
  );
}
