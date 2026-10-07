import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { galleryImages } from '../data/content';
import { RevealText } from '../components/ui/Reveal';
import { cn } from '../utils/cn';
import type { GalleryImage } from '../types';

const categories: (GalleryImage['category'] | 'All')[] = ['All', 'Hotel', 'Rooms', 'Dining', 'Spa', 'Experiences'];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <Layout>
      <section className="pt-28 pb-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">Visual Story</p>
        <h1 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy-deep)] mb-10">
          <RevealText text="Gallery" />
        </h1>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'text-xs uppercase tracking-wide px-5 py-2.5 rounded-full border transition-colors',
                filter === cat
                  ? 'bg-[color:var(--color-navy-deep)] text-white border-[color:var(--color-navy-deep)]'
                  : 'border-[color:var(--color-navy-deep)]/15 text-[color:var(--color-navy-deep)] hover:border-[color:var(--color-gold-champagne)]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setLightboxImg(img)}
                className="block w-full aspect-[4/5] rounded-2xl overflow-hidden group relative"
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[color:var(--color-navy-deep)]/0 group-hover:bg-[color:var(--color-navy-deep)]/20 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs uppercase tracking-wide">{img.category}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[color:var(--color-navy-deep)]/95 flex items-center justify-center px-6"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setLightboxImg(null)} aria-label="Close">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightboxImg.url}
              alt={lightboxImg.alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
