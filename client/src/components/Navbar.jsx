import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <span style={styles.logoIcon}>🛟</span>
        <h2 style={styles.logoText}>Disaster Preparedness</h2>
      </div>

      <div style={styles.links}>
        {token && (
          <>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>
            <Link style={styles.link} to="/guidelines">Guidelines</Link>
            <Link style={styles.link} to="/map">Map</Link>
            <Link style={styles.link} to="/modules">Modules</Link>
            <Link style={styles.link} to="/mockdrill">Mock Drill</Link>
            <Link style={styles.link} to="/quiz">Quiz</Link>
            <button style={styles.logoutBtn} onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background:
      "linear-gradient(90deg, rgba(15,23,42,0.96), rgba(30,64,175,0.96))",
    color: "white",
    padding: "14px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(148,163,184,0.3)",
    boxShadow: "0 12px 30px rgba(15,23,42,0.5)",
    backdropFilter: "blur(10px)",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoIcon: {
    fontSize: "22px",
  },
  logoText: {
    margin: 0,
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "0.02em",
  },
  links: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: 500,
    fontSize: "14px",
    border: "1px solid transparent",
    background: "rgba(15,23,42,0.4)",
  },
  logoutBtn: {
    background:
      "linear-gradient(135deg, rgba(248,113,113,1), rgba(220,38,38,1))",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    boxShadow: "0 10px 25px rgba(248,113,113,0.5)",
  },
};
