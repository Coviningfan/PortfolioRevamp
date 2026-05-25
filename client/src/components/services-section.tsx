import { motion } from "framer-motion";
import { Network, Map, Brain, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const steps = [
    {
      icon: Network,
      number: "01",
      title: "Modernize the Phone System",
      tagline: "The foundation, done right.",
      description:
        "VoIP, PBX, 3CX, SIP trunks, routing, extensions, queues, voicemail, reliability. Before anything intelligent runs on top, the communications layer has to work — and we've been doing this for 12+ years.",
      flow: ["3CX Platinum Partner platform", "Reliable SIP & extension routing", "Queue, voicemail, after-hours handling"],
      iconBg: "bg-slate-800",
      accent: "border-slate-200",
      accentHover: "group-hover:border-slate-500/50",
      numberColor: "text-slate-400/20",
      taglineColor: "text-slate-700",
      taglineBg: "bg-slate-100",
      flowDot: "bg-slate-700",
    },
    {
      icon: Map,
      number: "02",
      title: "Map the Communication Flow",
      tagline: "See where calls actually go.",
      description:
        "Where do calls come in? Who answers? What gets missed? What should happen after each interaction? We map your real call flow — the loss points, the bottlenecks, the manual follow-ups — before we automate anything.",
      flow: ["Inbound + after-hours pattern audit", "Loss-point and bottleneck mapping", "Workflow blueprint for automation"],
      iconBg: "bg-cyan-500",
      accent: "border-cyan-200",
      accentHover: "group-hover:border-cyan-500/50",
      numberColor: "text-cyan-500/15",
      taglineColor: "text-cyan-700",
      taglineBg: "bg-cyan-50",
      flowDot: "bg-cyan-500",
    },
    {
      icon: Brain,
      number: "03",
      title: "Add the Intelligence Layer",
      tagline: "AI on top of what already works.",
      description:
        "AI reception, lead qualification, appointment booking, staff notifications, CRM updates, and follow-up — all built on top of your modernized PBX. The intelligence is attached to your communications backbone, not floating above it.",
      flow: ["AI intake trained on your script", "Auto-booking + staff alerts", "CRM updates + follow-up loops"],
      iconBg: "bg-emerald-600",
      accent: "border-emerald-200",
      accentHover: "group-hover:border-emerald-500/50",
      numberColor: "text-emerald-500/15",
      taglineColor: "text-emerald-700",
      taglineBg: "bg-emerald-50",
      flowDot: "bg-emerald-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#e8eef6] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>
      <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            How DSX Edge Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
            We start with your phone system.{" "}
            <span className="text-gradient-dsx">Then we make it intelligent.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            DSX Edge is not a chatbot bolted onto your business. It's an intelligence layer
            built on top of a communications foundation we've been deploying for 12+ years.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mb-16 max-w-xl mx-auto font-mono tracking-tight"
        >
          Modernize → Map → Add Intelligence
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative bg-white rounded-2xl border ${step.accent} ${step.accentHover} p-8 h-full transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 overflow-hidden`}
                data-testid={`service-card-${index}`}
              >
                <div className={`absolute top-6 right-6 text-7xl font-black ${step.numberColor} leading-none select-none`}>
                  {step.number}
                </div>
                <div className="mb-5 relative">
                  <div
                    className={`${step.iconBg} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="text-white h-7 w-7" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 relative leading-snug">{step.title}</h3>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${step.taglineBg} ${step.taglineColor} mb-4 relative`}>
                  {step.tagline}
                </span>
                <p className="text-slate-500 leading-relaxed relative mb-5 text-sm">{step.description}</p>

                <div className="relative pt-4 border-t border-slate-100 space-y-2">
                  {step.flow.map((line, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full ${step.flowDot} flex items-center justify-center flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity`}>
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 font-medium">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact">
            <Button
              data-testid="button-services-cta"
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 rounded-xl px-8 py-5 text-base font-semibold group"
            >
              Show Us How Your Business Receives Calls
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-slate-400 mt-3">We'll map your call flow and show you exactly what can be automated.</p>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
