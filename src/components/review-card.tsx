import { forwardRef } from "react"
import logo from "@/assets/images/logo.webp"
import reviewQr from "@/assets/images/review-qr.webp"
import { siteConfig } from "@/lib/site-config"

/**
 * Printable 5in x 7in postcard at 96 CSS px/in, meant to be posted in the
 * shop or handed to customers. Plain inline styles (no Tailwind color
 * utilities) so it captures identically for the PDF/print export.
 */
export const CARD_WIDTH = 480
export const CARD_HEIGHT = 672

const NAVY = "#0e1b38"
const ORANGE = "#ff6622"
const SILVER = "#d5dee5"
const WHITE = "#ffffff"

export const ReviewCard = forwardRef<HTMLDivElement>(function ReviewCard(
  _props,
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        background: WHITE,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: NAVY,
          padding: "28px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <img
          src={logo}
          alt=""
          crossOrigin="anonymous"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: WHITE,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div
          style={{ fontSize: 20, fontWeight: 700, color: WHITE, lineHeight: 1.15 }}
        >
          {siteConfig.name}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          padding: "32px 32px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill={ORANGE}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div style={{ fontSize: 26, fontWeight: 700, color: NAVY, lineHeight: 1.25 }}>
          Enjoyed our service?
        </div>
        <div style={{ fontSize: 17, color: "#4a6b82", maxWidth: 340 }}>
          Scan the code below to leave us a quick review on Google.
          It really helps our shop!
        </div>

        <div
          style={{
            padding: 16,
            background: WHITE,
            border: `2px solid ${SILVER}`,
            borderRadius: 16,
            marginTop: 8,
          }}
        >
          <img
            src={reviewQr}
            alt=""
            crossOrigin="anonymous"
            style={{ width: 200, height: 200, display: "block" }}
          />
        </div>

        <div style={{ fontSize: 14, fontWeight: 600, color: ORANGE, marginTop: 4 }}>
          Scan to Review Us on Google
        </div>
      </div>

      <div
        style={{
          background: NAVY,
          padding: "16px 24px",
          display: "flex",
          justifyContent: "center",
          gap: 16,
          fontSize: 13,
          color: SILVER,
        }}
      >
        <span>{siteConfig.phone.label}</span>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
        <span>{siteConfig.mobile.label}</span>
      </div>
    </div>
  )
})
