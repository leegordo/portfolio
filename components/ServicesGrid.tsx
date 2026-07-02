"use client";

import { motion, type Variants } from "framer-motion";

interface ServicesGridProps {
  services: { num: string; title: string; description: string }[];
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,

    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={container}
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={item}
          className="p-8 md:p-10 border border-subtle -m-px hover:border-accent-glow hover:bg-accent-muted transition-all duration-300 group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        >
          <div className="font-mono text-[0.7rem] text-faint mb-6">{service.num}</div>
          <h3 className="text-[1.3rem] font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[0.95rem] text-secondary font-light leading-relaxed group-hover:text-secondary/90 transition-colors duration-300">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
