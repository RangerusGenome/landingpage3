"use client"

import { Database, Camera, Search, Brain, FileText, UploadCloud } from "lucide-react"

function FlowArrow({ color = "var(--accent-primary)" }: { color?: string }) {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <div
        className="w-px flex-1 min-h-[32px]"
        style={{
          background: `linear-gradient(to bottom, ${color}60, ${color}20)`,
          animation: "flowPulse 2s ease infinite",
        }}
      />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M6 8L0 0h12L6 8z" fill={color} fillOpacity="0.6" />
      </svg>
    </div>
  )
}

function SubCard({
  icon,
  title,
  description,
  accentColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  accentColor: string
}) {
  return (
    <div
      className="card-lift card-highlight relative rounded-xl p-5 flex gap-4"
      style={{
        backgroundColor: "var(--bg-primary)",
        border: `1px solid var(--border-color)`,
      }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
          {title}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>
    </div>
  )
}

function StageCard({
  tag,
  title,
  subtitle,
  accentColor,
  children,
  id,
}: {
  tag: string
  title: string
  subtitle: string
  accentColor: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <div
      id={id}
      className="relative rounded-2xl p-6 lg:p-8 card-highlight"
      style={{
        backgroundColor: "var(--bg-raised)",
        border: `1px solid ${accentColor}30`,
        boxShadow: `0 0 40px ${accentColor}08`,
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(${accentColor}18 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          opacity: 0.5,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="section-tag px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${accentColor}18`,
              color: accentColor,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {tag}
          </span>
        </div>
        <h3
          className="font-serif font-bold text-2xl mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  )
}

export function Pipeline() {
  return (
    <section
      id="pipeline"
      className="relative py-24 grain overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(232,81,10,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="section-tag">The Pipeline</span>
          <h2
            className="font-serif font-black text-balance"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
          >
            Enterprise-grade optimization.
            <br />
            One-click delivery.
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Most agencies rewrite listings manually. We built a data pipeline that enriches, analyzes, and optimizes your entire catalog at scale.
          </p>
        </div>

        {/* Pipeline stages */}
        <div className="space-y-4">

          {/* STAGE 1: EXTRACT */}
          <StageCard
            tag="Stage 1 — Extract"
            title="We connect to your store and pull everything"
            subtitle="Three data sources feed into a single enriched product record."
            accentColor="#e8510a"
          >
            <SubCard
              icon={<Database size={16} />}
              accentColor="#e8510a"
              title="Product Catalog"
              description="We connect to your Shopify, WooCommerce, or BigCommerce Admin API and pull your entire catalog — titles, descriptions, prices, variants, images, tags, handles, and metafields. Every field, every product."
            />
            <SubCard
              icon={<Camera size={16} />}
              accentColor="#e8510a"
              title="Product Images — Computer Vision"
              description="Every product image is fed through an AI vision model. It analyses colours, materials, shape, design features, and visible text. This grounds your descriptions in reality instead of guesswork."
            />
            <SubCard
              icon={<Search size={16} />}
              accentColor="#e8510a"
              title="Google Keyword Research"
              description="We take your product categories and seed terms, hit keyword research APIs, and build a cluster of 15–30 real search phrases per product — actual queries buyers type into Google, with search volume and competition data."
            />

            {/* Merge node */}
            <div
              className="flex items-center gap-3 mt-4 p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(232,81,10,0.06)",
                border: "1px solid rgba(232,81,10,0.2)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#e8510a", boxShadow: "0 0 8px rgba(232,81,10,0.6)" }}
              />
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Enriched Product Record
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                — original data + visual analysis + keyword cluster
              </span>
            </div>
          </StageCard>

          <FlowArrow color="#e8510a" />

          {/* STAGE 2: TRANSFORM */}
          <StageCard
            tag="Stage 2 — Transform"
            title="Two-phase AI engine — verify first, then write"
            subtitle="Hallucination-free copy built on facts extracted from your own products."
            accentColor="#2dd4a0"
          >
            <SubCard
              icon={<Brain size={16} />}
              accentColor="#2dd4a0"
              title="Phase 1 — Fact Extraction"
              description="We analyze your existing descriptions alongside insights extracted from your product images — including details visible in the images but missing from your descriptions. Every verifiable claim — specs, dimensions, materials, certifications — is captured and treated as a locked-in fact throughout the pipeline. No invented details. No guesswork.."
            />
            <SubCard
              icon={<FileText size={16} />}
              accentColor="#2dd4a0"
              title="Phase 2 — SEO Copywriting"
              description="Using verified product data and real search queries, the pipeline generates a conversion-optimized listing — title, description, meta tags, image alt text, and SEO tags. Every word is backed by real data and designed to rank, get clicks, and convert ."
            />

            {/* Output node */}
            <div
              className="flex flex-wrap gap-2 mt-4 p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(45,212,160,0.06)",
                border: "1px solid rgba(45,212,160,0.2)",
              }}
            >
              <span
                className="text-xs mb-1 w-full font-semibold"
                style={{ color: "var(--color-success)", fontFamily: "var(--font-jetbrains-mono)" }}
              >
                OUTPUT
              </span>
              {[
                "Optimized Title",
                "SEO Description",
                "Meta Tags",
                "Alt Text",
                "SEO Tags",
                "Confidence Score",
                "Review Flags",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(45,212,160,0.1)",
                    border: "1px solid rgba(45,212,160,0.2)",
                    color: "var(--color-success)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </StageCard>

          <FlowArrow color="#7dd3fc" />

          {/* STAGE 3: LOAD */}
          <StageCard
            tag="Stage 3 — Load"
            title="Review, approve, go live"
            subtitle="You stay in control. One click to ship everything."
            accentColor="#7dd3fc"
          >
            <SubCard
              icon={<FileText size={16} />}
              accentColor="#7dd3fc"
              title="Client Review Dashboard"
              description="You see every product with a before/after comparison, confidence rating (high/medium/low), and flags for anything that needs your input. Approve individually or in bulk."
            />
            <SubCard
              icon={<UploadCloud size={16} />}
              accentColor="#7dd3fc"
              title="Push to Store"
              description="One click. We push optimized titles, descriptions, meta tags, tags, and image alt text directly to your store via API. No copy-pasting. No developer needed. 500 products updated in minutes."
            />
          </StageCard>
        </div>

        {/* Stats bar */}
        <div
          className="mt-12 grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
          style={{ backgroundColor: "var(--border-color)" }}
        >
          {[
            "500 products extracted, enriched, transformed, and loaded in under 60 minutes",
            "Average listing score improvement: 34/100 → 91/100",
          ].map((stat) => (
            <div
              key={stat}
              className="px-8 py-6 text-center"
              style={{ backgroundColor: "var(--bg-raised)" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.8rem" }}
              >
                {stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
