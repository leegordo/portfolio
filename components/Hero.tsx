"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroContent } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Each headline line rises out of its own clipping mask. It reads as
 * type being set rather than as an animation, which is why it survives
 * being the first thing anyone sees.
 */
function Line({
  children,
  delay,
  reduced,
}: {
  children: React.ReactNode;
  delay: number;
  reduced: boolean | null;
}) {
  if (reduced) {
    return (
      <motion.span
        className="block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: delay * 0.5 }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "108%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const reduced = useReducedMotion();
  const lines = content.headline;

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-10 pt-[calc(var(--nav-h)+clamp(3rem,10vh,6rem))]">
      {/* A single soft light source, drifting slowly. Barely visible;
          it stops the flat black from reading as a dead surface. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] -top-[20%] h-[70vh] w-[70vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(227,179,65,0.10) 0%, rgba(227,179,65,0.035) 42%, transparent 68%)",
        }}
        animate={reduced ? undefined : { x: [0, -28, 0], y: [0, 22, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="shell relative z-[2] flex flex-1 flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="t-label text-ink-2">{content.name}</span>
          <span className="h-px w-6 bg-accent-line" aria-hidden />
          <span className="t-label">{content.label}</span>
        </motion.div>

        {/* Headline */}
        <h1 className="t-display mt-8 max-w-[15ch]">
          {lines.map((line, i) => (
            <Line key={line} delay={0.3 + i * 0.11} reduced={reduced}>
              {i === lines.length - 1 ? (
                <>
                  {line}
                  <span className="text-accent">.</span>
                </>
              ) : (
                line
              )}
            </Line>
          ))}
        </h1>

        {/* Lede */}
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: EASE }}
          className="t-lede measure mt-9"
        >
          {content.tagline}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.84, ease: EASE }}
          className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link href="/#work" className="btn btn-primary">
            {content.ctaPrimaryText}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="link">
            {content.ctaSecondaryText}
          </Link>
        </motion.div>
      </div>

      {/* Baseline: quiet credentials, and a cue that there is more below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="shell relative z-[2] mt-16"
      >
        <div className="h-px w-full bg-line" />
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 pt-5">
          <dl className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {content.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline gap-2">
                <dt className="t-label">{fact.label}</dt>
                <dd className="text-sm font-ui text-ink-2">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a href="#work" className="t-label group flex items-center gap-2 hover:text-ink-1">
            Scroll
            <motion.svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
              animate={reduced ? undefined : { y: [0, 3, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
