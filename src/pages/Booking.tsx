import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Download, ArrowLeft, ArrowRight, CreditCard, Lock } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { BookingProgress } from '../components/booking/BookingProgress';
import { GuestSelector } from '../components/booking/GuestSelector';
import { Button } from '../components/ui/Button';
import { rooms, getRoomById } from '../data/rooms';
import { formatCurrency, nightsBetween } from '../utils/cn';
import type { BookingDetails } from '../types';

const countries = ['United States', 'United Kingdom', 'United Arab Emirates', 'Pakistan', 'France', 'Germany', 'Australia', 'Japan'];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [bookingId] = useState(() => `STY-${Math.floor(100000 + Math.random() * 900000)}`);

  const [details, setDetails] = useState<BookingDetails>({
    roomId: searchParams.get('room') ?? rooms[0].id,
    checkIn: searchParams.get('checkIn') ?? '',
    checkOut: searchParams.get('checkOut') ?? '',
    adults: Number(searchParams.get('adults')) || 2,
    children: Number(searchParams.get('children')) || 0,
    rooms: Number(searchParams.get('rooms')) || 1,
    fullName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: '',
  });

  const room = getRoomById(details.roomId) ?? rooms[0];
  const nights = nightsBetween(details.checkIn, details.checkOut) || 1;
  const subtotal = nights * room.pricePerNight;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const stepVariants = {
    enter: { opacity: 0, x: 24 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  };

  return (
    <Layout hideFooter>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-28 min-h-screen">
        <h1 className="font-display text-4xl text-center text-[color:var(--color-navy-deep)] mb-14">
          Complete Your Reservation
        </h1>

        <BookingProgress current={step} />

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="room" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-6">Choose Your Room</h2>
              <div className="space-y-4">
                {rooms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setDetails({ ...details, roomId: r.id })}
                    className={`w-full flex items-center gap-5 p-4 rounded-2xl border text-left transition-colors ${
                      details.roomId === r.id ? 'border-[color:var(--color-gold-champagne)] bg-[color:var(--color-gold-champagne)]/5' : 'border-[color:var(--color-navy-deep)]/10 hover:border-[color:var(--color-gold-champagne)]/50'
                    }`}
                  >
                    <img src={r.images[0]} alt={r.name} className="w-24 h-20 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-[color:var(--color-navy-deep)]">{r.name}</h3>
                      <p className="text-xs text-[color:var(--color-gray-subtle)]">{r.bed} · {r.guests} Guests · {r.tagline}</p>
                    </div>
                    <p className="font-display text-lg text-[color:var(--color-navy-deep)]">{formatCurrency(r.pricePerNight)}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="details" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-6">Your Details</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name">
                  <input value={details.fullName} onChange={(e) => setDetails({ ...details, fullName: e.target.value })} className="input-field" placeholder="Alexandra Reyes" />
                </Field>
                <Field label="Email">
                  <input type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} className="input-field" placeholder="you@email.com" />
                </Field>
                <Field label="Phone">
                  <input value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} className="input-field" placeholder="+1 (555) 000-0000" />
                </Field>
                <Field label="Country">
                  <select value={details.country} onChange={(e) => setDetails({ ...details, country: e.target.value })} className="input-field">
                    <option value="">Select country</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </Field>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="stay" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-6">Stay Details</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field label="Check-in">
                  <input type="date" value={details.checkIn} onChange={(e) => setDetails({ ...details, checkIn: e.target.value })} className="input-field" />
                </Field>
                <Field label="Check-out">
                  <input type="date" value={details.checkOut} onChange={(e) => setDetails({ ...details, checkOut: e.target.value })} className="input-field" />
                </Field>
              </div>
              <Field label="Guests">
                <div className="input-field">
                  <GuestSelector
                    value={{ adults: details.adults, children: details.children, rooms: details.rooms }}
                    onChange={(v) => setDetails({ ...details, ...v })}
                  />
                </div>
              </Field>
              <div className="mt-5">
                <Field label="Special Requests">
                  <textarea
                    value={details.specialRequests}
                    onChange={(e) => setDetails({ ...details, specialRequests: e.target.value })}
                    className="input-field h-24 resize-none"
                    placeholder="Late check-in, anniversary celebration, dietary preferences..."
                  />
                </Field>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="payment" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
              <h2 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-6">Payment</h2>

              <div className="bg-white rounded-2xl p-6 border border-[color:var(--color-navy-deep)]/10 mb-6 space-y-2 text-sm text-[color:var(--color-navy-deep)]/80">
                <div className="flex justify-between"><span>{room.name} × {nights} night{nights > 1 ? 's' : ''}</span><span>{formatCurrency(subtotal)}</span></div>
                <div className="flex justify-between"><span>Taxes & fees</span><span>{formatCurrency(taxes)}</span></div>
                <div className="flex justify-between font-display text-lg text-[color:var(--color-navy-deep)] pt-2 border-t border-[color:var(--color-navy-deep)]/10">
                  <span>Total</span><span>{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="grid gap-5">
                <Field label="Card Number">
                  <div className="input-field flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[color:var(--color-gray-subtle)]" />
                    <input defaultValue="4242 4242 4242 4242" className="bg-transparent outline-none flex-1" />
                  </div>
                </Field>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Expiry"><input defaultValue="12/28" className="input-field" /></Field>
                  <Field label="CVC"><input defaultValue="123" className="input-field" /></Field>
                </div>
              </div>
              <p className="flex items-center gap-2 text-xs text-[color:var(--color-gray-subtle)] mt-4">
                <Lock className="w-3.5 h-3.5" /> This is a demo payment form — no real transaction will be processed.
              </p>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="confirmed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </motion.div>
              <h2 className="font-display text-3xl text-[color:var(--color-navy-deep)] mb-2">Reservation Confirmed</h2>
              <p className="text-[color:var(--color-gray-subtle)] mb-10 font-display italic text-lg">Your Stayora experience awaits.</p>

              <div className="bg-white rounded-2xl p-8 border border-[color:var(--color-gold-champagne)]/25 text-left max-w-md mx-auto space-y-3 mb-10">
                <SummaryRow label="Booking ID" value={bookingId} />
                <SummaryRow label="Guest" value={details.fullName || 'Guest'} />
                <SummaryRow label="Room" value={room.name} />
                <SummaryRow label="Dates" value={`${details.checkIn || 'TBD'} → ${details.checkOut || 'TBD'}`} />
                <SummaryRow label="Guests" value={`${details.adults} Adults, ${details.children} Children`} />
                <SummaryRow label="Total" value={formatCurrency(total)} bold />
                <div className="pt-3 border-t border-[color:var(--color-navy-deep)]/10 text-xs text-[color:var(--color-gray-subtle)]">
                  Stayora Resort & Spa · 1 Ocean Boulevard, Coral Bay
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline"><Download className="w-4 h-4 mr-1" /> Download Confirmation</Button>
                <Button variant="primary" onClick={() => navigate('/dashboard')}>View My Booking</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 4 && (
          <div className="flex justify-between mt-12">
            <Button variant="ghost" onClick={back} disabled={step === 0} className={step === 0 ? 'opacity-0 pointer-events-none' : ''}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
            <Button variant="primary" onClick={next}>
              {step === 3 ? 'Confirm & Pay' : 'Continue'} <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>

      <style>{`
        .input-field {
          width: 100%;
          background: white;
          border: 1px solid rgba(7,26,43,0.12);
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          font-size: 0.875rem;
          color: var(--color-navy-deep);
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus {
          border-color: var(--color-gold-champagne);
        }
      `}</style>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-2">{label}</label>
      {children}
    </div>
  );
}

function SummaryRow({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-[color:var(--color-gray-subtle)]">{label}</span>
      <span className={bold ? 'font-display text-lg text-[color:var(--color-navy-deep)]' : 'text-[color:var(--color-navy-deep)]'}>{value}</span>
    </div>
  );
}
