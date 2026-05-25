import { motion, useReducedMotion } from "framer-motion";
import { Network, Wifi, PhoneCall, Activity, Workflow, Sparkles } from "lucide-react";

export default function OperationsPanel() {
  const reduced = useReducedMotion();

  const layers = [
    {
      icon: Network,
      label: "VoIP / PBX / 3CX",
      sublabel: "Foundation · 3CX Platinum Partner",
      tag: "CORE",
      status: "Online",
      statusColor: "emerald",
    },
    {
      icon: Wifi,
      label: "Business Connectivity",
      sublabel: "SIP trunks · Internet · 99.9% uptime",
      tag: "CORE",
      status: "Stable",
      statusColor: "emerald",
    },
    {
      icon: PhoneCall,
      label: "Call Routing & Support",
      sublabel: "Queues · Extensions · Voicemail · 24/7",
      tag: "CORE",
      status: "Active",
      statusColor: "emerald",
    },
    {
      icon: Activity,
      label: "Monitoring & Management",
      sublabel: "Live system health · Proactive alerts",
      tag: "MANAGED",
      status: "Watching",
      statusColor: "cyan",
    },
    {
      icon: Workflow,
      label: "CRM & Workflow Integrations",
      sublabel: "Connected to the tools you already run",
      tag: "EXPAND",
      status: "Linked",
      statusColor: "cyan",
    },
    {
      icon: Sparkles,
      label: "AI Assistance",
      sublabel: "Optional · Where it adds real value",
      tag: "OPTIONAL",
      status: "Ready",
      statusColor: "slate",
      muted: true,
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto" data-testid="operations-panel">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-3xl blur-3xl" />

      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="relative w-2 h-2 rounded-full bg-emerald-400">
              {!reduced && (
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              )}
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300 font-semibold">
              DSX Edge Operations
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LIVE</span>
        </div>

        <div className="space-y-2">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={reduced ? false : { opacity: 0, x: -8 }}
              animate={reduced ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${
                layer.muted
                  ? "bg-white/[0.02] border-white/5"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  layer.muted
                    ? "bg-slate-800/60"
                    : "bg-gradient-to-br from-slate-700/80 to-slate-800"
                }`}
              >
                <layer.icon className={`h-4 w-4 ${layer.muted ? "text-slate-500" : "text-cyan-300"}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className={`text-[13px] font-semibold leading-tight ${layer.muted ? "text-slate-400" : "text-white"}`}>
                  {layer.label}
                </div>
                <div className={`text-[10.5px] leading-tight mt-0.5 ${layer.muted ? "text-slate-500" : "text-slate-400"}`}>
                  {layer.sublabel}
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    layer.muted
                      ? "text-slate-500 bg-slate-800/60"
                      : layer.tag === "CORE"
                        ? "text-blue-300 bg-blue-500/10"
                        : layer.tag === "MANAGED"
                          ? "text-cyan-300 bg-cyan-500/10"
                          : "text-orange-300 bg-orange-500/10"
                  }`}
                >
                  {layer.tag}
                </span>
                <div className="flex items-center gap-1.5">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      layer.statusColor === "emerald"
                        ? "bg-emerald-400"
                        : layer.statusColor === "cyan"
                          ? "bg-cyan-400"
                          : "bg-slate-500"
                    }`}
                  />
                  <span className={`text-[10px] ${layer.muted ? "text-slate-500" : "text-slate-300"}`}>
                    {layer.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10.5px]">
          <span className="text-slate-500 uppercase tracking-wider">Communications Partner</span>
          <span className="text-slate-400 font-mono">All systems · Operational</span>
        </div>
      </div>
    </div>
  );
}
