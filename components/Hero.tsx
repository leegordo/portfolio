"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroContent } from "@/lib/content";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end pb-20 pt-32 px-6 md:px-12">
      <div className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[0.7rem] text-[#f080a0] uppercase tracking-[0.15em] mb-6">
            {content.label}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-lg font-bold text-[#e8e8f0] mb-8"
        >
          Lee<br />
          <span className="text-[#e85a8a]">Gordon.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#a0a0b8] max-w-2xl leading-relaxed font-light"
        >
          {content.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <Link
            href="#work"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#e85a8a] text-[#f080a0] hover:bg-[rgba(232,90,138,0.08)] hover:border-[#f080a0] hover:text-[#e8e8f0] transition-all duration-300 text-[0.85rem] font-medium uppercase tracking-[0.08em]"
          >
            {content.ctaPrimaryText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
