import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About DSX Edge</h2>
            <p className="text-xl text-slate-600 mb-6">
              Your Unified Solution for Advanced Communication and Data Management.
            </p>
            <p className="text-slate-600 mb-6">
              DSX Edge represents the successful integration of DSX Voice and DSX Data, uniting pioneering communication services with expert data management solutions. Our evolution is a response to the growing need for cohesive, end-to-end technology solutions in the business world.
            </p>
            <p className="text-slate-600 mb-8">
              Leveraging the strengths of VoIP innovations and robust data handling capabilities, we offer a comprehensive suite of services designed to optimize and streamline business operations.
            </p>
            <Link href="/about">
              <Button className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200 group">
                Know the full story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A Legacy with Innovation</h3>
              <p className="text-slate-600 text-lg">
                Founded in 2009, we continue to redefine business communication with cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
