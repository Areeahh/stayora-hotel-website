import { Layout } from '../components/layout/Layout';
import { experiences } from '../data/content';
import { Reveal, RevealText } from '../components/ui/Reveal';

export default function Experiences() {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1600&q=80" alt="Experiences" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)] via-[color:var(--color-navy-deep)]/40 to-[color:var(--color-navy-deep)]/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-[color:var(--color-warm-white)]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-gold-soft)] mb-4">Curated Living</p>
          <h1 className="font-display text-5xl md:text-6xl"><RevealText text="Experiences" /></h1>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id}>
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="rounded-3xl overflow-hidden h-80 lg:h-[420px] [direction:ltr]">
                  <img src={exp.image} alt={exp.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="[direction:ltr]">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-gold-champagne)] mb-4">{exp.category}</p>
                  <h2 className="font-display text-3xl md:text-4xl text-[color:var(--color-navy-deep)] mb-5">{exp.name}</h2>
                  <p className="text-[color:var(--color-gray-subtle)] leading-relaxed max-w-lg">{exp.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
