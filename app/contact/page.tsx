import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";
import EmailObfuscator from "@/components/EmailObfuscator";
import { getContactContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Lee Gordon about product design, AI products, design systems, or senior design support.",
};

export default function ContactPage() {
  const contact = getContactContent();

  return (
    <div className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      <section className="shell pb-24 md:pb-32">
        <ScrollReveal>
          <p className="t-label">Contact</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="t-display mt-7 max-w-[14ch]">
            {contact.heading} {contact.headingAccent}
            <span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="t-lede measure mt-10">{contact.description}</p>
        </ScrollReveal>

        {/* Channels — a plain list beats a decorated card */}
        <div className="mt-20 max-w-3xl">
          <ScrollReveal delay={0.22}>
            <dl>
              <div
                className="grid grid-cols-1 gap-x-12 gap-y-3 py-7 md:grid-cols-12"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <dt className="t-label md:col-span-3 md:pt-1">Email</dt>
                <dd className="md:col-span-9">
                  <EmailObfuscator email={contact.email} />
                </dd>
              </div>

              {contact.linkedinUrl && (
                <div
                  className="grid grid-cols-1 gap-x-12 gap-y-3 py-7 md:grid-cols-12"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <dt className="t-label md:col-span-3 md:pt-1">LinkedIn</dt>
                  <dd className="md:col-span-9">
                    <a
                      href={contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {contact.linkedinLabel}
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </dd>
                </div>
              )}

              {contact.locationText && (
                <div
                  className="grid grid-cols-1 gap-x-12 gap-y-3 py-7 md:grid-cols-12"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <dt className="t-label md:col-span-3 md:pt-1">Working</dt>
                  <dd className="t-small whitespace-pre-line md:col-span-9">
                    {contact.locationText}
                  </dd>
                </div>
              )}
            </dl>
          </ScrollReveal>

          <Rule />
        </div>
      </section>
    </div>
  );
}
