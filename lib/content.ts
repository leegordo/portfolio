import fs from "fs";
import path from "path";
import matter from "gray-matter";

// --- Types ---

export interface ProjectFrontmatter {
  title: string;
  client: string;
  role: string;
  skills: string[];
  year: string;
  cover: string;
  featured: boolean;
  order: number;
  comingSoon?: boolean;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface HeroContent {
  label: string;
  name: string;
  tagline: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  posterImage: string;
  videoSrc: string;
}

export interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface AboutContent {
  title: string;
  heading: string;
  headingAccent: string;
  bioParagraphs: string[];
  timeline: TimelineEntry[];
  skills: SkillGroup[];
  ctaHeading: string;
  ctaDescription: string;
}

export interface ContactContent {
  title: string;
  heading: string;
  headingAccent: string;
  description: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
  locationText: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "email";
}

export interface FooterContent {
  title: string;
  bio: string;
  copyrightName: string;
  tagline: string;
  socialLinks: SocialLink[];
}

// --- Helpers ---

const contentDirectory = path.join(process.cwd(), "content");

/** Filter out nulls from Tina's nullable arrays */
function compact<T>(arr: (T | null | undefined)[] | null | undefined): T[] {
  return (arr ?? []).filter((item): item is T => item != null);
}

function readJsonFile<T>(relativePath: string): T {
  const filePath = path.join(contentDirectory, relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${relativePath}`);
  }
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

// --- Project content (MDX) ---

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`);
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const fm = data as Partial<ProjectFrontmatter>;
  return {
    slug,
    frontmatter: {
      title: fm.title ?? slug,
      client: fm.client ?? "",
      role: fm.role ?? "",
      skills: compact(fm.skills),
      year: fm.year ?? "",
      cover: fm.cover ?? "",
      featured: fm.featured ?? false,
      order: fm.order ?? 0,
      comingSoon: fm.comingSoon,
    },
    content,
  };
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const projects = getAllProjects();
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return { prev: null, next: null };

  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}

// --- Page content (JSON) ---

export function getHeroContent(): HeroContent {
  return readJsonFile<HeroContent>("pages/hero.json");
}

export function getAboutContent(): AboutContent {
  const raw = readJsonFile<Partial<AboutContent>>("pages/about.json");
  return {
    title: raw.title ?? "About",
    heading: raw.heading ?? "",
    headingAccent: raw.headingAccent ?? "",
    bioParagraphs: compact(raw.bioParagraphs),
    timeline: compact(raw.timeline).map((t) => ({
      company: t.company ?? "",
      role: t.role ?? "",
      period: t.period ?? "",
      description: t.description ?? "",
    })),
    skills: compact(raw.skills).map((s) => ({
      category: s.category ?? "",
      items: compact(s.items),
    })),
    ctaHeading: raw.ctaHeading ?? "",
    ctaDescription: raw.ctaDescription ?? "",
  };
}

export function getContactContent(): ContactContent {
  const raw = readJsonFile<Partial<ContactContent>>("pages/contact.json");
  return {
    title: raw.title ?? "Contact",
    heading: raw.heading ?? "",
    headingAccent: raw.headingAccent ?? "",
    description: raw.description ?? "",
    email: raw.email ?? "",
    linkedinUrl: raw.linkedinUrl ?? "",
    linkedinLabel: raw.linkedinLabel ?? "",
    locationText: raw.locationText ?? "",
  };
}

export function getFooterContent(): FooterContent {
  const raw = readJsonFile<Record<string, unknown>>("global/footer.json");
  const socialLinks = Array.isArray(raw.socialLinks)
    ? raw.socialLinks
        .filter((l: unknown): l is Record<string, string> => l != null)
        .map((l) => ({
          label: l.label ?? "",
          href: l.href ?? "",
          icon: (l.icon === "linkedin" || l.icon === "email" ? l.icon : "email") as SocialLink["icon"],
        }))
    : [];

  return {
    title: typeof raw.title === "string" ? raw.title : "Footer",
    bio: typeof raw.bio === "string" ? raw.bio : "",
    copyrightName: typeof raw.copyrightName === "string" ? raw.copyrightName : "",
    tagline: typeof raw.tagline === "string" ? raw.tagline : "",
    socialLinks,
  };
}
