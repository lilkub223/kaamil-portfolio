import { ImageResponse } from "next/og";
export const alt = "Kaamil Khan — Reliable systems. Useful software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafbf8",
        padding: "65px 75px",
        fontFamily: "sans-serif",
        color: "#172820",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#26634b",
        }}
      >
        <span>Kaamil Khan / Software engineer</span>
        <span>Chicago, IL</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          letterSpacing: "-4px",
          lineHeight: 1.05,
        }}
      >
        <span>Reliable systems.</span>
        <span style={{ color: "#26634b" }}>Useful software.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #dce2db",
          paddingTop: 25,
          justifyContent: "space-between",
          fontSize: 21,
          color: "#5d6862",
        }}
      >
        <span>Backend · Full-stack · Software testing</span>
        <span>DePaul CS / Class of 2026</span>
      </div>
    </div>,
    size,
  );
}
