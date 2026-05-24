import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          background: "#111114",
          color: "#c9a553",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: -2,
        }}
      >
        AI
      </div>
    ),
    { ...size },
  );
}
