import type { ReactNode } from "react";
import Rule from "./Rule";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  index?: string;
  label: string;
  title: ReactNode;
  lede?: string;
  className?: string;
}

/**
 * Every section opens the same way: a drawn hairline, a mono index and
 * label, then the title. The repetition is the point — it gives the page
 * a spine you can feel while scrolling.
 */
export default function SectionHeading({
  index,
  label,
  title,
  lede,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={className}>
      <Rule />
      <ScrollReveal delay={0.1}>
        <div className="mt-5 flex items-baseline gap-3">
          {index && <span className="t-label text-accent">{index}</span>}
          <span className="t-label">{label}</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.16}>
        <h2 className="t-h1 mt-7 max-w-[19ch]">{title}</h2>
      </ScrollReveal>

      {lede && (
        <ScrollReveal delay={0.22}>
          <p className="t-lede measure mt-6">{lede}</p>
        </ScrollReveal>
      )}
    </header>
  );
}
