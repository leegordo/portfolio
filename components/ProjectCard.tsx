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
  reverse?: boolean;
}

export default function ProjectCard({ slug, frontmatter, index, reverse = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${slug}`}
        className="group grid grid-cols-1 md:grid-cols-2 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 overflow-hidden"
      >
        {/* Visual */}
        <div className={`relative aspect-[16/10] bg-[#14141c] flex items-center justify-center ${reverse ? "md:order-2" : ""}`}>
          {frontmatter.cover ? (
            <Image
              src={assetPath(frontmatter.cover)}
              alt={frontmatter.title}
              fill
              className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <span className="font-mono text-[0.7rem] text-[#4a4a60] uppercase tracking-[0.1em]">
              {frontmatter.title}
            </span>
          )}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(232,90,138,0.02)_4px,rgba(232,90,138,0.02)_5px)]" />
        </div>

        {/* Info */}
        <div className={`p-8 md:p-12 flex flex-col justify-center ${reverse ? "md:order-1" : ""}`}>
          <div className="font-mono text-[0.65rem] text-[#f080a0] uppercase tracking-[0.15em] mb-3">
            {frontmatter.client} — {frontmatter.year} — {frontmatter.role}
          </div>
          <h3 className="font-display text-2xl font-bold text-[#e8e8f0] mb-4 tracking-[-0.02em]">
            {frontmatter.title}
          </h3>
          {frontmatter.summary && (
            <p className="text-[#a0a0b8] text-[0.95rem] leading-relaxed font-light mb-6">
              {frontmatter.summary}
            </p>
          )}
          {frontmatter.metric && (
            <span className="inline-block self-start font-mono text-[0.7rem] text-[#f080a0] px-4 py-2 border border-[rgba(232,90,138,0.15)] bg-[rgba(232,90,138,0.05)]">
              {frontmatter.metric}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
