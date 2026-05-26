import { motion } from "framer-motion";
import PlatformStack from "./workflow-diagram";

export default function PlatformSection() {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold mb-5 tracking-wide uppercase">
              The DSX Edge Platform
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              One partner. Three layers.{" "}
              <span className="accent-serif text-orange-300">
                One integrated platform.
              </span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Phones at the bottom. Hosting in the middle. AI agents on top.
              The same partner builds all three so they actually work together —
              not just sit next to each other in your stack.
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  label: "Communications Platform",
                  detail: "DSX Voice · 3CX PBX · VoIP · SIP · Routing · Support",
                  accent: "border-blue-400/40 bg-blue-500/5",
                  numColor: "text-blue-300",
                },
                {
                  num: "02",
                  label: "Infrastructure Backbone",
                  detail: "DSX Data · Hosting · Connectivity · Monitoring · Security",
                  accent: "border-white/15 bg-white/[0.03]",
                  numColor: "text-slate-300",
                },
                {
                  num: "03",
                  label: "DSX AI Enabled",
                  detail: "AI Agents · CRM Actions · Booking · Notifications · Call Summaries",
                  accent: "border-orange-400/40 bg-orange-500/5",
                  numColor: "text-orange-300",
                },
              ].map((row, i) => (
                <motion.div
                  key={row.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-4 p-4 rounded-xl border ${row.accent}`}
                >
                  <div className={`font-mono text-sm font-bold ${row.numColor} pt-0.5`}>L{row.num}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-[15px] leading-tight mb-1">
                      {row.label}
                    </div>
                    <div className="text-slate-400 text-[12.5px] leading-snug">{row.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <PlatformStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
