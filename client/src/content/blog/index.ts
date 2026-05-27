import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: raw };
  const [, fm, body] = m;
  const data: Record<string, any> = {};
  let currentKey: string | null = null;
  const lines = fm.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;
    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(listItem[1].replace(/^["']|["']$/g, ""));
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (kv) {
      const [, key, valRaw] = kv;
      currentKey = key;
      const val = valRaw.trim();
      if (val === "") {
        data[key] = [];
      } else {
        data[key] = val.replace(/^["']|["']$/g, "");
      }
    }
  }
  return { data, content: body };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  cover?: string;
  keywords?: string[];
  takeaways?: string[];
  content: string;
  html: string;
}

export interface AuthorProfile {
  name: string;
  bio: string;
  role: string;
}

export const AUTHORS: Record<string, AuthorProfile> = {
  "DSX Edge Team": {
    name: "DSX Edge Team",
    role: "DSX Edge — Implementation & Engineering",
    bio: "Field notes from the DSX Edge team — engineers and implementers who deploy 3CX systems and AI voice agents into real businesses every week. We write what we actually see in customer rollouts, not theory.",
  },
};

export function getAuthor(name: string): AuthorProfile {
  return AUTHORS[name] || AUTHORS["DSX Edge Team"];
}

const modules = import.meta.glob("./*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

marked.setOptions({ gfm: true, breaks: false });

function parseFile(path: string, raw: string): BlogPost {
  const slug = path
    .replace(/^\.\//, "")
    .replace(/\.md$/, "")
    .toLowerCase();
  const { data, content } = parseFrontmatter(raw);
  const rawHtml = marked.parse(content) as string;
  const html = DOMPurify.sanitize(rawHtml, {
    ADD_ATTR: ["target", "rel"],
  });
  const category = data.category || "Insights";
  let tags: string[] = Array.isArray(data.tags)
    ? data.tags.filter(Boolean)
    : [];
  if (tags.length === 0) tags = [category];
  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString().slice(0, 10),
    author: data.author || "DSX Edge Team",
    category,
    tags,
    readTime: data.readTime || `${Math.max(2, Math.round(content.split(/\s+/).length / 220))} min read`,
    cover: data.cover,
    keywords: data.keywords,
    takeaways: data.takeaways,
    content,
    html,
  };
}

const allPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => parseFile(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getAllPosts = (): BlogPost[] => allPosts;

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  allPosts.find((p) => p.slug === slug);

export const getCategories = (): string[] =>
  Array.from(new Set(allPosts.map((p) => p.category)));

export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface TagSummary {
  tag: string;
  slug: string;
  count: number;
}

export function getAllTags(): TagSummary[] {
  const map = new Map<string, { tag: string; count: number }>();
  for (const p of allPosts) {
    for (const t of p.tags) {
      const slug = tagToSlug(t);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { tag: t, count: 1 });
    }
  }
  return Array.from(map.entries())
    .map(([slug, { tag, count }]) => ({ slug, tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostsByTagSlug(slug: string): BlogPost[] {
  return allPosts.filter((p) => p.tags.some((t) => tagToSlug(t) === slug));
}

export function getTagBySlug(slug: string): TagSummary | undefined {
  return getAllTags().find((t) => t.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const tagSet = new Set(post.tags.map(tagToSlug));
  const scored = allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const overlap = p.tags.reduce(
        (n, t) => (tagSet.has(tagToSlug(t)) ? n + 1 : n),
        0,
      );
      return { p, overlap };
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      return a.p.date < b.p.date ? 1 : -1;
    });
  return scored.slice(0, limit).map((s) => s.p);
}
