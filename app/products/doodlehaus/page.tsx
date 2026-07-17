import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "DoodleHaus — Campaign production from one brief",
  description:
    "DoodleHaus turns one brief into a reviewed campaign package with strategy, copy, visual assets, landing pages, and optional video.",
};

const painPoints = [
  {
    title: "Too many disconnected tools",
    description:
      "Writing, design, video, and distribution often happen in separate products. Someone still has to move the work between them and keep the campaign consistent.",
  },
  {
    title: "A campaign has to hold together",
    description:
      "A good email does not rescue an unclear offer or unrelated visuals. The strategy, message, assets, and channel plan need to come from the same brief.",
  },
  {
    title: "Review still matters",
    description:
      "AI can produce a lot of material quickly. It can also produce confident nonsense. The useful workflow includes clear rules, checks, and a person who can reject weak work.",
  },
];

const steps = [
  { number: "01", title: "Brief", description: "Define the audience, offer, goal, channels, constraints, and tone in one structured brief." },
  { number: "02", title: "Research", description: "Review the market, competitors, and available audience evidence. Turn the findings into a campaign direction." },
  { number: "03", title: "Copy", description: "Draft the channel copy from that direction, including email, social, ads, and landing-page content." },
  { number: "04", title: "Creative", description: "Produce the visual assets against the same brief and brand rules." },
  { number: "05", title: "Video", description: "Add short product demos, social clips, or ads when the campaign calls for them." },
  { number: "06", title: "Review", description: "Check the package for brand fit, accessibility, factual problems, and weak or inconsistent work." },
  { number: "07", title: "Deliver", description: "Organize the approved files by channel, with the strategy and copy attached." },
];

const features = [
  {
    title: "One brief across every channel",
    description:
      "LinkedIn posts, email sequences, ads, landing pages, and video all work from the same audience, offer, and campaign direction.",
  },
  {
    title: "The reasoning comes with the work",
    description:
      "The package includes the research summary and campaign direction, so you can see why the message and assets were made that way.",
  },
  {
    title: "Pay for the scope you need",
    description:
      "The tiers change the number of channels, asset volume, review depth, and media included. You do not need to choose or manage the underlying models.",
  },
  {
    title: "A person reviews the result",
    description:
      "Every campaign is checked for brand consistency, accessibility, factual problems, and basic craft before delivery.",
  },
];

