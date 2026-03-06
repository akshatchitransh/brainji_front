import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossIcon";
import { Backend_URI } from "../config";
import axios from "axios";

interface modalprops {
  open: boolean;
  varchange: (a: boolean) => void;
}

enum contentType {
  "Youtube" = "youtube",
  "Twitter" = "twitter",
}

export const CreateContentModal = (props: modalprops) => {
  const handleclose = () => props.varchange(false);

  const [type, setType] = useState(contentType.Youtube);
  const [loading, setLoading] = useState(false);
  const titleref = useRef<HTMLInputElement | null>(null);
  const roleref = useRef<HTMLInputElement | null>(null);

  async function addContent() {
    const title = titleref.current?.value;
    const link = roleref.current?.value;
    setLoading(true);
    await axios.post(
      `${Backend_URI}/api/auth/content`,
      { link, title, type },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    setLoading(false);
    props.varchange(false);
  }

  if (!props.open) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');

        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .modal-backdrop {
          animation: backdropIn 0.2s ease both;
        }
        .modal-card {
          font-family: 'Sora', system-ui, sans-serif;
          animation: modalIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.08),
            0 32px 64px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .modal-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 11px 14px;
          font-size: 0.875rem;
          color: #f1f5f9;
          font-family: 'Sora', system-ui, sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          caret-color: #818cf8;
        }
        .modal-input::placeholder { color: rgba(148,163,184,0.38); }
        .modal-input:focus {
          border-color: rgba(99,102,241,0.55);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.11), 0 0 18px rgba(99,102,241,0.09);
        }

        /* Type toggle buttons */
        .type-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.18s ease;
          position: relative;
          overflow: hidden;
        }
        .type-btn-active-yt {
          background: rgba(255, 0, 0, 0.12);
          border-color: rgba(255, 60, 60, 0.35);
          color: #fca5a5;
          box-shadow: 0 0 16px rgba(255,60,60,0.12);
        }
        .type-btn-active-tw {
          background: rgba(29, 161, 242, 0.12);
          border-color: rgba(29, 161, 242, 0.35);
          color: #7dd3fc;
          box-shadow: 0 0 16px rgba(29,161,242,0.12);
        }
        .type-btn-inactive {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
          color: rgba(148,163,184,0.7);
        }
        .type-btn-inactive:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          color: #cbd5e1;
        }

        /* Submit button */
        .submit-btn {
          background-size: 200% auto;
          background-image: linear-gradient(
            110deg,
            #6366f1 0%, #818cf8 40%, #a5b4fc 50%, #818cf8 60%, #6366f1 100%
          );
          border-radius: 12px;
          padding: 11px 0;
          width: 100%;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: 'Sora', system-ui, sans-serif;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(99,102,241,0.28), inset 0 1px 0 rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .submit-btn:hover:not(:disabled) {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(99,102,241,0.42), inset 0 1px 0 rgba(255,255,255,0.12);
        }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        .btn-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.65s linear infinite;
        }

        .close-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 6px;
          cursor: pointer;
          color: rgba(148,163,184,0.6);
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,80,80,0.1);
          border-color: rgba(255,80,80,0.25);
          color: #fca5a5;
        }

        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(5,5,15,0.75)", backdropFilter: "blur(4px)" }}
        onClick={handleclose}
      >
        {/* Card — stop click from closing */}
        <div
          className="modal-card relative w-full max-w-md rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent line */}
          <div className="h-px w-full" style={{
            background: "linear-gradient(to right, transparent, #6366f1, #8b5cf6, transparent)"
          }} />

          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <div>
              <h2 className="text-base font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>
                Add Content
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Save a link to your second brain</p>
            </div>
            <button className="close-btn" onClick={handleclose}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="divider mx-6" />

          {/* Body */}
          <div className="px-6 py-5 space-y-5">

            {/* Type selector */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-slate-400 tracking-widest uppercase">
                Content Type
              </label>
              <div className="flex gap-2">
                {/* YouTube */}
                <button
                  className={`type-btn flex-1 ${type === contentType.Youtube ? "type-btn-active-yt" : "type-btn-inactive"}`}
                  onClick={() => setType(contentType.Youtube)}
                >
                  {/* YouTube icon */}
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                  YouTube
                </button>

                {/* Twitter / X */}
                <button
                  className={`type-btn flex-1 ${type === contentType.Twitter ? "type-btn-active-tw" : "type-btn-inactive"}`}
                  onClick={() => setType(contentType.Twitter)}
                >
                  {/* X icon */}
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </button>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-slate-400 tracking-widest uppercase">
                Title
              </label>
              <input
                ref={titleref}
                placeholder="Give it a name…"
                type="text"
                className="modal-input"
              />
            </div>

            {/* Link */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-slate-400 tracking-widest uppercase">
                Link
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0 0a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <input
                  ref={roleref}
                  placeholder="Paste URL here…"
                  type="text"
                  className="modal-input"
                  style={{ paddingLeft: "36px" }}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-1">
              <button className="submit-btn" onClick={addContent} disabled={loading}>
                {loading ? (
                  <>
                    <span className="btn-spinner" />
                    Saving…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 4v16m8-8H4" />
                    </svg>
                    Save Content
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-px mx-0" style={{
            background: "linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)"
          }} />
        </div>
      </div>
    </>
  );
};
