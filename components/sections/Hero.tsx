import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: colors.secondary,
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
            `radial-gradient(ellipse 70% 50% at 50% 0%, ${colors.glowTertiary13} 0%, transparent 70%)`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.125,
      }}></div>

      {/* Decorative corner lines */}
      <div
        className="absolute top-8 left-8 w-16 h-16 pointer-events-none"
        style={{
          borderTop: `1px solid ${colors.borderTertiary40}`,
          borderLeft: `1px solid ${colors.borderTertiary40}`,
        }}
      />
      <div
        className="absolute top-8 right-8 w-16 h-16 pointer-events-none"
        style={{
          borderTop: `1px solid ${colors.borderTertiary40}`,
          borderRight: `1px solid ${colors.borderTertiary40}`,
        }}
      />
      <div
        className="absolute bottom-8 left-8 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: `1px solid ${colors.borderTertiary40}`,
          borderLeft: `1px solid ${colors.borderTertiary40}`,
        }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: `1px solid ${colors.borderTertiary40}`,
          borderRight: `1px solid ${colors.borderTertiary40}`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: `0 0 30px ${colors.borderTertiary30}`,
            }}
          >
            <Image
              src={clinicConfig.logo}
              alt={clinicConfig.name}
              width={80}
              height={80}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
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
            color: colors.primaryFaint,
            marginBottom: "0.25rem",
          }}
        >
          Dr Jyoti&apos;s
        </h1>
        {/* Note: the two h1s together form the full clinic name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            lineHeight: 1.1,
            background: colors.gradientTertiary,
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
            color: colors.tertiary,
            letterSpacing: "0.1em",
            marginBottom: "0.75rem",
          }}
        >
          {clinicConfig.slogan}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ width: "60px", height: "1px", background: colors.gradientDividerL }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: colors.tertiary }} />
          <div style={{ width: "60px", height: "1px", background: colors.gradientDividerR }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            color: colors.textMuted,
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          Advanced skin, hair &amp; aesthetic treatments by certified experts.
          Acne, laser hair removal, PRP, chemical peel, slimming &amp; more.
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
          <a href={`tel:${clinicConfig.phone}`}>
            <button
              className="btn-gold-outline px-8 py-3 rounded text-sm"
              style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
            >
              Call: {clinicConfig.phoneDisplay}
            </button>
          </a>
        </div>

        {/* Location badge */}
        <div className="mt-10 flex justify-center">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
            style={{
              border: `1px solid ${colors.borderTertiary25}`,
              color: colors.textSubtle,
              letterSpacing: "0.05em",
            }}
          >
            <svg width="12" height="12" fill={colors.tertiary} viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {clinicConfig.address.short}
          </div>
        </div>
      </div>
    </section>
  );
}
