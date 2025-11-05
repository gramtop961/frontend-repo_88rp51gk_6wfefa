import { Briefcase, ListChecks, Notebook, LayoutDashboard, MoreHorizontal, CalendarDays } from 'lucide-react';

const features = [
  {
    title: 'Project Management',
    description:
      'Plan roadmaps, milestones, and owners. Keep every document, task, and update in one hub.',
    icon: Briefcase,
  },
  {
    title: 'Task Management',
    description:
      'Kanban, calendar, and list views to plan sprints, prioritize, and track progress.',
    icon: ListChecks,
  },
  {
    title: 'Note Management',
    description:
      'Capture ideas and meeting notes with tags and lightning-fast search.',
    icon: Notebook,
  },
  {
    title: 'Personal Dashboard',
    description:
      'A focused view of priorities, deadlines, and recent activity tailored to you.',
    icon: LayoutDashboard,
  },
];

function Card({ children }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card text-card-foreground shadow-sm">
      {children}
    </div>
  );
}

function HeaderBar({ title }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
      <div className="text-sm font-medium text-muted-foreground">{title}</div>
      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Feature list */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built to be clear and fast</h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need without the clutter.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border/60 bg-muted/10 p-5 hover:bg-muted/20 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Minimal live previews */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Management preview */}
          <Card>
            <HeaderBar title="Projects" />
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Roadmap', 'Website Redesign', 'Mobile App', 'Marketing'].map((p) => (
                <div key={p} className="rounded-lg border border-border/60 bg-background p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{p}</span>
                    <span className="text-muted-foreground">4 owners</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded bg-muted">
                    <div className="h-2 rounded bg-primary/80" style={{ width: `${40 + Math.random()*50}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Task Management preview (Kanban + Calendar switch) */}
          <Card>
            <HeaderBar title="Sprint Tasks" />
            <div className="p-4">
              <div className="mb-4 flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded border border-border/60 px-2 py-1 text-muted-foreground">
                  <ListChecks className="h-3 w-3" /> Board
                </span>
                <span className="inline-flex items-center gap-1 rounded border border-border/60 px-2 py-1 text-muted-foreground">
                  <CalendarDays className="h-3 w-3" /> Calendar
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Backlog', 'In Progress', 'Done'].map((c, i) => (
                  <div key={c} className="rounded-lg border border-border/60 bg-background p-3">
                    <div className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">{c}</div>
                    {[1,2,3].slice(0, 2 + (i%2)).map((n) => (
                      <div key={n} className="mb-2 last:mb-0 rounded-md border border-border/60 bg-muted/20 px-3 py-2 text-sm">
                        Task #{i+1}-{n}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Note Management preview */}
          <Card>
            <HeaderBar title="Notes" />
            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Sprint Retro", "Meeting Notes", "Feature Spec", "Ideas", "Research", "Checklist"].map((n) => (
                <div key={n} className="rounded-lg border border-border/60 bg-background p-3">
                  <div className="h-24 rounded bg-muted/20" />
                  <div className="mt-2 text-sm font-medium">{n}</div>
                  <div className="text-xs text-muted-foreground">Edited 2d ago</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Personal Dashboard preview */}
          <Card>
            <HeaderBar title="My Dashboard" />
            <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <div className="text-xs text-muted-foreground">Today</div>
                <div className="mt-2 text-2xl font-semibold">5 tasks</div>
              </div>
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <div className="text-xs text-muted-foreground">Upcoming</div>
                <div className="mt-2 text-2xl font-semibold">3 deadlines</div>
              </div>
              <div className="rounded-lg border border-border/60 bg-background p-4">
                <div className="text-xs text-muted-foreground">Focus</div>
                <div className="mt-2 space-y-2">
                  {['Write spec', 'Review PRs', 'Team sync'].map((t) => (
                    <div key={t} className="rounded-md border border-border/60 bg-muted/20 px-3 py-2 text-sm">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
