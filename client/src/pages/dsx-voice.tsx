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
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">DSX Voice</span>
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

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-xl text-slate-600">
              Comprehensive communication solutions designed for modern business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg"
              >
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Join the Communication Revolution</h3>
              <p className="text-slate-700 mb-6">
                With DSX Voice, you're not just adopting a new phone system; you're embracing a new way of doing business. Our commitment to innovation, customer-centric solutions, and seamless integration makes DSX Voice the ideal partner for your communication needs.
              </p>
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg transition-all duration-200">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Cost Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Client Cost Comparisons</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Actual installations demonstrating significant cost reductions across diverse business environments
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Law Office Detailed Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Law Office of Michael H. Bonner</h3>
                <p className="text-slate-600 text-sm">California Business Law Practice</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Extensions</span>
                    <span className="text-xl font-bold text-blue-600">7</span>
                  </div>
                  <div className="text-xs text-slate-500">Conference room + off-site extensions</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-600 mb-1">Original Cost</div>
                    <div className="text-lg font-bold text-red-600">$570.00</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-600 mb-1">DSX Voice</div>
                    <div className="text-lg font-bold text-green-600">$199.95</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-4 text-center text-white">
                  <div className="text-sm mb-1">Total Savings</div>
                  <div className="text-3xl font-bold">65%</div>
                  <div className="text-sm">$370.05/month saved</div>
                </div>
              </div>
              
              <div className="text-xs text-slate-500">
                Highly computerized practice with emphasis on international business law matters
              </div>
            </motion.div>

            {/* Synology Detailed Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Synology Inc.</h3>
                <p className="text-slate-600 text-sm">NAS Server Market Leader</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Extensions</span>
                    <span className="text-xl font-bold text-orange-600">40+</span>
                  </div>
                  <div className="text-xs text-slate-500">Call center with 100,000+ minutes/month</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-600 mb-1">Original Cost</div>
                    <div className="text-lg font-bold text-red-600">$1,145.00</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-600 mb-1">DSX Voice</div>
                    <div className="text-lg font-bold text-green-600">$686.00</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-4 text-center text-white">
                  <div className="text-sm mb-1">Total Savings</div>
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-sm">$459.00/month saved</div>
                </div>
              </div>
              
              <div className="text-xs text-slate-500">
                Added 50% capacity at 16% lower cost than original capacity pricing
              </div>
            </motion.div>

            {/* Synergy Homeopathic Detailed Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-600"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Synergy Homeopathic</h3>
                <p className="text-slate-600 text-sm">Global Software Solutions</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Extensions</span>
                    <span className="text-xl font-bold text-purple-600">17</span>
                  </div>
                  <div className="text-xs text-slate-500">Global users across 5 countries</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-600 mb-1">Original Cost</div>
                    <div className="text-lg font-bold text-red-600">$670.65</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-600 mb-1">DSX Voice</div>
                    <div className="text-lg font-bold text-green-600">$239.00</div>
                    <div className="text-xs text-slate-500">per month</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-4 text-center text-white">
                  <div className="text-sm mb-1">Total Savings</div>
                  <div className="text-3xl font-bold">64%</div>
                  <div className="text-sm">$431.65/month saved</div>
                </div>
              </div>
              
              <div className="text-xs text-slate-500">
                California HQ connecting international users via soft phones
              </div>
            </motion.div>
          </div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Proven Cost Reduction</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">Average 56%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">$1,260</div>
                <div className="text-sm opacity-90">Total Monthly Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">64 Users</div>
                <div className="text-sm opacity-90">Successfully Migrated</div>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              Based on actual client installations across diverse industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Enterprise-Class Business Telephones</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced. Easy-to-Use. Affordable. We rigorously test the latest telephony technologies to bring you high-performance, reliable business phones.
            </p>
          </motion.div>

          {/* Phone Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Premium Phones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Phones</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-800">Yealink T54W</h4>
                  <p className="text-sm text-slate-600">Built-in Wi-Fi & Bluetooth, color display, HD audio</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Yealink W80 DECT</h4>
                  <p className="text-sm text-slate-600">Multi-cell wireless system with seamless roaming</p>
                </div>
              </div>
            </motion.div>

            {/* Mid-Range Phones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mid-Range Solutions</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-orange-800">Grandstream GXP2135</h4>
                  <p className="text-sm text-slate-600">Multiple lines, programmable keys, robust SIP compatibility</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800">VTech VSP735</h4>
                  <p className="text-sm text-slate-600">Business-class features with 3-year warranty</p>
                </div>
              </div>
            </motion.div>

            {/* Economy Phones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Economy Options</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-800">Fanvil X3U</h4>
                  <p className="text-sm text-slate-600">Compact SIP phone with color screen and HD voice</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Grandstream GXP1625</h4>
                  <p className="text-sm text-slate-600">Simple, durable, and reliable for basic use</p>
                </div>
              </div>
            </motion.div>

            {/* Hotel & Hospitality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hotel Solutions</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-800">Fanvil X210</h4>
                  <p className="text-sm text-slate-600">Large display, programmable keys for front desk use</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">VTech VSP600 Series</h4>
                  <p className="text-sm text-slate-600">Cordless flexibility for mobile staff</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lifetime Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Lifetime Guarantee</h3>
            <p className="text-lg mb-6">
              All DSX Voice phones come with a lifetime guarantee. If you experience any issues, we'll repair or replace your phone at no charge—no questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2">Lab Tested</h4>
                <p className="text-sm opacity-90">Every phone tested in controlled environments</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Field Proven</h4>
                <p className="text-sm opacity-90">Real-world office testing for reliability</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Expert Support</h4>
                <p className="text-sm opacity-90">Ongoing technical support and guidance</p>
              </div>
            </div>
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
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg transition-all duration-200">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}