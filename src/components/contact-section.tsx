import { useState, type FormEvent } from "react"
import { Phone, Smartphone, Send, MapPin, Navigation, MessageCircle, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site-config"
import { ReviewCardDialog } from "@/components/review-card-dialog"
import reviewQr from "@/assets/images/review-qr.webp"

export function ContactSection() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = `Hi ${siteConfig.name}, my name is ${name}. ${message}`
    window.location.href = `sms:${siteConfig.mobile.href.replace("tel:", "")}?body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-brand-navy py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-orange uppercase">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Talk to Our Team
          </h2>
          <p className="mt-3 text-brand-silver">
            Call, text, or send a message and we&apos;ll get back to you
            about your pump or injector.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Card className="border-0 bg-white/5 ring-1 ring-white/10">
              <CardContent className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver">Telephone</p>
                  <a
                    href={siteConfig.phone.href}
                    className="text-lg font-semibold text-white hover:text-brand-orange"
                  >
                    {siteConfig.phone.label}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 ring-1 ring-white/10">
              <CardContent className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <Smartphone className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver">Mobile</p>
                  <a
                    href={siteConfig.mobile.href}
                    className="text-lg font-semibold text-white hover:text-brand-orange"
                  >
                    {siteConfig.mobile.label}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 ring-1 ring-white/10">
              <CardContent className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver">Shop Address</p>
                  <p className="text-base font-semibold text-white">
                    {siteConfig.address.street}
                  </p>
                  <p className="text-sm text-brand-silver">
                    {siteConfig.address.barangay}, {siteConfig.address.city}
                  </p>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange hover:underline"
                  >
                    <Navigation className="size-3.5" />
                    Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 ring-1 ring-white/10">
              <CardContent className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver">Hours</p>
                  <p className="text-lg font-semibold text-white">
                    {siteConfig.hours.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 bg-white lg:col-span-3">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-brand-navy">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-brand-navy">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your pump, injector, or vehicle..."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-orange text-white hover:bg-brand-orange/90"
                >
                  <Send className="size-4" />
                  Send Message
                </Button>

                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-1.5 text-sm font-medium text-brand-steel hover:text-brand-navy"
                >
                  <MessageCircle className="size-4" />
                  Or message us on Facebook
                </a>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <Card className="overflow-hidden border-0 bg-white/5 ring-1 ring-white/10 lg:col-span-3">
            <CardContent className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                <MapPin className="size-7" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{siteConfig.legalName}</p>
                <p className="mt-1 text-sm text-brand-silver">{siteConfig.address.full}</p>
              </div>
              <Button
                render={
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  />
                }
                className="mt-2 bg-brand-orange text-white hover:bg-brand-orange/90"
              >
                <Navigation className="size-4" />
                Open in Google Maps
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white lg:col-span-2">
            <CardContent className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-brand-orange" />
                ))}
              </div>
              <p className="text-base font-semibold text-brand-navy">
                Happy with our service?
              </p>
              <p className="text-sm text-brand-steel">
                Scan to leave us a review on Google.
              </p>
              <img
                src={reviewQr}
                alt="QR code to leave a Google review for Zalven Calibration"
                width={148}
                height={148}
                className="size-32 rounded-lg ring-1 ring-brand-silver"
              />
              <a
                href={siteConfig.reviewUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs font-medium text-brand-steel hover:text-brand-navy hover:underline"
              >
                or tap here
              </a>
              <ReviewCardDialog />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
