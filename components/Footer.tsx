import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import Rule from "./Rule";
import { getContactContent, type FooterContent } from "@/lib/content";

interface FooterProps {
  content: FooterContent;
}

const sitemap = [
  { href: "/#work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer({ content }: FooterProps) {
  const contact = getContactContent();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" style={{ borderTop: "1px solid var(--line)" }}>
      {/* Closing invitation */}
      <div className="shell py-24 md:py-32">
        <ScrollReveal>
          <p className="t-label">Next</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="t-display mt-7 max-w-[16ch]">
            Tell me what you&rsquo;re working on
            <span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="t-lede measure mt-8">
            Send the short version — a product problem, a half-built prototype, a team that needs
            senior design help. I&rsquo;ll tell you plainly whether I can help.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-flex items-baseline gap-3 text-xl font-h3 tracking-h3 text-ink-1 transition-colors duration-fast hover:text-accent-soft md:text-2xl"
          >
            <span className="relative">
              {contact.email}
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent-line"
                aria-hidden
              />
            </span>
          </a>
        </ScrollReveal>
      </div>

      <Rule />

      {/* Colophon */}
      <div className="shell grid grid-cols-2 gap-x-8 gap-y-12 py-14 md:grid-cols-12">
        <div className="col-span-2 md:col-span-5">
          <p className="t-label">Lee Gordon</p>
          <p className="t-small mt-4 max-w-[34ch]">{content.bio}</p>
        </div>

        <nav className="col-span-1 md:col-span-3" aria-label="Footer">
          <p className="t-label">Index</p>
          <ul className="mt-4 space-y-2.5">
            {sitemap.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-ui text-ink-2 transition-colors duration-fast hover:text-ink-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-1 md:col-span-4">
          <p className="t-label">Elsewhere</p>
          <ul className="mt-4 space-y-2.5">
            {content.socialLinks.map((link) => {
              const external = !link.href.startsWith("/");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external && !link.href.startsWith("mailto:") ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-base font-ui text-ink-2 transition-colors duration-fast hover:text-ink-1"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div className="shell flex flex-col gap-3 py-7 md:flex-row md:items-center md:justify-between">
          <p className="t-label normal-case tracking-normal">
            © {year} {content.copyrightName}
          </p>
          <p className="t-label normal-case tracking-normal">
            Set in Geist &amp; Newsreader · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
