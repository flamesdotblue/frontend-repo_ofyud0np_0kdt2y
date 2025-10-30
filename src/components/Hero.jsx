import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden" aria-label="Hero">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0F] to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs">Interactive 3D • Glass UI • Ultra Smooth</span>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            A Million‑Dollar Look,
            <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Engineered for Speed
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Experience a next‑gen landing experience with glassmorphism, immersive
            3D, and silky animations that feel as premium as they look.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#features"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              Explore Features
            </a>
            <a
              href="#get-started"
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/40"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
