"use client";

import { motion, useReducedMotion } from "framer-motion";

const brands = [
  "Nike", "Meta", "R/GA", "DigitasLBi", "Trek", "Bloomberg", "Converse",
  "Verizon", "Telstra", "Fold", "Lightning Labs", "Qantas", "Nokia",
  "Chan Zuckerberg Initiative", "StickerGiant",
];

const MASK =
  "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)";

/**
 * Fifteen years of client names, moving slowly enough to read.
 * One row, one direction — the previous two-row cross-scroll was noise.
 */
export default function BrandMarquee() {
  const reduced = useReducedMotion();
  const loop = [...brands, ...brands];

  return (
    <section aria-label="Selected clients" className="border-y" style={{ borderColor: "var(--line)" }}>
      <div className="shell flex flex-col gap-6 py-9 md:flex-row md:items-center md:gap-10 md:py-10">
        <p className="t-label shrink-0">Selected clients</p>

        {reduced ? (
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {brands.map((brand) => (
              <li key={brand} className="text-sm font-ui text-ink-3">
                {brand}
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="group relative min-w-0 flex-1 overflow-hidden"
            style={{ maskImage: MASK, WebkitMaskImage: MASK }}
          >
            <motion.ul
              className="flex w-max gap-x-9 [animation-play-state:running] group-hover:[animation-play-state:paused]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
            >
              {loop.map((brand, i) => (
                <li
                  key={`${brand}-${i}`}
                  aria-hidden={i >= brands.length}
                  className="shrink-0 whitespace-nowrap text-sm font-ui text-ink-3 transition-colors duration-fast hover:text-ink-1"
                >
                  {brand}
                </li>
              ))}
            </motion.ul>
          </div>
        )}
      </div>
    </section>
  );
}
