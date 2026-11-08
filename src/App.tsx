import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BrandsSection } from "@/components/brands-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <AboutSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
