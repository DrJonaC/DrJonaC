import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(237,241,245,1) 100%)",
          color: "#0a0a0a",
          borderRadius: "48px",
          border: "1px solid rgba(10,10,10,0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.08em"
          }}
        >
          <span>J</span>
          <span style={{ color: "#3b82f6" }}>C</span>
        </div>
      </div>
    ),
    size
  );
}
