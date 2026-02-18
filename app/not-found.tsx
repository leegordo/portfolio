import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-8xl font-bold text-white/5 mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-white mb-3">
          Page not found
        </h1>
        <p className="text-white/50 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-all duration-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
