const metrics = [
  { value: "+312%", label: "Organic Impressions" },
  { value: "+87%", label: "Click-Through Rate" },
  { value: "+45%", label: "Conversion Rate" },
  { value: "2.4×", label: "Revenue Per Listing" },
]

const testimonials = [
  {
    quote:
      "We had 800 products with manufacturer descriptions. ListingEtl rewrote everything in a week. Our organic traffic doubled within 60 days.",
    //name: "Sarah Chen",

    avatarColor: "#e8510a",
    ///initials: "SC",
  },
  {
    quote:
      "I was sceptical about AI-written copy, but the quality is genuinely better than what our freelance writer produced. And it was done in days, not months.",
    /// name: "Marcus Webb",
    role: "COO, TrailPeak Outdoors",
    avatarColor: "#2dd4a0",
    initials: "MW",
  },
  {
    quote:
      "The free audit alone was worth it — showed me exactly why my competitors were outranking me.",
    name: "Jessica Park",
    role: "Owner, Bloom & Bristle Beauty",
    avatarColor: "#9b7aff",
    initials: "JP",
  },
]

export function Results() {
  return (
    <section
      id="results"
      className="relative py-24 grain overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(45,212,160,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="section-tag">Real Results</span>
          <h2
            className="font-serif font-black text-balance"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
          >
            Average outcomes across our client base
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Measured 90 days after optimization, across stores with 200–5,000 products.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="card-lift card-highlight relative rounded-2xl p-6 text-center"
              style={{
                backgroundColor: "var(--bg-raised)",
                border: "1px solid var(--border-color)",
              }}
            >
              <p
                className="font-serif font-black mb-2"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: "var(--accent-primary)",
                  textShadow: "0 0 24px rgba(232,81,10,0.3)",
                }}
              >
                {m.value}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-lift card-highlight relative rounded-2xl p-6 flex flex-col gap-5"
              style={{
                backgroundColor: "var(--bg-raised)",
                border: "1px solid var(--border-color)",
              }}
            >
              <blockquote
                className="font-serif italic text-base leading-relaxed flex-1"
                style={{ color: "var(--text-primary)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: `${t.avatarColor}25`, color: t.avatarColor, border: `1px solid ${t.avatarColor}40` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
