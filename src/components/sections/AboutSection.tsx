import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Briefcase, Clock, Trophy } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { STATS } from "@/lib/constants";

const statIcons = [Clock, Users, Briefcase, Trophy];

export function AboutSection() {
  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <FadeUp>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#18055E] to-[#2A0B7A] opacity-20 blur-2xl scale-105" />
                <div className="relative rounded-3xl overflow-hidden border border-[#18055E]/20 shadow-2xl bg-gradient-to-br from-[#18055E]/5 to-[#2A0B7A]/10">
                  <Image
                    src="/umair-headshot.webp"
                    alt="Muhammad Umair — HVAC Local SEO Specialist"
                    width={440}
                    height={480}
                    className="object-cover object-top"
                    style={{ maxHeight: "480px" }}
                  />
                </div>

                {/* Floating stat badges */}
                <div className="absolute -top-3 -right-3 rounded-xl bg-[#18055E] px-4 py-2 text-white text-sm font-bold shadow-lg">
                  HVAC Specialist
                </div>
                <div className="absolute -bottom-3 -left-3 rounded-xl bg-white px-4 py-2 shadow-lg">
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="text-lg font-extrabold text-[#18055E]">2+ Years</div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Text Side */}
          <FadeUp delay={0.15}>
            <div>
              <p className="text-[#18055E] text-sm font-semibold uppercase tracking-wider mb-3">
                About Muhammad Umair
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                HVAC Local SEO Specialist
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Hi, I&apos;m Muhammad Umair. I help HVAC companies get more booked service calls from Google. My focus is Local SEO and Google Business Profile optimization — the combination that puts HVAC businesses in front of customers who are ready to hire right now, in their city.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                I work directly with every client — no account managers, no outsourced team. I keep my client load intentionally small so I can give each business the attention it deserves. If you want to work with me, I&apos;ll tell you honestly what I think the opportunity looks like in your market, and I&apos;ll back everything I say with real data.
              </p>

              {/* Stat Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {STATS.map((stat, i) => {
                  const Icon = statIcons[i];
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 p-4 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#18055E]/10 shrink-0">
                        <Icon className="h-5 w-5 text-[#18055E]" />
                      </div>
                      <div>
                        <div className="text-xl font-extrabold text-[#18055E]">
                          {stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#18055E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#18055E]/30 hover:bg-[#2A0B7A] hover:scale-105 transition-all duration-300"
              >
                Learn More About Me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
