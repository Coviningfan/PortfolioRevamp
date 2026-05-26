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
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="brand-halo inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 text-xs font-semibold tracking-wide uppercase">
                3CX Platinum Partner · 12+ Years · AI Agents Built In
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.05] tracking-tight"
            >
              Your phone system,{" "}
              <span
                className="accent-serif text-orange-400"
                style={{ fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" }}
              >
                with an AI agent inside.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-slate-300 mb-3 max-w-2xl lg:max-w-none leading-relaxed"
            >
              DSX runs the calls, the routing, and the infrastructure. Then we add{" "}
              <span className="text-white font-semibold">AI agents</span> that answer the phone,
              qualify the caller, update your CRM, and book the appointment — around the clock.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base text-orange-200/90 mb-8 max-w-2xl lg:max-w-none italic"
            >
              A missed call is a missed customer. Your AI agent doesn't miss calls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <Button
                data-testid="button-see-workflow"
                onClick={() => scrollToSection("services")}
                size="lg"
                className="btn-shimmer bg-gradient-to-r from-blue-600 to-orange-500 text-white px-7 py-6 text-base font-semibold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 transform hover:-translate-y-0.5 rounded-xl group"
              >
                See How Agents Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button
                  data-testid="button-contact-hero"
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm px-7 py-6 text-base font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-500 rounded-xl w-full sm:w-auto"
                >
                  Get a Free Workflow Audit
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                <span><span className="text-white font-semibold">3CX</span> Platinum Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span><span className="text-white font-semibold">Up to 60%</span> cost reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" style={{ animationDelay: "1s" }} />
                <span><span className="text-white font-semibold">99.9%</span> uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" style={{ animationDelay: "1.5s" }} />
                <span><span className="text-white font-semibold">12+ yrs</span> deploying real systems</span>
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
