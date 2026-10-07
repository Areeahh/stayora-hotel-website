import { Link } from 'react-router-dom';
import { Camera, Users, MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const LINKS = ['Rooms', 'Experiences', 'Dining', 'Gallery', 'Offers', 'Contact'];

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-navy-deep)] text-[color:var(--color-warm-white)] pt-24 pb-10 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1.4fr] gap-14 pb-16 border-b border-white/10">
            <div>
              <h3 className="font-display text-4xl tracking-[0.1em] mb-4">STAYORA</h3>
              <p className="text-[color:var(--color-gray-subtle)] font-light italic font-display text-lg">
                Luxury, thoughtfully designed.
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">Explore</p>
              <ul className="space-y-3">
                {LINKS.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="gold-underline text-sm text-[color:var(--color-warm-white)]/80 hover:text-[color:var(--color-gold-soft)] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">
                Stay in the know
              </p>
              <p className="text-sm text-[color:var(--color-warm-white)]/70 mb-5 max-w-sm">
                Be the first to hear about seasonal offers, new experiences, and exclusive events.
              </p>
              <form className="flex items-center border-b border-white/25 pb-3 max-w-sm group focus-within:border-[color:var(--color-gold-champagne)] transition-colors">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent flex-1 outline-none text-sm placeholder:text-white/40"
                />
                <button aria-label="Subscribe" className="text-[color:var(--color-gold-champagne)]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="flex gap-4 mt-7">
                <Camera className="w-4 h-4 text-white/60 hover:text-[color:var(--color-gold-soft)] transition-colors cursor-pointer" />
                <Users className="w-4 h-4 text-white/60 hover:text-[color:var(--color-gold-soft)] transition-colors cursor-pointer" />
                <MessageCircle className="w-4 h-4 text-white/60 hover:text-[color:var(--color-gold-soft)] transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] tracking-wide text-white/40">
          <p>© {new Date().getFullYear()} Stayora Hospitality Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white/70 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
