import { Layout } from '../components/layout/Layout';
import { restaurants } from '../data/content';
import { Reveal, RevealText } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Clock } from 'lucide-react';

export default function Dining() {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80" alt="Dining" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)] via-[color:var(--color-navy-deep)]/40 to-[color:var(--color-navy-deep)]/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-[color:var(--color-warm-white)]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-gold-soft)] mb-4">Culinary</p>
          <h1 className="font-display text-5xl md:text-6xl"><RevealText text="Dining at Stayora" /></h1>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8">
          {restaurants.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.08}>
              <div className="group rounded-3xl overflow-hidden bg-white shadow-[0_10px_40px_rgba(7,26,43,0.06)]">
                <div className="h-64 overflow-hidden">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-gold-champagne)] mb-2">{r.cuisine}</p>
                  <h3 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-3">{r.name}</h3>
                  <p className="text-sm text-[color:var(--color-gray-subtle)] mb-4">{r.description}</p>
                  <p className="flex items-center gap-2 text-xs text-[color:var(--color-navy-deep)]/70 mb-6">
                    <Clock className="w-3.5 h-3.5" /> {r.hours}
                  </p>
                  <Button variant="outline" size="sm">Reserve a Table</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
