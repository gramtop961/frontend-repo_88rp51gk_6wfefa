import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Run your work on one beautiful, fast dashboard
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              FlowForge is the modern workspace for teams. Plan projects, manage tasks, capture notes, and get a personal overview — all in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:brightness-110 transition">
                Start free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                See features
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {['No credit card required', 'Unlimited notes', 'Kanban & calendar views', 'Real-time sync'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
