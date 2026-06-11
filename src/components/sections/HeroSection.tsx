"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Wind } from "lucide-react";
import { HeroOrbs } from "@/components/animations/HeroOrbs";

const trustSignals = [
  "HVAC is my only niche — not a side offering",
  "You work directly with me, not a junior handler",
  "Real data: Search Console and GBP screenshots provided",
];

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image — moderate overlay so it stays visible */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Moderate overlay: left side darker for text legibility, right side lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18055E]/90 via-[#18055E]/65 to-[#18055E]/35" />
      </div>

      {/* Gold accent line at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FEC33B]/60 via-[#FEC33B]/20 to-transparent z-20" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 md:px-8 pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FEC33B]/40 bg-[#FEC33B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FEC33B] mb-5"
            >
              <Wind className="h-3.5 w-3.5" />
              HVAC Local SEO Specialist — 2+ Years
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem] mb-4"
            >
              I Help HVAC Companies{" "}
              <span className="gradient-text">Get More Booked Calls</span>{" "}
              From Google
            </motion.h1>

            {/* Gold divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="origin-left h-[2px] w-24 bg-[#FEC33B] mb-4 rounded-full"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-200 text-base leading-relaxed mb-7 max-w-[500px]"
            >
              When someone&apos;s AC breaks at 9pm they search &ldquo;AC repair near me&rdquo; and call the first company they see. I get you to that position — through Local SEO, Google Business Profile optimization, and websites built to convert. You work directly with me. No agency handoffs. No invented numbers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-7 py-3.5 text-sm font-bold text-[#18055E] shadow-lg shadow-[#FEC33B]/25 transition-all duration-300 hover:bg-yellow-300 hover:scale-105 btn-glow"
              >
                Get Free HVAC Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                See Real Case Study
              </Link>
            </motion.div>

            {/* Trust Signals — horizontal row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-[#FEC33B] shrink-0" />
                  <span className="text-xs text-gray-300">{signal}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Headshot — premium card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-[2rem] border border-[#FEC33B]/15 scale-105" />
            <div className="absolute inset-0 rounded-[2rem] border border-white/5 scale-110" />

            <div className="relative w-full">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FEC33B]/10 to-[#18055E]/60 blur-2xl scale-110" />

              {/* Photo card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(254,195,59,0.15)" }}>
                <Image
                  src="/umair-headshot.webp"
                  alt="Muhammad Umair — HVAC Local SEO Specialist"
                  width={420}
                  height={460}
                  priority
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "460px" }}
                />
                {/* Subtle gradient fade at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#18055E]/50 to-transparent" />
              </div>
              </div>

              {/* Floating Badge — Specialist */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-sm px-3.5 py-2.5 shadow-2xl border border-gray-100"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#18055E]">
                  <Wind className="h-4 w-4 text-[#FEC33B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">HVAC Specialist</div>
                  <div className="text-[10px] text-gray-500 font-medium">Only Niche</div>
                </div>
              </motion.div>

              {/* Floating Badge — Real Data */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-sm px-3.5 py-2.5 shadow-2xl border border-gray-100"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEC33B]">
                  <Phone className="h-4 w-4 text-[#18055E]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Real Data</div>
                  <div className="text-[10px] text-gray-500 font-medium">GSC + GBP verified</div>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
