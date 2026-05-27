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
  readTime: string;
  cover?: string;
  keywords?: string[];
  takeaways?: string[];
  content: string;
  html: string;
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
  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString().slice(0, 10),
    author: data.author || "DSX Edge Team",
    category: data.category || "Insights",
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
