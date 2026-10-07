import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { rooms } from '../../data/rooms';
import { experiences } from '../../data/content';
import { RoomCard } from '../rooms/RoomCard';
import { Reveal, RevealText } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function RoomsPreview() {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--color-gray-subtle)]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div>
            <Reveal>
              <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">
                Accommodations
              </p>
            </Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy-deep)]">
              <RevealText text="Rooms & Suites" />
            </h2>
            <Reveal delay={0.1}>
              <p className="text-[color:var(--color-gray-subtle)] mt-4 max-w-md">
                Spaces designed for extraordinary stays.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/rooms" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wide gold-underline text-[color:var(--color-navy-deep)]">
              View All Rooms <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.slice(0, 3).map((room, i) => (
            <RoomCard room={room} key={room.id} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperiencesTeaser() {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--color-navy-deep)] text-[color:var(--color-warm-white)] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A45C 0%, transparent 70%)' }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal>
            <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">
              Curated Living
            </p>
          </Reveal>
          <h2 className="font-display text-4xl md:text-5xl">
            <RevealText text="Beyond the Room" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.slice(0, 3).map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <Link to="/experiences" className="group block relative rounded-2xl overflow-hidden h-96">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)] via-[color:var(--color-navy-deep)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[color:var(--color-gold-soft)] mb-2">{exp.category}</p>
                  <h3 className="font-display text-2xl">{exp.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/experiences">
            <Button variant="outline" className="text-[color:var(--color-warm-white)]">
              Explore All Experiences
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
