import { useNavigate } from "react-router-dom"

export const Homepage = () => {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .home-root {
          font-family: 'Sora', system-ui, sans-serif;
          background: #07070f;
          color: #f1f5f9;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Noise texture overlay ── */
        .home-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── Fixed blobs ── */
        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Dot grid ── */
        .dot-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        /* ── Navbar ── */
        @keyframes navIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 48px;
          background: rgba(7,7,15,0.7);
          backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          animation: navIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .nav-logo-icon {
          width: 32px; height: 32px;
          border-radius: 9px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
        }
        .nav-logo-text {
          font-size: 1rem;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(148,163,184,0.7);
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          transition: all 0.15s ease;
          cursor: pointer;
          background: none;
          border: none;
        }
        .nav-link:hover { color: #f1f5f9; background: rgba(255,255,255,0.05); }
        .nav-cta {
          font-size: 0.82rem;
          font-weight: 600;
          color: white;
          padding: 8px 20px;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 4px 16px rgba(99,102,241,0.35);
          transition: all 0.2s ease;
          font-family: 'Sora', system-ui, sans-serif;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.5);
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 24px rgba(99,102,241,0.3); }
          50%       { box-shadow: 0 0 48px rgba(99,102,241,0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blob1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(60px, 80px) scale(1.1); }
        }
        @keyframes blob2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-80px,-60px) scale(1.15); }
        }
        @keyframes blob3 {
          0%   { transform: translate(-50%,-50%) scale(1); }
          100% { transform: translate(-50%,-50%) scale(1.2); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.25);
          font-size: 0.72rem;
          font-weight: 600;
          color: #a5b4fc;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: fadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #818cf8;
          animation: pulse-glow 2s infinite;
        }

        .hero-headline {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #f8fafc;
          max-width: 800px;
          margin-bottom: 10px;
          animation: fadeUp 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hero-headline em {
          font-style: italic;
          background: linear-gradient(135deg, #818cf8, #c084fc, #818cf8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: rgba(148,163,184,0.75);
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 44px;
          font-weight: 400;
          animation: fadeUp 0.7s 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.7s 0.45s cubic-bezier(0.22,1,0.36,1) both;
        }
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 13px;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          color: white;
          border: none;
          cursor: pointer;
          background-size: 200% auto;
          background-image: linear-gradient(110deg, #6366f1 0%, #818cf8 40%, #a5b4fc 50%, #818cf8 60%, #6366f1 100%);
          box-shadow: 0 4px 20px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: all 0.25s ease;
        }
        .btn-hero-primary:hover {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.5);
        }
        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 13px;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: 'Sora', system-ui, sans-serif;
          color: #cbd5e1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-hero-secondary:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(139,92,246,0.35);
          color: #f1f5f9;
          transform: translateY(-1px);
        }

        /* ── Hero preview mockup ── */
        .hero-preview {
          position: relative;
          margin-top: 64px;
          width: 100%;
          max-width: 860px;
          animation: fadeUp 0.8s 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .preview-glow {
          position: absolute;
          inset: -30px;
          background: radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .preview-window {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.08),
            0 40px 80px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.06);
          animation: float 6s ease-in-out infinite;
        }
        .preview-titlebar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .preview-dot { width: 10px; height: 10px; border-radius: 50%; }
        .preview-bar {
          flex: 1;
          height: 7px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          margin: 0 12px;
        }
        .preview-body {
          display: flex;
          gap: 0;
          height: 220px;
        }
        .preview-sidebar {
          width: 160px;
          flex-shrink: 0;
          border-right: 1px solid rgba(255,255,255,0.05);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .preview-nav-item {
          height: 28px;
          border-radius: 7px;
          background: rgba(255,255,255,0.04);
        }
        .preview-nav-item.active {
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.2);
        }
        .preview-content {
          flex: 1;
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .preview-card {
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          overflow: hidden;
          flex-shrink: 0;
        }
        .preview-card-header {
          padding: 10px 12px 8px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .preview-badge {
          width: 52px; height: 14px;
          border-radius: 999px;
        }
        .preview-title-line {
          height: 8px; border-radius: 4px;
          background: rgba(255,255,255,0.1);
        }
        .preview-embed {
          margin: 0 10px 10px;
          border-radius: 7px;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Features section ── */
        .section {
          position: relative;
          z-index: 1;
          padding: 100px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          color: #818cf8;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
          text-align: center;
        }
        .section-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          color: #f8fafc;
          text-align: center;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .section-sub {
          font-size: 0.95rem;
          color: rgba(148,163,184,0.6);
          text-align: center;
          max-width: 480px;
          margin: 0 auto 60px;
          line-height: 1.7;
        }

        /* Features grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; }
          .navbar { padding: 14px 20px; }
          .section { padding: 60px 20px; }
        }

        .feature-card {
          padding: 28px;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.25s ease;
          cursor: default;
        }
        .feature-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(99,102,241,0.2);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }
        .feature-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          font-size: 1.2rem;
        }
        .feature-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 8px;
        }
        .feature-desc {
          font-size: 0.82rem;
          color: rgba(148,163,184,0.55);
          line-height: 1.65;
        }

        /* ── How it works ── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          position: relative;
        }
        .steps-grid::before {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(16.66% + 20px);
          right: calc(16.66% + 20px);
          height: 1px;
          background: linear-gradient(to right, rgba(99,102,241,0.3), rgba(139,92,246,0.3));
          z-index: 0;
        }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr; }
          .steps-grid::before { display: none; }
        }
        .step {
          text-align: center;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }
        .step-num {
          width: 56px; height: 56px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15));
          border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #a5b4fc;
          font-family: 'DM Serif Display', Georgia, serif;
        }
        .step-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 0.8rem;
          color: rgba(148,163,184,0.5);
          line-height: 1.65;
        }

        /* ── Content types ── */
        .content-types {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 48px;
        }
        .type-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.2s ease;
          cursor: default;
        }
        .type-pill:hover { transform: translateY(-2px); }
        .type-pill-yt:hover {
          background: rgba(255,60,60,0.07);
          border-color: rgba(255,60,60,0.2);
        }
        .type-pill-tw:hover {
          background: rgba(29,161,242,0.07);
          border-color: rgba(29,161,242,0.2);
        }
        .type-pill-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #cbd5e1;
        }

        /* ── CTA section ── */
        .cta-section {
          position: relative;
          z-index: 1;
          padding: 80px 24px 100px;
          text-align: center;
        }
        .cta-card {
          max-width: 640px;
          margin: 0 auto;
          padding: 60px 48px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.15);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.05),
            0 40px 80px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          top: -60px; left: 50%; transform: translateX(-50%);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 400;
          color: #f8fafc;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
          line-height: 1.15;
        }
        .cta-sub {
          font-size: 0.9rem;
          color: rgba(148,163,184,0.6);
          margin-bottom: 36px;
          line-height: 1.7;
        }

        /* ── Footer ── */
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .footer-text {
          font-size: 0.8rem;
          color: rgba(148,163,184,0.3);
          letter-spacing: 0.02em;
        }
        .footer-heart {
          color: #f43f5e;
          font-size: 0.9rem;
          animation: heartbeat 1.4s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.25); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.15); }
          70%       { transform: scale(1); }
        }
        .footer-author {
          font-size: 0.8rem;
          font-weight: 600;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Divider */
        .section-divider {
          position: relative;
          z-index: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent);
          margin: 0 48px;
        }
      `}</style>

      <div className="home-root">

        {/* Background layers */}
        <div className="dot-grid" />
        <div className="blob" style={{
          width: 700, height: 700, top: -200, left: -200,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)",
          animation: "blob1 18s ease-in-out infinite alternate",
        }} />
        <div className="blob" style={{
          width: 600, height: 600, bottom: -150, right: -150,
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)",
          animation: "blob2 22s ease-in-out infinite alternate",
        }} />
        <div className="blob" style={{
          width: 400, height: 400, top: "50%", left: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)",
          animation: "blob3 26s ease-in-out infinite alternate",
        }} />

        {/* ── Navbar ── */}
        <nav className="navbar">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <svg style={{ width: 18, height: 18, color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="nav-logo-text">Memory</span>
          </div>
          <div className="nav-links">
          <button className="nav-link" onClick={() => navigate("/features")}>
  Features
</button>
          <button className="nav-link" onClick={() => navigate("/how-it-works")}>
  How it works
</button>
            <button className="nav-link" onClick={() => navigate("/signin")}>Sign in</button>
            <button className="nav-cta" onClick={() => navigate("/signup")}>Get started free →</button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-badge">
            <div className="badge-dot" />
            Your personal knowledge OS
          </div>

          <h1 className="hero-headline">
            Save everything.<br />
            <em>Forget nothing.</em>
          </h1>

          <p className="hero-sub">
            Memory is your second brain — a beautiful space to save YouTube videos,
            tweets, and ideas so you can find them exactly when you need them.
          </p>

          <div className="hero-actions">
            <button className="btn-hero-primary" onClick={() => navigate("/signup")}>
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start for free
            </button>
            <button className="btn-hero-secondary" onClick={() => navigate("/signin")}>
              Sign in to your brain →
            </button>
          </div>

          {/* App preview mockup */}
          <div className="hero-preview">
            <div className="preview-glow" />
            <div className="preview-window">
              <div className="preview-titlebar">
                <div className="preview-dot" style={{ background: "#ff5f57" }} />
                <div className="preview-dot" style={{ background: "#febc2e" }} />
                <div className="preview-dot" style={{ background: "#28c840" }} />
                <div className="preview-bar" />
                <div style={{ fontSize: "0.65rem", color: "rgba(148,163,184,0.3)", fontFamily: "'Sora', sans-serif" }}>
                  memory.app/dashboard
                </div>
              </div>
              <div className="preview-body">
                {/* Mini sidebar */}
                <div className="preview-sidebar">
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
                    <div style={{ height: 8, width: 50, borderRadius: 4, background: "rgba(255,255,255,0.15)" }} />
                  </div>
                  <div className="preview-nav-item active" />
                  <div className="preview-nav-item" />
                  <div className="preview-nav-item" />
                  <div style={{ margin: "8px 0", height: 1, background: "rgba(255,255,255,0.05)" }} />
                  <div className="preview-nav-item" />
                  <div className="preview-nav-item" />
                </div>
                {/* Mini cards */}
                <div className="preview-content">
                  {/* YouTube card mockup */}
                  <div className="preview-card" style={{ width: 180 }}>
                    <div className="preview-card-header">
                      <div className="preview-badge" style={{ background: "rgba(255,60,60,0.18)", border: "1px solid rgba(255,60,60,0.25)" }} />
                      <div className="preview-title-line" style={{ width: "80%" }} />
                    </div>
                    <div className="preview-embed" style={{ height: 88, width: 160 }}>
                      <svg style={{ width: 28, height: 28, color: "#ff4444", opacity: 0.8 }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Twitter card mockup */}
                  <div className="preview-card" style={{ width: 160 }}>
                    <div className="preview-card-header">
                      <div className="preview-badge" style={{ background: "rgba(29,161,242,0.15)", border: "1px solid rgba(29,161,242,0.22)" }} />
                      <div className="preview-title-line" style={{ width: "70%" }} />
                      <div className="preview-title-line" style={{ width: "50%", opacity: 0.5 }} />
                    </div>
                    <div style={{ margin: "0 12px 12px", height: 60, borderRadius: 8, background: "rgba(29,161,242,0.06)", border: "1px solid rgba(29,161,242,0.1)" }} />
                  </div>
                  {/* Another card mockup */}
                  <div className="preview-card" style={{ width: 150, opacity: 0.5 }}>
                    <div className="preview-card-header">
                      <div className="preview-badge" style={{ background: "rgba(255,60,60,0.1)" }} />
                      <div className="preview-title-line" style={{ width: "60%" }} />
                    </div>
                    <div style={{ margin: "0 12px 12px", height: 72, borderRadius: 8, background: "rgba(0,0,0,0.3)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Features ── */}
        <section className="section">
          <div className="section-eyebrow">Why Memory</div>
          <h2 className="section-title">Everything your brain needs</h2>
          <p className="section-sub">
            Stop losing great content in your bookmarks. Memory organizes your digital knowledge beautifully.
          </p>

          <div className="features-grid">
            {[
              {
                icon: "⚡",
                color: "rgba(99,102,241,0.12)",
                border: "rgba(99,102,241,0.2)",
                title: "Save in seconds",
                desc: "Paste any YouTube or Twitter link and it's instantly saved to your brain. No friction, no fuss.",
              },
              {
                icon: "🎯",
                color: "rgba(16,185,129,0.1)",
                border: "rgba(16,185,129,0.18)",
                title: "Find it instantly",
                desc: "Filter by content type. Your collection is always organized exactly the way you need it.",
              },
              {
                icon: "🔗",
                color: "rgba(245,158,11,0.1)",
                border: "rgba(245,158,11,0.18)",
                title: "Share your brain",
                desc: "Generate a shareable link and let anyone explore your curated knowledge base.",
              },
              {
                icon: "📺",
                color: "rgba(255,60,60,0.1)",
                border: "rgba(255,60,60,0.18)",
                title: "Embedded previews",
                desc: "YouTube videos play right inside your dashboard. Never lose context switching tabs.",
              },
              {
                icon: "🐦",
                color: "rgba(29,161,242,0.1)",
                border: "rgba(29,161,242,0.18)",
                title: "Twitter threads",
                desc: "Save tweets and threads with full context. Your best Twitter finds, always at hand.",
              },
              {
                icon: "🔒",
                color: "rgba(139,92,246,0.1)",
                border: "rgba(139,92,246,0.2)",
                title: "Private & secure",
                desc: "Your second brain is yours alone. JWT-secured, private by default, share only when you want.",
              },
            ].map((f, i) => (
              <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="feature-icon" style={{ background: f.color, border: `1px solid ${f.border}` }}>
                  {f.icon}
                </div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Content types ── */}
        <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="section-eyebrow">Supported content</div>
          <h2 className="section-title">Two platforms, one brain</h2>
          <p className="section-sub">
            Memory speaks YouTube and Twitter natively — with more platforms coming soon.
          </p>
          <div className="content-types">
            <div className="type-pill type-pill-yt">
              <svg style={{ width: 22, height: 22, color: "#fca5a5" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
              <div>
                <div className="type-pill-label">YouTube</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(148,163,184,0.4)", marginTop: 1 }}>Videos & shorts</div>
              </div>
            </div>
            <div className="type-pill type-pill-tw">
              <svg style={{ width: 20, height: 20, color: "#7dd3fc" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <div>
                <div className="type-pill-label">Twitter / X</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(148,163,184,0.4)", marginTop: 1 }}>Tweets & threads</div>
              </div>
            </div>
            <div className="type-pill" style={{ opacity: 0.4 }}>
              <svg style={{ width: 20, height: 20, color: "#94a3b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <div>
                <div className="type-pill-label" style={{ color: "rgba(148,163,184,0.5)" }}>More coming soon</div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── How it works ── */}
        <section className="section">
          <div className="section-eyebrow">How it works</div>
          <h2 className="section-title">Three steps to a smarter you</h2>
          <p className="section-sub">Getting started takes less than a minute.</p>

          <div className="steps-grid">
            {[
              { n: "1", title: "Create your account", desc: "Sign up in seconds. No credit card, no setup. Just your username and password." },
              { n: "2", title: "Save your content", desc: "Hit Add Content, paste a link, give it a title, and it's in your brain forever." },
              { n: "3", title: "Access anywhere", desc: "Log in from any device. Your second brain is always synced and ready." },
            ].map((s, i) => (
              <div className="step" key={i}>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CTA ── */}
        <div className="cta-section">
          <div className="cta-card">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 14px", borderRadius: 999,
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)",
              fontSize: "0.7rem", fontWeight: 600, color: "#a5b4fc",
              letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24
            }}>
              Free forever
            </div>
            <div className="cta-title">
              Ready to build your<br />second brain?
            </div>
            <p className="cta-sub">
              Join and start saving the content that matters.<br />
              No limits, no noise — just your knowledge, organized.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-hero-primary" onClick={() => navigate("/signup")}
                style={{ fontSize: "0.88rem", padding: "13px 28px" }}>
                Create your brain →
              </button>
              <button className="btn-hero-secondary" onClick={() => navigate("/signin")}
                style={{ fontSize: "0.88rem", padding: "13px 24px" }}>
                Sign in
              </button>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="footer">
          <span className="footer-text">Made with</span>
          <span className="footer-heart">♥</span>
          <span className="footer-text">from</span>
          <span className="footer-author">Akshat Chitransh</span>
        </footer>

      </div>
    </>
  )
}

export default Homepage
