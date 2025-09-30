"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-lg transition hover:border-electric/60"
      onClick={() => onSelect(project)}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-black/20 to-transparent" />
      </div>
      <div className="space-y-3 px-6 py-6">
        <h3 className="font-display text-xl font-semibold">{project.name}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
