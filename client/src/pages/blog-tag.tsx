import { useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";
import { getPostsByTagSlug, getTagBySlug, getAllTags, tagToSlug } from "@/content/blog";
import { absoluteUrl } from "@/lib/site";

export default function BlogTagPage() {
  const [, params] = useRoute("/blog/tag/:tag");
  const [, setLocation] = useLocation();
  const tagSlug = (params?.tag || "").toLowerCase();
  const summary = getTagBySlug(tagSlug);
  const posts = getPostsByTagSlug(tagSlug);

  useEffect(() => {
    if (!summary) setLocation("/blog");
  }, [summary, setLocation]);

  if (!summary) return null;

  const title = `${summary.tag} — DSX Edge Blog`;
  const description = `${posts.length} ${posts.length === 1 ? "article" : "articles"} on ${summary.tag} from the DSX Edge team — AI voice agents, 3CX, and what actually happens when intelligence sits on top of a business phone system.`;
  const path = `/blog/tag/${summary.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl(path),
      name: title,
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: summary.tag, item: absoluteUrl(path) },
      ],
    },
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

  const otherTags = getAllTags().filter((t) => t.slug !== summary.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo title={title} description={description} path={path} jsonLd={jsonLd} />
      <Navigation />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: summary.tag },
            ]}
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
              <Tag size={11} /> Topic
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" data-testid="text-tag-title">
              {summary.tag}
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl">
              {posts.length} {posts.length === 1 ? "article" : "articles"} from the DSX Edge team on {summary.tag}.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden"
                data-testid={`card-tagpost-${p.slug}`}
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
                    <p className="mt-3 text-sm text-slate-400 line-clamp-3 flex-grow">{p.description}</p>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5"><Calendar size={12} />{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} />{p.readTime}</span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-orange-300 transition-colors">
                      Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {otherTags.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="text-[11px] uppercase tracking-widest text-slate-400 mb-4">Other topics</div>
              <div className="flex flex-wrap gap-2">
                {otherTags.map((t) => (
                  <Link key={t.slug} href={`/blog/tag/${t.slug}`}>
                    <span
                      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-orange-400/40 hover:bg-orange-500/10 transition cursor-pointer"
                      data-testid={`link-other-tag-${t.slug}`}
                    >
                      <Tag size={11} />
                      {t.tag}
                      <span className="opacity-60">({t.count})</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export { tagToSlug };
