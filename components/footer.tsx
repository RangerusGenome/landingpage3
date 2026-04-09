"use client"

export function CtaSection() {
  return (
    <section
      id="audit"
      className="relative py-28 grain overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(232,81,10,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8">
        <h2
          className="font-serif font-black text-balance"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
        >
          Get your free store audit
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          We&apos;ll analyse 10 of your product listings for free and show you exactly what&apos;s
          holding back your organic traffic. No commitment, no credit card.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).Calendly) {
                (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/trevorkuhlmannk/free-store-audit-15-mins'});
              }
            }}
            className="btn-orange inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold"
          >
            Request Free Audit
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          &copy; 2026 CatalogSeo. All rights reserved.
        </p>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors duration-200 hover:text-[var(--text-secondary)]"
              style={{ color: "var(--text-muted)" }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
