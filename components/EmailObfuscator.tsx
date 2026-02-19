"use client";

import { useState } from "react";

interface EmailObfuscatorProps {
  email: string;
}

export default function EmailObfuscator({ email }: EmailObfuscatorProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  // Split email to hide it in the initial render/source
  const [user, domain] = email.split("@");

  if (!isRevealed) {
    return (
      <button
        onClick={() => setIsRevealed(true)}
        className="text-white group-hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2 text-left"
      >
        Click to reveal email
        <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.791 0 8.601 3.049 9.964 6.322a1.012 1.012 0 010 .644C20.601 15.951 16.79 19 12 19c-4.79 0-8.601-3.049-9.964-6.322z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    );
  }

  return (
    <a
      href={`mailto:${user}@${domain}`}
      className="text-white group-hover:text-amber-400 transition-colors duration-300 font-medium"
    >
      {user}
      <span className="hidden">BOT-TRAP</span>
      &#64;
      {domain}
    </a>
  );
}
