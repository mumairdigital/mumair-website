import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, CheckCircle, TrendingUp } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactSection } from "@/components/sections/ContactSection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies & Results | Muhammad Umair",
  description:
    "Real Local SEO results from real businesses. See how Muhammad Umair uses GBP optimization, Local SEO, and review management to increase calls and rankings.",
  alternates: { canonical: SITE_CONFIG.baseUrl + "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAF9F7] pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#18055E] opacity-5" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="mx-auto max-w-4xl text-center relative">
          <FadeUp>
            <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Verified Results
            </p>
            <h1 className="text-4xl font-extrabold text-[#18055E] sm:text-5xl mb-4 leading-tight">
              Real Projects, Real Results
            </h1>
            <div className="h-1 w-16 bg-[#FEC33B] rounded-full mb-6 mx-auto" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every result I share is backed by verifiable data from Google Search Console and Google Business Profile. No invented numbers — everything you see can be confirmed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case Study — MH Tiles */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] p-8 md:p-10 text-white">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block rounded-full bg-[#FEC33B]/20 border border-[#FEC33B]/30 px-3 py-1 text-xs font-bold text-[#FEC33B] mb-3">
                      Local SEO · Google Business Profile
                    </span>
                    <h2 className="text-2xl font-extrabold md:text-3xl mb-2">
                      Recovering a Business That Had Disappeared From Google
                    </h2>
                    <p className="text-blue-200 text-sm">MH Tiles — UK-based tile retailer</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 text-blue-200 text-sm">
                      <MapPin className="h-4 w-4" />
                      United Kingdom
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-200 text-sm">
                      <Clock className="h-4 w-4" />
                      ~4 months
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed max-w-3xl">
                  MH Tiles had been established online for years, but their Google visibility had collapsed — they were getting almost no impressions or clicks from local search. I rebuilt their local SEO foundation from scratch: technical fixes, GBP optimization, citation cleanup, and a review generation system. The results were tracked entirely through Google Search Console and GBP Insights.
                </p>
              </div>

              {/* Before & After Screenshots */}
              <div className="bg-[#FAF9F7] p-8 md:p-10 border-t border-gray-100">
                <h3 className="text-lg font-bold text-[#18055E] mb-6 text-center">Search Console Data — Before & After</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 text-center">Before</p>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                      <Image
                        src="/mhtiles-search-console-before.jpeg"
                        alt="MH Tiles Search Console before Local SEO work"
                        width={600}
                        height={300}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#18055E] uppercase tracking-wide mb-3 text-center">After</p>
                    <div className="rounded-2xl overflow-hidden border border-[#18055E]/20 shadow-md">
                      <Image
                        src="/mhtiles-search-console-after.png"
                        alt="MH Tiles Search Console after Local SEO work"
                        width={600}
                        height={300}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* GBP Impressions */}
                <div className="mb-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 text-center">GBP Impressions Growth</p>
                  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md max-w-2xl mx-auto">
                    <Image
                      src="/mhtiles-gmb-impressions.png"
                      alt="MH Tiles Google Business Profile impressions growth"
                      width={700}
                      height={250}
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* What Was Done */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">What I Did</h4>
                    <ul className="space-y-2">
                      {[
                        "Full technical SEO audit and fixes",
                        "Google Business Profile rebuild and optimization",
                        "Local citation cleanup and NAP consistency",
                        "Review generation system setup",
                        "On-page local SEO optimization",
                        "Monthly tracking via Search Console",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-[#18055E] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Verifiable Results</h4>
                    <ul className="space-y-2">
                      {[
                        "Significant increase in organic impressions",
                        "Higher click-through rate from local search",
                        "GBP impressions trending up consistently",
                        "All data from Google Search Console & GBP",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <TrendingUp className="h-4 w-4 text-[#18055E] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-xl bg-[#18055E]/5 border border-[#18055E]/10 p-4">
                      <p className="text-xs text-[#18055E] font-semibold">
                        All screenshots are from real Search Console and GBP data. I share the same level of transparency with every client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HVAC Bridge */}
      <section className="bg-[#FAF9F7] py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-extrabold text-[#18055E] mb-4">
                This Same System Works for HVAC Companies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The process I used to recover MH Tiles — technical fixes, GBP rebuild, citation cleanup, review system — is the same system I apply to HVAC companies. The mechanics of Local SEO are consistent; what changes is the industry-specific keyword strategy, the seasonal search pattern awareness, and the competitive landscape specific to HVAC markets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                HVAC is a higher-urgency market than tile retail. When someone&apos;s AC breaks at 9pm on a July Friday, they search Google and call the first business they see. The company that&apos;s optimized for that moment gets the call. That&apos;s the opportunity I help HVAC businesses capture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I&apos;m currently focused on building HVAC-specific case studies with clients who are comfortable sharing their data. If you&apos;d like to see what the opportunity looks like in your specific market, a free audit is the place to start.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
              >
                Get Free HVAC Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="bg-[#18055E] py-12 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              A Note on Transparency
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-6">
              I don&apos;t show invented numbers, stock screenshots, or testimonials I can&apos;t verify. Every data point I share with clients comes from Google Search Console, GBP Insights, or Google Analytics — platforms you can access yourself. If I show you a result, you can verify it.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Google Search Console data",
                "GBP Insights reporting",
                "No fabricated statistics",
                "Verifiable by clients",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-[#FEC33B]">
                  <CheckCircle className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </>
  );
}