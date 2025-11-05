import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24">
      {/* Spline as full-width cover background */}
      <div className="relative h-[56vh] sm:h-[64vh] lg:h-[72vh] w-full overflow-hidden rounded-none border-b border-border/50">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay below cover */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-10">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              A minimalist workspace for projects, tasks, and notes
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
              FlowForge keeps your projects organized, your tasks actionable, and your notes searchable — all from a clean, modern dashboard.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition">
                Start free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-border/60 bg-transparent px-6 py-3 text-sm font-medium hover:bg-muted/10 transition">
                See features
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {['No credit card required', 'Fast, minimal UI', 'Kanban & calendar views', 'Real-time sync'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
