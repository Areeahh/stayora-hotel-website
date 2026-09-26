import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Award, Clock } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { bookings } from '../data/bookings';
import { rooms } from '../data/rooms';
import { Button } from '../components/ui/Button';
import { formatCurrency } from '../utils/cn';

const statusStyles: Record<string, string> = {
  upcoming: 'bg-emerald-500/15 text-emerald-700',
  completed: 'bg-[color:var(--color-navy-deep)]/8 text-[color:var(--color-navy-deep)]/70',
  cancelled: 'bg-red-500/10 text-red-600',
};

export default function Dashboard() {
  const [active, setActive] = useState('bookings');
  const upcoming = bookings.find((b) => b.status === 'upcoming');

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-24">
        <h1 className="font-display text-4xl text-[color:var(--color-navy-deep)] mb-10">Welcome back, Amara</h1>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          <DashboardSidebar active={active} onChange={setActive} />

          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                { label: 'Upcoming Stay', value: upcoming ? upcoming.roomName : 'None', icon: Calendar },
                { label: 'Total Bookings', value: bookings.length, icon: Clock },
                { label: 'Saved Rooms', value: 3, icon: Heart },
                { label: 'Loyalty Points', value: '4,280', icon: Award },
              ].map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(7,26,43,0.06)]"
                >
                  <card.icon className="w-5 h-5 text-[color:var(--color-gold-champagne)] mb-4" />
                  <p className="text-xl font-display text-[color:var(--color-navy-deep)] truncate">{card.value}</p>
                  <p className="text-[11px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mt-1">{card.label}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-6">My Bookings</h2>
            <div className="space-y-5">
              {bookings.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(7,26,43,0.05)] flex flex-col sm:flex-row sm:items-center gap-5"
                >
                  <img src={b.roomImage} alt={b.roomName} className="w-full sm:w-32 h-32 sm:h-24 object-cover rounded-xl" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-lg text-[color:var(--color-navy-deep)]">{b.roomName}</h3>
                      <span className={`text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full ${statusStyles[b.status]}`}>{b.status}</span>
                    </div>
                    <p className="text-sm text-[color:var(--color-gray-subtle)]">{b.checkIn} → {b.checkOut} · {b.guests} Guests · {formatCurrency(b.total)}</p>
                    <p className="text-xs text-[color:var(--color-gray-subtle)] mt-1">Booking ID: {b.id}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">View Details</Button>
                    {b.status === 'upcoming' && <Button variant="ghost" size="sm" className="text-red-500">Cancel</Button>}
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-6 mt-14">Saved Rooms</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {rooms.slice(0, 3).map((r) => (
                <div key={r.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(7,26,43,0.05)]">
                  <img src={r.images[0]} alt={r.name} className="h-32 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-display text-base text-[color:var(--color-navy-deep)]">{r.name}</h3>
                    <p className="text-xs text-[color:var(--color-gray-subtle)]">{formatCurrency(r.pricePerNight)} / night</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
