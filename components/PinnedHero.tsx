"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    label: "Designer",
    accent: "Designer.",
    tagline: "15 years crafting digital products for Nike, Meta, R/GA, and startups that matter.",
    cta: "See the work",
    ctaHref: "#work",
    accentColor: "#be3d2d",
    morph: "M 0 0 L 100 0 C 100 30 80 70 50 100 L 0 100 0 0 Z",
  },
  {
    label: "Leader",
    accent: "Leader.",
    tagline: "Built and scaled design teams, shipped products for millions, and taught the craft.",
    cta: "Read the approach",
    ctaHref: "#approach",
    accentColor: "#c9982a",
    morph: "M 0 0 C 50 0 50 100 100 0 V 100 H 0 Z",
  },
  {
    label: "Agent-native",
    accent: "Future.",
    tagline: "Designing the interface between humans and intelligent systems. The most interesting problem of the next decade.",
    cta: "Let's talk",
    ctaHref: "/contact",
    accentColor: "#00f5d4",
    morph: "M 0 0 C 30 50 70 50 100 0 V 100 C 70 50 30 50 0 100 0 0 Z",
  },
];

export default function PinnedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const accentRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section, scrub through 3 chapters over 300% scroll height
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const idx = Math.min(2, Math.floor(self.progress * 3.0));
          const chapter = chapters[idx] || chapters[0];
          const t = gsap.parseEase("power2.inOut")((self.progress * 3) % 1.0);

          // Swap content at chapter boundaries with subtle fade
          if (labelRef.current) {
            labelRef.current.textContent = chapter.label;
            labelRef.current.style.color = chapter.accentColor;
          }
          if (accentRef.current) {
            accentRef.current.textContent = chapter.accent;
            accentRef.current.style.color = chapter.accentColor;
          }
          if (taglineRef.current) {
            taglineRef.current.textContent = chapter.tagline;
          }
          if (ctaRef.current) {
            const a = ctaRef.current.querySelector("a");
            if (a) {
              a.href = chapter.ctaHref;
              a.textContent = chapter.cta;
              a.style.borderColor = chapter.accentColor;
              a.style.color = chapter.accentColor;
            }
          }
          if (morphRef.current) {
            morphRef.current.style.opacity = String(0.06 + 0.04 * t);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-16 pt-32 px-6 md:px-12 overflow-hidden"
    id="hero"
    >
      {/* Morphing background shape */}
    <div
        ref={morphRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: 0.06 }}
    >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="currentColor"
          style={{ color: "var(--accent)" }}
        >
          <path d="M 0 0 L 100 0 C 100 30 80 70 50 100 L 0 100 0 0 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl">
        <div className="h-6 mb-4">
          <p
            ref={labelRef}
            className="font-mono text-[0.7rem] uppercase tracking-[0.15em]"
            style={{ color: chapters[0].accentColor }}
        >
            {chapters[0].label}
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.88] tracking-[-0.04em]">
            <span className="block">Lee</span>
            <span
              ref={accentRef}
            className="block"
            style={{ color: chapters[0].accentColor }}
          >
              {chapters[0].accent}
            </span>
          </h1>
        </div>

        <div className="max-w-2xl">
          <p
            ref={taglineRef}
            className="text-lg md:text-xl leading-relaxed font-light"
          >
            {chapters[0].tagline}
          </p>

          <div ref={ctaRef} className="mt-10">
            <Link
              href={chapters[0].ctaHref}
              className="inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent-soft hover:bg-accent-muted hover:border-accent-soft hover:text-primary transition-all duration-300 text-[0.85rem] font-medium uppercase tracking-[0.08em]"
              style={{ borderColor: chapters[0].accentColor, color: chapters[0].accentColor }}
            >
              {chapters[0].cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Chapter indicator dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {chapters.map((ch, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === 0 ? ch.accentColor : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* Scroll prompt */}
      <div className="fixed bottom-8 right-8 z-50 font-mono text-[0.65rem] uppercase tracking-[0.2em] opacity-50 hidden md:block">
        Scroll
      </div>
    </section>
  );
}
