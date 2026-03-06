import { TwitterIcon } from "../icons/twittericon"
import { YoutubeIcon } from "../icons/YoutubeIcon"


export const Sidebar = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

        @keyframes sidebarIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .sidebar {
          font-family: 'Sora', system-ui, sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 220px;
          display: flex;
          flex-direction: column;
          z-index: 30;
          animation: sidebarIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;

          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border-right: 1px solid rgba(255,255,255,0.07);
          box-shadow: 4px 0 32px rgba(0,0,0,0.4), inset -1px 0 0 rgba(255,255,255,0.04);
        }

        /* Logo area */
        .sidebar-logo {
          padding: 22px 20px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sidebar-logo-mark {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sidebar-logo-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(99,102,241,0.35);
          flex-shrink: 0;
        }
        .sidebar-logo-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }
        .sidebar-logo-sub {
          font-size: 0.65rem;
          color: rgba(148,163,184,0.4);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Nav section */
        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        .nav-section-label {
          font-size: 0.62rem;
          font-weight: 600;
          color: rgba(148,163,184,0.3);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 8px 8px;
        }

        /* Sidebar item override styles */
        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(148,163,184,0.65);
          cursor: pointer;
          transition: all 0.16s ease;
          border: 1px solid transparent;
          text-decoration: none;
        }
        .sidebar-nav-item:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.07);
          color: #e2e8f0;
        }
        .sidebar-nav-item.active-yt {
          background: rgba(255,60,60,0.08);
          border-color: rgba(255,60,60,0.18);
          color: #fca5a5;
        }
        .sidebar-nav-item.active-tw {
          background: rgba(29,161,242,0.08);
          border-color: rgba(29,161,242,0.2);
          color: #7dd3fc;
        }

        /* Footer */
        .sidebar-footer {
          padding: 14px 12px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .sidebar-footer-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          transition: all 0.16s ease;
        }
        .sidebar-footer-user:hover {
          background: rgba(255,255,255,0.06);
        }
        .sidebar-avatar {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .sidebar-user-name {
          font-size: 0.78rem;
          font-weight: 500;
          color: #cbd5e1;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sidebar-user-role {
          font-size: 0.65rem;
          color: rgba(148,163,184,0.4);
        }

        /* Accent line at top */
        .sidebar-top-accent {
          height: 2px;
          background: linear-gradient(to right, #6366f1, #8b5cf6, transparent);
          flex-shrink: 0;
        }
      `}</style>

      <div className="sidebar">
        {/* Top accent */}
        <div className="sidebar-top-accent" />

        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark">
            <div className="sidebar-logo-icon">
              <svg style={{ width: 18, height: 18, color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="sidebar-logo-text">Memory</div>
              <div className="sidebar-logo-sub">Second Brain</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="sidebar-nav">
          <div className="nav-section-label">Collections</div>

          {/* All content */}
          <a className="sidebar-nav-item" href="#">
            <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            All Content
          </a>

          {/* Twitter */}
          <a className="sidebar-nav-item" href="#">
            <span style={{ width: 16, height: 16, display: "flex", alignItems: "center", flexShrink: 0, color: "inherit" }}>
              <TwitterIcon />
            </span>
            Twitter
          </a>

          {/* YouTube */}
          <a className="sidebar-nav-item" href="#">
            <span style={{ width: 16, height: 16, display: "flex", alignItems: "center", flexShrink: 0, color: "inherit" }}>
              <YoutubeIcon />
            </span>
            YouTube
          </a>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "8px 4px" }} />

          <div className="nav-section-label">Manage</div>

          {/* Tags */}
          <a className="sidebar-nav-item" href="#">
            <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Tags
          </a>

          {/* Settings */}
          <a className="sidebar-nav-item" href="#">
            <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </a>
        </div>

        {/* Footer user block */}
        <div className="sidebar-footer">
          <div className="sidebar-footer-user">
            <div className="sidebar-avatar">A</div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div className="sidebar-user-name">Akshat</div>
              <div className="sidebar-user-role">Free plan</div>
            </div>
            <svg style={{ width: 14, height: 14, color: "rgba(148,163,184,0.3)", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
