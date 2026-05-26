import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Award } from "lucide-react";
import SignalOrb from "./signal-orb";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs font-semibold tracking-wide uppercase">
                Communications · Infrastructure · Intelligent Integration
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.05] tracking-tight"
            >
              Business Communications.{" "}
              <span
                className="accent-serif text-orange-400"
                style={{ fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" }}
              >
                Intelligent Integration.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl lg:max-w-none leading-relaxed"
            >
              DSX installs, manages, and supports the communication systems businesses
              depend on — VoIP, PBX, 3CX, SIP routing, connectivity, and support — backed
              by hosted infrastructure, and extended with DSX AI Enabled workflows
              integrated into the parts of the business where they actually create value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <Button
                data-testid="button-see-workflow"
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-7 py-6 text-base font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 rounded-xl group"
              >
                Explore DSX Edge
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button
                  data-testid="button-contact-hero"
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm px-7 py-6 text-base font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-xl w-full sm:w-auto"
                >
                  Talk to DSX
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>DSX Voice · 3CX Platinum Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>DSX Data · Hosted Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>12+ Years of Managed Business Systems</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <SignalOrb />
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-slate-400">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-500/60" />
                <span>Above the Cloud</span>
                <span className="text-orange-400/90">/</span>
                <span>Into the Business</span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-slate-500/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
