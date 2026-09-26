import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Search, User } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Dining', to: '/dining' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Offers', to: '/offers' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const dark = scrolled || !isHome;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          dark ? 'glass-dark py-4 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' : 'py-7'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-[0.15em] text-[color:var(--color-warm-white)]">
            STAYORA
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'gold-underline text-[11px] tracking-[0.18em] uppercase text-[color:var(--color-warm-white)]/85 hover:text-[color:var(--color-gold-soft)] transition-colors',
                  location.pathname === link.to && 'text-[color:var(--color-gold-soft)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <button aria-label="Search" className="text-[color:var(--color-warm-white)]/80 hover:text-[color:var(--color-gold-soft)] transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <Link to="/login" className="flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-[color:var(--color-warm-white)]/85 hover:text-[color:var(--color-gold-soft)] transition-colors">
              <User className="w-4 h-4" /> Login
            </Link>
            <Button variant="primary" size="sm" onClick={() => navigate('/booking')}>
              Book Now
            </Button>
          </div>

          <button className="lg:hidden text-[color:var(--color-warm-white)]" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[color:var(--color-navy-deep)] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-7">
              <span className="font-display text-2xl tracking-[0.15em] text-[color:var(--color-warm-white)]">STAYORA</span>
              <button onClick={() => setOpen(false)} className="text-[color:var(--color-warm-white)]" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link to={link.to} className="font-display text-4xl text-[color:var(--color-warm-white)] hover:text-[color:var(--color-gold-soft)] transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-4 pt-6">
                <Button variant="primary" onClick={() => navigate('/booking')}>Book Now</Button>
                <Button variant="outline" className="text-[color:var(--color-warm-white)]" onClick={() => navigate('/login')}>Login</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
