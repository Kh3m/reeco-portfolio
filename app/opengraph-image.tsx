import { ImageResponse } from "next/og";

export const alt = "ReeCo — Revenue Operations & Automation for service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17191D",
          color: "#FFFFFF",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700 }}>
          Ree<span style={{ color: "#D4AF37" }}>Co</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>Turn more enquiries into customers.</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, color: "#D4AF37", maxWidth: 980 }}>Keep more customers coming back.</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.65)", borderTop: "1px solid #252932", paddingTop: 28 }}>
          Revenue Operations & Automation · Real estate · MedSpas · Home services
        </div>
      </div>
    ),
    size,
  );
}
