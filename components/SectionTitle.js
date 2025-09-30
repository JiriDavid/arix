"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${alignment}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric/80">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-white/70">{description}</p>
      )}
    </motion.div>
  );
}
