import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  formatBlogDate,
  getBlogPostBySlug,
  getBlogPosts,
} from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))]">
      <header className="shell pb-16 md:pb-20">
        <Link href="/blog" className="link">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to writing
        </Link>

        <time dateTime={post.date} className="t-label mt-14 block">
          {formatBlogDate(post.date)}
        </time>
        <h1 className="t-display mt-7 max-w-[18ch]">{post.title}</h1>
        <p className="t-lede measure mt-8">{post.excerpt}</p>

        {post.tags.length > 0 && (
          <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2" aria-label="Topics">
            {post.tags.map((tag) => (
              <li key={tag} className="t-label">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="shell pb-24 md:pb-32">
        <div className="pt-12 md:pt-16" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="prose">
            {post.body.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--line)" }}>
            <Link href="/blog" className="link">
              Read the other notes
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
