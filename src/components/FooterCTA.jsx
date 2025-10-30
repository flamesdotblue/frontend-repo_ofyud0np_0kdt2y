export default function FooterCTA() {
  return (
    <section id="get-started" className="relative bg-[#0B0B0F] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-cyan-400/5" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.45)]">
          <h3 className="text-3xl font-bold text-white">
            Ready to launch a million‑dollar look?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Elevate your brand with a glass‑first aesthetic, interactive 3D, and
            captivating motion. Your audience won’t forget this experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/40"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} AstraGlass. All rights reserved.
        </p>
      </div>
    </section>
  );
}
