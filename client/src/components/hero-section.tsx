import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Shield, Brain, Clock, Award } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-16 overflow-hidden min-h-[95vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold tracking-wide uppercase">
              12+ Years of Innovation
            </span>
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
          >
            DSX{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent">
              Edge
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
              Above the Cloud.{" "}
              <span className="text-orange-400 font-medium">Beyond Expectations.</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            For over a decade, DSX has been engineering the future of how businesses connect.
            We don't just install phone systems — we build intelligent communication ecosystems,
            enhanced with AI that's redefining the call center.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              data-testid="button-explore-services"
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-6 text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 rounded-xl group"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/contact">
              <Button
                data-testid="button-contact-hero"
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm px-8 py-6 text-lg font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-xl"
              >
                Talk to an Expert
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-4xl mx-auto"
          >
            {[
              { icon: Shield, label: "Certified 3CX Partner", color: "text-blue-400" },
              { icon: Brain, label: "AI-Powered Solutions", color: "text-orange-400" },
              { icon: Clock, label: "12+ Years of Innovation", color: "text-emerald-400" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <span className="text-sm text-slate-300 font-medium">{item.label}</span>
              </div>
            ))}
            <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <img src={logo3cx} alt="3CX" className="h-6 w-auto brightness-0 invert opacity-80" />
              <span className="text-sm text-slate-300 font-medium">Powered by 3CX</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
