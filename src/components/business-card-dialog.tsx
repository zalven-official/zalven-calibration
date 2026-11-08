import { useRef, useState } from "react"
import { Download, IdCard, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BusinessCard, CARD_WIDTH, CARD_HEIGHT } from "@/components/business-card"
import { siteConfig } from "@/lib/site-config"

const PDF_WIDTH_IN = 3.5
const PDF_HEIGHT_IN = 2

async function renderCardImage(node: HTMLDivElement) {
  const { toPng } = await import("html-to-image")
  return toPng(node, {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    pixelRatio: 4,
    cacheBust: true,
  })
}

export function BusinessCardDialog({ fullWidth = false }: { fullWidth?: boolean }) {
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
        orientation: "landscape",
        unit: "in",
        format: [PDF_WIDTH_IN, PDF_HEIGHT_IN],
      })
      pdf.addImage(dataUrl, "PNG", 0, 0, PDF_WIDTH_IN, PDF_HEIGHT_IN)
      pdf.save("zalven-calibration-business-card.pdf")
    } finally {
      setBusy(null)
    }
  }

  async function handlePrint() {
    if (!cardRef.current) return
    setBusy("print")
    // Open the window synchronously, before any await, so browsers don't
    // treat it as an unsolicited popup and block it.
    const printWindow = window.open("", "_blank", "width=500,height=350")
    try {
      if (!printWindow) return
      const dataUrl = await renderCardImage(cardRef.current)
      printWindow.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>${siteConfig.name} Business Card</title>
            <style>
              @page { size: ${PDF_WIDTH_IN}in ${PDF_HEIGHT_IN}in; margin: 0; }
              html, body { margin: 0; padding: 0; }
              img { width: ${PDF_WIDTH_IN}in; height: ${PDF_HEIGHT_IN}in; display: block; }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" alt="${siteConfig.name} business card" />
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.onload = () => {
        printWindow.focus()
        printWindow.print()
      }
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
            size={fullWidth ? "default" : "icon"}
            className={
              fullWidth
                ? "w-full border-brand-silver text-brand-navy"
                : "border-brand-silver text-brand-navy hover:bg-brand-silver/30"
            }
            aria-label="Open business card"
          />
        }
      >
        <IdCard className="size-4.5" />
        {fullWidth && "Get Business Card"}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Digital Business Card</DialogTitle>
          <DialogDescription>
            Download a print-ready PDF or print it directly.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center py-2">
          <div
            style={{
              boxShadow: "0 10px 30px -10px rgba(14,27,56,0.4)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <BusinessCard ref={cardRef} />
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
