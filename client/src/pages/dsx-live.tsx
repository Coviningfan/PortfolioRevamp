import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Bot, Users, MessageSquare, Phone, Brain, Clock, Zap, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DSXLivePage() {
  const coreOfferings = [
    {
      icon: Bot,
      title: "AI-Powered Contact Center",
      description: "Cutting-edge AI agents for intelligent, natural interactions, seamlessly embedded within your 3CX telephony system for fluid customer engagement."
    },
    {
      icon: Users,
      title: "Hybrid Human-AI Support",
      description: "Expertly trained human agents handle complex queries, while AI manages routine interactions — the perfect balance of efficiency and empathy."
    },
    {
      icon: MessageSquare,
      title: "Multichannel Engagement",
      description: "Connect with customers via voice, email, SMS, and web chat through a unified 3CX-integrated platform."
    },
    {
      icon: Phone,
      title: "3CX-Native Integration",
      description: "Built directly on 3CX, our AI solutions work within your existing phone system — no rip-and-replace required."
    }
  ];

  const advantages = [
    "Business-Centric Approach mirroring your brand's voice and ethos",
    "Scalable and Flexible design adapting to fluctuating call volumes",
    "Transparent Operations with unified customer experience",
    "Seamless 3CX + Office365 Integration for automated call routing",
    "24/7 Availability with AI-driven systems and human oversight",
    "Professional, distraction-free customer interactions"
  ];

  const aiVsHuman = [
    { metric: "Average Handle Time", ai: "45 seconds", human: "6 minutes", advantage: "AI is 8x faster" },
    { metric: "Cost Per Interaction", ai: "$0.10", human: "$8.00", advantage: "80x cost reduction" },
    { metric: "Availability", ai: "24/7/365", human: "Shift-based", advantage: "Never sleeps" },
    { metric: "Simultaneous Calls", ai: "Unlimited", human: "1 per agent", advantage: "Infinite scale" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6">
              The Future of Customer Engagement
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">DSX Live</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto">
              How Much Time Does the Human Call Center Have Left?
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              AI is reshaping business communications. DSX Live gives you both — intelligent AI automation
              integrated with 3CX, backed by human expertise when it matters most.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="text-2xl font-bold text-orange-400">80%</div>
                <div className="text-slate-300">Calls Handled by AI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-slate-300">Always Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="text-2xl font-bold text-emerald-400">60%</div>
                <div className="text-slate-300">Cost Reduction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI vs. Human: The Numbers Don't Lie</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The smart move isn't choosing one over the other — it's knowing when to use each.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {aiVsHuman.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">{item.metric}</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Bot className="h-3 w-3 text-blue-500" />
                      <span className="text-xs text-slate-400">AI</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">{item.ai}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Users className="h-3 w-3 text-orange-500" />
                      <span className="text-xs text-slate-400">Human</span>
                    </div>
                    <div className="text-lg font-bold text-orange-600">{item.human}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-lg px-3 py-1.5 text-center">
                  {item.advantage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">DSX Live Solutions</h2>
            <p className="text-lg text-slate-500">All built on 3CX. All enhanced with AI.</p>
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why DSX Live + 3CX?</h2>
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
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-8 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-orange-400" />
                  The Hybrid Advantage
                </h3>
                <p className="text-slate-300 mb-4">
                  The future isn't about replacing humans — it's about augmenting them. DSX Live's AI handles 80% of
                  interactions while your best agents focus on the 20% that truly needs a human touch.
                </p>
                <p className="text-slate-300">
                  All integrated natively with 3CX, so there's no new system to learn, no migration headaches,
                  and no disruption to your workflow.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Built for the Future</h3>
                <p className="text-slate-700 mb-4">
                  As AI capabilities evolve, so does DSX Live. Our platform grows smarter with every interaction,
                  continuously improving response quality and expanding what AI can handle autonomously.
                </p>
                <p className="text-sm text-slate-500 italic">
                  Powered by 3CX. Enhanced by AI. Delivered by the experts at DSX.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Solutions for Every Scale</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From small businesses to enterprise call centers — DSX Live adapts to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">AI-Driven Solutions</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Under $1,000/month</div>
              <p className="text-slate-600 mb-6">
                Comprehensive AI-driven solutions integrated with your 3CX system, including voice and multichannel support.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Voice, email, SMS, web chat support</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> AI-only or hybrid AI-human models</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Native 3CX integration</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Scalable pricing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Premium Hybrid Solutions</h3>
              <div className="text-3xl font-bold text-orange-400 mb-4">$5,000+/month</div>
              <p className="text-slate-300 mb-6">
                Enterprise-grade hybrid solutions combining the best of AI and dedicated human agents.
              </p>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Custom high-end hybrid solutions</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Dedicated human agent teams</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Advanced AI customization</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Enterprise-level 3CX support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Future-Proof Your Call Center?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              The question isn't whether AI will transform your call center — it's whether you'll lead the change or be left behind.
              Talk to a DSX expert today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg transition-all duration-200">
                  Talk to an Expert
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
