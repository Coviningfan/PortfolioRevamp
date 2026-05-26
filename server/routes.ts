import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const SITE_URL = process.env.VITE_SITE_URL || process.env.SITE_URL || "https://dsxedge.com";

const STATIC_ROUTES: Array<{ loc: string; changefreq: string; priority: string }> = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/data-center", changefreq: "monthly", priority: "0.7" },
  { loc: "/contact", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", changefreq: "weekly", priority: "0.9" },
];

function getBlogSlugs(): Array<{ slug: string; date: string }> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const candidates = [
    path.resolve(__dirname, "blog-content"),
    path.resolve(__dirname, "..", "dist", "blog-content"),
    path.resolve(__dirname, "..", "client", "src", "content", "blog"),
    path.resolve(process.cwd(), "client", "src", "content", "blog"),
    path.resolve(process.cwd(), "dist", "blog-content"),
  ];
  const dir = candidates.find((p) => {
    try { return fs.existsSync(p); } catch { return false; }
  });
  if (!dir) {
    console.warn("[sitemap] no blog content directory found; checked:", candidates);
    return [];
  }
  try {
    const slugs = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const raw = fs.readFileSync(path.join(dir, f), "utf8");
        const dateMatch = raw.match(/date:\s*"?([0-9-]+)"?/);
        return {
          slug: f.replace(/\.md$/, "").toLowerCase(),
          date: dateMatch?.[1] || new Date().toISOString().slice(0, 10),
        };
      });
    if (slugs.length === 0) {
      console.warn(`[sitemap] blog directory ${dir} contained no markdown posts`);
    }
    return slugs;
  } catch (err) {
    console.error("[sitemap] failed to read blog directory", dir, err);
    return [];
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(
      [
        "User-agent: *",
        "Allow: /",
        "Disallow: /api/",
        "",
        `Sitemap: ${SITE_URL}/sitemap.xml`,
      ].join("\n"),
    );
  });

  app.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().slice(0, 10);
    const posts = getBlogSlugs();
    const urls = [
      ...STATIC_ROUTES.map((r) => ({
        loc: `${SITE_URL}${r.loc}`,
        lastmod: today,
        changefreq: r.changefreq,
        priority: r.priority,
      })),
      ...posts.map((p) => ({
        loc: `${SITE_URL}/blog/${p.slug}`,
        lastmod: p.date,
        changefreq: "monthly",
        priority: "0.7",
      })),
    ];

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      urls
        .map(
          (u) =>
            `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
        )
        .join("\n") +
      `\n</urlset>\n`;

    res.type("application/xml").send(xml);
  });

  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
