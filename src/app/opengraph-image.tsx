import { ImageResponse } from "next/og";

export const alt = "Kaamil Khan software engineering portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          background:
            "linear-gradient(135deg, #f8f6ef 0%, #f2efe7 55%, #e8e3d8 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "760px",
            }}
          >
            <div
              style={{
                fontSize: 18,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#0f766e",
              }}
            >
              Kaamil Khan
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              Backend, systems, concurrency, and compiler-focused engineering.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: "#334155",
              }}
            >
              DePaul University Computer Science graduate, June 2026.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {["Distributed systems", "Compiler design", "QA + software roles"].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(15,23,42,0.12)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  background: "rgba(255,255,255,0.7)",
                  fontSize: 20,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid rgba(15,23,42,0.12)",
            borderRadius: 28,
            padding: "24px 28px",
            background: "rgba(255,255,255,0.82)",
            fontSize: 24,
          }}
        >
          <div>React | FastAPI | Node.js | PostgreSQL | Docker</div>
          <div style={{ color: "#475569" }}>kaamil12355@icloud.com</div>
        </div>
      </div>
    ),
    size,
  );
}
