import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Building2, Scale, Wrench, Heart, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AIFutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          if (currentStep <= steps) {
            setCount(Math.min(Math.round(increment * currentStep), value));
          } else {
            setCount(value);
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <span>
        {prefix}{count}{suffix}
      </span>
    );
  };

  const industries = [
    { icon: Wrench, name: "Contractors & Trades", example: "AI answers estimate requests, qualifies job scope, and books site visits — while you're on the job." },
    { icon: Scale, name: "Law Practices", example: "AI captures new client inquiries, gathers case details, and schedules consultations without interrupting billable work." },
    { icon: Heart, name: "Medical & Dental", example: "AI handles appointment requests, insurance verification questions, and reminders — 24/7, without hold times." },
    { icon: Building2, name: "Insurance & Finance", example: "AI qualifies inbound leads, collects policy details, and routes warm prospects to the right agent automatically." },
    { icon: Home, name: "Real Estate", example: "AI answers property inquiries, qualifies buyer intent, and schedules showings directly into your calendar." },
    { icon: Briefcase, name: "Any Business That Gets Calls", example: "If your business loses time or leads through routine phone calls, DSX Edge can change that." },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4">
            The Intelligence Layer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
            From the first call to the{" "}
            <span className="text-gradient-dsx">booked appointment.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            "Above the Cloud" doesn't mean cloud hosting. It means DSX Edge sits above your communications
            platform and adds intelligence — AI trained around your actual business process, not a generic script.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 md:p-12 mb-16 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">A Real Example</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
              A painter gets calls asking for estimates.
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  The DSX Edge AI answers the call, asks whether the house is one story or two,
                  asks for square footage, collects job details, and follows the painter's own estimating
                  logic. By the end of the call, an appointment is booked.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  The painter spends more time painting. Not returning calls.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Call comes in after hours",
                  "AI answers, identifies it's an estimate request",
                  "AI asks: one story or two? Interior or exterior?",
                  "Collects square footage and job details",
                  "Follows the painter's estimating workflow",
                  "Books the appointment directly into the calendar",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                      <span className="text-orange-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-slate-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-slate-400 text-sm italic">
                This same model applies to lawyers, insurance agencies, electricians, plumbers,
                real estate, finance, medical offices, hotels, and more.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Any Industry. Any Workflow.
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto">
            DSX Edge is not a generic AI product. The AI is trained around your business process —
            your questions, your routing logic, your calendar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">{item.name}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.example}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-10 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-orange-400" />
                <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">Cloud vs. Intelligence</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cloud is infrastructure. DSX Edge is intelligence.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Every provider offers cloud. DSX Edge goes above it — layering AI into the
                daily communications workflow of your business. Not a future promise. Active,
                practical automation built around how your business already operates.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "AI trained on your specific workflows — not generic scripts",
                  "Integrates with your existing communications system",
                  "Backed by 12+ years of real-world deployment experience",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button
                  data-testid="button-explore-ai"
                  className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-xl py-5 text-base font-semibold group"
                >
                  Talk to DSX
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  <AnimatedCounter value={60} suffix="%" />
                </div>
                <div className="text-xs text-slate-300">Avg. Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <div className="text-xs text-slate-300">AI Always On</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  Zero
                </div>
                <div className="text-xs text-slate-300">Calls Lost to Voicemail</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-violet-400 mb-1">
                  <AnimatedCounter value={12} suffix="+" />
                </div>
                <div className="text-xs text-slate-300">Years Implementing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
