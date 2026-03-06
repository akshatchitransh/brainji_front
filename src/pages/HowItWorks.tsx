import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const HowItWorks = () => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Create your account",
      subtitle: "30 seconds to get started",
      desc: "Sign up with just a username and password. No email verification, no credit card, no onboarding checklist. You're in your brain the moment you hit Create Account.",
      color: "#6366f1",
      colorRgb: "99,102,241",
      icon: (
        <svg style={{ width: 28, height: 28 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      visual: "signup",
      details: [
        "Choose a unique username",
        "Set a secure password",
        "Hit Create Account",
        "Land straight on your dashboard",
      ],
    },
    {
      number: "02",
      title: "Add your first content",
      subtitle: "Paste, title, save — done",
      desc: "Click Add Content in the top right. Choose YouTube or Twitter, paste the link, give it a memorable title, and save. Your content appears on your dashboard instantly with a live embed.",
      color: "#8b5cf6",
      colorRgb: "139,92,246",
      icon: (
        <svg style={{ width: 28, height: 28 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 4v16m8-8H4" />
        </svg>
      ),
      visual: "add",
      details: [
        "Click Add Content button",
        "Select YouTube or Twitter",
        "Paste your link",
        "Give it a title and save",
      ],
    },
    {
      number: "03",
      title: "Browse your collection",
      subtitle: "Everything in one place",
      desc: "Your saved content lives in a beautiful card grid. YouTube videos play right inside the card. Tweets render with full context. Filter by type from the sidebar whenever you need to narrow things down.",
      color: "#06b6d4",
      colorRgb: "6,182,212",
      icon: (
        <svg style={{ width: 28, height: 28 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      visual: "browse",
      details: [
        "See all saved content in a grid",
        "Watch YouTube videos inline",
        "Read tweets with full context",
        "Filter by type in the sidebar",
      ],
    },
    {
      number: "04",
      title: "Share your brain",
      subtitle: "One link. Anyone can view.",
      desc: "Hit Share Brain in the top bar to generate a unique public link. Anyone with the link can browse your entire curated collection — read-only, no account needed. Perfect for sharing resources with your team or audience.",
      color: "#10b981",
      colorRgb: "16,185,129",
      icon: (
        <svg style={{ width: 28, height: 28 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      visual: "share",
      details: [
        "Click Share Brain in topbar",
        "A unique link is generated",
        "Send it to anyone",
        "They see a read-only view",
      ],
    },
  ]

  const activeStepData = steps[activeStep]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hiw-root {
          font-family: 'Sora', system-ui, sans-serif;
          background: #07070f;
          color: #f1f5f9;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .blob {
          position: fixed; border-radius: 50%;
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .dot-grid {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        /* ── Navbar ── */
        @keyframes navIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 48px;
          background: rgba(7,7,15,0.75);
          backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          animation: navIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          cursor: pointer; text-decoration: none;
        }
        .nav-logo-icon {
          width: 32px; height: 32px; border-radius: 9px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
        }
        .nav-logo-text { font-size: 1rem; font-weight: 700; color: #f8fafc; letter-spacing: -0.02em; }
        .nav-links { display: flex; align-items: center; gap: 8px; }
        .nav-link {
          font-size: 0.82rem; font-weight: 500; color: rgba(148,163,184,0.7);
          padding: 7px 14px; border-radius: 8px; cursor: pointer;
          background: none; border: none; font-family: 'Sora', system-ui, sans-serif;
          transition: all 0.15s ease;
        }
        .nav-link:hover { color: #f1f5f9; background: rgba(255,255,255,0.05); }
        .nav-link.active { color: #a5b4fc; }
        .nav-cta {
          font-size: 0.82rem; font-weight: 600; color: white;
          padding: 8px 20px; border-radius: 9px; border: none; cursor: pointer;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 4px 16px rgba(99,102,241,0.35);
          transition: all 0.2s ease; font-family: 'Sora', system-ui, sans-serif;
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
          50%       { transform: translateY(-8px); }
        }
        @keyframes blob1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(60px,80px) scale(1.1); }
        }
        @keyframes blob2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-80px,-60px) scale(1.12); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.25); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.15); }
          70%       { transform: scale(1); }
        }
        @keyframes stepSlide {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(var(--step-rgb), 0.4); }
          100% { box-shadow: 0 0 0 12px rgba(var(--step-rgb), 0); }
        }

        /* ── Hero ── */
        .page-hero {
          position: relative; z-index: 1;
          padding: 150px 48px 64px;
          text-align: center; max-width: 860px; margin: 0 auto;
          animation: fadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .page-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: 999px;
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25);
          font-size: 0.7rem; font-weight: 600; color: #a5b4fc;
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 22px;
        }
        .page-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 400; line-height: 1.08; letter-spacing: -0.025em;
          color: #f8fafc; margin-bottom: 18px;
        }
        .page-title em {
          font-style: italic;
          background: linear-gradient(135deg, #818cf8, #c084fc, #818cf8);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .page-sub {
          font-size: 1rem; color: rgba(148,163,184,0.6);
          line-height: 1.75; max-width: 500px; margin: 0 auto 0;
        }

        /* ── Timeline progress bar ── */
        .timeline-bar-wrap {
          position: relative; z-index: 1;
          max-width: 680px; margin: 48px auto 0;
          padding: 0 48px;
          animation: fadeUp 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }
        .timeline-steps {
          display: flex; gap: 0;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .timeline-step-btn {
          flex: 1;
          padding: 16px 8px 14px;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          cursor: pointer; border: none;
          background: transparent;
          font-family: 'Sora', system-ui, sans-serif;
          transition: all 0.2s ease;
          border-right: 1px solid rgba(255,255,255,0.06);
          position: relative; overflow: hidden;
        }
        .timeline-step-btn:last-child { border-right: none; }
        .timeline-step-btn:hover { background: rgba(255,255,255,0.04); }
        .timeline-step-btn.active-step { background: rgba(255,255,255,0.05); }
        .tsb-num {
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .tsb-label {
          font-size: 0.7rem; font-weight: 500; color: rgba(148,163,184,0.5);
          white-space: nowrap;
        }
        .timeline-step-btn.active-step .tsb-label { color: #f1f5f9; }
        .tsb-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: transparent;
          transition: background 0.3s ease;
        }
        .timeline-step-btn.active-step .tsb-bar {
          animation: progressFill 0.4s ease both;
        }

        /* ── Main interactive section ── */
        .hiw-main {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto;
          padding: 56px 48px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hiw-main { grid-template-columns: 1fr; gap: 32px; }
          .navbar { padding: 14px 20px; }
          .page-hero { padding: 140px 20px 48px; }
          .timeline-bar-wrap { padding: 0 20px; }
          .hiw-main { padding: 40px 20px; }
          .full-journey { padding: 40px 20px 60px; }
          .faq-section { padding: 40px 20px 60px; }
          .bottom-cta { padding: 0 20px 60px; }
        }

        /* Step content */
        .step-content {
          animation: stepSlide 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }
        .step-number-big {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 5rem; font-weight: 400;
          line-height: 1; margin-bottom: 8px;
          opacity: 0.12; letter-spacing: -0.04em;
        }
        .step-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 999px;
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .step-main-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 400; letter-spacing: -0.02em;
          color: #f8fafc; line-height: 1.12; margin-bottom: 16px;
        }
        .step-main-desc {
          font-size: 0.9rem; color: rgba(148,163,184,0.6);
          line-height: 1.8; margin-bottom: 28px;
        }
        .step-details {
          display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px;
        }
        .step-detail {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.82rem; color: rgba(148,163,184,0.7);
        }
        .detail-num {
          width: 22px; height: 22px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; font-weight: 700; flex-shrink: 0;
        }
        .step-nav-btns {
          display: flex; gap: 10px; align-items: center;
        }
        .step-nav-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 9px 18px; border-radius: 10px;
          font-size: 0.8rem; font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          cursor: pointer; transition: all 0.18s ease; border: none;
        }
        .step-nav-next {
          color: white;
          background-size: 200% auto;
        }
        .step-nav-next:hover {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
        }
        .step-nav-prev {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09) !important;
          color: rgba(148,163,184,0.6);
        }
        .step-nav-prev:hover { background: rgba(255,255,255,0.09); color: #e2e8f0; }

        /* Visual panel */
        .step-visual-panel {
          border-radius: 22px; overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05);
          animation: float 7s ease-in-out infinite, stepSlide 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }
        .panel-topbar {
          display: flex; align-items: center; gap: 6px;
          padding: 11px 14px;
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .panel-dot { width: 9px; height: 9px; border-radius: 50%; }
        .panel-body { padding: 20px; }

        /* Signup visual */
        .sv-card {
          border-radius: 14px; overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.15);
        }
        .sv-top { height: 3px; background: linear-gradient(to right, transparent, #6366f1, #8b5cf6, transparent); }
        .sv-body { padding: 18px; }
        .sv-logo { width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #6366f1, #8b5cf6); margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; }
        .sv-title { text-align: center; font-size: 0.85rem; font-weight: 600; color: #f1f5f9; margin-bottom: 4px; font-family: 'Sora', sans-serif; }
        .sv-sub { text-align: center; font-size: 0.65rem; color: rgba(148,163,184,0.4); margin-bottom: 16px; font-family: 'Sora', sans-serif; }
        .sv-field { padding: 9px 12px; border-radius: 9px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); font-size: 0.7rem; color: rgba(148,163,184,0.4); font-family: 'Sora', sans-serif; margin-bottom: 8px; }
        .sv-btn { padding: 10px 0; text-align: center; border-radius: 10px; background: linear-gradient(110deg, #6366f1, #8b5cf6); font-size: 0.75rem; font-weight: 600; color: white; font-family: 'Sora', sans-serif; margin-top: 4px; }

        /* Add content visual */
        .av-modal {
          border-radius: 14px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(139,92,246,0.18); padding: 16px;
        }
        .av-header { font-size: 0.8rem; font-weight: 600; color: #f1f5f9; margin-bottom: 3px; font-family: 'Sora', sans-serif; }
        .av-sub { font-size: 0.65rem; color: rgba(148,163,184,0.35); margin-bottom: 14px; font-family: 'Sora', sans-serif; }
        .av-types { display: flex; gap: 8px; margin-bottom: 12px; }
        .av-type { flex: 1; padding: 7px 0; border-radius: 8px; font-size: 0.68rem; font-weight: 600; text-align: center; font-family: 'Sora', sans-serif; display: flex; align-items: center; justify-content: center; gap: 4px; }
        .av-field { padding: 8px 10px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); font-size: 0.68rem; color: rgba(148,163,184,0.35); font-family: 'Sora', sans-serif; margin-bottom: 8px; }
        .av-save { padding: 9px 0; text-align: center; border-radius: 9px; background: linear-gradient(110deg, #6366f1, #8b5cf6); font-size: 0.72rem; font-weight: 600; color: white; font-family: 'Sora', sans-serif; }

        /* Browse visual */
        .bv-topbar-strip {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 0.68rem; font-family: 'Sora', sans-serif;
        }
        .bv-layout { display: flex; gap: 10px; padding: 12px; }
        .bv-sidebar { width: 80px; flex-shrink: 0; display: flex; flex-direction: column; gap: 5px; }
        .bv-nav { height: 20px; border-radius: 5px; background: rgba(255,255,255,0.04); }
        .bv-nav.act { background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.2); }
        .bv-cards { flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .bv-card { border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); overflow: hidden; }
        .bv-card-top { padding: 8px 10px 6px; display: flex; align-items: center; justify-content: space-between; }
        .bv-badge { height: 12px; width: 50px; border-radius: 999px; }
        .bv-embed { margin: 0 8px 8px; height: 50px; border-radius: 7px; background: #000; display: flex; align-items: center; justify-content: center; }

        /* Share visual */
        .shv-body { padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .shv-topbar { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: rgba(255,255,255,0.025); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .shv-btn { padding: 5px 12px; border-radius: 7px; font-size: 0.65rem; font-weight: 600; color: white; background: linear-gradient(135deg,#6366f1,#8b5cf6); border: none; font-family: 'Sora', sans-serif; }
        .shv-link-row { display: flex; align-items: center; gap: 7px; padding: 9px 12px; border-radius: 9px; background: rgba(99,102,241,0.07); border: 1px solid rgba(99,102,241,0.2); }
        .shv-link-text { font-size: 0.68rem; color: #818cf8; font-family: 'Sora', sans-serif; flex: 1; }
        .shv-copy { font-size: 0.6rem; font-weight: 600; padding: 3px 8px; border-radius: 5px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: white; border: none; font-family: 'Sora', sans-serif; }
        .shv-preview { border-radius: 10px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; }
        .shv-line { height: 5px; border-radius: 3px; background: rgba(255,255,255,0.07); }

        /* ── Full journey timeline ── */
        .full-journey {
          position: relative; z-index: 1;
          max-width: 800px; margin: 0 auto;
          padding: 0 48px 80px;
        }
        .fj-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 400; color: #f8fafc;
          letter-spacing: -0.02em;
          text-align: center; margin-bottom: 52px;
        }
        .fj-line {
          position: relative;
          padding-left: 40px;
          display: flex; flex-direction: column; gap: 0;
        }
        .fj-line::before {
          content: '';
          position: absolute; left: 13px; top: 24px; bottom: 24px; width: 2px;
          background: linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4, #10b981);
          border-radius: 999px;
        }
        .fj-item {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 0 0 36px 0; position: relative;
        }
        .fj-item:last-child { padding-bottom: 0; }
        .fj-dot {
          position: absolute; left: -33px; top: 4px;
          width: 14px; height: 14px; border-radius: 50%;
          border: 2px solid;
          background: #07070f;
          flex-shrink: 0;
          z-index: 1;
        }
        .fj-content {}
        .fj-step-label {
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 4px;
        }
        .fj-step-title {
          font-size: 0.95rem; font-weight: 600; color: #f1f5f9; margin-bottom: 6px;
        }
        .fj-step-desc {
          font-size: 0.8rem; color: rgba(148,163,184,0.5); line-height: 1.65;
        }

        /* ── FAQ ── */
        .faq-section {
          position: relative; z-index: 1;
          max-width: 720px; margin: 0 auto;
          padding: 0 48px 80px;
        }
        .faq-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400; color: #f8fafc;
          letter-spacing: -0.02em; text-align: center; margin-bottom: 40px;
        }
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0; cursor: pointer;
          transition: all 0.2s ease;
        }
        .faq-item:first-of-type { border-top: 1px solid rgba(255,255,255,0.06); }
        .faq-q {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          font-size: 0.88rem; font-weight: 500; color: #e2e8f0;
        }
        .faq-chevron {
          color: rgba(148,163,184,0.4); flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .faq-chevron.open { transform: rotate(180deg); }
        .faq-a {
          font-size: 0.82rem; color: rgba(148,163,184,0.55);
          line-height: 1.75; padding-top: 12px;
        }

        /* ── Bottom CTA ── */
        .bottom-cta { position: relative; z-index: 1; padding: 0 48px 80px; }
        .bottom-cta-card {
          max-width: 680px; margin: 0 auto; padding: 56px 48px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.14);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          text-align: center; position: relative; overflow: hidden;
        }
        .bottom-cta-card::before {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.7rem, 4vw, 2.6rem); font-weight: 400;
          color: #f8fafc; letter-spacing: -0.02em; margin-bottom: 14px; line-height: 1.15;
        }
        .cta-sub { font-size: 0.9rem; color: rgba(148,163,184,0.55); margin-bottom: 36px; line-height: 1.75; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 12px;
          font-size: 0.88rem; font-weight: 600; font-family: 'Sora', system-ui, sans-serif;
          color: white; border: none; cursor: pointer;
          background-size: 200% auto;
          background-image: linear-gradient(110deg, #6366f1 0%, #818cf8 40%, #a5b4fc 50%, #818cf8 60%, #6366f1 100%);
          box-shadow: 0 4px 18px rgba(99,102,241,0.38), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.25s ease; margin-right: 10px;
        }
        .btn-primary:hover { animation: shimmer 1.6s linear infinite; transform: translateY(-1px); box-shadow: 0 10px 28px rgba(99,102,241,0.48); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: 12px;
          font-size: 0.88rem; font-weight: 500; font-family: 'Sora', system-ui, sans-serif;
          color: #cbd5e1; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.2s ease;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.09); border-color: rgba(139,92,246,0.3); transform: translateY(-1px); }

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

      <div className="hiw-root">

        {/* Background */}
        <div className="dot-grid" />
        <div className="blob" style={{
          width: 650, height: 650, top: -180, left: -180,
          background: "radial-gradient(circle, rgba(99,102,241,0.11) 0%, transparent 65%)",
          animation: "blob1 20s ease-in-out infinite alternate",
        }} />
        <div className="blob" style={{
          width: 550, height: 550, bottom: 0, right: -150,
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
            <button className="nav-link" onClick={() => navigate("/features")}>Features</button>
            <button className="nav-link active">How it works</button>
            <button className="nav-link" onClick={() => navigate("/signin")}>Sign in</button>
            <button className="nav-cta" onClick={() => navigate("/signup")}>Get started free →</button>
          </div>
        </nav>

        {/* Hero */}
        <div className="page-hero">
          <div className="page-eyebrow">
            <svg style={{ width: 11, height: 11 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 13V7" />
            </svg>
            A walkthrough
          </div>
          <h1 className="page-title">
            Simple by design.<br /><em>Powerful by nature.</em>
          </h1>
          <p className="page-sub">
            Memory is built around four steps. From creating your account to sharing
            your brain with the world — here's exactly how it works.
          </p>
        </div>

        {/* Step selector tabs */}
        <div className="timeline-bar-wrap">
          <div className="timeline-steps">
            {steps.map((s, i) => (
              <button
                key={i}
                className={`timeline-step-btn ${activeStep === i ? "active-step" : ""}`}
                onClick={() => setActiveStep(i)}
              >
                <span className="tsb-num" style={{ color: activeStep === i ? s.color : "rgba(148,163,184,0.3)" }}>
                  {s.number}
                </span>
                <span className="tsb-label">{s.title.split(" ").slice(0, 2).join(" ")}</span>
                <div className="tsb-bar" style={{ background: activeStep === i ? s.color : "transparent" }} />
              </button>
            ))}
          </div>
        </div>

        {/* Interactive step detail */}
        <div className="hiw-main" key={activeStep}>

          {/* Left — text */}
          <div className="step-content">
            <div className="step-number-big" style={{ color: activeStepData.color }}>
              {activeStepData.number}
            </div>
            <div className="step-tag" style={{
              background: `rgba(${activeStepData.colorRgb},0.1)`,
              border: `1px solid rgba(${activeStepData.colorRgb},0.25)`,
              color: activeStepData.color
            }}>
              {activeStepData.icon}
              {activeStepData.subtitle}
            </div>
            <h2 className="step-main-title">{activeStepData.title}</h2>
            <p className="step-main-desc">{activeStepData.desc}</p>
            <div className="step-details">
              {activeStepData.details.map((d, i) => (
                <div className="step-detail" key={i}>
                  <div className="detail-num" style={{
                    background: `rgba(${activeStepData.colorRgb},0.1)`,
                    border: `1px solid rgba(${activeStepData.colorRgb},0.2)`,
                    color: activeStepData.color
                  }}>
                    {i + 1}
                  </div>
                  {d}
                </div>
              ))}
            </div>
            <div className="step-nav-btns">
              {activeStep > 0 && (
                <button
                  className="step-nav-btn step-nav-prev"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  ← Back
                </button>
              )}
              {activeStep < steps.length - 1 ? (
                <button
                  className="step-nav-btn step-nav-next"
                  onClick={() => setActiveStep(activeStep + 1)}
                  style={{
                    background: `linear-gradient(135deg, ${activeStepData.color}, ${steps[activeStep + 1]?.color || activeStepData.color})`,
                    boxShadow: `0 4px 16px rgba(${activeStepData.colorRgb},0.35)`,
                  }}
                >
                  Next: {steps[activeStep + 1]?.title} →
                </button>
              ) : (
                <button
                  className="step-nav-btn step-nav-next"
                  onClick={() => navigate("/signup")}
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                  }}
                >
                  Start for free →
                </button>
              )}
            </div>
          </div>

          {/* Right — visual */}
          <div className="step-visual-panel" style={{
            borderColor: `rgba(${activeStepData.colorRgb},0.15)`,
            boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(${activeStepData.colorRgb},0.08), inset 0 1px 0 rgba(255,255,255,0.05)`
          }}>
            <div className="panel-topbar">
              <div className="panel-dot" style={{ background: "#ff5f57" }} />
              <div className="panel-dot" style={{ background: "#febc2e" }} />
              <div className="panel-dot" style={{ background: "#28c840" }} />
              <div style={{ flex: 1, height: 6, borderRadius: 999, background: "rgba(255,255,255,0.05)", margin: "0 12px" }} />
              <div style={{ fontSize: "0.6rem", color: "rgba(148,163,184,0.25)", fontFamily: "'Sora',sans-serif" }}>memory.app</div>
            </div>

            {/* Signup visual */}
            {activeStep === 0 && (
              <div className="panel-body">
                <div className="sv-card">
                  <div className="sv-top" />
                  <div className="sv-body">
                    <div className="sv-logo">
                      <svg style={{ width: 16, height: 16, color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="sv-title">Create your account</div>
                    <div className="sv-sub">Join Memory — your second brain</div>
                    <div className="sv-field">Choose a username…</div>
                    <div className="sv-field">Create a password…</div>
                    <div className="sv-btn">Create account →</div>
                  </div>
                </div>
                <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 20 }}>
                  {["No credit card", "Free forever", "Instant access"].map((t, i) => (
                    <div key={i} style={{ fontSize: "0.62rem", color: "rgba(148,163,184,0.35)", fontFamily: "'Sora',sans-serif", display: "flex", alignItems: "center", gap: 4 }}>
                      <div style={{ width: 4, height: 4, borderRadius: 99, background: "#6366f1" }} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add content visual */}
            {activeStep === 1 && (
              <div className="panel-body">
                <div className="av-modal">
                  <div className="av-header">Add Content</div>
                  <div className="av-sub">Save a link to your second brain</div>
                  <div className="av-types">
                    <div className="av-type" style={{ background: "rgba(255,60,60,0.1)", border: "1px solid rgba(255,60,60,0.25)", color: "#fca5a5" }}>
                      <svg style={{ width: 10, height: 10 }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                      </svg>
                      YouTube
                    </div>
                    <div className="av-type" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(148,163,184,0.4)" }}>
                      <svg style={{ width: 9, height: 9 }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter
                    </div>
                  </div>
                  <div className="av-field">My fav tutorial</div>
                  <div className="av-field" style={{ color: "#818cf8", borderColor: "rgba(99,102,241,0.3)" }}>
                    youtube.com/watch?v=…
                  </div>
                  <div className="av-save">+ Save Content</div>
                </div>
              </div>
            )}

            {/* Browse visual */}
            {activeStep === 2 && (
              <div>
                <div className="bv-topbar-strip">
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 5, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
                    <span style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.7rem", fontFamily: "'Sora',sans-serif" }}>Memory</span>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ padding: "3px 10px", borderRadius: 6, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", fontSize: "0.6rem", fontWeight: 600, color: "white", fontFamily: "'Sora',sans-serif" }}>+ Add</div>
                    <div style={{ padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "0.6rem", color: "rgba(148,163,184,0.5)", fontFamily: "'Sora',sans-serif" }}>Share</div>
                  </div>
                </div>
                <div className="bv-layout">
                  <div className="bv-sidebar">
                    {[false, true, false, false, false].map((a, i) => (
                      <div key={i} className={`bv-nav ${a ? "act" : ""}`} />
                    ))}
                  </div>
                  <div className="bv-cards">
                    <div className="bv-card">
                      <div className="bv-card-top">
                        <div className="bv-badge" style={{ background: "rgba(255,60,60,0.15)", border: "1px solid rgba(255,60,60,0.2)" }} />
                        <div style={{ display: "flex", gap: 4 }}>
                          {[0,1,2].map(i => <div key={i} style={{ width: 16, height: 16, borderRadius: 4, background: "rgba(255,255,255,0.04)" }} />)}
                        </div>
                      </div>
                      <div style={{ padding: "0 8px 4px", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)", width: "70%", margin: "0 8px 8px" }} />
                      <div className="bv-embed">
                        <svg style={{ width: 16, height: 16, color: "#ff4444" }} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="bv-card" style={{ opacity: 0.6 }}>
                      <div className="bv-card-top">
                        <div className="bv-badge" style={{ background: "rgba(29,161,242,0.12)" }} />
                      </div>
                      <div style={{ margin: "0 8px 8px", height: 28, borderRadius: 5, background: "rgba(29,161,242,0.05)", border: "1px solid rgba(29,161,242,0.1)" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Share visual */}
            {activeStep === 3 && (
              <div>
                <div className="shv-topbar">
                  <div style={{ fontSize: "0.7rem", color: "#f1f5f9", fontFamily: "'Sora',sans-serif", fontWeight: 600 }}>My Brain</div>
                  <button className="shv-btn">Share Brain</button>
                </div>
                <div className="shv-body">
                  <div style={{ fontSize: "0.68rem", color: "rgba(148,163,184,0.4)", fontFamily: "'Sora',sans-serif" }}>Your shareable link</div>
                  <div className="shv-link-row">
                    <svg style={{ width: 11, height: 11, color: "#818cf8", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0 0a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="shv-link-text">memory.app/brain/akshat</span>
                    <button className="shv-copy">Copy</button>
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(148,163,184,0.3)", fontFamily: "'Sora',sans-serif" }}>Preview — what others see</div>
                  <div className="shv-preview">
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
                      <div style={{ height: 6, width: 60, borderRadius: 3, background: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <div className="shv-line" style={{ width: "90%" }} />
                    <div className="shv-line" style={{ width: "70%" }} />
                    <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ flex: 1, height: 36, borderRadius: 7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="section-divider" style={{ margin: "0 48px 0" }} />

        {/* Full journey vertical timeline */}
        <div className="full-journey">
          <h2 className="fj-title">The full journey at a glance</h2>
          <div className="fj-line">
            {steps.map((s, i) => (
              <div className="fj-item" key={i} onClick={() => setActiveStep(i)}
                style={{ cursor: "pointer" }}>
                <div className="fj-dot" style={{ borderColor: s.color, boxShadow: `0 0 8px rgba(${s.colorRgb},0.4)` }} />
                <div className="fj-content">
                  <div className="fj-step-label" style={{ color: s.color }}>{s.number} — {s.subtitle}</div>
                  <div className="fj-step-title">{s.title}</div>
                  <div className="fj-step-desc">{s.desc.slice(0, 100)}…</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" />

        {/* FAQ */}
        <div className="faq-section">
          <h2 className="faq-title">Questions you might have</h2>
          {[
            { q: "Do I need to pay anything?", a: "Not at all. Memory is completely free. Create an account, save unlimited content, and share your brain — zero cost." },
            { q: "What types of content can I save?", a: "Right now Memory supports YouTube videos and Twitter/X posts. Both embed natively in your dashboard. More content types are coming soon." },
            { q: "Is my content private?", a: "Yes. All your saved content is private by default and secured with JWT authentication. Only you can see it unless you explicitly hit Share Brain." },
            { q: "Can I delete saved content?", a: "Absolutely. Every card has a delete button. Your collection is completely in your control." },
            { q: "How does sharing work?", a: "Clicking Share Brain generates a unique public link to your collection. Anyone with the link can view it in read-only mode — no account needed on their end." },
            { q: "Can I use it on my phone?", a: "Yes! Memory is fully responsive and works beautifully on mobile, tablet, and desktop." },
          ].map((faq, i) => {
            const [open, setOpen] = useState(false)
            return (
              <div className="faq-item" key={i} onClick={() => setOpen(!open)}>
                <div className="faq-q">
                  {faq.q}
                  <svg className={`faq-chevron ${open ? "open" : ""}`} style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {open && <div className="faq-a">{faq.a}</div>}
              </div>
            )
          })}
        </div>

        <div className="section-divider" />

        {/* CTA */}
        <div className="bottom-cta">
          <div className="bottom-cta-card">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "4px 12px", borderRadius: 999,
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
              fontSize: "0.68rem", fontWeight: 600, color: "#a5b4fc",
              letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 22,
              fontFamily: "'Sora', sans-serif"
            }}>
              You're ready
            </div>
            <div className="cta-title">Now you know<br />how it works.</div>
            <p className="cta-sub">
              Four steps. Under a minute to set up.<br />
              Your second brain is waiting.
            </p>
            <div>
              <button className="btn-primary" onClick={() => navigate("/signup")}>
                Create your brain →
              </button>
              <button className="btn-ghost" onClick={() => navigate("/features")}>
                Explore features
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

export default HowItWorks
