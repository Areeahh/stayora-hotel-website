import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { BookingSearch } from '../components/booking/BookingSearch';
import { Introduction } from '../components/home/Introduction';
import { RoomsPreview, ExperiencesTeaser } from '../components/home/HomeSections';
import { Testimonials, FinalCta } from '../components/home/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <BookingSearch />
      <Introduction />
      <RoomsPreview />
      <ExperiencesTeaser />
      <Testimonials />
      <FinalCta />
    </Layout>
  );
}
