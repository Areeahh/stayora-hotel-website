import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[999] bg-[color:var(--color-navy-deep)] flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl text-[color:var(--color-warm-white)] mb-8"
          >
            STAYORA
          </motion.h1>
          <div className="w-48 h-[1.5px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              className="h-full w-full bg-[color:var(--color-gold-champagne)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
