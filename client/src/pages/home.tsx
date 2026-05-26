import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PlatformSection from "@/components/platform-section";
import ServicesSection from "@/components/services-section";
import ThreeCXSection from "@/components/threecx-section";
import AIFutureSection from "@/components/ai-future-section";
import FactsSection from "@/components/facts-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import PartnersSection from "@/components/partners-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const caseStudies = [
  {
    name: "Law Office of Michael H. Bonner",
    description: "California-based business law practice with emphasis on international matters.",
    size: "Small Business",
    monthlyCost: "$199.95",
    savings: "65%",
    note: "Includes conference room and off-site capabilities",
    color: "blue",
    bg: "bg-blue-50",
    accent: "text-blue-600",
    border: "border-blue-200",
  },
  {
    name: "Synology Inc.",
    description: "Global technology leader handling 100,000+ minutes of communications monthly.",
    size: "Enterprise",
    monthlyCost: "$686.00",
    savings: "46%",
    note: "Added 50% capacity at 16% lower cost",
    color: "orange",
    bg: "bg-orange-50",
    accent: "text-orange-600",
    border: "border-orange-200",
  },
  {
    name: "Synergy Homeopathic",
    description: "Global software solutions with users across 5 countries.",
    size: "International",
    monthlyCost: "$239.00",
    savings: "64%",
    note: "Seamless international connectivity",
    color: "violet",
    bg: "bg-violet-50",
    accent: "text-violet-600",
    border: "border-violet-200",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen page-canvas relative overflow-hidden">
      {/* Brand watermark layer — fixed orbital arcs + signal grid */}
      <div className="pointer-events-none fixed inset-0 z-0 brand-grid opacity-[0.35]" />
      <svg
        className="pointer-events-none fixed inset-0 z-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="brand-orb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="brand-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Concentric orbital arcs — echo of the hero orb */}
        <g transform="translate(1200 200)" stroke="url(#brand-arc)" fill="none" strokeWidth="1">
          <ellipse cx="0" cy="0" rx="380" ry="380" />
          <ellipse cx="0" cy="0" rx="280" ry="280" opacity="0.7" />
          <ellipse cx="0" cy="0" rx="180" ry="180" opacity="0.5" />
        </g>
        <g transform="translate(180 700)" stroke="url(#brand-arc)" fill="none" strokeWidth="1">
          <ellipse cx="0" cy="0" rx="320" ry="320" opacity="0.6" />
          <ellipse cx="0" cy="0" rx="220" ry="220" opacity="0.4" />
        </g>
        {/* Signal dots — particle motif */}
        {Array.from({ length: 24 }).map((_, i) => {
          const x = (i * 137) % 1440;
          const y = (i * 211) % 900;
          const r = (i % 3) + 1;
          return <circle key={i} cx={x} cy={y} r={r} fill="#60a5fa" opacity={0.3 + (i % 3) * 0.2} />;
        })}
      </svg>

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <ServicesSection />
        <ThreeCXSection />
        <AIFutureSection />
        <FactsSection />
        <AboutSection />
        <TestimonialsSection />

      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-200 text-sm font-semibold mb-4 tracking-wide uppercase">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Real Businesses. <span className="accent-serif text-orange-300">Real Savings.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The communications work that proved DSX is the right place to bring AI next.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8 hover:border-blue-400/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center`}>
                    <TrendingDown className={`h-5 w-5 ${study.accent.replace('600', '300')}`} />
                  </div>
                  <div className={`text-3xl font-bold ${study.accent.replace('600', '300')}`}>{study.savings}</div>
                  <span className="text-sm text-slate-400 font-medium">saved</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1" data-testid={`text-case-study-${index}`}>
                  {study.name}
                </h3>
                <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 border border-white/10 ${study.accent.replace('600', '300')} mb-3`}>
                  {study.size}
                </span>
                <p className="text-sm text-slate-400 mb-5">{study.description}</p>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-300">Monthly Cost</span>
                    <span className={`font-bold ${study.accent.replace('600', '300')}`}>{study.monthlyCost}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3">{study.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Based on actual DSX deployments</p>
              <p className="text-white text-2xl md:text-3xl font-bold">
                DSX reduces communication costs by up to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  60%
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <ContactSection />
      <Footer />
      </div>
    </div>
  );
}
