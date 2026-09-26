import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const STEPS = ['Room', 'Your Details', 'Stay Details', 'Payment', 'Confirmed'];

export function BookingProgress({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-16 px-4">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={false}
              animate={{
                backgroundColor: i < current ? '#C9A45C' : i === current ? '#071A2B' : '#ffffff',
                borderColor: i <= current ? 'transparent' : '#A7ADB3',
              }}
              className="w-9 h-9 rounded-full flex items-center justify-center border text-xs font-medium"
            >
              {i < current ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <span className={i === current ? 'text-white' : 'text-[color:var(--color-gray-subtle)]'}>{i + 1}</span>
              )}
            </motion.div>
            <span className="hidden sm:block text-[10px] uppercase tracking-wide text-[color:var(--color-navy-deep)]/70 whitespace-nowrap">
              {step}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="flex-1 h-px bg-[color:var(--color-navy-deep)]/12 mx-2 relative overflow-hidden top-[-14px] sm:top-[-14px]">
              <motion.div
                initial={false}
                animate={{ width: i < current ? '100%' : '0%' }}
                className="absolute inset-y-0 left-0 bg-[color:var(--color-gold-champagne)]"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
