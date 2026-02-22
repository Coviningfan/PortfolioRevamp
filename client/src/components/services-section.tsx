import { motion } from "framer-motion";
import { Phone, Brain, Shield, Wifi, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Phone,
      title: "Enterprise Voice",
      description: "Crystal-clear communications that scale with you. Whether you're a 5-person office or a 500-seat operation, your voice matters — and it should sound like it.",
      iconBg: "bg-blue-500",
      iconBgHover: "group-hover:bg-blue-600",
      accent: "border-blue-500/20",
      accentHover: "group-hover:border-blue-500/50",
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Your communications platform should learn, adapt, and work for you. AI that understands context, routes intelligently, and turns every conversation into insight.",
      iconBg: "bg-orange-500",
      iconBgHover: "group-hover:bg-orange-600",
      accent: "border-orange-500/20",
      accentHover: "group-hover:border-orange-500/50",
    },
    {
      icon: Shield,
      title: "Infrastructure & Security",
      description: "Enterprise-grade reliability built on our own data centers. 99.9% uptime isn't a promise — it's the standard. Your business never sleeps, and neither do we.",
      iconBg: "bg-violet-500",
      iconBgHover: "group-hover:bg-violet-600",
      accent: "border-violet-500/20",
      accentHover: "group-hover:border-violet-500/50",
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
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Built for Every Business
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
            Business Communications,{" "}
            <span className="text-gradient-dsx">Reimagined</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From the local pizza shop to the Fortune 500 — every business deserves communications
            that are intelligent, reliable, and built to grow with you.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mb-16 max-w-xl mx-auto"
        >
          The best products shouldn't only be available to the biggest companies.
          We made world-class communications accessible to everyone.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative bg-white rounded-2xl border ${service.accent} ${service.accentHover} p-8 h-full transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1`}
              >
                <div className="mb-6">
                  <div
                    className={`${service.iconBg} ${service.iconBgHover} w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg`}
                  >
                    <service.icon className="text-white h-7 w-7" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {[
              { icon: Users, text: "5 users or 5,000" },
              { icon: Wifi, text: "Cloud or on-premise" },
              { icon: Zap, text: "Deploy in days, not months" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-blue-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
