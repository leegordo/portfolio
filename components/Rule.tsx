"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RuleProps {
  className?: string;
  /** Tint the line with the accent instead of the neutral hairline. */
  accent?: boolean;
  delay?: number;
}

/**
 * A hairline that draws itself left-to-right as it enters view.
 * Used to open sections — it reads as a page turning rather than
 * as an effect, which is the only reason it earns its place.
 */
export default function Rule({ className = "", accent = false, delay = 0 }: RuleProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`h-px w-full origin-left ${className}`}
      style={{ background: accent ? "var(--accent-line)" : "var(--line)" }}
      initial={reduced ? { opacity: 0 } : { scaleX: 0 }}
      whileInView={reduced ? { opacity: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduced ? 0.3 : 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
