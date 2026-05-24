import { ImageResponse } from "next/og";

export const alt = "Alpha IES Ltd — Strategic Minerals Trading & Sourcing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #111114 0%, #1a1a1a 60%, #3f2f18 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c9a553",
            marginBottom: 28,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            display: "flex",
          }}
        >
          Alpha IES Ltd
        </div>
        <div
          style={{
            fontSize: 96,
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: -2,
            marginBottom: 24,
            maxWidth: 1000,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Adding Value at Every Step.
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#c9a553",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          Delivering Results That Last.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: 4,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          alphaiesltd.com
        </div>
      </div>
    ),
    { ...size },
  );
}
