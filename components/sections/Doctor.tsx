import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";

const credentials = [
  "BAMS – Medical Graduate",
  "Certified Aesthetic Skin Specialist",
  "Laser & Cosmetic Procedure Expert",
  "4+ Years Clinical Experience",
  "500+ Satisfied Patients",
];

const specializations = [
  "Advanced Laser Treatments",
  "Anti-Aging & Skin Rejuvenation",
  "Hair Restoration (PRP & Transplant)",
  "Body Contouring & Slimming",
  "Aesthetic Gynecology",
];

export default function Doctor() {
  return (
    <section
      id="doctor"
      className="w-full py-20"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: colors.tertiary,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Meet Your Expert
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 500,
              color: colors.primaryFaint,
              letterSpacing: "0.03em",
              marginBottom: "1rem",
            }}
          >
            About Dr Jyoti
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerL }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: colors.tertiary }} />
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerR }} />
          </div>
        </div>

        {/* Doctor profile card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: `1px solid ${colors.borderTertiary25}`,
            backgroundColor: colors.secondaryCard,
            boxShadow: `0 0 60px ${colors.glowTertiary08}`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-0">

            {/* Image side */}
            <div
              className="relative flex items-center justify-center p-12"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${colors.glowTertiary13} 0%, transparent 70%)`,
                borderRight: `1px solid ${colors.borderTertiary15}`,
              }}
            >
              <div
                style={{
                  width: "360px",
                  height: "520px",
                  // borderRadius: "50%",
                  overflow: "hidden",
                  border: `2px solid ${colors.borderTertiary40}`,
                  boxShadow: `0 0 40px ${colors.borderTertiary30}`,
                }}
              >
                <Image
                  src={clinicConfig.doctor_profile}
                  alt="Dr Jyoti"
                  width={240}
                  height={240}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Decorative lines */}
              <div
                className="absolute top-6 left-6 w-12 h-12 pointer-events-none"
                style={{
                  borderTop: `1px solid ${colors.borderTertiary40}`,
                  borderLeft: `1px solid ${colors.borderTertiary40}`,
                }}
              />
              <div
                className="absolute bottom-6 right-6 w-12 h-12 pointer-events-none"
                style={{
                  borderBottom: `1px solid ${colors.borderTertiary40}`,
                  borderRight: `1px solid ${colors.borderTertiary40}`,
                }}
              />
            </div>

            {/* Content side */}
            <div className="p-10 flex flex-col justify-center">
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 600,
                  background: colors.gradientTertiary,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "0.25rem",
                  letterSpacing: "0.03em",
                }}
              >
                Dr Jyoti Rathor
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  color: colors.textMuted,
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Aesthetic Dermatologist & Cosmetologist
              </div>

              {/* Bio */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: colors.primary,
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                With over 4 years of clinical excellence, Dr Jyoti combines medical
                precision with artistic vision to deliver transformative aesthetic
                results. Her patient-first approach has made her one of the most
                trusted names in Navi Mumbai.
              </p>

              {/* Credentials */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: colors.tertiary,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Credentials
                </div>
                <ul className="space-y-1.5">
                  {credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: colors.textMuted }}
                    >
                      <span style={{ color: colors.tertiary, fontSize: "8px" }}>●</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specializations */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: colors.tertiary,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Specializations
                </div>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        border: `1px solid ${colors.borderTertiary25}`,
                        color: colors.textSubtle,
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.05em",
                        backgroundColor: colors.bgTertiary15,
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link href="/book">
                <button
                  className="btn-gold px-8 py-3 rounded text-xs"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
