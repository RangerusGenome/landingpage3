"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$8",
    unit: "/product",
    limit: "Up to 250 products",
    featured: false,
    features: [
      "Titles & descriptions",
      "Meta tags optimized",
      "5 business day delivery",
      "1 revision round",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$12",
    unit: "/product",
    limit: "Up to 2,000 products",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Image alt text optimization",
      "Keyword research per product",
      "SEO score dashboard",
      "Unlimited revisions",
    ],
    cta: "Start with Growth",
  },
  {
    name: "Monthly Retainer",
    price: "$1,200",
    unit: "/month",
    limit: "Ongoing optimization",
    featured: false,
    features: [
      "New product optimization",
      "Seasonal updates",
      "Monthly performance reports",
      "Competitor tracking",
      "Priority support",
    ],
    cta: "Contact Us",
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 grain overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="section-tag">Pricing</span>
          <h2
            className="font-serif font-black text-balance"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
          >
            Simple, transparent pricing
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>Pay per product. No subscriptions required.</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className="relative flex flex-col">
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "#fff",
                      boxShadow: "0 0 12px var(--accent-glow)",
                      fontFamily: "var(--font-jetbrains-mono)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}
              <div
                className="card-lift card-highlight relative rounded-2xl p-7 flex flex-col gap-6 h-full transition-all duration-300"
                style={{
                  backgroundColor: plan.featured ? "var(--bg-raised)" : "var(--bg-primary)",
                  border: plan.featured
                    ? `1px solid var(--border-active)`
                    : "1px solid var(--border-color)",
                  boxShadow: plan.featured ? "0 0 40px rgba(232,81,10,0.12)" : undefined,
                  transform: plan.featured ? "scale(1.02)" : undefined,
                }}
              >
                {/* Plan name + limit */}
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {plan.name.toUpperCase()}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span
                      className="font-serif font-black"
                      style={{ fontSize: "2.5rem", color: "var(--text-primary)", lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm pb-1" style={{ color: "var(--text-secondary)" }}>
                      {plan.unit}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {plan.limit}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "var(--border-color)" }} />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: plan.featured ? "var(--accent-primary)" : "#2dd4a0" }}
                      />
                      <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.featured ? (
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).Calendly) {
                        (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/trevorkuhlmannk/free-store-audit-15-mins'});
                      }
                    }}
                    className="btn-orange flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-center"
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).Calendly) {
                        (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/trevorkuhlmannk/free-store-audit-15-mins'});
                      }
                    }}
                    className="btn-ghost flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-center"
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
