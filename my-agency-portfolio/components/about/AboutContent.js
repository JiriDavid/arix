"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

export default function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <SectionTitle
        eyebrow="Our Story"
        title="Navigating growth with the precision of a protein guide"
        description="Arix Innovations was born from a simple observation: breakthroughs happen when strategy, creativity, and technology move in harmony. We partner with founders and marketing leaders to choreograph that harmony across every digital touchpoint."
      />
      <div className="mt-16 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div className="space-y-8 text-sm leading-relaxed text-white/70">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Like proteins guiding organism growth, we craft digital systems that
            sense, adapt, and accelerate. Whether it&apos;s a product launch, a
            category-defining rebrand, or a growth engine tuned to scale, we
            operate as an extension of your team to make it happen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our process is deliberately collaborative. We blend discovery
            workshops, rapid prototyping, and iterative design sprints to
            surface the sharpest insight. Then we engineer experiences that
            carry your audience from curiosity to commitment.
          </motion.p>
          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {["Discovery", "Design Systems", "Lifecycle Marketing"].map(
              (item) => (
                <motion.div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                  variants={{
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.4 },
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric/80">
                    Focus
                  </p>
                  <p className="mt-4 font-display text-lg font-semibold">
                    {item}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-sm text-white/60">
              &quot;I can&apos;t recommend David highly enough as a web/graphic
              designer. His diligence to verify at every step of the entire
              process to ensure the design was what I was looking for was a
              plus. Working to ensure your clients, ideas, voice, and taste is
              fully reflected is what we seek to find. That&apos;s what David
              provided&quot;
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Miss Armele — Manager, Maritime Services Africa
            </p>
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating at Arix Innovations"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric/80">
                Mission
              </p>
              <p className="mt-3 text-sm text-white/80">
                To guide visionary teams through pivotal chapters with clarity,
                velocity, and craft—delivering digital ecosystems that compound
                results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
