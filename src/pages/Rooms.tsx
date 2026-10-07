import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { rooms } from '../data/rooms';
import { RoomCard } from '../components/rooms/RoomCard';
import { FilterPanel, type RoomFilters } from '../components/rooms/FilterPanel';
import { RevealText } from '../components/ui/Reveal';

type SortOption = 'recommended' | 'price-asc' | 'price-desc';

export default function Rooms() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<RoomFilters>({ maxPrice: 1200, category: 'all', minGuests: 1 });
  const [sort, setSort] = useState<SortOption>('recommended');

  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');

  const filteredRooms = useMemo(() => {
    let result = rooms.filter(
      (r) =>
        r.pricePerNight <= filters.maxPrice &&
        (filters.category === 'all' || r.category === filters.category) &&
        r.guests >= filters.minGuests
    );
    if (sort === 'price-asc') result = [...result].sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.pricePerNight - a.pricePerNight);
    return result;
  }, [filters, sort]);

  return (
    <Layout>
      <section className="relative h-[45vh] min-h-[380px] flex items-end pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611048268330-53de574cae3b?auto=format&fit=crop&w=1600&q=80"
          alt="Stayora rooms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-deep)] via-[color:var(--color-navy-deep)]/40 to-[color:var(--color-navy-deep)]/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-[color:var(--color-warm-white)]">
          <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-soft)] mb-2">Accommodations</p>
          <h1 className="font-display text-5xl md:text-6xl"><RevealText text="Rooms & Suites" /></h1>
          {checkIn && checkOut && (
            <p className="mt-4 text-sm text-[color:var(--color-warm-white)]/75">
              Showing availability for {checkIn} → {checkOut}
            </p>
          )}
        </div>
      </section>

      <section className="py-20 bg-[color:var(--color-gray-subtle)]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[280px_1fr] gap-10">
          <FilterPanel filters={filters} onChange={setFilters} />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <p className="text-sm text-[color:var(--color-gray-subtle)]">{filteredRooms.length} rooms found</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="bg-white border border-[color:var(--color-navy-deep)]/10 rounded-full px-5 py-2.5 text-sm text-[color:var(--color-navy-deep)] outline-none focus:border-[color:var(--color-gold-champagne)]"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {filteredRooms.length === 0 ? (
              <div className="text-center py-24 text-[color:var(--color-gray-subtle)]">
                No rooms match your filters. Try adjusting your search.
              </div>
            ) : (
              <motion.div layout className="grid md:grid-cols-2 gap-8">
                {filteredRooms.map((room, i) => (
                  <RoomCard room={room} key={room.id} index={i} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
