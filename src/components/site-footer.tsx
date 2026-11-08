import { Phone, Smartphone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import logo from "@/assets/images/logo.webp"

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt={`${siteConfig.name} logo`}
              width={256}
              height={256}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-base font-bold text-white">
              {siteConfig.name}
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-5">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-brand-silver hover:text-brand-orange"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-1.5 text-sm text-brand-silver hover:text-brand-orange"
            >
              <Phone className="size-4" />
              {siteConfig.phone.label}
            </a>
            <a
              href={siteConfig.mobile.href}
              className="flex items-center gap-1.5 text-sm text-brand-silver hover:text-brand-orange"
            >
              <Smartphone className="size-4" />
              {siteConfig.mobile.label}
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Message us on Facebook"
              className="flex items-center gap-1.5 text-sm text-brand-silver hover:text-brand-orange"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-xs text-brand-silver/70">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand-orange"
          >
            {siteConfig.address.full}
          </a>
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
