"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";
import type { ProjectFrontmatter } from "@/lib/content";
import LoopyHeroLoop from "./LoopyHeroLoop";

const EASE = [0.22, 1, 0.36, 1] as const;
const RESPONSIVE_COVER_WIDTHS = [640, 960, 1280] as const;

function responsiveCoverSrcSet(cover: string): string | undefined {
  const match = cover.match(/^(.*)-1280\.webp$/);
  if (!match) return undefined;
  return RESPONSIVE_COVER_WIDTHS.map(
    (width) => `${assetPath(`${match[1]}-${width}.webp`)} ${width}w`,
  ).join(", ");
}

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
  reverse?: boolean;
}

export default function ProjectCard({
  slug,
  frontmatter,
  reverse = false,
}: ProjectCardProps) {
  const reduced = useReducedMotion();
  const coverSrcSet = frontmatter.cover ? responsiveCoverSrcSet(frontmatter.cover) : undefined;
  const meta = [frontmatter.client, frontmatter.year].filter(Boolean);

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.85, ease: EASE }}
    >
      <Link
        href={`/projects/${slug}`}
        className="group grid grid-cols-1 items-center gap-x-14 gap-y-8 md:grid-cols-12"
      >
        {/* The work itself — shown at full strength, not dimmed */}
        <div
          className={`relative col-span-1 overflow-hidden rounded-[3px] border md:col-span-7 ${
            reverse ? "md:order-2" : ""
          }`}
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <div className="relative aspect-[16/10]">
            {frontmatter.heroAnimation === "loopy-loop" ? (
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]">
                <LoopyHeroLoop />
              </div>
            ) : frontmatter.cover ? (
              <img
                src={assetPath(frontmatter.cover)}
                srcSet={coverSrcSet}
                sizes="(max-width: 768px) 100vw, 58vw"
                alt={frontmatter.coverAlt ?? frontmatter.title}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center t-label">
                {frontmatter.title}
              </span>
            )}
          </div>
          {/* Keeps the image from fighting the page edge */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-mid group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px var(--accent-line)" }}
            aria-hidden
          />
        </div>

        {/* Caption */}
        <div className={`col-span-1 md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <p className="t-label">{meta.join(" · ")}</p>

          <h3 className="t-h2 mt-5">
            <span className="relative inline">
              {frontmatter.title}
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[700ms] ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </span>
          </h3>

          {/* The role stays in sentence case — long titles read badly
              in tracked-out uppercase. */}
          {frontmatter.role && (
            <p className="mt-3 text-base font-ui text-ink-3">{frontmatter.role}</p>
          )}

          {frontmatter.summary && (
            <p className="t-small mt-5 max-w-[46ch]">{frontmatter.summary}</p>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="link">
              Read more
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {frontmatter.metric && (
              <span
                className="t-label rounded-[2px] border px-2.5 py-1.5 text-accent"
                style={{ borderColor: "var(--accent-line)", background: "var(--accent-dim)" }}
              >
                {frontmatter.metric}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
