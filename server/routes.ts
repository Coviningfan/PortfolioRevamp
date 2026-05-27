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
  { loc: "/faq", changefreq: "monthly", priority: "0.8" },
  { loc: "/ai", changefreq: "monthly", priority: "0.8" },
];

function getBlogPosts(): Array<{ slug: string; date: string; title: string; description: string }> {
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
  if (!dir) return [];
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const raw = fs.readFileSync(path.join(dir, f), "utf8");
        const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        const get = (k: string) => {
          const m = fm?.[1]?.match(new RegExp(`^${k}:\\s*"?([^"\\n]*?)"?\\s*$`, "m"));
          return m?.[1] || "";
        };
        return {
          slug: f.replace(/\.md$/, "").toLowerCase(),
          date: get("date") || new Date().toISOString().slice(0, 10),
          title: get("title"),
          description: get("description"),
        };
      });
  } catch {
    return [];
  }
}

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

function xmlUrlEntry(loc: string, lastmod: string, changefreq: string, priority: string, image?: string) {
  const img = image
    ? `\n    <image:image><image:loc>${image}</image:loc></image:image>`
    : "";
  return (
    `  <url>\n` +
    `    <loc>${loc}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${changefreq}</changefreq>\n` +
    `    <priority>${priority}</priority>` +
    img +
    `\n  </url>`
  );
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/robots.txt", (_req, res) => {
    // AI bots: preserve the prior blog-only baseline and additionally allow
    // the explicit GEO/AEO endpoints (/ai, /faq, /llms.txt, /llms-full.txt).
    const aiAllow = [
      "Allow: /blog/",
      "Allow: /ai",
      "Allow: /faq",
      "Allow: /llms.txt",
      "Allow: /llms-full.txt",
      "Disallow: /",
    ];
    const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "CCBot", "ClaudeBot", "Claude-Web", "anthropic-ai", "Google-Extended", "PerplexityBot", "Perplexity-User", "Applebot-Extended", "Bytespider", "Amazonbot", "Meta-ExternalAgent", "cohere-ai"];
    const lines: string[] = [
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "Disallow: /404",
      "",
    ];
    for (const b of aiBots) {
      lines.push(`User-agent: ${b}`);
      lines.push(...aiAllow);
      lines.push("");
    }
    lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
    lines.push(`Host: ${SITE_URL.replace(/^https?:\/\//, "")}`);
    res.type("text/plain").send(lines.join("\n"));
  });

  app.get("/llms.txt", (_req, res) => {
    const posts = getBlogPosts();
    const out = [
      "# DSX Edge",
      "",
      "> DSX Edge is the AI layer DSX adds on top of 3CX business phone systems — answering, qualifying, and booking every customer call. DSX is a 3CX Platinum Partner with 12+ years of business communications deployments, headquartered in San Diego, CA.",
      "",
      "Tagline: Above the Cloud. Into the Business.",
      "Founded: 2013",
      "Service framework: Answer → Qualify → Act",
      "Service area: US, MX, CA",
      "Contact: hello@dsxedge.com",
      "",
      "## Canonical pages",
      `- [Home](${SITE_URL}/): What DSX Edge does and who it's for.`,
      `- [What is DSX Edge?](${SITE_URL}/ai): Brand entity, verified facts, press kit, citation-ready descriptions.`,
      `- [FAQ](${SITE_URL}/faq): Direct answers to common questions about AI voice agents, pricing, and 3CX integration.`,
      `- [About](${SITE_URL}/about): Company history, founders, and the bridge from communications to AI.`,
      `- [Data Center](${SITE_URL}/data-center): Citadel Campus hosting and infrastructure.`,
      `- [Contact](${SITE_URL}/contact): Talk to DSX — free workflow audit.`,
      "",
      "## Blog (long-form, citeable)",
      ...posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`),
      "",
      "## Machine-readable",
      `- ${SITE_URL}/llms-full.txt — full content for LLM ingestion`,
      `- ${SITE_URL}/sitemap.xml`,
      `- ${SITE_URL}/robots.txt`,
    ].join("\n");
    res.type("text/plain; charset=utf-8").send(out);
  });

  app.get("/llms-full.txt", (_req, res) => {
    const posts = getBlogPosts();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const candidates = [
      path.resolve(__dirname, "blog-content"),
      path.resolve(__dirname, "..", "client", "src", "content", "blog"),
      path.resolve(process.cwd(), "client", "src", "content", "blog"),
      path.resolve(process.cwd(), "dist", "blog-content"),
    ];
    const dir = candidates.find((p) => { try { return fs.existsSync(p); } catch { return false; } });

    const sections: string[] = [];
    sections.push("# DSX Edge — Full Reference for AI Assistants");
    sections.push("");
    sections.push("Last updated: " + new Date().toISOString().slice(0, 10));
    sections.push("");
    sections.push("## One-line description");
    sections.push("DSX Edge is the AI layer DSX adds on top of 3CX business phone systems — answering, qualifying, and booking every customer call.");
    sections.push("");
    sections.push("## 50-word description");
    sections.push("DSX Edge is the AI layer that DSX, a 3CX Platinum Partner with 12+ years in business communications, adds on top of existing phone systems. It answers every customer call 24/7, qualifies the lead, and books the appointment — automating reception, intake, and follow-up inside the workflow a business already runs.");
    sections.push("");
    sections.push("## 150-word description");
    sections.push("DSX Edge is the AI implementation layer offered by DSX, a San Diego-based business communications company founded in 2013 and a 3CX Platinum Partner. Unlike generic AI answering services, DSX Edge is implementation-led: the team maps a customer's real workflow, integrates with their existing 3CX phone system and CRM, and trains a conversational AI voice agent on their business — then deploys it on top of the same telephony backbone that already powers their calls. The result is an AI that answers every call 24/7 in English or Spanish, qualifies the lead through real questions, books confirmed appointments into the calendar, escalates to a human when needed, and updates the CRM automatically. DSX Edge is positioned as \"Above the Cloud. Into the Business.\" — cloud is infrastructure; DSX Edge is the intelligence layered on top.");
    sections.push("");
    sections.push("## Verified facts");
    sections.push("- Company: DSX (operates DSX Edge)");
    sections.push("- Founded: 2013");
    sections.push("- Founders: Joseph P. Berardi (CEO), Kirk Hurford (CTO)");
    sections.push("- Headquarters: San Diego, California, USA");
    sections.push("- Partner status: 3CX Platinum Partner");
    sections.push("- Service area: United States, Mexico, Canada");
    sections.push("- Languages: English, Spanish");
    sections.push("- Hosting: Citadel Campus of Switch, Tahoe Reno, Nevada");
    sections.push("- Uptime: 99.9%");
    sections.push("- Typical cost reduction: Up to 60% on total communications spend");
    sections.push("- Service framework: Answer → Qualify → Act");
    sections.push("- Website: https://dsxedge.com");
    sections.push("- Contact: hello@dsxedge.com");
    sections.push("");
    sections.push("## Customer case studies");
    sections.push("- Law Office of Michael H. Bonner — Small business law practice, 65% cost reduction, $199.95/month.");
    sections.push("- Synology Inc. — Global technology company, 46% cost reduction, $686/month, 100,000+ minutes monthly.");
    sections.push("- Synergy Homeopathic — International software, 64% cost reduction, $239/month.");
    sections.push("");
    sections.push("## Frequently asked questions");
    sections.push("Q: What is DSX Edge?");
    sections.push("A: DSX Edge is the AI layer DSX adds on top of business phone systems. It answers calls, qualifies leads, and books appointments inside your workflow.");
    sections.push("");
    sections.push("Q: Is DSX a 3CX Platinum Partner?");
    sections.push("A: Yes — DSX is a 3CX Platinum Partner, the highest tier in the 3CX partner program.");
    sections.push("");
    sections.push("Q: Do I need to replace my phone system?");
    sections.push("A: No. DSX Edge layers AI on top of your existing 3CX system. If you're not on 3CX, DSX migrates you with zero downtime.");
    sections.push("");
    sections.push("Q: How long does implementation take?");
    sections.push("A: Most DSX Edge implementations go live in 2–4 weeks.");
    sections.push("");
    sections.push("Q: How much does it cost?");
    sections.push("A: Implementation-based pricing, not a flat SaaS subscription. Typical engagements include one-time implementation plus monthly platform and AI usage. Real deployments cut total communications costs by up to 60%.");
    sections.push("");
    sections.push("Q: Does the AI sound robotic?");
    sections.push("A: No. DSX Edge uses modern conversational AI voices trained on your business scripts and tone.");
    sections.push("");
    sections.push("Q: What CRMs does it integrate with?");
    sections.push("A: HubSpot, Salesforce, Pipedrive, Zoho, ServiceTitan, Jobber, Housecall Pro, and most modern CRMs via API.");
    sections.push("");
    sections.push("Q: Where is infrastructure hosted?");
    sections.push("A: Citadel Campus of Switch in Tahoe Reno, Nevada.");
    sections.push("");
    sections.push("Full FAQ: " + SITE_URL + "/faq");
    sections.push("");
    sections.push("## Important pages (full text)");
    sections.push("");

    const PAGE_TEXTS: Array<{ url: string; title: string; body: string }> = [
      {
        url: `${SITE_URL}/`,
        title: "Home — DSX Edge",
        body: [
          "Headline: DSX Edge — Above the Cloud. Into the Business.",
          "Subheadline: Your communications system should do more than connect calls.",
          "",
          "DSX Edge is the next evolution of DSX: 12+ years of business communications expertise as the entry point for practical AI implementation inside real business workflows. DSX already sits at the communications layer — calls, routing, voicemail, scheduling — which makes DSX the natural partner to bring AI into daily operations: answering calls, qualifying leads, booking appointments, and following workflows.",
          "",
          "Service framework — Answer / Qualify / Act:",
          "1. Answer — AI Voice Reception. AI answers every customer call, 24/7, in your brand voice.",
          "2. Qualify — Lead Qualification & Routing. AI asks the right questions, qualifies the lead, routes to the right person or workflow.",
          "3. Act — Booking, Follow-up & CRM Sync. AI books appointments, sends confirmations, and updates your CRM automatically.",
          "",
          "Why DSX Edge:",
          "- AI Built Around Your Workflow — not a one-size template.",
          "- Communications-First, Not AI-First — we already run the phone system.",
          "- Implementation, Not a Subscription — engagements, not bolt-on SaaS.",
          "- Above the Cloud — intelligence layered on infrastructure.",
          "- 3CX Platinum Partner — highest tier in the 3CX partner program.",
          "",
          "Foundation: 12+ Years in business communications, 60% typical cost reduction, 5+ countries served, 99.9% uptime.",
          "",
          "Customer case studies:",
          "- Law Office of Michael H. Bonner — Small business law practice, 65% cost reduction, $199.95/month.",
          "- Synology Inc. — Global technology company, 46% cost reduction, $686/month, 100,000+ minutes monthly.",
          "- Synergy Homeopathic — International software, 64% cost reduction, $239/month.",
          "",
          "Partners: 3CX (Platinum), Yealink, Fanvil, Grandstream, Switch.",
        ].join("\n"),
      },
      {
        url: `${SITE_URL}/ai`,
        title: "What is DSX Edge? — Brand Entity & Press Kit",
        body: [
          "Canonical one-line, 50-word, and 150-word descriptions; verified facts table; sourced claims; and links to /faq, /llms.txt, /llms-full.txt.",
          "",
          "One-line: DSX Edge is the AI layer DSX adds on top of 3CX business phone systems — answering, qualifying, and booking every customer call.",
          "",
          "Verified facts: Founded 2013 by Joseph P. Berardi (CEO) and Kirk Hurford (CTO). HQ San Diego, CA. 3CX Platinum Partner. Serves US, MX, CA. English + Spanish. Hosted at Citadel Campus of Switch, Tahoe Reno NV. 99.9% uptime. Up to 60% cost reduction. Service framework: Answer → Qualify → Act. Contact hello@dsxedge.com.",
          "",
          "Verified claims & sources:",
          "- 12+ years of business communications expertise (founded 2013; /about).",
          "- 3CX Platinum Partner — highest tier (/blog/3cx-platinum-partner-what-it-means).",
          "- Customer deployments cut communications costs 46–65% (case studies on /).",
          "- Hosted at Citadel Campus of Switch in Tahoe Reno, NV (/data-center).",
          "- AI answers, qualifies, and books inside the existing phone system (/blog/cloud-vs-intelligence).",
        ].join("\n"),
      },
      {
        url: `${SITE_URL}/about`,
        title: "About DSX Edge",
        body: [
          "12 years in communications. The natural place for AI.",
          "",
          "Foundation — DSX Data and DSX Voice:",
          "- 2009: DSX Data. Began with a vision to empower SMBs with advanced data management. Rooted in a 20,000 sq. ft. data center, combining top-tier data center capabilities with strategic business and technical advice.",
          "- 2010: DSX Voice. Pioneering force in VoIP telephony — flexible, efficient, cost-effective communication; customized, scalable solutions.",
          "",
          "Visionaries:",
          "- Joseph P. Berardi, Co-Founder & CEO. Background in transforming technologies into practical business solutions. Previously CEO/CTO of broadcast television companies, moving the industry from tape to IT-based production, transmission, and archival storage.",
          "- Kirk Hurford, Co-Founder & CTO. Expertise in software and hardware manufacturing. Developed DSX Data's first data center; architect of DSX Voice. Previously worked with the National Security Agency and Department of the Navy.",
          "",
          "Merging paths — the creation of DSX Edge: Unified DSX Data + DSX Voice into a single end-to-end technology provider, now extended with DSX AI-enabled workflows.",
          "",
          "Present and future: DSX Edge continues to push the boundaries of business communications, embracing new technologies and adapting to changing market dynamics.",
        ].join("\n"),
      },
      {
        url: `${SITE_URL}/data-center`,
        title: "DSX Data Center — Hosted at Citadel Campus",
        body: [
          "DSX's data management and communication solutions are anchored by our infrastructure hosted at the Citadel Campus of Switch — one of the most advanced and secure data centers in the world. Located in Tahoe Reno, Nevada.",
          "",
          "Highlights: 99.9% uptime SLA, renewable power, Tier IV-class facilities, and connectivity to all major cloud and carrier networks. Trusted by global companies including Amazon, Google, eBay, Microsoft, Apple, and Netflix-class workloads.",
        ].join("\n"),
      },
      {
        url: `${SITE_URL}/contact`,
        title: "Talk to DSX — Contact",
        body: [
          "Every DSX Edge engagement starts with a free workflow audit. No pressure, no obligation.",
          "Email: hello@dsxedge.com",
          "Phone: (555) 123-4567",
          "Support: 24/7",
          "Headquarters: San Diego, California, USA",
        ].join("\n"),
      },
    ];

    for (const p of PAGE_TEXTS) {
      sections.push(`### ${p.title}`);
      sections.push(`URL: ${p.url}`);
      sections.push("");
      sections.push(p.body);
      sections.push("");
    }

    sections.push("## Blog content (full)");
    for (const p of posts) {
      sections.push("");
      sections.push(`### ${p.title}`);
      sections.push(`URL: ${SITE_URL}/blog/${p.slug}`);
      sections.push(`Published: ${p.date}`);
      sections.push(`Summary: ${p.description}`);
      sections.push("");
      if (dir) {
        try {
          const raw = fs.readFileSync(path.join(dir, `${p.slug}.md`), "utf8");
          const body = raw.replace(/^---[\s\S]*?---\r?\n?/, "");
          sections.push(body.trim());
        } catch {}
      }
    }
    res.type("text/plain; charset=utf-8").send(sections.join("\n"));
  });

  app.get("/humans.txt", (_req, res) => {
    res.type("text/plain; charset=utf-8").send(
      [
        "/* TEAM */",
        "Company: DSX",
        "Product: DSX Edge",
        "CEO: Joseph P. Berardi",
        "CTO: Kirk Hurford",
        "Location: San Diego, California, USA",
        "Contact: hello@dsxedge.com",
        "",
        "/* SITE */",
        "Last update: " + new Date().toISOString().slice(0, 10),
        "Standards: HTML5, CSS3, TypeScript",
        "Components: React, Tailwind, shadcn/ui, Wouter, Framer Motion",
        "Backend: Node.js, Express, Drizzle ORM, PostgreSQL",
        "",
        "/* THANKS */",
        "3CX — Platinum Partner platform",
        "Switch — Citadel Campus hosting",
      ].join("\n"),
    );
  });

  app.get("/.well-known/security.txt", (_req, res) => {
    res.type("text/plain; charset=utf-8").send(
      [
        "Contact: mailto:security@dsxedge.com",
        "Contact: mailto:hello@dsxedge.com",
        `Canonical: ${SITE_URL}/.well-known/security.txt`,
        "Preferred-Languages: en, es",
        `Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}`,
      ].join("\n"),
    );
  });
  app.get("/security.txt", (_req, res) => res.redirect(301, "/.well-known/security.txt"));

  // Sitemap index — points to per-section child sitemaps so the blog can
  // grow past 50k URLs without restructuring.
  app.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().slice(0, 10);
    const posts = getBlogSlugs();
    const latestPostDate = posts.reduce(
      (max, p) => (p.date > max ? p.date : max),
      "1970-01-01",
    );
    const blogLastmod = latestPostDate > "1970-01-01" ? latestPostDate : today;

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `  <sitemap>\n    <loc>${SITE_URL}/sitemap-pages.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n` +
      `  <sitemap>\n    <loc>${SITE_URL}/sitemap-blog.xml</loc>\n    <lastmod>${blogLastmod}</lastmod>\n  </sitemap>\n` +
      `</sitemapindex>\n`;

    res.type("application/xml").send(xml);
  });

  app.get("/sitemap-pages.xml", (_req, res) => {
    const today = new Date().toISOString().slice(0, 10);
    const posts = getBlogSlugs();
    const latestPostDate = posts.reduce(
      (max, p) => (p.date > max ? p.date : max),
      "1970-01-01",
    );
    const homeLastmod = latestPostDate > "1970-01-01" ? latestPostDate : today;
    const blogLastmod = latestPostDate > "1970-01-01" ? latestPostDate : today;

    const entries = STATIC_ROUTES.map((r) =>
      xmlUrlEntry(
        `${SITE_URL}${r.loc}`,
        r.loc === "/" ? homeLastmod : r.loc === "/blog" ? blogLastmod : today,
        r.changefreq,
        r.priority,
        `${SITE_URL}/og-image.png`,
      ),
    );

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
      entries.join("\n") +
      `\n</urlset>\n`;

    res.type("application/xml").send(xml);
  });

  app.get("/sitemap-blog.xml", (_req, res) => {
    const posts = getBlogSlugs();
    const entries = posts.map((p) =>
      xmlUrlEntry(
        `${SITE_URL}/blog/${p.slug}`,
        p.date,
        "monthly",
        "0.7",
        `${SITE_URL}/og-image.png`,
      ),
    );

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
      entries.join("\n") +
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
