import { forwardRef } from "react"
import logo from "@/assets/images/logo.webp"
import { siteConfig } from "@/lib/site-config"

/**
 * Standard US business card size at 96 CSS px/in (3.5in x 2in).
 * Kept to plain inline styles (no Tailwind color utilities) so the
 * card renders identically when captured to an image for the PDF export.
 */
export const CARD_WIDTH = 336
export const CARD_HEIGHT = 192

const NAVY = "#0e1b38"
const ORANGE = "#ff6622"
const SILVER = "#d5dee5"
const WHITE = "#ffffff"

export const BusinessCard = forwardRef<HTMLDivElement>(function BusinessCard(
  _props,
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        background: NAVY,
        position: "relative",
        overflow: "hidden",
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: WHITE,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 10,
          background: ORANGE,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "18px 24px 16px 20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={logo}
            alt=""
            crossOrigin="anonymous"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: WHITE,
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: -0.2,
                lineHeight: 1.1,
                color: WHITE,
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 8.5,
                fontWeight: 600,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                color: ORANGE,
                marginTop: 2,
              }}
            >
              Diesel Pump &amp; Injector Calibration
            </div>
          </div>
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.15)",
            margin: "10px 0",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 9.5, color: SILVER }}>
            <span style={{ color: WHITE, fontWeight: 600 }}>Tel:</span>{" "}
            {siteConfig.phone.label}
            <span style={{ margin: "0 6px", color: "rgba(255,255,255,0.3)" }}>
              |
            </span>
            <span style={{ color: WHITE, fontWeight: 600 }}>Mobile:</span>{" "}
            {siteConfig.mobile.label}
          </div>
          <div style={{ fontSize: 9.5, color: SILVER }}>
            {siteConfig.address.street}, {siteConfig.address.barangay}
          </div>
          <div style={{ fontSize: 9.5, color: SILVER }}>
            {siteConfig.address.city}, {siteConfig.address.region}
          </div>
          <div style={{ fontSize: 9.5, color: ORANGE, fontWeight: 600, marginTop: 2 }}>
            {siteConfig.domain}
          </div>
        </div>
      </div>
    </div>
  )
})
