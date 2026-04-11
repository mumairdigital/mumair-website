"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Star, Phone } from "lucide-react";
import { HeroOrbs } from "@/components/animations/HeroOrbs";
import { CountUp } from "@/components/animations/CountUp";
import { STATS } from "@/lib/constants";

const iconMap = {
  Brain,
  Star,
  Phone,
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden pt-20">
      <HeroOrbs />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/10 px-4 py-2 text-sm text-purple-300 mb-6"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              Helping Home Service Businesses Get More Calls — 2+ Years
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl mb-4"
            >
              Local SEO Expert{" "}
              <span className="gradient-text">Delivering Real Results</span>
            </motion.h1>

            {/* Sub Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-semibold text-purple-400 mb-5"
            >
              Digital Marketing That Fills Your Phone With Leads
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              I specialize in Local SEO, Google Business Profile optimization, high-converting websites, and Google & Meta Ads. I help HVAC companies, plumbers, roofers, and electricians rank #1 on Google and Google Maps in USA & Canada to generate more calls, more leads, and more revenue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:bg-purple-500 hover:scale-105 hover:shadow-purple-400/50 btn-glow"
              >
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 px-7 py-4 text-base font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:text-white hover:bg-purple-600/10"
              >
                See My Results
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Purple gradient card behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 opacity-30 blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-900/50 to-violet-900/30">
                <Image
                  src="/umair.jpg.png"
                  alt="Muhammad Umair — Local SEO & Digital Marketing Expert for Home Service Businesses"
                  width={480}
                  height={520}
                  priority
                  className="object-cover object-top"
                  style={{ maxHeight: "520px" }}
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                  <Brain className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">AI-Powered</div>
                  <div className="text-xs text-gray-500">Marketing</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                  <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">30+ Clients</div>
                  <div className="text-xs text-gray-500">5-Star Results</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
