import { useState } from "react";

const MODULES = [
  {
    id: 1,
    title: "Earthquake Preparedness",
    level: "Beginner",
    duration: "10–15 min",
    video: "https://www.youtube.com/embed/BLEPakj1YTY",
    focus: "Protect yourself during shaking and safely evacuate.",
    bullets: [
      "Understand the Drop, Cover, Hold technique.",
      "Identify safe and unsafe spots at home/school.",
      "Create a 3–day family emergency kit.",
    ],
    next: "Flood Safety Basics",
  },
  {
    id: 2,
    title: "Flood Safety Basics",
    level: "Beginner",
    duration: "10–15 min",
    video: "https://www.youtube.com/embed/43M5mZuzHF8",
    focus: "Recognise warning signs and respond early.",
    bullets: [
      "Learn what flood warnings and colour codes mean.",
      "Plan routes to higher ground and safe shelters.",
      "Protect important documents and electronics.",
    ],
    next: "Urban Fire Emergency",
  },
  {
    id: 3,
    title: "Urban Fire Emergency",
    level: "Intermediate",
    duration: "12–18 min",
    video: "https://www.youtube.com/embed/1fQkVqno-uI",
    focus: "React quickly to fires at home or work.",
    bullets: [
      "Understand classes of fire and extinguisher types.",
      "Design a two‑exit escape plan for each room.",
      "Know when to evacuate vs. when to attempt to control.",
    ],
    next: "Cyclone & Storm Awareness",
  },
  {
    id: 4,
    title: "Cyclone & Storm Awareness",
    level: "Intermediate",
    duration: "10–15 min",
    video: "https://www.youtube.com/embed/3m8O7n3Jj1I",
    focus: "Prepare before landfall and stay safe during impact.",
    bullets: [
      "Build a cyclone‑ready kit for 72 hours.",
      "Secure your home and clear loose objects.",
      "Use official weather and alert sources correctly.",
    ],
    next: "First Aid Essentials (coming soon)",
  },
];

function Modules() {
  const [selectedId, setSelectedId] = useState(1);
  const selected =
    MODULES.find((mod) => mod.id === selectedId) ?? MODULES[0];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>🎓 Learning Modules</h1>
          <p style={styles.subtitle}>
            Follow a guided learning path to build your disaster preparedness
            skills, one focused module at a time.
          </p>
        </div>
        <div style={styles.badge}>Approx. 45–60 minutes for all modules</div>
      </div>

      <div style={styles.layout}>
        {/* Left – module list / curriculum */}
        <div style={styles.leftColumn}>
          <h2 style={styles.sectionTitle}>Your learning path</h2>
          <div style={styles.moduleList}>
            {MODULES.map((mod, index) => {
              const isActive = mod.id === selected.id;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setSelectedId(mod.id)}
                  style={{
                    ...styles.moduleItem,
                    borderColor: isActive ? "#4f46e5" : "#e2e8f0",
                    background: isActive ? "#eef2ff" : "white",
                  }}
                >
                  <div style={styles.moduleNumber}>{index + 1}</div>
                  <div style={styles.moduleText}>
                    <div style={styles.moduleTitle}>{mod.title}</div>
                    <div style={styles.moduleMeta}>
                      <span>{mod.level}</span> • <span>{mod.duration}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right – selected module detail */}
        <div style={styles.rightColumn}>
          <div style={styles.detailCard}>
            <div style={styles.detailHeader}>
              <div style={styles.detailTag}>{selected.level}</div>
              <span style={styles.detailDuration}>{selected.duration}</span>
            </div>
            <h2 style={styles.detailTitle}>{selected.title}</h2>
            <p style={styles.detailFocus}>{selected.focus}</p>

            <div style={styles.detailContent}>
              <div style={styles.videoWrapper}>
                <div style={styles.videoFrame}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={selected.video}
                    title={selected.title}
                    allowFullScreen
                    style={{ border: 0, borderRadius: "16px" }}
                  ></iframe>
                </div>
              </div>
              <div style={styles.takeaways}>
                <h3 style={styles.takeawaysTitle}>What you will learn</h3>
                <ul style={styles.takeawaysList}>
                  {selected.bullets.map((item, idx) => (
                    <li key={idx} style={styles.takeawayItem}>
                      <span style={styles.bulletDot}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={styles.nextHint}>
                  <span style={{ fontWeight: 600 }}>Suggested next:</span>{" "}
                  {selected.next}
                </div>
              </div>
            </div>
          </div>

          <div style={styles.tipStrip}>
            <span style={styles.tipLabel}>Tip</span>
            <span>
              After finishing a module, test yourself in the{" "}
              <strong>Quiz</strong> and track progress on the{" "}
              <strong>Dashboard</strong>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modules;

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
  badge: {
    alignSelf: "center",
    fontSize: "12px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "#ecfeff",
    color: "#0891b2",
    fontWeight: 600,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 2fr)",
    gap: "24px",
    alignItems: "flex-start",
  },
  leftColumn: {
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "12px",
  },
  moduleList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  moduleItem: {
    width: "100%",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    padding: "10px 12px",
    background: "white",
    cursor: "pointer",
    textAlign: "left",
  },
  moduleNumber: {
    width: "26px",
    height: "26px",
    borderRadius: "999px",
    background: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 700,
    color: "#111827",
  },
  moduleText: {
    display: "flex",
    flexDirection: "column",
  },
  moduleTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#0f172a",
  },
  moduleMeta: {
    fontSize: "12px",
    color: "#6b7280",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  detailCard: {
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
  },
  detailHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  detailTag: {
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    background: "#eef2ff",
    color: "#4f46e5",
    fontWeight: 600,
  },
  detailDuration: {
    fontSize: "12px",
    color: "#6b7280",
  },
  detailTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#0f172a",
    margin: "4px 0",
  },
  detailFocus: {
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "12px",
  },
  detailContent: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1.5fr)",
    gap: "16px",
    alignItems: "flex-start",
  },
  videoWrapper: {
    width: "100%",
  },
  videoFrame: {
    width: "100%",
    aspectRatio: "16 / 9",
    background: "#000",
    borderRadius: "16px",
    overflow: "hidden",
  },
  takeaways: {
    fontSize: "13px",
    color: "#374151",
  },
  takeawaysTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "6px",
  },
  takeawaysList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  takeawayItem: {
    display: "flex",
    gap: "6px",
  },
  bulletDot: {
    color: "#4f46e5",
    fontWeight: 700,
  },
  nextHint: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#6b7280",
  },
  tipStrip: {
    padding: "10px 14px",
    borderRadius: "14px",
    background: "#ecfdf5",
    color: "#166534",
    fontSize: "12px",
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  tipLabel: {
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "11px",
  },
};

