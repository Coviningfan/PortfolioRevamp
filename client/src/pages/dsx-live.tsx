import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Bot, Users, MessageSquare, Phone } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DSXLivePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const coreOfferings = [
    {
      icon: Bot,
      title: "AI-Powered Contact Center",
      description: "Integrates cutting-edge AI agents for intelligent, natural interactions, seamlessly embedded within your existing telephony systems for fluid customer engagement."
    },
    {
      icon: Users,
      title: "Hybrid Human-AI Support",
      description: "Expertly trained human agents handle complex queries, while AI manages routine interactions, ensuring a perfect balance of efficiency and empathy."
    },
    {
      icon: MessageSquare,
      title: "Multichannel Engagement",
      description: "Connect with customers via voice, email, SMS, and web chat, providing a cohesive experience across all touchpoints."
    },
    {
      icon: Phone,
      title: "Customizable Interaction Flows",
      description: "Design tailored call flows, ring groups, and auto attendants to match your unique business needs and processes."
    }
  ];

  const advantages = [
    "Business-Centric Approach mirroring your brand's voice and ethos",
    "Scalable and Flexible design adapting to fluctuating call volumes",
    "Transparent Operations with unified customer experience",
    "Seamless Office365 Integration for automated call routing",
    "24/7 Availability with AI-driven systems and human oversight",
    "Professional, distraction-free customer interactions"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-gradient-dsx">DSX Live</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Next-Generation Contact Center Excellence
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
              Revolutionizing contact center operations by blending advanced AI-driven automation with expert human support for seamless, multichannel customer interactions.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">150%</div>
                <div className="text-slate-600">Efficiency Increase</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-slate-600">AI Availability</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-slate-600">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Offerings of DSX Live</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {coreOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 border border-slate-100"
              >
                <div className="gradient-dsx w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <offering.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{offering.title}</h3>
                <p className="text-slate-600 text-sm">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose DSX Live?</h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="gradient-dsx w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="text-white h-4 w-4" />
                    </div>
                    <p className="text-slate-700">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Customer Support Consultant</h3>
                <p className="text-slate-700 mb-4">
                  In the fast-paced world of customer service, businesses face the challenge of balancing efficiency with personalized care. At DSX Live, we understand these pressures.
                </p>
                <p className="text-slate-700">
                  Our hybrid AI-human solution alleviates these challenges, letting you focus on strategic growth while we deliver exceptional customer experiences tailored to your business.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Transformative Solution</h3>
                <p className="text-slate-700 mb-6">
                  DSX Live empowers your business with a transformative contact center solution, combining AI-driven efficiency with human expertise to elevate customer engagement and drive operational success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tailored Solutions, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every business has unique customer engagement needs. Our pricing reflects this diversity, offering customized plans that align with your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">AI-Driven Solutions</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Under $1,000/month</div>
              <p className="text-slate-600 mb-6">
                For many clients, comprehensive AI-driven solutions, including voice and multichannel support, fall within this range.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Voice, email, SMS, web chat support</li>
                <li>• AI-only or hybrid AI-human models</li>
                <li>• Predictable monthly costs</li>
                <li>• Scalable pricing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Premium Hybrid Solutions</h3>
              <div className="text-3xl font-bold text-orange-600 mb-4">$5,000+/month</div>
              <p className="text-slate-600 mb-6">
                For larger, more complex needs, premium hybrid solutions combining AI and human expertise.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Custom high-end hybrid solutions</li>
                <li>• Dedicated human agent teams</li>
                <li>• Advanced AI customization</li>
                <li>• Enterprise-level support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Elevate Your Customer Engagement</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Transform your customer service with DSX Live's hybrid AI-human approach, delivering exceptional experiences around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/#contact">
                <Button className="gradient-dsx-orange text-white hover:shadow-lg transition-all duration-200">
                  Get Your Custom Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}