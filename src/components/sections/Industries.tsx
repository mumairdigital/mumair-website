import { Wind, Home } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { INDUSTRIES } from "@/lib/constants";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Home,
};

export function Industries() {
  return (
    <section className="bg-[#FAF9F7] section-padding border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              Who I Work With
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              HVAC is my primary focus. I also work with plumbers, roofers, electricians, and related home services.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? Home;
            const isPrimary = i === 0;
            return (
              <FadeUp key={industry.title} delay={i * 0.1}>
                <div className={`rounded-2xl overflow-hidden card-hover h-full ${isPrimary ? "border-2 border-[#18055E]/30 shadow-lg" : "border border-gray-100 shadow-md"} bg-white`}>
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${industry.color} p-6`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {isPrimary && (
                        <span className="rounded-full bg-[#FEC33B] px-3 py-1 text-xs font-bold text-[#18055E]">
                          Primary Focus
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    {isPrimary && (
                      <div className="rounded-xl overflow-hidden border border-gray-100 mb-4">
                        <Image
                          src="/hvac-technician.webp"
                          alt="HVAC technician servicing an air conditioning unit"
                          width={480}
                          height={200}
                          className="w-full object-cover"
                          style={{ maxHeight: "160px" }}
                        />
                      </div>
                    )}
                    <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                      <p className="text-xs text-gray-500 mb-0.5">Note</p>
                      <p className="text-sm font-semibold text-[#18055E]">{industry.example}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
