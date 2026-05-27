import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  SITE_DEFAULTS,
  STATIC_ROUTE_META,
  metaForStaticPath,
  buildJsonLdForPath,
  type RouteMeta,
} from "../shared/seo-meta";
import { getCaseStudyBySlug } from "../shared/case-studies";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

const SITE_URL = (
  process.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  "https://dsxedge.com"
).replace(/\/$/, "");

function absUrl(p: string) {
  return p.startsWith("http") ? p : `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`;
}

function esc(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function blogContentDir(): string | null {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const candidates = [
    path.resolve(__dirname, "blog-content"),
    path.resolve(__dirname, "..", "dist", "blog-content"),
    path.resolve(__dirname, "..", "client", "src", "content", "blog"),
    path.resolve(process.cwd(), "client", "src", "content", "blog"),
    path.resolve(process.cwd(), "dist", "blog-content"),
  ];
  return candidates.find((p) => {
    try { return fs.existsSync(p); } catch { return false; }
  }) || null;
}

interface FrontmatterResult {
  data: Record<string, string | string[]>;
  body: string;
}

function parseFrontmatterBlock(block: string): Record<string, string | string[]> {
  const data: Record<string, string | string[]> = {};
  let currentKey: string | null = null;
  for (const line of block.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentKey) {
      const arr = (data[currentKey] as string[] | undefined) || [];
      if (!Array.isArray(data[currentKey])) data[currentKey] = arr;
      (data[currentKey] as string[]).push(listItem[1].replace(/^["']|["']$/g, "").trim());
      continue;
    }
    const kv = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
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
  return data;
}

function readFrontmatterFile(fp: string): FrontmatterResult | null {
  try {
    const raw = fs.readFileSync(fp, "utf8");
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!m) return null;
    return { data: parseFrontmatterBlock(m[1]), body: m[2] || "" };
  } catch {
    return null;
  }
}

function readFrontmatter(slug: string): FrontmatterResult | null {
  const dir = blogContentDir();
  if (!dir) return null;
  const fp = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(fp)) return null;
  return readFrontmatterFile(fp);
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  body: string;
}

export function loadAllPosts(): BlogPostMeta[] {
  const dir = blogContentDir();
  if (!dir) return [];
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
  const posts: BlogPostMeta[] = [];
  for (const f of files) {
    const slug = f.replace(/\.md$/, "").toLowerCase();
    const fm = readFrontmatterFile(path.join(dir, f));
    if (!fm) continue;
    const d = fm.data;
    const category = (d.category as string) || "Insights";
    const tags = Array.isArray(d.tags) && d.tags.length > 0
      ? (d.tags as string[])
      : [category];
    posts.push({
      slug,
      title: (d.title as string) || slug,
      description: (d.description as string) || "",
      date: (d.date as string) || new Date().toISOString().slice(0, 10),
      author: (d.author as string) || SITE_DEFAULTS.name + " Team",
      category,
      tags,
      body: fm.body,
    });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function tagToSlugServer(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllTagsServer(): Array<{ tag: string; slug: string; count: number; posts: BlogPostMeta[] }> {
  const posts = loadAllPosts();
  const map = new Map<string, { tag: string; count: number; posts: BlogPostMeta[] }>();
  for (const p of posts) {
    for (const t of p.tags) {
      const slug = tagToSlugServer(t);
      const entry = map.get(slug);
      if (entry) {
        entry.count += 1;
        entry.posts.push(p);
      } else {
        map.set(slug, { tag: t, count: 1, posts: [p] });
      }
    }
  }
  return Array.from(map.entries()).map(([slug, v]) => ({ slug, ...v }));
}

function countWords(s: string): number {
  return (s.trim().match(/\S+/g) || []).length;
}

interface ResolvedMeta extends RouteMeta {
  canonicalPath: string;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: object[];
  status: 200 | 404;
}

export function resolveMetaForUrl(rawUrl: string): ResolvedMeta {
  const pathname = (rawUrl.split("?")[0] || "/").replace(/\/+$/, "") || "/";

  const staticMeta = metaForStaticPath(pathname);
  if (staticMeta) {
    return {
      ...staticMeta,
      canonicalPath: pathname,
      status: 200,
      jsonLd: buildJsonLdForPath(pathname, SITE_URL),
    };
  }

  const tagMatch = pathname.match(/^\/blog\/tag\/([a-zA-Z0-9-]+)$/);
  if (tagMatch) {
    const slug = tagMatch[1].toLowerCase();
    const entry = getAllTagsServer().find((t) => t.slug === slug);
    if (!entry) {
      return {
        title: "Topic Not Found",
        description: "This blog topic could not be found.",
        canonicalPath: pathname,
        noIndex: true,
        status: 404,
      };
    }
    const title = `${entry.tag} — DSX Edge Blog`;
    const description = `${entry.count} ${entry.count === 1 ? "article" : "articles"} on ${entry.tag} from the DSX Edge team — AI voice agents, 3CX, and what actually happens when intelligence sits on top of a business phone system.`;
    const collection = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absUrl(pathname),
      name: title,
      description,
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absUrl("/blog") },
        { "@type": "ListItem", position: 3, name: entry.tag, item: absUrl(pathname) },
      ],
    };
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: entry.posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absUrl(`/blog/${p.slug}`),
        name: p.title,
      })),
    };
    return {
      title,
      description,
      canonicalPath: pathname,
      type: "website",
      jsonLd: [collection, breadcrumb, itemList],
      status: 200,
    };
  }

  const caseStudyMatch = pathname.match(/^\/case-studies\/([a-zA-Z0-9-]+)$/);
  if (caseStudyMatch) {
    const rawSlug = caseStudyMatch[1];
    const slug = rawSlug.toLowerCase();
    const canonicalPath = `/case-studies/${slug}`;
    const study = getCaseStudyBySlug(slug);
    if (!study) {
      return {
        title: "Case Study Not Found",
        description: "This case study could not be found.",
        canonicalPath,
        noIndex: true,
        status: 404,
      };
    }
    const title = `${study.name} — ${study.savings} cost reduction with DSX`;
    const description = `How DSX delivered a ${study.savings} cost reduction for ${study.name}. ${study.description}`;
    const article = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      mainEntityOfPage: absUrl(canonicalPath),
      url: absUrl(canonicalPath),
      author: { "@type": "Organization", name: SITE_DEFAULTS.name },
      publisher: {
        "@type": "Organization",
        name: SITE_DEFAULTS.name,
        logo: { "@type": "ImageObject", url: absUrl(SITE_DEFAULTS.defaultImage) },
      },
      about: { "@type": "Organization", name: study.name, address: study.region },
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: absUrl("/case-studies") },
        { "@type": "ListItem", position: 3, name: study.name, item: absUrl(canonicalPath) },
      ],
    };
    return {
      title,
      description,
      canonicalPath,
      type: "article",
      keywords: [
        "DSX case study",
        study.name,
        study.industry,
        `${study.savings} cost reduction`,
      ],
      jsonLd: [article, breadcrumb],
      status: 200,
    };
  }

  const blogMatch = pathname.match(/^\/blog\/([a-zA-Z0-9-]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1].toLowerCase();
    const result = readFrontmatter(slug);
    if (result && result.data.title) {
      const fm = result.data;
      const tags = Array.isArray(fm.tags) ? (fm.tags as string[]) : [];
      const keywords = Array.isArray(fm.keywords) ? (fm.keywords as string[]) : tags;
      const wordCount = countWords(result.body);
      const ld = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: fm.title,
        description: (fm.description as string) || "",
        datePublished: fm.date,
        dateModified: fm.date,
        author: { "@type": "Organization", name: (fm.author as string) || SITE_DEFAULTS.name },
        publisher: {
          "@type": "Organization",
          name: SITE_DEFAULTS.name,
          logo: { "@type": "ImageObject", url: absUrl(SITE_DEFAULTS.defaultImage) },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(pathname) },
        image: absUrl(SITE_DEFAULTS.defaultImage),
        articleSection: (fm.category as string) || "Insights",
        keywords: keywords.join(", "),
        wordCount,
        inLanguage: "en-US",
      };
      const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
          { "@type": "ListItem", position: 2, name: "Blog", item: absUrl("/blog") },
          { "@type": "ListItem", position: 3, name: fm.title as string, item: absUrl(pathname) },
        ],
      };
      return {
        title: fm.title as string,
        description: (fm.description as string) || SITE_DEFAULTS.defaultDescription,
        canonicalPath: pathname,
        type: "article",
        publishedTime: fm.date as string,
        modifiedTime: fm.date as string,
        keywords,
        jsonLd: [ld, breadcrumb],
        status: 200,
      };
    }
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
      canonicalPath: pathname,
      noIndex: true,
      status: 404,
    };
  }

  return {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    canonicalPath: pathname,
    noIndex: true,
    status: 404,
  };
}

