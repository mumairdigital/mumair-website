import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactSection } from "@/components/sections/ContactSection";
import { CASE_STUDIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Real results from real home service businesses. See how Muhammad Umair helped HVAC, plumbing, and roofing companies get more calls and leads through Local SEO and digital marketing.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/portfolio` },
};

const badgeColors: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-200",
  green: "bg-green-500/10 text-green-600 border-green-200",
  purple: "bg-purple-500/10 text-purple-600 border-purple-200",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Real Projects, <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Verified case studies from home service businesses across USA & Canada. These are real results from real clients — no inflated numbers, no guesswork.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10">
            {CASE_STUDIES.map((study, i) => (
              <FadeUp key={study.id} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left — Overview */}
                    <div className="bg-gradient-to-br from-purple-600 to-violet-700 p-8 text-white">
                      <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold mb-4 bg-white/20 border-white/30 text-white`}>
                        {study.badge}
                      </span>
                      <h2 className="text-2xl font-extrabold mb-1">{study.resultHeadline}</h2>
                      <p className="text-purple-100 font-semibold mb-6">{study.company}</p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-purple-100 text-sm">
                          <MapPin className="h-4 w-4" />
                          {study.location}
                        </div>
                        <div className="flex items-center gap-2 text-purple-100 text-sm">
                          <Clock className="h-4 w-4" />
                          {study.duration}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.services.map((s) => (
                          <span key={s} className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — Details */}
                    <div className="p-8 lg:col-span-2">
                      <p className="text-gray-600 leading-relaxed mb-8">{study.description}</p>

                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                        Key Results
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
                        {study.metrics.map((m) => (
                          <div key={m.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
                            <div className="text-xl font-extrabold text-purple-600 mb-1">{m.value}</div>
                            <div className="text-xs text-gray-500">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {[
                          "Increased monthly calls",
                          "Higher Google Maps ranking",
                          "Better cost per lead",
                          "Improved online reputation",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-1.5 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#0a0a0a] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Want Results Like These for Your Business?
            </h2>
            <p className="text-gray-400 mb-8">
              Every case study started with a free 30-minute consultation. Let&apos;s see what&apos;s possible for your home service business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:scale-105 transition-all duration-300 btn-glow"
            >
              Get My Free Strategy Session <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
