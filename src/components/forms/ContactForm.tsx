"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, MessageCircle, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        setWhatsappUrl(json.whatsappUrl ?? "");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-4">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400 mb-6">
          Thank you! I&apos;ll get back to you within 24 hours. You can also message me directly on WhatsApp for a faster response.
        </p>
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Also Message on WhatsApp
          </a>
        )}
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <h3 className="text-lg font-bold text-white mb-2">Send Me a Message</h3>

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            {...register("name")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Business Type */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="businessType" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Business Type *
          </label>
          <select
            id="businessType"
            {...register("businessType")}
            className="w-full rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors appearance-none"
          >
            <option value="">Select your industry</option>
            <option value="HVAC">HVAC</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Roofing">Roofing</option>
            <option value="Electrical">Electrical</option>
            <option value="Dentist">Dentist</option>
            <option value="Other">Other</option>
          </select>
          {errors.businessType && (
            <p className="mt-1 text-xs text-red-400">{errors.businessType.message}</p>
          )}
        </div>
      </div>

      {/* City + Service Interest */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            City / Location
          </label>
          <input
            id="city"
            type="text"
            placeholder="Houston, TX"
            {...register("city")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="serviceInterest" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Service Interest *
          </label>
          <select
            id="serviceInterest"
            {...register("serviceInterest")}
            className="w-full rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            <option value="Local SEO">Local SEO</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Web Design">Web Design</option>
            <option value="SEO Audit">SEO Audit</option>
            <option value="Google Business Profile">Google Business Profile</option>
            <option value="Full Package">Full Package</option>
          </select>
          {errors.serviceInterest && (
            <p className="mt-1 text-xs text-red-400">{errors.serviceInterest.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
          Message / Tell Me About Your Project *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your business, current marketing challenges, and what results you're looking for..."
          {...register("message")}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="rounded-xl bg-red-500/20 border border-red-500/30 px-4 py-3 text-sm text-red-300">
          Something went wrong. Please try again or email me directly at info@mumairdigital.com
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-4 text-base font-bold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:bg-purple-500 hover:shadow-purple-400/50 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed btn-glow"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message & Get Free Consultation
          </>
        )}
      </button>
    </form>
  );
}
