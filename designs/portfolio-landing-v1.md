# Portfolio Landing Page — Concept v1

**File:** `portfolio-landing-v1.pen`

## Concept

A single-page portfolio landing that strips away everything non-essential. No card grids, no gradients, no Geist. Just type, space, and a dark void that lets the work speak.

## Design Decisions

| Element | Decision | Rationale |
|---------|----------|-----------|
| **Background** | `#050508` deep void | Carries over the 0xCreative dark aesthetic. Noisy dark is more interesting than pure black. |
| **Accent** | `#00F0FF` cyan | Pops against the void without being garish. Used sparingly: label, CTA, arrows. |
| **Type** | Space Grotesk + JetBrains Mono | Display font for warmth, mono for metadata/labels. Already established in your brand. |
| **Logo** | 48×48 block, white on dark | Simplified LG monogram treated as a nav element, not a hero billboard. |
| **Project list** | Horizontal rows, not cards | Cards are AI-template slop. Rows feel editorial — more like a table of contents. Each row is a surface (`#0A0A0F`) with a cyan arrow as the affordance. |
| **Nav** | Minimal text links, no hamburger | Desktop-first. Work / About / Contact. Nothing hidden. |
| **Hero** | Name at 96px, label in mono | Your name is the headline. No portrait, no illustration, no decorative noise. |
| **CTA** | "View selected work" in accent | Direct, obvious, one action. No secondary buttons. |

## Structure

```
┌────────────────────────────────────────┐
│  LG    Work   About   Contact          │  Nav (80px)
├────────────────────────────────────────┤
│  Product Designer · Heredia, CR        │
│  Lee Gordon                            │  Hero (700px)
│  Designing interfaces...               │
│  [View selected work]                  │
├────────────────────────────────────────┤
│  Selected work                         │
│  ┌──────────────────────────────────┐  │
│  │ StickerGiant Design System    →  │  │
│  │ Lee Gordon Design — Billing   →  │  Projects (900px)
│  │ 0xCreative — Agent Platform   →  │  │
│  └──────────────────────────────────┘  │
├────────────────────────────────────────┤
│  Lee Gordon            GitHub  Email │  Footer (200px)
│  Heredia, Costa Rica                 │
└────────────────────────────────────────┘
```

## Open Questions / Ideas to Explore

1. **Mobile:** Does the row layout hold at 375px? Or do rows stack into a vertical card-like arrangement? The current .pen is desktop-only.
2. **Project detail pages:** Should clicking a row expand inline (accordion) or route to a dedicated page? Inline keeps the landing page alive; dedicated gives more space for process.
3. **Motion:** The cyan arrow could animate on hover (`→` slides right). The rows could lift slightly. Nothing gratuitous.
4. **Dark/light toggle:** You mentioned dark void aesthetic — is this locked to dark mode, or should there be a toggle? Your current 0xCreative site is dark-only.
5. **Logo integration:** This concept treats the LG mark as a small nav stamp. If you want it bigger/bolder in the hero, that's a different direction worth exploring.
6. **Case study depth:** Each row currently shows title + tags. Do you want a thumbnail preview? A short description? Or keep it minimal?

## What This Is NOT

- Not a portfolio template from Framer/Webflow
- Not a dark-mode Bootstrap theme
- Not a bento grid, card grid, or masonry layout
- Not using gradients, glassmorphism, or 3D transforms

## Next Steps

Open `portfolio-landing-v1.pen` in Pencil.dev (desktop or VS Code extension) to see the actual layout. Adjust spacing, type sizes, or swap the project list for a different structure. The file is plain JSON — editable by hand if needed.
