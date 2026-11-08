import {
  Gauge,
  Settings2,
  Droplets,
  Cog,
  Wrench,
  Truck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Gauge,
    title: "Fuel Pump Calibration",
    description:
      "Bench-tested calibration of inline and rotary diesel fuel injection pumps for accurate fuel delivery and timing.",
  },
  {
    icon: Droplets,
    title: "Injector Testing & Repair",
    description:
      "Nozzle cleaning, spray-pattern testing, and injector overhaul to restore proper atomization and pressure.",
  },
  {
    icon: Cog,
    title: "Pump Overhaul & Rebuild",
    description:
      "Full teardown, inspection, and rebuild of mechanical fuel pump assemblies using genuine OEM components.",
  },
  {
    icon: Settings2,
    title: "Common Rail Diagnostics",
    description:
      "Precision diagnostics and calibration for modern common-rail diesel injection systems.",
  },
  {
    icon: Truck,
    title: "Heavy Equipment Service",
    description:
      "On-site and in-shop fuel system service for trucks, tractors, generators, and heavy machinery.",
  },
  {
    icon: Wrench,
    title: "Genuine Parts & Rebuild Kits",
    description:
      "Replacement using trusted brand parts to keep every pump and injector performing to spec.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-brand-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-orange-ink uppercase">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Diesel Fuel System Services
          </h2>
          <p className="mt-3 text-brand-steel">
            From a single injector to a full inline pump rebuild, every job
            leaves our bench calibrated and verified.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-0 ring-brand-silver/70 transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <service.icon className="size-5.5" />
                </div>
                <CardTitle className="text-brand-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-brand-steel">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
