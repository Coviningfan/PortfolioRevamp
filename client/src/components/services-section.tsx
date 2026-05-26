import { motion } from "framer-motion";
import { Network, Map, PlugZap, Sparkles, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const steps = [
    {
      icon: Network,
      number: "01",
      title: "Modernize Communications",
      tagline: "The foundation, done right.",
      description:
        "VoIP, PBX, 3CX, SIP, routing, queues, extensions, voicemail, call handling, and support. The communications layer your customers and staff actually use, deployed and managed by a 3CX Platinum Partner.",
      flow: ["3CX platform · VoIP & SIP routing", "Queues, extensions, voicemail, support", "Reliable business telephony"],
      iconBg: "bg-blue-700",
      accent: "border-blue-200",
      accentHover: "group-hover:border-blue-500/50",
      numberColor: "text-blue-500/15",
      taglineColor: "text-blue-700",
      taglineBg: "bg-blue-50",
      flowDot: "bg-blue-700",
    },
    {
      icon: Map,
      number: "02",
      title: "Map the Business Flow",
      tagline: "Understand how the business actually runs.",
      description:
        "How do customers contact the business? How does staff respond? Where does information go? What gets missed, what gets repeated manually, and what systems need to connect? We map it before we automate it.",
      flow: ["Customer & staff workflow audit", "Loss points · bottlenecks · gaps", "System & data flow blueprint"],
      iconBg: "bg-slate-800",
      accent: "border-slate-200",
      accentHover: "group-hover:border-slate-500/50",
      numberColor: "text-slate-500/15",
      taglineColor: "text-slate-700",
      taglineBg: "bg-slate-100",
      flowDot: "bg-slate-700",
    },
    {
      icon: PlugZap,
      number: "03",
      title: "Connect the Systems",
      tagline: "Make the business operate as one.",
      description:
        "Connect communications with CRM, calendars, notifications, reporting, support workflows, and the business tools the company already runs. Vendors stop working in isolation and start working together.",
      flow: ["CRM & calendar connections", "Notifications & reporting", "Support & workflow integration"],
      iconBg: "bg-cyan-600",
      accent: "border-cyan-200",
      accentHover: "group-hover:border-cyan-500/50",
      numberColor: "text-cyan-500/15",
      taglineColor: "text-cyan-700",
      taglineBg: "bg-cyan-50",
      flowDot: "bg-cyan-600",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Enable DSX AI",
      tagline: "DSX AI Enabled workflows.",
      description:
        "DSX AI Enabled workflows for intake, qualification, routing, summaries, follow-up, scheduling, reporting, and escalation — applied where they create measurable operational value across the business.",
      flow: ["AI-enabled intake & qualification", "Automated workflow routing & follow-up", "Operational reporting & visibility"],
      iconBg: "bg-orange-600",
      accent: "border-orange-200",
      accentHover: "group-hover:border-orange-500/50",
      numberColor: "text-orange-500/15",
      taglineColor: "text-orange-700",
      taglineBg: "bg-orange-50",
      flowDot: "bg-orange-600",
    },
  ];

  return (
    <section id="services" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold mb-4 tracking-wide uppercase">
            How DSX Edge Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Communications first.{" "}
            <span className="accent-serif text-orange-300">Then everything around it.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A four-step path from modern business communications to integrated, intelligent
            operations — delivered by the same partner.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mb-16 max-w-2xl mx-auto font-mono tracking-tight"
        >
          Modernize → Map → Connect → Enable DSX AI
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative card-glass rounded-2xl p-6 h-full transition-all duration-500 hover:border-blue-400/40 hover:bg-white/[0.07] hover:-translate-y-1 overflow-hidden`}
                data-testid={`service-card-${index}`}
              >
                <div className={`absolute top-4 right-5 text-6xl font-black text-white/5 leading-none select-none`}>
                  {step.number}
                </div>
                <div className="mb-5 relative">
                  <div
                    className={`${step.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="text-white h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative leading-snug">{step.title}</h3>
                <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-blue-200 border border-white/10 mb-3 relative`}>
                  {step.tagline}
                </span>
                <p className="text-slate-400 leading-relaxed relative mb-4 text-[13px]">{step.description}</p>

                <div className="relative pt-3 border-t border-white/10 space-y-2">
                  {step.flow.map((line, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className={`w-4 h-4 rounded-full ${step.flowDot} flex items-center justify-center flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity mt-0.5`}>
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-[11.5px] text-slate-300 font-medium leading-snug">{line}</span>
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
              Talk to DSX About Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-slate-400 mt-3">We'll start with your communications and map a path through integration to intelligence.</p>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
