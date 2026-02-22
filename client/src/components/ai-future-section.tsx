import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, Sparkles, TrendingUp, Layers, MessageSquare, Zap, ArrowRight, Phone, BarChart3, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AIFutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          if (currentStep <= steps) {
            setCount(Math.min(Math.round(increment * currentStep), value));
          } else {
            setCount(value);
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <span>
        {prefix}{count}{suffix}
      </span>
    );
  };

  const valueAdds = [
    {
      icon: Brain,
      title: "AI-Powered Call Intelligence",
      description: "Real-time sentiment analysis, call scoring, and smart routing that turns every conversation into actionable business insight.",
    },
    {
      icon: Bot,
      title: "Intelligent Virtual Agents",
      description: "AI agents that handle inquiries naturally, qualify leads, and route to the right person — 24/7, without missing a beat.",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Know what your customers need before they call. AI-driven insights that help you anticipate demand and optimize staffing.",
    },
    {
      icon: Layers,
      title: "Seamless Integration Layer",
      description: "AI that plugs into your existing 3CX system — no rip-and-replace. Your phone system becomes smarter overnight.",
    },
    {
      icon: MessageSquare,
      title: "Omnichannel AI",
      description: "Voice, chat, email, SMS — unified under one intelligent platform that learns and improves with every interaction.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "From post-call summaries to CRM updates, AI handles the busywork so your team focuses on what matters.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4">
            The Future is Now
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
            More Than a Phone System.{" "}
            <span className="text-gradient-dsx">It's Intelligence.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            "Above the Cloud" means going beyond basic communications. DSX layers AI intelligence directly
            into your platform — transforming how your business connects, engages, and grows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {valueAdds.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-10 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-orange-400" />
                <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">The DSX Value-Add</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We Don't Just Deploy. We Transform.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Anyone can install a phone system. DSX makes it intelligent. We implement AI
                that understands your business, learns from every interaction, and delivers insights
                that drive real growth. That's what "Above the Cloud" means — it's the intelligence layer
                that sets you apart.
              </p>
              <Link href="/dsx-live">
                <Button
                  data-testid="button-explore-ai"
                  className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-xl py-5 text-base font-semibold group"
                >
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  <AnimatedCounter value={60} suffix="%" />
                </div>
                <div className="text-xs text-slate-300">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <div className="text-xs text-slate-300">AI Availability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  <AnimatedCounter value={95} suffix="%" />
                </div>
                <div className="text-xs text-slate-300">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl font-bold text-violet-400 mb-1">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-xs text-slate-300">Deployments</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
