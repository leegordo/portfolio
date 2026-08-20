# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (static export to `out/`)
- **Lint:** `npm run lint`

## Architecture

Next.js 14 App Router portfolio site with static export (`output: "export"`). Single dark theme. Deployed to **leegordon.design** via GitHub Pages (with Netlify config also present).

### Content System

Two content sources, both read at build time via `lib/content.ts`:

1. **Project case studies** — MDX files in `content/*.mdx` with gray-matter frontmatter. Rendered via `next-mdx-remote/rsc` in `lib/mdx.ts`. Custom MDX components (e.g., `ImageGallery`) are registered in `lib/mdx.ts`.
2. **Page/global content** — JSON files edited directly in the repo:
   - `content/pages/hero.json`, `about.json`, `contact.json`
   - `content/global/footer.json`
   - `content/blog/posts.json`

`lib/content.ts` exports typed getter functions (`getHeroContent`, `getAllProjects`, etc.) consumed directly by server components. Getters normalise missing fields, so JSON edits fail soft rather than crashing the build.

`hero.json` carries `headline` as an **array of strings — one entry per rendered line**, so line breaks in the hero stay a content decision rather than markup.

### Routing

- `/` — Home (Hero, clients, practice, work, approach, about teaser)
- `/about`, `/contact`, `/services`, `/blog`, `/privacy`
- `/products/doodlehaus` — product landing page
- `/projects/[slug]` — generated from MDX slugs via `generateStaticParams`

## Design system

Everything lives in `styles/globals.css`. `tailwind.config.ts` only *mirrors* those tokens as utilities — it never introduces a value of its own. When adding a value, add the token first.

### Typography — three families, no more

| Role | Family | Loaded by |
| --- | --- | --- |
| Structure, headings, body | **Geist Sans** | `geist/font/sans` (self-hosted, variable 100–900) |
| Labels, metadata, numerals | **Geist Mono** | `geist/font/mono` (self-hosted) |
| Editorial voice — pull quotes only | **Newsreader** | `next/font/google` (bundled at build time) |

No fonts are fetched from a third party at runtime. Do not add a fourth family, and do not add a `<link>` to Google Fonts.

**The weight ramp is inverse to size** (`--w-display: 200` … `--w-label: 500`). Large type gets lighter, small type gets heavier, so optical weight stays even down the page and there are no abrupt contrast jumps. Tracking tightens as size grows. Nothing on the site is bolder than 500.

Use the type primitives rather than ad-hoc Tailwind sizes: `.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-lede`, `.t-body`, `.t-small`, `.t-label`, `.t-quote`.

### Colour and contrast

Warm near-black (`--bg: #0b0b0c`) with three ink tones and a single brass accent (`--accent: #e3b341`) used as punctuation, not decoration.

**Every ink tone clears WCAG AA against `--bg` with headroom** (`--text-1` 16.6:1, `--text-2` 7.8:1, `--text-3` 5.6:1) — the margin is deliberate, because the type is light-weight. Do not introduce opacity-based text colours (`text-white/40` and friends); they are how the previous version drifted below AA.

### Layout and motion

- Layout utilities: `.shell` (max width + gutter), `.section` (vertical rhythm), `.measure` (reading width).
- Two motion primitives only: `ScrollReveal` (fade + short rise) and `Rule` (a hairline that draws in). `SectionHeading` composes them so every section opens the same way.
- One easing curve (`cubic-bezier(0.22, 1, 0.36, 1)`) and three durations, all tokenised.
- Every animated component checks `useReducedMotion()`, and `globals.css` neutralises transitions under `prefers-reduced-motion`.

### Long-form content

MDX case-study bodies are styled by `.prose` in `globals.css`. `ImageGallery` applies `.gallery`, which breaks the reading measure out to the shell width so project work is shown at a usable size.

### No-JS fallback

Framer Motion server-renders its initial state (`opacity: 0`), which would leave a JS-less page blank. `app/layout.tsx` ships a `<noscript>` style block that reveals it. It uses `dangerouslySetInnerHTML` **on purpose** — React escapes quotes inside `<style>` text, which silently turns the attribute selectors into invalid CSS.

### Key patterns

- `lib/assetPath.ts` — prefixes asset paths for GitHub Pages (respects `NEXT_PUBLIC_BASE_PATH` / `NEXT_PUBLIC_SITE_URL`).
- `components/LoopyHeroLoop.tsx` is project artwork and carries its own palette by design; it is not site chrome and should not be tokenised.
