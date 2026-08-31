"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PrincipleListProps {
  items: { label: string; body: string }[];
}

/**
 * Working principles set as an editorial list rather than boxed cards.
 * Fewer containers, more type.
 */
export default function PrincipleList({ items }: PrincipleListProps) {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
  };

  const item: Variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.35 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
      };

  return (
    <motion.ul
      className="grid grid-cols-1 gap-px md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={container}
    >
      {items.map((entry) => (
        <motion.li
          key={entry.label}
          variants={item}
          className="group relative py-9 md:py-0 md:pr-12"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <span
            className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[700ms] ease-out group-hover:scale-x-100"
            aria-hidden
          />
          <div className="md:pt-8">
            <h3 className="t-h3">{entry.label}</h3>
            <p className="t-small mt-4 max-w-[38ch]">{entry.body}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
