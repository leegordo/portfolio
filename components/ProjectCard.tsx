"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ClipImage from "@/components/ClipImage";
import type { ProjectFrontmatter } from "@/lib/content";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
  index: number;
  reverse?: boolean;
}

export default function ProjectCard({ slug, frontmatter, index, reverse = false }: ProjectCardProps) {
  const directions = ["from-right", "from-left", "diagonal", "from-right"];
  const dir = directions[index % directions.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${slug}`}
        className="group grid grid-cols-1 md:grid-cols-2 border border-subtle hover:border-hover transition-all duration-300 overflow-hidden"
      >
        {/* Visual — clip-path reveal + parallax scale */}
        <div className={`${reverse ? "md:order-2" : ""}`}>
          {frontmatter.cover ? (
            <ClipImage
              src={frontmatter.cover}
              alt={frontmatter.title}
              aspectRatio="16/10"
              direction={dir as any}
              className="bg-surface-50 group"
              imgClass="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,color-mix(in_srgb,var(--accent)_2%,transparent)_4px,color-mix(in_srgb,var(--accent)_2%,transparent)_5px)]" />
            </ClipImage>
          ) : (
            <div className="relative aspect-[16/10] bg-surface-50 flex items-center justify-center">
              <span className="font-mono text-[0.7rem] text-faint uppercase tracking-[0.1em]">
                {frontmatter.title}
              </span>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,color-mix(in_srgb,var(--accent)_2%,transparent)_4px,color-mix(in_srgb,var(--accent)_2%,transparent)_5px)]" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className={`p-8 md:p-12 flex flex-col justify-center ${reverse ? "md:order-1" : ""}`}>
          <div className="font-mono text-[0.65rem] text-accent-soft uppercase tracking-[0.15em] mb-3">
            {frontmatter.client} \u2014 {frontmatter.year} \u2014 {frontmatter.role}
          </div>
          <h3 className="font-display text-2xl font-bold text-primary mb-4 tracking-[-0.02em]">
            {frontmatter.title}
          </h3>
          {frontmatter.summary && (
            <p className="text-secondary text-[0.95rem] leading-relaxed font-light mb-6">
              {frontmatter.summary}
            </p>
          )}
          {frontmatter.metric && (
            <span className="inline-block self-start font-mono text-[0.7rem] text-accent-soft px-4 py-2 border border-accent-border bg-accent-muted">
              {frontmatter.metric}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
