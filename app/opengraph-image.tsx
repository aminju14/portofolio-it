import { ImageResponse } from "next/og";
import { site } from "./redesign/content";

// Route segment config
export const alt =
  "Aminju — Software Engineer · Founder of MinLabs · Creator of AgriMind";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card (1200×630) generated from brand data.
 * Light-first premium look, primary blue #2563EB, matches the redesign.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(900px 500px at 100% 0%, rgba(37,99,235,0.10) 0%, transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: monogram + availability */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "9999px",
                background: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "34px",
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              MA
            </div>
            <div style={{ display: "flex", fontSize: "26px", color: "#6B7280", fontWeight: 500 }}>
              MinLabs
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              borderRadius: "9999px",
              border: "1px solid #D6E0FF",
              background: "#EFF4FF",
              color: "#2563EB",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            <div style={{ width: "12px", height: "12px", borderRadius: "9999px", background: "#2563EB", display: "flex" }} />
            Available for freelance
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "66px",
              fontWeight: 700,
              color: "#111418",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            I build production mobile, backend &amp; AI systems.
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: "#3A3F47" }}>
            9+ years engineering · 20+ apps shipped · Mobile · Backend · AI
          </div>
        </div>

        {/* Bottom row: name + positioning */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, color: "#111418" }}>
              {site.name}
            </div>
            <div style={{ display: "flex", fontSize: "24px", color: "#6B7280" }}>
              Software Engineer · Founder of MinLabs · Creator of AgriMind
            </div>
          </div>
          <div style={{ display: "flex", fontSize: "24px", color: "#2563EB", fontWeight: 600 }}>
            aminju.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
