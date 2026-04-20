import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
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
            "radial-gradient(circle at top, rgba(59,130,246,0.28), transparent 50%), linear-gradient(135deg, #fafafc 0%, #e9edf2 100%)",
          color: "#0a0a0a",
          borderRadius: "56px",
          border: "1px solid rgba(10,10,10,0.08)",
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: "-0.08em"
        }}
      >
        JC
      </div>
    ),
    size
  );
}
