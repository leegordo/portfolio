"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "@/components/ThemeProvider";
import { DARK_THEME_KEYS, themes } from "@/lib/themes";

const typeOrder = ["display", "h1", "h2", "body", "label"] as const;
const typePreviews: Record<(typeof typeOrder)[number], string> = {
  display: "Display",
  h1: "Heading One",
  h2: "Heading Two",
  body: "Body text is the voice of the interface.",
  label: "Label",
};

export default function ThemeCart() {
  const { theme, setTheme, cartOpen, closeCart } = useTheme();
  const activeTheme = themes[theme];

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close style cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-[2px]"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Style cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-[90] flex h-full w-full max-w-[340px] flex-col border-l border-[color:var(--inspector-border)] bg-[color:var(--inspector-surface)] shadow-[-8px_0_32px_rgba(0,0,0,0.25)] transition-[background-color,border-color] duration-400"
          >
            <header className="sticky top-0 z-10 border-b border-[color:var(--inspector-border)] bg-[color:var(--inspector-surface)] px-5 py-4 transition-[background-color,border-color] duration-400">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-tertiary">
                    Style Cart
                  </p>
                  <p className="mt-1 font-mono text-[0.75rem] text-secondary">
                    Select a new theme, agents baking them fresh daily.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Close"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-subtle text-tertiary transition-colors hover:border-[color:var(--border-hover)] hover:text-primary"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto overscroll-contain">
              <section className="border-b border-[color:var(--inspector-border)] px-5 py-5 transition-[border-color] duration-400">
                <h3 className="mb-4 font-mono text-[0.65rem] font-medium uppercase tracking-[0.1em] text-tertiary">
                  Theme
                </h3>
                <div className="flex flex-col gap-1">
                  {DARK_THEME_KEYS.map((key) => {
                    const item = themes[key];
                    const isActive = key === theme;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setTheme(key)}
                        className={`flex w-full items-center gap-2.5 rounded-sm border px-2.5 py-2 text-left transition-colors ${
                          isActive
                            ? "border-accent bg-bg"
                            : "border-transparent hover:bg-bg"
                        }`}
                      >
                        <span
                          className="h-3.5 w-3.5 shrink-0 rounded-[2px] border border-[color:var(--swatch-border)]"
                          style={{ backgroundColor: item.swatch }}
                        />
                        <span className="flex-1 font-mono text-[0.75rem] text-primary">{item.name}</span>
                        <span className="font-mono text-[0.65rem] text-tertiary">{item.date}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="border-b border-[color:var(--inspector-border)] px-5 py-5 transition-[border-color] duration-400">
                <h3 className="mb-4 font-mono text-[0.65rem] font-medium uppercase tracking-[0.1em] text-tertiary">
                  Colors
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {activeTheme.colors.map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center gap-2.5 rounded-sm border border-[color:var(--inspector-border)] bg-bg p-2 transition-[border-color] duration-400"
                    >
                      <span
                        className="h-[22px] w-[22px] shrink-0 rounded-[2px] border border-[color:var(--swatch-border)]"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="min-w-0">
                        <p className="truncate font-mono text-[0.7rem] font-medium text-primary">
                          {color.name}
                        </p>
                        <p className="font-mono text-[0.65rem] tracking-[0.02em] text-tertiary">
                          {color.hex}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-5 py-5">
                <h3 className="mb-4 font-mono text-[0.65rem] font-medium uppercase tracking-[0.1em] text-tertiary">
                  Typography
                </h3>
                <div className="flex flex-col gap-3.5">
                  {typeOrder.map((key) => {
                    const spec = activeTheme.typography[key];

                    return (
                      <div
                        key={key}
                        className="rounded-sm border border-[color:var(--inspector-border)] bg-bg p-3 transition-[border-color] duration-400"
                      >
                        <p className="mb-1.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.08em] text-tertiary">
                          {key}
                        </p>
                        <p
                          className="mb-2 truncate text-primary"
                          style={{
                            fontFamily: `${spec.family}, serif`,
                            fontSize: spec.size,
                            fontWeight: spec.weight,
                            lineHeight: spec.lineHeight,
                            letterSpacing: spec.letterSpacing,
                          }}
                        >
                          {typePreviews[key]}
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.65rem] text-secondary">
                          <span>
                            <span className="text-tertiary">family</span> {spec.family}
                          </span>
                          <span>
                            <span className="text-tertiary">size</span> {spec.size}
                          </span>
                          <span>
                            <span className="text-tertiary">weight</span> {spec.weight}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function ThemeCartButton() {
  const { theme, toggleCart, showCartHint, markCartHintSeen } = useTheme();
  const activeTheme = themes[theme];

  const handleClick = () => {
    if (showCartHint) {
      markCartHintSeen();
    }
    toggleCart();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Open style cart"
      className="group relative flex h-9 w-9 items-center justify-center text-tertiary transition-colors hover:text-primary"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
        />
        <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      </svg>
      {showCartHint && (
        <span
          className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-[color:var(--bg)]"
          style={{ backgroundColor: activeTheme.swatch }}
        />
      )}
    </button>
  );
}
