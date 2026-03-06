
import { useRef } from "react"
import { Backend_URI } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    console.log("username", username)
    const response = await axios.post(`${Backend_URI}/api/auth/signin`, {
      username,
      password,
    })
    alert("signedin")
    const jwt = response.data.token;
    console.log(response)
    localStorage.setItem("token", jwt)
    navigate("/dashboard")
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a12]">

      {/* ── Layered gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1f] via-[#0a0a12] to-[#0d0d1f]" />

      {/* Animated blob 1 – indigo */}
      <div
        className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          animation: "blob1 14s ease-in-out infinite alternate",
        }}
      />

      {/* Animated blob 2 – violet */}
      <div
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animation: "blob2 18s ease-in-out infinite alternate",
        }}
      />

      {/* Animated blob 3 – cyan accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          animation: "blob3 22s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── CSS keyframes injected inline ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

        @keyframes blob1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(80px, 60px) scale(1.15); }
        }
        @keyframes blob2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-60px, -80px) scale(1.1); }
        }
        @keyframes blob3 {
          0%   { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .signin-card {
          font-family: 'Sora', system-ui, sans-serif;
          animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .glow-input:focus-within {
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.15);
        }

        .shimmer-btn {
          background-size: 200% auto;
          background-image: linear-gradient(
            110deg,
            #6366f1 0%,
            #818cf8 40%,
            #a5b4fc 50%,
            #818cf8 60%,
            #6366f1 100%
          );
          transition: all 0.3s ease;
        }
        .shimmer-btn:hover {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.45);
        }
        .shimmer-btn:active {
          transform: translateY(0);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            0 0 0 1px rgba(99, 102, 241, 0.08),
            0 32px 64px rgba(0, 0, 0, 0.5),
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
          caret-color: #818cf8;
        }
        .styled-input::placeholder { color: rgba(148,163,184,0.4); }
        .styled-input:focus {
          border-color: rgba(99,102,241,0.6);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12), 0 0 20px rgba(99,102,241,0.1);
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
        }
      `}</style>

      {/* ── Card ── */}
      <div className="signin-card glass-card relative w-full max-w-[420px] mx-4 rounded-3xl overflow-hidden">

        {/* Top accent bar */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, #6366f1, #8b5cf6, transparent)",
          }}
        />

        {/* Logo mark */}
        <div className="flex justify-center pt-10">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-indigo-400/20 ring-offset-2 ring-offset-transparent" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center px-8 pt-6 pb-2">
          <h1
            className="text-2xl font-semibold tracking-tight text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-slate-400">
            Sign in to continue to your workspace
          </p>
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
              placeholder="Enter your username"
              className="styled-input"
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-slate-400 tracking-wide uppercase">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>
            <input
              ref={passwordRef}
              placeholder="Enter your password"
              type="password"
              className="styled-input"
              autoComplete="current-password"
            />
          </div>

          {/* Sign in button */}
          <div className="pt-1">
            <button
              onClick={signin}
              className="shimmer-btn w-full py-3 px-6 rounded-xl text-sm font-semibold text-white tracking-wide"
              style={{ fontFamily: "'Sora', system-ui, sans-serif" }}
            >
              Sign in
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 py-1">
            <div className="divider-line" />
            <span className="text-xs text-slate-500">New here?</span>
            <div className="divider-line" />
          </div>

          {/* Sign up link */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors duration-200 group"
            >
              Create an account
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom subtle gradient fill */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)",
          }}
        />
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 left-0 right-0 text-center text-xs text-slate-600"
        style={{ fontFamily: "'Sora', system-ui, sans-serif" }}>
        By signing in you agree to our{" "}
        <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 underline underline-offset-2">
          Terms
        </a>{" "}
        &{" "}
        <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 underline underline-offset-2">
          Privacy Policy
        </a>
      </p>
    </div>
  )
}
