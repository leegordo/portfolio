"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";
import type { ThemeKey } from "@/lib/themes";

const sections: { id: string; theme: ThemeKey }[] = [
  { id: "hero", theme: "void-rose" },
  { id: "brands", theme: "void-rose" },
  { id: "services", theme: "cinnabar" },
  { id: "work", theme: "cinnabar" },
  { id: "approach", theme: "abyssal" },
  { id: "about", theme: "abyssal" },
];

export default function ScrollTheme() {
  const { setTheme, theme } = useTheme();
  const lastThemeRef = useRef<ThemeKey>(theme);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.id === entry.target.id
            );
            if (section && section.theme !== lastThemeRef.current) {
              lastThemeRef.current = section.theme;
              setTheme(section.theme);
            }
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -30% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setTheme]);

  return null;
}
