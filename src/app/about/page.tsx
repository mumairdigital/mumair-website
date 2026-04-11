import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, MapPin } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { CountUp } from "@/components/animations/CountUp";
import { ContactSection } from "@/components/sections/ContactSection";
import { STATS, WHY_CHOOSE_ME, TOOLS, SITE_CONFIG } from "@/lib/constants";
import { MapPin as MapPinIcon, Trophy, Home, Target, MessageCircle, Layers } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin: MapPinIcon,
  Trophy,
  Home,
  Target,
  MessageCircle,
  Layers,
};

export const metadata: Metadata = {
  title: "About Muhammad Umair",
  description:
    "Learn about Muhammad Umair, a Local SEO & Digital Marketing expert with 2+ years helping home service businesses in USA & Canada get more calls and leads.",
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/about` },
};

const skills = [
  { name: "Local SEO & Google Maps", level: 95 },
  { name: "Google Business Profile", level: 98 },
  { name: "Google Ads (PPC)", level: 88 },
  { name: "Meta Ads (Facebook/Instagram)", level: 85 },
  { name: "Web Design & Development", level: 82 },
  { name: "Technical SEO", level: 87 },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-700 opacity-15" style={{ filter: "blur(100px)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <FadeUp>
              <div>
                <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  About Me
                </p>
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-5">
                  Muhammad <span className="gradient-text">Umair</span>
                </h1>
                <p className="text-xl font-semibold text-purple-300 mb-6">
                  Local SEO & Digital Marketing Expert for Home Services
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Hi, I&apos;m Muhammad Umair, a passionate digital marketing consultant with 2+ years of focused experience helping home service businesses across USA and Canada grow their online presence and generate more qualified leads.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  My specialty is Local SEO and Google Business Profile optimization — the combination that consistently gets HVAC companies, plumbers, roofers, and electricians found by customers who are ready to hire right now. I don&apos;t work with just any business — I only work with home service companies, which means I understand your industry deeply.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-extrabold text-white">
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 opacity-20 blur-2xl scale-105" />
                  <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl bg-gradient-to-br from-purple-900/30 to-violet-900/20">
                    <Image
                      src="/umair.jpg.png"
                      alt="Muhammad Umair — Digital Marketing Consultant"
                      width={420}
                      height={480}
                      className="object-cover object-top"
                      style={{ maxHeight: "480px" }}
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 rounded-xl bg-purple-600 px-4 py-2 shadow-lg">
                    <div className="text-xs text-purple-100">Based in Pakistan</div>
                    <div className="text-sm font-bold text-white">Serving USA & Canada</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">My Journey</h2>
          </FadeUp>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <FadeUp>
              <p>
                I started my digital marketing career with a focus on helping local businesses get found online. Early on, I noticed that home service businesses — HVAC companies, plumbers, roofers, electricians — had a huge opportunity to dominate their local markets through Google, but most were either invisible online or paying for mediocre results.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p>
                Over 2+ years, I&apos;ve refined my approach to Local SEO and paid advertising specifically for the home services industry. My results speak for themselves: 400+ monthly calls for HVAC clients, 180%+ organic traffic growth, and $2-$5 cost per conversion on Google Ads — results that most agencies can&apos;t come close to matching.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                My philosophy is simple: every dollar you invest in digital marketing should come back to you multiplied. I combine deep technical expertise in Local SEO with data-driven paid advertising strategies to create a full-funnel lead generation machine for your business.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
              My Expertise
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill, i) => (
              <FadeUp key={skill.name} delay={i * 0.05}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-purple-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Why Choose Me */}
      <section className="bg-[#FAF9F7] py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
              What Sets Me Apart
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_ME.map((reason, i) => {
              const Icon = iconMap[reason.icon] ?? MapPin;
              return (
                <FadeUp key={reason.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm card-hover">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-[#0a0a0a] py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
              Tools & Platforms I Work With
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(TOOLS).map(([category, tools], i) => (
              <FadeUp key={category} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                  <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#FAF9F7] py-16 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Credentials & Specializations</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Google Ads Expert",
                "Local SEO Specialist",
                "Google Business Profile Pro",
                "Meta Ads Expert",
                "Web Design Pro",
                "2+ Years Experience",
                "Home Services Specialist",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
                  <Award className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">{c}</span>
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
              <MapPin className="h-5 w-5 text-purple-500" />
              <span>Based in Pakistan · Serving USA & Canada Remotely</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              I work with clients remotely across all time zones. I use WhatsApp, email, and video calls to ensure seamless communication with every client.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "WhatsApp Communication",
                "Video Strategy Calls",
                "Monthly Reports",
                "24/7 Availability",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-violet-700 py-16 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-purple-100 text-lg mb-8">
              Book a free 30-minute consultation and let&apos;s discuss how I can help your home service business get more leads.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
