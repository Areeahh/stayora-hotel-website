import { LayoutGrid, CalendarCheck, Heart, User, Settings, LogOut } from 'lucide-react';

const ITEMS = [
  { key: 'overview', label: 'Overview', icon: LayoutGrid },
  { key: 'bookings', label: 'My Bookings', icon: CalendarCheck },
  { key: 'saved', label: 'Saved Rooms', icon: Heart },
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar({ active, onChange }: { active: string; onChange: (k: string) => void }) {
  return (
    <aside className="bg-[color:var(--color-navy-deep)] text-[color:var(--color-warm-white)] rounded-3xl p-6 h-fit sticky top-28">
      <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
        <div className="w-11 h-11 rounded-full bg-[color:var(--color-gold-champagne)] flex items-center justify-center font-display text-lg text-[color:var(--color-navy-deep)]">
          A
        </div>
        <div>
          <p className="text-sm">Amara Whitfield</p>
          <p className="text-[10px] text-white/50 uppercase tracking-wide">Gold Member</p>
        </div>
      </div>

      <nav className="space-y-1">
        {ITEMS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
              active === key ? 'bg-[color:var(--color-gold-champagne)] text-[color:var(--color-navy-deep)]' : 'text-white/75 hover:bg-white/5'
            }`}
          >
            <Icon className="w-4 h-4" /> {label}
          </button>
        ))}
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/50 hover:bg-white/5 mt-4">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </nav>
    </aside>
  );
}
