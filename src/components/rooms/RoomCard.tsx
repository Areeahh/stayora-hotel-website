import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BedDouble, Users, Eye, ArrowRight } from 'lucide-react';
import type { Room } from '../../types';
import { formatCurrency } from '../../utils/cn';

const availabilityLabel: Record<Room['availability'], { text: string; className: string }> = {
  available: { text: 'Available', className: 'bg-emerald-500/15 text-emerald-700' },
  limited: { text: 'Limited Availability', className: 'bg-amber-500/15 text-amber-700' },
  'sold-out': { text: 'Sold Out', className: 'bg-red-500/10 text-red-600' },
};

export function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  const badge = availabilityLabel[room.availability];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(7,26,43,0.06)] hover:shadow-[0_25px_60px_rgba(7,26,43,0.14)] transition-shadow duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)]/50 via-transparent to-transparent" />
        <span className={`absolute top-4 left-4 text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full ${badge.className} backdrop-blur-sm`}>
          {badge.text}
        </span>
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[color:var(--color-gold-champagne)] group-hover:w-full transition-all duration-700 ease-out" />
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-2xl text-[color:var(--color-navy-deep)] transition-transform duration-300 group-hover:translate-x-1">
            {room.name}
          </h3>
        </div>
        <p className="text-sm text-[color:var(--color-gray-subtle)] mb-5">{room.description}</p>

        <div className="flex items-center gap-4 text-[color:var(--color-navy-mid)]/70 text-xs mb-6">
          <span className="flex items-center gap-1.5"><BedDouble className="w-3.5 h-3.5" /> {room.bed}</span>
          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {room.guests} Guests</span>
          <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> {room.tagline}</span>
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-[color:var(--color-navy-deep)]/8">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-[color:var(--color-gray-subtle)]">From</p>
            <p className="font-display text-2xl text-[color:var(--color-navy-deep)]">
              {formatCurrency(room.pricePerNight)} <span className="text-xs font-body text-[color:var(--color-gray-subtle)]">/ night</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={`/rooms/${room.id}`}
              className="text-[11px] tracking-[0.12em] uppercase gold-underline text-[color:var(--color-navy-deep)]"
            >
              View Room
            </Link>
            <Link
              to={`/booking?room=${room.id}`}
              className="w-9 h-9 rounded-full bg-[color:var(--color-navy-deep)] text-white flex items-center justify-center group-hover:bg-[color:var(--color-gold-champagne)] group-hover:text-[color:var(--color-navy-deep)] transition-colors"
              aria-label="Book Now"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
