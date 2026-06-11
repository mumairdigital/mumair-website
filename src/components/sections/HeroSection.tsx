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
      {/* Background image with strong navy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Full dark base layer so nothing bleeds through */}
        <div className="absolute inset-0 bg-[#18055E]/70" />
        {/* Directional gradient — left fully opaque, right shows more image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0428] via-[#18055E]/80 to-[#18055E]/20" />
      </div>

      <HeroOrbs />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 md:px-8 pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FEC33B]/40 bg-[#FEC33B]/10 px-4 py-2 text-sm text-[#FEC33B] mb-5"
            >
              <Wind className="h-4 w-4" />
              HVAC Local SEO Specialist — 2+ Years
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl mb-3"
            >
              I Help HVAC Companies{" "}
              <span className="gradient-text">Get More Booked Calls</span>{" "}
              From Google
            </motion.h1>

            {/* Sub Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base font-semibold text-[#FEC33B] mb-4"
            >
              Local SEO · Google Business Profile · HVAC Websites
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-200 text-base leading-relaxed mb-6 max-w-lg"
            >
              When someone&apos;s AC breaks at 9pm they search &ldquo;AC repair near me&rdquo; and call the first company they see. I get you to that position — through Local SEO, Google Business Profile optimization, and websites built to convert. You work directly with me. No agency handoffs. No invented numbers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-6 py-3.5 text-sm font-semibold text-[#18055E] shadow-lg shadow-[#FEC33B]/20 transition-all duration-300 hover:bg-yellow-300 hover:scale-105 btn-glow"
              >
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10"
              >
                See Real Case Study
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-1.5"
            >
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#FEC33B] shrink-0" />
                  <span className="text-sm text-gray-200">{signal}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#18055E] to-[#2A0B7A] opacity-40 blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden border border-[#FEC33B]/20 shadow-2xl shadow-[#18055E]/50 bg-gradient-to-br from-[#18055E]/50 to-[#2A0B7A]/30">
                <Image
                  src="/umair-headshot.webp"
                  alt="Muhammad Umair — HVAC Local SEO Specialist"
                  width={380}
                  height={420}
                  priority
                  className="object-cover object-top"
                  style={{ maxHeight: "420px" }}
                />
              </div>

              {/* Floating Badge — Specialist */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#18055E]/10">
                  <Wind className="h-4 w-4 text-[#18055E]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">HVAC Specialist</div>
                  <div className="text-xs text-gray-500">Primary Focus</div>
                </div>
              </motion.div>

              {/* Floating Badge — Real Data */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEC33B]/20">
                  <Phone className="h-4 w-4 text-[#18055E]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Real Data</div>
                  <div className="text-xs text-gray-500">Verifiable Results</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
