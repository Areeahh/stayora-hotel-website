import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { GuestSelector } from './GuestSelector';
import { Button } from '../ui/Button';

export function BookingSearch() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });

  const handleSubmit = () => {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(guests.adults),
      children: String(guests.children),
      rooms: String(guests.rooms),
    });
    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 max-w-5xl mx-auto -mt-16 md:-mt-20 px-4"
    >
      <div className="glass rounded-2xl md:rounded-full shadow-[0_20px_60px_rgba(7,26,43,0.35)] p-6 md:p-3 md:pl-9">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 md:divide-x divide-white/15">
          <div className="flex-1 md:pr-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-gold-soft)] mb-1.5">Check-in</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[color:var(--color-warm-white)]/60" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-sm text-[color:var(--color-warm-white)] outline-none w-full [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="flex-1 md:px-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-gold-soft)] mb-1.5">Check-out</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[color:var(--color-warm-white)]/60" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-sm text-[color:var(--color-warm-white)] outline-none w-full [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="flex-1 md:px-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-gold-soft)] mb-1.5">Guests</p>
            <GuestSelector value={guests} onChange={setGuests} dark />
          </div>

          <div className="md:pl-6">
            <Button variant="primary" size="md" className="w-full md:w-auto" onClick={handleSubmit}>
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
