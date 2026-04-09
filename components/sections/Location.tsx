import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";

export default function Location() {
  const mapsQuery = encodeURIComponent(
    `${clinicConfig.address.line1} ${clinicConfig.address.line2} ${clinicConfig.address.line3}`
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section
      id="location"
      className="w-full py-20"
      style={{ backgroundColor: colors.secondaryDark }}
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
            Find Us
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
            Our Location
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerL }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: colors.tertiary }} />
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerR }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Address card */}
          <div
            className="rounded-2xl p-8 h-full"
            style={{
              backgroundColor: colors.secondaryCard,
              border: `1px solid ${colors.borderTertiary25}`,
              boxShadow: `0 0 40px ${colors.glowTertiary08}`,
            }}
          >
            {/* Decorative top accent */}
            <div
              style={{
                width: "60px",
                height: "2px",
                background: colors.gradientDividerH,
                marginBottom: "1.5rem",
              }}
            />

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: colors.primaryFaint,
                letterSpacing: "0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Dr Jyoti&apos;s Aesthetic Clinic
            </h3>

            {/* Address lines */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: colors.bgTertiary15, border: `1px solid ${colors.borderTertiary30}` }}
              >
                <svg width="14" height="14" fill={colors.tertiary} viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: colors.primary, lineHeight: 1.7 }}>
                  {clinicConfig.address.line1}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: colors.primary, lineHeight: 1.7 }}>
                  {clinicConfig.address.line2}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: colors.primary, lineHeight: 1.7 }}>
                  {clinicConfig.address.line3}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.bgTertiary15, border: `1px solid ${colors.borderTertiary30}` }}
              >
                <svg width="13" height="13" fill={colors.tertiary} viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>
              <a
                href={`tel:${clinicConfig.phone}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: colors.tertiary,
                  letterSpacing: "0.03em",
                }}
              >
                {clinicConfig.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.bgTertiary15, border: `1px solid ${colors.borderTertiary30}` }}
              >
                <svg width="13" height="13" fill={colors.tertiary} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a
                href={`mailto:${clinicConfig.email}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: colors.tertiary,
                  letterSpacing: "0.03em",
                }}
              >
                {clinicConfig.email}
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: colors.borderTertiary15, marginBottom: "1.5rem" }} />

            {/* Hours */}
            <div>
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
                Clinic Hours
              </div>
              <div className="space-y-1">
                {[
                  { days: "Mon – Sun", time: "11:00 AM – 8:00 PM" },
                  // { days: "Sunday", time: "10:00 AM – 2:00 PM" },
                ].map((row) => (
                  <div key={row.days} className="flex justify-between items-center">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: colors.textMuted }}>
                      {row.days}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: colors.primary }}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions CTA */}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block mt-8">
              <button
                className="btn-gold w-full py-3 rounded text-xs"
                style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Get Directions →
              </button>
            </a>
          </div>

          {/* Map embed */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${colors.borderTertiary25}`,
              height: "480px",
              boxShadow: `0 0 40px ${colors.glowTertiary08}`,
            }}
          >
            <iframe
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
