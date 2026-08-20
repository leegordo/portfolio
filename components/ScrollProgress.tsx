"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A single accent hairline. One colour, one pixel — enough to read
 * position without becoming decoration.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      data-scroll-progress
      className="fixed inset-x-0 top-0 z-[100] h-px origin-left bg-accent"
      style={{ scaleX, opacity: 0.55 }}
    />
  );
}
