"use client"

import { HeroTerminal } from "./hero-terminal"

const stats = [
  { value: "+312%", label: "Impressions" },
  { value: "+87%", label: "CTR" },
  { value: "2.4×", label: "Revenue" },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center grain overflow-hidden pt-24 pb-20"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(232,81,10,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(45,212,160,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm"
              style={{
                backgroundColor: "rgba(45,212,160,0.08)",
                border: "1px solid rgba(45,212,160,0.25)",
                color: "var(--color-success)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-green"
                style={{ backgroundColor: "var(--color-success)" }}
              />
              <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                Now optimizing 12,000+ listings
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-black leading-[1.05] text-balance"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--text-primary)" }}
            >
              Turn your product pages into google{" "}
              <span
                className="italic"
                style={{
                  color: "var(--accent-primary)",
                  textShadow: "0 0 30px rgba(232,81,10,0.4), 0 0 60px rgba(232,81,10,0.15)",
                }}
              >  traffic machines

              </span>{" "}

            </h1>

            {/* Subheadline */}
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              We connect to your store, pull every product listing, run them through our data enrichment
              pipeline — computer vision, keyword research, SEO analysis — and push back optimized
              listings that Google actually ranks.{" "}
              <strong style={{ color: "var(--text-primary)" }}>Hundreds of products optimized in minutes, not months.</strong>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold"
              >
                Get Your Free Audit
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#pipeline"
                className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold"
              >
                See The Pipeline
              </a>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(45,212,160,0.08)",
                    border: "1px solid rgba(45,212,160,0.2)",
                  }}
                >
                  <span
                    className="font-serif font-bold text-lg"
                    style={{ color: "var(--color-success)", textShadow: "0 0 12px var(--success-glow)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="lg:order-last">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  )
}
