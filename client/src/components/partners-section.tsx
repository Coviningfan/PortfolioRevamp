import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    { name: "3CX", description: "VoIP Platform" },
    { name: "Yealink", description: "IP Phones" },
    { name: "Fanvil", description: "Communication" },
    { name: "Grandstream", description: "Networking" },
    { name: "VTech", description: "Business Phones" },
    { name: "Switch", description: "Data Centers" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Trusted Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Network</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-2xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                {partner.name}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {partner.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
