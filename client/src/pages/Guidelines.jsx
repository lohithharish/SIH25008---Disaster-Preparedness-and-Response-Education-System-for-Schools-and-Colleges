import { useState } from "react";

const GUIDELINES = [
  {
    id: "earthquake",
    icon: "🌍",
    name: "Earthquake",
    risk: "High in seismic zones",
    color: "#f97316",
    before: [
      "Secure heavy furniture and appliances to walls.",
      "Identify safe spots: under sturdy tables and away from windows.",
      "Prepare an emergency kit with water, food and torch.",
      "Plan a family meeting point outside the building.",
    ],
    during: [
      "Drop to your hands and knees to avoid being knocked over.",
      "Cover your head and neck under a sturdy table or desk.",
      "Hold on until the shaking stops—do not use lifts.",
      "If outside, move to an open area away from buildings, trees and poles.",
    ],
    after: [
      "Check yourself and others for injuries; call emergency services if needed.",
      "Do not re-enter damaged buildings until authorities say it is safe.",
      "Expect aftershocks and stay alert.",
      "Listen to official updates on radio/TV or verified apps.",
    ],
  },
  {
    id: "flood",
    icon: "🌊",
    name: "Flood",
    risk: "Low-lying and river-side areas",
    color: "#0ea5e9",
    before: [
      "Know if your home is in a flood-prone area.",
      "Store important documents in waterproof pouches.",
      "Keep sandbags or barriers ready if advised by authorities.",
      "Plan evacuation routes to higher ground.",
    ],
    during: [
      "Move immediately to higher ground—do not wait for water to rise.",
      "Never walk or drive through flood water; just 15 cm can knock you down.",
      "Switch off electricity and gas if safely possible.",
      "Follow official warnings and evacuation orders strictly.",
    ],
    after: [
      "Avoid standing water; it may be contaminated or hide open drains.",
      "Do not turn on electrical appliances until checked by a professional.",
      "Boil drinking water or use bottled water until supply is safe.",
      "Document damage for insurance or relief claims.",
    ],
  },
  {
    id: "fire",
    icon: "🔥",
    name: "Fire",
    risk: "Homes, offices and kitchens",
    color: "#ef4444",
    before: [
      "Install smoke alarms and test them monthly.",
      "Keep fire extinguishers accessible in kitchen and corridors.",
      "Learn how to use PASS: Pull, Aim, Squeeze, Sweep.",
      "Plan at least two escape routes from every room.",
    ],
    during: [
      "If clothes catch fire: Stop, Drop and Roll.",
      "Crawl low under smoke; cleaner air is near the floor.",
      "Use stairs—never use lifts during a fire.",
      "If trapped, seal gaps under doors and signal from a window.",
    ],
    after: [
      "Do not re-enter the building until fire services declare it safe.",
      "Get medical help for burns or smoke inhalation immediately.",
      "Report faulty wiring or gas leaks to authorities.",
      "Review what went wrong and update your home safety plan.",
    ],
  },
  {
    id: "cyclone",
    icon: "🌪️",
    name: "Cyclone / Storm",
    risk: "Coastal and high-wind regions",
    color: "#6366f1",
    before: [
      "Secure or bring indoors loose outdoor items (pots, boards, tools).",
      "Charge phones and power banks; keep battery-powered radio ready.",
      "Stock essentials for at least 48–72 hours.",
      "Know official shelters and evacuation routes.",
    ],
    during: [
      "Stay indoors, away from windows and glass doors.",
      "Move to a small interior room on the lowest floor.",
      "Do not go outside until authorities confirm the cyclone has passed.",
      "Avoid using wired electrical devices during lightning.",
    ],
    after: [
      "Stay away from fallen power lines and damaged structures.",
      "Do not drive through water-logged or debris-filled roads.",
      "Use messages instead of calls to reduce network load.",
      "Follow government advisories on relief and safe return.",
    ],
  },
];

