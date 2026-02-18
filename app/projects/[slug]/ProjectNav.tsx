"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/content";

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {/* Previous */}
          <div className="py-12 md:pr-8">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group block"
              >
                <p className="text-white/30 text-xs font-medium tracking-wider uppercase mb-2">
                  Previous
                </p>
                <p className="font-display text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  {prev.frontmatter.title}
                </p>
                <p className="text-white/40 text-sm mt-1">
                  {prev.frontmatter.client}
                </p>
              </Link>
            ) : (
              <div className="py-4">
                <p className="text-white/20 text-sm">No previous project</p>
              </div>
            )}
          </div>

          {/* Next */}
          <div className="py-12 md:pl-8 text-right">
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group block"
              >
                <p className="text-white/30 text-xs font-medium tracking-wider uppercase mb-2">
                  Next
                </p>
                <p className="font-display text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center justify-end gap-2">
                  {next.frontmatter.title}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
                <p className="text-white/40 text-sm mt-1">
                  {next.frontmatter.client}
                </p>
              </Link>
            ) : (
              <div className="py-4">
                <p className="text-white/20 text-sm">No next project</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
