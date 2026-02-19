"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50" style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid rgba(201,168,76,0.25)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
              color: "#0D0D0D",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "14px",
              letterSpacing: "0.05em",
            }}
          >
            JR
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
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
                color: "#A0A0A0",
                textTransform: "uppercase",
              }}
            >
              Aesthetic Clinic
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm" style={{ letterSpacing: "0.08em" }}>
          {[
            { label: "Treatments", href: "/treatments" },
            { label: "Reviews", href: "/reviews" },
            { label: "Doctor", href: "/doctor" },
            { label: "Location", href: "/location" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200"
              style={{ color: "#A0A0A0", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919137493538"
            className="hidden md:flex items-center gap-2 text-sm"
            style={{ color: "#C9A84C", letterSpacing: "0.05em" }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            9137493538
          </a>
          <Link href="/book">
            <button className="btn-gold px-5 py-2 rounded text-xs" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Book Now
            </button>
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: "#C9A84C" }}
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
      {menuOpen && (
        <div className="md:hidden px-4 pb-4" style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          {[
            { label: "Treatments", href: "/treatments" },
            { label: "Reviews", href: "/reviews" },
            { label: "Doctor", href: "/doctor" },
            { label: "Location", href: "/location" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-sm"
              style={{ color: "#A0A0A0", borderBottom: "1px solid rgba(201,168,76,0.08)", letterSpacing: "0.1em", textTransform: "uppercase" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+919137493538" className="block py-3 text-sm" style={{ color: "#C9A84C" }}>
            📞 9137493538
          </a>
        </div>
      )}
    </header>
  );
}
