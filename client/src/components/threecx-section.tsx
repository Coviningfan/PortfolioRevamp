import { motion } from "framer-motion";
import { Award, Network, Wrench, ShieldCheck, Sparkles, Layers } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function ThreeCXSection() {
  const reasons = [
    {
      icon: Layers,
      title: "3CX as the Communications Platform",
      description: "3CX provides the modern PBX, calling, and unified communications platform. DSX Edge provides the implementation, integration, workflow design, and support around it — turning a platform into a business solution.",
    },
    {
      icon: Award,
      title: "3CX Platinum Partner",
      description: "Top-tier partner status means deep platform expertise, certified engineers, and direct vendor relationships. Not a generic AI vendor reselling someone else's PBX.",
    },
    {
      icon: Sparkles,
      title: "DSX AI Enabled — On Top of the Platform",
      description: "DSX Edge layers DSX AI Enabled workflows on top of the 3CX communications platform — intake, qualification, routing, notifications, and operational intelligence — owned and supported by DSX, not dependent on any single vendor roadmap.",
    },
    {
      icon: Network,
      title: "Communications, Hosting & Connectivity",
      description: "DSX brings the full stack: managed PBX, SIP trunking, business connectivity, and hosted infrastructure under one partner — not stitched together from disconnected vendors.",
    },
    {
      icon: Wrench,
      title: "Implementation & Integration, Not a Subscription",
      description: "DSX Edge is implemented for your business. We design the call flow, integrate CRM and calendars, connect workflows, and build the intelligent layer around the platform you depend on.",
    },
    {
      icon: ShieldCheck,
      title: "A Foundation That Stays Up",
      description: "Communications run on data-center-backed infrastructure with 99.9% uptime targets. Reliable communications, reliable hosting, reliable support — the credibility behind the intelligent layer.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
            <img src={logo3cx} alt="3CX" className="h-5 w-auto brightness-0 invert opacity-90" />
            <span className="text-blue-200 text-sm font-semibold tracking-wide uppercase">
              3CX Platinum Partner · Communications Platform
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            The platform is 3CX.{" "}
            <span className="accent-serif text-orange-300">
              The implementation, integration, and intelligence is DSX Edge.
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            3CX is the modern PBX and unified communications platform we build on. DSX Edge
            adds the implementation, workflow design, integration, support, and business-specific
            intelligence around it.
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/40 transition-all duration-300 group"
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
