"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Wind, Monitor, Star, CheckCircle } from "lucide-react";

const serviceCards = [
  { icon: MapPin,  label: "GBP Optimization",     sub: "Google Maps 3-pack" },
  { icon: Wind,    label: "HVAC Local SEO",        sub: "Organic ranking growth" },
  { icon: Monitor, label: "HVAC Websites",         sub: "Built to book calls" },
  { icon: Star,    label: "Reviews & Reputation",  sub: "Google ranking signals" },
];

const trustItems = [
  "HVAC Only Niche",
  "Direct Client Access",
  "Real GSC Data",
  "No Long Contracts",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#18055E]">

      {/* Background city image — right side only */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-right opacity-25"
        />
        {/* Fade left so image doesn't compete with text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18055E] via-[#18055E]/85 to-[#18055E]/10" />
        {/* Subtle top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#18055E] to-transparent" />
      </div>

      {/* Main content — fills remaining height */}
      <div className="relative z-10 flex-1 mx-auto max-w-7xl w-full px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-center pt-28 pb-10">

        {/* ── LEFT: Copy ── */}
        <div>
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#FEC33B]/30 bg-[#FEC33B]/10 px-4 py-2 mb-7"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FEC33B] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FEC33B]">
              HVAC Local SEO Specialist · 2+ Years
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.07] text-white mb-5 max-w-lg"
          >
            The First HVAC Company on Google{" "}
            <span className="text-[#FEC33B]">Gets the Call.</span>
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.28, ease: "easeOut" }}
            className="origin-left h-[3px] w-12 rounded-full bg-[#FEC33B] mb-6"
          />

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-[#D4C9FF]/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
          >
            When someone&apos;s AC breaks at 9pm, they search Google and call the first
            company they see. I get HVAC businesses to that position — through GBP
            optimization, Local SEO, and websites built to convert.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.43 }}
            className="flex flex-col sm:flex-row gap-3 mb-9"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FEC33B] px-7 py-3.5 text-sm font-bold text-[#18055E] shadow-lg shadow-[#FEC33B]/20 hover:bg-[#FFD060] hover:scale-105 transition-all duration-300"
            >
              Get Free HVAC Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-study"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 hover:border-white/35 transition-all duration-300 backdrop-blur-sm"
            >
              See Real Case Study
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#FEC33B] shrink-0" />
                <span className="text-[11px] text-white/55 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Headshot card ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="hidden lg:flex flex-col items-center justify-end self-end"
        >
          {/* Photo container */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-[#FEC33B]/10 blur-2xl" />

            {/* Gold border frame */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#FEC33B]/60 to-[#FEC33B]/10 shadow-2xl">
              <div className="rounded-[14px] overflow-hidden bg-[#100746] w-[280px]">
                <Image
                  src="/umair-headshot.webp"
                  alt="Muhammad Umair — HVAC Local SEO Specialist"
                  width={280}
                  height={340}
                  priority
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "340px" }}
                />
              </div>
            </div>

            {/* Floating "Direct Client Access" badge */}
            <div className="absolute -top-4 -right-5 rounded-xl bg-[#FEC33B] px-3.5 py-2 shadow-lg">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#18055E]">Direct Client</p>
              <p className="text-[9px] text-[#18055E]/70 font-medium">Access</p>
            </div>

            {/* Floating "HVAC Only" badge */}
            <div className="absolute -bottom-4 -left-5 rounded-xl bg-white px-3.5 py-2 shadow-lg">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#18055E]">HVAC Only</p>
              <p className="text-[9px] text-gray-400 font-medium">Not a side offering</p>
            </div>
          </div>

          {/* Name + title below photo */}
          <div className="mt-10 text-center">
            <p className="text-white font-bold text-sm">Muhammad Umair</p>
            <p className="text-white/45 text-xs mt-0.5">HVAC Local SEO · Pakistan → USA</p>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM: 4 Service Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.6 }}
        className="relative z-10 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10"
      >
        {serviceCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className={[
                "flex items-center gap-4 px-6 py-5 bg-white/5 hover:bg-white/10 transition-colors cursor-default",
                i < serviceCards.length - 1 ? "border-r border-white/10" : "",
                "border-b border-white/10 lg:border-b-0",
              ].join(" ")}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEC33B]/15 ring-1 ring-[#FEC33B]/20">
                <Icon className="h-5 w-5 text-[#FEC33B]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">{card.label}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{card.sub}</p>
              </div>
            </div>
          );
        })}
      </motion.div>

    </section>
  );
}