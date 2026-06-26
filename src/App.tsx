import { ArrowRight, Zap, Shield, Sparkles, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            nova<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted md:flex">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, oklch(0.72 0.17 162 / 0.25), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center md:py-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            New — v2.0 now available
          </span>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Modern solutions for <br className="hidden md:block" />
            <span className="text-accent">forward-thinking</span> businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
            We help ambitious teams design, build, and scale products that customers love —
            with clean engineering and measurable results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Services</p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Everything you need to grow
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-surface/50 p-8 transition hover:border-accent/50"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">About us</p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Built by a small team that cares about craft
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              We're a focused studio working with startups and established brands. No bloated
              processes — just thoughtful design, sharp engineering, and direct collaboration
              from first sketch to shipped product.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-surface/50 p-6">
                <div className="font-display text-3xl font-bold text-accent">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Tell us about your project. We'll get back within one business day.
          </p>
          <a
            href="mailto:hello@nova.studio"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> hello@nova.studio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
          <div>© {new Date().getFullYear()} Nova Studio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: "Lightning fast delivery",
    desc: "Ship MVPs in weeks, not quarters. We move quickly without cutting corners on quality.",
  },
  {
    icon: Sparkles,
    title: "Design that converts",
    desc: "Interfaces that feel effortless to use and look great on every device, out of the box.",
  },
  {
    icon: Shield,
    title: "Built to scale",
    desc: "Modern, reliable architecture so your product keeps performing as your audience grows.",
  },
];

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "8 yrs", label: "In business" },
  { value: "40+", label: "Happy clients" },
  { value: "99%", label: "Retention rate" },
];
