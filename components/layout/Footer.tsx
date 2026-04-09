"use client";

import Image from "next/image";
import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: colors.secondary,
        borderTop: `1px solid ${colors.borderTertiary20}`,
      }}
    >
      {/* Tertiary top accent line */}
      <div style={{ height: "2px", background: colors.gradientDividerH }} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                    fontSize: "17px",
                    fontWeight: 600,
                    background: colors.gradientTertiary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {clinicConfig.name}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px", fontStyle: "italic", color: colors.textSubtle }}>
                  {clinicConfig.slogan}
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: colors.textFaint, lineHeight: 1.7 }}>
              Advanced skin, hair &amp; aesthetic treatments by certified experts in Navi Mumbai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: colors.tertiary,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Treatments", href: "/treatments" },
                { label: "Book Appointment", href: "/book" },
                { label: "Patient Reviews", href: "/reviews" },
                { label: "About Doctor", href: "/doctor" },
                { label: "Location", href: "/location" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: colors.textSubtle, transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.tertiary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.textSubtle)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: colors.tertiary,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg width="14" height="14" fill={colors.tertiary} viewBox="0 0 24 24" style={{ marginTop: "2px", flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: colors.textSubtle, lineHeight: 1.6 }}>
                  {clinicConfig.address.line1}<br />
                  {clinicConfig.address.line2}<br />
                  {clinicConfig.address.line3}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="14" height="14" fill={colors.tertiary} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <a
                  href={`tel:${clinicConfig.phone}`}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: colors.tertiary, fontWeight: 500, letterSpacing: "0.05em" }}
                >
                  {clinicConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${colors.borderTertiary12}`,
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: colors.textVeryFaint, textAlign: "center" }}>
            © {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: colors.tertiary }}>
            {clinicConfig.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
