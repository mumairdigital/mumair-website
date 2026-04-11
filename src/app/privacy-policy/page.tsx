import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for mumairdigital.com",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p><strong>Last updated:</strong> January 2026</p>
          <p>Muhammad Umair (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates mumairdigital.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information.</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide through our contact form, including your name, email, phone number, and business information. This information is used solely to respond to your inquiry and provide our services.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the collected data to respond to inquiries, provide digital marketing services, and send relevant business communications. We do not sell your personal information to third parties.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at {SITE_CONFIG.email}.</p>
        </div>
      </div>
    </div>
  );
}
