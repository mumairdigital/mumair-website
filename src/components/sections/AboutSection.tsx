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
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 opacity-20 blur-2xl scale-105" />
                <div className="relative rounded-3xl overflow-hidden border border-purple-200 shadow-2xl bg-gradient-to-br from-purple-50 to-violet-50">
                  <Image
                    src="/umair.jpg.png"
                    alt="Muhammad Umair — Local SEO & Digital Marketing Strategist"
                    width={440}
                    height={480}
                    className="object-cover object-top"
                    style={{ maxHeight: "480px" }}
                  />
                </div>

                {/* Floating stat badges */}
                <div className="absolute -top-3 -right-3 rounded-xl bg-purple-600 px-4 py-2 text-white text-sm font-bold shadow-lg">
                  2+ Years Expert
                </div>
                <div className="absolute -bottom-3 -left-3 rounded-xl bg-white px-4 py-2 shadow-lg">
                  <div className="text-xs text-gray-500">Clients Served</div>
                  <div className="text-lg font-extrabold text-purple-600">30+</div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Text Side */}
          <FadeUp delay={0.15}>
            <div>
              <p className="text-purple-600 text-sm font-semibold uppercase tracking-wider mb-3">
                About Muhammad Umair
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Local SEO & Digital Marketing Strategist
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Hi, I&apos;m Muhammad Umair, a digital marketing consultant with 2+ years of experience helping home service businesses in USA and Canada rank on Google and Google Maps. I specialize in Local SEO and Google Business Profile optimization — the combination that gets HVAC companies, plumbers, roofers, and electricians found by customers ready to hire right now.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Past results include 400+ monthly calls for an HVAC client, 180%+ organic traffic growth, and $2-$5 cost per conversion on Google Ads. I only work with home service businesses, which means I understand your industry deeply and know exactly what works.
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 shrink-0">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xl font-extrabold text-gray-900">
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
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:scale-105 transition-all duration-300"
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
