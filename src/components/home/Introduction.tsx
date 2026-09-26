import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal, RevealText } from '../ui/Reveal';

export function Introduction() {
  return (
    <section className="py-28 md:py-36 bg-[color:var(--color-warm-white)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden h-[420px] md:h-[560px] order-2 lg:order-1"
        >
          <img
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
            alt="Stayora hotel architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border border-white/10" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-gold-champagne)] mb-5">
              Welcome to Stayora
            </p>
          </Reveal>
          <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy-deep)] leading-tight mb-6 text-balance">
            <RevealText text="Where timeless elegance meets modern hospitality." />
          </h2>
          <Reveal delay={0.15}>
            <p className="text-[color:var(--color-gray-subtle)] leading-relaxed mb-8 max-w-lg">
              Stayora is a sanctuary for those who seek more than a place to stay. Set along the coast,
              our resort blends architectural refinement with warm, intuitive service — every room, every
              gathering space, and every quiet corner considered down to the last detail. This is hospitality
              reimagined for the modern traveler who values both comfort and craft.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-[color:var(--color-navy-deep)] gold-underline group"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-[color:var(--color-navy-deep)]/10">
            {[
              { value: '48', label: 'Rooms & Suites' },
              { value: '4.9', label: 'Guest Rating' },
              { value: '12', label: 'Years of Service' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-[color:var(--color-navy-deep)]">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
