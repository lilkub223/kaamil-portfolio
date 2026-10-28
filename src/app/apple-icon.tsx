import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#173d30",
        color: "#fafbf8",
        fontSize: 125,
        fontWeight: 700,
        fontFamily: "sans-serif",
        letterSpacing: "-9px",
      }}
    >
      k<span style={{ color: "#a9d5b3" }}>.</span>
    </div>,
    size,
  );
}
