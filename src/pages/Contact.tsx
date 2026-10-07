import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Reveal, RevealText } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <Layout>
      <section className="pt-28 pb-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="text-2xl md:text-3xl tracking-[0.08em] uppercase font-extrabold text-[color:var(--color-gold-champagne)] mb-2">Get in Touch</p>
        <h1 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy-deep)]">
          <RevealText text="Contact Stayora" />
        </h1>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-28 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <div className="space-y-8">
            {[
              { icon: MapPin, label: 'Address', value: '1 Ocean Boulevard, Coral Bay, 20481' },
              { icon: Phone, label: 'Phone', value: '+1 (800) 555-0192' },
              { icon: Mail, label: 'Email', value: 'reservations@stayora.com' },
              { icon: Clock, label: 'Front Desk Hours', value: 'Available 24 Hours' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[color:var(--color-gold-champagne)]/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-[color:var(--color-gold-champagne)]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-[color:var(--color-gray-subtle)] mb-1">{item.label}</p>
                  <p className="text-[color:var(--color-navy-deep)]">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="h-64 rounded-2xl overflow-hidden bg-[color:var(--color-navy-deep)]/5 flex items-center justify-center border border-[color:var(--color-navy-deep)]/10">
              <span className="text-sm text-[color:var(--color-gray-subtle)]">Map Placeholder — Coral Bay, Stayora Resort</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(7,26,43,0.06)] space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input placeholder="Full Name" className="contact-input" />
              <input placeholder="Email Address" type="email" className="contact-input" />
            </div>
            <input placeholder="Subject" className="contact-input" />
            <textarea placeholder="Your Message" rows={5} className="contact-input resize-none" />
            <Button variant="primary" className="w-full">Send Message</Button>
          </form>
        </Reveal>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          border: 1px solid rgba(7,26,43,0.12);
          border-radius: 0.85rem;
          padding: 0.9rem 1.1rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-input:focus {
          border-color: #C9A45C;
        }
      `}</style>
    </Layout>
  );
}
