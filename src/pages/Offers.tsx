import { Layout } from '../components/layout/Layout';
import { offers } from '../data/content';
import { Reveal, RevealText } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export default function Offers() {
  return (
    <Layout>
      <section className="pt-32 pb-20 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-gold-champagne)] mb-4">Exclusive</p>
        <h1 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy-deep)]">
          <RevealText text="Offers & Packages" />
        </h1>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-28 grid md:grid-cols-3 gap-8">
        {offers.map((offer, i) => (
          <Reveal key={offer.id} delay={i * 0.1}>
            <div className="group rounded-3xl overflow-hidden bg-white shadow-[0_10px_40px_rgba(7,26,43,0.06)] h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={offer.image} alt={offer.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute top-4 right-4 bg-[color:var(--color-gold-champagne)] text-[color:var(--color-navy-deep)] text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
                  {offer.discount}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-[color:var(--color-navy-deep)] mb-3">{offer.name}</h3>
                <p className="text-sm text-[color:var(--color-gray-subtle)] mb-6 flex-1">{offer.description}</p>
                <Button variant="secondary" size="sm">Book This Offer</Button>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
}
