"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";
import type { ProjectFrontmatter } from "@/lib/content";
import LoopyHeroLoop from "@/components/LoopyHeroLoop";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectHero({ frontmatter }: { frontmatter: ProjectFrontmatter }) {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  return (
    <section className="pt-[calc(var(--nav-h)+clamp(2.5rem,7vh,4.5rem))]">
      <div className="shell">
        <motion.div {...rise(0)}>
          <Link href="/#work" className="t-label group inline-flex items-center gap-2 hover:text-ink-1">
            <svg
              className="h-3 w-3 transition-transform duration-mid ease-out group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All work
          </Link>
        </motion.div>

        <motion.p {...rise(0.08)} className="t-label mt-12 text-accent">
          {frontmatter.client}
        </motion.p>

        <motion.h1 {...rise(0.14)} className="t-display mt-5 max-w-[15ch]">
          {frontmatter.title}
        </motion.h1>

        <motion.p {...rise(0.2)} className="t-lede mt-7">
          {[frontmatter.role, frontmatter.year].filter(Boolean).join(" · ")}
        </motion.p>
      </div>

      {/* Cover */}
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.28, ease: EASE }}
        className="shell mt-16"
      >
        <div
          className={`relative overflow-hidden rounded-[3px] border ${
            frontmatter.heroAnimation === "loopy-loop"
              ? "aspect-[16/10] md:aspect-[21/9]"
              : "aspect-[16/9] md:aspect-[21/9]"
          }`}
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          {frontmatter.heroAnimation === "loopy-loop" ? (
            <LoopyHeroLoop />
          ) : frontmatter.cover ? (
            <Image
              src={assetPath(frontmatter.cover)}
              alt={frontmatter.coverAlt ?? frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1184px"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="t-label">{frontmatter.client}</span>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
