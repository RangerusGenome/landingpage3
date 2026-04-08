"use client"

import { useEffect, useState } from "react"

const lines = [
  { text: "Authenticating with store...", color: "var(--text-secondary)", prefix: "🔑 " },
  { text: "Connected — 847 products found", color: "#2dd4a0", prefix: "✅ " },
  { text: "Analysing product images... (23/847)", color: "var(--accent-primary)", prefix: "📸 " },
  { text: "Fetching keyword clusters from Google...", color: "var(--accent-primary)", prefix: "🔍 " },
  { text: "Phase 1: Extracting verified specs...", color: "#7dd3fc", prefix: "🧠 " },
  { text: "Phase 2: Writing optimized listings...", color: "#7dd3fc", prefix: "📝 " },
  { text: "847 products optimized — avg score 34 → 91", color: "#2dd4a0", prefix: "✅ " },
]

export function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    if (visibleLines < lines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 650)
      return () => clearTimeout(t)
    }
  }, [visibleLines])

  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        backgroundColor: "var(--bg-raised)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 0 0 1px rgba(232,81,10,0.08), 0 24px 64px rgba(0,0,0,0.5)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-color)",
        }}
      >
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#e84057", opacity: 0.8 }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#e8c60a", opacity: 0.8 }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#2dd4a0", opacity: 0.8 }} />
        <span
          className="ml-4 text-xs"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)" }}
        >
          ListingEtl-pipeline — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 min-h-[280px] font-mono text-sm leading-relaxed space-y-2">
        <div style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.75rem" }}>
          $ ListingEtl run --store myshop.myshopify.com
        </div>
        {lines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className="flex items-start gap-1 animate-fade-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.8rem" }}>
              <span style={{ color: "var(--text-muted)", marginRight: "0.5rem" }}>›</span>
              <span style={{ color: line.color }}>
                {line.prefix}
                {line.text}
              </span>
            </span>
          </div>
        ))}
        {visibleLines < lines.length && (
          <span
            className="inline-block w-2 h-4"
            style={{
              backgroundColor: "var(--accent-primary)",
              opacity: cursor ? 1 : 0,
              transition: "opacity 0.1s",
            }}
          />
        )}
      </div>
    </div>
  )
}
