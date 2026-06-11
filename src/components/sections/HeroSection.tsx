"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Monitor, Star, Wind } from "lucide-react";

const serviceCards = [
  { icon: MapPin, label: "GBP Optimization", sub: "Google Maps 3-Pack" },
  { icon: Wind, label: "Geo-Targeted Local SEO", sub: "Organic ranking growth" },
  { icon: Monitor, label: "Conversion-Focused Websites", sub: "Built to book calls" },
  { icon: Star, label: "Reputation & Reviews", sub: "Google ranking signals" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F7]">
      {/* Background HVAC image — fades in from right */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
        {/* Light overlay: fully opaque cream on left, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F7] via-[#FAF9F7]/90 to-[#FAF9F7]/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 pt-32 pb-8">
        {/* Top: Headline left + Circular photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] items-start gap-8 mb-14">
          {/* Left — Headline & CTA */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#FEC33B] mb-4"
            >
              HVAC Local SEO Specialist — 2+ Years
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-5xl font-extrabold leading-[1.08] text-[#18055E] sm:text-6xl lg:text-[4rem] mb-6 max-w-xl"
            >
              I Help HVAC Companies Get More Booked Calls From Google.
            </motion.h1>

            {/* Gold underline accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
              className="origin-left h-1 w-16 bg-[#FEC33B] rounded-full mb-6"
            />

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-gray-600 text-base leading-relaxed mb-8 max-w-md"
            >
              When someone&apos;s AC breaks at 9pm they search Google and call the first company they see. I get you to that position — through Local SEO, GBP optimization, and websites built to convert.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
              >
                Get Free HVAC Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#18055E]/20 px-7 py-3.5 text-sm font-semibold text-[#18055E] hover:border-[#18055E]/50 hover:bg-[#18055E]/5 transition-all duration-300"
              >
                See Real Case Study
              </Link>
            </motion.div>
          </div>

          {/* Right — Circular headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            {/* Gold ring + photo */}
            <div className="relative">
              {/* Outer gold glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#FEC33B]/30 blur-xl scale-110" />
              {/* Gold border ring */}
              <div className="relative rounded-full p-1.5 bg-gradient-to-br from-[#FEC33B] to-[#FFD97D] shadow-2xl">
                <div className="rounded-full overflow-hidden w-52 h-52 bg-[#18055E]/10">
                  <Image
                    src="/umair-headshot.webp"
                    alt="Muhammad Umair — HVAC Local SEO Specialist"
                    width={208}
                    height={208}
                    priority
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>

              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="inline-flex items-center rounded-full bg-[#18055E] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FEC33B] shadow-lg">
                  Direct Client Access
                </span>
              </motion.div>
            </div>

            {/* Trust line */}
            <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed max-w-[200px]">
              You work with me directly.<br />No account managers.
            </p>
          </motion.div>
        </div>

        {/* Bottom — 4 Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {serviceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="rounded-2xl bg-white border border-gray-100 shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18055E]/8 mb-3">
                  <Icon className="h-5 w-5 text-[#18055E]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#18055E] leading-tight">
                  {card.label}
                </p>
                <p className="text-[11px] text-gray-500 mt-1">{card.sub}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="relative z-10 h-[3px] bg-gradient-to-r from-[#18055E] via-[#FEC33B] to-transparent" />
    </section>
  );
}
