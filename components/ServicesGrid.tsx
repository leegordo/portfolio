"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ServicesGridProps {
  services: { title: string; description: string }[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const item: Variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.35 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
      };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={container}
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={item}
          className="group relative py-10 md:py-0 md:pr-12"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          {/* The rule above each column brightens on hover — the only
              hover affordance these need. */}
          <span
            className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[700ms] ease-out group-hover:scale-x-100"
            aria-hidden
          />

          <div className="pt-0 md:pt-8">
            <h3 className="t-h3">{service.title}</h3>
            <p className="t-small mt-4 max-w-[38ch]">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
