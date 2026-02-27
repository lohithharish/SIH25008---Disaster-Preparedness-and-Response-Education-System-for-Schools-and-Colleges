import { useState } from "react";
import { forgotPassword } from "../api/authApi";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await forgotPassword(email);
    setMsg(res.message);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🔐 Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button>Send Reset Link</button>
        </form>

        {msg && <p className="success">{msg}</p>}

        <Link to="/auth">⬅ Back to Login</Link>
      </div>
    </div>
  );
}
