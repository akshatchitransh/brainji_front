import { useRef } from "react"
import { Backend_URI } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()

  async function signup() {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    console.log("username", username)
    await axios.post(`${Backend_URI}/api/auth/signup`, {
      username,
      password,
    })
    alert("signedup")
    navigate("/signin")
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a12]">

      {/* ── Layered gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1f] via-[#0a0a12] to-[#0d0d1f]" />

      {/* Animated blob 1 – violet */}
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animation: "blob1 16s ease-in-out infinite alternate",
        }}
      />

      {/* Animated blob 2 – indigo */}
      <div
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          animation: "blob2 20s ease-in-out infinite alternate",
        }}
      />

      {/* Animated blob 3 – fuchsia accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
          animation: "blob3 24s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Keyframes + font ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

        @keyframes blob1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-80px, 70px) scale(1.15); }
        }
        @keyframes blob2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(70px, -80px) scale(1.1); }
        }
        @keyframes blob3 {
          0%   { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.25); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          70%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        .signup-card {
          font-family: 'Sora', system-ui, sans-serif;
          animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            0 0 0 1px rgba(139, 92, 246, 0.08),
            0 32px 64px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .styled-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 0.9rem;
          color: #f1f5f9;
          font-family: 'Sora', system-ui, sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          caret-color: #a78bfa;
        }
        .styled-input::placeholder { color: rgba(148,163,184,0.4); }
        .styled-input:focus {
          border-color: rgba(139,92,246,0.6);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.12), 0 0 20px rgba(139,92,246,0.1);
        }
        .shimmer-btn {
          background-size: 200% auto;
          background-image: linear-gradient(
            110deg,
            #7c3aed 0%,
            #8b5cf6 40%,
            #a78bfa 50%,
            #8b5cf6 60%,
            #7c3aed 100%
          );
          transition: all 0.3s ease;
        }
        .shimmer-btn:hover {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.45);
        }
        .shimmer-btn:active { transform: translateY(0); }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
        }

        .strength-bar {
          height: 3px;
          border-radius: 999px;
          transition: width 0.4s ease, background 0.4s ease;
        }
      `}</style>

      {/* ── Card ── */}
      <div className="signup-card glass-card relative w-full max-w-[420px] mx-4 rounded-3xl overflow-hidden">

        {/* Top accent bar */}
        <div
          className="h-px w-full"
          style={{
            background: "linear-gradient(to right, transparent, #8b5cf6, #6366f1, transparent)",
          }}
        />

        {/* Logo mark */}
        <div className="flex justify-center pt-10">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div className="absolute inset-0 rounded-2xl ring-2 ring-violet-400/20 ring-offset-2 ring-offset-transparent" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center px-8 pt-6 pb-2">
          <h1
            className="text-2xl font-semibold tracking-tight text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-slate-400">
            Join thousands of users already on board
          </p>
        </div>

        {/* Perks strip */}
        <div className="mx-8 mt-5 rounded-xl px-4 py-3 flex items-center justify-between"
          style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.12)" }}>
          {[
            { icon: "⚡", label: "Fast setup" },
            { icon: "🔒", label: "Secure" },
            { icon: "✦", label: "Free forever" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="text-sm">{icon}</span>
              <span className="text-xs text-slate-400 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="px-8 pt-6 pb-10 space-y-5">

          {/* Username */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-slate-400 tracking-wide uppercase">
              Username
            </label>
            <input
              ref={usernameRef}
              placeholder="Choose a username"
              className="styled-input"
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-slate-400 tracking-wide uppercase">
              Password
            </label>
            <input
              ref={passwordRef}
              placeholder="Create a strong password"
              type="password"
              className="styled-input"
              autoComplete="new-password"
            />
            {/* Password strength indicator */}
            <div className="flex gap-1.5 pt-0.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="strength-bar flex-1"
                  style={{ background: i < 1 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)" }}
                />
              ))}
            </div>
            <p className="text-xs text-slate-600">Use 8+ characters with a mix of letters and numbers</p>
          </div>

          {/* Sign up button */}
          <div className="pt-1">
            <button
              onClick={signup}
              className="shimmer-btn w-full py-3 px-6 rounded-xl text-sm font-semibold text-white tracking-wide"
              style={{ fontFamily: "'Sora', system-ui, sans-serif" }}
            >
              Create account
            </button>
          </div>

          {/* Terms note */}
          <p className="text-xs text-center text-slate-600 leading-relaxed">
            By creating an account you agree to our{" "}
            <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors duration-200 underline underline-offset-2">Terms</a>
            {" "}&{" "}
            <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors duration-200 underline underline-offset-2">Privacy Policy</a>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="divider-line" />
            <span className="text-xs text-slate-500">Already have an account?</span>
            <div className="divider-line" />
          </div>

          {/* Sign in link */}
          <div className="text-center">
            <a
              href="/signin"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-violet-300 transition-colors duration-200 group"
            >
              Sign in instead
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)",
          }}
        />
      </div>
    </div>
  )
}
