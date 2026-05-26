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
      example: "Your phone system answers estimate requests, qualifies job scope, and books site visits — while you're on the job.",
      flow: "New quote request → intake → appointment booked",
    },
    {
      icon: Scale,
      name: "Law Practices",
      example: "Your phone system captures new client inquiries, gathers case details, and schedules consultations without interrupting billable work.",
      flow: "New caller → case type identified → consultation scheduled",
    },
    {
      icon: Heart,
      name: "Medical & Dental",
      example: "Your phone system handles appointment requests, insurance questions, and reminders — 24/7, without hold times.",
      flow: "Patient call → reason captured → office notified",
    },
    {
      icon: Building2,
      name: "Insurance & Finance",
      example: "Your phone system qualifies inbound leads, collects policy details, and routes warm prospects to the right rep automatically.",
      flow: "Inbound lead → qualified → routed to rep",
    },
    {
      icon: Home,
      name: "Real Estate",
      example: "Your phone system answers property inquiries, qualifies buyer intent, and schedules showings directly into your calendar.",
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
    <section id="ai-future" ref={ref} className="py-24 section-dark relative overflow-hidden">
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
          <span className="brand-halo inline-block px-4 py-1.5 rounded-full border border-orange-400/40 bg-orange-500/10 text-orange-200 text-sm font-semibold mb-4 tracking-wide uppercase">
            What's New on Top of the Phones
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            The same phone system —{" "}
            <span className="accent-serif text-orange-300">now it answers, too.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            For 12 years we've handled the calls, the routing, the queues, the voicemail.
            When you can't pick up, we now let the system take the call — qualify the caller,
            update your CRM, and book the appointment. Your phones, doing more.
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
              <Sparkles className="h-5 w-5 text-orange-400 motion-safe:animate-pulse" />
              <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">A real after-hours call</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
              A painter gets an estimate call at 9pm on a Saturday.
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Without DSX: it goes to voicemail. By Monday, the homeowner called three competitors.
                  Lead lost.
                </p>
                <p className="text-slate-200 leading-relaxed mb-6">
                  With DSX: the phone system picks up, asks the same qualifying questions the owner
                  would ask, logs the job in the CRM, and books the site visit straight into the
                  calendar — before the homeowner hangs up.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Same pattern works for law intake, medical scheduling, insurance qualification,
                  property showings, and any business where missed calls equal missed money.
                </p>
              </div>

              <div className="space-y-3 bg-black/20 rounded-xl p-5 border border-white/5">
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">Call log</div>
                {[
                  "21:04 — Inbound call answered by DSX",
                  "21:04 — Intent classified: exterior paint estimate",
                  "21:05 — Asked: one story or two? Sq ft? Timeline?",
                  "21:06 — Job logged in HubSpot, tagged 'qualified'",
                  "21:06 — Booked Tue 10am into owner's calendar",
                  "21:07 — SMS confirmation sent to homeowner",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mt-0.5">
                      <span className="text-orange-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-slate-300 text-sm font-mono">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-orange-200/90 text-sm italic">
                One booked job from one after-hours call pays for the whole setup.
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
            Same idea. <span className="accent-serif text-orange-300">Every industry.</span>
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto">
            The phone flow is built around <span className="text-white font-semibold">your</span> routing,
            <span className="text-white font-semibold"> your</span> CRM, and{" "}
            <span className="text-white font-semibold">your</span> playbook — not someone else's script.
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
              className="card-glass card-sheen hover-lift rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/[0.07] group overflow-hidden"
              data-testid={`industry-card-${index}`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.example}</p>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 motion-safe:animate-pulse" />
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
                <Sparkles className="h-6 w-6 text-orange-400 motion-safe:animate-pulse" />
                <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">Above the Cloud · Into the Business</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cloud rents you servers. DSX runs your phones.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Every vendor sells you cloud. We deliver the whole communications stack —
                phones, hosting, integrations, and the AI layer when you want it — from one partner.
                Your tools stop sitting next to each other and start working together.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "One partner for phones, hosting, and the AI layer",
                  "Built on your business logic — not a generic chatbot",
                  "12+ years installing systems that actually stay running",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button
                  data-testid="button-explore-ai"
                  className="btn-shimmer bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 rounded-xl py-6 px-7 text-base font-semibold group"
                >
                  Claim Your Free Workflow Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-slate-400 mt-3">Limited audits per month. We keep them deep, not many.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-sheen hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:border-orange-400/40">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  <AnimatedCounter value={60} suffix="%" />
                </div>
                <div className="text-xs text-slate-300">Avg. cost cut vs. legacy PBX</div>
              </div>
              <div className="card-sheen hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:border-blue-400/40">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <div className="text-xs text-slate-300">Agents never sleep</div>
              </div>
              <div className="card-sheen hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:border-blue-400/40">
                <div className="text-3xl font-bold text-blue-300 mb-1">
                  <AnimatedCounter value={99} suffix=".9%" />
                </div>
                <div className="text-xs text-slate-300">Uptime SLA on hosted systems</div>
              </div>
              <div className="card-sheen hover-lift bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:border-orange-400/40">
                <div className="text-3xl font-bold text-orange-300 mb-1">
                  <AnimatedCounter value={12} suffix="+" />
                </div>
                <div className="text-xs text-slate-300">Years deploying real systems</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
