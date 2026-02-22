import { motion } from "framer-motion";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";
import logoYealink from "@assets/Yealink_1771727597343.webp";
import logoFanvil from "@assets/Fanvil-Logo-PNG-510x199-removebg-preview_1771727597345.webp";
import logoGrandstream from "@assets/grandstream-seeklogo-removebg-preview_1771727597369.webp";
import logoVtech from "@assets/VTech-logo-removebg-preview_1771727597297.webp";
import logoSwitch from "@assets/Switch-Logo-Blue_1771727597368.webp";

export default function PartnersSection() {
  const partners = [
    { name: "3CX", description: "VoIP Platform", logo: logo3cx },
    { name: "Yealink", description: "IP Phones", logo: logoYealink },
    { name: "Fanvil", description: "Communication", logo: logoFanvil },
    { name: "Grandstream", description: "Networking", logo: logoGrandstream },
    { name: "VTech", description: "Business Phones", logo: logoVtech },
    { name: "Switch", description: "Data Centers", logo: logoSwitch },
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
              className="group bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="h-12 flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  data-testid={`img-partner-${partner.name.toLowerCase()}`}
                  className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
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
