import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, Clock, TrendingUp, Bot, Users, Zap, ArrowRight } from "lucide-react";
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

  const comparisons = [
    {
      category: "Response Time",
      ai: "< 1 second",
      human: "45+ seconds avg",
      aiWins: true,
    },
    {
      category: "24/7 Availability",
      ai: "Always On",
      human: "Shift-dependent",
      aiWins: true,
    },
    {
      category: "Complex Problem Solving",
      ai: "Learning",
      human: "Expert Level",
      aiWins: false,
    },
    {
      category: "Empathy & Nuance",
      ai: "Improving",
      human: "Natural",
      aiWins: false,
    },
    {
      category: "Cost Per Interaction",
      ai: "$0.05 - $0.25",
      human: "$6 - $12",
      aiWins: true,
    },
    {
      category: "Simultaneous Calls",
      ai: "Unlimited",
      human: "1 at a time",
      aiWins: true,
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
            How Much Time Does the{" "}
            <span className="text-gradient-dsx">Human Call Center</span>{" "}
            Have Left?
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            AI isn't coming for your call center — it's already here. The question isn't if, but how you adapt.
            At DSX, we build the bridge between AI efficiency and human expertise, integrated directly into your 3CX system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-8 w-8 text-orange-400" />
                <h3 className="text-2xl font-bold">AI vs. Human: The Real Numbers</h3>
              </div>

              <div className="space-y-3">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">
                      {item.category}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`flex items-center gap-2 ${item.aiWins ? 'text-emerald-400' : 'text-slate-400'}`}>
                        <Bot className="h-4 w-4" />
                        <span className="text-sm font-semibold">{item.ai}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${!item.aiWins ? 'text-emerald-400' : 'text-slate-400'}`}>
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-semibold">{item.human}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                The DSX Approach: Hybrid Intelligence
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                We don't believe in replacing humans entirely. The smartest businesses are the ones that let AI handle
                the volume while humans handle the value. DSX Live integrates both — seamlessly — into your 3CX infrastructure.
              </p>
              <ul className="space-y-2">
                {[
                  "AI handles routine inquiries, freeing agents for complex issues",
                  "Seamless handoff between AI and human agents",
                  "Real-time AI coaching for human agents during calls",
                  "Predictive routing based on caller intent and history",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  <AnimatedCounter value={80} suffix="%" />
                </div>
                <div className="text-xs text-slate-600">Calls Handled by AI</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter value={60} suffix="%" />
                </div>
                <div className="text-xs text-slate-600">Cost Reduction</div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  <AnimatedCounter value={95} suffix="%" />
                </div>
                <div className="text-xs text-slate-600">Satisfaction Rate</div>
              </div>
            </div>

            <Link href="/dsx-live">
              <Button
                data-testid="button-explore-ai"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-xl py-6 text-base font-semibold group"
              >
                Explore DSX Live AI Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
