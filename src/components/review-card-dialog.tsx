import { useRef, useState } from "react"
import { Download, Printer, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReviewCard, CARD_WIDTH, CARD_HEIGHT } from "@/components/review-card"
import { siteConfig } from "@/lib/site-config"

const PDF_WIDTH_IN = 5
const PDF_HEIGHT_IN = 7

async function renderCardImage(node: HTMLDivElement) {
  const { toPng } = await import("html-to-image")
  return toPng(node, {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    pixelRatio: 4,
    cacheBust: true,
  })
}

export function ReviewCardDialog() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [busy, setBusy] = useState<"download" | "print" | null>(null)

  async function handleDownload() {
    if (!cardRef.current) return
    setBusy("download")
    try {
      const [dataUrl, { jsPDF }] = await Promise.all([
        renderCardImage(cardRef.current),
        import("jspdf"),
      ])
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [PDF_WIDTH_IN, PDF_HEIGHT_IN],
      })
      pdf.addImage(dataUrl, "PNG", 0, 0, PDF_WIDTH_IN, PDF_HEIGHT_IN)
      pdf.save("zalven-calibration-review-card.pdf")
    } finally {
      setBusy(null)
    }
  }

  async function handlePrint() {
    if (!cardRef.current) return
    setBusy("print")
    const printWindow = window.open("", "_blank", "width=500,height=700")
    try {
      if (!printWindow) return
      const dataUrl = await renderCardImage(cardRef.current)
      printWindow.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>${siteConfig.name} Review Card</title>
            <style>
              @page { size: ${PDF_WIDTH_IN}in ${PDF_HEIGHT_IN}in; margin: 0; }
              html, body { margin: 0; padding: 0; }
              img { width: ${PDF_WIDTH_IN}in; height: ${PDF_HEIGHT_IN}in; display: block; }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" alt="${siteConfig.name} review card" />
          </body>
        </html>
      `)
      printWindow.document.close()
      const img = printWindow.document.querySelector("img")
      if (img) {
        img.onload = () => {
          printWindow.focus()
          printWindow.print()
        }
      }
    } finally {
      setBusy(null)
    }
  }

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="border-brand-silver text-brand-navy"
          />
        }
      >
        <Star className="size-3.5" />
        Get Printable Review Card
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Printable Review Card</DialogTitle>
          <DialogDescription>
            A 5&times;7 card to print and post in the shop or hand to customers.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center py-2">
          <div
            style={{
              boxShadow: "0 10px 30px -10px rgba(14,27,56,0.4)",
              borderRadius: 10,
              overflow: "hidden",
              transform: "scale(0.6)",
              transformOrigin: "top center",
              marginBottom: -270,
            }}
          >
            <ReviewCard ref={cardRef} />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            onClick={handleDownload}
            disabled={busy !== null}
            className="flex-1 bg-brand-orange text-white hover:bg-brand-orange/90"
          >
            <Download className="size-4" />
            {busy === "download" ? "Preparing..." : "Download PDF"}
          </Button>
          <Button
            onClick={handlePrint}
            disabled={busy !== null}
            variant="outline"
            className="flex-1 border-brand-silver text-brand-navy"
          >
            <Printer className="size-4" />
            {busy === "print" ? "Preparing..." : "Print"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
