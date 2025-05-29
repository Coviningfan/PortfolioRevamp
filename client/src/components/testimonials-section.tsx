import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Johnathan Meyers",
      title: "CEO, Tech Solutions Inc.",
      content: "Switching to DSX Edge has been a game-changer for our business. Their integrated communication platform has streamlined our operations, enhancing team collaboration and customer engagement. The personalized support and attention to detail from the DSX team have exceeded our expectations.",
      initials: "JM",
      gradient: "gradient-dsx"
    },
    {
      name: "Gabriella Spring",
      title: "Operations Manager, Industrial Corp",
      content: "From the very first interaction, the customer service at DSX Edge has been nothing short of exceptional. Their team not only helped us identify the best communication solutions for our complex industrial environment but also provided ongoing support that has been invaluable.",
      initials: "GS",
      gradient: "gradient-dsx-orange"
    },
    {
      name: "Josh Phillips",
      title: "Director, Communications Ltd",
      content: "Switching to DSX Voice transformed our communication system. The clarity and reliability of the calls are exceptional, and the customized features fit our business needs perfectly. The DSX team was fantastic throughout, making the transition smooth and hassle-free.",
      initials: "JP",
      gradient: "bg-gradient-to-r from-blue-600 via-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600">Real testimonials from satisfied customers</p>
        </motion.div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentTestimonial].initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-slate-600">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  index === currentTestimonial 
                    ? "bg-orange-500" 
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
