import { motion } from "framer-motion";
import { Phone, MessageSquare, Zap, ArrowRight } from "lucide-react";
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
        "AI answers routine calls, captures the reason for contact, and keeps customers from falling into voicemail. No matter the hour, no matter the volume — every caller gets an immediate, intelligent response.",
      iconBg: "bg-blue-500",
      accent: "border-blue-500/20",
      accentHover: "group-hover:border-blue-500/50",
      numberColor: "text-blue-500/20",
      taglineColor: "text-blue-600",
      taglineBg: "bg-blue-50",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Qualify",
      tagline: "The right questions, automatically.",
      description:
        "The AI asks the right questions, collects the details, identifies urgency, and routes the opportunity or request to the right person. No more playing phone tag. No more lost leads from missed calls.",
      iconBg: "bg-orange-500",
      accent: "border-orange-500/20",
      accentHover: "group-hover:border-orange-500/50",
      numberColor: "text-orange-500/20",
      taglineColor: "text-orange-600",
      taglineBg: "bg-orange-50",
    },
    {
      icon: Zap,
      number: "03",
      title: "Act",
      tagline: "From call to calendar — automatically.",
      description:
        "DSX Edge books appointments, sends follow-up messages, creates tasks, updates your workflows, and keeps your business moving — without waiting for a human to manually process every call.",
      iconBg: "bg-violet-500",
      accent: "border-violet-500/20",
      accentHover: "group-hover:border-violet-500/50",
      numberColor: "text-violet-500/20",
      taglineColor: "text-violet-600",
      taglineBg: "bg-violet-50",
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
            DSX Edge turns your communications platform into an active part of your business —
            one that answers, qualifies, and acts on every opportunity, automatically.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mb-16 max-w-xl mx-auto"
        >
          From the local pizza shop to the Fortune 500 — the same intelligence, built around your actual business process.
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
              >
                <div className={`absolute top-6 right-6 text-6xl font-black ${step.numberColor} leading-none select-none`}>
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
                <p className="text-slate-500 leading-relaxed relative">{step.description}</p>
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
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-xl px-8 py-5 text-base font-semibold group"
            >
              See How It Works for Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
