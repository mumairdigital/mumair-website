"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { NAV_SERVICES, NAV_LOCATIONS_USA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100/60"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-[#18055E] font-extrabold text-lg tracking-tight uppercase hidden sm:block">
              Muhammad Umair
            </span>
            <span className="text-[#18055E] font-extrabold text-lg tracking-tight uppercase sm:hidden">
              M. Umair
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-zinc-900 border border-white/10 shadow-xl p-4"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {NAV_SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex flex-col rounded-xl px-4 py-3 hover:bg-[#18055E]/20 transition-colors group"
                        >
                          <span className="text-sm font-medium text-white group-hover:text-[#FEC33B]">
                            {s.label}
                          </span>
                          <span className="text-xs text-gray-400">{s.description}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10">
                      <Link
                        href="/services"
                        className="text-xs text-[#FEC33B] hover:text-purple-300 flex items-center gap-1"
                      >
                        View all services <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio" className="text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
              Blog
            </Link>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
                Locations <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {locationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-72 rounded-2xl bg-zinc-900 border border-white/10 shadow-xl p-4"
                  >
                    <p className="text-xs font-semibold text-[#FEC33B] uppercase tracking-wider mb-2 px-2">
                      Service Areas
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {NAV_LOCATIONS_USA.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="text-sm text-gray-300 hover:text-[#FEC33B] rounded-lg px-2 py-1.5 hover:bg-[#18055E]/20 transition-colors"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="text-gray-600 hover:text-[#18055E] text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#18055E] px-5 py-2.5 text-sm font-bold text-[#FEC33B] shadow-lg shadow-[#18055E]/20 transition-all duration-300 hover:bg-[#2A0B7A] hover:scale-105"
            >
              GET FREE HVAC AUDIT
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#18055E] p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white flex flex-col pt-20 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              <Link
                href="/"
                className="text-lg font-medium text-[#18055E] py-3 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-[#18055E] py-3 border-b border-gray-100"
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-3 text-lg font-medium text-[#18055E]"
                >
                  Services
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 flex flex-col gap-1">
                        {NAV_SERVICES.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="text-gray-600 py-2 pl-4 hover:text-[#18055E] text-base"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                className="text-lg font-medium text-[#18055E] py-3 border-b border-gray-100"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-[#18055E] py-3 border-b border-gray-100"
              >
                Blog
              </Link>

              {/* Mobile Locations Accordion */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="flex w-full items-center justify-between py-3 text-lg font-medium text-[#18055E]"
                >
                  Locations
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", mobileLocationsOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {mobileLocationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3">
                        <p className="text-xs font-semibold text-[#FEC33B] uppercase tracking-wider pl-4 mb-2">
                          Service Areas
                        </p>
                        {NAV_LOCATIONS_USA.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="text-gray-300 py-2 pl-4 block hover:text-[#FEC33B] text-base"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="text-lg font-medium text-[#18055E] py-3 border-b border-gray-100"
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-auto px-6 pb-10 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full rounded-full bg-[#18055E] py-4 text-center text-base font-bold text-[#FEC33B] shadow-lg shadow-[#18055E]/20 hover:bg-[#2A0B7A] transition-colors"
              >
                Book Free Consultation
              </Link>
              <a
                href={`https://wa.me/${NAV_LOCATIONS_USA[0]?.href ? "923209943057" : "923209943057"}?text=${encodeURIComponent("Hi Muhammad, I'd like to discuss digital marketing for my business.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-green-600 py-4 text-center text-base font-semibold text-white hover:bg-green-500 transition-colors"
              >
                WhatsApp Muhammad
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
