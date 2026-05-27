import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  TrendingDown,
  Tag,
  Calendar,
  Clock,
  FileText,
  Rss,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { getAllPosts, getAllTags } from "@/content/blog";
import { absoluteUrl } from "@/lib/site";
import { CASE_STUDIES } from "@shared/case-studies";

const FAQ_PREVIEW: string[] = [
  "What is DSX Edge?",
  "Do I need to replace my phone system to use DSX Edge?",
  "How long does an implementation take?",
  "Does DSX Edge work 24/7?",
  "Can DSX Edge book appointments directly into my calendar?",
  "Is DSX Edge HIPAA-compliant for medical offices?",
];

export default function ResourcesPage() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 3);
  const recent = posts.slice(3, 9);
  const tags = getAllTags().slice(0, 8);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl("/resources"),
      name: "DSX Edge Resources — Blog, FAQ & Case Studies",
      description:
        "One place for the DSX Edge knowledge base: long-form articles, plain-language FAQs, and real customer case studies.",
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            url: absoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FAQ",
            url: absoluteUrl("/faq"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Case Studies",
            url: absoluteUrl("/case-studies"),
          },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo path="/resources" jsonLd={jsonLd} />
      <Navigation />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} className="mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
              Resources
            </span>
            <h1
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              data-testid="text-resources-title"
            >
              The DSX Edge <span className="accent-serif text-orange-400">knowledge base.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              Articles, plain-language answers, and real customer case studies — everything you need
              to evaluate AI on top of your phone system, in one place.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#blog"
                data-testid="link-jump-blog"
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 hover:text-white hover:border-blue-400/40 transition"
              >
                <BookOpen size={14} /> Articles
              </a>
              <a
                href="#faq"
                data-testid="link-jump-faq"
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 hover:text-white hover:border-blue-400/40 transition"
              >
                <HelpCircle size={14} /> FAQ
              </a>
              <Link href="/case-studies">
                <span
                  data-testid="link-jump-case-studies"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 hover:text-white hover:border-blue-400/40 transition cursor-pointer"
                >
                  <TrendingDown size={14} /> Case Studies
                </span>
              </Link>
              <Link href="/ai">
                <span
                  data-testid="link-jump-press-kit"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 hover:text-white hover:border-blue-400/40 transition cursor-pointer"
                >
                  <FileText size={14} /> Press kit
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="relative py-16 bg-slate-950 border-t border-white/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-blue-300/80 mb-2">
                From the blog
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Long-form articles & field notes</h2>
            </div>
            <Link href="/blog">
              <span
                data-testid="link-all-blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-orange-300 transition cursor-pointer"
              >
                See every article <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {featured.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <article
                    className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-6 flex flex-col cursor-pointer transition"
                    data-testid={`card-resources-post-${p.slug}`}
                  >
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-blue-300/80 mb-3">
                      <Tag size={12} />
                      {p.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition line-clamp-3">
                      {p.title}
                    </h3>
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
                  </article>
                </Link>
              ))}
            </div>
          )}

          {recent.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm uppercase tracking-[0.18em] text-slate-400 mb-4">
                More recent posts
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>
                      <span
                        data-testid={`link-recent-post-${p.slug}`}
                        className="flex items-start justify-between gap-3 py-2 text-sm text-slate-300 hover:text-orange-300 transition cursor-pointer border-b border-white/5"
                      >
                        <span className="line-clamp-1">{p.title}</span>
                        <ArrowRight size={14} className="shrink-0 mt-1 opacity-50" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tags.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-slate-500 mr-1">
                Topics:
              </span>
              {tags.map((t) => (
                <Link key={t.slug} href={`/blog/tag/${t.slug}`}>
                  <span
                    data-testid={`link-resources-tag-${t.slug}`}
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-orange-400/40 hover:bg-orange-500/10 transition cursor-pointer"
                  >
                    <Tag size={11} />
                    {t.tag}
                    <span className="opacity-60">({t.count})</span>
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
            <Rss size={14} className="text-orange-300" />
            <span>
              Subscribe with any reader:{" "}
              <a
                href="/rss.xml"
                data-testid="link-rss"
                className="text-blue-300 hover:text-orange-300 underline underline-offset-2"
              >
                /rss.xml
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16 bg-slate-950 border-t border-white/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-blue-300/80 mb-2">
                Plain answers
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Top questions about DSX Edge</h2>
            </div>
            <Link href="/faq">
              <span
                data-testid="link-all-faq"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-orange-300 transition cursor-pointer"
              >
                Open the full FAQ <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {FAQ_PREVIEW.map((q, i) => (
              <li key={i}>
                <Link href="/faq">
                  <span
                    data-testid={`link-faq-preview-${i}`}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-4 cursor-pointer transition"
                  >
                    <span className="flex items-start gap-3">
                      <HelpCircle size={16} className="text-blue-300 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-200 group-hover:text-white">
                        {q}
                      </span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-slate-500 group-hover:text-orange-300 mt-1 shrink-0"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case studies */}
      <section
        id="case-studies"
        className="relative py-16 bg-slate-950 border-t border-white/5 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-widest text-blue-300/80 mb-2">
              Real businesses, real savings
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Customer case studies</h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              The communications backbone DSX Edge is built on. Verified deployments across small
              business, enterprise, and international teams.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                <article
                  data-testid={`card-case-study-${c.slug}`}
                  className="group h-full rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-orange-500/5 hover:from-blue-600/15 hover:to-orange-500/10 p-6 flex flex-col cursor-pointer transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-widest text-blue-300/80">
                      {c.size}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-300">
                      <TrendingDown size={12} /> {c.savings} cost reduction
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 flex-grow">{c.description}</p>
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="text-xs text-slate-500">Monthly cost after DSX</div>
                    <div className="text-2xl font-bold text-white mt-1">{c.monthlyCost}</div>
                    <div className="mt-2 text-xs text-slate-500 italic">{c.note}</div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-orange-300 transition">
                    Read case study <ArrowRight size={14} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/case-studies">
              <Button
                variant="outline"
                data-testid="button-resources-all-case-studies"
                className="border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06] rounded-lg px-5"
              >
                See all case studies
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                data-testid="button-resources-contact"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-6"
              >
                Get your own workflow audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For AI assistants */}
      <section className="relative py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-blue-300/80 mb-2">
                For AI assistants & journalists
              </div>
              <h2 className="text-2xl font-bold">Citation-ready facts about DSX Edge</h2>
              <p className="mt-3 text-slate-400">
                Verified facts, sourced claims, and press-ready descriptions in one place. Plus
                machine-readable endpoints for LLM ingestion.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/ai">
                <span
                  data-testid="link-press-kit"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-4 cursor-pointer transition"
                >
                  <span className="text-sm text-white">What is DSX Edge? — press kit</span>
                  <ArrowRight size={14} className="text-blue-300" />
                </span>
              </Link>
              <a
                href="/llms.txt"
                data-testid="link-llms"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-4 transition"
              >
                <span className="text-sm text-white">/llms.txt — index for LLMs</span>
                <ArrowRight size={14} className="text-blue-300" />
              </a>
              <a
                href="/llms-full.txt"
                data-testid="link-llms-full"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-4 transition"
              >
                <span className="text-sm text-white">/llms-full.txt — full content for LLMs</span>
                <ArrowRight size={14} className="text-blue-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
