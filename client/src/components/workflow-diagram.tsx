import { motion, useReducedMotion } from "framer-motion";
import { PhoneCall, Server, Sparkles } from "lucide-react";

export default function PlatformStack() {
  const reduced = useReducedMotion();

  const layers = [
    {
      tier: "01",
      icon: PhoneCall,
      title: "Communications Doorstep",
      subtitle: "Where the business meets its customers",
      items: ["DSX Voice", "3CX PBX", "VoIP / SIP Routing", "Queues & Extensions", "Voicemail & Support"],
      accent: "blue",
      dominant: true,
    },
    {
      tier: "02",
      icon: Server,
      title: "Infrastructure Backbone",
      subtitle: "Reliability behind the communications",
      items: ["DSX Data", "Hosted Infrastructure", "Connectivity & Uptime", "Monitoring & Security", "Data Center Experience"],
      accent: "slate",
      dominant: false,
    },
    {
      tier: "03",
      icon: Sparkles,
      title: "Intelligent Integration",
      subtitle: "Practical AI on top of what works",
      items: ["AI Workflows", "3CX v20 Agentic Features", "CRM Actions & Automation", "Workflow Routing", "Operational Intelligence"],
      accent: "orange",
      dominant: false,
    },
  ];

  const accentMap: Record<string, { iconBg: string; iconText: string; tag: string; ring: string; chip: string }> = {
    blue: {
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
      iconText: "text-white",
      tag: "text-blue-300 bg-blue-500/15 border-blue-400/30",
      ring: "border-blue-400/30",
      chip: "bg-blue-500/10 text-blue-200 border-blue-400/20",
    },
    slate: {
      iconBg: "bg-gradient-to-br from-slate-600 to-slate-800",
      iconText: "text-white",
      tag: "text-slate-300 bg-slate-500/15 border-slate-400/20",
      ring: "border-white/10",
      chip: "bg-white/5 text-slate-300 border-white/10",
    },
    orange: {
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconText: "text-white",
      tag: "text-orange-300 bg-orange-500/15 border-orange-400/30",
      ring: "border-orange-400/20",
      chip: "bg-orange-500/10 text-orange-200 border-orange-400/20",
    },
  };

  return (
    <div className="relative w-full max-w-md mx-auto" data-testid="platform-stack">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-orange-500/5 rounded-3xl blur-3xl" />

      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6">
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

        <div className="space-y-3">
          {layers.map((layer, i) => {
            const a = accentMap[layer.accent];
            return (
              <motion.div
                key={layer.title}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className={`relative rounded-2xl border ${a.ring} ${
                  layer.dominant
                    ? "bg-gradient-to-br from-blue-500/10 via-white/[0.04] to-white/[0.02] p-4 shadow-lg shadow-blue-900/20"
                    : "bg-white/[0.03] p-3.5"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`${a.iconBg} ${
                      layer.dominant ? "w-11 h-11" : "w-9 h-9"
                    } rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <layer.icon className={`${a.iconText} ${layer.dominant ? "h-5 w-5" : "h-4 w-4"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${a.tag}`}>
                        L{layer.tier}
                      </span>
                      {layer.dominant && (
                        <span className="text-[9px] font-mono uppercase tracking-wider text-orange-300/80">
                          Entry Point
                        </span>
                      )}
                    </div>
                    <div className={`font-semibold leading-tight text-white ${layer.dominant ? "text-[15px]" : "text-[13px]"}`}>
                      {layer.title}
                    </div>
                    <div className={`leading-tight mt-0.5 text-slate-400 ${layer.dominant ? "text-[11px]" : "text-[10.5px]"}`}>
                      {layer.subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pl-0">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className={`text-[10px] px-2 py-0.5 rounded-md border ${a.chip} font-medium`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {i < layers.length - 1 && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-2 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10.5px]">
          <span className="text-slate-500 uppercase tracking-wider">One Partner</span>
          <span className="text-slate-400 font-mono">Comms · Infra · Intelligence</span>
        </div>
      </div>
    </div>
  );
}
