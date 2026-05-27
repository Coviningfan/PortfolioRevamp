import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingDown, MapPin, Briefcase } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@shared/case-studies";
import { absoluteUrl } from "@/lib/site";

export default function CaseStudiesIndexPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absoluteUrl("/case-studies"),
      name: "DSX Edge Customer Case Studies",
      description:
        "Real customer deployments where DSX cut communications costs by 46–65% across small business, enterprise, and international teams.",
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: CASE_STUDIES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          url: absoluteUrl(`/case-studies/${c.slug}`),
        })),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo path="/case-studies" jsonLd={jsonLd} />
      <Navigation />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Case Studies", href: "/case-studies" }]}
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
              Customer Case Studies
            </span>
            <h1
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              data-testid="text-case-studies-title"
            >
              Real businesses.{" "}
              <span className="accent-serif text-orange-400">Real savings.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              The communications backbone DSX Edge is built on. Three deployments — small business,
              enterprise, and international — each verified, each with real numbers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h2 className="text-lg font-semibold text-white group-hover:text-orange-300 transition">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-400 flex-grow">{c.description}</p>
                  <div className="mt-5 pt-4 border-t border-white/5 space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Briefcase size={12} className="text-blue-300" />
                      {c.industry}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-blue-300" />
                      {c.region}
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-orange-300 transition">
                    Read the case study
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600/15 to-orange-500/10 border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-semibold">Want your own case study?</h2>
            <p className="mt-2 text-slate-300">
              Every DSX Edge engagement starts with a free workflow audit. No pressure, no
              obligation.
            </p>
            <Link href="/contact">
              <Button
                data-testid="button-case-studies-contact"
                className="mt-5 bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-6"
              >
                Talk to DSX
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
