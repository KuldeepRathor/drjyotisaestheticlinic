"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "Doctor", href: "#doctor" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const sectionId = href.replace("#", "");
    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // If already on home page, just scroll
    if (window.location.pathname === "/") {
      scrollToSection();
    } else {
      // Navigate home first, then scroll after navigation completes
      router.push("/");
      // Use a short delay to allow the page to load before scrolling
      setTimeout(scrollToSection, 400);
    }
  };

  return (
    <motion.header
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: colors.secondary, borderBottom: `1px solid ${colors.borderTertiary25}` }}
      animate={{
        boxShadow: scrolled
          ? `0 4px 24px ${colors.glowTertiary13}`
          : "0 0px 0px transparent",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={clinicConfig.logo}
              alt={clinicConfig.name}
              width={40}
              height={40}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                lineHeight: 1.1,
                background: colors.gradientTertiary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dr Jyoti&apos;s
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: colors.textMuted,
                textTransform: "uppercase",
              }}
            >
              Aesthetic Clinic
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm" style={{ letterSpacing: "0.08em" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="transition-colors duration-200 cursor-pointer"
              style={{ color: colors.textMuted, textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.tertiary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.textMuted)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${clinicConfig.phone}`}
            className="hidden md:flex items-center gap-2 text-sm"
            style={{ color: colors.tertiary, letterSpacing: "0.05em" }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            {clinicConfig.phoneDisplay}
          </a>
          <Link href="/book">
            <motion.button
              className="btn-gold px-5 py-2 rounded text-xs"
              style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
              whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Book Now
            </motion.button>
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: colors.tertiary }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4"
            style={{ backgroundColor: colors.secondaryDark, borderTop: `1px solid ${colors.borderTertiary15}` }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 text-sm cursor-pointer"
                style={{ color: colors.textMuted, borderBottom: `1px solid ${colors.borderTertiary08}`, letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {item.label}
              </a>
            ))}
            <a href={`tel:${clinicConfig.phone}`} className="block py-3 text-sm" style={{ color: colors.tertiary }}>
              📞 {clinicConfig.phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

