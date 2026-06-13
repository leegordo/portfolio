# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (static export to `out/`)
- **Lint:** `npm run lint`

## Architecture

Next.js 14 App Router portfolio site with static export (`output: "export"`). Dark theme only. Deployed to **leegordon.design** via GitHub Pages (with Netlify config also present).

### Content System

Two content sources, both read at build time via `lib/content.ts`:

1. **Project case studies** — MDX files in `content/*.mdx` with gray-matter frontmatter. Rendered via `next-mdx-remote/rsc` in `lib/mdx.ts`. Custom MDX components (e.g., `ImageGallery`) are registered in `lib/mdx.ts`.
2. **Page/global content** — JSON files edited directly in the repo:
   - `content/pages/hero.json`, `about.json`, `contact.json`
   - `content/global/footer.json`

`lib/content.ts` exports typed getter functions (`getHeroContent`, `getAllProjects`, etc.) that are consumed directly by server components.

### Routing

- `/` — Home (Hero + ProjectGrid + About teaser)
- `/about` — About page
- `/contact` — Contact page (server component)
- `/projects/[slug]` — Dynamic project pages generated from MDX slugs via `generateStaticParams`

### Styling

- Tailwind CSS with custom design tokens in `tailwind.config.ts`
- Fonts: Inter (body, `--font-inter`) and Space Grotesk (display headings, `--font-space-grotesk`)
- Color palette: dark surfaces (`#0A0A0A` base), amber accent (`#F59E0B`)
- Custom utility classes in `styles/globals.css`: `.glass`, `.card-hover`, `.text-gradient`, `.text-gradient-accent`, `.line-accent`
- MDX body content styled via `.mdx-content` class in `globals.css`

### Key Patterns

- `lib/assetPath.ts` — Prefixes asset paths for GitHub Pages compatibility (respects `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL`)
- `lib/useRandomHeroVideo.ts` — Client-side hook that picks a random hero background video on mount from `public/video/`
- Framer Motion used for animations in components
- `@/*` path alias maps to project root
