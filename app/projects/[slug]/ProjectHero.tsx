"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import type { ProjectFrontmatter } from "@/lib/content";

interface ProjectHeroProps {
  frontmatter: ProjectFrontmatter;
}

export default function ProjectHero({ frontmatter }: ProjectHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-surface to-surface" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm transition-colors duration-300 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {frontmatter.client}
          </p>
          <h1 className="font-display text-display-lg font-bold text-white mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-white/50 text-xl">
            {frontmatter.role} · {frontmatter.year}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 aspect-[21/9] rounded-xl overflow-hidden bg-surface-100 border border-white/5 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-surface-200 to-surface-100" />
          {frontmatter.cover ? (
            <Image
              src={assetPath(frontmatter.cover)}
              alt={frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl md:text-6xl font-bold text-white/5">
                {frontmatter.client}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
