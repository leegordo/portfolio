"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import type { ProjectFrontmatter } from "@/lib/content";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
  index: number;
}

function CardContent({ frontmatter, isComingSoon }: { frontmatter: ProjectFrontmatter; isComingSoon: boolean }) {
  return (
    <>
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-200">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-surface-200 to-surface-100" />
        {frontmatter.cover && !isComingSoon && (
          <Image
            src={assetPath(frontmatter.cover)}
            alt={frontmatter.title}
            fill
            className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {isComingSoon && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-neutral-200 text-xs font-medium">
            Coming Soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-100 via-surface-100/20 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-neutral-200 text-xs font-medium tracking-wider uppercase">
            {frontmatter.client}
          </span>
          <span className="text-white/20">&middot;</span>
          <span className="text-white/40 text-xs">{frontmatter.year}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-neutral-200 transition-colors duration-300">
          {frontmatter.title}
        </h3>

        <p className="text-white/50 text-sm mb-4">{frontmatter.role}</p>

        <div className="flex flex-wrap gap-2">
          {frontmatter.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/40 border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>

        {!isComingSoon && (
          <div className="mt-5 flex items-center gap-2 text-sm text-neutral-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default function ProjectCard({ slug, frontmatter, index }: ProjectCardProps) {
  const isComingSoon = !!frontmatter.comingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${slug}`} className="group block rounded-xl overflow-hidden border border-white/5 bg-surface-50 hover:border-white/10 transition-colors duration-500">
        <CardContent frontmatter={frontmatter} isComingSoon={isComingSoon} />
      </Link>
    </motion.div>
  );
}
