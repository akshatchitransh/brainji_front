import { useRef, useState } from "react"
import { Backend_URI } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function signin() {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    try {
      setLoading(true)

      const response = await axios.post(`${Backend_URI}/api/auth/signin`, {
        username,
        password,
      })

      const jwt = response.data.token
      localStorage.setItem("token", jwt)

      navigate("/dashboard")
    } catch (err) {
      alert("Signin failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a12]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1f] via-[#0a0a12] to-[#0d0d1f]" />

      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          animation: "blob1 14s ease-in-out infinite alternate",
        }}
      />

      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animation: "blob2 18s ease-in-out infinite alternate",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          animation: "blob3 22s ease-in-out infinite alternate",
        }}
      />

      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

        @keyframes blob1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(80px, 60px) scale(1.15); }
        }
        @keyframes blob2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-60px, -80px) scale(1.1); }
        }
        @keyframes blob3 {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .signin-card {
          font-family: 'Sora', system-ui, sans-serif;
          animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
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

        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px) saturate(160%);
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
          outline: none;
        }
      `}</style>

      {/* Card */}
      <div className="signin-card glass-card relative w-full max-w-[420px] mx-4 rounded-3xl overflow-hidden">

        <div className="flex justify-center pt-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            ⚡
          </div>
        </div>

        <div className="text-center px-8 pt-6 pb-2">
          <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
          <p className="mt-1.5 text-sm text-slate-400">
            Sign in to continue
          </p>
        </div>

        <div className="px-8 pt-6 pb-10 space-y-5">

          <input
            ref={usernameRef}
            placeholder="Username"
            className="styled-input"
          />

          <input
            ref={passwordRef}
            placeholder="Password"
            type="password"
            className="styled-input"
          />

          <button
            onClick={signin}
            disabled={loading}
            className={`shimmer-btn w-full py-3 rounded-xl text-white flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.2"/>
                  <path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="3"/>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>

        </div>
      </div>
    </div>
  )
}