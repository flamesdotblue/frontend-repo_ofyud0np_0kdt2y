import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FooterCTA from "./components/FooterCTA";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B0F] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
