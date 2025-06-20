import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Zap, Leaf, Building, Globe, Users } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DataCenterPage() {
  const features = [
    {
      icon: Zap,
      title: "Massive Scale and Power",
      description: "Up to 650 megawatts of power, making it the world's most powerful colocation data center. This scale ensures we can cater to any demand with unwavering reliability."
    },
    {
      icon: Leaf,
      title: "100% Renewable Energy",
      description: "The campus is powered entirely by renewable energy sources, supporting our commitment to environmental sustainability."
    },
    {
      icon: Globe,
      title: "Unrivaled Connectivity",
      description: "Dedicated fiber and connectivity options including MPLS, IP, Transport, SIP, and SD-WAN guarantee high-speed, reliable connections."
    },
    {
      icon: Shield,
      title: "Fortress-like Security",
      description: "Multi-layered security protocols, including physical and cyber measures, ensure the utmost protection of our data infrastructure."
    }
  ];

  const companies = [
    "Amazon", "Google", "eBay", "Microsoft", "Apple", "Netflix"
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
              <span className="text-gradient-dsx">State-of-the-Art Data Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Hosted at Citadel Campus
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Unparalleled Infrastructure and Security at one of the most advanced and secure data centers in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              DSX's data management and communication solutions are anchored by our infrastructure hosted at the Citadel Campus of Switch, one of the most advanced and secure data centers in the world. Located in Tahoe Reno, Nevada, this facility is not just a data center; it's a testament to cutting-edge technology, sustainability, and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* World-Class Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Features of the Citadel Campus</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
              >
                <div className="gradient-dsx w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leaders */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Hosting Alongside Industry Leaders</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="gradient-dsx w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Building className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">A Hub for Top-Notch Companies</h3>
                </div>
                <p className="text-slate-700 mb-6">
                  The Citadel Campus is trusted by over 100 of the world's most respected companies, including giants like Amazon, Google, and eBay. This co-location with industry leaders is not just about prestige; it's a testament to the level of security and reliability that the campus offers.
                </p>

                <div className="flex items-center mb-4">
                  <div className="gradient-dsx-orange w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="text-white h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Security By Association</h4>
                </div>
                <p className="text-slate-700">
                  The presence of these global corporations, many of which have some of the most stringent security requirements, underlines the fact that the data center's security protocols are of the highest standard. By hosting our infrastructure at the Citadel Campus, we ensure that DSX's data solutions benefit from the same level of security and operational excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-6 text-center">Trusted by Global Leaders</h4>
                <div className="grid grid-cols-2 gap-4">
                  {companies.map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200"
                    >
                      <span className="text-slate-700 font-medium">{company}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 text-center mt-6">
                  And 90+ other world-class companies
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">DSX and the Citadel Campus: A Partnership for the Future</h2>

            <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                By choosing the Citadel Campus of Switch for our data center needs, DSX is not just investing in state-of-the-art infrastructure; we are committing to a future where data security, sustainability, and operational excellence are paramount.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our clients can rest assured that their data is managed in a facility that is trusted by global leaders, guaranteeing a level of service and security that is second to none.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience World-Class Infrastructure</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Discover how our partnership with the Citadel Campus ensures your data receives the same level of protection trusted by industry giants.
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