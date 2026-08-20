import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[80svh] flex-col justify-center py-32">
      <p className="t-label text-accent">404</p>
      <h1 className="t-display mt-7 max-w-[13ch]">
        This page doesn&rsquo;t exist
        <span className="text-accent">.</span>
      </h1>
      <p className="t-lede measure mt-8">
        The link may be out of date, or the page may have moved.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link href="/" className="btn btn-primary">
          Back to home
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link href="/#work" className="link">
          See selected work
        </Link>
      </div>
    </div>
  );
}
