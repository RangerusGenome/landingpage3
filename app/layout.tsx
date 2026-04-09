import type { Metadata } from 'next'
import { Fraunces, Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '600', '700', '800', '900'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'CatalogSeo — AI-Powered Product Listing Optimization',
  description:
    'Turn your product pages into Google traffic machines.',
  generator: 'v0.app',
  keywords: ['SEO', 'product listings', 'Shopify', 'WooCommerce', 'AI optimization', 'e-commerce SEO'],
  openGraph: {
    title: 'CatalogSeo — Turn your product pages into Google traffic machines',
    description: 'Turn your product pages into Google traffic machines.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
