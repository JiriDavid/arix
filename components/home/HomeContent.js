"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Link from "next/link";
import { Lightbulb, Rocket, Shield } from "lucide-react";

const featureCards = [
  {
    title: "Research to Reality",
    description:
      "We translate complex insights into human-centered digital experiences that feel effortless and perform flawlessly.",
    icon: Lightbulb,
  },
  {
    title: "Launch Velocity",
    description:
      "Rapid experimentation, lean sprints, and automation unlock conversions and momentum across your funnel.",
    icon: Rocket,
  },
  {
    title: "Sustained Growth",
    description:
      "Dedicated partner support keeps your platforms optimized, secure, and evolving with your goals.",
    icon: Shield,
  },
];

export default function HomeContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-electric/20 opacity-40 blur-[180px]" />
          <motion.div
            className="absolute -right-32 top-32 h-64 w-64 rounded-full bg-electric/30 blur-3xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-8">
            <motion.p
              className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Guiding brands with precision
            </motion.p>
            <motion.h1
              className="font-display text-4xl font-semibold leading-tight sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Digital experiences engineered for compounding growth.
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Arix Innovations blends strategy, design, and engineering to build
              products and brands that move as fast as you do. From the first
              spark to sustained traction, we’re your growth companion.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button href="/contact">Start a project</Button>
              <Button href="/portfolio" variant="secondary">
                Explore our work
              </Button>
            </motion.div>
            <motion.div
              className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span>Strategy</span>
              <span className="h-px w-16 bg-white/10" />
              <span>Design</span>
              <span className="h-px w-16 bg-white/10" />
              <span>Engineering</span>
            </motion.div>
          </div>
          <motion.div
            className="relative hidden h-[30rem] rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              />
              <div className="absolute left-12 top-16 rounded-2xl bg-black/30 p-6 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-electric/80">
                  Pulse
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Proactive monitoring with predictive signals tailored to your
                  KPIs.
                </p>
              </div>
              <div className="absolute bottom-16 right-10 rounded-2xl bg-black/30 p-6 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-electric/80">
                  Flow
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Modular systems engineered for scale and iteration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <SectionTitle
          eyebrow="Arix Method"
          title="Strategy, craft, and technology working in sync"
          description="Every engagement is designed to discover advantage, design the right experience, and deliver measurable outcomes."
          align="center"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <Card key={card.title} {...card} delay={index * 0.1} />
          ))}
        </div>
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Need a partner for your next digital leap?
              </h3>
              <p className="mt-3 text-sm text-white/70">
                We collaborate with founders, CMOs, and product teams to
                accelerate launches, rebrands, and growth initiatives.
              </p>
            </div>
            <Button href="/contact" className="w-full md:w-auto">
              Book a strategy session
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-6 text-sm uppercase tracking-[0.4em] text-white/40">
          <span>Seed to Series D</span>
          <span>Biotech &amp; Health</span>
          <span>Climate Tech</span>
          <span>Ecommerce</span>
          <span>Professional Services</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="Latest Work"
          title="See how we architect experiences that perform"
          description="Explore a curated selection of launches and transformations designed in partnership with visionary teams."
        />
        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-sm font-semibold text-electric hover:text-electric/80"
          >
            Visit the portfolio ↗
          </Link>
        </div>
      </section>
    </>
  );
}
