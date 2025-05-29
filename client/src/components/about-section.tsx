import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <Button className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200 group">
              Know the full story
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern data center with servers and networking equipment"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
