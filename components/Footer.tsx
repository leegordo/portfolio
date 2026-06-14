import type { FooterContent } from "@/lib/content";

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-subtle px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-[0.85rem] text-tertiary font-light">
        {content.bio}
      </p>
      <div className="flex gap-8">
        {content.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] font-medium text-tertiary hover:text-accent transition-colors duration-300 uppercase tracking-[0.1em]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
