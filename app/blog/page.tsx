import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Rule from "@/components/Rule";
import { getBlogPosts } from "@/lib/content";

export function generateMetadata() {
  return {
    title: "Writing",
    description: "Notes on designing AI products, product teams, and design systems.",
  };
}

export const revalidate = false;

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      <section className="shell pb-24 md:pb-32">
        <ScrollReveal>
          <p className="t-label">Writing</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="t-display mt-7 max-w-[15ch]">
            Notes on AI products and design work
            <span className="text-accent">.</span>
          </h1>
        </ScrollReveal>

        <div className="mt-20">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={0.06 + Math.min(i, 6) * 0.04}>
              <Link
                href={`/blog/posts/${post.slug}`}
                className="group grid grid-cols-1 gap-x-12 gap-y-4 py-9 md:grid-cols-12"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="md:col-span-3">
                  <span className="t-label transition-colors duration-fast group-hover:text-accent">
                    {post.date}
                  </span>
                </div>

                <div className="md:col-span-9">
                  <h2 className="t-h3">
                    <span className="relative inline">
                      {post.title}
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[700ms] ease-out group-hover:scale-x-100"
                        aria-hidden
                      />
                    </span>
                  </h2>
                  <p className="t-small mt-4 max-w-[58ch]">{post.excerpt}</p>

                  {post.tags.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <li key={tag} className="t-label">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <Rule />
        </div>
      </section>
    </div>
  );
}
