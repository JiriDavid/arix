"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative mx-4 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-navy"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-widest text-white/60 hover:text-white"
              onClick={onClose}
            >
              Close
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              </div>
              <div className="space-y-6 p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric/80">
                    Project
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-white/70">{project.description}</p>
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
                {project.link && (
                  <Button
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
