import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for mumairdigital.com",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none">
          <p><strong>Last updated:</strong> January 2026</p>
          <p>By accessing mumairdigital.com, you agree to be bound by these Terms of Service.</p>
          <h2>Services</h2>
          <p>Muhammad Umair provides digital marketing consulting services including Local SEO, Google Ads management, Meta Ads management, web design, and related services. Specific terms of engagement are outlined in individual service agreements.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, images, and design, is the property of Muhammad Umair and protected by applicable copyright laws.</p>
          <h2>Limitation of Liability</h2>
          <p>Muhammad Umair is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Digital marketing results vary by business and market conditions.</p>
          <h2>Contact</h2>
          <p>For questions about these Terms, contact us at {SITE_CONFIG.email}.</p>
        </div>
      </div>
    </div>
  );
}
