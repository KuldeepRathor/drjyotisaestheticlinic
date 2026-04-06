import Link from "next/link";
import { colors } from "@/lib/colors";

const treatmentCategories = [
  {
    title: "Skin",
    icon: "✦",
    treatments: [
      "Acne", "Hyperpigmentation", "Hydrafacial", "Chemical Peel",
      "PRP (Vampire Facial)", "Anti-aging Treatment", "Semi Permanent Makeup", "BB Glow"
    ],
    slug: "skin",
  },
  {
    title: "Hair",
    icon: "✦",
    treatments: [
      "Hairfall Treatment", "Anti-dandruff Treatment", "PRP", "Hair Transplant"
    ],
    slug: "hair",
  },
  {
    title: "Laser",
    icon: "✦",
    treatments: [
      "Laser Hair Removal", "Carbon Peel Laser", "Tattoo Removal", "Pico Laser"
    ],
    slug: "laser",
  },
  {
    title: "Slimming (Weight Loss)",
    icon: "✦",
    treatments: [
      "Full Body Detoxification", "Weight Gain Program", "U-Lipolysis", "Inch Loss, Fat Loss", "Skin Tightening"
    ],
    slug: "slimming",
  },
  {
    title: "Aesthetic Gynecology",
    icon: "✦",
    treatments: [
      "Breast Lift", "Breast Enlargement", "Lightening & Lot More"
    ],
    slug: "aesthetic-gynecology",
  },
  {
    title: "Skin Disease Consultations",
    icon: "✦",
    treatments: [
      "Fungal Infection", "Eczema", "Psoriasis", "Skin Allergy", "Urticaria"
    ],
    slug: "skin-disease",
  },
  {
    title: "Minor Surgery",
    icon: "✦",
    treatments: [
      "Skin Tag Removal", "Mole Removal", "Cyst Removal", "Earhole Repair", "Corn Removal"
    ],
    slug: "minor-surgery",
  },
  {
    title: "IV Drips",
    icon: "✦",
    treatments: [
      "Weight Loss", "Glutathione", "Anti-aging"
    ],
    slug: "iv-drips",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="w-full py-20"
      style={{ backgroundColor: colors.secondaryDark }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
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
            What We Offer
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
            Our Treatments
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerL }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: colors.tertiary }} />
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerR }} />
          </div>
        </div>

        {/* Treatment grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatmentCategories.map((cat) => (
            <Link key={cat.slug} href={`/treatments/${cat.slug}`}>
              <div className="treatment-card rounded-lg p-5 h-full cursor-pointer group">
                {/* Category title */}
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ color: colors.tertiary, fontSize: "10px" }}>►</span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: colors.tertiary,
                      letterSpacing: "0.04em",
                      textDecoration: "underline",
                      textDecorationColor: colors.borderTertiary40,
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {cat.title.toUpperCase()}
                  </h3>
                </div>

                {/* Divider */}
                <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, ${colors.borderTertiary40}, transparent)`, marginBottom: "12px" }} />

                {/* Treatment list */}
                <ul className="space-y-1.5">
                  {cat.treatments.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: colors.textMuted, lineHeight: 1.5 }}
                    >
                      <span style={{ color: colors.tertiary, marginTop: "2px", fontSize: "8px", flexShrink: 0 }}>●</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link href="/treatments">
            <button
              className="btn-gold-outline px-8 py-3 rounded text-xs"
              style={{ letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              View All Treatments
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
