"use client";

import { useState } from "react";

interface EmailObfuscatorProps {
  email: string;
}

/**
 * Keeps the address out of the initial HTML for scrapers, then behaves
 * like an ordinary mailto once a person asks for it.
 */
export default function EmailObfuscator({ email }: EmailObfuscatorProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="link"
        aria-label="Reveal email address"
      >
        Show email address
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    );
  }

  return (
    <span className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
      <a href={`mailto:${email}`} className="link">
        {email}
      </a>
      <button
        onClick={copy}
        className="t-label transition-colors duration-fast hover:text-ink-1"
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
