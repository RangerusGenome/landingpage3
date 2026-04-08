export function PlatformBar() {
  const platforms = ["Shopify", "WooCommerce", "BigCommerce", "Magento", "Wix"]

  return (
    <div
      className="relative py-8 border-y"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <span
            className="section-tag flex-shrink-0"
            style={{ fontSize: "0.65rem" }}
          >
            Trusted by stores on
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {platforms.map((p) => (
              <span
                key={p}
                className="font-sans font-semibold text-base tracking-tight select-none"
                style={{ color: "var(--text-primary)", opacity: 0.4 }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
