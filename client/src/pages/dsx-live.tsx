import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Bot, Users, MessageSquare, Phone, Brain, Sparkles, Zap, Layers } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DSXLivePage() {
  const coreOfferings = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Smart agents that understand context, qualify leads, and route conversations intelligently — making every interaction more valuable."
    },
    {
      icon: Users,
      title: "Intelligent Engagement",
      description: "AI handles routine interactions while your best people focus on high-value conversations — the perfect blend of efficiency and expertise."
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Platform",
      description: "Voice, email, SMS, and web chat unified under one intelligent platform that learns and improves with every interaction."
    },
    {
      icon: Phone,
      title: "3CX-Native Integration",
      description: "Built directly on 3CX, our AI layer works within your existing system — no rip-and-replace, your platform just gets smarter."
    }
  ];

  const advantages = [
    "AI intelligence layer that transforms your communications platform",
    "Scalable design that adapts to your business growth",
    "Transparent operations with unified customer experience",
    "Seamless 3CX + Office365 integration with smart routing",
    "24/7 intelligent availability — the future is always on",
    "Professional, context-aware customer interactions"
  ];

  const valueAddFeatures = [
    { title: "Smart Call Routing", description: "AI analyzes intent and routes to the right person — first time, every time.", icon: Zap },
    { title: "Real-Time Insights", description: "Live sentiment analysis and call scoring turn conversations into business intelligence.", icon: Sparkles },
    { title: "Automated Follow-Up", description: "Post-call summaries, CRM updates, and task creation — handled automatically.", icon: Layers },
    { title: "Continuous Learning", description: "Your platform gets smarter with every interaction, constantly improving outcomes.", icon: Brain },
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
              The Future is Now
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">DSX Live</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto">
              More Than a Phone System. It's Intelligence.
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              DSX Live layers AI intelligence on top of your communications platform — turning every
              interaction into an opportunity. This is what "Above the Cloud" looks like in action.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="text-2xl font-bold text-orange-400">AI</div>
                <div className="text-slate-300">Intelligence Layer</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-slate-300">Always Learning</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The DSX Value-Add</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Anyone can install a phone system. We make it intelligent — adding layers of AI that
              transform how your business communicates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {valueAddFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
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
            <p className="text-lg text-slate-500">AI intelligence, integrated into your communications platform.</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why DSX Live?</h2>
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
                  <Sparkles className="h-5 w-5 text-orange-400" />
                  Above the Cloud
                </h3>
                <p className="text-slate-300 mb-4">
                  "Above the Cloud" isn't just a tagline — it's our approach to AI implementation in communications.
                  We layer intelligence on top of your platform so it does more than ring phones. It understands
                  context, predicts needs, and creates value from every interaction.
                </p>
                <p className="text-slate-300">
                  All integrated natively with 3CX, so there's no new system to learn, no migration headaches,
                  and no disruption to your workflow. Just smarter communications.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">The Future is Now</h3>
                <p className="text-slate-700 mb-4">
                  Your phone system should be more than just a phone system. With DSX Live, your communications
                  platform becomes an intelligent business tool — one that learns, adapts, and delivers value
                  every single day.
                </p>
                <p className="text-sm text-slate-500 italic">
                  Powered by 3CX. Enhanced with AI. Transformed by DSX.
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
              From growing businesses to enterprise operations — DSX Live adapts to your needs.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">AI Intelligence Layer</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Under $1,000/month</div>
              <p className="text-slate-600 mb-6">
                Add AI intelligence to your existing communications platform — smart routing, automated responses, and real-time insights.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Voice, email, SMS, web chat support</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> AI intelligence layer on 3CX</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Real-time analytics dashboard</li>
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
              <h3 className="text-2xl font-bold mb-6">Premium AI Platform</h3>
              <div className="text-3xl font-bold text-orange-400 mb-4">$5,000+/month</div>
              <p className="text-slate-300 mb-6">
                Full-scale AI transformation — turning your communications into a competitive advantage.
              </p>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Custom AI models trained on your business</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Predictive analytics and insights</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Advanced workflow automation</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" /> Enterprise-level support</li>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Go Above the Cloud?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Your phone system should be more than just a phone system.
              The future is now — let's make your communications intelligent.
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
