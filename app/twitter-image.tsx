import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/site-data";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";
export const alt = "Jianan Chen portfolio social share image";
export const dynamic = "force-static";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(16,185,129,0.16), transparent 30%), linear-gradient(180deg, #f7f7f9 0%, #eef1f5 100%)",
          color: "#0a0a0a",
          padding: "72px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#5f6673"
          }}
        >
          <span>Jianan Chen</span>
          <span>Agent Memory / Privacy</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 920 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.07em"
            }}
          >
            {siteMeta.name}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.28,
              color: "#4b5563",
              maxWidth: 900
            }}
          >
            I design AI systems that make memory visible, drift traceable, and privacy worth
            defending.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 22,
              color: "#4b5563"
            }}
          >
            <span>MIDAS</span>
            <span>Pensieve</span>
            <span>Trustworthy AI</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 30,
              fontWeight: 600
            }}
          >
            <span style={{ color: "#0a0a0a" }}>JC</span>
            <span style={{ color: "#3b82f6" }}>•</span>
            <span style={{ color: "#10b981" }}>Memory Systems</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
