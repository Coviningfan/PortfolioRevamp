import { motion } from "framer-motion";
import { Shuffle, Database, EyeOff, PlugZap, ArrowRight } from "lucide-react";

export default function ProblemSection() {
  const frictions = [
    {
      icon: Shuffle,
      label: "Communications that leak",
      detail:
        "Missed calls, bad routing, voicemail dependency, slow response. Customers move to whoever picks up first.",
    },
    {
      icon: PlugZap,
      label: "Vendors that don't talk to each other",
      detail:
        "Phones, hosting, CRM, calendars, support — owned by different vendors, with no integration between them.",
    },
    {
      icon: Database,
      label: "Manual intake and disconnected records",
      detail:
        "Staff repeat the same questions and re-enter the same data. Customer information lives in places it should not.",
    },
    {
      icon: EyeOff,
      label: "No visibility into the operation",
      detail:
        "Owners cannot see what is happening across calls, staff, customers, and follow-up. Decisions are made on instinct, not data.",
    },
  ];

  return (
    <section id="problem" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold mb-4 tracking-wide uppercase">
              The Cost of Disconnected Systems
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Most businesses don't fail from a lack of software.{" "}
              <span className="accent-serif text-orange-300">They fail from disconnection.</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              They lose time, leads, visibility, and control because their communications,
              staff workflows, customer records, and follow-up processes are not connected.
              DSX Edge starts at the communications layer and uses it as the entry point to
              modernize the rest of the operation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-blue-300/70 font-semibold mb-3">
              The buyer's reality
            </p>
            <p className="text-slate-200 text-lg leading-relaxed italic mb-5">
              "Our phones, our CRM, our schedules, our follow-ups — none of it talks. We
              know we should be using AI somewhere, but we don't know where to start."
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 pt-4 border-t border-white/10">
              <ArrowRight className="h-4 w-4 text-orange-400" />
              <span>DSX Edge starts at communications — and connects the operation from there.</span>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {frictions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative card-glass rounded-2xl p-7 hover:border-blue-400/40 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-300"
              data-testid={`problem-card-${i}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-colors">
                  <item.icon className="h-5 w-5 text-blue-300" />
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-semibold text-white mb-1.5 leading-snug">
                    {item.label}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
