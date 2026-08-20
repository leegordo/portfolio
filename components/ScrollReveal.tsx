"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance travelled, in px. Kept small on purpose — motion should
   *  settle attention, not announce itself. */
  distance?: number;
  direction?: "up" | "left" | "right";
  duration?: number;
  as?: "div" | "span" | "li" | "section";
}

/**
 * The single entrance primitive: a short rise plus a fade.
 * Everything on the site uses this so the page has one motion accent
 * rather than a dozen competing ones.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  distance = 14,
  direction = "up",
  duration = 0.75,
  as = "div",
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: distance, x: 0 }
      : direction === "left"
        ? { x: distance, y: 0 }
        : { x: -distance, y: 0 };

  const variants: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: EASE },
        },
      };

  const MotionTag = motion[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
