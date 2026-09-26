import type { Experience, Restaurant, Offer, GalleryImage } from '../types';

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const experiences: Experience[] = [
  {
    id: 'spa',
    name: 'The Spa at Stayora',
    description: 'A sanctuary of stillness featuring hydrotherapy pools, private treatment suites, and bespoke rituals inspired by ancient wellness traditions.',
    image: img('photo-1540541338287-41700207dee6'),
    category: 'Wellness',
  },
  {
    id: 'private-beach',
    name: 'Private Beach',
    description: 'Half a mile of private shoreline with dedicated cabanas, attentive beach butlers, and sunset service.',
    image: img('photo-1540962351504-03099e0a754b'),
    category: 'Leisure',
  },
  {
    id: 'fine-dining',
    name: 'Fine Dining',
    description: 'Seasonal tasting menus crafted by our executive chef, paired with an award-winning cellar of over 400 labels.',
    image: img('photo-1414235077428-338989a2e8c0'),
    category: 'Culinary',
  },
  {
    id: 'rooftop-lounge',
    name: 'Rooftop Lounge',
    description: 'Signature cocktails and panoramic skyline views, with live music every evening at dusk.',
    image: img('photo-1533777857889-4be7c70b33f7'),
    category: 'Nightlife',
  },
  {
    id: 'wellness',
    name: 'Wellness Studio',
    description: 'Sunrise yoga, guided meditation, and a fully-equipped fitness studio overlooking the ocean.',
    image: img('photo-1544161515-4ab6ce6db874'),
    category: 'Wellness',
  },
  {
    id: 'city-tours',
    name: 'Private City Tours',
    description: 'Curated excursions with a personal guide, from heritage architecture to hidden culinary gems.',
    image: img('photo-1500530855697-b586d89ba3ee'),
    category: 'Excursions',
  },
];

export const restaurants: Restaurant[] = [
  {
    id: 'the-veranda',
    name: 'The Veranda',
    cuisine: 'Fine Dining',
    description: 'Contemporary tasting menus set against ocean views, with a seasonally rotating seven-course experience.',
    image: img('photo-1414235077428-338989a2e8c0'),
    hours: '6:30 PM – 11:00 PM',
  },
  {
    id: 'azure-rooftop',
    name: 'Azure Rooftop Bar',
    cuisine: 'Rooftop Bar',
    description: 'Handcrafted cocktails and small plates beneath the stars, with resident DJs on weekends.',
    image: img('photo-1533777857889-4be7c70b33f7'),
    hours: '5:00 PM – 1:00 AM',
  },
  {
    id: 'sunrise-cafe',
    name: 'Sunrise Café',
    cuisine: 'Breakfast',
    description: 'An abundant morning table of pastries, regional specialties, and fresh-pressed juices.',
    image: img('photo-1533089860892-a7c6f0a88666'),
    hours: '6:30 AM – 11:00 AM',
  },
  {
    id: 'private-dining',
    name: 'Private Dining',
    cuisine: 'Private Dining',
    description: 'A bespoke culinary journey for two or twenty, hosted anywhere on the property — including your suite terrace.',
    image: img('photo-1414235077428-338989a2e8c0'),
    hours: 'By Reservation',
  },
];

export const offers: Offer[] = [
  {
    id: 'weekend-escape',
    name: 'Weekend Escape',
    description: 'A rejuvenating two-night stay with 20% off selected suites and daily breakfast for two.',
    discount: '20% Off',
    image: img('photo-1611892440504-42a792e24d32'),
  },
  {
    id: 'romance-package',
    name: 'Romance Package',
    description: 'A luxury suite stay with a private candlelit dinner and couples spa ritual included.',
    discount: 'From $980',
    image: img('photo-1520250497591-112f2f40a3f4'),
  },
  {
    id: 'wellness-retreat',
    name: 'Wellness Retreat',
    description: 'Three nights of restorative living with daily spa treatments and guided morning yoga.',
    discount: 'From $1,240',
    image: img('photo-1540541338287-41700207dee6'),
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', url: img('photo-1571003123894-1f0594d2b5d9'), category: 'Hotel', alt: 'Stayora exterior at dusk' },
  { id: 'g2', url: img('photo-1611892440504-42a792e24d32'), category: 'Rooms', alt: 'Grand Deluxe room' },
  { id: 'g3', url: img('photo-1414235077428-338989a2e8c0'), category: 'Dining', alt: 'The Veranda restaurant' },
  { id: 'g4', url: img('photo-1540541338287-41700207dee6'), category: 'Spa', alt: 'Spa treatment room' },
  { id: 'g5', url: img('photo-1540962351504-03099e0a754b'), category: 'Experiences', alt: 'Private beach' },
  { id: 'g6', url: img('photo-1611048268330-53de574cae3b'), category: 'Rooms', alt: 'Presidential suite' },
  { id: 'g7', url: img('photo-1512918728675-ed5a9ecdebfd'), category: 'Hotel', alt: 'Hotel lobby' },
  { id: 'g8', url: img('photo-1533777857889-4be7c70b33f7'), category: 'Dining', alt: 'Rooftop bar' },
  { id: 'g9', url: img('photo-1445019980597-93fa8acb246c'), category: 'Hotel', alt: 'Resort at sunset' },
  { id: 'g10', url: img('photo-1520250497591-112f2f40a3f4'), category: 'Rooms', alt: 'Royal Ocean Suite terrace' },
  { id: 'g11', url: img('photo-1544161515-4ab6ce6db874'), category: 'Experiences', alt: 'Wellness studio' },
  { id: 'g12', url: img('photo-1582719478250-c89cae4dc85b'), category: 'Spa', alt: 'Hydrotherapy pool' },
];
