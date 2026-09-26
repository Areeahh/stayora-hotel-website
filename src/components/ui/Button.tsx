import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', icon = false, className, children, ...props }: ButtonProps) {
  const base = 'relative inline-flex items-center justify-center gap-2 font-body tracking-wide uppercase transition-all duration-300 group overflow-hidden';
  const sizes = {
    sm: 'text-[11px] px-5 py-2.5',
    md: 'text-xs px-7 py-3.5',
    lg: 'text-sm px-9 py-4',
  };
  const variants = {
    primary: 'bg-[color:var(--color-gold-champagne)] text-[color:var(--color-navy-deep)] hover:bg-[color:var(--color-gold-soft)] rounded-full',
    secondary: 'bg-[color:var(--color-navy-deep)] text-[color:var(--color-warm-white)] hover:bg-[color:var(--color-navy-mid)] rounded-full',
    outline: 'border border-[color:var(--color-gold-champagne)]/60 text-current hover:border-[color:var(--color-gold-champagne)] hover:bg-[color:var(--color-gold-champagne)]/10 rounded-full',
    ghost: 'text-current hover:opacity-70',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className={cn(base, sizes[size], variants[variant], className)}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.button>
  );
}