const playbookLayers = [
  {
    title: "Human Layer",
    description:
      "The guidance people browse and edit: voice, tone, audience, offers, examples, and channel rules.",
  },
  {
    title: "Agent Layer",
    description:
      "The same guidance as structured data, with prompt context, constraints, quality thresholds, and channel-specific checks.",
  },
  {
    title: "Automation Layer",
    description:
      "The triggers and integration rules that connect the playbook to your CMS, email platform, ad accounts, and review queue.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    unit: "per campaign",
    description: "Single-channel campaign with core copy and creative assets.",
    features: [
      "1 channel (email OR social OR ads)",
      "Strategy brief",
      "Copy package",
      "3–5 creative assets",
      "Brand voice matching",
      "1 review pass",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$1,500",
    unit: "per campaign",
    description: "Multi-channel campaign with full copy, creative, and strategy.",
    features: [
      "3–4 channels",
      "Full strategy document",
      "Complete copy package",
      "10–15 creative assets",
      "Brand Playbook update",
      "2 review passes",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$3,500",
    unit: "per campaign",
    description: "Campaign with video, landing pages, expanded research, and three review passes.",
    features: [
      "All channels + video",
      "Full strategy + market research",
      "Complete copy + creative",
      "20+ creative assets",
      "Video generation (Veo)",
      "Brand Playbook build or update",
      "3 review passes",
      "Priority delivery",
    ],
    highlighted: false,
  },
];

export default function DoodleHausPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              Product
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-display-lg font-bold text-gradient-accent mb-6">
              DoodleHaus
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-display text-display-sm text-white/80 mb-6">
              One brief in. A reviewed campaign package out.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              DoodleHaus is a managed campaign-production service. You send one brief. It returns the
              strategy, copy, visual assets, landing pages, and optional video, organized by channel
              and reviewed before delivery.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neutral-200 text-black font-medium hover:bg-white transition-all duration-300"
            >
              Discuss a campaign
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="line-accent" />

      {/* Problem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              The Problem
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-white mb-16">
              Generating assets is easy.{" "}
              <span className="text-white/40">Making them agree is the work.</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={0.1 * (i + 1)}>
                <div className="rounded-2xl bg-surface-50 border border-white/5 p-8 h-full">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="line-accent" />

      {/* How It Works — Vertical Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              How It Works
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-white mb-16">
              One brief, seven visible steps.{" "}
              <span className="text-white/40">You can see what happens between them.</span>
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={0.05 * (i + 1)}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-surface-50 border border-white/10 flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-neutral-200">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-3">
                      <h3 className="font-display text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="line-accent" />

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              What You Get
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-white mb-16">
              A campaign package you can inspect,
              <br />
              <span className="text-white/40">edit, and put to work.</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={0.1 * (i + 1)}>
                <div className="rounded-2xl bg-surface-50 border border-white/5 p-8 h-full">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Playbook — Full-width section break */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6">
              Brand Playbook
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-white mb-6">
              Brand rules the system can read.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/60 max-w-3xl leading-relaxed mb-16">
              DoodleHaus uses a Brand Playbook: structured guidance for people, agents, and the
              automated checks that review each campaign.
            </p>
          </ScrollReveal>
          {/* Stacked horizontal cards */}
          <div className="space-y-4">
            {playbookLayers.map((layer, i) => (
              <ScrollReveal key={layer.title} delay={0.1 * (i + 1)}>
                <div className="rounded-2xl bg-surface-50 border border-white/5 p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0">
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-xs font-medium tracking-wider uppercase">
                      Layer {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {layer.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">{layer.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Case study callout */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 rounded-2xl bg-surface-50 border border-white/5 p-8 text-center">
              <p className="text-white/60 mb-4">
                See how the StickerGiant Brand Playbook connects guidance, agent tools, and automated review.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-neutral-200 hover:text-white transition-colors duration-300"
              >
                See a sample Brand Playbook
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="line-accent" />

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-neutral-200 text-sm font-medium tracking-[0.3em] uppercase mb-6 text-center">
              Pricing
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-white mb-4 text-center">
              Campaign pricing, not SaaS seats.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
              Pay per campaign or lock in a monthly retainer. No per-seat fees. No platform subscriptions.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={0.1 * (i + 1)}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "bg-surface-50 border-2 border-neutral-200/20"
                      : "bg-surface-50 border border-white/5"
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="font-display text-display-sm font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-white/40 text-sm ml-2">{tier.unit}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                        <svg
                          className="w-4 h-4 text-neutral-200 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-neutral-200 text-black hover:bg-white"
                        : "bg-white/5 border border-white/10 text-white/80 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    Discuss a campaign
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Retainer footnote */}
          <ScrollReveal delay={0.4}>
            <p className="text-center text-white/40 text-sm mt-8">
              Monthly retainers from $1,600/mo (4 Starter campaigns) to $9,500/mo (3 Premium + Brand Playbook maintenance).{" "}
              <Link href="/contact" className="text-neutral-200 hover:text-white transition-colors underline">
                Contact me
              </Link>{" "}
              for custom packages.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="line-accent" />

      {/* Bottom CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl bg-surface-50 border border-white/5 p-12 text-center">
              <h2 className="font-display text-display-sm font-bold text-white mb-4">
                Have a campaign brief?
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Send the short version. I&apos;ll tell you what DoodleHaus can produce, what it still needs from you, and what it will cost.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neutral-200 text-black font-medium hover:bg-white transition-all duration-300"
              >
                Discuss a campaign
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
