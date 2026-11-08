import pumpInjectors01 from "@/assets/images/pump-injectors-01.webp"
import pumpInjectors03 from "@/assets/images/pump-injectors-03.webp"
import workshop02 from "@/assets/images/workshop-02.webp"
import workshop03 from "@/assets/images/workshop-03.webp"
import technician from "@/assets/images/workshop-technician.webp"
import volvo2pin from "@/assets/images/volvo-2pin.webp"
import catOnsite from "@/assets/images/cat-onsite.webp"
import shopWide from "@/assets/images/shop-wide.webp"
import partsKit from "@/assets/images/parts-kit.webp"

const photos = [
  { src: technician, alt: "Technician at the calibration test bench", w: 1000, h: 750 },
  { src: shopWide, alt: "Caterpillar fuel injection pumps on the shop bench", w: 825, h: 1100 },
  { src: pumpInjectors01, alt: "Overhauled fuel pump with matching injector set", w: 750, h: 1000 },
  { src: volvo2pin, alt: "Genuine Volvo 2-pin unit injectors and rebuild kits", w: 825, h: 1100 },
  { src: workshop03, alt: "Fully disassembled pump components laid out for rebuild", w: 1000, h: 750 },
  { src: pumpInjectors03, alt: "Rebuilt pump assembly alongside injector sets", w: 750, h: 1000 },
  { src: catOnsite, alt: "On-site Caterpillar engine fuel system service", w: 825, h: 1100 },
  { src: partsKit, alt: "Genuine rebuild kit parts from Interstate-McBee", w: 1100, h: 825 },
  { src: workshop02, alt: "On-site fuel pump service on heavy equipment", w: 1000, h: 750 },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-brand-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-orange-ink uppercase">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Inside the Shop
          </h2>
          <p className="mt-3 text-brand-steel">
            A look at the pumps, injectors, and test benches we work on
            every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group aspect-square overflow-hidden rounded-xl ring-1 ring-brand-silver"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={photo.w}
                height={photo.h}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
