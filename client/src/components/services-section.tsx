import { motion } from "framer-motion";
import { Phone, Headphones, Database } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Phone,
      number: "01",
      title: "Voice Solutions",
      description: "Evolving excellence in communication with flexible, cost-effective VoIP services that integrate seamlessly with your existing systems.",
      gradient: "gradient-dsx"
    },
    {
      icon: Headphones,
      number: "02", 
      title: "DSX Live",
      description: "Your dynamic communication powerhouse that redefines efficiency by seamlessly integrating with your telephone system.",
      gradient: "gradient-dsx-orange"
    },
    {
      icon: Database,
      number: "03",
      title: "DSX Data", 
      description: "Virtual DataSpace Management with cutting-edge technology, delivering unparalleled reliability and performance from our state-of-the-art data center.",
      gradient: "bg-gradient-to-r from-blue-600 via-orange-500 to-red-500"
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
            Empowering your business with cutting-edge technology solutions
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
                <button className="text-blue-600 font-semibold hover:text-orange-500 transition-colors duration-200 group-hover:underline">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
