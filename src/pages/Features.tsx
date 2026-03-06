import { useNavigate } from "react-router-dom"

export const Features = () => {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .features-root {
          font-family: 'Sora', system-ui, sans-serif;
          background: #07070f;
          color: #f1f5f9;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Background ── */
        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .dot-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
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
          background: rgba(7,7,15,0.75);
          backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          animation: navIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; cursor: pointer;
        }
        .nav-logo-icon {
          width: 32px; height: 32px; border-radius: 9px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
        }
        .nav-logo-text {
          font-size: 1rem; font-weight: 700;
          color: #f8fafc; letter-spacing: -0.02em;
        }
        .nav-links { display: flex; align-items: center; gap: 8px; }
        .nav-link {
          font-size: 0.82rem; font-weight: 500;
          color: rgba(148,163,184,0.7);
          padding: 7px 14px; border-radius: 8px;
          cursor: pointer; background: none; border: none;
          font-family: 'Sora', system-ui, sans-serif;
          transition: all 0.15s ease;
        }
        .nav-link:hover { color: #f1f5f9; background: rgba(255,255,255,0.05); }
        .nav-link.active { color: #a5b4fc; }
        .nav-cta {
          font-size: 0.82rem; font-weight: 600;
          color: white; padding: 8px 20px; border-radius: 9px;
          border: none; cursor: pointer;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 4px 16px rgba(99,102,241,0.35);
          transition: all 0.2s ease;
          font-family: 'Sora', system-ui, sans-serif;
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(99,102,241,0.5); }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes blob1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(70px, 90px) scale(1.12); }
        }
        @keyframes blob2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-90px,-70px) scale(1.1); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
          100% { box-shadow: 0 0 0 14px rgba(99,102,241,0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.25); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.15); }
          70%       { transform: scale(1); }
        }

        /* ── Hero ── */
        .page-hero {
          position: relative;
          z-index: 1;
          padding: 160px 48px 80px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .page-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: 999px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.25);
          font-size: 0.7rem; font-weight: 600; color: #a5b4fc;
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 24px;
          animation: fadeUp 0.5s 0.1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .page-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #f8fafc;
          margin-bottom: 20px;
          animation: fadeUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both;
        }
        .page-title em {
          font-style: italic;
          background: linear-gradient(135deg, #818cf8, #c084fc, #818cf8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .page-sub {
          font-size: 1.05rem;
          color: rgba(148,163,184,0.65);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto 48px;
          font-weight: 400;
          animation: fadeUp 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* ── Stat bar ── */
        .stat-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 80px;
          animation: fadeUp 0.6s 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .stat-item {
          text-align: center;
          padding: 20px 40px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 400;
          color: #f8fafc;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 5px;
        }
        .stat-num span {
          background: linear-gradient(135deg, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 0.72rem;
          color: rgba(148,163,184,0.4);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ── Big feature blocks ── */
        .features-page-body {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px 80px;
        }

        .feature-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 72px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .feature-block:last-of-type { border-bottom: none; }
        .feature-block.reverse { direction: rtl; }
        .feature-block.reverse > * { direction: ltr; }

        @media (max-width: 768px) {
          .feature-block { grid-template-columns: 1fr; gap: 32px; }
          .feature-block.reverse { direction: ltr; }
          .navbar { padding: 14px 20px; }
          .page-hero { padding: 140px 20px 60px; }
          .features-page-body { padding: 0 20px 60px; }
          .stat-bar { flex-direction: column; gap: 0; }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 16px 32px; }
          .features-grid-small { grid-template-columns: 1fr !important; }
        }

        .feature-block-text {}
        .feature-block-number {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 0.75rem;
          color: rgba(99,102,241,0.5);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .feature-block-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 400;
          color: #f8fafc;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .feature-block-title em {
          font-style: italic;
          color: #a5b4fc;
        }
        .feature-block-desc {
          font-size: 0.9rem;
          color: rgba(148,163,184,0.6);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .feature-bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .feature-bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.82rem;
          color: rgba(148,163,184,0.7);
          line-height: 1.6;
        }
        .bullet-check {
          width: 18px; height: 18px; flex-shrink: 0;
          border-radius: 999px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
          color: #818cf8;
        }

        /* Visual panels */
        .feature-visual {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          animation: float 7s ease-in-out infinite;
          position: relative;
        }
        .visual-topbar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .visual-dot { width: 8px; height: 8px; border-radius: 50%; }
        .visual-body { padding: 20px; }

        /* YT visual */
        .yt-card-visual {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,60,60,0.15);
          border-radius: 14px;
          overflow: hidden;
        }
        .yt-card-header {
          padding: 12px 14px 10px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .yt-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 9px; border-radius: 999px;
          background: rgba(255,60,60,0.1); border: 1px solid rgba(255,60,60,0.22);
          font-size: 0.65rem; font-weight: 700; color: #fca5a5;
          font-family: 'Sora', sans-serif; letter-spacing: 0.05em; text-transform: uppercase;
        }
        .yt-embed-area {
          margin: 0 12px 12px;
          height: 120px; border-radius: 10px;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,60,60,0.1);
        }
        .play-btn {
          width: 44px; height: 44px; border-radius: 50%;
          background: #ff0000;
          display: flex; align-items: center; justify-content: center;
          animation: pulse-ring 1.8s infinite;
        }

        /* Twitter visual */
        .tw-card-visual {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(29,161,242,0.15);
          border-radius: 14px;
          margin-bottom: 12px;
        }
        .tw-card-header {
          padding: 12px 14px 8px;
          display: flex; align-items: center; gap: 8px;
        }
        .tw-avatar {
          width: 28px; height: 28px; border-radius: 999px;
          background: linear-gradient(135deg, #1da1f2, #0ea5e9);
        }
        .tw-name { height: 7px; border-radius: 4px; background: rgba(255,255,255,0.15); width: 80px; }
        .tw-handle { height: 6px; border-radius: 4px; background: rgba(255,255,255,0.06); width: 55px; margin-top: 4px; }
        .tw-body { padding: 0 14px 12px; display: flex; flex-direction: column; gap: 5px; }
        .tw-line { height: 6px; border-radius: 4px; background: rgba(255,255,255,0.09); }

        /* Security visual */
        .security-visual-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .lock-icon-wrap {
          width: 64px; height: 64px; border-radius: 18px;
          background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15));
          border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          color: #818cf8;
        }
        .security-row {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 0.75rem;
          font-family: 'Sora', sans-serif;
        }
        .security-row-label { color: rgba(148,163,184,0.6); }
        .security-row-val {
          font-size: 0.7rem; font-weight: 600;
          padding: 2px 8px; border-radius: 5px;
        }
        .val-green { background: rgba(16,185,129,0.1); color: #6ee7b7; border: 1px solid rgba(16,185,129,0.2); }
        .val-blue  { background: rgba(99,102,241,0.1); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }

        /* Share visual */
        .share-visual-body { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
        .share-link-box {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(99,102,241,0.2);
        }
        .share-link-text { font-size: 0.72rem; color: #818cf8; font-family: 'Sora', sans-serif; flex: 1; }
        .share-copy-btn {
          font-size: 0.65rem; font-weight: 600; color: white;
          padding: 4px 10px; border-radius: 6px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; font-family: 'Sora', sans-serif; cursor: pointer;
        }
        .share-preview {
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 12px 14px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .share-preview-bar { height: 6px; border-radius: 4px; background: rgba(255,255,255,0.07); }

        /* ── Small features grid ── */
        .small-section {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto;
          padding: 0 48px 100px;
        }
        .small-section-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400;
          color: #f8fafc;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: 48px;
        }
        .features-grid-small {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .small-feat {
          padding: 22px;
          border-radius: 16px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.2s ease;
        }
        .small-feat:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(99,102,241,0.18);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.4);
        }
        .small-feat-icon {
          font-size: 1.4rem; margin-bottom: 12px;
          display: block;
        }
        .small-feat-title {
          font-size: 0.85rem; font-weight: 600; color: #f1f5f9; margin-bottom: 6px;
        }
        .small-feat-desc {
          font-size: 0.75rem; color: rgba(148,163,184,0.45); line-height: 1.6;
        }

        /* ── CTA ── */
        .bottom-cta {
          position: relative; z-index: 1;
          padding: 0 48px 80px;
        }
        .bottom-cta-card {
          max-width: 720px; margin: 0 auto;
          padding: 56px 48px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.14);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          text-align: center;
          position: relative; overflow: hidden;
        }
        .bottom-cta-card::before {
          content: '';
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.7rem, 4vw, 2.6rem);
          font-weight: 400; color: #f8fafc;
          letter-spacing: -0.02em;
          margin-bottom: 14px; line-height: 1.15;
        }
        .cta-sub {
          font-size: 0.9rem;
          color: rgba(148,163,184,0.55);
          margin-bottom: 36px; line-height: 1.75;
        }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 12px;
          font-size: 0.88rem; font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          color: white; border: none; cursor: pointer;
          background-size: 200% auto;
          background-image: linear-gradient(110deg, #6366f1 0%, #818cf8 40%, #a5b4fc 50%, #818cf8 60%, #6366f1 100%);
          box-shadow: 0 4px 18px rgba(99,102,241,0.38), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.25s ease;
          margin-right: 10px;
        }
        .btn-primary:hover {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(99,102,241,0.48);
        }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: 12px;
          font-size: 0.88rem; font-weight: 500;
          font-family: 'Sora', system-ui, sans-serif;
          color: #cbd5e1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer; transition: all 0.2s ease;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-1px);
        }

        /* ── Footer ── */
        .footer {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 28px 48px;
          display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .footer-text { font-size: 0.78rem; color: rgba(148,163,184,0.25); }
        .footer-heart { color: #f43f5e; font-size: 0.9rem; animation: heartbeat 1.4s ease-in-out infinite; }
        .footer-author {
          font-size: 0.78rem; font-weight: 600;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .section-divider {
          position: relative; z-index: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);
          margin: 0 48px;
        }
      `}</style>

      <div className="features-root">

        {/* Background */}
        <div className="dot-grid" />
        <div className="blob" style={{
          width: 700, height: 700, top: -200, left: -200,
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
          animation: "blob1 20s ease-in-out infinite alternate",
        }} />
        <div className="blob" style={{
          width: 600, height: 600, bottom: 0, right: -150,
          background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)",
          animation: "blob2 24s ease-in-out infinite alternate",
        }} />

        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-logo" onClick={() => navigate("/")}>
            <div className="nav-logo-icon">
              <svg style={{ width: 18, height: 18, color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="nav-logo-text">Memory</span>
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => navigate("/")}>Home</button>
            <button className="nav-link active">Features</button>
            <button className="nav-link" onClick={() => navigate("/signin")}>Sign in</button>
            <button className="nav-cta" onClick={() => navigate("/signup")}>Get started free →</button>
          </div>
        </nav>

        {/* Hero */}
        <div className="page-hero">
          <div className="page-eyebrow">
            <svg style={{ width: 12, height: 12 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
            </svg>
            Everything Memory can do
          </div>
          <h1 className="page-title">
            Built for how your<br /><em>brain actually works</em>
          </h1>
          <p className="page-sub">
            Every feature in Memory is designed with one goal — make saving, organizing,
            and rediscovering knowledge feel completely effortless.
          </p>

          {/* Stats */}
          <div className="stat-bar">
            {[
              { num: "2", unit: " platforms", label: "Supported today" },
              { num: "∞", unit: "", label: "Content you can save" },
              { num: "1", unit: " click", label: "To share your brain" },
              { num: "0", unit: " ads", label: "Ever. Promise." },
            ].map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-num"><span>{s.num}</span>{s.unit}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Big feature blocks ── */}
        <div className="features-page-body">

          {/* Block 1 — Save content */}
          <div className="feature-block" style={{ animation: "fadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}>
            <div className="feature-block-text">
              <div className="feature-block-number">01 — Save</div>
              <h2 className="feature-block-title">
                Paste a link.<br /><em>It's in your brain.</em>
              </h2>
              <p className="feature-block-desc">
                No tagging, no folders, no friction. Open Memory, hit Add Content,
                paste your link and give it a title. That's it. Your content is saved,
                embedded, and ready to revisit.
              </p>
              <div className="feature-bullets">
                {[
                  "YouTube videos embed directly in your dashboard",
                  "Twitter posts render with full context intact",
                  "Titles help you remember why you saved it",
                  "JWT-secured so only you can see your content",
                ].map((b, i) => (
                  <div className="feature-bullet" key={i}>
                    <div className="bullet-check">
                      <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-visual">
              <div className="visual-topbar">
                <div className="visual-dot" style={{ background: "#ff5f57" }} />
                <div className="visual-dot" style={{ background: "#febc2e" }} />
                <div className="visual-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="visual-body">
                {/* Add content modal mockup */}
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: 16, padding: "20px", backdropFilter: "blur(12px)"
                }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#f1f5f9", marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>Add Content</div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(148,163,184,0.4)", marginBottom: 18, fontFamily: "'Sora', sans-serif" }}>Save a link to your second brain</div>
                  {/* Type row */}
                  <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                    <div style={{
                      flex: 1, padding: "8px 0", borderRadius: 9, textAlign: "center",
                      background: "rgba(255,60,60,0.1)", border: "1px solid rgba(255,60,60,0.3)",
                      fontSize: "0.7rem", fontWeight: 600, color: "#fca5a5", fontFamily: "'Sora', sans-serif",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 5
                    }}>
                      <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                      </svg>
                      YouTube
                    </div>
                    <div style={{
                      flex: 1, padding: "8px 0", borderRadius: 9, textAlign: "center",
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.7rem", color: "rgba(148,163,184,0.5)", fontFamily: "'Sora', sans-serif",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 5
                    }}>
                      <svg style={{ width: 10, height: 10 }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter
                    </div>
                  </div>
                  {/* Input fields */}
                  {["Title", "Paste URL here…"].map((ph, i) => (
                    <div key={i} style={{
                      padding: "10px 12px", borderRadius: 10, marginBottom: 10,
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.72rem", color: "rgba(148,163,184,0.35)", fontFamily: "'Sora', sans-serif"
                    }}>{ph}</div>
                  ))}
                  {/* Save button */}
                  <div style={{
                    padding: "10px 0", borderRadius: 10, textAlign: "center",
                    background: "linear-gradient(110deg, #6366f1, #8b5cf6)",
                    fontSize: "0.75rem", fontWeight: 600, color: "white", fontFamily: "'Sora', sans-serif",
                    marginTop: 4
                  }}>+ Save Content</div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 — YouTube embeds */}
          <div className="feature-block reverse" style={{ animation: "fadeUp 0.6s 0.15s cubic-bezier(0.22,1,0.36,1) both" }}>
            <div className="feature-block-text">
              <div className="feature-block-number">02 — Watch</div>
              <h2 className="feature-block-title">
                Videos that<br /><em>live in your brain.</em>
              </h2>
              <p className="feature-block-desc">
                Saved YouTube videos don't just show a link — they embed right
                inside your Memory card. Hit play without ever leaving your dashboard.
              </p>
              <div className="feature-bullets">
                {[
                  "Full YouTube player embedded in every card",
                  "Autoplay, fullscreen, quality controls — all work",
                  "Cards are compact — see multiple videos at once",
                  "Works with any youtube.com or youtu.be link",
                ].map((b, i) => (
                  <div className="feature-bullet" key={i}>
                    <div className="bullet-check" style={{ background: "rgba(255,60,60,0.1)", borderColor: "rgba(255,60,60,0.25)", color: "#fca5a5" }}>
                      <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-visual" style={{ animationDelay: "1s" }}>
              <div className="visual-topbar">
                <div className="visual-dot" style={{ background: "#ff5f57" }} />
                <div className="visual-dot" style={{ background: "#febc2e" }} />
                <div className="visual-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="visual-body">
                <div className="yt-card-visual">
                  <div className="yt-card-header">
                    <span className="yt-badge">
                      <svg style={{ width: 10, height: 10 }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                      </svg>
                      YouTube
                    </span>
                    <div style={{ display: "flex", gap: 6 }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "0 12px 4px", fontSize: "0.78rem", fontWeight: 600, color: "#f1f5f9", fontFamily: "'Sora', sans-serif" }}>
                    The video you saved
                  </div>
                  <div className="yt-embed-area">
                    <div className="play-btn">
                      <svg style={{ width: 18, height: 18, color: "white", marginLeft: 2 }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 — Twitter */}
          <div className="feature-block" style={{ animation: "fadeUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}>
            <div className="feature-block-text">
              <div className="feature-block-number">03 — Read</div>
              <h2 className="feature-block-title">
                Tweets, saved with<br /><em>all their context.</em>
              </h2>
              <p className="feature-block-desc">
                Twitter moves fast. The best threads disappear in your feed.
                Memory saves tweets and renders them as embedded Twitter cards —
                so you never lose the content that sparked an idea.
              </p>
              <div className="feature-bullets">
                {[
                  "Full Twitter embed rendered in your card",
                  "Works with tweets, threads, and X links",
                  "Dark theme to match your dashboard",
                  "Quote tweets and media fully preserved",
                ].map((b, i) => (
                  <div className="feature-bullet" key={i}>
                    <div className="bullet-check" style={{ background: "rgba(29,161,242,0.1)", borderColor: "rgba(29,161,242,0.25)", color: "#7dd3fc" }}>
                      <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-visual" style={{ animationDelay: "2s" }}>
              <div className="visual-topbar">
                <div className="visual-dot" style={{ background: "#ff5f57" }} />
                <div className="visual-dot" style={{ background: "#febc2e" }} />
                <div className="visual-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="visual-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[1, 2].map((_, ci) => (
                  <div key={ci} className="tw-card-visual" style={{ opacity: ci === 1 ? 0.5 : 1 }}>
                    <div className="tw-card-header">
                      <div className="tw-avatar" />
                      <div>
                        <div className="tw-name" />
                        <div className="tw-handle" />
                      </div>
                      <div style={{ marginLeft: "auto", color: "#7dd3fc", opacity: 0.7 }}>
                        <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="tw-body">
                      <div className="tw-line" style={{ width: "95%" }} />
                      <div className="tw-line" style={{ width: "80%" }} />
                      <div className="tw-line" style={{ width: "60%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 4 — Share */}
          <div className="feature-block reverse" style={{ animation: "fadeUp 0.6s 0.25s cubic-bezier(0.22,1,0.36,1) both" }}>
            <div className="feature-block-text">
              <div className="feature-block-number">04 — Share</div>
              <h2 className="feature-block-title">
                Your brain,<br /><em>shared in one link.</em>
              </h2>
              <p className="feature-block-desc">
                When you're ready to share your knowledge, Memory generates a clean
                shareable link. Anyone with the link can browse your curated collection —
                no account needed on their end.
              </p>
              <div className="feature-bullets">
                {[
                  "One-click shareable link to your entire brain",
                  "Recipients see a read-only view — clean and beautiful",
                  "Revoke access anytime from your dashboard",
                  "Great for sharing resources with a team or audience",
                ].map((b, i) => (
                  <div className="feature-bullet" key={i}>
                    <div className="bullet-check" style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.22)", color: "#6ee7b7" }}>
                      <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-visual" style={{ animationDelay: "3s" }}>
              <div className="visual-topbar">
                <div className="visual-dot" style={{ background: "#ff5f57" }} />
                <div className="visual-dot" style={{ background: "#febc2e" }} />
                <div className="visual-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="share-visual-body">
                <div style={{ fontSize: "0.72rem", color: "rgba(148,163,184,0.5)", fontFamily: "'Sora', sans-serif", marginBottom: 4 }}>Share your brain</div>
                <div className="share-link-box">
                  <svg style={{ width: 13, height: 13, color: "#818cf8", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0 0a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <div className="share-link-text">memory.app/brain/akshat</div>
                  <div className="share-copy-btn">Copy</div>
                </div>
                <div className="share-preview">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
                    <div style={{ height: 7, width: 80, borderRadius: 4, background: "rgba(255,255,255,0.12)" }} />
                  </div>
                  <div className="share-preview-bar" style={{ width: "90%" }} />
                  <div className="share-preview-bar" style={{ width: "70%" }} />
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{ height: 48, flex: 1, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 5 — Security */}
          <div className="feature-block" style={{ animation: "fadeUp 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}>
            <div className="feature-block-text">
              <div className="feature-block-number">05 — Security</div>
              <h2 className="feature-block-title">
                Private by default,<br /><em>always secure.</em>
              </h2>
              <p className="feature-block-desc">
                Your second brain belongs to you. Memory uses JWT authentication
                on every request — your content is locked behind your credentials
                and never visible to other users unless you choose to share it.
              </p>
              <div className="feature-bullets">
                {[
                  "JWT tokens secure every API request",
                  "Content is private by default — always",
                  "Passwords hashed and never stored in plain text",
                  "Share only when you explicitly choose to",
                ].map((b, i) => (
                  <div className="feature-bullet" key={i}>
                    <div className="bullet-check" style={{ background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.25)", color: "#c084fc" }}>
                      <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-visual" style={{ animationDelay: "4s" }}>
              <div className="visual-topbar">
                <div className="visual-dot" style={{ background: "#ff5f57" }} />
                <div className="visual-dot" style={{ background: "#febc2e" }} />
                <div className="visual-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="security-visual-body">
                <div className="lock-icon-wrap">
                  <svg style={{ width: 28, height: 28 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                {[
                  { label: "Authentication", val: "JWT", cls: "val-blue" },
                  { label: "Data privacy", val: "Private", cls: "val-green" },
                  { label: "HTTPS", val: "Enforced", cls: "val-green" },
                  { label: "Passwords", val: "Hashed", cls: "val-blue" },
                ].map((row, i) => (
                  <div className="security-row" key={i}>
                    <span className="security-row-label">{row.label}</span>
                    <span className={`security-row-val ${row.cls}`}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="section-divider" />

        {/* Small features grid */}
        <div className="small-section">
          <h2 className="small-section-title">And a lot more under the hood</h2>
          <div className="features-grid-small">
            {[
              { icon: "⚡", title: "Instant saving", desc: "Zero latency from paste to saved. Your brain updates in real time." },
              { icon: "📱", title: "Mobile ready", desc: "Fully responsive. Access your brain from phone, tablet, or desktop." },
              { icon: "🎨", title: "Beautiful UI", desc: "Dark glassmorphism design built to be used for hours without eye strain." },
              { icon: "🔍", title: "Filter by type", desc: "Switch between All, YouTube, and Twitter in one click from the sidebar." },
              { icon: "🗑️", title: "Delete anytime", desc: "Remove content you no longer need. Your brain, your rules." },
              { icon: "🌐", title: "Link previews", desc: "Open the original source anytime with the external link button on each card." },
              { icon: "🚀", title: "Fast backend", desc: "Built on Node.js + Express with a clean REST API and Prisma ORM." },
              { icon: "🔓", title: "No lock-in", desc: "Your data stays yours. No proprietary formats, no hidden dependencies." },
            ].map((f, i) => (
              <div className="small-feat" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="small-feat-icon">{f.icon}</span>
                <div className="small-feat-title">{f.title}</div>
                <div className="small-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bottom-cta">
          <div className="bottom-cta-card">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "4px 12px", borderRadius: 999,
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
              fontSize: "0.68rem", fontWeight: 600, color: "#a5b4fc",
              letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 22
            }}>
              Ready to start?
            </div>
            <div className="cta-title">Your second brain<br />awaits you.</div>
            <p className="cta-sub">
              Everything you've just read is live, working, and free to use.<br />
              Sign up in under a minute.
            </p>
            <div>
              <button className="btn-primary" onClick={() => navigate("/signup")}>
                Create your brain →
              </button>
              <button className="btn-ghost" onClick={() => navigate("/")}>
                Back to home
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
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

export default Features
