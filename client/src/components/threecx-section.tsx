import { motion } from "framer-motion";
import { Award, Network, Wrench, ShieldCheck, Sparkles, Layers } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function ThreeCXSection() {
  const reasons = [
    {
      icon: Layers,
      title: "3CX is the Phone Platform",
      description: "3CX gives you the phone system. DSX gives you the install, the integrations, the call flows, and the support. A platform alone doesn't run a business — a partner does.",
    },
    {
      icon: Award,
      title: "3CX Platinum Partner",
      description: "Top-tier partner status. Certified engineers. Direct line to the vendor. A real communications company — not a generic AI startup reselling someone else's phones.",
    },
    {
      icon: Network,
      title: "One Vendor for the Whole Stack",
      description: "Phones, trunking, connectivity, hosting, support — from one partner. One number to call when something needs attention. (It rarely does.)",
    },
    {
      icon: Sparkles,
      title: "AI Where It Actually Helps",
      description: "When the foundation is solid, we add AI to the parts that move the needle: answering after hours, qualifying leads, booking appointments. Optional, not the whole pitch.",
    },
    {
      icon: Wrench,
      title: "Built for Your Business — Not a SaaS Login",
      description: "DSX Edge is implemented, not subscribed-to. We design the call flow, wire up the CRM, connect the calendar, and tune the system to how your team actually works.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime — In Writing",
      description: "Data-center-backed infrastructure with a 99.9% uptime SLA. Reliable phones, reliable hosting. The foundation everything else stands on.",
    },
  ];

  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="brand-halo inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-sm">
            <img src={logo3cx} alt="3CX" className="h-5 w-auto brightness-0 invert opacity-90" />
            <span className="text-blue-100 text-sm font-semibold tracking-wide uppercase">
              3CX Platinum Partner · Highest Tier
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            3CX is the platform.{" "}
            <span className="accent-serif text-orange-300">
              DSX is the partner who makes it work.
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            3CX gives you the phone system. We deliver the install, the integrations, the call flows,
            the hosting, and the support — same team, for 12 years. When you're ready, we add AI
            on top. One partner. One bill. One number to call.
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
              className="card-glass card-sheen hover-lift rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/[0.07] group"
              data-testid={`threecx-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
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
