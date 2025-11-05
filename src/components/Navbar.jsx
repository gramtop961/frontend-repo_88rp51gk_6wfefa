import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-lg">FlowForge</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition">Features</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition">Pricing</a>
            <a href="#cta" className="text-foreground/80 hover:text-foreground transition">Get Started</a>
            <a href="#" className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition">Sign in</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 transition" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <a href="#features" className="block rounded-md px-3 py-2 hover:bg-white/10">Features</a>
              <a href="#pricing" className="block rounded-md px-3 py-2 hover:bg-white/10">Pricing</a>
              <a href="#cta" className="block rounded-md px-3 py-2 hover:bg-white/10">Get Started</a>
              <a href="#" className="block rounded-md px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10">Sign in</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
