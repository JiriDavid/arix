"use client";

import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import {
  Layout,
  Search,
  Server,
  Palette,
  Workflow,
  GaugeCircle,
} from "lucide-react";

const services = [
  {
    title: "Digital Strategy & Research",
    description:
      "Discovery workshops, customer interviews, and positioning frameworks that uncover the sharpest opportunities.",
    icon: Search,
  },
  {
    title: "Experience Design Systems",
    description:
      "Modular component libraries and interaction principles that keep your product cohesive and future-ready.",
    icon: Layout,
  },
  {
    title: "Full-Stack Web Engineering",
    description:
      "Performance-obsessed builds using modern stacks that scale with your roadmap and integrate seamlessly.",
    icon: Server,
  },
  {
    title: "Brand Identity & Storytelling",
    description:
      "Elevated brand systems, visual design, and narrative arcs that resonate with the right audiences.",
    icon: Palette,
  },
  {
    title: "Lifecycle SEO & Growth",
    description:
      "Technical audits, content engines, and experimentation programs that maximize organic reach and retention.",
    icon: GaugeCircle,
  },
  {
    title: "Product Operations & Enablement",
    description:
      "Workflow automation, playbooks, and enablement that empower teams to move faster with confidence.",
    icon: Workflow,
  },
];

const phases = [
  {
    title: "01 — Discover",
    copy: "We immerse quickly, learning your customers, goals, and constraints. Insights are translated into opportunity maps.",
  },
  {
    title: "02 — Design",
    copy: "Sprint-based collaboration to visualize the future experience, prototype solutions, and align stakeholders.",
  },
  {
    title: "03 — Launch",
    copy: "Engineering, QA, and orchestrated rollouts ensure a confident launch with analytics to measure the impact from day one.",
  },
  {
    title: "04 — Amplify",
    copy: "Continuous optimization keeps evolving your platform, driving compounding performance over time.",
  },
];

export default function ServicesContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <SectionTitle
        eyebrow="Capabilities"
        title="Craft meets performance at every touchpoint"
        description="We combine strategy, design, and engineering to build experiences that move metrics and make your brand unforgettable."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Card key={service.title} {...service} delay={index * 0.05} />
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/20 to-navy p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="font-display text-3xl font-semibold">
            How we partner
          </h3>
          <p className="max-w-2xl text-sm text-white/70">
            Engagements with Arix Innovations are structured around velocity and
            clarity. We operate as an extension of your team, bringing senior
            talent across disciplines into each stage of the journey.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric/80">
                  {phase.title}
                </p>
                <p className="mt-4 text-sm text-white/70">{phase.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
