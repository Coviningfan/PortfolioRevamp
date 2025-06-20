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
                <Link href="/#contact">
                  <Button className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
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
                <Button className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200">
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