import { MapPin, Trophy, Home, Target, MessageCircle, Layers } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { WHY_CHOOSE_ME } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Trophy,
  Home,
  Target,
  MessageCircle,
  Layers,
};

export function WhyChooseMe() {
  return (
    <section className="bg-white section-padding border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              6 Reasons to Work With Me
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I combine technical expertise with proven strategy to fill your phone with qualified leads.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ME.map((reason, i) => {
            const Icon = iconMap[reason.icon] ?? MapPin;
            return (
              <FadeUp key={reason.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm card-hover h-full">
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
  );
}
