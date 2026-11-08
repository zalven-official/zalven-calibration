import { forwardRef } from "react"
import logo from "@/assets/images/logo.webp"
import { siteConfig } from "@/lib/site-config"

/**
 * Standard US business card size at 96 CSS px/in (3.5in x 2in).
 * The PDF/print export renders this node at the exact same aspect
 * ratio onto a 3.5in x 2in page, so it prints at true size.
 * Kept to plain inline styles (no Tailwind color utilities) so the
 * card renders identically when captured to an image for export.
 */
export const CARD_WIDTH = 336
export const CARD_HEIGHT = 192

const NAVY = "#0e1b38"
const ORANGE = "#ff6622"
const SILVER = "#d5dee5"
const WHITE = "#ffffff"

const brandsLine = siteConfig.brandsServiced.join(" • ")

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
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
          width: 8,
          background: ORANGE,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "14px 22px 12px 18px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <img
            src={logo}
            alt=""
            crossOrigin="anonymous"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: WHITE,
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontSize: 15,
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
                fontSize: 7.5,
                fontWeight: 600,
                letterSpacing: 0.3,
                textTransform: "uppercase",
                color: ORANGE,
                marginTop: 1,
              }}
            >
              Diesel Pump &amp; Injector Calibration
            </div>
          </div>
        </div>

        <div
          style={{ height: 1, background: "rgba(255,255,255,0.15)", margin: "7px 0" }}
        />

        <div>
          <div
            style={{
              fontSize: 6.8,
              fontWeight: 700,
              letterSpacing: 0.4,
              textTransform: "uppercase",
              color: ORANGE,
              marginBottom: 2,
            }}
          >
            Engines We Service
          </div>
          <div style={{ fontSize: 7.8, lineHeight: 1.4, color: SILVER }}>
            {brandsLine}
          </div>
        </div>

        <div
          style={{ height: 1, background: "rgba(255,255,255,0.15)", margin: "7px 0" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <div
            style={{
              fontSize: 9,
              color: SILVER,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <span style={{ color: WHITE, fontWeight: 600 }}>Tel:</span>{" "}
              {siteConfig.phone.label}
              <span style={{ margin: "0 5px", color: "rgba(255,255,255,0.3)" }}>
                |
              </span>
              <span style={{ color: WHITE, fontWeight: 600 }}>Mobile:</span>{" "}
              {siteConfig.mobile.label}
            </span>
          </div>
          <div
            style={{
              fontSize: 9,
              color: SILVER,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span>
              {siteConfig.address.city}, {siteConfig.address.region}
            </span>
            <span style={{ color: ORANGE, fontWeight: 600 }}>
              {siteConfig.domain}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})
