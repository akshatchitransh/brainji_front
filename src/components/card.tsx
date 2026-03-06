import { Shareicon } from "../icons/shareicon"

interface Cardprops {
  title: string
  link: string
  type: "youtube" | "Twitter"
}

export const Card = (props: Cardprops) => {
  const isYoutube = props.type === "youtube"
  const isTwitter = props.type === "Twitter"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .content-card {
          font-family: 'Sora', system-ui, sans-serif;
          animation: cardIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.06),
            0 8px 32px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.05);
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .content-card:hover {
          transform: translateY(-2px);
          border-color: rgba(99,102,241,0.2);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.12),
            0 16px 40px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .card-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(148,163,184,0.6);
          transition: all 0.15s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .card-icon-btn:hover {
          background: rgba(99,102,241,0.12);
          border-color: rgba(99,102,241,0.3);
          color: #a5b4fc;
        }

        .type-badge-yt {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          padding: 3px 9px;
          border-radius: 999px;
          background: rgba(255,60,60,0.1);
          border: 1px solid rgba(255,60,60,0.22);
          color: #fca5a5;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .type-badge-tw {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          padding: 3px 9px;
          border-radius: 999px;
          background: rgba(29,161,242,0.1);
          border: 1px solid rgba(29,161,242,0.22);
          color: #7dd3fc;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .card-embed {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(0,0,0,0.3);
        }

        .card-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);
          margin: 0 -1px;
        }
      `}</style>

      <div className="content-card rounded-2xl w-72 overflow-hidden">

        {/* Top accent line */}
        <div className="h-px w-full" style={{
          background: isYoutube
            ? "linear-gradient(to right, transparent, rgba(255,60,60,0.5), transparent)"
            : "linear-gradient(to right, transparent, rgba(29,161,242,0.5), transparent)"
        }} />

        {/* Header */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-start justify-between gap-3">

            {/* Left: badge + title */}
            <div className="flex flex-col gap-2 min-w-0">
              {isYoutube && (
                <span className="type-badge-yt">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                  YouTube
                </span>
              )}
              {isTwitter && (
                <span className="type-badge-tw">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </span>
              )}
              <p className="text-sm font-medium text-slate-200 leading-snug truncate max-w-[160px]" title={props.title}>
                {props.title}
              </p>
            </div>

            {/* Right: action icons */}
            <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
              {/* Open link */}
              <a href={props.link} target="_blank" rel="noreferrer" className="card-icon-btn">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {/* Share */}
              <button className="card-icon-btn">
                <Shareicon />
              </button>
              {/* Delete / more */}
              <button className="card-icon-btn">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="card-divider" />

        {/* Embed area */}
        {isYoutube && (
          <div className="p-3">
            <div className="card-embed">
              <iframe
                width="100%"
                height="158"
                src={props.link
                  .replace("watch?v=", "embed/")
                  .replace("youtu.be/", "www.youtube.com/embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ display: "block" }}
              />
            </div>
          </div>
        )}

        {isTwitter && (
          <div className="px-3 pb-3 pt-2">
            <div className="card-embed px-3 py-2"
              style={{ background: "rgba(29,161,242,0.04)", borderColor: "rgba(29,161,242,0.12)" }}>
              <blockquote className="twitter-tweet" data-theme="dark" style={{ margin: 0 }}>
                <a href={props.link.replace("x.com", "twitter.com")} />
              </blockquote>
            </div>
          </div>
        )}

        {/* Bottom accent */}
        <div className="h-px w-full" style={{
          background: isYoutube
            ? "linear-gradient(to right, transparent, rgba(255,60,60,0.15), transparent)"
            : "linear-gradient(to right, transparent, rgba(29,161,242,0.15), transparent)"
        }} />
      </div>
    </>
  )
}
