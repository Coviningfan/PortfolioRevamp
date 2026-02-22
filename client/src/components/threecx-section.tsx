import { motion } from "framer-motion";
import { CheckCircle2, Award, Globe, Users, Wrench, ShieldCheck } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function ThreeCXSection() {
  const reasons = [
    {
      icon: Award,
      title: "12 Years, One Platform",
      description: "Since day one, DSX has been a dedicated 3CX partner. We haven't bounced between providers — we've mastered one, and we're proud of it."
    },
    {
      icon: Wrench,
      title: "Engineered, Not Just Installed",
      description: "We don't do cookie-cutter setups. Every 3CX deployment is custom-engineered to fit your business workflows, call flows, and growth plans."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Expertise",
      description: "From single-office setups to multi-country deployments across 5+ countries, we've architected 3CX solutions that work everywhere."
    },
    {
      icon: ShieldCheck,
      title: "Above the Cloud",
      description: "While others offer basic cloud hosting, we go beyond — our 3CX deployments are backed by enterprise-grade data centers with 99.9% uptime."
    },
    {
      icon: Users,
      title: "AI-Enhanced 3CX",
      description: "We're pushing 3CX into the future with AI-powered contact centers, intelligent call routing, and automated customer interactions."
    },
  ];

  const milestones = [
    { year: "2013", event: "Became Official 3CX Partner" },
    { year: "2016", event: "500+ 3CX Deployments" },
    { year: "2020", event: "Cloud-First 3CX Architecture" },
    { year: "2024", event: "AI Integration with 3CX" },
    { year: "2025", event: "Next-Gen Contact Centers" },
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
              Proudly Powered by 3CX
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Why Businesses{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Choose DSX
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            12 years of innovation, 500+ deployments, and a relentless drive to push boundaries.
            We build on proven platforms like 3CX and enhance them with AI — that's the DSX difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white text-center mb-8">Our 3CX Journey</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex flex-col items-center text-center flex-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mb-3">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="text-orange-400 font-bold text-lg">{milestone.year}</div>
                  <div className="text-slate-400 text-sm mt-1">{milestone.event}</div>
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute">
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
