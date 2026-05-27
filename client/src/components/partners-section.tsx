import { motion } from "framer-motion";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";
import logoYealink from "@assets/Yealink_1771727597343.webp";
import logoFanvil from "@assets/Fanvil-Logo-PNG-510x199-removebg-preview_1771727597345.webp";
import logoGrandstream from "@assets/grandstream-seeklogo-removebg-preview_1771727597369.webp";
import logoSwitch from "@assets/141-1413900_switch-logo-switch-data-center-logo-clipart-remov_1771728017696.webp";

export default function PartnersSection() {
  const partners = [
    { name: "3CX", logo: logo3cx, w: 3000, h: 2000 },
    { name: "Yealink", logo: logoYealink, w: 600, h: 600 },
    { name: "Fanvil", logo: logoFanvil, w: 510, h: 199 },
    { name: "Grandstream", logo: logoGrandstream, w: 674, h: 370 },
    { name: "Switch", logo: logoSwitch, w: 320, h: 320 },
  ];

  return (
    <section className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Trusted Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Our Network</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group card-glass card-sheen hover-lift rounded-xl p-6 hover:border-blue-400/50 flex items-center justify-center w-[calc(20%-1rem)] min-w-[140px]"
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} — DSX Edge partner`}
                  width={partner.w}
                  height={partner.h}
                  loading="lazy"
                  decoding="async"
                  data-testid={`img-partner-${partner.name.toLowerCase()}`}
                  className="max-h-12 max-w-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300 mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
