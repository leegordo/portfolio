"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRandomHeroVideo } from "@/lib/useRandomHeroVideo";
import type { HeroContent } from "@/lib/content";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const randomVideo = useRandomHeroVideo();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={randomVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={content.posterImage}
          className="w-full h-full object-cover"
        >
          <source src={randomVideo} type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/50 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-surface/60" />
      </div>

      {/* Ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            {content.label}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-lg font-bold text-white mb-6"
        >
          {content.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          {content.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-amber-500/50 hover:text-white transition-all duration-300"
          >
            {content.ctaPrimaryText}
            <svg
              className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-all duration-300"
          >
            {content.ctaSecondaryText}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 rounded-full bg-amber-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