function Guidelines() {
  const [activeId, setActiveId] = useState("earthquake");
  const active = GUIDELINES.find((g) => g.id === activeId) ?? GUIDELINES[0];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>📘 Disaster Safety Guidelines</h1>
          <p style={styles.subtitle}>
            Clear, step‑by‑step checklists for what to do <b>before</b>,{" "}
            <b>during</b> and <b>after</b> each type of disaster.
          </p>
        </div>
        <div style={styles.tag}>Always follow official local advisories first.</div>
      </div>

      <div style={styles.layout}>
        {/* Left column – disaster selector */}
        <div style={styles.leftColumn}>
          <h2 style={styles.sectionTitle}>Choose a scenario</h2>
          <div style={styles.list}>
            {GUIDELINES.map((item) => {
              const isActive = item.id === active.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  style={{
                    ...styles.disasterButton,
                    borderColor: isActive ? item.color : "#e2e8f0",
                    background: isActive ? `${item.color}15` : "white",
                  }}
                >
                  <span style={styles.disasterIcon}>{item.icon}</span>
                  <div style={styles.disasterText}>
                    <span style={styles.disasterName}>{item.name}</span>
                    <span style={styles.disasterRisk}>{item.risk}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column – step-by-step checklists */}
        <div style={styles.rightColumn}>
          <div style={styles.detailCard}>
            <div style={styles.detailHeader}>
              <div
                style={{
                  ...styles.detailIcon,
                  background: `${active.color}15`,
                  color: active.color,
                }}
              >
                {active.icon}
              </div>
              <div>
                <h2 style={styles.detailTitle}>{active.name} – Action Plan</h2>
                <p style={styles.detailSubtitle}>{active.risk}</p>
              </div>
            </div>

            <div style={styles.stepsGrid}>
              <GuidelineSection
                label="Before"
                color="#0ea5e9"
                items={active.before}
              />
              <GuidelineSection
                label="During"
                color="#f97316"
                items={active.during}
                highlight
              />
              <GuidelineSection
                label="After"
                color="#22c55e"
                items={active.after}
              />
            </div>
          </div>

          <div style={styles.infoStrip}>
            <div>
              <div style={styles.infoTitle}>Important Emergency Numbers (India)</div>
              <div style={styles.infoRow}>
                <span>🚨 All emergencies:</span>
                <strong>112</strong>
              </div>
              <div style={styles.infoRow}>
                <span>🔥 Fire:</span>
                <strong>101</strong>
              </div>
              <div style={styles.infoRow}>
                <span>🚑 Ambulance:</span>
                <strong>108</strong>
              </div>
            </div>
            <div style={styles.infoHint}>
              Save these in your phone as favourites and share them with family members.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineSection({ label, color, items, highlight }) {
  return (
    <div
      style={{
        ...styles.sectionCard,
        borderColor: highlight ? color : "#e2e8f0",
        boxShadow: highlight ? "0 8px 24px rgba(15,23,42,0.12)" : "none",
      }}
    >
      <div style={{ ...styles.sectionLabel, color }}>{label}</div>
      <ol style={styles.stepsList}>
        {items.map((step, idx) => (
          <li key={idx} style={styles.stepItem}>
            <span style={styles.stepBullet}>{idx + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Guidelines;

const styles = {
  page: {
    padding: "40px",
    background: "#f8fafc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "24px",
  },
  title: {
    fontSize: "32px",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "6px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#64748b",
    maxWidth: "640px",
  },
  tag: {
    fontSize: "12px",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#eff6ff",
    color: "#1d4ed8",
    fontWeight: 600,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 2fr)",
    gap: "24px",
    alignItems: "flex-start",
  },
  leftColumn: {
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 6px 20px rgba(15,23,42,0.08)",
    border: "1px solid #e2e8f0",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "10px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  disasterButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    padding: "10px 12px",
    background: "white",
    cursor: "pointer",
    textAlign: "left",
  },
  disasterIcon: {
    fontSize: "22px",
  },
  disasterText: {
    display: "flex",
    flexDirection: "column",
  },
  disasterName: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#0f172a",
  },
  disasterRisk: {
    fontSize: "12px",
    color: "#64748b",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  detailCard: {
    background: "white",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 8px 24px rgba(15,23,42,0.1)",
    border: "1px solid #e2e8f0",
  },
  detailHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  detailIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },
  detailTitle: {
    fontSize: "18px",
    fontWeight: 800,
    color: "#0f172a",
    margin: 0,
  },
  detailSubtitle: {
    fontSize: "13px",
    color: "#64748b",
    margin: 0,
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "14px",
    marginTop: "10px",
  },
  sectionCard: {
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    padding: "12px 12px 10px",
    background: "#f9fafb",
  },
  sectionLabel: {
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "6px",
  },
  stepsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontSize: "13px",
    color: "#374151",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  stepItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "6px",
  },
  stepBullet: {
    minWidth: "20px",
    height: "20px",
    borderRadius: "999px",
    background: "white",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 600,
    color: "#64748b",
    marginTop: "2px",
  },
  infoStrip: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    padding: "14px 18px",
    background: "#0f172a",
    borderRadius: "18px",
    color: "white",
    fontSize: "13px",
  },
  infoTitle: {
    fontWeight: 700,
    marginBottom: "4px",
  },
  infoRow: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  infoHint: {
    maxWidth: "260px",
    opacity: 0.9,
  },
};

