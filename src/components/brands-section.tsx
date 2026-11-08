import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/site-config"

export function BrandsSection() {
  return (
    <section className="border-y border-brand-silver/60 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-sm font-semibold tracking-wide text-brand-orange uppercase">
          Makes We Service
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          {siteConfig.brandsServiced.map((brand) => (
            <Badge
              key={brand}
              className="h-auto rounded-full bg-brand-navy px-4 py-1.5 text-sm font-semibold text-white"
            >
              {brand}
            </Badge>
          ))}
        </div>

        <h3 className="mt-8 text-sm font-semibold tracking-wide text-brand-orange uppercase">
          Genuine Parts From
        </h3>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          {siteConfig.partsBrands.map((brand) => (
            <Badge
              key={brand}
              variant="outline"
              className="h-auto rounded-full border-brand-silver px-4 py-1.5 text-sm font-medium text-brand-steel"
            >
              {brand}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
