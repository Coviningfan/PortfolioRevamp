import { motion, useReducedMotion } from "framer-motion";
import { PhoneCall, Server, Sparkles } from "lucide-react";

export default function PlatformStack() {
  const reduced = useReducedMotion();

  const layers = [
    {
      tier: "01",
      icon: PhoneCall,
      title: "Communications Platform",
      subtitle: "Install · Route · Support · Modernize",
      items: ["DSX Voice", "3CX PBX", "VoIP / SIP", "Routing & Queues", "Support"],
      accent: "blue",
      dominant: true,
    },
    {
      tier: "02",
      icon: Server,
      title: "Infrastructure Backbone",
      subtitle: "Host · Connect · Secure · Monitor",
      items: ["DSX Data", "Hosting", "Connectivity", "Monitoring", "Security"],
      accent: "slate",
      dominant: false,
    },
    {
      tier: "03",
      icon: Sparkles,
      title: "DSX AI Enabled",
      subtitle: "Automate · Integrate · Notify · Analyze",
      items: ["AI Workflows", "CRM Actions", "Automation", "Notifications", "Operational Intelligence"],
      accent: "orange",
      dominant: false,
      glow: true,
    },
  ];

  const accentMap: Record<string, { iconBg: string; tag: string; ring: string; chip: string }> = {
    blue: {
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
      tag: "text-blue-200 bg-blue-500/15 border-blue-400/30",
      ring: "border-blue-400/30",
      chip: "bg-blue-500/10 text-blue-200 border-blue-400/20",
    },
    slate: {
      iconBg: "bg-gradient-to-br from-slate-600 to-slate-800",
      tag: "text-slate-300 bg-slate-500/15 border-slate-400/20",
      ring: "border-white/10",
      chip: "bg-white/5 text-slate-300 border-white/10",
    },
    orange: {
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      tag: "text-orange-200 bg-orange-500/15 border-orange-400/30",
      ring: "border-orange-400/25",
      chip: "bg-orange-500/10 text-orange-200 border-orange-400/20",
    },
  };

  return (
    <div className="relative w-full max-w-md mx-auto" data-testid="platform-stack">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-orange-500/10 rounded-[2rem] blur-3xl" />

      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-slate-950/40">
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="relative w-2 h-2 rounded-full bg-emerald-400">
              {!reduced && (
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              )}
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300 font-semibold">
              DSX Edge · Integrated Platform
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Stack</span>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[34px] top-12 bottom-12 w-px bg-gradient-to-b from-blue-400/0 via-blue-400/40 to-orange-400/40"
          />
          {!reduced && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-[33px] top-12 w-[3px] h-6 bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent rounded-full"
              animate={{ y: [0, 180, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <div className="space-y-3 relative">
            {layers.map((layer, i) => {
              const a = accentMap[layer.accent];
              return (
                <motion.div
                  key={layer.title}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={reduced ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-2xl border ${a.ring} ${
                    layer.dominant
                      ? "bg-gradient-to-br from-blue-500/12 via-white/[0.04] to-white/[0.02] p-4 shadow-lg shadow-blue-900/20"
                      : layer.glow
                        ? "bg-gradient-to-br from-orange-500/8 via-white/[0.03] to-white/[0.02] p-3.5"
                        : "bg-white/[0.03] p-3.5"
                  }`}
                >
                  {layer.glow && !reduced && (
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      animate={{ boxShadow: ["0 0 0 0 rgba(249,115,22,0)", "0 0 24px 0 rgba(249,115,22,0.18)", "0 0 0 0 rgba(249,115,22,0)"] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}

                  <div className="flex items-start gap-3 mb-3 relative">
                    <div
                      className={`${a.iconBg} ${
                        layer.dominant ? "w-11 h-11" : "w-9 h-9"
                      } rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <layer.icon className={`text-white ${layer.dominant ? "h-5 w-5" : "h-4 w-4"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${a.tag}`}>
                          L{layer.tier}
                        </span>
                      </div>
                      <div className={`font-semibold leading-tight text-white ${layer.dominant ? "text-[15px]" : "text-[13.5px]"}`}>
                        {layer.title}
                      </div>
                      <div className={`leading-tight mt-0.5 text-slate-400 ${layer.dominant ? "text-[11px]" : "text-[10.5px]"}`}>
                        {layer.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 relative">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={`text-[10px] px-2 py-0.5 rounded-md border ${a.chip} font-medium`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10.5px]">
          <span className="text-slate-500 uppercase tracking-wider">One Partner</span>
          <span className="text-slate-400 font-mono">Comms · Infra · DSX AI Enabled</span>
        </div>
      </div>
    </div>
  );
}
