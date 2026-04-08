"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

const beforeData = {
  score: 35,
  scoreColor: "#e84057",
  scoreBg: "rgba(232,64,87,0.1)",
  scoreBorder: "rgba(232,64,87,0.3)",
  cardBorder: "rgba(232,64,87,0.2)",
  cardBg: "rgba(232,64,87,0.04)",
  title: "Ceramic Coffee Mug",
  breadcrumb: "Home / Products / Item #4839",
  description:
    "Ceramic mug. Holds coffee or tea. Microwave safe. Dishwasher safe. Available in different colors. Good quality. Makes a great gift. Buy now.",
  metaTitle: "Ceramic Coffee Mug – My Store",
  tags: ["mug", "kitchen", "ceramic"],
  altText: null,
}

const afterData = {
  score: 97,
  scoreColor: "#2dd4a0",
  scoreBg: "rgba(45,212,160,0.1)",
  scoreBorder: "rgba(45,212,160,0.3)",
  cardBorder: "rgba(45,212,160,0.2)",
  cardBg: "rgba(45,212,160,0.04)",
  title: "Handmade Speckled Ceramic Latte Mug — 350ml | Sage Green",
  breadcrumb: "Home / Kitchen & Dining / Mugs & Cups / Ceramic Mugs",
  description:
    "Start your morning right with this handcrafted speckled ceramic latte mug, made by local potters using sustainably sourced stoneware clay. The generous 350ml capacity fits a full double latte, while the wide rim and weighted base keep your drink stable on any surface.",
  features: [
    "Food-safe glaze",
    "Retains heat 40% longer",
    "4 colours available",
    "Plastic-free packaging",
  ],
  metaTitle: "Handmade Ceramic Latte Mug 350ml | Speckled Sage Green",
  tags: [
    "handmade ceramic mug",
    "latte mug 350ml",
    "south african pottery",
    "stoneware coffee mug",
    "sage green mug",
    "eco-friendly gift",
  ],
  altText: "Handmade speckled ceramic latte mug in sage green, 350ml capacity, on wooden table",
}

function ScoreBadge({
  score,
  color,
  bg,
  border,
}: {
  score: number
  color: string
  bg: string
  border: string
}) {
  return (
    <span
      className="text-xs font-bold px-3 py-1 rounded-full"
      style={{
        color,
        backgroundColor: bg,
        border: `1px solid ${border}`,
        fontFamily: "var(--font-jetbrains-mono)",
      }}
    >
      {score}/100
    </span>
  )
}

export function BeforeAfter() {
  const [tab, setTab] = useState<"before" | "after">("before")
  const data = tab === "before" ? beforeData : afterData

  const changes = [
    {
      what: "Title expanded with verified specs",
      why: "Google reads product titles first — descriptive, keyword-rich titles rank significantly higher.",
    },
    {
      what: "Breadcrumb path categorised properly",
      why: "Proper category taxonomy improves crawlability and enables rich breadcrumb results in SERPs.",
    },
    {
      what: "Description grounded in real product data",
      why: "Computer vision extracted the actual material, capacity, and construction — no guessing.",
    },
    {
      what: "Meta title includes long-tail keywords",
      why: "Meta titles that match buyer search intent see up to 3× higher CTR from search results.",
    },
    {
      what: "6 keyword-backed SEO tags added",
      why: "Tags drive internal search and feed Google's product category signals for organic ranking.",
    },
    {
      what: "Image alt text written from vision analysis",
      why: "Google Images drives ~26% of all web searches. Empty alt text means zero image traffic.",
    },
  ]

  return (
    <section
      className="relative py-24 grain overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="section-tag">See the Difference</span>
          <h2
            className="font-serif font-black text-balance"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
          >
            One product. Transformed in seconds.
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex rounded-full p-1"
            style={{ backgroundColor: "var(--bg-raised)", border: "1px solid var(--border-color)" }}
          >
            {(["before", "after"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200"
                style={
                  tab === t
                    ? {
                        backgroundColor: t === "before" ? "#e84057" : "#2dd4a0",
                        color: "#0c0c0f",
                        boxShadow:
                          t === "before"
                            ? "0 0 16px rgba(232,64,87,0.4)"
                            : "0 0 16px rgba(45,212,160,0.4)",
                      }
                    : { color: "var(--text-secondary)" }
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          className="relative rounded-2xl p-6 lg:p-8 card-highlight transition-all duration-500"
          style={{
            backgroundColor: "var(--bg-raised)",
            border: `1px solid ${data.cardBorder}`,
            boxShadow: tab === "before"
              ? "0 0 40px rgba(232,64,87,0.06)"
              : "0 0 40px rgba(45,212,160,0.06)",
          }}
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-4 items-start mb-6">
            <div>
              <p
                className="text-xs mb-2"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {data.breadcrumb}
              </p>
              <h3 className="font-serif font-bold text-xl" style={{ color: "var(--text-primary)" }}>
                {data.title}
              </h3>
            </div>
            <ScoreBadge
              score={data.score}
              color={data.scoreColor}
              bg={data.scoreBg}
              border={data.scoreBorder}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <p
                  className="text-xs mb-2 uppercase tracking-widest"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Description
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {data.description}
                </p>
              </div>

              {"features" in data && data.features && (
                <div>
                  <p
                    className="text-xs mb-2 uppercase tracking-widest"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <Check size={13} style={{ color: "#2dd4a0", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div>
                <p
                  className="text-xs mb-2 uppercase tracking-widest"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Meta Title
                </p>
                <p
                  className="text-sm px-3 py-2 rounded-lg"
                  style={{
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  {data.metaTitle}
                </p>
              </div>
              <div>
                <p
                  className="text-xs mb-2 uppercase tracking-widest"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  SEO Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs mb-2 uppercase tracking-widest"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Image Alt Text
                </p>
                {data.altText ? (
                  <p
                    className="text-sm px-3 py-2 rounded-lg"
                    style={{
                      color: "var(--text-secondary)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {data.altText}
                  </p>
                ) : (
                  <div className="flex items-center gap-2">
                    <X size={13} style={{ color: "#e84057" }} />
                    <span
                      className="text-sm"
                      style={{ color: "#e84057", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.75rem" }}
                    >
                      empty — zero image search traffic
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Diff annotations */}
        {tab === "after" && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {changes.map((c, i) => (
              <div
                key={i}
                className="rounded-xl p-4 card-lift"
                style={{
                  backgroundColor: "var(--bg-raised)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#2dd4a0" }} />
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {c.what}
                  </p>
                </div>
                <p className="text-xs leading-relaxed pl-5" style={{ color: "var(--text-secondary)" }}>
                  {c.why}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
