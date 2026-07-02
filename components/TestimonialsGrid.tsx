"use client";

import { motion, type Variants } from "framer-motion";

interface TestimonialsGridProps {
  testimonials: {
    metric: string;
    quote: string;
    name: string;
    title: string;
  }[];
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={container}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          variants={item}
          className="p-8 border border-subtle relative hover:border-hover transition-all duration-300 h-full flex flex-col group"
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
          <span className="font-mono text-[0.7rem] text-accent-soft mb-6 block">
            {t.metric}
          </span>
          <blockquote className="text-[1.05rem] text-secondary font-light leading-relaxed mb-8 flex-1">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold text-[0.9rem] text-primary">{t.name}</p>
            {t.title && <p className="text-[0.8rem] text-tertiary mt-1">{t.title}</p>}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
