import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Search, MapPin, AlertCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Study: Recovering a Local Business That Had Vanished From Google | Muhammad Umair",
  description:
    "How I rebuilt the local SEO foundation for a local business whose Google visibility had collapsed. Real Search Console and Google Business Profile screenshots included.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/case-study` },
  openGraph: {
    title: "Case Study: Recovering a Local Business That Had Vanished From Google",
    description: "Real Search Console and GBP data showing recovery after a full local SEO rebuild.",
    url: `${SITE_CONFIG.baseUrl}/case-study`,
  },
};

const timeline = [
  {
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-100",
    phase: "Discovery",
    title: "Google visibility had collapsed",
    details: [
      "Rankings gone — not appearing for local searches that used to bring in customers",
      "Organic search traffic flatlined in Google Search Console",
      "Local visibility near zero despite the business being established",
      "Technical issues on the site holding back any recovery",
    ],
  },
  {
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-100",
    phase: "Technical Fixes",
    title: "Technical issues identified and resolved",
    details: [
      "Full technical SEO audit via Google Search Console and crawl tools",
      "Identified and fixed crawl errors, indexing issues, and page structure problems",
      "Restructured the site for local search — page titles, headers, meta data, internal linking",
      "Schema markup added for local business signals",
    ],
  },
  {
    icon: MapPin,
    color: "text-[#18055E]",
    bg: "bg-[#18055E]/10",
    phase: "GBP Optimization",
    title: "Google Business Profile rebuilt and optimised",
    details: [
      "Complete audit of the existing GBP — gaps, missing categories, incomplete attributes",
      "Full profile optimisation: categories, services, description, photos, attributes",
      "Google Posts strategy implemented and maintained",
      "Citation consistency audited and fixed across key directories",
    ],
  },
  {
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-100",
    phase: "Reviews & Reporting",
    title: "Review system and reporting in place",
    details: [
      "Review generation system set up — consistent flow of real reviews from customers",
      "Monthly reporting from Google Search Console and GBP Insights",
      "Ranking tracking for target local keywords",
      "Ongoing optimisation based on real data, not guesswork",
    ],
  },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#18055E] opacity-20 pointer-events-none" style={{ filter: "blur(80px)" }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FEC33B]/30 bg-[#FEC33B]/10 px-4 py-2 text-sm text-[#FEC33B] mb-6">
              <TrendingUp className="h-4 w-4" />
              Case Study · Home Improvement · Birmingham, UK
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-5 leading-tight">
              Case Study: Recovering a Local Business That Had Vanished From Google
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              A local business whose Google visibility had collapsed — rankings gone, search traffic flatlined, barely showing up for the local searches that brought in customers. Here&apos;s what I did and what the data shows.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Technical SEO", "Local SEO", "GBP Optimization", "Reviews System"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#FEC33B]/30 bg-[#FEC33B]/10 px-4 py-1.5 text-xs font-semibold text-[#FEC33B]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Context */}
      <section className="bg-zinc-950 border-t border-white/5 py-12 px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Background</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A local tile retailer based in Birmingham, UK — a home-improvement business serving residential and trade customers. They had built up local search presence over the years, but Google visibility had collapsed. Rankings were gone and search traffic had flatlined.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                By the time they reached out, they were barely showing up for the local searches that had previously brought in customers. I rebuilt the local SEO foundation from scratch — technical fixes, site restructure, GBP optimisation, and a review system.
              </p>
              <p className="text-[#FEC33B]/80 text-sm leading-relaxed border border-[#FEC33B]/20 rounded-xl p-4">
                Data is straight from Google Search Console and Google Business Profile dashboard — verifiable. This is the same system I build for HVAC companies. Local search works the same whether it is a tile retailer in Birmingham or an AC company in Cape Coral.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Timeline / What I Did */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
              What I Did — Step by Step
            </h2>
          </FadeUp>

          <div className="space-y-6">
            {timeline.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeUp key={step.phase} delay={i * 0.08}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.bg} shrink-0`}>
                        <Icon className={`h-5 w-5 ${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{step.phase}</span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
                        <ul className="space-y-2">
                          {step.details.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After Screenshots */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
              Search Console — Before &amp; After
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
              These screenshots are from Google Search Console. The data is real and verifiable.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            <FadeUp delay={0.05}>
              <div>
                <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Before — Visibility Collapsed</p>
                <div className="rounded-2xl overflow-hidden border border-red-200 shadow-md">
                  <Image
                    src="/mhtiles-search-console-before.jpeg"
                    alt="Google Search Console screenshot before — showing collapsed organic traffic"
                    width={700}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Organic impressions and clicks had dropped sharply. The business was not appearing for local searches that had previously brought in customers.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">After — Recovery in Progress</p>
                <div className="rounded-2xl overflow-hidden border border-green-200 shadow-md">
                  <Image
                    src="/mhtiles-search-console-after.png"
                    alt="Google Search Console screenshot after local SEO rebuild — showing recovering organic traffic"
                    width={700}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  After technical fixes, site restructure, and local SEO rebuild — organic visibility recovering. Data straight from Google Search Console.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* GMB Impressions */}
          <FadeUp delay={0.15}>
            <div>
              <p className="text-sm font-semibold text-[#18055E] uppercase tracking-wider mb-3 text-center">Google Business Profile — Impressions Growth</p>
              <div className="rounded-2xl overflow-hidden border border-[#18055E]/20 shadow-md max-w-2xl mx-auto">
                <Image
                  src="/mhtiles-gmb-impressions.png"
                  alt="Google Business Profile impressions chart showing growth after GBP optimization"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center max-w-xl mx-auto">
                GBP impressions trend after rebuilding and optimising the Google Business Profile. Data from Google Business Profile dashboard.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Want the same system built for your HVAC company?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Free HVAC visibility audit — I&apos;ll review your GBP, site, and local rankings and tell you honestly what I think the opportunity is.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-8 py-4 text-base font-bold text-[#18055E] shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              Get a Free HVAC Visibility Audit <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
