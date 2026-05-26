import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
          <linearGradient id="about-arc-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="about-arc-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
            <stop offset="50%" stopColor="#fb923c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="translate(1200 200)" fill="none" strokeWidth="0.6" opacity="0.18">
          <g className="brand-arc-spin-slow">
            <ellipse cx="0" cy="0" rx="380" ry="380" stroke="url(#about-arc-blue)" />
          </g>
          <g className="brand-arc-spin-reverse">
            <ellipse cx="0" cy="0" rx="280" ry="280" stroke="url(#about-arc-blue)" strokeDasharray="2 6" />
          </g>
          <g className="brand-arc-spin-slow">
            <ellipse cx="0" cy="0" rx="180" ry="180" stroke="url(#about-arc-orange)" />
          </g>
        </g>
        <g transform="translate(180 700)" fill="none" strokeWidth="0.6" opacity="0.15">
          <g className="brand-arc-spin-reverse">
            <ellipse cx="0" cy="0" rx="320" ry="320" stroke="url(#about-arc-blue)" />
          </g>
          <g className="brand-arc-spin-slow">
            <ellipse cx="0" cy="0" rx="220" ry="220" stroke="url(#about-arc-orange)" strokeDasharray="1 5" />
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

export default function AboutPage() {
  return (
    <div className="min-h-screen page-canvas relative overflow-hidden">
      <BrandCanvas />
      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-xs font-semibold mb-6 tracking-wide uppercase">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]">
                The <span className="accent-serif text-orange-300">Legacy</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                The genesis — pioneering a new era of business communications and infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Foundation */}
        <section className="py-20 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                The foundation — <span className="accent-serif text-orange-300">DSX Data and DSX Voice</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20 mb-4 tracking-wide uppercase">2009</span>
                <h3 className="text-2xl font-bold text-white mb-4">DSX Data — The Early Vision</h3>
                <p className="text-slate-300 mb-4">
                  DSX Data's story began with a vision to empower small and medium-sized businesses with advanced data management solutions. Rooted in a 20,000 sq. ft. data center, the founders aimed to deliver more than just hardware.
                </p>
                <p className="text-slate-400">
                  They envisioned a service that combined top-tier data center capabilities with strategic business and technical advice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8 hover:border-orange-400/40 transition-all duration-300"
              >
                <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-200 border border-orange-400/20 mb-4 tracking-wide uppercase">2010</span>
                <h3 className="text-2xl font-bold text-white mb-4">DSX Voice — Transforming Communication</h3>
                <p className="text-slate-300 mb-4">
                  DSX Voice emerged as a pioneering force in the VoIP telephony landscape. Its inception was driven by a need for flexible, efficient, and cost-effective communication.
                </p>
                <p className="text-slate-400">
                  DSX Voice quickly became known for its customized approach to telephony — scalable solutions tailored to diverse business needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visionaries */}
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
                The <span className="accent-serif text-orange-300">visionaries</span> behind the venture
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-1">Joseph P. Berardi</h3>
                <p className="text-blue-300 font-semibold text-sm tracking-wide uppercase mb-5">Co-Founder & CEO</p>
                <h4 className="text-lg font-semibold text-slate-200 mb-4 accent-serif">A leader with a Midas touch</h4>
                <p className="text-slate-300 mb-4">
                  Joseph's background in transforming technologies into practical business solutions shaped the direction of both DSX Data and DSX Voice. His leadership was marked by a keen sense of market trends and an uncanny ability to turn challenges into opportunities.
                </p>
                <p className="text-slate-400">
                  Prior to DSX, he was CEO and CTO of several companies in the broadcast television industry where he played a major role in moving the industry from tape-based systems to IT-based systems for production, transmission, and archival storage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-1">Kirk Hurford</h3>
                <p className="text-orange-300 font-semibold text-sm tracking-wide uppercase mb-5">Co-Founder & CTO</p>
                <h4 className="text-lg font-semibold text-slate-200 mb-4 accent-serif">The technological maestro</h4>
                <p className="text-slate-300 mb-4">
                  Kirk's expertise in software development, combined with his experience in hardware manufacturing, allowed him to create solutions that were technically sound and business-savvy. His contributions established the robust technical infrastructure of DSX Data.
                </p>
                <p className="text-slate-400">
                  Kirk developed DSX Data's first data center and is the architect of the DSX Voice service. Before founding DSX, he served as CEO and CTO of a number of companies and worked with the National Security Agency and the Department of the Navy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Merging Paths */}
        <section className="py-20 section-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Merging paths — <span className="accent-serif text-orange-300">the creation of DSX Edge</span>
                </h2>
              </div>

              <div className="card-glass rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-white mb-4">A strategic decision</h3>
                <p className="text-slate-300 mb-8">
                  The decision to merge DSX Data and DSX Voice into DSX Edge was driven by a vision to create a unified platform offering end-to-end technology solutions. This move positioned DSX Edge as a holistic provider of technology services.
                </p>

                <h4 className="text-xl font-semibold text-white mb-4 accent-serif">The synergy of DSX Edge</h4>
                <p className="text-slate-300">
                  The unification brought together the strengths of both companies — a synergy that allows the delivery of integrated services from advanced data management to innovative telephony, all extended with DSX AI Enabled workflows.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Present & Future */}
        <section className="py-20 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                DSX Edge — <span className="accent-serif text-orange-300">the present and the future</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card-glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-blue-300 mb-4 tracking-wide uppercase text-sm">A legacy of excellence</h3>
                <p className="text-slate-300">
                  Today, DSX Edge stands as a monument to innovation, integration, and customer-focused solutions — continuing to push the boundaries of what business communications can do.
                </p>
              </div>
              <div className="card-glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-orange-300 mb-4 tracking-wide uppercase text-sm">Vision for the future</h3>
                <p className="text-slate-300">
                  The leadership at DSX Edge is continuously looking forward — embracing new technologies and adapting to changing market dynamics. Innovation and excellence remain the driving force.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 max-w-4xl mx-auto card-glass rounded-2xl p-10 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4 accent-serif">A continuous journey of innovation</h3>
              <p className="text-slate-300 text-lg">
                The story of DSX Edge is far from complete. As the digital landscape evolves, so does the company — constantly seeking new ways to serve clients and stay ahead of the curve.
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
                Ready to be <span className="accent-serif text-orange-300">part of our story?</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the businesses who have transformed their operations with DSX Edge.
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
                    data-testid="button-contact-us"
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
