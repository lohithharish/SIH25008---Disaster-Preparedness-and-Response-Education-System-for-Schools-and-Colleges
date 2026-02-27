import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/authApi";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await resetPassword(token, password);
    setMsg(res.message);

    if (res.message === "Password reset successful") {
      setTimeout(() => navigate("/auth"), 2000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🔑 Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Reset Password</button>
        </form>

        {msg && <p className="success">{msg}</p>}
      </div>
    </div>
  );
}
