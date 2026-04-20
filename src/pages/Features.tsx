import { useNavigate } from "react-router-dom"

export const Features = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#07070f] text-slate-100 font-[Sora] overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="fixed -top-[200px] -left-[200px] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[90px] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_65%)]" />
      <div className="fixed bottom-0 -right-[150px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-[90px] bg-[radial-gradient(circle,rgba(139,92,246,0.09)_0%,transparent_65%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-12 py-3 sm:py-4 bg-[#07070f]/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-white">Memory</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="text-xs sm:text-sm text-slate-400 hover:text-white px-3 py-1 rounded-md hover:bg-white/5" onClick={() => navigate("/")}>Home</button>
          <button className="text-xs sm:text-sm text-indigo-300 px-3 py-1 rounded-md bg-white/5">Features</button>
          <button className="text-xs sm:text-sm text-slate-400 hover:text-white px-3 py-1 rounded-md hover:bg-white/5" onClick={() => navigate("/signin")}>Sign in</button>
          <button className="text-xs sm:text-sm text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md hover:-translate-y-[1px] transition" onClick={() => navigate("/signup")}>
            Get started →
          </button>
        </div>
      </nav>

      <div className="pt-[120px] sm:pt-[160px] px-4 sm:px-12 text-center max-w-[900px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-[10px] sm:text-xs uppercase tracking-widest mb-6">
          Everything Memory can do
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif leading-tight mb-5">
          Built for how your<br />
          <span className="italic bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            brain actually works
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-[560px] mx-auto leading-relaxed mb-10">
          Every feature in Memory is designed to make saving and rediscovering knowledge effortless.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center border border-white/10 rounded-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {[
            { num: "2", label: "Platforms" },
            { num: "∞", label: "Content" },
            { num: "1", label: "Click" },
            { num: "0", label: "Ads" },
          ].map((s, i) => (
            <div key={i} className="px-6 py-4 text-center">
              <div className="text-2xl font-serif text-white">{s.num}</div>
              <div className="text-xs text-slate-500 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-12 py-12 sm:py-20 space-y-16">

        {[
          {
            title: "Paste a link. It's in your brain.",
            desc: "No tagging, no folders, no friction.",
          },
          {
            title: "Videos that live in your brain.",
            desc: "YouTube videos embed directly.",
          },
          {
            title: "Tweets saved with context.",
            desc: "Twitter threads fully preserved.",
          },
          {
            title: "Your brain shared in one link.",
            desc: "Share everything instantly.",
          },
        ].map((f, i) => (
          <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
            <div>
              <div className="text-xs text-indigo-400 mb-2 uppercase tracking-widest">0{i + 1}</div>
              <h2 className="text-xl sm:text-2xl font-serif mb-3">{f.title}</h2>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
            <div className="h-[200px] sm:h-[260px] rounded-xl bg-white/5 border border-white/10" />
          </div>
        ))}

      </div>

      <div className="px-4 sm:px-12 pb-16">
        <div className="max-w-[700px] mx-auto text-center p-8 rounded-2xl bg-white/5 border border-indigo-500/20">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">Your second brain awaits</h2>
          <p className="text-sm text-slate-400 mb-6">Start building your knowledge base today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-violet-500" onClick={() => navigate("/signup")}>
              Create →
            </button>
            <button className="px-6 py-3 rounded-lg text-slate-300 bg-white/5 border border-white/10" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        </div>
      </div>

      <div className="text-center py-6 border-t border-white/10 text-xs text-slate-500">
        Made by Akshat Chitransh
      </div>

    </div>
  )
}

export default Features