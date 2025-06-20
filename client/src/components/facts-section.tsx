import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Percent, Leaf, Handshake } from "lucide-react";

export default function FactsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const facts = [
    {
      icon: Calendar,
      value: 15,
      suffix: "",
      title: "Years of Experience",
      subtitle: "With Top-Qualified Experts",
      gradient: "gradient-dsx"
    },
    {
      icon: Percent,
      value: 60,
      suffix: "%",
      title: "Savings",
      subtitle: "Reducing client phone bills",
      gradient: "gradient-dsx-orange"
    },
    {
      icon: Leaf,
      value: 100,
      suffix: "%",
      title: "Green Energy",
      subtitle: "Switch Citadel Campus, 650 MW",
      gradient: "bg-gradient-to-r from-blue-600 via-orange-500 to-red-500"
    },
    {
      icon: Handshake,
      value: 5,
      suffix: "+",
      title: "Strategic Partnerships",
      subtitle: "Industry-leading collaborations",
      gradient: "bg-gradient-to-r from-orange-500 to-blue-600"
    }
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 frames for smooth animation
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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            While AT&T was disappointing customers...
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Were Building Something Better</h2>
          <p className="text-xl text-slate-600">
            15 years of making AT&T customers wish they'd found us sooner
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`${fact.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <fact.icon className="text-white h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                <AnimatedCounter value={fact.value} suffix={fact.suffix} />
              </div>
              <div className="text-lg font-semibold text-slate-700">{fact.title}</div>
              <div className="text-sm text-slate-600">{fact.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}