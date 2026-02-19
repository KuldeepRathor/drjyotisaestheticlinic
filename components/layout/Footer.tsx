"use client";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "#0D0D0D",
        borderTop: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      {/* Gold top accent line */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C 30%, #F0D080 50%, #C9A84C 70%, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
                  color: "#0D0D0D",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                JR
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Dr Jyoti&apos;s Aesthetic Clinic
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px", fontStyle: "italic", color: "#808080" }}>
                  Refresh • Revive • Repeat
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#707070", lineHeight: 1.7 }}>
              Advanced skin, hair & aesthetic treatments by certified experts in Navi Mumbai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#C9A84C",
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
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#808080", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#808080")}
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
                color: "#C9A84C",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg width="14" height="14" fill="#C9A84C" viewBox="0 0 24 24" style={{ marginTop: "2px", flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#808080", lineHeight: 1.6 }}>
                  Shop No. 18, Ground Floor, The Pacific,<br />
                  Shilp Chowk, Block G, Sector 13,<br />
                  Kharghar, Navi Mumbai - 410210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="14" height="14" fill="#C9A84C" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <a
                  href="tel:+919137493538"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#C9A84C", fontWeight: 500, letterSpacing: "0.05em" }}
                >
                  9137493538
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.12)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#505050", textAlign: "center" }}>
            © {new Date().getFullYear()} Dr Jyoti&apos;s Aesthetic Clinic. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: "#C9A84C" }}>
            Refresh • Revive • Repeat
          </p>
        </div>
      </div>
    </footer>
  );
}
