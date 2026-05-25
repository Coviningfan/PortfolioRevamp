import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import { PhoneCall, Server, Sparkles } from "lucide-react";

const PILLARS = [
  {
    key: "comms",
    icon: PhoneCall,
    label: "Business Communications",
    tone: "blue",
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
    arcStart: { x: 0, y: -1 },
    delay: 0.25,
  },
  {
    key: "infra",
    icon: Server,
    label: "Hosted Infrastructure",
    tone: "slate",
    position: "bottom-4 left-0 -translate-x-1",
    arcStart: { x: -0.92, y: 0.55 },
    delay: 0.45,
  },
  {
    key: "ai",
    icon: Sparkles,
    label: "DSX AI Enabled",
    tone: "orange",
    position: "bottom-4 right-0 translate-x-1",
    arcStart: { x: 0.92, y: 0.55 },
    delay: 0.65,
  },
] as const;

const TONES: Record<string, { chip: string; icon: string; dot: string; arc: string; arcGlow: string }> = {
  blue: {
    chip: "bg-slate-900/80 border-blue-400/40 text-blue-100",
    icon: "text-blue-300",
    dot: "bg-blue-400",
    arc: "rgba(96,165,250,0.85)",
    arcGlow: "rgba(96,165,250,0.5)",
  },
  slate: {
    chip: "bg-slate-900/80 border-white/20 text-slate-100",
    icon: "text-slate-300",
    dot: "bg-slate-300",
    arc: "rgba(203,213,225,0.7)",
    arcGlow: "rgba(203,213,225,0.35)",
  },
  orange: {
    chip: "bg-slate-900/80 border-orange-400/50 text-orange-100",
    icon: "text-orange-300",
    dot: "bg-orange-400",
    arc: "rgba(251,146,60,0.9)",
    arcGlow: "rgba(251,146,60,0.55)",
  },
};

