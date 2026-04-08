import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { PlatformBar } from "@/components/platform-bar"
import { Pipeline } from "@/components/pipeline"
import { BeforeAfter } from "@/components/before-after"
import { Results } from "@/components/results"
import { Pricing } from "@/components/pricing"
import { CtaSection, Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlatformBar />
        <Pipeline />
        <BeforeAfter />
        <Results />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
