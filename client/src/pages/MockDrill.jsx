import { useState } from "react";

const DRILLS = [
  {
    id: 1,
    type: "Earthquake Drill",
    level: "Beginner",
    duration: "10 min",
    title: "Classroom Earthquake Drill (India)",
    video: "https://www.youtube.com/embed/7v7kq6n0d0k",
    desc: "Students practice Drop, Cover, Hold and safe evacuation from classrooms.",
    steps: [
      "Explain the earthquake alarm and signal to all participants.",
      "On signal, everyone immediately performs Drop, Cover, Hold under desks.",
      "After 60 seconds, calmly evacuate using pre‑marked escape routes.",
      "Assemble in the open ground and take attendance.",
    ],
    checklist: [
      "Alarm/whistle available and tested.",
      "Exit routes clear of obstacles.",
      "Assembly point clearly marked.",
      "First‑aid kit available at assembly point.",
    ],
  },
  {
    id: 2,
    type: "Fire Drill",
    level: "Intermediate",
    duration: "15–20 min",
    title: "Office Building Fire Evacuation",
    video: "https://www.youtube.com/embed/h7m7n5d9y9g",
    desc: "Employees practice evacuation and safe assembly during a simulated fire.",
    steps: [
      "Sound the fire alarm and announce the drill clearly.",
      "Guide participants to use stairs only—no lifts.",
      "Close doors behind you without locking them.",
      "Assemble at the designated safe area; verify head‑count.",
    ],
    checklist: [
      "Fire extinguishers accessible and visible.",
      "Emergency lighting and signage working.",
      "Stairways free of storage and obstacles.",
      "Roll‑call list available with drill coordinator.",
    ],
  },
  {
    id: 3,
    type: "School Evacuation",
    level: "Beginner",
    duration: "10–15 min",
    title: "School Multi‑Hazard Evacuation Drill",
    video: "https://www.youtube.com/embed/x0CqS3Z7k4k",
    desc: "Teachers and students practice evacuation for any sudden emergency.",
    steps: [
      "Brief teachers and students about the drill objective.",
      "On signal, leave classrooms in a single line without running.",
      "Keep right on stairways and corridors, holding hand‑rails.",
      "Assemble by class at the ground and report attendance.",
    ],
    checklist: [
      "Evacuation map displayed in each classroom.",
      "Buddy system for younger or special‑needs students.",
      "Whistle/megaphone for coordination at assembly ground.",
      "Parent communication plan in place.",
    ],
  },
  {
    id: 4,
    type: "Flood Rescue",
    level: "Advanced",
    duration: "20+ min",
    title: "NDRF Flood Rescue Demonstration",
    video: "https://www.youtube.com/embed/1k4mJ9X2l7M",
    desc: "Professional rescue teams show safe boat operations and victim handling.",
    steps: [
      "Demonstrate correct use of life jackets and safety ropes.",
      "Show safe boarding and de‑boarding from rescue boats.",
      "Explain communication between field team and control room.",
      "Practice victim transfer to ambulances or medical posts.",
    ],
    checklist: [
      "Life jackets available for all participants.",
      "Rescue area cordoned off from public.",
      "Medical team on‑site or on standby.",
      "Communication devices (wireless, mobiles) tested.",
    ],
  },
];

function MockDrill() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = DRILLS.find((d) => d.id === selectedId) ?? DRILLS[0];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>🚨 Mock Drill Training</h1>
          <p style={styles.subtitle}>
            Use real‑world drill scenarios to practise your response plan with
            clear steps and checklists.
          </p>
        </div>
        <div style={styles.pill}>Recommended: run at least 1 drill every quarter</div>
      </div>

      <div style={styles.layout}>
        {/* Left – drill scenarios list */}
        <div style={styles.leftColumn}>
          <h2 style={styles.sectionTitle}>Choose a drill</h2>
          <div style={styles.drillList}>
            {DRILLS.map((drill) => {
              const isActive = drill.id === selected.id;
              return (
                <button
                  key={drill.id}
                  type="button"
                  onClick={() => setSelectedId(drill.id)}
                  style={{
                    ...styles.drillItem,
                    borderColor: isActive ? "#f97316" : "#e2e8f0",
                    background: isActive ? "#fff7ed" : "white",
                  }}
                >
                  <div style={styles.drillBadge}>{drill.type}</div>
                  <div style={styles.drillText}>
                    <div style={styles.drillTitle}>{drill.title}</div>
                    <div style={styles.drillMeta}>
                      <span>{drill.level}</span> • <span>{drill.duration}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right – active drill detail */}
        <div style={styles.rightColumn}>
          <div style={styles.detailCard}>
            <p style={styles.detailType}>{selected.type}</p>
            <h2 style={styles.detailTitle}>{selected.title}</h2>
            <p style={styles.detailDesc}>{selected.desc}</p>

            <div style={styles.detailGrid}>
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
                <p style={styles.videoHint}>
                  Use this video as a demonstration and walk your team through
                  the same steps in your own building or area.
                </p>
              </div>

              <div style={styles.checklists}>
                <div style={styles.checklistBlock}>
                  <h3 style={styles.checklistTitle}>Drill sequence</h3>
                  <ol style={styles.stepsList}>
                    {selected.steps.map((step, idx) => (
                      <li key={idx} style={styles.stepItem}>
                        <span style={styles.stepNumber}>{idx + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div style={styles.checklistBlock}>
                  <h3 style={styles.checklistTitle}>Readiness checklist</h3>
                  <ul style={styles.todoList}>
                    {selected.checklist.map((item, idx) => (
                      <li key={idx} style={styles.todoItem}>
                        <span style={styles.checkbox}>▢</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.footerStrip}>
            <span style={styles.footerLabel}>Safety note</span>
            <span>
              Always inform participants and local authorities in advance when
              running large drills to avoid panic and ensure proper support.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockDrill;

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
  pill: {
    alignSelf: "center",
    fontSize: "12px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "#fef3c7",
    color: "#b45309",
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
  drillList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  drillItem: {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    padding: "10px 12px",
    background: "white",
    cursor: "pointer",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  drillBadge: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#c2410c",
  },
  drillText: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  drillTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#0f172a",
  },
  drillMeta: {
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
  detailType: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#f97316",
    marginBottom: "4px",
  },
  detailTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#0f172a",
    margin: "0 0 4px",
  },
  detailDesc: {
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "12px",
  },
  detailGrid: {
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
    borderRadius: "16px",
    overflow: "hidden",
    background: "#000",
  },
  videoHint: {
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "6px",
  },
  checklists: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "13px",
    color: "#374151",
  },
  checklistBlock: {
    background: "#f9fafb",
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    padding: "10px 12px",
  },
  checklistTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "6px",
  },
  stepsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  stepItem: {
    display: "flex",
    gap: "6px",
  },
  stepNumber: {
    minWidth: "20px",
    height: "20px",
    borderRadius: "999px",
    background: "white",
    border: "1px solid #fed7aa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 700,
    color: "#c2410c",
    marginTop: "1px",
  },
  todoList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  todoItem: {
    display: "flex",
    gap: "6px",
  },
  checkbox: {
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "1px",
  },
  footerStrip: {
    padding: "10px 14px",
    borderRadius: "14px",
    background: "#fef2f2",
    color: "#b91c1c",
    fontSize: "12px",
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  footerLabel: {
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "11px",
  },
};

