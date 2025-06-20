import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Michael H. Bonner",
      title: "Law Office of Michael H. Bonner",
      content: "DSX Voice has revolutionized our law practice's communication efficiency. With 7 extensions including conference room and off-site capabilities, we've achieved 65% cost savings while maintaining the high-quality service our clients expect.",
      initials: "MB",
      gradient: "gradient-dsx"
    },
    {
      name: "Synology Operations Team",
      title: "Synology Inc.",
      content: "As a leader in NAS servers, our call center handles 100,000+ minutes monthly. DSX Voice added 50% to our capacity at 16% lower cost than our original system. The scalability and reliability have been exceptional for our phone-intensive business.",
      initials: "SY",
      gradient: "gradient-dsx-orange"
    },
    {
      name: "Synergy Homeopathic",
      title: "Global Homeopathic Software Solutions",
      content: "With 17 users spread across California, Massachusetts, Germany, India, and Israel, DSX Voice seamlessly connects our global team. The international integration and soft phone capabilities have transformed our worldwide operations.",
      initials: "SH",
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
