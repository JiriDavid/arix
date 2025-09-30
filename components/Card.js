"use client";

import { motion } from "framer-motion";

export default function Card({
  title,
  description,
  icon: Icon,
  children,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-electric/60"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-electric/10 blur-3xl" />
      </div>
      <div className="relative space-y-5">
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric/10 text-electric">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <div>
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
          {description && (
            <p className="mt-3 text-sm text-white/70">{description}</p>
          )}
        </div>
        {children}
      </div>
    </motion.div>
  );
}
