import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, Check, BedDouble, Users, Maximize, Eye } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { getRoomById, rooms } from '../data/rooms';
import { RoomGallery } from '../components/rooms/RoomGallery';
import { GuestSelector } from '../components/booking/GuestSelector';
import { Button } from '../components/ui/Button';
import { Reveal, RevealText } from '../components/ui/Reveal';
import { formatCurrency, nightsBetween } from '../utils/cn';

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = getRoomById(id ?? '');

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });

  if (!room) {
    return (
      <Layout>
        <div className="max-w-xl mx-auto text-center py-40 px-6">
          <h1 className="font-display text-3xl text-[color:var(--color-navy-deep)] mb-4">Room Not Found</h1>
          <Link to="/rooms" className="text-sm gold-underline text-[color:var(--color-navy-deep)]">Back to all rooms</Link>
        </div>
      </Layout>
    );
  }

  const nights = nightsBetween(checkIn, checkOut) || 1;
  const subtotal = nights * room.pricePerNight;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const handleReserve = () => {
    const params = new URLSearchParams({
      room: room.id,
      checkIn,
      checkOut,
      adults: String(guests.adults),
      children: String(guests.children),
      rooms: String(guests.rooms),
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-24">
        <Reveal>
          <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">
            {room.category}
          </p>
        </Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <h1 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy-deep)]">
            <RevealText text={room.name} />
          </h1>
          <div className="flex items-center gap-1.5 text-[color:var(--color-gold-champagne)]">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-[color:var(--color-navy-deep)] font-medium">{room.rating}</span>
            <span className="text-sm text-[color:var(--color-gray-subtle)]">({room.reviews} reviews)</span>
          </div>
        </div>

        <Reveal delay={0.1}>
          <RoomGallery images={room.images} name={room.name} />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_380px] gap-14 mt-14">
          <div>
            <Reveal>
              <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-[color:var(--color-navy-deep)]/10 text-sm text-[color:var(--color-navy-deep)]">
                <span className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-[color:var(--color-gold-champagne)]" /> {room.bed}</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[color:var(--color-gold-champagne)]" /> {room.guests} Guests</span>
                <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-[color:var(--color-gold-champagne)]" /> {room.size}</span>
                <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-[color:var(--color-gold-champagne)]" /> {room.view}</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-4">About This Room</h2>
              <p className="text-[color:var(--color-gray-subtle)] leading-relaxed mb-10">{room.longDescription}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-5">Amenities</h2>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {room.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 text-sm text-[color:var(--color-navy-deep)]/85">
                    <Check className="w-4 h-4 text-[color:var(--color-gold-champagne)] shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-4">Check-in / Check-out</h2>
              <div className="flex gap-10 text-sm text-[color:var(--color-navy-deep)]/85">
                <div><p className="text-[color:var(--color-gray-subtle)] text-xs mb-1">Check-in</p>3:00 PM</div>
                <div><p className="text-[color:var(--color-gray-subtle)] text-xs mb-1">Check-out</p>11:00 AM</div>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="sticky top-28 bg-white rounded-3xl p-7 shadow-[0_20px_60px_rgba(7,26,43,0.1)] border border-[color:var(--color-gold-champagne)]/15">
              <p className="font-display text-3xl text-[color:var(--color-navy-deep)] mb-1">
                {formatCurrency(room.pricePerNight)} <span className="text-sm font-body text-[color:var(--color-gray-subtle)]">/ night</span>
              </p>
              <p className="text-xs text-[color:var(--color-gray-subtle)] mb-6">Taxes and fees calculated at checkout</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="border border-[color:var(--color-navy-deep)]/12 rounded-xl px-3 py-2.5">
                  <p className="text-[9px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-1">Check-in</p>
                  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="text-xs w-full outline-none text-[color:var(--color-navy-deep)]" />
                </div>
                <div className="border border-[color:var(--color-navy-deep)]/12 rounded-xl px-3 py-2.5">
                  <p className="text-[9px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-1">Check-out</p>
                  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="text-xs w-full outline-none text-[color:var(--color-navy-deep)]" />
                </div>
              </div>

              <div className="border border-[color:var(--color-navy-deep)]/12 rounded-xl px-3 py-3 mb-6">
                <p className="text-[9px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-1">Guests</p>
                <GuestSelector value={guests} onChange={setGuests} />
              </div>

              <div className="space-y-2 text-sm text-[color:var(--color-navy-deep)]/80 mb-6 pb-6 border-b border-[color:var(--color-navy-deep)]/10">
                <div className="flex justify-between"><span>{formatCurrency(room.pricePerNight)} × {nights} night{nights > 1 ? 's' : ''}</span><span>{formatCurrency(subtotal)}</span></div>
                <div className="flex justify-between"><span>Taxes & fees</span><span>{formatCurrency(taxes)}</span></div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-display text-lg text-[color:var(--color-navy-deep)]">Total</span>
                <span className="font-display text-lg text-[color:var(--color-navy-deep)]">{formatCurrency(total)}</span>
              </div>

              <Button variant="primary" className="w-full" onClick={handleReserve} disabled={room.availability === 'sold-out'}>
                {room.availability === 'sold-out' ? 'Sold Out' : 'Reserve Now'}
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white p-4 border-t border-[color:var(--color-navy-deep)]/10 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
          <div>
            <p className="font-display text-xl text-[color:var(--color-navy-deep)]">{formatCurrency(room.pricePerNight)}<span className="text-xs font-body text-[color:var(--color-gray-subtle)]">/night</span></p>
          </div>
          <Button variant="primary" size="sm" onClick={handleReserve}>Reserve Now</Button>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-3xl text-[color:var(--color-navy-deep)] mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.filter((r) => r.id !== room.id).slice(0, 3).map((r) => (
              <Link key={r.id} to={`/rooms/${r.id}`} className="group block rounded-2xl overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img src={r.images[0]} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-xl text-[color:var(--color-navy-deep)]">{r.name}</h3>
                  <p className="text-sm text-[color:var(--color-gray-subtle)]">{formatCurrency(r.pricePerNight)} / night</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
