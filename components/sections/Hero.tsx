import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: "#0D0D0D",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div
        className="absolute top-8 left-8 w-16 h-16 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.4)",
          borderLeft: "1px solid rgba(201,168,76,0.4)",
        }}
      />
      <div
        className="absolute top-8 right-8 w-16 h-16 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.4)",
          borderRight: "1px solid rgba(201,168,76,0.4)",
        }}
      />
      <div
        className="absolute bottom-8 left-8 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.4)",
          borderLeft: "1px solid rgba(201,168,76,0.4)",
        }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.4)",
          borderRight: "1px solid rgba(201,168,76,0.4)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">

        {/* JR Monogram */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
              color: "#0D0D0D",
              fontFamily: "'Cormorant Garamond', serif",
              boxShadow: "0 0 30px rgba(201,168,76,0.3)",
            }}
          >
            JR
          </div>
        </div>

        {/* Clinic Name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 300,
            letterSpacing: "0.04em",
            lineHeight: 1.1,
            color: "#F5F5F5",
            marginBottom: "0.25rem",
          }}
        >
          Dr Jyoti&apos;s
        </h1>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
          }}
        >
          Aesthetic Clinic
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontStyle: "italic",
            color: "#C9A84C",
            letterSpacing: "0.1em",
            marginBottom: "0.75rem",
          }}
        >
          Refresh • Revive • Repeat
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C9A84C" }} />
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            color: "#A0A0A0",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          Advanced skin, hair & aesthetic treatments by certified experts.
          Acne, laser hair removal, PRP, chemical peel, slimming & more.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/book">
            <button
              className="btn-gold px-8 py-3 rounded text-sm"
              style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
            >
              Book Appointment
            </button>
          </Link>
          <a href="tel:+919137493538">
            <button
              className="btn-gold-outline px-8 py-3 rounded text-sm"
              style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
            >
              Call: 9137493538
            </button>
          </a>
        </div>

        {/* Location badge */}
        <div className="mt-10 flex justify-center">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
            style={{
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#808080",
              letterSpacing: "0.05em",
            }}
          >
            <svg width="12" height="12" fill="#C9A84C" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Shop No. 18, The Pacific, Kharghar, Navi Mumbai
          </div>
        </div>
      </div>
    </section>
  );
}
