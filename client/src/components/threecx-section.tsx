import { motion } from "framer-motion";
import { Award, Workflow, Wrench, ShieldCheck, Sparkles, Heart } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function ThreeCXSection() {
  const reasons = [
    {
      icon: Workflow,
      title: "AI Built Around Your Workflow",
      description: "Not a generic chatbot. The DSX Edge AI follows your actual process — your questions, your routing, your calendar. Trained around how your business already operates."
    },
    {
      icon: Heart,
      title: "Communications-First, Not AI-First",
      description: "We're not a new AI startup guessing at communications. We've spent 12+ years inside business communications — now we bring AI to the place we know best."
    },
    {
      icon: Wrench,
      title: "Implementation, Not a Subscription",
      description: "DSX Edge is implemented for your business, not handed to you in a self-serve dashboard. We do the integration work so the AI is ready on day one."
    },
    {
      icon: ShieldCheck,
      title: "Foundation That Doesn't Go Down",
      description: "The AI sits on top of our own data centers and 99.9% uptime. Intelligence is only useful if the system is always there to deliver it."
    },
    {
      icon: Sparkles,
      title: "Above the Cloud",
      description: "Cloud is infrastructure. DSX Edge is intelligence. We sit above the cloud layer and turn passive phone systems into active business tools."
    },
    {
      icon: Award,
      title: "3CX Platinum Partner",
      description: "3CX is the platform we know best — the proven backbone. DSX Edge layers AI and workflow automation on top of it to make it work like a modern business tool."
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <img src={logo3cx} alt="3CX" className="h-5 w-auto brightness-0 invert opacity-90" />
            <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">
              3CX Platinum Partner
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Why Businesses{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Choose DSX Edge
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We're not a CRM. We're not a generic AI product. We're the implementer who brings
            AI to the communications layer of your business — the place where customers already reach you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                <reason.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
