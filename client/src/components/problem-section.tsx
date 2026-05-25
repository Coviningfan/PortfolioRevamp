import { motion } from "framer-motion";
import { PhoneOff, Clock, FileWarning, UserX, ArrowRight } from "lucide-react";

export default function ProblemSection() {
  const losses = [
    {
      icon: PhoneOff,
      stat: "27%",
      label: "of business calls go unanswered",
      detail: "Every one is a potential job, lead, or customer walking to a competitor.",
    },
    {
      icon: Clock,
      stat: "Hours",
      label: "spent on the phone instead of working",
      detail: "Owners and staff get pulled away from the work that actually pays.",
    },
    {
      icon: FileWarning,
      stat: "Lost",
      label: "callbacks, sticky notes, voicemails",
      detail: "Information scattered across people, devices, and yesterday's intentions.",
    },
    {
      icon: UserX,
      stat: "Slow",
      label: "to respond — and the lead is gone",
      detail: "Customers go with whoever responds first. Often that's not you.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-4">
              The Real Cost
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Every missed call is a{" "}
              <span className="text-red-600">missed job.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              The problem isn't your phone system. The problem is everything that falls through it —
              the after-hours calls, the qualifying questions nobody asked, the appointments never booked,
              the follow-ups that lived on a sticky note until they didn't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
          >
            <p className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">
              The buyer's reality
            </p>
            <p className="text-slate-700 text-lg leading-relaxed italic mb-4">
              "I am losing calls, leads, appointments, time, and operational control."
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ArrowRight className="h-4 w-4 text-blue-500" />
              <span>DSX Edge fixes the front line, not the phone.</span>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {losses.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300 group"
              data-testid={`problem-card-${i}`}
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <item.icon className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{item.stat}</div>
              <div className="text-sm font-semibold text-slate-700 mb-2 leading-snug">{item.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
