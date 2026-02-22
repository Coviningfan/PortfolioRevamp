import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, TrendingDown, Award, Handshake } from "lucide-react";

export default function FactsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const facts = [
    {
      icon: Calendar,
      value: 12,
      suffix: "+",
      title: "Years with 3CX",
      subtitle: "Dedicated partnership since 2013",
      color: "text-blue-500",
      bg: "bg-blue-50",
      ring: "ring-blue-100",
    },
    {
      icon: TrendingDown,
      value: 60,
      suffix: "%",
      title: "Cost Savings",
      subtitle: "Average client communication cost reduction",
      color: "text-orange-500",
      bg: "bg-orange-50",
      ring: "ring-orange-100",
    },
    {
      icon: Award,
      value: 500,
      suffix: "+",
      title: "3CX Deployments",
      subtitle: "Businesses running on our 3CX solutions",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      ring: "ring-emerald-100",
    },
    {
      icon: Handshake,
      value: 99,
      suffix: ".9%",
      title: "Uptime Guarantee",
      subtitle: "Enterprise-grade reliability",
      color: "text-violet-500",
      bg: "bg-violet-50",
      ring: "ring-violet-100",
    },
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
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
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
            12 Years of <span className="text-gradient-dsx">3CX Mastery</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The numbers tell the story — DSX is the name businesses trust for 3CX solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${fact.bg} ring-1 ${fact.ring} text-center group hover:shadow-lg transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm mb-5 ${fact.color}`}>
                <fact.icon className="h-7 w-7" />
              </div>
              <div className={`text-5xl font-bold ${fact.color} mb-2 tabular-nums`}>
                <AnimatedCounter value={fact.value} suffix={fact.suffix} />
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-1">{fact.title}</div>
              <div className="text-sm text-slate-500">{fact.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
