import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DSXVoicePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Customized Solutions tailored to your operational needs",
    "Seamless Global Integration across multiple locations",
    "High-Capacity VoIP Infrastructure with exceptional clarity",
    "Up to 60% Cost Savings compared to traditional systems",
    "Customizable User Profiles with conditional call handling",
    "Seamless Integration with third-party applications",
    "Office365 Synchronization for smart call routing",
    "Adaptive Bandwidth Utilization for optimal performance"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-gradient-dsx">DSX Voice</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Advanced Telephony Engineered for Business Efficiency
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Not just a telephony service – it's a transformative communication solution crafted to meet the diverse and dynamic needs of modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What Makes DSX Voice Unique</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="gradient-dsx w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="text-white h-4 w-4" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Optimized for Business Use</h2>
              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost-Effective Pricing</h3>
                <p className="text-slate-700 mb-4">
                  Unlike traditional per-line or per-user pricing models, DSX Voice's pricing is based on actual usage and capacity requirements, offering businesses a cost-effective, scalable solution.
                </p>
                <p className="text-slate-700">
                  This unique approach ensures that you only pay for what you need, making DSX Voice ideal for businesses of all sizes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Join the Communication Revolution</h3>
                <p className="text-slate-700 mb-6">
                  With DSX Voice, you're not just adopting a new phone system; you're embracing a new way of doing business. Our commitment to innovation, customer-centric solutions, and seamless integration makes DSX Voice the ideal partner for your communication needs.
                </p>
                <Button 
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                  className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200"
                >
                  Get Started Today
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Limited Time: Free Migration & Setup (Value: $2,500)
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Stop Overpaying for Phone Service</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Based on actual client installations, DSX Voice reduces phone bills by up to 60%
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Law Office Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Law Office</h3>
              <p className="text-sm text-slate-600 mb-4">7 Extensions</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Previous Cost:</span>
                  <span className="font-semibold text-red-600">$570/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">DSX Voice:</span>
                  <span className="font-semibold text-green-600">$199/mo</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">Savings:</span>
                    <span className="font-bold text-green-600">65%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call Center Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Center</h3>
              <p className="text-sm text-slate-600 mb-4">40+ Extensions</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Previous Cost:</span>
                  <span className="font-semibold text-red-600">$1,145/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">DSX Voice:</span>
                  <span className="font-semibold text-green-600">$686/mo</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">Savings:</span>
                    <span className="font-bold text-green-600">40%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Global Business Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Global Business</h3>
              <p className="text-sm text-slate-600 mb-4">17 Extensions Worldwide</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Previous Cost:</span>
                  <span className="font-semibold text-red-600">$670/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">DSX Voice:</span>
                  <span className="font-semibold text-green-600">$239/mo</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">Savings:</span>
                    <span className="font-bold text-green-600">64%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/10 to-orange-500/10 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The DSX Voice Difference</h3>
            <p className="text-slate-700 mb-6 max-w-3xl mx-auto">
              Unlike traditional per-line pricing, we charge based on your actual capacity needs and usage patterns. 
              This means you only pay for what you use, not what you might use.
            </p>
            <Button 
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200"
            >
              Get Your Savings Estimate
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Transform Your Communication?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Discover how DSX Voice can reduce your telephony costs by up to 60% while improving efficiency and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                onClick={() => {
                  window.location.href = "/#contact";
                }}
                className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200"
              >
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}