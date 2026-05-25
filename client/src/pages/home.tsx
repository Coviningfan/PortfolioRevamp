import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <AIFutureSection />
      <ThreeCXSection />
      <FactsSection />
      <AboutSection />
      <TestimonialsSection />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">Real Businesses. Real Savings.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
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
                className={`bg-white rounded-2xl p-8 border ${study.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${study.bg} flex items-center justify-center`}>
                    <TrendingDown className={`h-5 w-5 ${study.accent}`} />
                  </div>
                  <div className={`text-3xl font-bold ${study.accent}`}>{study.savings}</div>
                  <span className="text-sm text-slate-400 font-medium">saved</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1" data-testid={`text-case-study-${index}`}>
                  {study.name}
                </h3>
                <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${study.bg} ${study.accent} mb-3`}>
                  {study.size}
                </span>
                <p className="text-sm text-slate-500 mb-5">{study.description}</p>
                <div className={`${study.bg} rounded-xl p-4`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Monthly Cost</span>
                    <span className={`font-bold ${study.accent}`}>{study.monthlyCost}</span>
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
  );
}
