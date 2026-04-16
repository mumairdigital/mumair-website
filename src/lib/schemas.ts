import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  businessType: z.enum(["HVAC", "Plumbing", "Roofing", "Electrical", "Landscaping", "Other"]),
  city: z.string().optional(),
  serviceInterest: z.enum([
    "Local SEO",
    "Google Ads",
    "Meta Ads",
    "Web Design",
    "SEO Audit",
    "Google Business Profile",
    "Full Package",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
