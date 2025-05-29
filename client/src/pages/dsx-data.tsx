import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Shield, Server, Zap } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DSXDataPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const coreOfferings = [
    {
      icon: Server,
      title: "Customized Data Solutions",
      description: "From server hosting to advanced data storage and backup services, providing bespoke solutions that align with your specific business requirements."
    },
    {
      icon: Shield,
      title: "Robust Infrastructure",
      description: "State-of-the-art data center featuring cutting-edge technology and substantial power capacity, guaranteeing the highest levels of data security and uptime."
    },
    {
      icon: Zap,
      title: "Enterprise-Grade Bandwidth",
      description: "High-speed, uninterrupted internet connectivity, crucial for seamless business operations with 100% uptime guarantee."
    }
  ];

  const advantages = [
    "Scalable and Flexible Services for enterprises of all sizes",
    "100% Uptime Guarantee for continuous data access",
    "Comprehensive Support with round-the-clock professional assistance",
    "Business-Centric Approach enhancing operational efficiency",
    "Transparent and Predictable Pricing with no surprises",
    "Strategic Partnership in navigating data management complexities"
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
              <span className="text-gradient-dsx">DSX Data</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Advanced Virtual DataSpace Management
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Sophisticated and secure data management solutions that address the complex data needs of modern businesses, ensuring both reliability and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Offerings of DSX Data</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {coreOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-slate-100"
              >
                <div className="gradient-dsx w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <offering.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{offering.title}</h3>
                <p className="text-slate-600">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose DSX Data?</h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
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
                    <p className="text-slate-700">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">IT Consultant Services</h3>
                <p className="text-slate-700 mb-4">
                  In the dynamic world of IT consulting, you're often expected to be a jack-of-all-trades. Our IT Consultant Service is designed to alleviate these pressures, allowing you to focus on what you do best: strategizing and enhancing your client's business efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Strategic Partnership</h3>
                <p className="text-slate-700 mb-6">
                  DSX Data is more than a service provider; we are your strategic partner in navigating the complexities of modern data management. Our blend of technical excellence and business insight ensures that your data solutions are strategically aligned with your business objectives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tailored Solutions, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every business has unique data management needs. Our pricing reflects this diversity, offering bespoke solutions that align with your specific requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Standard Solutions</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Under $1,000/month</div>
              <p className="text-slate-600 mb-6">
                For many clients, comprehensive data solutions including hosting, bandwidth, and support fall under this monthly fee.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Flexible hosting packages</li>
                <li>• Predictable monthly costs</li>
                <li>• Scalable pricing</li>
                <li>• No hidden charges</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Enterprise Solutions</h3>
              <div className="text-3xl font-bold text-orange-600 mb-4">$5,000+/month</div>
              <p className="text-slate-600 mb-6">
                For larger, more complex needs, we offer premium solutions for enterprise-level requirements.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Custom high-end solutions</li>
                <li>• Enterprise-grade infrastructure</li>
                <li>• Dedicated support team</li>
                <li>• Advanced security features</li>
              </ul>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Elevate Your Data Management</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Experience the transformative power of DSX Data, where advanced technology meets tailored business strategy.
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
                  Get Your Custom Quote
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