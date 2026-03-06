import type { ReactElement } from "react";

interface Buttonprops {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text?: string;
  startIcon?: any;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = (props: Buttonprops) => {
  const base = `
    relative inline-flex items-center justify-center
    font-semibold tracking-wide rounded-xl
    transition-all duration-200 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    overflow-hidden group cursor-pointer
  `;

  const sizes = {
    sm: "px-4 py-2.5 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const variants = {
    primary: "primary-btn text-white",
    secondary: "secondary-btn text-white",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ripple {
          0%   { transform: scale(0); opacity: 0.4; }
          100% { transform: scale(4); opacity: 0; }
        }

        /* ── Primary: indigo → violet shimmer ── */
        .primary-btn {
          font-family: 'Sora', system-ui, sans-serif;
          background-size: 200% auto;
          background-image: linear-gradient(
            110deg,
            #6366f1 0%,
            #818cf8 40%,
            #a5b4fc 50%,
            #818cf8 60%,
            #6366f1 100%
          );
          box-shadow:
            0 1px 0 rgba(255,255,255,0.1) inset,
            0 4px 16px rgba(99, 102, 241, 0.3);
        }
        .primary-btn:hover:not(:disabled) {
          animation: shimmer 1.6s linear infinite;
          transform: translateY(-1px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.12) inset,
            0 8px 28px rgba(99, 102, 241, 0.45);
        }
        .primary-btn:active:not(:disabled) {
          transform: translateY(0px);
          box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
        }

        /* ── Secondary: dark glass style ── */
        .secondary-btn {
          font-family: 'Sora', system-ui, sans-serif;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.06) inset,
            0 4px 16px rgba(0, 0, 0, 0.3);
          color: #e2e8f0;
        }
        .secondary-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-1px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.08) inset,
            0 8px 24px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(139, 92, 246, 0.2);
          color: #f8fafc;
        }
        .secondary-btn:active:not(:disabled) {
          transform: translateY(0px);
          background: rgba(255, 255, 255, 0.05);
        }

        /* ── Spinner ── */
        .btn-spinner {
          width: 1em;
          height: 1em;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: rgba(255,255,255,0.9);
          border-radius: 50%;
          animation: spin 0.65s linear infinite;
          flex-shrink: 0;
        }

        /* ── Shine sweep on hover ── */
        .btn-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.08) 50%,
            transparent 60%
          );
          transform: translateX(-100%);
          transition: transform 0s;
          pointer-events: none;
        }
        .primary-btn:hover .btn-shine,
        .secondary-btn:hover .btn-shine {
          transform: translateX(100%);
          transition: transform 0.5s ease;
        }
      `}</style>

      <button
        onClick={props.onClick}
        disabled={props.loading}
        className={`
          ${base}
          ${variants[props.variant]}
          ${sizes[props.size]}
          ${props.fullWidth ? "w-full" : ""}
        `}
      >
        {/* Shine sweep layer */}
        <span className="btn-shine" />

        {/* Loading spinner or start icon */}
        {props.loading ? (
          <span className="btn-spinner" />
        ) : props.startIcon ? (
          <span className="flex-shrink-0">{props.startIcon}</span>
        ) : null}

        {/* Label */}
        {props.text && (
          <span className="relative z-10">{props.text}</span>
        )}

        {/* End icon */}
        {!props.loading && props.endIcon && (
          <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {props.endIcon}
          </span>
        )}
      </button>
    </>
  );
};
