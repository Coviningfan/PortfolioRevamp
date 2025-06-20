import { motion } from "framer-motion";
import { Phone, Headphones, Database } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Phone,
      number: "01",
      title: "DSX Voice",
      description: "Evolving excellence in communication with flexible, cost-effective VoIP services that integrate seamlessly with your existing systems. Delivering up to 60% in cost savings compared to traditional providers.",
      gradient: "bg-gradient-to-r from-blue-600 to-orange-500",
      href: "/dsx-voice"
    },
    {
      icon: Headphones,
      number: "02", 
      title: "DSX Live",
      description: "Your dynamic communication powerhouse that redefines efficiency by seamlessly integrating with your telephone system. Advanced AI-human hybrid support for superior customer engagement.",
      gradient: "bg-gradient-to-r from-blue-600 to-orange-500",
      href: "/dsx-live"
    },
    {
      icon: Database,
      number: "03",
      title: "DSX Data", 
      description: "Virtual DataSpace Management with cutting-edge technology, delivering unparalleled reliability and performance from our state-of-the-art data center infrastructure.",
      gradient: "bg-gradient-to-r from-blue-600 to-orange-500",
      href: "/dsx-data"
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering your business with cutting-edge technology solutions designed to optimize and streamline operations
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
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`${service.gradient} w-16 h-16 rounded-lg flex items-center justify-center`}>
                    <service.icon className="text-white h-8 w-8" />
                  </div>
                  <span className="text-orange-500 font-bold text-sm">{service.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="flex gap-3">
                  <Link href={service.href} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg transition-all duration-200">
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      Contact Us
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