import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b12] via-[#0c0f1f] to-[#0a0b12] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="cta" className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12 text-center">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
              <h3 className="relative text-2xl sm:text-3xl font-semibold tracking-tight">
                Launch your workspace in minutes
              </h3>
              <p className="relative mt-3 text-muted-foreground max-w-2xl mx-auto">
                Bring your projects, tasks, and notes together. Collaborate in real time and stay on top of what matters.
              </p>
              <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:brightness-110 transition">
                  Create free account
                </a>
                <span className="text-xs text-muted-foreground">No credit card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