export default function SignalOrb() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const tiltX = useTransform(sy, [-1, 1], [6, -6]);
  const tiltY = useTransform(sx, [-1, 1], [-8, 8]);
  const shiftX = useTransform(sx, [-1, 1], [-10, 10]);
  const shiftY = useTransform(sy, [-1, 1], [-10, 10]);
  const nucleusX = useTransform(sx, [-1, 1], [-4, 4]);
  const nucleusY = useTransform(sy, [-1, 1], [-4, 4]);

  useEffect(() => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      mx.set(Math.max(-1.5, Math.min(1.5, dx)));
      my.set(Math.max(-1.5, Math.min(1.5, dy)));
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my, reduced]);

  const starfield = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.4 + 0.4,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 4,
      })),
    [],
  );

  const orbitalParticles = useMemo(
    () =>
      [
        { radius: 38, speed: 14, count: 3, color: "rgba(147,197,253,0.9)", glow: "rgba(96,165,250,0.6)", size: 4, dir: 1 },
        { radius: 46, speed: 22, count: 5, color: "rgba(255,255,255,0.85)", glow: "rgba(255,255,255,0.4)", size: 2.5, dir: -1 },
        { radius: 54, speed: 30, count: 4, color: "rgba(251,146,60,0.9)", glow: "rgba(251,146,60,0.6)", size: 3.5, dir: 1 },
      ],
    [],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] mx-auto aspect-square"
      data-testid="signal-orb"
      style={{ perspective: 1200 }}
    >
      {!reduced && (
        <div className="absolute inset-0 pointer-events-none">
          {starfield.map((s) => (
            <motion.div
              key={s.id}
              className="absolute rounded-full bg-white/70"
              style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      <motion.div
        style={{ x: shiftX, y: shiftY, rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-[10%] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-[25%] rounded-full bg-orange-500/12 blur-2xl" />

        <svg viewBox="-100 -100 200 200" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <radialGradient id="orbCore" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="rgba(191,219,254,0.95)" />
              <stop offset="20%" stopColor="rgba(96,165,250,0.85)" />
              <stop offset="55%" stopColor="rgba(30,64,175,0.7)" />
              <stop offset="85%" stopColor="rgba(15,23,42,0.5)" />
              <stop offset="100%" stopColor="rgba(15,23,42,0)" />
            </radialGradient>
            <radialGradient id="orbHighlight" cx="35%" cy="30%" r="40%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id="orbAmber" cx="70%" cy="75%" r="50%">
              <stop offset="0%" stopColor="rgba(251,146,60,0.4)" />
              <stop offset="100%" stopColor="rgba(251,146,60,0)" />
            </radialGradient>
            <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(96,165,250,0)" />
              <stop offset="50%" stopColor="rgba(96,165,250,0.8)" />
              <stop offset="100%" stopColor="rgba(96,165,250,0)" />
            </linearGradient>
            <radialGradient id="sweepFan" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(96,165,250,0.45)" />
              <stop offset="60%" stopColor="rgba(96,165,250,0.12)" />
              <stop offset="100%" stopColor="rgba(96,165,250,0)" />
            </radialGradient>
            <filter id="orbBlur"><feGaussianBlur stdDeviation="0.6" /></filter>
          </defs>

          <circle cx="0" cy="0" r="88" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="0.4" />
          <circle cx="0" cy="0" r="74" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="0.4" strokeDasharray="0.8 2.5" />
          <circle cx="0" cy="0" r="62" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="0.5" />
          <ellipse cx="0" cy="0" rx="78" ry="32" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="0.4" transform="rotate(-18)" />
          <ellipse cx="0" cy="0" rx="78" ry="32" fill="none" stroke="rgba(251,146,60,0.18)" strokeWidth="0.4" transform="rotate(35)" />

          {!reduced && (
            <motion.g
              style={{ transformOrigin: "0px 0px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M 0 -90 A 90 90 0 0 1 78 -45"
                fill="none"
                stroke="url(#sweepGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 0 0 L 0 -90 A 90 90 0 0 1 78 -45 Z"
                fill="url(#sweepFan)"
                opacity="0.6"
              />
            </motion.g>
          )}

          {!reduced &&
            [0, 1, 2].map((i) => (
              <motion.circle
                key={`pulse-${i}`}
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="rgba(96,165,250,0.6)"
                strokeWidth="0.6"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 4.2, opacity: [0, 0.55, 0] }}
                transition={{ duration: 4.5, delay: i * 1.5, repeat: Infinity, ease: "easeOut" }}
                style={{ transformOrigin: "0px 0px" }}
              />
            ))}

          {PILLARS.map((p, i) => {
            const tone = TONES[p.tone];
            const r = 88;
            const sx2 = p.arcStart.x * r;
            const sy2 = p.arcStart.y * r;
            const cx1 = sx2 * 0.45;
            const cy1 = sy2 * 0.45;
            const path = `M 0 0 Q ${cx1} ${cy1} ${sx2} ${sy2}`;
            return (
              <g key={`arc-${p.key}`}>
                <path d={path} fill="none" stroke={tone.arcGlow} strokeWidth="1.2" opacity="0.35" filter="url(#orbBlur)" />
                <path d={path} fill="none" stroke={tone.arc} strokeWidth="0.6" opacity="0.7" strokeDasharray="2 3" />
                {!reduced && (
                  <motion.circle
                    cx="0"
                    cy="0"
                    r={p.tone === "orange" ? 1.8 : 1.4}
                    fill={tone.arc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] as any }}
                    transition={{ duration: 2.8, delay: i * 0.6 + 0.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
                    style={{ offsetPath: `path('${path}')`, offsetRotate: "0deg", filter: `drop-shadow(0 0 4px ${tone.arc})` } as any}
                  />
                )}
              </g>
            );
          })}

          <motion.circle
            cx="0"
            cy="0"
            r="42"
            fill="url(#orbCore)"
            animate={reduced ? {} : { scale: [1, 1.04, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "0px 0px" }}
          />
          <circle cx="0" cy="0" r="42" fill="url(#orbAmber)" />
          <motion.ellipse
            cx="-8"
            cy="-12"
            rx="20"
            ry="14"
            fill="url(#orbHighlight)"
            animate={reduced ? {} : { opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {!reduced && (
            <motion.circle
              cx="0"
              cy="0"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.5"
              animate={{ rotate: 360, scale: [1, 1.02, 1] }}
              transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              style={{ transformOrigin: "0px 0px" }}
              strokeDasharray="0.5 3"
            />
          )}
        </svg>

        {!reduced &&
          orbitalParticles.map((ring, ri) =>
            Array.from({ length: ring.count }).map((_, i) => {
              const angle = (i / ring.count) * 360;
              return (
                <motion.div
                  key={`${ri}-${i}`}
                  className="absolute top-1/2 left-1/2"
                  style={{ width: 0, height: 0 }}
                  animate={{ rotate: ring.dir * 360 }}
                  transition={{ duration: ring.speed, repeat: Infinity, ease: "linear", delay: -i * (ring.speed / ring.count) }}
                  initial={{ rotate: angle }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: ring.size,
                      height: ring.size,
                      left: `${ring.radius}%`,
                      top: 0,
                      transform: "translate(-50%, -50%)",
                      background: ring.color,
                      boxShadow: `0 0 ${ring.size * 3}px ${ring.glow}`,
                    }}
                  />
                </motion.div>
              );
            }),
          )}

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ x: nucleusX, y: nucleusY }}
        >
          <motion.div
            className="relative w-4 h-4 rounded-full bg-white"
            animate={
              reduced
                ? {}
                : {
                    boxShadow: [
                      "0 0 14px rgba(255,255,255,0.9), 0 0 28px rgba(96,165,250,0.7), 0 0 50px rgba(96,165,250,0.4)",
                      "0 0 24px rgba(255,255,255,1), 0 0 48px rgba(251,146,60,0.6), 0 0 72px rgba(251,146,60,0.3)",
                      "0 0 14px rgba(255,255,255,0.9), 0 0 28px rgba(96,165,250,0.7), 0 0 50px rgba(96,165,250,0.4)",
                    ],
                  }
            }
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {!reduced && (
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 3.2], opacity: [0.8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.5)" }}
            />
          )}
        </motion.div>
      </motion.div>

      {PILLARS.map((p, i) => {
        const t = TONES[p.tone];
        return (
          <motion.div
            key={p.label}
            initial={reduced ? false : { opacity: 0, y: 10, scale: 0.92 }}
            animate={reduced ? {} : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${p.position} z-20`}
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              className={`flex items-center gap-2 pl-3 pr-3.5 py-1.5 rounded-full border ${t.chip} backdrop-blur-md shadow-xl shadow-slate-950/50`}
            >
              <div className="relative">
                <p.icon className={`h-3.5 w-3.5 ${t.icon}`} />
                {!reduced && p.key === "ai" && (
                  <motion.div
                    aria-hidden
                    className="absolute -inset-1 rounded-full"
                    animate={{ boxShadow: ["0 0 0 0 rgba(251,146,60,0)", "0 0 10px 2px rgba(251,146,60,0.6)", "0 0 0 0 rgba(251,146,60,0)"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </div>
              <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">
                {p.label}
              </span>
              <motion.div
                className={`w-1 h-1 rounded-full ${t.dot}`}
                animate={reduced ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
