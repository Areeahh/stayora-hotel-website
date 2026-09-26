import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function RoomGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setActive((a) => (a + 1) % images.length);
  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[480px] rounded-3xl overflow-hidden">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 row-span-2 relative overflow-hidden group"
          onClick={() => { setActive(0); setLightbox(true); }}
        >
          <img src={images[0]} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.button>
        {images.slice(1, 5).map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden group"
            onClick={() => { setActive(i + 1); setLightbox(true); }}
          >
            <img src={img} alt={`${name} ${i + 2}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[color:var(--color-navy-deep)]/95 flex items-center justify-center px-6"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setLightbox(false)} aria-label="Close">
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-6 md:left-12 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[active]}
              alt={name}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-6 md:right-12 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
