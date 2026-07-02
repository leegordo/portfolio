import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getBlogPosts } from "@/lib/content";

export function generateMetadata() {
  return {
    title: "Blog",
    description: "Writing on AI design, agent orchestration, and creative automation.",
  };
}

export const revalidate = false;

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="pt-32 md:pt-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-[0.7rem] text-accent-soft uppercase tracking-[0.2em] mb-4">
            Writing
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-display-md font-bold text-primary mb-16">
            On AI design,
            <br />
            <span className="text-accent">agent systems</span>, and craft
          </h1>
        </ScrollReveal>

        <div className="space-y-6 border-t border-subtle pt-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={0.1 + i * 0.05}>
              <Link href={`/blog/posts/${post.slug}`} className="block group">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-subtle">
                  <div className="font-mono text-[0.7rem] text-tertiary uppercase tracking-[0.1em] md:w-24 shrink-0 pt-1">
                    {post.date}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300 mb-3 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-[0.95rem] text-secondary font-light leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[0.65rem] uppercase tracking-[0.06em] px-2 py-1 border border-subtle text-tertiary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 pt-2 md:pt-1">
                    <svg
                      className="w-5 h-5 text-tertiary group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
