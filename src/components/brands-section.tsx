import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/site-config"

import isuzu from "@/assets/images/brands/isuzu.svg"
import mitsubishi from "@/assets/images/brands/mitsubishi.svg"
import toyota from "@/assets/images/brands/toyota.svg"
import caterpillar from "@/assets/images/brands/caterpillar.svg"
import perkins from "@/assets/images/brands/perkins.webp"
import volvo from "@/assets/images/brands/volvo.svg"
import mercedesBenz from "@/assets/images/brands/mercedes-benz.svg"
import hyundai from "@/assets/images/brands/hyundai.svg"

const brandLogos = [
  { name: "Isuzu", src: isuzu, w: 1000, h: 172 },
  { name: "Mitsubishi", src: mitsubishi, w: 2000, h: 2144 },
  { name: "Toyota", src: toyota, w: 950, h: 157 },
  { name: "Caterpillar", src: caterpillar, w: 112, h: 20 },
  { name: "Perkins", src: perkins, w: 301, h: 58 },
  { name: "Volvo", src: volvo, w: 949, h: 74 },
  { name: "Mercedes-Benz", src: mercedesBenz, w: 1000, h: 1000 },
  { name: "Hyundai", src: hyundai, w: 1000, h: 129 },
]

export function BrandsSection() {
  return (
    <section className="border-y border-brand-silver/60 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-sm font-semibold tracking-wide text-brand-orange-ink uppercase">
          Makes We Service
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex h-16 items-center justify-center rounded-lg bg-brand-bg p-3 ring-1 ring-brand-silver"
              title={brand.name}
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                width={brand.w}
                height={brand.h}
                className="max-h-8 max-w-full object-contain"
              />
            </div>
          ))}
          <div className="flex h-16 items-center justify-center rounded-lg bg-brand-bg p-3 ring-1 ring-brand-silver">
            <span className="text-sm font-bold text-brand-navy">
              Stanadyne
            </span>
          </div>
        </div>

        <h3 className="mt-10 text-sm font-semibold tracking-wide text-brand-orange-ink uppercase">
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
