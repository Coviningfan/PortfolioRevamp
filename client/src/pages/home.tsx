import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import FactsSection from "@/components/facts-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import PartnersSection from "@/components/partners-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FactsSection />
      <AboutSection />
      <TestimonialsSection />
      
      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real client examples demonstrating the impact of DSX Voice on business communication costs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Law Office Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Law Office of Michael H. Bonner</h3>
              <p className="text-slate-600 mb-6">
                California-based business law practice with emphasis on international matters. Highly computerized operations requiring efficient communication systems.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Extensions</span>
                  <span className="text-lg font-bold text-blue-600">7</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Monthly Cost</span>
                  <span className="text-lg font-bold text-blue-600">$199.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">65%</span>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Includes conference room extension and off-site extension capabilities
              </p>
            </motion.div>

            {/* Synology Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Synology Inc.</h3>
              <p className="text-slate-600 mb-6">
                Leader in NAS servers for SME markets. Call center operation with 40+ agents using 100,000+ minutes monthly in phone-intensive business operations.
              </p>
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Extensions</span>
                  <span className="text-lg font-bold text-orange-600">40+</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Monthly Cost</span>
                  <span className="text-lg font-bold text-orange-600">$686.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">46%</span>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Added 50% capacity at 16% lower cost than original system
              </p>
            </motion.div>

            {/* Synergy Homeopathic Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Synergy Homeopathic</h3>
              <p className="text-slate-600 mb-6">
                Pioneer in homeopathic software solutions. Global operation with users across California, Massachusetts, Germany, India, and Israel.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Extensions</span>
                  <span className="text-lg font-bold text-purple-600">17</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Monthly Cost</span>
                  <span className="text-lg font-bold text-purple-600">$239.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">64%</span>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                International users integrated via soft phones on computers
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Based on Actual Client Installations</h3>
              <p className="text-xl">
                DSX Voice reduces company phone costs by up to <span className="text-3xl font-bold">60%</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
