import { SlidersHorizontal } from 'lucide-react';

export interface RoomFilters {
  maxPrice: number;
  category: string;
  minGuests: number;
}

export function FilterPanel({ filters, onChange }: { filters: RoomFilters; onChange: (f: RoomFilters) => void }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(7,26,43,0.06)] sticky top-28">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="w-4 h-4 text-[color:var(--color-gold-champagne)]" />
        <h3 className="text-sm uppercase tracking-wide text-[color:var(--color-navy-deep)]">Filter Rooms</h3>
      </div>

      <div className="mb-7">
        <p className="text-xs text-[color:var(--color-gray-subtle)] mb-3">Max Price / Night</p>
        <input
          type="range"
          min={300}
          max={1200}
          step={50}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-[color:var(--color-gold-champagne)]"
        />
        <p className="text-sm text-[color:var(--color-navy-deep)] mt-1">Up to ${filters.maxPrice}</p>
      </div>

      <div className="mb-7">
        <p className="text-xs text-[color:var(--color-gray-subtle)] mb-3">Room Type</p>
        <div className="flex flex-col gap-2">
          {['all', 'deluxe', 'suite', 'presidential'].map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm text-[color:var(--color-navy-deep)] capitalize cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => onChange({ ...filters, category: cat })}
                className="accent-[color:var(--color-gold-champagne)]"
              />
              {cat === 'all' ? 'All Rooms' : cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-[color:var(--color-gray-subtle)] mb-3">Minimum Guests</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((g) => (
            <button
              key={g}
              onClick={() => onChange({ ...filters, minGuests: g })}
              className={`w-9 h-9 rounded-full text-sm border transition-colors ${
                filters.minGuests === g
                  ? 'bg-[color:var(--color-navy-deep)] text-white border-[color:var(--color-navy-deep)]'
                  : 'border-[color:var(--color-navy-deep)]/15 text-[color:var(--color-navy-deep)] hover:border-[color:var(--color-gold-champagne)]'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
