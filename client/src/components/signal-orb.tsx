import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

export default function SignalOrb() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 50, damping: 18, mass: 0.7 });

  const tiltX = useTransform(sy, [-1, 1], [10, -10]);
  const tiltY = useTransform(sx, [-1, 1], [-12, 12]);
  const shiftX = useTransform(sx, [-1, 1], [-14, 14]);
  const shiftY = useTransform(sy, [-1, 1], [-14, 14]);
  const specX = useTransform(sx, [-1, 1], [-22, 22]);
  const specY = useTransform(sy, [-1, 1], [-22, 22]);
  const nucleusX = useTransform(sx, [-1, 1], [-6, 6]);
  const nucleusY = useTransform(sy, [-1, 1], [-6, 6]);
  const haloOpacity = useTransform(sx, [-1, 0, 1], [0.6, 1, 0.6]);

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
      mx.set(Math.max(-1.6, Math.min(1.6, dx)));
      my.set(Math.max(-1.6, Math.min(1.6, dy)));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  const starfield = useMemo(
    () =>
      Array.from({ length: 44 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.3,
        duration: 3 + Math.random() * 6,
        delay: Math.random() * 5,
        maxOpacity: 0.3 + Math.random() * 0.5,
      })),
    [],
  );

  const orbitalRings = useMemo(
    () => [
      { rx: 90, ry: 30, rotate: -22, color: "rgba(96,165,250,0.32)", width: 0.5, dash: "0", duration: 22, packets: 2, packetColor: "rgba(147,197,253,0.95)", packetGlow: "rgba(96,165,250,0.7)", dir: 1 },
      { rx: 86, ry: 36, rotate: 18, color: "rgba(148,163,184,0.22)", width: 0.4, dash: "1 2.5", duration: 34, packets: 3, packetColor: "rgba(226,232,240,0.9)", packetGlow: "rgba(255,255,255,0.5)", dir: -1 },
      { rx: 92, ry: 26, rotate: 58, color: "rgba(251,146,60,0.3)", width: 0.5, dash: "0", duration: 28, packets: 2, packetColor: "rgba(253,186,116,0.95)", packetGlow: "rgba(251,146,60,0.7)", dir: 1 },
      { rx: 88, ry: 42, rotate: -55, color: "rgba(103,232,249,0.15)", width: 0.35, dash: "0.5 3", duration: 46, packets: 1, packetColor: "rgba(165,243,252,0.85)", packetGlow: "rgba(103,232,249,0.55)", dir: -1 },
    ],
    [],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[540px] mx-auto aspect-square"
      data-testid="signal-orb"
      style={{ perspective: 1400 }}
    >
      {!reduced && (
        <div className="absolute inset-0 pointer-events-none">
          {starfield.map((s) => (
            <motion.div
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
              animate={{ opacity: [0, s.maxOpacity, 0], scale: [0.6, 1, 0.6] }}
              transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="absolute inset-[6%] rounded-full pointer-events-none"
        style={{ opacity: haloOpacity }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[60px]"
          style={{
            background:
              "radial-gradient(circle at 38% 32%, rgba(96,165,250,0.55) 0%, rgba(30,64,175,0.3) 45%, rgba(15,23,42,0) 75%)",
          }}
        />
        <div
          className="absolute inset-[20%] rounded-full blur-[40px]"
          style={{
            background:
              "radial-gradient(circle at 65% 70%, rgba(251,146,60,0.35) 0%, rgba(251,146,60,0) 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: shiftX, y: shiftY, rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        <svg viewBox="-100 -100 200 200" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <radialGradient id="orbDeep" cx="38%" cy="32%" r="72%">
              <stop offset="0%" stopColor="rgba(219,234,254,0.95)" />
              <stop offset="14%" stopColor="rgba(147,197,253,0.85)" />
              <stop offset="38%" stopColor="rgba(59,130,246,0.75)" />
              <stop offset="68%" stopColor="rgba(30,58,138,0.65)" />
              <stop offset="92%" stopColor="rgba(15,23,42,0.5)" />
              <stop offset="100%" stopColor="rgba(15,23,42,0)" />
            </radialGradient>
            <radialGradient id="orbInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id="amberSide" cx="78%" cy="78%" r="55%">
              <stop offset="0%" stopColor="rgba(251,146,60,0.4)" />
              <stop offset="100%" stopColor="rgba(251,146,60,0)" />
            </radialGradient>
            <radialGradient id="rimLight" cx="50%" cy="50%" r="50%">
              <stop offset="80%" stopColor="rgba(96,165,250,0)" />
              <stop offset="94%" stopColor="rgba(147,197,253,0.6)" />
              <stop offset="100%" stopColor="rgba(96,165,250,0)" />
            </radialGradient>
            <radialGradient id="bottomShadow" cx="50%" cy="92%" r="40%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <linearGradient id="sweepArm" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(96,165,250,0)" />
              <stop offset="65%" stopColor="rgba(147,197,253,0.55)" />
              <stop offset="100%" stopColor="rgba(219,234,254,1)" />
            </linearGradient>
            <linearGradient id="sweepArm2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251,146,60,0)" />
              <stop offset="100%" stopColor="rgba(251,146,60,0.7)" />
            </linearGradient>
            <radialGradient id="equator" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(96,165,250,0)" />
              <stop offset="50%" stopColor="rgba(96,165,250,0.4)" />
              <stop offset="100%" stopColor="rgba(96,165,250,0)" />
            </radialGradient>

            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="liquidNoise" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="3" result="noise">
                {!reduced && (
                  <animate attributeName="baseFrequency" values="0.012;0.018;0.012" dur="14s" repeatCount="indefinite" />
                )}
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
            </filter>

            <clipPath id="orbClip">
              <circle cx="0" cy="0" r="48" />
            </clipPath>
          </defs>

          <circle cx="0" cy="0" r="96" fill="none" stroke="rgba(148,163,184,0.06)" strokeWidth="0.3" />
          <circle cx="0" cy="0" r="86" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="0.3" strokeDasharray="0.4 3" />
          <circle cx="0" cy="0" r="72" fill="none" stroke="rgba(96,165,250,0.12)" strokeWidth="0.4" />

          {!reduced &&
            [0, 1, 2, 3].map((i) => (
              <motion.circle
                key={`pulse-${i}`}
                cx="0"
                cy="0"
                r="22"
                fill="none"
                stroke="rgba(96,165,250,0.55)"
                strokeWidth="0.5"
                initial={{ scale: 0.55, opacity: 0 }}
                animate={{ scale: 4.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 5.5, delay: i * 1.4, repeat: Infinity, ease: "easeOut" }}
                style={{ transformOrigin: "0px 0px" }}
              />
            ))}

          {!reduced && (
            <>
              <motion.g
                style={{ transformOrigin: "0px 0px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <path
                  d="M 0 -96 A 96 96 0 0 1 68 -68"
                  fill="none"
                  stroke="url(#sweepArm)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  filter="url(#softGlow)"
                />
              </motion.g>
              <motion.g
                style={{ transformOrigin: "0px 0px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              >
                <path
                  d="M 0 -86 A 86 86 0 0 1 86 0"
                  fill="none"
                  stroke="url(#sweepArm2)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </motion.g>
            </>
          )}

          {orbitalRings.map((ring, ri) => (
            <g key={`ring-${ri}`} transform={`rotate(${ring.rotate})`}>
              <ellipse cx="0" cy="0" rx={ring.rx} ry={ring.ry} fill="none" stroke={ring.color} strokeWidth={ring.width} strokeDasharray={ring.dash} />
              {!reduced &&
                Array.from({ length: ring.packets }).map((_, pi) => {
                  const offset = (pi / ring.packets) * ring.duration;
                  return (
                    <motion.g
                      key={`p-${ri}-${pi}`}
                      style={{ transformOrigin: "0px 0px" }}
                      animate={{ rotate: ring.dir * 360 }}
                      transition={{ duration: ring.duration, repeat: Infinity, ease: "linear", delay: -offset }}
                    >
                      <circle
                        cx={ring.rx}
                        cy="0"
                        r="1.4"
                        fill={ring.packetColor}
                        filter="url(#strongGlow)"
                        style={{ filter: `drop-shadow(0 0 4px ${ring.packetGlow})` }}
                      />
                      <ellipse
                        cx={ring.rx - 4}
                        cy="0"
                        rx="3.5"
                        ry="0.5"
                        fill={ring.packetGlow}
                        opacity="0.55"
                      />
                    </motion.g>
                  );
                })}
            </g>
          ))}

          <g clipPath="url(#orbClip)">
            <circle cx="0" cy="0" r="48" fill="url(#orbDeep)" />
            <circle cx="0" cy="0" r="48" fill="url(#amberSide)" />

            <g opacity="0.22" stroke="rgba(147,197,253,0.55)" strokeWidth="0.25" fill="none" filter="url(#liquidNoise)">
              <ellipse cx="0" cy="0" rx="48" ry="14" />
              <ellipse cx="0" cy="0" rx="48" ry="28" />
              <ellipse cx="0" cy="0" rx="48" ry="42" />
              <ellipse cx="0" cy="0" rx="14" ry="48" />
              <ellipse cx="0" cy="0" rx="28" ry="48" />
              <ellipse cx="0" cy="0" rx="42" ry="48" />
            </g>

            {!reduced && (
              <motion.g
                style={{ transformOrigin: "0px 0px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <ellipse cx="0" cy="0" rx="48" ry="5" fill="url(#equator)" opacity="0.85" />
              </motion.g>
            )}

            <motion.ellipse
              cx="-12"
              cy="-16"
              rx="22"
              ry="16"
              fill="rgba(255,255,255,0.35)"
              animate={reduced ? {} : { opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              filter="url(#softGlow)"
            />

            <circle cx="0" cy="0" r="48" fill="url(#orbInner)" />
          </g>

          <circle cx="0" cy="0" r="48" fill="none" stroke="rgba(147,197,253,0.4)" strokeWidth="0.4" />
          <circle cx="0" cy="0" r="48" fill="url(#rimLight)" />

          {!reduced && (
            <motion.circle
              cx="0"
              cy="0"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.4"
              strokeDasharray="0.4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            />
          )}

          <ellipse cx="0" cy="58" rx="40" ry="6" fill="url(#bottomShadow)" />
        </svg>

        <motion.div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            x: specX,
            y: specY,
            width: 80,
            height: 80,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 60%)",
            borderRadius: "50%",
            mixBlendMode: "screen",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ x: nucleusX, y: nucleusY }}
        >
          <motion.div
            className="relative w-3 h-3 rounded-full bg-white"
            animate={
              reduced
                ? {}
                : {
                    boxShadow: [
                      "0 0 12px rgba(255,255,255,0.9), 0 0 28px rgba(96,165,250,0.8), 0 0 56px rgba(96,165,250,0.45), 0 0 90px rgba(96,165,250,0.2)",
                      "0 0 18px rgba(255,255,255,1), 0 0 44px rgba(251,146,60,0.7), 0 0 72px rgba(251,146,60,0.4), 0 0 110px rgba(251,146,60,0.15)",
                      "0 0 12px rgba(255,255,255,0.9), 0 0 28px rgba(96,165,250,0.8), 0 0 56px rgba(96,165,250,0.45), 0 0 90px rgba(96,165,250,0.2)",
                    ],
                  }
            }
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {!reduced && (
            <>
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full"
                animate={{ scale: [1, 4], opacity: [0.7, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.45)" }}
              />
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full"
                animate={{ scale: [1, 4], opacity: [0.7, 0] }}
                transition={{ duration: 2.6, delay: 1.3, repeat: Infinity, ease: "easeOut" }}
                style={{ boxShadow: "0 0 0 1px rgba(251,146,60,0.35)" }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
