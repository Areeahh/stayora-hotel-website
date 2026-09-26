import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Minus, Plus } from 'lucide-react';

interface GuestState {
  adults: number;
  children: number;
  rooms: number;
}

export function GuestSelector({ value, onChange, dark = false }: { value: GuestState; onChange: (v: GuestState) => void; dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const rows: { key: keyof GuestState; label: string; min: number }[] = [
    { key: 'adults', label: 'Adults', min: 1 },
    { key: 'children', label: 'Children', min: 0 },
    { key: 'rooms', label: 'Rooms', min: 1 },
  ];

  const textColor = dark ? 'text-[color:var(--color-warm-white)]' : 'text-[color:var(--color-navy-deep)]';

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between text-left ${textColor}`}
      >
        <span className="text-sm">
          {value.adults} Adult{value.adults > 1 ? 's' : ''}
          {value.children > 0 ? `, ${value.children} Child${value.children > 1 ? 'ren' : ''}` : ''} · {value.rooms} Room{value.rooms > 1 ? 's' : ''}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute z-30 top-full mt-3 left-0 w-72 bg-[color:var(--color-warm-white)] rounded-2xl shadow-2xl p-5 border border-[color:var(--color-gold-champagne)]/25"
          >
            {rows.map((row) => (
              <div key={row.key} className="flex items-center justify-between py-2.5">
                <span className="text-sm text-[color:var(--color-navy-deep)]">{row.label}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onChange({ ...value, [row.key]: Math.max(row.min, value[row.key] - 1) })}
                    className="w-7 h-7 rounded-full border border-[color:var(--color-navy-deep)]/20 flex items-center justify-center hover:border-[color:var(--color-gold-champagne)] hover:text-[color:var(--color-gold-champagne)] transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-4 text-center text-sm text-[color:var(--color-navy-deep)]">{value[row.key]}</span>
                  <button
                    type="button"
                    onClick={() => onChange({ ...value, [row.key]: value[row.key] + 1 })}
                    className="w-7 h-7 rounded-full border border-[color:var(--color-navy-deep)]/20 flex items-center justify-center hover:border-[color:var(--color-gold-champagne)] hover:text-[color:var(--color-gold-champagne)] transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
