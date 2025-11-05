import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-lg">FlowForge</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition">Features</a>
            <a href="#cta" className="text-foreground/80 hover:text-foreground transition">Get Started</a>
            <a href="#" className="rounded-md border border-border/60 bg-transparent px-4 py-2 text-sm font-medium hover:bg-muted/20 transition">Sign in</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted/20 transition" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <a href="#features" className="block rounded-md px-3 py-2 hover:bg-muted/20">Features</a>
              <a href="#cta" className="block rounded-md px-3 py-2 hover:bg-muted/20">Get Started</a>
              <a href="#" className="block rounded-md px-3 py-2 border border-border/60 hover:bg-muted/20">Sign in</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
