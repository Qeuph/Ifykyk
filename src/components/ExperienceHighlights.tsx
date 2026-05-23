import { BarChart3, Rocket, ShieldCheck, TimerReset } from 'lucide-react';

const items = [
  {
    icon: TimerReset,
    title: 'Faster from idea to publish',
    description: 'New adaptive presets, tuned controls, and deterministic run settings make iterations predictable and much quicker for teams.'
  },
  {
    icon: BarChart3,
    title: 'Operational transparency',
    description: 'Workflow monitoring cards now highlight throughput, reliability, and handoff confidence so teams can spot bottlenecks earlier.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-ready governance',
    description: 'Security and compliance messaging is now clearer and mapped to practical controls stakeholders actually ask for in reviews.'
  },
  {
    icon: Rocket,
    title: 'Better onboarding experience',
    description: 'The site flow now guides users through capabilities, demos, proof points, pricing, and FAQ with less friction and clearer CTAs.'
  }
];

export default function ExperienceHighlights() {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">Platform Upgrades // 2026</p>
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight mb-4">Built for serious production teams</h2>
          <p className="text-zinc-400 text-sm md:text-base">We redesigned key surfaces to improve conversion, readability, and execution confidence while preserving the premium visual identity.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, description }) => (
            <article key={title} className="glow-card rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-luxury-neon-blue" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
