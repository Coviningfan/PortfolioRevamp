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
    <section id="about" className="py-24 bg-[#e8eef6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              The DSX Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              12 years in communications.{" "}
              <span className="text-gradient-dsx">The natural place for AI.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              Business owners everywhere are asking the same question: "How do we actually use AI?"
              The answer, for most businesses, starts at the front line — the calls, messages, and
              requests that come in every day.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              DSX has spent 12+ years inside that front line. We know the communications layer better
              than almost anyone. DSX Edge is the next evolution: using that layer as the entry point
              for practical AI implementation inside your real business workflows.
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
                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4">
                    <span className="text-white text-xl font-bold">DSX Edge</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">The Bridge</h3>
                  <p className="text-slate-500 text-sm">
                    From experienced communications company to AI implementation partner —
                    same foundation, new chapter.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-blue-50">
                    <div className="text-3xl font-bold text-blue-600 mb-1">12+</div>
                    <div className="text-sm text-slate-500">Years in Communications</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-orange-50">
                    <div className="text-3xl font-bold text-orange-600 mb-1">AI</div>
                    <div className="text-sm text-slate-500">Brought to Real Workflows</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-emerald-50">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">99.9%</div>
                    <div className="text-sm text-slate-500">Always-On Reliability</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-violet-50">
                    <div className="text-3xl font-bold text-violet-600 mb-1">3CX</div>
                    <div className="text-sm text-slate-500">Platinum Partner Backbone</div>
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
