import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin } from "../services/adminService";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  async function onLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await loginAdmin(email.trim(), password);
      nav("/");
    } catch (e) {
      setToast(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full app-shell grid place-items-center">
      <div className="card w-full max-w-md p-6 bg-white/90 backdrop-blur-sm shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-vitaBlue-800">
          VitaGita Admin Login
        </h2>

        {toast && (
          <div className="alert alert-warning mb-3">
            <span>{toast}</span>
          </div>
        )}

        <form onSubmit={onLogin} className="space-y-3">
          <input
            className="input input-bordered w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input input-bordered w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn-gold w-full" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* LEGAL LINKS */}
        <div className="mt-6 text-center text-sm text-gray-600">
          By continuing, you agree to our{" "}
          <Link
            to="/terms-and-conditions"
            className="text-vitaBlue-700 hover:underline"
            target="_blank"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            className="text-vitaBlue-700 hover:underline"
            target="_blank"
          >
            Privacy Policy
          </Link>.
        </div>
      </div>
    </div>
  );
}
