import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Zap, Leaf, Building, Globe } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";

function BrandCanvas() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 brand-dots opacity-[0.18]" />
      <div
        className="pointer-events-none fixed inset-0 z-0 brand-glow-drift"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 70% 20%, rgba(96,165,250,0.10), transparent 60%), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(251,146,60,0.07), transparent 60%)",
        }}
      />
      <svg
        className="pointer-events-none fixed inset-0 z-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dc-arc-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="dc-arc-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
            <stop offset="50%" stopColor="#fb923c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="translate(1200 200)" fill="none" strokeWidth="0.6" opacity="0.18">
          <g className="brand-arc-spin-slow">
            <ellipse cx="0" cy="0" rx="380" ry="380" stroke="url(#dc-arc-blue)" />
          </g>
          <g className="brand-arc-spin-reverse">
            <ellipse cx="0" cy="0" rx="280" ry="280" stroke="url(#dc-arc-blue)" strokeDasharray="2 6" />
          </g>
          <g className="brand-arc-spin-slow">
            <ellipse cx="0" cy="0" rx="180" ry="180" stroke="url(#dc-arc-orange)" />
          </g>
        </g>
        <g transform="translate(180 700)" fill="none" strokeWidth="0.6" opacity="0.15">
          <g className="brand-arc-spin-reverse">
            <ellipse cx="0" cy="0" rx="320" ry="320" stroke="url(#dc-arc-blue)" />
          </g>
          <g className="brand-arc-spin-slow">
            <ellipse cx="0" cy="0" rx="220" ry="220" stroke="url(#dc-arc-orange)" strokeDasharray="1 5" />
          </g>
        </g>
        {[
          [120, 180], [340, 90], [560, 240], [820, 130], [1080, 310], [1320, 180],
          [220, 460], [480, 540], [740, 420], [980, 520], [1240, 480],
          [160, 760], [420, 820], [680, 700], [920, 800], [1180, 740], [1380, 820],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 1.6 : 1}
            fill={i % 5 === 0 ? "#fb923c" : "#60a5fa"}
            className="brand-twinkle"
            style={{ animationDelay: `${(i * 0.37) % 4}s`, transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </svg>
    </>
  );
}

export default function DataCenterPage() {
  const features = [
    {
      icon: Zap,
      title: "Massive scale and power",
      description: "Up to 650 megawatts of power — the world's most powerful colocation data center. Scale to meet any demand with unwavering reliability.",
    },
    {
      icon: Leaf,
      title: "100% renewable energy",
      description: "The campus is powered entirely by renewable energy sources, supporting our commitment to environmental sustainability.",
    },
    {
      icon: Globe,
      title: "Unrivaled connectivity",
      description: "Dedicated fiber and connectivity options including MPLS, IP, Transport, SIP, and SD-WAN guarantee high-speed, reliable connections.",
    },
    {
      icon: Shield,
      title: "Fortress-like security",
      description: "Multi-layered security protocols, including physical and cyber measures, ensure the utmost protection of our infrastructure.",
    },
  ];

  const companies = ["Amazon", "Google", "eBay", "Microsoft", "Apple", "Netflix"];

  return (
    <div className="min-h-screen page-canvas relative overflow-hidden">
      <Seo path="/data-center" />
      <BrandCanvas />
      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Data Center", href: "/data-center" }]} className="mb-8" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-xs font-semibold mb-6 tracking-wide uppercase">
                Hosted Infrastructure
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]">
                DSX Edge data center — <span className="accent-serif text-orange-300">hosted at Citadel Campus.</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                The infrastructure behind <Link href="/about" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">DSX Edge</Link>: unparalleled security, 99.9% uptime, and 100% renewable power at one of the world's most advanced data centers. See how it powers our{" "}
                <Link href="/#services" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Answer → Qualify → Act</Link> AI workflows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 section-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              DSX's data management and communication solutions are anchored by our infrastructure hosted at the{" "}
              <span className="accent-serif text-orange-300">Citadel Campus of Switch</span> — one of the most advanced and secure data centers in the world. Located in Tahoe Reno, Nevada, it's a testament to cutting-edge technology, sustainability, and security.
            </motion.p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                World-class features of the <span className="accent-serif text-orange-300">Citadel Campus</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glass rounded-2xl p-8 hover:border-blue-400/40 hover:bg-white/[0.07] transition-all duration-300"
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
                    <feature.icon className="text-blue-300 h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Leaders */}
        <section className="py-20 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Hosting alongside <span className="accent-serif text-orange-300">industry leaders.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8"
              >
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mr-4">
                    <Building className="text-blue-300 h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">A hub for top-notch companies</h3>
                </div>
                <p className="text-slate-300 mb-8">
                  The Citadel Campus is trusted by over 100 of the world's most respected companies — including giants like Amazon, Google, and eBay. This co-location with industry leaders is a testament to the level of security and reliability the campus offers.
                </p>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mr-4">
                    <Shield className="text-orange-300 h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Security by association</h4>
                </div>
                <p className="text-slate-300">
                  The presence of global corporations with stringent security requirements underlines the facility's standards. By hosting at the Citadel Campus, DSX inherits the same level of security and operational excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8 flex flex-col"
              >
                <h4 className="text-sm font-semibold text-blue-300 tracking-wide uppercase mb-6 text-center">Trusted by global leaders</h4>
                <div className="grid grid-cols-2 gap-3 flex-1">
                  {companies.map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-blue-400/40 transition-colors duration-200"
                      data-testid={`text-company-${company.toLowerCase()}`}
                    >
                      <span className="text-slate-200 font-medium">{company}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-slate-400 text-center mt-6">And 90+ other world-class companies</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-20 section-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                DSX and the <span className="accent-serif text-orange-300">Citadel Campus.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-10"
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                By choosing the Citadel Campus of Switch for our data center needs, DSX is not just investing in state-of-the-art infrastructure — we are committing to a future where data security, sustainability, and operational excellence are paramount.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our clients can rest assured their data is managed in a facility trusted by global leaders — guaranteeing a level of service and security second to none.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience <span className="accent-serif text-orange-300">world-class infrastructure.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Discover how our partnership with the Citadel Campus ensures your data receives the same protection trusted by industry giants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button
                    variant="outline"
                    data-testid="button-back-home"
                    className="border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 rounded-xl"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    data-testid="button-contact-experts"
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 rounded-xl"
                  >
                    Talk to DSX
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
