import { CheckCircle2 } from "lucide-react"
import technicianImage from "@/assets/images/workshop-technician.webp"
import { siteConfig } from "@/lib/site-config"

const highlights = [
  "Experienced diesel fuel system technicians",
  "Calibrated test-bench verification on every job",
  "Genuine OEM and trusted-brand replacement parts",
  "In-shop and on-site service for heavy equipment",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl ring-1 ring-brand-silver">
          <img
            src={technicianImage}
            alt={`${siteConfig.name} technician with a diesel fuel pump calibration test bench`}
            width={1000}
            height={750}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold tracking-wide text-brand-orange-ink uppercase">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Trusted Diesel Pump &amp; Injector Specialists
          </h2>
          <p className="mt-4 leading-relaxed text-brand-steel">
            {siteConfig.name} specializes in testing, repairing, and
            calibrating diesel fuel injection pumps and injectors. Every
            pump that leaves our shop is verified on a calibration test
            bench, so your engine gets exactly the fuel delivery and timing
            it was designed for.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                <span className="text-brand-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
