"use client";

import { motion, useAnimation, useInView } from "framer-motion";

const brands = [
  "Nike", "Meta", "R/GA", "Digitas LBI", "Trek",
  "Bloomberg", "Converse", "Verizon", "Telstra",
  "Fold", "Lightning Labs", "Qantas", "Nokia", "CZI", "StickerGiant",
];

export default function BrandMarquee() {
  const triple = [...brands, ...brands, ...brands];

  const row = (direction: "left" | "right", speed: number) => {
    const duration = triple.length * 1.5; // seconds for one full pass

    return (
      <div className="overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)" as any, WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)" as any }}>
        <motion.div
          className="flex gap-12 md:gap-20 whitespace-nowrap"
          animate={{
            x: direction === "left" ? [0, "-33.333%"] : ["-33.333%", 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration / speed,
              ease: "linear",
            },
          }}
          style={{ display: "flex" }}

        >
          {triple.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-mono text-[0.75rem] md:text-[0.85rem] uppercase tracking-[0.12em] shrink-0 text-tertiary/[.45] hover:text-tertiary/70 transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-y border-subtle/30 bg-bg/60 backdrop-blur-sm"
    >
  <div className="py-10 md:py-14 space-y-6">
    {row("left", 1.8)}
    {row("right", 2.2)}
  </div>
</motion.section>
  );
}
