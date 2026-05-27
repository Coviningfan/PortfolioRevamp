import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Tag, Search, X } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";
import { getAllPosts } from "@/content/blog";
import { absoluteUrl } from "@/lib/site";

const ALL = "All";

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of posts) {
      counts.set(p.category, (counts.get(p.category) || 0) + 1);
    }
    return [
      { name: ALL, count: posts.length },
      ...Array.from(counts.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, count]) => ({ name, count })),
    ];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const catMatch = activeCategory === ALL || p.category === activeCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const hay = [
        p.title,
        p.description,
        p.category,
        ...(p.keywords || []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [posts, query, activeCategory]);

  const extraJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/blog/${p.slug}`),
        name: p.title,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo path="/blog" jsonLd={extraJsonLd} />
      <Navigation />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} className="mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
              DSX Edge Insights
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              The DSX Edge <span className="accent-serif text-orange-400">blog</span> — AI for business communications.
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              Practical writing on AI voice agents, 3CX, and what actually happens when you put intelligence on top of your phone system. Talk to us on the{" "}
              <Link href="/contact" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">contact page</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 bg-slate-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="relative w-full md:w-80">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                aria-label="Search articles"
                data-testid="input-blog-search"
                className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400/40 focus:bg-white/[0.06] transition-colors"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  data-testid="button-clear-search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter posts by category"
            >
              {categories.map((c) => {
                const active = c.name === activeCategory;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setActiveCategory(c.name)}
                    aria-pressed={active}
                    data-testid={`button-filter-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors ${
                      active
                        ? "bg-orange-500/15 border-orange-400/40 text-orange-200"
                        : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {c.name}
                    <span className="ml-1.5 opacity-60">({c.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-slate-400" data-testid="text-no-results">
              No articles match your filters. Try clearing the search or switching categories.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 overflow-hidden flex flex-col"
                  data-testid={`card-post-${p.slug}`}
                >
                  <Link href={`/blog/${p.slug}`}>
                    <div className="p-6 flex flex-col h-full cursor-pointer">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-blue-300/80 mb-3">
                        <Tag size={12} />
                        {p.category}
                      </div>
                      <h2 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors line-clamp-3">
                        {p.title}
                      </h2>
                      <p className="mt-3 text-sm text-slate-400 line-clamp-3 flex-grow">
                        {p.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {new Date(p.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {p.readTime}
                        </span>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-orange-300 transition-colors">
                        Read article
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
