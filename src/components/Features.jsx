import { Briefcase, ListChecks, Notebook, LayoutDashboard } from 'lucide-react';

const features = [
  {
    title: 'Project Management',
    description:
      'Structure initiatives with roadmaps, milestones, and owners. Keep every document, task, and update in one tidy hub.',
    icon: Briefcase,
    color: 'from-indigo-500 to-cyan-500',
  },
  {
    title: 'Task Management',
    description:
      'Plan sprints with Kanban, calendar, and list views. Prioritize, assign, and track progress effortlessly.',
    icon: ListChecks,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Note Management',
    description:
      'Capture ideas, meeting minutes, and specs with rich notes. Organize with tags and lightning-fast search.',
    icon: Notebook,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Personal Dashboard',
    description:
      'One glance view of priorities, deadlines, and recent activity. Widgets adapt to how you work best.',
    icon: LayoutDashboard,
    color: 'from-amber-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to ship fast</h2>
          <p className="mt-3 text-muted-foreground">
            A unified workspace that scales from solo makers to high-performing teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-lg`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
