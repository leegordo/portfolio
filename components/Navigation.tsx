"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const EASE = [0.22, 1, 0.36, 1] as const;

const navLinks = [
  { href: "/#work", label: "Work", match: "#work" },
  { href: "/services", label: "Services", match: "/services" },
  { href: "/#approach", label: "Approach", match: "#approach" },
  { href: "/blog", label: "Writing", match: "/blog" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // The bar only earns a background once content is behind it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-mid"
        style={{
          height: "var(--nav-h)",
          backgroundColor: scrolled ? "rgba(11,11,12,0.72)" : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        }}
      >
        <nav className="shell flex h-full items-center justify-between gap-8">
          <Link href="/" aria-label="Lee Gordon home" className="flex shrink-0 items-center">
            <Image
              src={assetPath("/images/logo.png")}
              alt="Lee Gordon"
              width={72}
              height={46}
              className="h-7 w-auto opacity-80 transition-opacity duration-fast hover:opacity-100"
              priority
            />
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active = link.match.startsWith("/") && pathname.startsWith(link.match);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-1 text-sm font-ui transition-colors duration-fast"
                  style={{ color: active ? "var(--text-1)" : "var(--text-3)" }}
                >
                  <span className="transition-colors duration-fast group-hover:text-ink-1">
                    {link.label}
                  </span>
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-mid ease-out group-hover:scale-x-100"
                    style={{ transform: active ? "scaleX(1)" : undefined }}
                    aria-hidden
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="rounded-[2px] border px-4 py-2 text-sm font-ui text-ink-1 transition-colors duration-fast hover:border-accent-line hover:bg-accent-dim hover:text-accent-soft"
              style={{ borderColor: "var(--line-strong)" }}
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <motion.span
                className="block h-px w-full origin-center bg-ink-1"
                animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="block h-px w-full origin-center bg-ink-1"
                animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(11,11,12,0.97)", backdropFilter: "blur(20px)" }}
          >
            <nav className="shell flex h-full flex-col justify-center gap-1">
              {[...navLinks, { href: "/contact", label: "Get in touch", match: "/contact" }].map(
                (link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b py-5 text-2xl font-h2 tracking-h2"
                      style={{
                        borderColor: "var(--line)",
                        color: link.href === "/contact" ? "var(--accent)" : "var(--text-1)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
