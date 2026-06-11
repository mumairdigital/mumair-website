import { Search, Map, Zap, TrendingUp } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { HOW_IT_WORKS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Map,
  Zap,
  TrendingUp,
};

export function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-[#FEC33B] text-xs font-bold uppercase tracking-[0.2em] mb-3">The Process</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-3">
              How I Get HVAC Companies More Calls
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A focused 4-step process built specifically for HVAC businesses — from your first call to consistent leads from Google
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Search;
            return (
              <FadeUp key={step.step} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-white/10 bg-zinc-900 p-6 card-hover h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-black text-[#FEC33B]/20 mb-4 leading-none">
                    {step.step}
                  </div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEC33B]/10 mb-4">
                    <Icon className="h-6 w-6 text-[#FEC33B]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                  {/* Connector line for desktop */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-purple-500/30" />
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
