import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BusinessCardDialog } from "@/components/business-card-dialog"
import { siteConfig } from "@/lib/site-config"
import logo from "@/assets/images/logo.webp"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-silver/60 bg-brand-bg/90 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt={`${siteConfig.name} logo`}
            width={128}
            height={128}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-tight text-brand-navy">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            size="icon"
            render={
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Message us on Facebook"
              />
            }
            className="border-brand-silver text-brand-navy hover:bg-brand-silver/30"
          >
            <MessageCircle className="size-4.5" />
          </Button>
          <BusinessCardDialog />
          <Button
            render={<a href={siteConfig.phone.href} />}
            className="bg-brand-orange text-white hover:bg-brand-orange/90"
          >
            <Phone className="size-4" />
            Call Now
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-brand-navy"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-bg">
            <SheetHeader>
              <SheetTitle className="text-brand-navy">{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-brand-navy hover:bg-brand-silver/40"
                >
                  {item.label}
                </a>
              ))}
              <Button
                render={<a href={siteConfig.phone.href} />}
                className="mt-3 bg-brand-orange text-white hover:bg-brand-orange/90"
              >
                <Phone className="size-4" />
                Call Now
              </Button>
              <Button
                variant="outline"
                render={
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                }
                className="border-brand-silver text-brand-navy"
              >
                <MessageCircle className="size-4" />
                Message on Facebook
              </Button>
              <div className="mt-1">
                <BusinessCardDialog fullWidth />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
