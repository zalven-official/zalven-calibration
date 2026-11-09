import { Gauge, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import heroImage from "@/assets/images/pump-injectors-02.webp"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-navy">
      <img
        src={heroImage}
        alt="Diesel fuel injection pump under calibration on a test bench"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        fetchPriority="high"
        decoding="async"
        width={862}
        height={1150}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-orange uppercase">
          <Gauge className="size-3.5" />
          Diesel Calibration Specialists
        </span>

        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Diesel Calibration Shop in Caloocan &mdash; Pump &amp; Injector Specialists
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-brand-silver sm:text-lg">
          {siteConfig.name} is a diesel calibration shop that tests, repairs,
          and calibrates inline and rotary fuel injection pumps and injectors
          for cars, trucks, and heavy equipment &mdash; backed by genuine OEM
          parts and bench-tested accuracy.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            render={<a href={siteConfig.phone.href} />}
            size="lg"
            className="bg-brand-orange text-white hover:bg-brand-orange/90"
          >
            <Phone className="size-4" />
            Call {siteConfig.phone.label}
          </Button>
          <Button
            render={<a href={siteConfig.mobile.href} />}
            size="lg"
            variant="outline"
            className="border-brand-silver/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <MessageCircle className="size-4" />
            Mobile {siteConfig.mobile.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
