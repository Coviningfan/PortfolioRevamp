import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <span className="text-gradient-dsx">The Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              The Genesis: Pioneering a New Era
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">The Foundation: DSX Data and DSX Voice</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">DSX Data - The Early Vision (2009)</h3>
                <p className="text-slate-700 mb-4">
                  DSX Data's story began with a vision to empower small and medium-sized businesses with advanced data management solutions. Rooted in a 20,000 sq. ft. data center, the founders aimed to deliver more than just hardware solutions.
                </p>
                <p className="text-slate-700">
                  They envisioned a service that combined top-tier data center capabilities with strategic business and technical advice.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">DSX Voice (2010 and beyond): Transforming Communication</h3>
                <p className="text-slate-700 mb-4">
                  Concurrently, DSX Voice emerged as a pioneering force in the VoIP telephony landscape. Its inception was driven by a need for flexible, efficient, and cost-effective communication solutions.
                </p>
                <p className="text-slate-700">
                  DSX Voice quickly became known for its customized approach to telephony, providing scalable solutions tailored to diverse business needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visionaries */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Visionaries Behind the Venture</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Joseph P. Berardi</h3>
              <p className="text-blue-600 font-semibold mb-4">Co-Founder and CEO</p>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">A Leader with a Midas Touch</h4>
              <p className="text-slate-700 mb-4">
                Joseph's background in transforming technologies into practical business solutions played a crucial role in shaping the direction of both DSX Data and DSX Voice. His leadership was marked by a keen sense of market trends and an uncanny ability to turn challenges into opportunities.
              </p>
              <p className="text-slate-700">
                Prior to founding DSX DATA and DSX VOICE, he was CEO and CTO of several companies in the broadcast television industry where he played a major role in moving the industry forward by transitioning from tape-based systems to IT-based systems for production, transmission, and archival storage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kirk Hurford</h3>
              <p className="text-orange-600 font-semibold mb-4">Co-Founder and CTO</p>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">The Technological Maestro</h4>
              <p className="text-slate-700 mb-4">
                Kirk's expertise in software development, combined with his experience in hardware manufacturing, allowed him to create solutions that were technically sound and business-savvy. His contributions were pivotal in establishing the robust technical infrastructure of DSX Data.
              </p>
              <p className="text-slate-700">
                Kirk developed DSX DATA's first data center and is the architect of the DSX VOICE service. Before founding DSX DATA and DSX VOICE, he served as CEO and CTO of a number of companies and worked with the National Security Agency and the Department of the Navy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merging Paths */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Merging Paths – The Creation of DSX Edge</h2>
            
            <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A Strategic Decision</h3>
              <p className="text-slate-700 mb-6">
                The decision to merge DSX Data and DSX Voice into DSX Edge was driven by a vision to create a unified platform that could offer end-to-end technology solutions. This move marked a significant shift in strategy, positioning DSX Edge as a holistic provider of technology services.
              </p>
              
              <h4 className="text-xl font-semibold text-slate-900 mb-4">The Synergy of DSX Edge</h4>
              <p className="text-slate-700">
                The unification brought together the strengths of both companies, creating a synergy that allowed for the delivery of integrated services ranging from advanced data management to innovative telephony solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Present and Future */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">DSX Edge – The Present and The Future</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">A Legacy of Excellence</h3>
                <p className="text-slate-700">
                  Today, DSX Edge stands as a monument to innovation, integration, and customer-focused solutions. It continues to push the boundaries of technology, offering services that are at the forefront of the digital revolution.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Vision for the Future</h3>
                <p className="text-slate-700">
                  The leadership at DSX Edge is continuously looking forward, embracing new technologies and adapting to changing market dynamics. Their commitment to innovation and excellence remains the driving force behind the company's enduring success.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-orange-500/10 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Epilogue: A Continuous Journey of Innovation</h3>
              <p className="text-slate-700 text-lg">
                The story of DSX Edge is far from complete. As the digital landscape evolves, so too does the company, constantly seeking new ways to serve its clients and stay ahead of the technological curve. The legacy of DSX is one of perpetual growth, innovation, and a relentless pursuit of excellence.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Be Part of Our Story?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Join the thousands of businesses who have transformed their operations with DSX Edge's innovative solutions.
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
                  Contact Us Today
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