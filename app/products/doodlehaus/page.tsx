import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "DoodleHaus | Campaign production",
  description:
    "DoodleHaus produces campaign strategy, copy, visual assets, landing pages, and optional video from one brief.",
};

const painPoints = [
  {
    title: "Work gets split across tools",
    description:
      "Writing, design, video, and distribution often happen in separate products. Someone still has to move the work between them and keep the campaign consistent.",
  },
  {
    title: "The parts need to match",
    description:
      "The offer, message, assets, and channel plan all need to follow the same brief.",
  },
  {
    title: "AI output needs review",
    description:
      "AI can produce a lot of material quickly, including confident nonsense. DoodleHaus checks the work against clear rules and includes a human review before delivery.",
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
    title: "One brief for every channel",
    description:
      "LinkedIn posts, email sequences, ads, landing pages, and video all work from the same audience, offer, and campaign direction.",
  },
  {
    title: "Research and direction included",
    description:
      "The package includes the research summary and campaign direction behind the copy and assets.",
  },
  {
    title: "Scope set by package",
    description:
      "The tiers change the number of channels, asset volume, review depth, and media included. You do not need to choose or manage the underlying models.",
  },
  {
    title: "Human review before delivery",
    description:
      "Every campaign is checked for brand consistency, accessibility, factual problems, and basic craft before delivery.",
  },
];

const playbookLayers = [
  {
    title: "Guidance for the team",
    description:
      "The guidance people browse and edit: voice, tone, audience, offers, examples, and channel rules.",
  },
  {
    title: "Guidance for AI tools",
    description:
      "The same guidance as structured data, with prompt context, constraints, quality thresholds, and channel-specific checks.",
  },
  {
    title: "Workflow rules",
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
    <div className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      {/* Hero */}
      <section className="shell pb-24">
        <ScrollReveal>
          <p className="t-label">Product</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="t-display mt-7">
            DoodleHaus
            <span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <p className="t-h2 mt-8 max-w-[20ch]">Campaign production from one brief</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="t-lede measure mt-8">
            DoodleHaus is a managed campaign-production service. You send one brief. It returns the
            strategy, copy, visual assets, landing pages, and optional video, organised by channel
            and reviewed before delivery.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <Link href="/contact" className="btn btn-primary mt-10">
            Discuss a campaign
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* Problem */}
      <section className="shell section pt-0">
        <SectionHeading
          index="01"
          label="The problem"
          title={
            <>
              Keeping campaign work
              <br />
              consistent across channels
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={0.06 * (i + 1)}>
              <div
                className="h-full py-8 md:pr-10 md:last:pr-0"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <h3 className="t-h3">{point.title}</h3>
                <p className="t-small mt-4">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="shell section pt-0">
        <SectionHeading
          index="02"
          label="How it works"
          title={
            <>
              What happens
              <br />
              after the brief
            </>
          }
          lede="The work moves through seven steps, from the initial brief to reviewed files organised by channel."
        />

        <ol className="mt-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={Math.min(i, 6) * 0.04} as="li">
              <div
                className="group grid grid-cols-1 gap-x-12 gap-y-3 py-7 md:grid-cols-12"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="md:col-span-2">
                  <span className="t-label text-accent">{step.number}</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="t-h3">{step.title}</h3>
                  <p className="t-small mt-3 max-w-[58ch]">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <Rule />
        </ol>
      </section>

      {/* What you get */}
      <section className="shell section pt-0">
        <SectionHeading
          index="03"
          label="What you get"
          title={
            <>
              Campaign files
              <br />
              organised by channel
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.06 * (i + 1)}>
              <div className="h-full py-8" style={{ borderTop: "1px solid var(--line)" }}>
                <h3 className="t-h3">{feature.title}</h3>
                <p className="t-small mt-4">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Brand playbook */}
      <section className="shell section pt-0">
        <SectionHeading
          index="04"
          label="Brand playbook"
          title="Brand rules in a usable format"
          lede="DoodleHaus uses structured brand guidance that the team, AI tools, and review checks all read from the same source."
        />

        <div className="mt-16">
          {playbookLayers.map((layer, i) => (
            <ScrollReveal key={layer.title} delay={0.06 * (i + 1)}>
              <div
                className="grid grid-cols-1 gap-x-12 gap-y-3 py-8 md:grid-cols-12"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="md:col-span-3">
                  <span className="t-label text-accent">Layer {i + 1}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="t-h3">{layer.title}</h3>
                  <p className="t-small mt-3 max-w-[58ch]">{layer.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <Rule />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="measure mt-12">
            <p className="t-small">
              See how the StickerGiant Brand Playbook connects guidance, AI tools, and automated
              review.
            </p>
            <Link href="/contact" className="link mt-5">
              See a sample Brand Playbook
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing */}
      <section className="shell section pt-0">
        <SectionHeading
          index="05"
          label="Pricing"
          title="Pricing by campaign"
          lede="Pay per campaign or arrange a monthly retainer. There are no per-seat fees or platform subscriptions."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={0.07 * (i + 1)}>
              <div
                className="flex h-full flex-col rounded-[3px] p-7"
                style={{
                  border: `1px solid ${tier.highlighted ? "var(--accent-line)" : "var(--line)"}`,
                  background: tier.highlighted ? "var(--surface-raised)" : "var(--surface)",
                }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="t-label text-accent">{tier.name}</span>
                </div>

                <p className="mt-5 text-2xl font-h1 tracking-h1 text-ink-1">
                  {tier.price}
                  <span className="ml-2 text-sm font-ui tracking-body text-ink-3">{tier.unit}</span>
                </p>

                <p className="t-small mt-4">{tier.description}</p>

                <ul className="mt-7 flex-grow space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base font-ui text-ink-2">
                      <span className="mt-[0.72em] h-px w-2.5 shrink-0 bg-accent" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn mt-8 justify-center ${tier.highlighted ? "btn-primary" : "btn-ghost"}`}
                >
                  Discuss a campaign
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="t-small measure mt-10">
            Monthly retainers run from $1,600/mo (4 Starter campaigns) to $9,500/mo (3 Premium plus
            Brand Playbook maintenance).{" "}
            <Link href="/contact" className="text-ink-1 underline decoration-accent-line underline-offset-4 transition-colors duration-fast hover:text-accent-soft">
              Get in touch
            </Link>{" "}
            for custom packages.
          </p>
        </ScrollReveal>
      </section>

      {/* Close */}
      <section className="shell pb-24 md:pb-32">
        <Rule accent />
        <ScrollReveal delay={0.08}>
          <h2 className="t-h1 mt-10 max-w-[16ch]">Have a campaign brief?</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="t-lede measure mt-6">
            Send the short version. I&rsquo;ll tell you what DoodleHaus can produce, what it still
            needs from you, and what it will cost.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link href="/contact" className="btn btn-primary mt-10">
            Discuss a campaign
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
