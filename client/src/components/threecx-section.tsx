import { motion } from "framer-motion";
import { Award, Network, Wrench, ShieldCheck, Sparkles, Phone } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function ThreeCXSection() {
  const reasons = [
    {
      icon: Phone,
      title: "We Start With the System Your Customers Already Use",
      description: "Before AI, before chatbots, before anything intelligent — we look at your PBX, your routing, your queues, your voicemail, your after-hours handling. That's where real automation begins."
    },
    {
      icon: Network,
      title: "VoIP & PBX Are the Beachhead",
      description: "DSX has spent 12+ years modernizing business phone systems. The communications layer isn't a credibility footnote — it's the doorway. AI is the next operational layer built on top of it."
    },
    {
      icon: Award,
      title: "3CX Platinum Partner",
      description: "3CX is the proven backbone we deploy and support. Top-tier partner status means deep platform expertise — not a generic AI vendor reselling someone else's PBX."
    },
    {
      icon: Wrench,
      title: "Implementation, Not a Subscription",
      description: "DSX Edge is implemented for your business — not handed to you in a self-serve dashboard. We do the integration work, map your call flow, and connect the intelligence layer to the systems you already run."
    },
    {
      icon: ShieldCheck,
      title: "A Foundation That Doesn't Go Down",
      description: "Communications run on our own data centers with 99.9% uptime. Intelligence is only useful if the system underneath it is always there to deliver it."
    },
    {
      icon: Sparkles,
      title: "Communications-First, Not AI-First",
      description: "We're not an AI startup guessing at communications. We're a communications company bringing AI to the place we know best — the front door of your business."
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <img src={logo3cx} alt="3CX" className="h-5 w-auto brightness-0 invert opacity-90" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wide uppercase">
              Communications-First · 3CX Platinum Partner
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            We do not start with a chatbot. We start with the{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              system your customers already use to reach you.
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Before DSX adds AI, we look at your communications foundation: your PBX, your call
            routing, your queues, your voicemail, your extensions, your after-hours handling,
            and your escalation paths. That is where real business automation begins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              data-testid={`threecx-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                <reason.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
