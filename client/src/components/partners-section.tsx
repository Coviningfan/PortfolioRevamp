import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    {
      name: "3CX Partnership",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80"
    },
    {
      name: "Yealink Partnership",
      logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80"
    },
    {
      name: "Fanvil Partnership",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80"
    },
    {
      name: "Grandstream Partnership",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80"
    },
    {
      name: "VTech Partnership",
      logo: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80"
    },
    {
      name: "Switch Partnership",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Network</h2>
          <p className="text-xl text-slate-600">
            United in Excellence: Showcasing our partnerships and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center h-24"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
