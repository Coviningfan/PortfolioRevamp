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
    {
      icon: Wrench,
      name: "Contractors & Trades",
      example: "AI answers estimate requests, qualifies job scope, and books site visits — while you're on the job.",
      flow: "New quote request → AI intake → appointment booked",
    },
    {
      icon: Scale,
      name: "Law Practices",
      example: "AI captures new client inquiries, gathers case details, and schedules consultations without interrupting billable work.",
      flow: "New caller → case type identified → consultation scheduled",
    },
    {
      icon: Heart,
      name: "Medical & Dental",
      example: "AI handles appointment requests, insurance questions, and reminders — 24/7, without hold times.",
      flow: "Patient call → reason captured → office notified",
    },
    {
      icon: Building2,
      name: "Insurance & Finance",
      example: "AI qualifies inbound leads, collects policy details, and routes warm prospects to the right agent automatically.",
      flow: "Inbound lead → qualified → routed to agent",
    },
    {
      icon: Home,
      name: "Real Estate",
      example: "AI answers property inquiries, qualifies buyer intent, and schedules showings directly into your calendar.",
      flow: "Property inquiry → intent gauged → showing booked",
    },
    {
      icon: Briefcase,
      name: "Any Business That Gets Calls",
      example: "If your business loses time or leads through routine phone calls, DSX Edge can change that.",
      flow: "Inbound contact → qualified → action taken",
    },
  ];

  return (
    <section ref={ref} className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 text-orange-200 text-sm font-semibold mb-4 tracking-wide uppercase">
            DSX AI Enabled
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            AI where your{" "}
            <span className="accent-serif text-orange-300">business already works.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Most companies don't need a generic chatbot. They need intelligence connected
            to the systems their customers and staff already use. DSX Edge begins with
            communications, maps the workflow around it, and applies AI only where it
            creates measurable operational value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-8 md:p-12 mb-16 text-white overflow-hidden relative"
        >

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">One example among many</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
              A small contractor gets calls asking for estimates.
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  A DSX AI Enabled workflow answers the call, asks the qualifying questions
                  the owner would ask, follows the business's own estimating logic, updates
                  the CRM, and books the appointment into the calendar. Communications,
                  workflow, and intelligence — connected as one system.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  This is one workflow. The same model applies across intake, qualification,
                  routing, follow-up, reporting, and escalation in any business.
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
                The same approach scales across law, insurance, medical, real estate, trades,
                finance, and operations-heavy businesses — anywhere communications, workflow,
                and data should be working together.
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Any industry. <span className="accent-serif text-orange-300">Any workflow.</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto">
            Intelligence is designed around the business's real process — its routing logic,
            its records, its calendar, its operational reality. Not a generic chatbot.
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
              className="card-glass rounded-2xl p-6 hover:border-blue-400/40 hover:bg-white/[0.07] transition-all duration-300 group overflow-hidden"
              data-testid={`industry-card-${index}`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.example}</p>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono text-slate-300 tracking-tight">{item.flow}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-10 text-white overflow-hidden"
        >
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-orange-400" />
                <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">Above the Cloud · Into the Business</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cloud is infrastructure. DSX Edge is integration.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Every provider offers cloud. DSX Edge goes above it — unifying business
                communications, hosted infrastructure, and intelligent workflows under
                one partner, so the systems a business already depends on finally operate
                as one.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Communications, infrastructure, and integration from one partner",
                  "AI applied to real business workflows — not generic chatbots",
                  "12+ years of deployed, supported, real-world business systems",
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
                  One
                </div>
                <div className="text-xs text-slate-300">Partner Across Comms, Infra & AI</div>
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
