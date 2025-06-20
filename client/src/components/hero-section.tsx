import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-gradient-orange text-sm font-semibold tracking-wide uppercase">
              Above the Cloud
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Your Trusted Partner for<br />
            <span className="text-gradient-dsx">Unified, Innovative</span><br />
            Communication and Data Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto"
          >
            Empowering your business with cutting-edge technology solutions designed to optimize and streamline operations through advanced communication and data management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Join 500+ smart businesses who switched from AT&T</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>99.9% uptime guarantee (better than AT&T)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Real humans answer in under 30 seconds</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("services")}
              className="gradient-dsx-orange text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group"
            >
              <span className="group-hover:animate-pulse">Stop Overpaying AT&T - See Your Savings</span>
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                60% Off
              </span>
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Free Audit: Find Hidden Costs</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gradient accent */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-orange-500 to-red-500"></div>
    </section>
  );
}