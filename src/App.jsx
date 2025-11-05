import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="cta" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted/10 p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Launch your workspace in minutes
              </h3>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Bring your projects, tasks, and notes together. Collaborate in real time and stay on top of what matters.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition">
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
