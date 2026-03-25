import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FlowSnap — AI Content Workflow Builder",
  description:
    "Visual workflow builder for AI content pipelines. Connect prompts to AI APIs to publishing tools with pre-built marketing templates.",
};

const painPoints = [
  {
    title: "Silent Failures",
    description:
      "Zapier automations that break silently at 2 AM. You don't find out until the client asks where their content went.",
  },
  {
    title: "Freelancer Rot",
    description:
      "$400 freelancer setups that rot within a month. The person who built it is long gone, and nobody knows how it works.",
  },
  {
    title: "Monday Panic",
    description:
      "Monday morning panic when the newsletter didn't send. Your team scrambles to figure out what broke — again.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Drag and drop AI models, CMS platforms, and schedulers onto your canvas.",
  },
  {
    number: "02",
    title: "Template",
    description: "Start from pre-built marketing workflows — blog-to-social, newsletters, and more.",
  },
  {
    number: "03",
    title: "Ship",
    description: "Content goes out on schedule, every time. No babysitting required.",
  },
];

const features = [
  {
    title: "AI-Native Blocks",
    description:
      "Purpose-built for AI content pipelines — not generic automation glue. Every block understands prompts, tokens, and outputs.",
  },
  {
    title: "Pre-Built Marketing Templates",
    description:
      "Blog → social, newsletter drip, content repurposing. Start from proven workflows instead of building from scratch.",
  },
  {
    title: "Visual Debugging",
    description:
      "Clear error states with one-click retry. See exactly where things broke — no more silent failures at 2 AM.",
  },
  {
    title: "Brand Voice Enforcement",
    description:
      "Built-in tone and style guardrails. Every piece of content stays on-brand, no matter which AI model generates it.",
  },
];

export default function FlowSnapPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Product
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-display-lg font-bold text-white mb-6">
            <span className="text-gradient-accent">FlowSnap</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-display text-display-sm font-bold text-white/80 mb-8">
            Visual workflow builder for AI content pipelines.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-10">
            Connect prompts to AI APIs to publishing tools — visually. FlowSnap
            lets you design, debug, and deploy content workflows with pre-built
            marketing templates. No more duct-taped automations.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-200 text-black font-medium hover:bg-white transition-all duration-300"
          >
            Get Early Access
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="line-accent" />
      </div>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            The Problem
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold text-white mb-16">
            Your AI content workflow is held together with duct tape.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl bg-surface-50 border border-white/5 p-8 h-full">
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="line-accent" />
      </div>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            How It Works
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold text-white mb-16">
            Three steps. Zero duct tape.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.1 + index * 0.1}>
              <div className="relative">
                <span className="text-white/10 font-display text-6xl font-bold leading-none mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="line-accent" />
      </div>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Features
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold text-white mb-16">
            Built for content teams, not developers.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl bg-surface-100 border border-white/5 p-8 h-full">
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="line-accent" />
      </div>

      {/* Pricing Teaser */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Pricing
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold text-white mb-6">
            Starting at{" "}
            <span className="text-gradient-accent">$50/mo</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-4">
            Get the full visual workflow builder, pre-built templates, and AI-native
            content blocks — all included.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
            Need a hand? Our{" "}
            <span className="text-white/80 font-medium">$300 white-glove setup</span>{" "}
            service gets your workflows configured, tested, and shipping content
            from day one.
          </p>
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 pt-8">
        <ScrollReveal>
          <div className="rounded-2xl bg-surface-50 border border-white/5 p-10 md:p-16 text-center">
            <h2 className="font-display text-display-sm font-bold text-white mb-4">
              Ready to stop duct-taping your AI workflows?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
              Join the early access list and be the first to build smarter content pipelines.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-200 text-black font-medium hover:bg-white transition-all duration-300"
            >
              Get Early Access
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
