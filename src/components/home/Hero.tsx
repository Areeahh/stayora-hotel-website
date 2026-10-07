import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { RevealText } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex items-end pb-40 md:pb-48">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1920&q=80"
          alt="Stayora resort at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)] via-[color:var(--color-navy-deep)]/30 to-[color:var(--color-navy-deep)]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-navy-deep)]/40 via-transparent to-transparent" />
      </motion.div>

      <div
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E2C98A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold text-[color:var(--color-gold-soft)] mb-6"
        >
          Escape The Ordinary
        </motion.p>

        <h1 className="font-display text-[color:var(--color-warm-white)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 max-w-4xl text-balance">
          <RevealText text="Stay Somewhere" delay={0.3} />
          <br />
          <RevealText text="Extraordinary." delay={0.55} className="text-[color:var(--color-gold-soft)] italic" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[color:var(--color-warm-white)]/75 text-base md:text-lg max-w-md mb-10 font-light"
        >
          Discover refined comfort, breathtaking spaces, and unforgettable experiences at Stayora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="primary" size="lg" icon onClick={() => navigate('/rooms')}>
            Explore Rooms
          </Button>
          <Button variant="glass" size="lg" onClick={() => navigate('/booking')}>
            Book Your Stay
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.6, duration: 1 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[color:var(--color-warm-white)]/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
