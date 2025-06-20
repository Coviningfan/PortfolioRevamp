import { motion } from "framer-motion";
import { Phone, Headphones, Database } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      title: "DSX Voice",
      subtitle: "What AT&T Should Have Built",
      description: "Stop paying per-user fees. Our revolutionary capacity-based pricing cuts phone bills by 60% while delivering crystal-clear calls that actually work.",
      href: "/dsx-voice",
      gradient: "from-blue-600 to-blue-800",
      features: ["60% Cost Reduction", "No Per-User Fees", "Instant Global Reach", "Zero Downtime Guarantee"],
      icon: "💸",
      savings: "Save $371/month vs AT&T"
    },
    {
      title: "DSX Data", 
      subtitle: "Enterprise Security AT&T Can't Match",
      description: "Fortune 500-grade infrastructure at small business prices. Your data deserves better than AT&T's outdated systems.",
      href: "/dsx-data",
      gradient: "from-orange-500 to-red-600",
      features: ["Military-Grade Security", "100% Uptime SLA", "Instant Scalability", "White-Glove Migration"],
      icon: "🏰",
      savings: "Starting under $1,000/month"
    },
    {
      title: "DSX Live",
      subtitle: "AI That Actually Understands Your Customers",
      description: "While AT&T's chatbots frustrate customers, our AI creates conversations so natural, they'll think it's human.",
      href: "/dsx-live",
      gradient: "from-purple-600 to-pink-600",
      features: ["Human-Like AI", "24/7 Intelligence", "Seamless Handoffs", "150% Efficiency Boost"],
      icon: "🧠",
      savings: "Replace 10 agents with 1 solution"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            AT&T customers: See what you're missing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Smart Businesses Choose DSX</h2>
          <p className="text-xl text-slate-600">
            The solutions AT&T can't match - designed by engineers who understand your frustration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border-l-4 border-transparent hover:border-green-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Savings Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                  {service.savings}
                </div>

                <div className="relative p-8">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:animate-pulse"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <Button className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-200 group-hover:scale-105 relative overflow-hidden`}>
                      <span className="relative z-10">See The Difference</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}