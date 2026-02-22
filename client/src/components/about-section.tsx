import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function AboutSection() {
  const highlights = [
    "Certified 3CX partner since 2013",
    "AI-integrated business communication solutions",
    "Enterprise-grade data center infrastructure",
    "Hybrid AI + human contact center expertise",
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              The DSX Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              12 Years of Innovation.{" "}
              <span className="text-gradient-dsx">Zero Compromises.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              For over 12 years, DSX has been engineering the future of business communications.
              We combine proven platforms with cutting-edge AI to deliver solutions that actually transform how companies connect.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              From traditional VoIP deployments to cutting-edge AI-powered contact centers,
              we've evolved with 3CX every step of the way. Today, DSX represents the future of
              business communications — where 3CX meets artificial intelligence.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button
                data-testid="button-about-story"
                className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-6 py-3 group"
              >
                Our Full Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl blur-2xl opacity-40" />
              <div className="relative bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4">
                    <span className="text-white text-2xl font-bold">3CX</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">The DSX Difference</h3>
                  <p className="text-slate-500">
                    Not just another provider — we're innovators who've seen it all, built it all, and continue to push boundaries.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-blue-50">
                    <div className="text-3xl font-bold text-blue-600 mb-1">12+</div>
                    <div className="text-sm text-slate-500">Years with 3CX</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-orange-50">
                    <div className="text-3xl font-bold text-orange-600 mb-1">500+</div>
                    <div className="text-sm text-slate-500">Deployments</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-emerald-50">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">60%</div>
                    <div className="text-sm text-slate-500">Avg Savings</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-violet-50">
                    <div className="text-3xl font-bold text-violet-600 mb-1">AI</div>
                    <div className="text-sm text-slate-500">Integrated</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
