import { motion, useReducedMotion } from "framer-motion";
import { Phone, Network, Brain, Calendar, Bell, MessageSquare, RefreshCw, Check } from "lucide-react";

export default function WorkflowDiagram() {
  const reduced = useReducedMotion();

  const outcomes = [
    { icon: Calendar, label: "Appointment Booked", color: "from-emerald-400 to-emerald-600", delay: 1.8 },
    { icon: Bell, label: "Staff Notified", color: "from-cyan-400 to-blue-500", delay: 2.0 },
    { icon: MessageSquare, label: "CRM Updated", color: "from-cyan-400 to-blue-500", delay: 2.2 },
    { icon: RefreshCw, label: "Follow-Up Sent", color: "from-emerald-400 to-emerald-600", delay: 2.4 },
  ];

  const loop = reduced
    ? { duration: 0 }
    : { duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 };

  const SignalLine = ({ delay = 0 }: { delay?: number }) => (
    <div className="relative h-6 w-px bg-gradient-to-b from-cyan-400/40 to-blue-500/40 overflow-hidden">
      {!reduced && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          animate={{ top: ["-10%", "110%"] }}
          transition={{ ...(loop as any), delay }}
        />
      )}
    </div>
  );

  return (
    <div className="relative w-full max-w-md mx-auto" data-testid="workflow-diagram">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-3xl blur-3xl" />

      <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-7">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">Live Call Flow</span>
          </div>
          <span className="text-xs text-slate-500">Phone → Intelligence → Action</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={reduced ? false : { scale: 0.9, opacity: 0 }}
            animate={reduced ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 w-full"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center relative flex-shrink-0">
              <Phone className="h-5 w-5 text-cyan-400" />
              {!reduced && (
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-cyan-400"
                  animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white">Incoming customer call</div>
              <div className="text-xs text-slate-400">After hours · Unknown number</div>
            </div>
          </motion.div>

          <SignalLine />

          <motion.div
            initial={reduced ? false : { scale: 0.9, opacity: 0 }}
            animate={reduced ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 w-full"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
              <Network className="h-5 w-5 text-slate-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white">VoIP / PBX · 3CX</div>
              <div className="text-xs text-slate-400">Routing · Queue · Extensions · Voicemail</div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Foundation</span>
          </motion.div>

          <SignalLine delay={0.4} />

          <motion.div
            initial={reduced ? false : { scale: 0.9, opacity: 0 }}
            animate={reduced ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 w-full"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white">DSX Intelligence Layer</div>
              <div className="text-xs text-cyan-300">Trained on your business workflow</div>
            </div>
          </motion.div>

          <div className="relative h-6 w-full flex items-start justify-center">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 24">
              <path d="M100 0 L100 8 L20 22" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" />
              <path d="M100 0 L100 8 L73 22" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" />
              <path d="M100 0 L100 8 L127 22" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" />
              <path d="M100 0 L100 8 L180 22" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full">
            {outcomes.map((outcome) => (
              <motion.div
                key={outcome.label}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: outcome.delay - 1 }}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10"
              >
                <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${outcome.color} flex items-center justify-center flex-shrink-0`}>
                  <outcome.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-[11px] text-slate-300 font-medium leading-tight">{outcome.label}</span>
                <Check className="h-3 w-3 text-emerald-400 ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-500">Built on the system you already use</span>
          <span className="text-emerald-400 font-mono font-semibold">00:00:42</span>
        </div>
      </div>
    </div>
  );
}
