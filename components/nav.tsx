"use client"

import { useState, useEffect } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 grain ${scrolled ? "border-b border-[var(--border-color)]" : ""
        }`}
      style={{
        backgroundColor: "rgba(12, 12, 15, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0.5">
          <span
            className="font-serif text-xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            CatalogSeo
          </span>
          <span
            className="w-2 h-2 rounded-full mb-2.5 inline-block"
            style={{
              backgroundColor: "var(--accent-primary)",
              boxShadow: "0 0 8px var(--accent-primary), 0 0 16px var(--accent-glow)",
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Pipeline", "Results", "Pricing"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm transition-colors duration-200 hover:text-[var(--text-primary)]"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-outfit)" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).Calendly) {
              (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/trevorkuhlmannk/free-store-audit-15-mins'});
            }
          }}
          className="btn-orange hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          Get Free Audit
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 rounded" style={{ backgroundColor: "var(--text-primary)" }} />
          <span className="w-5 h-0.5 rounded" style={{ backgroundColor: "var(--text-primary)" }} />
        </button>
      </nav>
    </header>
  )
}
