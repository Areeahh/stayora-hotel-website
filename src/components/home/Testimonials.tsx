import { Star } from 'lucide-react';
import { Reveal, RevealText } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    quote: 'Every detail at Stayora felt intentional — from the scent in the lobby to the view from our terrace. It redefined what a hotel stay could feel like.',
    name: 'Amara Whitfield',
    role: 'Royal Ocean Suite',
  },
  {
    quote: 'The service was quietly attentive, never intrusive. We left feeling like we had discovered somewhere truly special.',
    name: 'Julian Cross',
    role: 'Presidential Suite',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--color-warm-white)]">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <Reveal>
          <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">
            Guest Stories
          </p>
        </Reveal>
        <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy-deep)] mb-10">
          <RevealText text="Moments Worth Remembering" />
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(7,26,43,0.06)]">
                <div className="flex gap-1 mb-4 text-[color:var(--color-gold-champagne)]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-display text-xl text-[color:var(--color-navy-deep)] italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <p className="text-sm text-[color:var(--color-navy-deep)] font-medium">{t.name}</p>
                <p className="text-xs text-[color:var(--color-gray-subtle)]">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80"
        alt="Stayora suite terrace"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[color:var(--color-navy-deep)]/75" />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-[color:var(--color-warm-white)]">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-balance">
            Your Extraordinary Stay Awaits
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[color:var(--color-warm-white)]/75 mb-10">
            Reserve your room today and experience Stayora's signature blend of elegance and warmth.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Button variant="primary" size="lg" icon onClick={() => navigate('/booking')}>
            Book Your Stay
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
