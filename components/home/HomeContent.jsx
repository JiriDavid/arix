"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import {
  Shield,
  Store,
  ShoppingBag,
  Wrench,
  RefreshCcw,
  Smartphone,
  BadgeCheck,
  Globe2,
} from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const helpTags = [
  "Shops",
  "Service businesses",
  "Farms",
  "Churches",
  "Startups",
  "Growing SMEs",
];

const services = [
  {
    title: "Business Websites",
    description:
      "Professional, mobile-first sites that build trust and make it easy for customers to contact you.",
    icon: Store,
  },
  {
    title: "E-commerce & Online Selling",
    description:
      "Simple online stores and booking systems so you can sell products or services with ease.",
    icon: ShoppingBag,
  },
  {
    title: "Custom Web Systems",
    description:
      "Lightweight tools for managing records, content, or internal workflows without heavy complexity.",
    icon: Wrench,
  },
  {
    title: "Website Redesigns & Fixes",
    description:
      "We speed up and modernize slow or outdated sites so they look professional and convert better.",
    icon: RefreshCcw,
  },
];

const reasons = [
  {
    icon: Smartphone,
    title: "Mobile-first for local users",
    description: "Built for the phones your customers actually use every day.",
  },
  {
    icon: Shield,
    title: "Clear pricing",
    description: "Transparent costs with no surprises or hidden add-ons.",
  },
  {
    icon: BadgeCheck,
    title: "Practical solutions",
    description:
      "Useful features that solve real business problems, not bloat.",
  },
  {
    icon: Globe2,
    title: "Remote-friendly support",
    description: "Responsive help while serving teams across Zimbabwe.",
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
        <div className="mx-auto grid max-w-6xl gap-8 pl-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-8">
            <motion.p
              className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Helping SMEs turn visitors into customers.
            </motion.p>
            <motion.h1
              className="font-display text-4xl font-semibold leading-relaxed sm:text-6xl "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Websites & Digital Systems That Help Zimbabwean SMEs Grow
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We design fast, mobile-friendly websites and simple digital
              solutions that help small and medium businesses attract customers,
              build trust, and increase sales.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button href="/contact">Get free website consultation</Button>
              <Button
                href="https://wa.me/9556307048"
                variant="secondary"
                className="bg-green-500 hover:bg-green-600"
              >
                WhatsApp Us
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
            className="relative hidden h-[30rem] overflow-hidden rounded-3xl  md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-hidden
          >
            <svg viewBox="10 25 165 165" className="h-full w-full">
              <defs>
                <clipPath id="hero-blob-clip">
                  <path
                    fill="#FF0066"
                    d="M44.9,-36.3C58.1,-19.2,68.7,-0.6,64.4,13.2C60,26.9,40.7,35.7,20.4,47.4C0.1,59.1,-21.2,73.7,-32.5,68C-43.7,62.4,-44.9,36.5,-50.5,11.6C-56.1,-13.2,-66.1,-36.9,-58.4,-52.8C-50.7,-68.6,-25.4,-76.6,-4.8,-72.8C15.8,-69,31.7,-53.4,44.9,-36.3Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>

              <foreignObject
                x="0"
                y="0"
                width="200"
                height="200"
                clipPath="url(#hero-blob-clip)"
              >
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: "url('/growth-2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </foreignObject>
            </svg>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle
          eyebrow="Who we help"
          title="Built for Zimbabwean Small & Medium Businesses"
          description="Whether you run a shop, service business, farm, church, startup, or growing company, we help you build a strong online presence that works on mobile and converts visitors into customers."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {helpTags.map((tag) => (
            <motion.span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle
          eyebrow="What we do"
          title="Services in SME-friendly language"
          description="Practical, mobile-first websites and systems that help you attract, convert, and serve customers."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-electric/40 hover:bg-white/10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle
          eyebrow="Why choose Arix Innovations"
          title="Simple, honest, and built for Zimbabwean SMEs"
          description="We keep things practical: clear pricing, mobile-first builds, and support that meets you where you are."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {reason.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/70">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle
          eyebrow="Portfolio preview"
          title="Our Work"
          description="We have built and deployed websites and systems for organizations, churches, and businesses that needed reliable, professional digital platforms."
        />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/portfolio">View portfolio</Button>
          <span className="text-sm text-white/60">
            See launches, redesigns, and custom systems.
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-electric/20 via-electric/10 to-white/5 p-10 backdrop-blur">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-electric/20 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Free offer
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                Get a Free Website Consultation
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Not sure what your business needs online? We offer a free
                consultation and basic website audit to recommend what works
                best.
              </p>
            </div>
            
              <Button href="/contact" className=" w-full md:w-auto">
                Request free consultation
              </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle
          eyebrow="About / Trust"
          title="About Arix Innovations"
          description="Arix Innovations is a web development agency focused on helping Zimbabwean SMEs grow through simple, effective digital solutions. We believe technology should be practical, affordable, and built around real business needs."
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Ready to grow your business online?
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
            Let’s talk.
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold text-electric">
            <Link
              href="/contact"
              className="rounded-full border border-electric/30 px-4 py-2 hover:border-electric/60"
            >
              Contact Form
            </Link>
            <Link
              href="https://wa.me/9556307048"
              className="rounded-full border border-electric/30 px-4 py-2 hover:border-electric/60"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </Link>
            <Link
              href="mailto:jiridavidpromise@gmail.com"
              className="rounded-full border border-electric/30 px-4 py-2 hover:border-electric/60"
            >
              Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
