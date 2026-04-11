import { Wind, Droplets, Home } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Droplets,
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
              I&apos;ve helped home service businesses across USA & Canada dominate local search and get more calls
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? Home;
            return (
              <FadeUp key={industry.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden card-hover h-full">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${industry.color} p-6`}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 mb-3">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                      <p className="text-xs text-gray-500 mb-0.5">Client Example</p>
                      <p className="text-sm font-semibold text-purple-600">{industry.example}</p>
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
