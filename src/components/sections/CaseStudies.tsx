import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { CASE_STUDIES } from "@/lib/constants";

const badgeColors: Record<string, string> = {
  blue: "bg-blue-500/20 text-blue-400",
  green: "bg-green-500/20 text-green-400",
  purple: "bg-purple-500/20 text-purple-400",
};

export function CaseStudies() {
  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-purple-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Success Stories
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              Real Projects, Real Results
            </h2>
            <p className="text-gray-600 text-lg">
              Verified case studies from home service businesses across USA & Canada
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-10">
          {CASE_STUDIES.map((study, i) => (
            <FadeUp key={study.id} delay={i * 0.1}>
              <div className="rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden card-hover h-full flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600/10 to-violet-600/10 border-b border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[study.badgeColor]}`}>
                      {study.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5" />
                      {study.duration}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{study.company}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {study.location}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-2xl font-extrabold text-purple-600 mb-2">
                    {study.resultHeadline}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {study.description}
                  </p>

                  {/* Services used */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg bg-gray-50 p-2 text-center">
                        <div className="text-sm font-bold text-gray-900">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:scale-105 transition-all duration-300"
            >
              View Detailed Case Studies <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
