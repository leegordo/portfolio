import Link from "next/link";
import type { Project } from "@/lib/content";

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="More projects" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="shell grid grid-cols-1 md:grid-cols-2">
        <div className="py-12 md:pr-12" style={{ borderRight: "1px solid var(--line)" }}>
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group block">
              <span className="t-label">Previous</span>
              <p className="t-h3 mt-4 flex items-center gap-3">
                <svg
                  className="h-4 w-4 shrink-0 text-ink-3 transition-transform duration-mid ease-out group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                {prev.frontmatter.title}
              </p>
              <p className="t-label mt-3">{prev.frontmatter.client}</p>
            </Link>
          ) : (
            <span className="t-label">Start of the index</span>
          )}
        </div>

        <div className="py-12 md:pl-12 md:text-right">
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group block">
              <span className="t-label">Next</span>
              <p className="t-h3 mt-4 flex items-center gap-3 md:justify-end">
                {next.frontmatter.title}
                <svg
                  className="h-4 w-4 shrink-0 text-ink-3 transition-transform duration-mid ease-out group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </p>
              <p className="t-label mt-3">{next.frontmatter.client}</p>
            </Link>
          ) : (
            <span className="t-label">End of the index</span>
          )}
        </div>
      </div>
    </nav>
  );
}
