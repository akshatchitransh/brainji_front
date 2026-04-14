import axios from "axios"
import { Card } from "../components/card"
import { CreateContentModal } from "../components/CreateContentModal"
import { Sidebar } from "../components/sidebar"
import { useContent } from "../hooks/useContent"
import { Shareicon } from "../icons/shareicon"
import { StartIcon } from "../icons/startIcon"

const handleDelete = async (title: string) => {
  try {
    await axios.delete(`${Backend_URI}/api/auth/delete`, {
      data: { title },   
    });
  } catch (err) {
    console.log(err);
  }
};
import { useState } from "react"
import { Backend_URI } from "../config"


export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const contents = useContent()

  const youtubeCount = contents.filter(c => c.type === "youtube").length
  const twitterCount = contents.filter(c => c.type === "Twitter").length

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .dashboard-root {
          font-family: 'Sora', system-ui, sans-serif;
          min-height: 100vh;
          background: #0a0a12;
          display: flex;
          overflow: hidden;
        }

        /* ── Background blobs ── */
        .bg-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Main content area ── */
       .main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow-y: auto;
  margin-left: 220px; 
}

        /* ── Top bar ── */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(10,10,18,0.8);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .topbar-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }
        .topbar-sub {
          font-size: 0.75rem;
          color: rgba(148,163,184,0.5);
          margin-top: 1px;
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ── Action buttons ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .btn-add {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 11px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          cursor: pointer;
          border: none;
          color: white;
          background-size: 200% auto;
          background-image: linear-gradient(110deg, #6366f1 0%, #818cf8 40%, #a5b4fc 50%, #818cf8 60%, #6366f1 100%);
          box-shadow: 0 4px 16px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.25s ease;
        }
        .btn-add:hover {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(99,102,241,0.42);
        }
        .btn-add:active { transform: translateY(0); }

        .btn-share {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 11px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          cursor: pointer;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #cbd5e1;
          transition: all 0.2s ease;
        }
        .btn-share:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(139,92,246,0.4);
          color: #e2e8f0;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }

        /* ── Stat chips ── */
        .stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 500;
          font-family: 'Sora', system-ui, sans-serif;
          border: 1px solid transparent;
        }
        .stat-chip-total {
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.18);
          color: #a5b4fc;
        }
        .stat-chip-yt {
          background: rgba(255,60,60,0.08);
          border-color: rgba(255,60,60,0.18);
          color: #fca5a5;
        }
        .stat-chip-tw {
          background: rgba(29,161,242,0.08);
          border-color: rgba(29,161,242,0.2);
          color: #7dd3fc;
        }

        /* ── Content section ── */
        .content-section {
          padding: 24px 28px 48px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .section-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(148,163,184,0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          align-items: flex-start;
        }

        /* ── Empty state ── */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          text-align: center;
          gap: 12px;
          opacity: 0.6;
        }
        .empty-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
        }
        .empty-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #94a3b8;
        }
        .empty-sub {
          font-size: 0.8rem;
          color: rgba(148,163,184,0.45);
          max-width: 260px;
          line-height: 1.6;
        }

        /* ── Footer ── */
        .dash-footer {
          padding: 16px 28px;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-text {
          font-size: 0.72rem;
          color: rgba(148,163,184,0.25);
          letter-spacing: 0.04em;
        }

        /* dot-grid */
        .dot-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.03;
          background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
          background-size: 32px 32px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cards-grid > * {
          animation: fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .cards-grid > *:nth-child(1) { animation-delay: 0.05s; }
        .cards-grid > *:nth-child(2) { animation-delay: 0.1s; }
        .cards-grid > *:nth-child(3) { animation-delay: 0.15s; }
        .cards-grid > *:nth-child(4) { animation-delay: 0.2s; }
        .cards-grid > *:nth-child(5) { animation-delay: 0.25s; }
        .cards-grid > *:nth-child(6) { animation-delay: 0.3s; }
      `}</style>

      <div className="dashboard-root">

        {/* Background effects */}
        <div className="dot-grid" />
        <div className="bg-blob" style={{
          width: 500, height: 500,
          top: -100, left: -100,
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }} />
        <div className="bg-blob" style={{
          width: 500, height: 500,
          bottom: -100, right: -100,
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }} />

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div className="main-area">

          {/* Top bar */}
          <div className="topbar">
            <div>
              <div className="topbar-title">Second Brain</div>
              <div className="topbar-sub">Your personal knowledge base</div>
            </div>

            {/* Stats + actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {/* Stat chips */}
              <div style={{ display: "flex", gap: 8 }}>
                <span className="stat-chip stat-chip-total">
                  <svg className="w-3 h-3" style={{ width: 12, height: 12 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {contents.length} total
                </span>
                {youtubeCount > 0 && (
                  <span className="stat-chip stat-chip-yt">
                    <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                    </svg>
                    {youtubeCount}
                  </span>
                )}
                {twitterCount > 0 && (
                  <span className="stat-chip stat-chip-tw">
                    <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    {twitterCount}
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="topbar-actions">
                <button className="btn-add" onClick={() => setModalOpen(true)}>
                  <StartIcon />
                  Add Content
                </button>
                <button className="btn-share">
                  <Shareicon />
                  Share Brain
                </button>
              </div>
            </div>
          </div>

          {/* Cards area */}
          <div className="content-section">
            <div className="section-header">
              <span className="section-label">
                {contents.length > 0 ? `${contents.length} item${contents.length !== 1 ? "s" : ""} saved` : "Your collection"}
              </span>
            </div>

            {contents.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="empty-title">Nothing saved yet</div>
                <div className="empty-sub">Add your first YouTube video or Tweet to start building your second brain.</div>
                <button className="btn-add" style={{ marginTop: 4 }} onClick={() => setModalOpen(true)}>
                  <StartIcon />
                  Add your first item
                </button>
              </div>
            ) : (
              <div className="cards-grid">
                {contents.map(({ type, link, title }, i) => (
                  <Card key={i} title={title} link={link} type={type} onDelete={handleDelete}  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="dash-footer">
            <span className="footer-text">Made by Akshat Chitransh</span>
          </div>
        </div>

        {/* Modal */}
        <CreateContentModal open={modalOpen} varchange={setModalOpen} />
      </div>
    </>
  )
}

export default Dashboard
