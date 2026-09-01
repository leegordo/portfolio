"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Props {
  target: string;
  title: string;
}

export default function LegacyBlogPostRedirect({ target, title }: Props) {
  useEffect(() => {
    window.location.replace(`${target}${window.location.search}${window.location.hash}`);
  }, [target]);

  return (
    <div className="shell pt-[calc(var(--nav-h)+clamp(3rem,9vh,5.5rem))] pb-24 md:pb-32">
      <p className="t-label">Writing</p>
      <h1 className="t-display mt-7 max-w-[18ch]">This note moved.</h1>
      <p className="t-lede measure mt-8">
        Continue to <Link className="link" href={target}>{title}</Link>.
      </p>
    </div>
  );
}
