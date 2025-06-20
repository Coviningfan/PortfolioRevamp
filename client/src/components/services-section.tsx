import { motion } from "framer-motion";
import InteractiveServiceCards from "./interactive-service-cards";

export default function ServicesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of communication and data solutions designed to transform your business operations.
          </p>
        </motion.div>

        <InteractiveServiceCards />
      </div>
    </section>
  );
}