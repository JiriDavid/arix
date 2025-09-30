"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const springConfig = { stiffness: 120, damping: 20, mass: 0.3 };
const MAX_POINTS = 30;

export default function InteractiveBackground() {
  const isClient = typeof window !== "undefined";
  const initialX = isClient ? window.innerWidth / 2 : 0;
  const initialY = isClient ? window.innerHeight / 2 : 0;

  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [viewport, setViewport] = useState({
    width: isClient ? window.innerWidth : 1,
    height: isClient ? window.innerHeight : 1,
  });
  const [lightningPath, setLightningPath] = useState("");

  const pointsRef = useRef([]);
  const polarityRef = useRef(1);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handlePointerMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isClient, mouseX, mouseY]);

  useEffect(() => {
    if (!viewport.width || !viewport.height) return;

    pointsRef.current = Array.from({ length: MAX_POINTS }, () => [viewport.width / 2, viewport.height / 2]);
    setLightningPath(buildLightningPath(pointsRef.current));
  }, [viewport.width, viewport.height]);

  useEffect(() => {
    if (!isClient) return;

    let animationFrame;

    const updateTrail = () => {
      if (!pointsRef.current.length) {
        pointsRef.current = Array.from({ length: MAX_POINTS }, () => [smoothX.get(), smoothY.get()]);
      }

      const x = smoothX.get();
      const y = smoothY.get();
      const points = pointsRef.current;
      const [lastX, lastY] = points[0];

      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.hypot(dx, dy);

      if (distance > 0.4) {
        const normalX = distance ? -dy / distance : 0;
        const normalY = distance ? dx / distance : 0;
  const jitterScale = 0.9 + Math.random() * 0.4;
  const amplitude = 28 * jitterScale;
        polarityRef.current *= -1;
        const offsetX = normalX * amplitude * polarityRef.current;
        const offsetY = normalY * amplitude * polarityRef.current;
  const drift = 0.28;
        const newPoint = [
          x + offsetX + dx * drift,
          y + offsetY + dy * drift,
        ];

        points.unshift(newPoint);
        if (points.length > MAX_POINTS) {
          points.pop();
        }
      }

      setLightningPath(buildLightningPath(points));
      animationFrame = requestAnimationFrame(updateTrail);
    };

    animationFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrame);
  }, [isClient, smoothX, smoothY]);

  const glowGradient = useMotionTemplate`
    radial-gradient(
      32rem 26rem at ${smoothX}px ${smoothY}px,
      rgba(59, 130, 246, 0.45),
      rgba(59, 130, 246, 0.12) 35%,
      rgba(15, 23, 42, 0.08) 55%,
      transparent 70%
    )
  `;

  const highlightGradient = useMotionTemplate`
    radial-gradient(
      18rem 14rem at ${smoothX}px ${smoothY}px,
      rgba(255, 255, 255, 0.28),
      rgba(59, 130, 246, 0.18) 35%,
      transparent 68%
    )
  `;

  const width = Math.max(viewport.width, 1);
  const height = Math.max(viewport.height, 1);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: glowGradient,
          filter: "blur(80px)",
          opacity: 0.8,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: highlightGradient,
          mixBlendMode: "screen",
          opacity: 0.7,
        }}
      />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.42),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.75)_0%,rgba(15,23,42,0.2)_35%,rgba(15,23,42,0.9)_100%)]" />

      <div className="absolute inset-[15%] -z-10 rounded-[3rem] border border-white/5 bg-white/2 backdrop-blur-3xl" />

      <motion.div
        aria-hidden
        className="absolute -inset-[18%] opacity-25"
        style={{
          background: useMotionTemplate`
            radial-gradient(56rem 38rem at ${smoothX}px ${smoothY}px, rgba(59,130,246,0.32), transparent 70%)
          `,
          filter: "blur(140px)",
        }}
      />

      <svg
        aria-hidden
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.0)" />
            <stop offset="40%" stopColor="rgba(59,130,246,0.85)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.0)" />
          </linearGradient>
          <linearGradient id="lightningGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.0)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.0)" />
          </linearGradient>
        </defs>
        {lightningPath && (
          <>
            <motion.path
              d={lightningPath}
              stroke="url(#lightningGlow)"
              strokeWidth={20}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              style={{ opacity: 0.32, filter: "blur(28px)" }}
            />
            <motion.path
              d={lightningPath}
              stroke="rgba(147, 197, 253, 0.85)"
              strokeWidth={4.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
              style={{
                mixBlendMode: "screen",
                filter:
                  "drop-shadow(0 0 14px rgba(59,130,246,0.9)) drop-shadow(0 0 32px rgba(14,165,233,0.55))",
              }}
            />
            <motion.path
              d={lightningPath}
              stroke="rgba(255,255,255,0.88)"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
              style={{ mixBlendMode: "screen" }}
            />
            <motion.path
              d={lightningPath}
              stroke="url(#lightningGradient)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
              initial={{ strokeDasharray: "12 20", strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1.1 }}
            />
          </>
        )}
      </svg>

      <NoiseOverlay />
    </div>
  );
}

function buildLightningPath(points) {
  if (!points || points.length < 2) return "";
  const pathPoints = points.filter(Boolean);
  if (pathPoints.length < 2) return "";

  const [startX, startY] = pathPoints[0];
  let d = `M ${startX} ${startY}`;

  for (let i = 1; i < pathPoints.length; i++) {
    const [x, y] = pathPoints[i];
    const [prevX, prevY] = pathPoints[i - 1];
  const controlX = prevX + (x - prevX) * 0.42;
  const controlY = prevY + (y - prevY) * 0.42;
    d += ` Q ${controlX} ${controlY} ${x} ${y}`;
  }

  return d;
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