export function applyMetaToHtml(html: string, rawUrl: string): { html: string; status: 200 | 404 } {
  const meta = resolveMetaForUrl(rawUrl);
  const fullTitle =
    meta.canonicalPath === "/"
      ? SITE_DEFAULTS.defaultTitle
      : SITE_DEFAULTS.titleTemplate.replace("%s", meta.title);
  const description = meta.description || SITE_DEFAULTS.defaultDescription;
  const canonical = absUrl(meta.canonicalPath);
  const image = absUrl(meta.image || SITE_DEFAULTS.defaultImage);
  const robots = meta.noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(fullTitle)}</title>`);
  out = out.replace(
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${esc(description)}">`,
  );

  const tags: string[] = [];
  tags.push(`<link rel="canonical" href="${esc(canonical)}">`);
  tags.push(`<meta name="robots" content="${robots}">`);
  if (meta.keywords?.length) {
    tags.push(`<meta name="keywords" content="${esc(meta.keywords.join(", "))}">`);
  }
  tags.push(`<meta property="og:type" content="${meta.type || "website"}">`);
  tags.push(`<meta property="og:site_name" content="${esc(SITE_DEFAULTS.name)}">`);
  tags.push(`<meta property="og:title" content="${esc(fullTitle)}">`);
  tags.push(`<meta property="og:description" content="${esc(description)}">`);
  tags.push(`<meta property="og:url" content="${esc(canonical)}">`);
  tags.push(`<meta property="og:image" content="${esc(image)}">`);
  tags.push(`<meta property="og:image:type" content="image/png">`);
  tags.push(`<meta property="og:image:width" content="1200">`);
  tags.push(`<meta property="og:image:height" content="630">`);
  const webpImage = image.replace(/\.png(\?.*)?$/i, ".webp$1");
  if (webpImage !== image) {
    tags.push(`<meta property="og:image" content="${esc(webpImage)}">`);
    tags.push(`<meta property="og:image:type" content="image/webp">`);
    tags.push(`<meta property="og:image:width" content="1200">`);
    tags.push(`<meta property="og:image:height" content="630">`);
  }
  tags.push(`<meta property="og:image:alt" content="${esc(SITE_DEFAULTS.name)} — Above the Cloud. Into the Business.">`);
  tags.push(`<meta property="og:locale" content="${SITE_DEFAULTS.locale}">`);
  if (meta.publishedTime) tags.push(`<meta property="article:published_time" content="${esc(meta.publishedTime)}">`);
  if (meta.modifiedTime) tags.push(`<meta property="article:modified_time" content="${esc(meta.modifiedTime)}">`);
  tags.push(`<meta name="twitter:card" content="summary_large_image">`);
  tags.push(`<meta name="twitter:site" content="${esc(SITE_DEFAULTS.twitter)}">`);
  tags.push(`<meta name="twitter:title" content="${esc(fullTitle)}">`);
  tags.push(`<meta name="twitter:description" content="${esc(description)}">`);
  tags.push(`<meta name="twitter:image" content="${esc(image)}">`);
  if (meta.jsonLd?.length) {
    for (const ld of meta.jsonLd) {
      tags.push(`<script type="application/ld+json">${safeJsonLd(ld)}</script>`);
    }
  }

  const block = `\n    <!-- SEO (server-injected) -->\n    ${tags.join("\n    ")}\n    <!-- /SEO -->\n  `;
  out = out.replace(/<\/head>/i, `${block}</head>`);

  return { html: out, status: meta.status };
}

export function listKnownRoutes(): string[] {
  return Object.keys(STATIC_ROUTE_META);
}
