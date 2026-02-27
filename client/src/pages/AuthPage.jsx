import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const payload = isLogin
        ? { email: form.email, password: form.password }
        : form;

      const res = await axios.post(url, payload);

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = (loginMode) => {
    setIsLogin(loginMode);
    setError("");
  };

  return (
    <div style={styles.outer}>
      <div style={styles.blurCircleTop} />
      <div style={styles.blurCircleBottom} />

      <div style={styles.container}>
        <div style={styles.leftPanel}>
          <div style={styles.badge}>🛟 Your Safety Companion</div>
          <h1 style={styles.title}>Disaster Preparedness Hub</h1>
          <p style={styles.subtitle}>
            Learn, practice and stay ready for any emergency. Track your
            progress, join mock drills and improve your resilience.
          </p>

          <ul style={styles.benefits}>
            <li>✔ Personalized dashboard with your learning journey</li>
            <li>✔ Interactive modules and real-life scenarios</li>
            <li>✔ Quizzes, maps and emergency checklists</li>
          </ul>
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.cardHeader}>
            <button
              type="button"
              onClick={() => toggleMode(true)}
              style={{
                ...styles.tabButton,
                ...(isLogin ? styles.tabButtonActive : {}),
              }}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => toggleMode(false)}
              style={{
                ...styles.tabButton,
                ...(!isLogin ? styles.tabButtonActive : {}),
              }}
            >
              Sign up
            </button>
          </div>

          <div style={styles.cardBody}>
            <h2 style={styles.formTitle}>
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>
            <p style={styles.formSubtitle}>
              {isLogin
                ? "Access your dashboard, drills and learning modules."
                : "Join the community preparing for disasters the smart way."}
            </p>

            <form style={styles.form} onSubmit={handleSubmit}>
              {!isLogin && (
                <div style={styles.field}>
                  <label style={styles.label} htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              )}

              <div style={styles.field}>
                <label style={styles.label} htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label} htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter a secure password"
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {error && <p style={styles.error}>{error}</p>}

              <button
                type="submit"
                style={styles.primaryButton}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? isLogin
                    ? "Logging in..."
                    : "Creating account..."
                  : isLogin
                  ? "Login"
                  : "Create account"}
              </button>

              <p style={styles.switchText}>
                {isLogin ? "New to the platform? " : "Already registered? "}
                <button
                  type="button"
                  onClick={() => toggleMode(!isLogin)}
                  style={styles.inlineSwitch}
                >
                  {isLogin ? "Create an account" : "Login instead"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outer: {
    minHeight: "100vh",
    margin: 0,
    padding: "32px 16px",
    background:
      "radial-gradient(circle at top left, #4f46e5 0, #0f172a 45%, #020617 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
  },
  blurCircleTop: {
    position: "absolute",
    top: "-120px",
    right: "-80px",
    width: "320px",
    height: "320px",
    background:
      "radial-gradient(circle, rgba(94, 234, 212, 0.3) 0, transparent 70%)",
    filter: "blur(2px)",
    zIndex: 0,
  },
  blurCircleBottom: {
    position: "absolute",
    bottom: "-160px",
    left: "-120px",
    width: "420px",
    height: "420px",
    background:
      "radial-gradient(circle, rgba(129, 140, 248, 0.25) 0, transparent 70%)",
    filter: "blur(3px)",
    zIndex: 0,
  },
  container: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
    gap: "40px",
    maxWidth: "1100px",
    width: "100%",
    background: "rgba(15, 23, 42, 0.85)",
    borderRadius: "28px",
    padding: "32px",
    boxShadow: "0 32px 80px rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    backdropFilter: "blur(18px)",
  },
  leftPanel: {
    color: "white",
    padding: "16px 16px 16px 8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 16px",
    borderRadius: "999px",
    background: "rgba(15, 118, 110, 0.2)",
    color: "#a5f3fc",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "18px",
  },
  title: {
    fontSize: "40px",
    lineHeight: 1.1,
    fontWeight: 800,
    margin: "0 0 16px",
  },
  subtitle: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(226, 232, 240, 0.9)",
    maxWidth: "460px",
    marginBottom: "24px",
  },
  benefits: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: "8px",
    color: "rgba(226, 232, 240, 0.95)",
    fontSize: "14px",
  },
  rightPanel: {
    background: "rgba(15, 23, 42, 0.96)",
    borderRadius: "22px",
    padding: "24px 26px 26px",
    border: "1px solid rgba(148, 163, 184, 0.4)",
    boxShadow: "0 20px 40px rgba(15, 23, 42, 0.75)",
  },
  cardHeader: {
    display: "flex",
    background: "rgba(15, 23, 42, 0.9)",
    borderRadius: "999px",
    padding: "4px",
    marginBottom: "20px",
    border: "1px solid rgba(51, 65, 85, 0.8)",
  },
  tabButton: {
    flex: 1,
    borderRadius: "999px",
    border: "none",
    background: "transparent",
    color: "#9ca3af",
    padding: "9px 0",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  tabButtonActive: {
    background: "linear-gradient(135deg, #4f46e5, #22c55e)",
    color: "white",
    boxShadow: "0 10px 25px rgba(79, 70, 229, 0.6)",
  },
  cardBody: {
    color: "white",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 4px",
  },
  formSubtitle: {
    fontSize: "13px",
    color: "#9ca3af",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    color: "#e5e7eb",
    fontWeight: 500,
  },
  input: {
    padding: "11px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(55, 65, 81, 0.9)",
    background: "rgba(15, 23, 42, 0.95)",
    color: "#e5e7eb",
    fontSize: "14px",
    outline: "none",
  },
  error: {
    margin: "4px 0 0",
    fontSize: "13px",
    color: "#f97373",
  },
  primaryButton: {
    marginTop: "6px",
    padding: "11px 14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #4f46e5, #22c55e)",
    color: "white",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },
  switchText: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#9ca3af",
    textAlign: "center",
  },
  inlineSwitch: {
    border: "none",
    background: "none",
    padding: 0,
    margin: 0,
    color: "#a5b4fc",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
  },
};
