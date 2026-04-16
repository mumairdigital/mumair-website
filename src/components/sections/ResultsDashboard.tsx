import { TrendingUp, Phone, DollarSign, Award, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

const statCards = [
  {
    icon: Phone,
    number: "400+",
    label: "Monthly Calls",
    sublabel: "HVAC Client · Google Business Profile",
    badge: "HVAC Services",
    badgeColor: "bg-green-500/20 text-green-400",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
  },
  {
    icon: TrendingUp,
    number: "180%+",
    label: "Traffic Growth",
    sublabel: "Multiple Clients · Organic Increase",
    badge: "Multiple Clients",
    badgeColor: "bg-blue-500/20 text-blue-400",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  {
    icon: DollarSign,
    number: "$2-$5",
    label: "Cost Per Conversion",
    sublabel: "Plumbing Client · Google Ads",
    badge: "Google Ads",
    badgeColor: "bg-purple-500/20 text-purple-400",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
  },
];

const milestones = ["4x Lead Increase", "Top 3 Map Pack Rankings", "AI Platform Visibility"];

const credentials = [
  "Google Ads Expert",
  "Local SEO Specialist",
  "Meta Ads Expert",
  "Web Design Pro",
];

export function ResultsDashboard() {
  return (
    <section className="bg-[#0a0a0a] section-padding border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Muhammad Umair — Proven Performance
            </p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Real Client Results Dashboard
            </h2>
          </div>
        </FadeUp>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
          {statCards.map((card, i) => (
            <FadeUp key={card.label} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-white/10 bg-zinc-900/80 p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBg}`}>
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>
                <div className="text-4xl font-extrabold text-white mb-1">{card.number}</div>
                <div className="text-base font-semibold text-gray-200 mb-1">{card.label}</div>
                <div className="text-sm text-gray-500">{card.sublabel}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Growth Trajectory */}
        <FadeUp delay={0.2}>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-6 text-center">Growth Trajectory</h3>
            {/* Bars */}
            <div className="flex items-end justify-between gap-3 h-36 mb-3">
              {[
                { label: "Start",   height: 28,  color: "from-purple-900 to-purple-700" },
                { label: "Month 3", height: 72,  color: "from-purple-800 to-purple-500" },
                { label: "Month 6", height: 112, color: "from-purple-700 to-purple-400" },
                { label: "Now",     height: 144, color: "from-purple-600 to-violet-400" },
              ].map(({ label, height, color }) => (
                <div
                  key={label}
                  className={`flex-1 rounded-t-xl bg-gradient-to-t ${color} transition-all duration-700`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            {/* Labels */}
            <div className="flex justify-between gap-3">
              {["Start", "Month 3", "Month 6", "Now"].map((label) => (
                <span key={label} className="flex-1 text-center text-xs text-gray-400">{label}</span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Milestones + Credentials */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {milestones.map((m) => (
            <FadeUp key={m}>
              <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/10 px-4 py-2">
                <CheckCircle className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">{m}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <p className="text-center text-gray-400 text-sm mb-6">
            Trusted by <strong className="text-white">30+ businesses</strong> in USA & Canada
          </p>
        </FadeUp>

        <div className="flex flex-wrap gap-3 justify-center">
          {credentials.map((c) => (
            <FadeUp key={c}>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-300">{c}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
