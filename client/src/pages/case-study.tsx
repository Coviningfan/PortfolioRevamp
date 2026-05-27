import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  TrendingDown,
  CheckCircle2,
  Quote,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { CASE_STUDIES, getCaseStudyBySlug } from "@shared/case-studies";
import { absoluteUrl } from "@/lib/site";

export default function CaseStudyPage() {
  const [, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug?.toLowerCase();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) return <NotFound />;

  const pageUrl = absoluteUrl(`/case-studies/${study.slug}`);
  const otherStudies = CASE_STUDIES.filter((c) => c.slug !== study.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${study.name} — DSX Edge case study`,
      description: study.description,
      mainEntityOfPage: pageUrl,
      url: pageUrl,
      author: { "@type": "Organization", name: "DSX Edge" },
      publisher: {
        "@type": "Organization",
        name: "DSX Edge",
        logo: { "@type": "ImageObject", url: absoluteUrl("/og-image.png") },
      },
      about: {
        "@type": "Organization",
        name: study.name,
        address: study.region,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: absoluteUrl("/case-studies"),
        },
        { "@type": "ListItem", position: 3, name: study.name, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo
        path={`/case-studies/${study.slug}`}
        title={`${study.name} — ${study.savings} cost reduction with DSX`}
        description={`How DSX delivered a ${study.savings} cost reduction for ${study.name}. ${study.description}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Navigation />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Case Studies", href: "/case-studies" },
              { name: study.name, href: `/case-studies/${study.slug}` },
            ]}
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
                {study.size}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-300 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20">
                <TrendingDown size={12} /> {study.savings} cost reduction
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              data-testid="text-case-study-title"
            >
              {study.name}
            </h1>
            <p className="mt-5 text-lg text-slate-300">{study.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Briefcase size={14} className="text-blue-300" />
                {study.industry}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-300" />
                {study.region}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-slate-500">
              Monthly cost after DSX
            </div>
            <div
              className="text-3xl font-bold text-white mt-2"
              data-testid="text-monthly-cost"
            >
              {study.monthlyCost}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-slate-500">
              Cost reduction
            </div>
            <div
              className="text-3xl font-bold text-orange-300 mt-2"
              data-testid="text-savings"
            >
              {study.savings}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-slate-500">
              Deployment type
            </div>
            <div className="text-base font-semibold text-white mt-2">{study.size}</div>
            <div className="text-xs text-slate-500 mt-1 italic">{study.note}</div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-3">
              The challenge
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">{study.challenge}</p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-3">
              What DSX did
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">{study.solution}</p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-3">
              Results
            </h2>
            <ul className="space-y-3">
              {study.results.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  data-testid={`text-result-${i}`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-orange-300 mt-0.5 shrink-0"
                  />
                  <span className="text-slate-200">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-orange-500/5 p-8">
            <Quote size={28} className="text-orange-300 mb-3" aria-hidden="true" />
            <blockquote className="text-xl text-white leading-relaxed italic">
              {study.quote.text}
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-400">
              — {study.quote.attribution}
            </figcaption>
          </figure>

          <div className="rounded-2xl bg-gradient-to-br from-blue-600/15 to-orange-500/10 border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-semibold">Could your business look like this?</h2>
            <p className="mt-2 text-slate-300">
              Every DSX Edge engagement starts with a free workflow audit. No pressure, no
              obligation.
            </p>
            <Link href="/contact">
              <Button
                data-testid="button-case-study-contact"
                className="mt-5 bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-6"
              >
                Talk to DSX
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-bold">Other case studies</h2>
            <Link href="/case-studies">
              <span
                data-testid="link-all-case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-orange-300 transition cursor-pointer"
              >
                See all <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {otherStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                <article
                  data-testid={`card-related-${c.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-6 cursor-pointer transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-widest text-blue-300/80">
                      {c.size}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-300">
                      <TrendingDown size={12} /> {c.savings}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{c.description}</p>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/case-studies">
              <span
                data-testid="link-back-case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-orange-300 transition cursor-pointer"
              >
                <ArrowLeft size={14} /> Back to all case studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
