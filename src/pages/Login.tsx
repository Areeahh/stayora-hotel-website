import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80" alt="Stayora" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[color:var(--color-navy-deep)]/40" />
        <Link to="/" className="absolute top-10 left-10 font-display text-2xl tracking-[0.15em] text-white">STAYORA</Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center px-8 py-16 bg-[color:var(--color-warm-white)]"
      >
        <div className="w-full max-w-sm">
          <Link to="/" className="lg:hidden font-display text-2xl tracking-[0.15em] text-[color:var(--color-navy-deep)] mb-10 block">STAYORA</Link>
          <h1 className="font-display text-3xl text-[color:var(--color-navy-deep)] mb-2">Welcome Back</h1>
          <p className="text-sm text-[color:var(--color-gray-subtle)] mb-10">Sign in to manage your reservations.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-2">Email</label>
              <input type="email" placeholder="you@email.com" className="auth-input" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-2">Password</label>
              <input type="password" placeholder="••••••••" className="auth-input" />
            </div>
            <div className="flex items-center justify-between text-xs text-[color:var(--color-navy-deep)]/70">
              <label className="flex items-center gap-2"><input type="checkbox" className="accent-[color:var(--color-gold-champagne)]" /> Remember me</label>
              <span className="gold-underline cursor-pointer">Forgot password?</span>
            </div>
            <Button variant="primary" className="w-full">Login</Button>
          </form>

          <p className="text-sm text-[color:var(--color-gray-subtle)] mt-8 text-center">
            Don't have an account? <Link to="/signup" className="text-[color:var(--color-navy-deep)] gold-underline">Sign up</Link>
          </p>
        </div>
      </motion.div>

      <style>{`
        .auth-input {
          width: 100%;
          border: 1px solid rgba(7,26,43,0.12);
          border-radius: 0.85rem;
          padding: 0.9rem 1.1rem;
          font-size: 0.875rem;
          outline: none;
          background: white;
          transition: border-color 0.2s;
        }
        .auth-input:focus { border-color: #C9A45C; }
      `}</style>
    </div>
  );
}
