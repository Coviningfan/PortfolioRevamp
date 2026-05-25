import { motion } from "framer-motion";
import { Phone, MessageSquare, Zap, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Answer",
      tagline: "Every call gets handled.",
      description:
        "AI answers routine calls, captures the reason for contact, and keeps customers from falling into voicemail. No matter the hour, no matter the volume.",
      flow: ["Caller dials in", "AI greets professionally", "Reason captured"],
      iconBg: "bg-cyan-500",
      accent: "border-cyan-200",
      accentHover: "group-hover:border-cyan-500/50",
      numberColor: "text-cyan-500/15",
      taglineColor: "text-cyan-700",
      taglineBg: "bg-cyan-50",
      flowDot: "bg-cyan-500",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Qualify",
      tagline: "The right questions, automatically.",
      description:
        "The AI asks the right questions, collects details, identifies urgency, and routes the opportunity to the right person. No more playing phone tag.",
      flow: ["Questions tailored to you", "Details collected", "Urgency identified"],
      iconBg: "bg-blue-600",
      accent: "border-blue-200",
      accentHover: "group-hover:border-blue-500/50",
      numberColor: "text-blue-500/15",
      taglineColor: "text-blue-700",
      taglineBg: "bg-blue-50",
      flowDot: "bg-blue-600",
    },
    {
      icon: Zap,
      number: "03",
      title: "Act",
      tagline: "From call to calendar — automatically.",
      description:
        "DSX Edge books appointments, sends follow-up messages, creates tasks, and updates your workflows — without waiting for a human to process every call.",
      flow: ["Appointment booked", "Staff notified", "Follow-up sent"],
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
    <section id="services" className="py-24 bg-slate-50">
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
            Your phone system should not just ring.{" "}
            <span className="text-gradient-dsx">It should work.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Three steps. One unified system. AI that follows your business process — not a generic script.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mb-16 max-w-xl mx-auto"
        >
          Answer · Qualify · Act — built around how customers already reach you.
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
                data-testid={`service-card-${step.title.toLowerCase()}`}
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2 relative">{step.title}</h3>
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
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 rounded-xl px-8 py-5 text-base font-semibold group"
            >
              Show Us How Your Business Receives Calls
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-slate-400 mt-3">We'll show you what can be automated.</p>
        </motion.div>
      </div>
    </section>
  );
}
