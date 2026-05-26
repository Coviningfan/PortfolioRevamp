import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Michael H. Bonner",
      title: "Law Office of Michael H. Bonner",
      content: "DSX has revolutionized our law practice's communication efficiency. With 7 extensions including conference room and off-site capabilities, we've achieved 65% cost savings while maintaining the high-quality service our clients expect.",
      initials: "MB",
      savings: "65%",
    },
    {
      name: "Synology Operations Team",
      title: "Synology Inc.",
      content: "As a leader in NAS servers, our operation handles 100,000+ minutes monthly. DSX added 50% to our capacity at 16% lower cost than our original system. The scalability and reliability have been exceptional for our high-volume business.",
      initials: "SY",
      savings: "46%",
    },
    {
      name: "Synergy Homeopathic",
      title: "Global Homeopathic Software Solutions",
      content: "With 17 users spread across California, Massachusetts, Germany, India, and Israel, DSX seamlessly connects our global team. The international integration and soft phone capabilities have transformed our worldwide operations.",
      initials: "SH",
      savings: "64%",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 text-orange-200 text-sm font-semibold mb-4 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            What Our <span className="accent-serif text-orange-300">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            The communications backbone DSX Edge is built on — proven in real businesses.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-4 left-6 opacity-15 pointer-events-none">
            <Quote className="h-16 w-16 text-blue-300" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative card-glass card-sheen hover-lift rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mb-3">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].initials}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-300">
                      {testimonials[currentTestimonial].savings}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">saved</div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-slate-400">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              data-testid="button-testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  data-testid={`button-testimonial-dot-${index}`}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-blue-400 to-orange-400 w-8"
                      : "bg-white/20 w-2 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              data-testid="button-testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
