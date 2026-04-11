export interface Location {
  slug: string;
  name: string;
  state: string;
  country: string;
  countryCode: "USA" | "Canada";
  population: string;
  tagline: string;
  heroDescription: string;
  marketFocus: string;
  localStats: {
    businesses: string;
    homeServices: string;
  };
  testimonial: {
    author: string;
    company: string;
    role: string;
    text: string;
    result: string;
  };
  faqs: Array<{ q: string; a: string }>;
  nearbyCities: Array<{ name: string; slug: string }>;
  schema: {
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    areaServed: string;
  };
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  shortDescription: string;
  features: string[];
  results: string;
  heroTagline: string;
  process: Array<{ step: string; title: string; description: string }>;
  benefits: Array<{ title: string; description: string }>;
  faq: Array<{ q: string; a: string }>;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  text: string;
  result: string;
  stars: number;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  location: string;
  services: string[];
  resultHeadline: string;
  description: string;
  duration: string;
  metrics: Array<{ label: string; value: string }>;
  badge: string;
  badgeColor: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  metaDescription: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string; description?: string }>;
}

export interface Tool {
  name: string;
  category: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}
