"use client";

import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { getContactContent } from "@/lib/content";
import EmailObfuscator from "@/components/EmailObfuscator";

export default function ContactPage() {
  const contact = getContactContent();

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <ScrollReveal>
              <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-6">
                Contact
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-display-md font-bold text-white mb-6">
                {contact.heading}{" "}
                <span className="text-gradient-accent">{contact.headingAccent}</span>.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                {contact.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">Email</p>
                    <EmailObfuscator email={contact.email} />
                  </div>
                </div>

                {/* LinkedIn */}
                {contact.linkedinUrl && (
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-white/5 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">LinkedIn</p>
                      <p className="text-white group-hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2">
                        {contact.linkedinLabel}
                        <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — decorative */}
          <ScrollReveal delay={0.4} direction="right">
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-amber-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                        <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-[60px]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        {contact.locationText && (
          <ScrollReveal delay={0.5}>
            <div className="mt-24 pt-12 border-t border-white/5 text-center">
              <p className="text-white/30 text-sm max-w-md mx-auto whitespace-pre-line">
                {contact.locationText}
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
