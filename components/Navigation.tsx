"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeCartButton } from "@/components/ThemeCart";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-12"
      >
        <nav className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src={assetPath("/images/logo.png")}
              alt="Lee Gordon"
              width={72}
              height={46}
              className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          <div className="flex-1" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.8rem] font-medium text-tertiary hover:text-primary transition-colors duration-300 uppercase tracking-[0.1em]"
              >
                {link.label}
              </a>
            ))}
            <ThemeCartButton />
            <Link
              href="/contact"
              className="text-[0.8rem] font-medium text-accent hover:text-accent-soft transition-colors duration-300 uppercase tracking-[0.1em]"
            >
              Get in touch
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <ThemeCartButton />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-px bg-primary origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-px bg-primary"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-px bg-primary origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {[...navLinks, { href: "/contact", label: "Get in touch" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-display text-3xl transition-colors ${
                        link.label === "Get in touch"
                          ? "text-accent hover:text-accent-soft"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-display text-3xl transition-colors ${
                        link.label === "Get in touch"
                          ? "text-accent hover:text-accent-soft"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
