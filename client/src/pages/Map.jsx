import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker icons so they load correctly with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const SAFE_LOCATIONS = [
  {
    id: 1,
    type: "Safe Zone",
    name: "City Central Shelter",
    description: "Primary evacuation shelter with basic medical facilities.",
    coords: [12.9716, 77.5946],
    address: "MG Road, Central City",
    capacity: "500+ people",
    icon: "🏥",
    color: "#10b981",
  },
  {
    id: 2,
    type: "Safe Zone",
    name: "High School Ground Assembly Point",
    description: "Open ground for flood and earthquake assembly.",
    coords: [12.99, 77.6],
    address: "Govt. High School, East Block",
    capacity: "300+ people",
    icon: "🏫",
    color: "#3b82f6",
  },
  {
    id: 3,
    type: "Hospital",
    name: "City General Hospital",
    description: "24x7 emergency care with trauma unit.",
    coords: [12.965, 77.59],
    address: "Ring Road, North Sector",
    capacity: "Level-1 Trauma Center",
    icon: "🚑",
    color: "#ef4444",
  },
  {
    id: 4,
    type: "Recent Incident",
    name: "Flood-prone Low-lying Area",
    description:
      "Area reported for repeated water logging during heavy rain. Avoid during alerts.",
    coords: [12.96, 77.61],
    address: "River-side Colony",
    capacity: "Risk hotspot",
    icon: "🌊",
    color: "#f97316",
  },
];

function MapPage() {
  // Ensure Leaflet map has full viewport height on this page
  useEffect(() => {
    document.body.style.margin = "0";
    return () => {
      document.body.style.margin = "";
    };
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>🗺️ Disaster & Safe Zone Map</h1>
          <p style={styles.subtitle}>
            View nearby shelters, hospitals and risk-prone areas to plan your
            evacuation routes.
          </p>
        </div>
      </div>

      <div style={styles.layout}>
        {/* Left: Map */}
        <div style={styles.mapWrapper}>
          <MapContainer
            center={[12.9716, 77.5946]}
            zoom={12}
            style={styles.map}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {SAFE_LOCATIONS.map((loc) => (
              <Marker key={loc.id} position={loc.coords}>
                <Popup>
                  <div style={{ maxWidth: "220px" }}>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                    >
                      {loc.icon} {loc.name}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#6b7280",
                        marginBottom: 6,
                      }}
                    >
                      {loc.type}
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        margin: "4px 0",
                        color: "#4b5563",
                      }}
                    >
                      {loc.description}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        margin: "4px 0",
                        color: "#6b7280",
                      }}
                    >
                      📍 {loc.address}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        margin: "4px 0",
                        color: "#6b7280",
                      }}
                    >
                      📊 {loc.capacity}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Right: List / legend */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Nearby Locations</h2>
          <p style={styles.sidebarText}>
            These are sample locations. In a real deployment, this can connect
            to live government or local authority data.
          </p>

          <div style={styles.chipRow}>
            <span style={{ ...styles.chip, background: "#ecfdf3", color: "#166534" }}>
              🏥 Shelters & Hospitals
            </span>
            <span style={{ ...styles.chip, background: "#eff6ff", color: "#1d4ed8" }}>
              📍 Safe Assembly Points
            </span>
            <span style={{ ...styles.chip, background: "#fff7ed", color: "#c2410c" }}>
              ⚠️ Risk Hotspots
            </span>
          </div>

          <div style={styles.list}>
            {SAFE_LOCATIONS.map((loc) => (
              <div key={loc.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div
                    style={{
                      ...styles.iconCircle,
                      background: `${loc.color}15`,
                      color: loc.color,
                    }}
                  >
                    {loc.icon}
                  </div>
                  <div>
                    <div style={styles.cardTitle}>{loc.name}</div>
                    <div style={styles.cardType}>{loc.type}</div>
                  </div>
                </div>
                <div style={styles.cardBody}>
                  <p style={styles.cardDesc}>{loc.description}</p>
                  <p style={styles.cardMeta}>📍 {loc.address}</p>
                  <p style={styles.cardMeta}>📊 {loc.capacity}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.footerNote}>
            Tip: Use this map together with the{" "}
            <span style={{ fontWeight: 600 }}>Guidelines</span> and{" "}
            <span style={{ fontWeight: 600 }}>Mock Drills</span> sections to
            plan evacuation routes in advance.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPage;

const styles = {
  page: {
    minHeight: "calc(100vh - 70px)",
    padding: "32px",
    background: "#f8fafc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  },
  header: {
    marginBottom: "24px",
  },
  title: {
    fontSize: "32px",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "4px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#64748b",
    maxWidth: "640px",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.3fr)",
    gap: "24px",
    alignItems: "stretch",
  },
  mapWrapper: {
    background: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
    border: "1px solid #e2e8f0",
    minHeight: "480px",
  },
  map: {
    width: "100%",
    height: "100%",
    minHeight: "480px",
  },
  sidebar: {
    background: "white",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
    border: "1px solid #e2e8f0",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  sidebarTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#0f172a",
    margin: 0,
  },
  sidebarText: {
    fontSize: "14px",
    color: "#64748b",
    margin: 0,
  },
  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  chip: {
    fontSize: "12px",
    padding: "6px 10px",
    borderRadius: "999px",
    fontWeight: 600,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "4px",
    overflowY: "auto",
    maxHeight: "360px",
    paddingRight: "4px",
  },
  card: {
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    padding: "14px",
    background: "#f9fafb",
  },
  cardHeader: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "6px",
  },
  iconCircle: {
    width: "34px",
    height: "34px",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#0f172a",
  },
  cardType: {
    fontSize: "12px",
    color: "#6b7280",
  },
  cardBody: {
    fontSize: "13px",
    color: "#4b5563",
  },
  cardDesc: {
    margin: "4px 0",
  },
  cardMeta: {
    margin: "2px 0",
    fontSize: "12px",
    color: "#6b7280",
  },
  footerNote: {
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "4px",
  },
};

