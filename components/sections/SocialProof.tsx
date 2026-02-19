import Link from "next/link";

const reviews = [
  {
    name: "Priya S.",
    text: "Dr. Jyoti is absolutely amazing! My acne scars have reduced significantly after just 3 sessions. The clinic is very professional and hygienic.",
    rating: 5,
    treatment: "Acne Treatment",
  },
  {
    name: "Rahul M.",
    text: "Best laser hair removal experience! Very effective and the staff is so friendly. Highly recommend Dr. Jyoti's clinic to everyone.",
    rating: 5,
    treatment: "Laser Hair Removal",
  },
  {
    name: "Sneha K.",
    text: "I tried the PRP facial and the results are incredible. My skin looks so much younger and radiant. Dr. Jyoti is truly an expert.",
    rating: 5,
    treatment: "PRP Facial",
  },
];

const stats = [
  { value: "500+", label: "Happy Patients" },
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Treatments" },
  { value: "5★", label: "Google Rating" },
];

export default function SocialProof() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 rounded-lg overflow-hidden"
          style={{ border: "1px solid rgba(201,168,76,0.25)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-8 text-center"
              style={{
                backgroundColor: "#161616",
                borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "#808080",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#C9A84C",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Patient Stories
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 500,
              color: "#F5F5F5",
              letterSpacing: "0.03em",
              marginBottom: "1rem",
            }}
          >
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#C9A84C" }} />
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div key={index} className="review-card rounded-lg p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#C9A84C", fontSize: "14px" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "#D0D0D0",
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: "1.25rem",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "1rem" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#F5F5F5",
                    marginBottom: "2px",
                  }}
                >
                  {review.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: "#C9A84C",
                    letterSpacing: "0.05em",
                  }}
                >
                  {review.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Link href="/reviews">
            <button
              className="btn-gold-outline px-8 py-3 rounded text-xs"
              style={{ letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              View All Reviews
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
