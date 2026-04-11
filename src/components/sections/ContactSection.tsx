import { Mail, Phone, MapPin, Linkedin, Clock, Shield, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section className="bg-[#0a0a0a] section-padding border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-3">
              Get Your Free Consultation
            </h2>
            <p className="text-gray-400 text-lg">
              Let&apos;s talk about how I can fill your phone with more leads
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left — Contact Info */}
          <FadeUp className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 shrink-0">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-white font-semibold hover:text-purple-300 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20 shrink-0">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-green-300 transition-colors"
                  >
                    {SITE_CONFIG.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 shrink-0">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-semibold">Remote — Serving USA & Canada</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 shrink-0">
                  <Linkedin className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">LinkedIn</p>
                  <a
                    href={SITE_CONFIG.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-indigo-300 transition-colors text-sm"
                  >
                    linkedin.com/in/mumairdigital
                  </a>
                </div>
              </div>

              {/* Why Choose Me */}
              <div className="rounded-2xl border border-purple-500/30 bg-purple-600/10 p-5 mt-8">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-400" />
                  Why Choose Me
                </h3>
                <ul className="space-y-3">
                  {[
                    "2+ Years Specialized Experience",
                    "Proven Results for Home Services",
                    "Home Services Specialist",
                    "24/7 Communication via WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="h-4 w-4" />
                Typical response time: within 24 hours
              </div>
            </div>
          </FadeUp>

          {/* Right — Contact Form */}
          <FadeUp delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 md:p-8">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
