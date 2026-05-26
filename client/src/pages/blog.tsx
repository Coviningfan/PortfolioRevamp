import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import { getAllPosts } from "@/content/blog";
import { absoluteUrl } from "@/lib/site";

export default function BlogIndexPage() {
  const posts = getAllPosts();

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

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
              DSX Edge Insights
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Notes from the <span className="accent-serif text-orange-400">edge</span> of business communications.
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              Practical writing on AI voice agents, 3CX, and what actually happens when you put intelligence on top of your phone system.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
