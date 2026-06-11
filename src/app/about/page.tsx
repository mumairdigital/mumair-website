import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, MapPin, Wind, Star, Monitor } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Muhammad Umair | HVAC Local SEO Specialist",
  description:
    "Muhammad Umair is an HVAC-only Local SEO specialist helping HVAC companies in the USA rank #1 on Google Maps and get more booked service calls.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/about` },
  openGraph: {
    title: "About Muhammad Umair | HVAC Local SEO Specialist",
    description: "Meet Muhammad Umair — HVAC-only Local SEO expert helping heating and cooling companies dominate Google Maps.",
    url: `${SITE_CONFIG.baseUrl}/about`,
  },
};

const skills = [
  { name: "Google Business Profile Optimization", level: 98 },
  { name: "Local SEO for HVAC", level: 95 },
  { name: "HVAC Website Design & Conversion", level: 88 },
  { name: "Review & Reputation Management", level: 92 },
  { name: "Local Citation Building", level: 90 },
  { name: "Google Search Console & Analytics", level: 87 },
];

const whatIDo = [
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "I get HVAC companies into the local 3-pack so customers searching for AC repair, furnace service, or HVAC installation call you first.",
  },
  {
    icon: Wind,
    title: "HVAC Local SEO",
    description: "Organic local rankings that compound over time — your business shows up month after month without paying for ads.",
  },
  {
    icon: Monitor,
    title: "HVAC Websites",
    description: "Conversion-focused websites built specifically for HVAC companies — fast, mobile-first, and structured to turn visitors into booked calls.",
  },
  {
    icon: Star,
    title: "Reviews & Reputation",
    description: "A systematic approach to generating genuine 5-star reviews that build trust and send stronger ranking signals to Google.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAF9F7] pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#18055E] opacity-5" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <FadeUp>
              <div>
                <p className="text-[#FEC33B] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  About Muhammad Umair
                </p>
                <h1 className="text-4xl font-extrabold text-[#18055E] sm:text-5xl mb-4 leading-tight">
                  HVAC Local SEO Specialist
                </h1>
                <div className="h-1 w-16 bg-[#FEC33B] rounded-full mb-6" />
                <p className="text-xl font-semibold text-gray-700 mb-6">
                  I help HVAC companies get more booked service calls from Google — through Local SEO, GBP optimization, and websites built to convert.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hi, I&apos;m Muhammad Umair. HVAC is the only niche I work in. Not HVAC plus plumbing, not home services in general — just HVAC. That focus means I know exactly what it takes to rank an HVAC company in your market, what customers are searching for when their AC breaks down, and which signals Google uses to decide who gets the call.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I work directly with every client. No account managers, no outsourced team. When you email me, I reply. When we have a strategy call, it&apos;s me on the other end — not a junior analyst.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
                  >
                    Get Free HVAC Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-study"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#18055E]/20 px-7 py-3.5 text-sm font-semibold text-[#18055E] hover:border-[#18055E]/50 transition-all duration-300"
                  >
                    See Case Study
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#18055E] to-[#2A0B7A] opacity-15 blur-2xl scale-105" />
                  <div className="relative rounded-3xl overflow-hidden border border-[#18055E]/20 shadow-2xl">
                    <Image
                      src="/umair-headshot.webp"
                      alt="Muhammad Umair — HVAC Local SEO Specialist"
                      width={440}
                      height={500}
                      className="object-cover object-top"
                      style={{ maxHeight: "500px" }}
                      priority
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 rounded-xl bg-[#18055E] px-4 py-2 shadow-lg">
                    <div className="text-xs text-[#FEC33B] font-semibold">HVAC Only</div>
                    <div className="text-sm font-bold text-white">Specialist</div>
                  </div>
                  <div className="absolute -bottom-3 -left-3 rounded-xl bg-white px-4 py-2 shadow-lg border border-gray-100">
                    <div className="text-xs text-gray-500">Experience</div>
                    <div className="text-lg font-extrabold text-[#18055E]">2+ Years</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">Services</p>
              <h2 className="text-3xl font-extrabold text-[#18055E] sm:text-4xl mb-3">
                What I Do for HVAC Companies
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Four focused services — each one designed to put your HVAC business in front of customers who are ready to book right now.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatIDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-gray-100 bg-[#FAF9F7] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#18055E]/10 mb-4">
                      <Icon className="h-6 w-6 text-[#18055E]" />
                    </div>
                    <h3 className="text-base font-bold text-[#18055E] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-working.webp"
                  alt="Muhammad Umair working on HVAC local SEO strategy"
                  width={520}
                  height={400}
                  className="object-cover w-full"
                  style={{ maxHeight: "400px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18055E]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">HVAC-Only Focus</p>
                  <p className="text-[#FEC33B] text-sm">Not a side offering — it&apos;s all I do</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">My Approach</p>
                <h2 className="text-3xl font-extrabold text-[#18055E] mb-5">Why I Only Work With HVAC Companies</h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Early in my career I worked with all kinds of local businesses. Over time I noticed that depth beats breadth — the more focused I became on a single industry, the better my results got for every client in that industry.
                  </p>
                  <p>
                    HVAC is a high-intent, high-ticket, high-urgency market. When someone&apos;s AC fails in July, they search Google and call the first company they see. Getting you to that position — and keeping you there — is a specific skill set that requires knowing the HVAC market deeply.
                  </p>
                  <p>
                    I made the decision to go HVAC-only so I could build genuine expertise in your niche, not spread myself thin across dozens of industries.
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  {[
                    "HVAC is my only niche — not a side offering",
                    "You talk directly to me, not an account manager",
                    "Real data from Google Search Console every month",
                    "No long-term contracts — earn your trust monthly",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#18055E] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-[#18055E] mb-10 text-center">
              My HVAC Marketing Skills
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill, i) => (
              <FadeUp key={skill.name} delay={i * 0.05}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-[#18055E] font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#18055E] to-[#2A0B7A]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#FAF9F7] py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-[#18055E] mb-8">Credentials & Specializations</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "HVAC Local SEO Specialist",
                "Google Business Profile Pro",
                "Local Citation Building",
                "Reputation Management",
                "HVAC Web Design",
                "2+ Years HVAC Focus",
                "Google Search Console",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-full border border-[#18055E]/20 bg-[#18055E]/5 px-4 py-2">
                  <Award className="h-4 w-4 text-[#18055E]" />
                  <span className="text-sm font-medium text-[#18055E]">{c}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-12 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-4">
              <MapPin className="h-5 w-5 text-[#18055E]" />
              <span>Based in Pakistan · Serving HVAC Companies Across the USA Remotely</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              I work with clients remotely. Strategy calls, monthly reports, and ongoing communication via WhatsApp and email — seamless no matter your time zone.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "WhatsApp Communication",
                "Video Strategy Calls",
                "Monthly Reports",
                "Fast Response Time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#18055E]" />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#18055E] to-[#2A0B7A] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Get More HVAC Calls From Google?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a free consultation. I&apos;ll audit your current Google presence and tell you exactly where the opportunity is in your market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FEC33B] px-8 py-4 text-base font-bold text-[#18055E] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Free HVAC Audit <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}