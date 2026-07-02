"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    label: "Designer",
    accent: "Designer.",
    tagline: "15 years crafting digital products for Nike, Meta, R/GA, and startups that matter.",
  },
  {
    label: "Leader",
    accent: "Leader.",
    tagline: "Built and scaled design teams, shipped products for millions, and taught the craft.",
  },
  {
    label: "Agent-native",
    accent: "Future.",
    tagline: "Designing the interface between humans and intelligent systems. The most interesting problem of the next decade.",
  },
];

export default function PinnedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const accentRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const chEls = chapters.map((_, i) => ({
        label: section.querySelector(`[data-ch="${i}-label"]`),
        accent: section.querySelector(`[data-ch="${i}-accent"]`),
        tagline: section.querySelector(`[data-ch="${i}-tagline"]`),
      }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 0.6,
          snap: {
            snapTo: (progress: number) => {
              const snapPoints = [0, 1 / 3, 2 / 3, 1];
              return snapPoints.reduce(
                (closest, p) =>
                  Math.abs(p - progress) < Math.abs(closest - progress) ? p : closest,
                0
              );
            },
            duration: { clamp: 0.25, min: 0.15, max: 0.45 },
            delay: 0,
            ease: "power2.inOut",
          } as any,
          onUpdate: (self) => {
            const idx = Math.min(2, Math.floor(self.progress * 3.0));
            setActiveIdx(idx);
          },
        },
      });

      // Chapter 0: everything visible at start
      gsap.set(chEls[0].label, { opacity: 1, y: 0 });
      gsap.set(chEls[0].accent, { opacity: 1, y: 0 });
      gsap.set(chEls[0].tagline, { opacity: 1, y: 0 });

      for (let i = 0; i < 2; i++) {
        const next = i + 1;
        const start = (i + 1) / 3;
        const mid = (i + 1) / 3 + 0.06;
        const end = (i + 1) / 3 + 0.12;

        // Exit current
        tl.to(chEls[i].label, { opacity: 0, y: -20, duration: 0.06 }, start);
        tl.to(chEls[i].accent, { opacity: 0, y: -40, duration: 0.06 }, start);
        tl.to(chEls[i].tagline, { opacity: 0, y: -16, duration: 0.06 }, start);

        // Enter next
        tl.fromTo(chEls[next].label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.06 }, mid);
        tl.fromTo(chEls[next].accent, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.06 }, mid);
        tl.fromTo(chEls[next].tagline, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.06 }, mid);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Animated background wash */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Labels — stacked, cross-faded by GSAP */}
        <div className="h-6 mb-4 relative">
          {chapters.map((ch, i) => (
      <p
              key={i}
              data-ch={`${i}-label`}
              className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent absolute left-0 top-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
          >
              {ch.label}
          </p>
          ))}
        </div>

        {/* Headline — stacked, cross-faded */}
      <div className="overflow-hidden mb-8 relative">
          <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.88] tracking-[-0.04em]">
            <span className="block">Lee</span>
            {chapters.map((ch, i) => (
              <span
                key={i}
        data-ch={`${i}-accent`}
              className="block absolute left-0"
              style={{ opacity: i === 0 ? 1 : 0, color: "var(--accent)" }}
    >
              {ch.accent}
          </span>
            ))}
        </h1>
      </div>

        {/* Tagline — stacked, cross-faded */}
        <div className="relative max-w-2xl min-h-[5rem]">
          {chapters.map((ch, i) => (
            <p
    key={i}
              data-ch={`${i}-tagline`}
        className="text-lg md:text-xl leading-relaxed font-light text-secondary absolute left-0 top-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
          >
              {ch.tagline}
          </p>
          ))}
  </div>
    </div>

      {/* Chapter dots — live */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {chapters.map((_, i) => (
          <span
            key={i}
          className="w-2 h-2 rounded-full transition-all duration-300"
        style={{
              backgroundColor: i === activeIdx ? "var(--accent)" : "var(--text-faint)",
              opacity: i === activeIdx ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </section>
  );
}
