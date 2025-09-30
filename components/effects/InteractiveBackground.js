"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const springConfig = { stiffness: 120, damping: 20, mass: 0.3 };

export default function InteractiveBackground() {
  const isClient = typeof window !== "undefined";
  const initialX = isClient ? window.innerWidth / 2 : 0;
  const initialY = isClient ? window.innerHeight / 2 : 0;

  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isClient) return;

    const handlePointerMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isClient, mouseX, mouseY]);

  const glowGradient = useMotionTemplate`
    radial-gradient(
      32rem 26rem at ${smoothX}px ${smoothY}px,
      rgba(59, 130, 246, 0.25),
      rgba(59, 130, 246, 0.08) 35%,
      rgba(15, 23, 42, 0.05) 55%,
      transparent 70%
    )
  `;

  const highlightGradient = useMotionTemplate`
    radial-gradient(
      18rem 14rem at ${smoothX}px ${smoothY}px,
      rgba(255, 255, 255, 0.15),
      rgba(59, 130, 246, 0.10) 35%,
      transparent 68%
    )
  `;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: glowGradient,
          filter: "blur(80px)",
          opacity: 0.6,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: highlightGradient,
          mixBlendMode: "screen",
          opacity: 0.5,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.75)_0%,rgba(15,23,42,0.2)_35%,rgba(15,23,42,0.9)_100%)]" />

      <div className="absolute inset-[15%] -z-10 rounded-[3rem] border border-white/5 bg-white/2 backdrop-blur-3xl" />

      <motion.div
        aria-hidden
        className="absolute -inset-[18%] opacity-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(56rem 38rem at ${smoothX}px ${smoothY}px, rgba(59,130,246,0.20), transparent 70%)
          `,
          filter: "blur(140px)",
        }}
      />

      <NoiseOverlay />
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.08%22/%3E%3C/svg%3E')]"
      style={{ mixBlendMode: "soft-light" }}
    />
  );
}
