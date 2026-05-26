import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function AboutSection() {
  const highlights = [
    "12+ years inside business communications",
    "3CX Platinum Partner — proven platform expertise",
    "AI trained on real business workflows, not scripts",
    "Implementation-first — we do the integration work",
  ];

  return (
    <section id="about" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold mb-4 tracking-wide uppercase">
              The DSX Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              12 years in communications.{" "}
              <span className="accent-serif text-orange-300">The natural place for AI.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Business owners everywhere are asking the same question: "How do we actually use AI?"
              The answer, for most businesses, starts at the front line — the calls, messages, and
              requests that come in every day.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              DSX has spent 12+ years inside that front line. We know the communications layer better
              than almost anyone. DSX Edge is the next evolution: using that layer as the entry point
              for practical AI implementation inside your real business workflows.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button
                data-testid="button-about-story"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 rounded-xl px-6 py-3 group"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-orange-500/20 rounded-3xl blur-2xl opacity-60" />
              <div className="relative card-glass rounded-2xl p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4">
                    <span className="text-white text-xl font-bold">DSX Edge</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Bridge</h3>
                  <p className="text-slate-400 text-sm">
                    From experienced communications company to AI implementation partner —
                    same foundation, new chapter.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-400/20">
                    <div className="text-3xl font-bold text-blue-300 mb-1">12+</div>
                    <div className="text-sm text-slate-400">Years in Communications</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-orange-500/10 border border-orange-400/20">
                    <div className="text-3xl font-bold text-orange-300 mb-1">AI</div>
                    <div className="text-sm text-slate-400">Brought to Real Workflows</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-400/20">
                    <div className="text-3xl font-bold text-blue-300 mb-1">99.9%</div>
                    <div className="text-sm text-slate-300">Always-On Reliability</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-orange-500/10 border border-orange-400/20">
                    <div className="text-3xl font-bold text-orange-300 mb-1">3CX</div>
                    <div className="text-sm text-slate-300">Platinum Partner Backbone</div>
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
