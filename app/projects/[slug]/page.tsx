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
      description:
        project.frontmatter.summary ??
        `${project.frontmatter.role} at ${project.frontmatter.client}. ${project.frontmatter.skills.join(", ")}.`,
      robots: project.frontmatter.unlisted ? { index: false, follow: false } : undefined,
    };
  } catch {
    return { title: "Project not found" };
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
      <div className="shell flex min-h-[80svh] flex-col justify-center py-32">
        <p className="t-label text-accent">In progress</p>
        <h1 className="t-display mt-7 max-w-[14ch]">{project.frontmatter.title}</h1>
        <p className="t-lede mt-7">
          {project.frontmatter.role} · {project.frontmatter.client}
        </p>
        <p className="t-body measure mt-8">
          This case study is still being written. Check back soon.
        </p>
        <Link href="/#work" className="link mt-10">
          See the rest of the work
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);
  const mdxContent = await renderMDX(project.content);

  const facts = [
    { label: "Client", value: project.frontmatter.client },
    { label: "Role", value: project.frontmatter.role },
    { label: "Year", value: project.frontmatter.year },
  ].filter((fact) => fact.value);

  return (
    <article>
      <ProjectHero frontmatter={project.frontmatter} />

      {/* Credits */}
      <div className="shell mt-20">
        <dl
          className="grid grid-cols-2 gap-x-10 gap-y-8 py-9 md:grid-cols-12"
          style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
        >
          {facts.map((fact) => (
            <div key={fact.label} className="md:col-span-2">
              <dt className="t-label">{fact.label}</dt>
              <dd className="t-small mt-2.5 text-ink-1">{fact.value}</dd>
            </div>
          ))}

          {project.frontmatter.skills.length > 0 && (
            <div className="col-span-2 md:col-span-6">
              <dt className="t-label">Scope</dt>
              <dd className="t-small mt-2.5 text-ink-1">
                {project.frontmatter.skills.join(" · ")}
              </dd>
            </div>
          )}
        </dl>
      </div>

      {/* Case study */}
      <div className="shell py-20 md:py-28">
        <div className="prose">{mdxContent}</div>
      </div>

      {!project.frontmatter.unlisted && <ProjectNav prev={prev} next={next} />}
    </article>
  );
}
