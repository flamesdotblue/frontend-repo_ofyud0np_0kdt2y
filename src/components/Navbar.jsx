import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-violet-600 text-white shadow-lg shadow-fuchsia-500/30">
                <Rocket size={20} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">AstraGlass</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-white/70">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#get-started" className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20 transition-colors border border-white/15">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
