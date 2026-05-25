import { motion, useReducedMotion } from "framer-motion";
import { PhoneCall, Server, Sparkles } from "lucide-react";

export default function SignalOrb() {
  const reduced = useReducedMotion();

  const pillars = [
    {
      icon: PhoneCall,
      label: "Business Communications",
      tone: "blue",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
      delay: 0.3,
    },
    {
      icon: Server,
      label: "Hosted Infrastructure",
      tone: "slate",
      position: "bottom-6 left-0 -translate-x-2",
      delay: 0.5,
    },
    {
      icon: Sparkles,
      label: "DSX AI Enabled",
      tone: "orange",
      position: "bottom-6 right-0 translate-x-2",
      delay: 0.7,
    },
  ];

  const toneMap: Record<string, { ring: string; chip: string; icon: string; dot: string }> = {
    blue: {
      ring: "border-blue-400/30",
      chip: "bg-slate-900/70 border-blue-400/30 text-blue-100",
      icon: "text-blue-300",
      dot: "bg-blue-400",
    },
    slate: {
      ring: "border-white/15",
      chip: "bg-slate-900/70 border-white/15 text-slate-200",
      icon: "text-slate-300",
      dot: "bg-slate-300",
    },
    orange: {
      ring: "border-orange-400/40",
      chip: "bg-slate-900/70 border-orange-400/40 text-orange-100",
      icon: "text-orange-300",
      dot: "bg-orange-400",
    },
  };

  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square" data-testid="signal-orb">
      <div className="absolute inset-[12%] rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute inset-[20%] rounded-full bg-orange-500/8 blur-2xl" />

      <motion.div
        className="absolute inset-[18%] rounded-full border border-blue-400/15"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-300/80 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[10%] rounded-full border border-white/8"
        animate={reduced ? {} : { rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-cyan-300/70 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[3%] rounded-full border border-orange-400/15"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400/80 shadow-[0_0_14px_rgba(251,146,60,0.7)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[28%] rounded-full"
        animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(96,165,250,0.55) 0%, rgba(30,64,175,0.4) 35%, rgba(15,23,42,0.85) 75%)",
          boxShadow:
            "inset 0 0 60px rgba(59,130,246,0.4), 0 0 80px rgba(59,130,246,0.25), 0 0 120px rgba(251,146,60,0.1)",
        }}
      />

      <motion.div
        className="absolute inset-[38%] rounded-full"
        animate={reduced ? {} : { scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(147,197,253,0.7) 0%, rgba(59,130,246,0.5) 50%, transparent 80%)",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
        animate={reduced ? {} : { boxShadow: [
          "0 0 12px rgba(255,255,255,0.8), 0 0 24px rgba(96,165,250,0.6)",
          "0 0 20px rgba(255,255,255,1), 0 0 40px rgba(251,146,60,0.5)",
          "0 0 12px rgba(255,255,255,0.8), 0 0 24px rgba(96,165,250,0.6)",
        ] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {!reduced &&
        [0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-blue-300/60"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 2) * 140],
              y: [0, Math.sin((i * Math.PI) / 2) * 140],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
          />
        ))}

      {pillars.map((p, i) => {
        const t = toneMap[p.tone];
        return (
          <motion.div
            key={p.label}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${p.position} z-10`}
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -3, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${t.chip} backdrop-blur-md shadow-lg shadow-slate-950/40`}
            >
              <p.icon className={`h-3.5 w-3.5 ${t.icon}`} />
              <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">
                {p.label}
              </span>
              <div className={`w-1 h-1 rounded-full ${t.dot}`} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
