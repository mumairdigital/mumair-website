import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldAlert, ShieldCheck, TrendingUp, Search, MapPin } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Study: Recovering Local Visibility After a Malware Attack | Muhammad Umair",
  description:
    "How I cleaned a malware infection, removed 15,000+ spam indexed pages, and rebuilt the local SEO foundation for a UK home-improvement business. Real Search Console and GMB screenshots included.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/case-study` },
  openGraph: {
    title: "Case Study: Recovering Local Visibility After a Malware Attack",
    description: "Real Search Console and GMB data showing recovery after malware cleanup and local SEO rebuild.",
    url: `${SITE_CONFIG.baseUrl}/case-study`,
  },
};

const timeline = [
  {
    icon: ShieldAlert,
    color: "text-red-500",
    bg: "bg-red-100",
    phase: "Discovery",
    title: "Malware found, site trust collapsed",
    details: [
      "Trojan plugin installed by attacker — created backdoor admin accounts",
      "15,000+ spam pages quietly indexed on Google over time",
      "Organic search rankings had collapsed; local visibility near zero",
      "Google trust signals severely damaged",
    ],
  },
  {
    icon: ShieldCheck,
    color: "text-orange-500",
    bg: "bg-orange-100",
    phase: "Cleanup & Security",
    title: "Malware removed, site secured",
    details: [
      "Identified and removed the trojan plugin and all injected files",
      "Deleted all backdoor admin accounts and reset credentials",
      "Hardened WordPress security to prevent re-infection",
      "Requested Google Search Console reconsideration after cleanup",
    ],
  },
  {
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-100",
    phase: "Spam Removal",
    title: "15,000+ spam pages purged from Google",
    details: [
      "Identified the full scope of spam-indexed pages via Search Console",
      "Removed all spam content from the site",
      "Used proper removal tools and noindex directives to deindex remaining pages",
      "Monitored index coverage over weeks to confirm cleanup was complete",
    ],
  },
  {
    icon: MapPin,
    color: "text-[#18055E]",
    bg: "bg-[#18055E]/10",
    phase: "Local SEO Rebuild",
    title: "Local search foundation rebuilt",
    details: [
      "Rebuilt and fully optimized the Google Business Profile",
      "Audited and fixed citation consistency across directories",
      "Rebuilt on-page local SEO signals (title tags, schema, NAP)",
      "Established a review generation process to rebuild trust signals",
    ],
  },
  {
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-100",
    phase: "Results",
    title: "Visibility recovering — real data below",
    details: [
      "[X% increase in organic clicks — you'll add the exact figure here]",
      "[GMB impressions grew from A to B between date range]",
      "[GMB calls grew from A to B between date range]",
      "Spam index fully cleared; site now clean and secure",
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
              <ShieldCheck className="h-4 w-4" />
              Case Study · Home Improvement · Birmingham, UK
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-5 leading-tight">
              How I Recovered and Grew a Home-Improvement Business&apos;s Local Visibility
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              A UK tile retailer (Birmingham) came to me with a serious malware infection — trojan plugin, backdoor admin accounts, 15,000+ spam pages indexed on Google, and collapsing rankings. Here&apos;s exactly what I found, what I did, and what the data shows.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Malware Cleanup", "Technical SEO", "Local SEO", "GBP Optimization"].map((tag) => (
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
                The client is a tile retailer based in Birmingham, UK — a home-improvement business serving residential and trade customers in the local area. They had built up some local search presence over the years, but after an attacker gained access through a vulnerable plugin, their situation deteriorated quickly.
              </p>
              <p className="text-gray-400 leading-relaxed">
                By the time they reached out, Google had indexed over 15,000 spam pages from their domain. Organic visibility had collapsed and the site was being flagged in Google Search Console. Local ranking had essentially disappeared.
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
              These screenshots are from Google Search Console. You can see the spam-injection period and the recovery trajectory after cleanup.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            <FadeUp delay={0.05}>
              <div>
                <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Before — Spam Period + Ranking Collapse</p>
                <div className="rounded-2xl overflow-hidden border border-red-200 shadow-md">
                  <Image
                    src="/mhtiles-search-console-before.jpeg"
                    alt="MH Tiles Google Search Console screenshot before malware cleanup — showing spam pages and collapsed organic traffic"
                    width={700}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Organic impressions and clicks dropped sharply after spam pages were injected and Google began penalizing the domain.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">After — Recovery in Progress</p>
                <div className="rounded-2xl overflow-hidden border border-green-200 shadow-md">
                  <Image
                    src="/mhtiles-search-console-after.png"
                    alt="MH Tiles Google Search Console screenshot after malware cleanup and local SEO rebuild — showing recovering organic traffic"
                    width={700}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  After cleanup, spam removal, and local SEO rebuild — organic visibility recovering. Exact figures: [X% increase in clicks, date range — fill in].
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
                  alt="MH Tiles Google Business Profile impressions chart showing growth after GBP optimization"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center max-w-xl mx-auto">
                GBP impressions trend after rebuilding the Google Business Profile and local SEO foundation. GMB calls: [A to B, date range — fill in].
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-[#FAF9F7] py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Results Summary</h2>
            <p className="text-gray-500 text-center mb-8 max-w-lg mx-auto text-sm">
              I&apos;ll fill in the exact numbers shortly. Placeholders marked below.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Spam Pages Removed", value: "15,000+", verified: true },
              { label: "Organic Click Growth", value: "[X%]", verified: false },
              { label: "GMB Call Growth", value: "[A → B]", verified: false },
              { label: "Security Status", value: "Clean", verified: true },
            ].map((m) => (
              <FadeUp key={m.label}>
                <div className={`rounded-2xl border p-5 text-center ${m.verified ? "border-[#18055E]/20 bg-white" : "border-dashed border-gray-300 bg-white"}`}>
                  <div className={`text-2xl font-extrabold mb-1 ${m.verified ? "text-[#18055E]" : "text-gray-400"}`}>{m.value}</div>
                  <div className="text-xs text-gray-500">{m.label}</div>
                  {!m.verified && <div className="text-xs text-amber-500 mt-1">Placeholder</div>}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Dealing with a similar problem — or just want more calls?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a free consultation. I&apos;ll look at your current setup and tell you honestly what I think the opportunity is.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-8 py-4 text-base font-bold text-[#18055E] shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              Get a Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
