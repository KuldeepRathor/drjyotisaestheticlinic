import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="rounded-2xl p-12 text-center relative overflow-hidden"
          style={{
            backgroundColor: "#161616",
            border: "1px solid rgba(201,168,76,0.3)",
            boxShadow: "0 0 60px rgba(201,168,76,0.08)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Decorative top line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />

          <div className="relative z-10">
            {/* Label */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: "#C9A84C",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Get Started Today
            </p>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 500,
                color: "#F5F5F5",
                letterSpacing: "0.03em",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Book Your Consultation Today
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#C9A84C" }} />
              <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#A0A0A0",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              Get personalized skin & hair treatment guidance from Dr Jyoti.
              <br />
              Expert care, proven results.
            </p>

            {/* Phone number */}
            <a
              href="tel:+919137493538"
              className="inline-flex items-center gap-3 mb-8 group"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <svg width="16" height="16" fill="#C9A84C" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.05em",
                }}
              >
                9137493538
              </span>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <button
                  className="btn-gold px-10 py-3.5 rounded text-sm"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
                >
                  Book Appointment
                </button>
              </Link>
              <a href="tel:+919137493538">
                <button
                  className="btn-gold-outline px-10 py-3.5 rounded text-sm"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
                >
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
