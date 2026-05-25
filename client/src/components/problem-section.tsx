import { motion } from "framer-motion";
import {
  PhoneOff,
  Shuffle,
  Clock,
  Database,
  EyeOff,
  PlugZap,
  ArrowRight,
} from "lucide-react";

export default function ProblemSection() {
  const frictions = [
    {
      icon: PhoneOff,
      label: "Missed calls & voicemail dependency",
      detail: "Leads, jobs, and customers leak out through the front door of the business.",
    },
    {
      icon: Shuffle,
      label: "Bad routing & slow response",
      detail: "Calls land in the wrong place. Customers go with whoever responds first.",
    },
    {
      icon: Clock,
      label: "Manual intake & follow-up",
      detail: "Staff repeat the same questions, take the same notes, chase the same callbacks.",
    },
    {
      icon: Database,
      label: "Disconnected CRM & records",
      detail: "Conversations live in one place. Customer data lives in another. Nothing connects.",
    },
    {
      icon: EyeOff,
      label: "No visibility into interactions",
      detail: "Owners cannot see what is happening across calls, staff, and customer touchpoints.",
    },
    {
      icon: PlugZap,
      label: "Vendors that do not talk to each other",
      detail: "Phones, hosting, CRM, calendars, support — owned by different vendors with no integration.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-[#e8eef6] relative overflow-hidden">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              The Cost of Disconnected Systems
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Most businesses don't fail from a lack of software.{" "}
              <span className="text-blue-700">They fail from disconnection.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              They lose time, leads, visibility, and control because their communications,
              staff workflows, customer records, and follow-up processes are not connected.
              DSX Edge starts with the communication layer and uses it to identify where
              the business can be modernized.
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
              "Our phones, our CRM, our schedules, our follow-ups — none of it talks. We
              know we should be using AI somewhere, but we don't know where to start."
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ArrowRight className="h-4 w-4 text-blue-500" />
              <span>DSX Edge starts at the communications layer — and connects everything from there.</span>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {frictions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              data-testid={`problem-card-${i}`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <item.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-slate-800 mb-2 leading-snug">{item.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
