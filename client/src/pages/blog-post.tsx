import { useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import KeyTakeaways from "@/components/key-takeaways";
import Breadcrumbs from "@/components/breadcrumbs";
import AuthorBio from "@/components/author-bio";
import RelatedReads from "@/components/related-reads";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getRelatedPosts, tagToSlug } from "@/content/blog";
import { SITE, absoluteUrl } from "@/lib/site";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function countWords(s: string): number {
  return (s.match(/\S+/g) || []).length;
}

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug || "";
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) setLocation("/blog");
  }, [post, setLocation]);

  if (!post) return null;

  const related = getRelatedPosts(post.slug, 3);
  const wordCount = countWords(stripHtml(post.html));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      author: { "@type": "Organization", name: post.author, url: SITE.domain },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.domain,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/og-image.png"),
        },
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
      image: absoluteUrl(post.cover || "/og-image.png"),
      keywords: (post.keywords || post.tags).join(", "),
      articleSection: post.category,
      wordCount,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={new Date(post.date).toISOString()}
        author={post.author}
        keywords={post.keywords || post.tags}
        jsonLd={jsonLd}
      />
      <Navigation />

      <article className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
            className="mb-6"
          />
          <Link href="/blog">
            <button
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
              data-testid="link-back-blog"
            >
              <ArrowLeft size={14} />
              Back to all posts
            </button>
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-blue-300/80 mb-4">
              <span className="flex items-center gap-1.5"><Tag size={12} />{post.category}</span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} />{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" data-testid="text-post-title">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{post.description}</p>
          </motion.header>

          {post.takeaways && post.takeaways.length > 0 && (
            <KeyTakeaways items={post.takeaways} />
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none mt-10
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-orange-300 hover:prose-a:text-orange-200 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-blockquote:border-l-orange-500 prose-blockquote:text-slate-200 prose-blockquote:not-italic
              prose-li:text-slate-300
              prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2" data-testid="post-tags">
              {post.tags.map((t) => (
                <Link key={t} href={`/blog/tag/${tagToSlug(t)}`}>
                  <span
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-orange-400/40 hover:bg-orange-500/10 transition-colors cursor-pointer"
                    data-testid={`tag-pill-${tagToSlug(t)}`}
                  >
                    <Tag size={11} />
                    {t}
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10">
            <AuthorBio name={post.author} />
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/15 to-orange-500/10 border border-white/10 p-8 text-center">
              <h3 className="text-2xl font-semibold">Ready to put intelligence on top of your phone system?</h3>
              <p className="mt-2 text-slate-300">Talk to DSX about an Edge implementation tailored to your workflow.</p>
              <Link href="/contact">
                <Button className="mt-5 bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-6">
                  Talk to DSX
                </Button>
              </Link>
            </div>
          </div>

          {related.length > 0 && <RelatedReads posts={related} className="mt-16" />}
        </div>
      </article>

      <Footer />
    </div>
  );
}
