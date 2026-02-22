import { motion } from "framer-motion";
import { Phone, Headphones, Database, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Phone,
      number: "01",
      title: "DSX Voice",
      description: "Flexible, cost-effective VoIP services that integrate seamlessly with your existing systems. Save up to 60% compared to traditional providers.",
      href: "/dsx-voice",
      color: "blue",
      iconBg: "bg-blue-500",
      iconBgHover: "group-hover:bg-blue-600",
      accent: "border-blue-500/20",
      accentHover: "group-hover:border-blue-500/50",
      badge: "bg-blue-50 text-blue-600",
    },
    {
      icon: Headphones,
      number: "02",
      title: "DSX Live",
      description: "AI-human hybrid support that redefines customer engagement. Seamless integration with your telephone system for superior efficiency.",
      href: "/dsx-live",
      color: "orange",
      iconBg: "bg-orange-500",
      iconBgHover: "group-hover:bg-orange-600",
      accent: "border-orange-500/20",
      accentHover: "group-hover:border-orange-500/50",
      badge: "bg-orange-50 text-orange-600",
    },
    {
      icon: Database,
      number: "03",
      title: "DSX Data",
      description: "Virtual DataSpace Management with unparalleled reliability and performance from our state-of-the-art data center infrastructure.",
      href: "/dsx-data",
      color: "violet",
      iconBg: "bg-violet-500",
      iconBgHover: "group-hover:bg-violet-600",
      accent: "border-violet-500/20",
      accentHover: "group-hover:border-violet-500/50",
      badge: "bg-violet-50 text-violet-600",
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">Our Services</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Cutting-edge technology solutions designed to optimize and streamline your business operations
          </p>
        </motion.div>

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
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`${service.iconBg} ${service.iconBgHover} w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg`}
                  >
                    <service.icon className="text-white h-7 w-7" />
                  </div>
                  <span className={`${service.badge} text-xs font-bold px-3 py-1 rounded-full`}>
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.description}</p>
                <div className="flex gap-3 mt-auto">
                  <Link href={service.href} className="flex-1">
                    <Button
                      data-testid={`button-learn-${service.title.toLowerCase().replace(' ', '-')}`}
                      className="w-full bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 rounded-xl group/btn"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
