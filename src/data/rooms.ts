import type { Room } from '../types';

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const rooms: Room[] = [
  {
    id: 'grand-deluxe',
    name: 'The Grand Deluxe',
    tagline: 'Ocean View',
    description: 'An airy retreat with panoramic ocean views and refined coastal furnishings.',
    longDescription:
      'The Grand Deluxe offers 52 square meters of serene living, framed by floor-to-ceiling windows that open onto uninterrupted ocean views. Every detail — from the hand-finished oak flooring to the Egyptian cotton linens — has been considered to create a space of quiet indulgence. A private balcony invites slow mornings with coffee and the sound of the tide.',
    bed: 'King Bed',
    guests: 2,
    size: '52 m²',
    view: 'Ocean View',
    pricePerNight: 420,
    images: [
      img('photo-1611892440504-42a792e24d32'),
      img('photo-1590490360182-c33d57733427'),
      img('photo-1566073771259-6a8506099945'),
      img('photo-1618773928121-c32242e63f39'),
    ],
    amenities: ['Ocean View', 'King Bed', 'Private Balcony', 'Rain Shower', 'Nespresso Bar', 'Smart Climate', 'Egyptian Cotton Linens', 'Complimentary Minibar'],
    rating: 4.8,
    reviews: 214,
    availability: 'available',
    category: 'deluxe',
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'Private Lounge',
    description: 'A residence-scale suite with a private lounge, designed for extended stays in absolute comfort.',
    longDescription:
      'The Presidential Suite spans 98 square meters across a separate living and sleeping wing, anchored by a private lounge for entertaining or quiet retreat. Bespoke furnishings in walnut and brushed brass pair with curated art to create an atmosphere of understated grandeur, while a dedicated butler service attends to every request.',
    bed: 'King Bed',
    guests: 4,
    size: '98 m²',
    view: 'Skyline & Ocean View',
    pricePerNight: 850,
    images: [
      img('photo-1611048268330-53de574cae3b'),
      img('photo-1512918728675-ed5a9ecdebfd'),
      img('photo-1571896349842-33c89424de2d'),
      img('photo-1582719478250-c89cae4dc85b'),
    ],
    amenities: ['Private Lounge', 'Butler Service', 'King Bed', 'Dining Area', 'Walk-in Closet', 'Soaking Tub', 'Private Bar', 'Skyline View'],
    rating: 4.9,
    reviews: 132,
    availability: 'limited',
    category: 'suite',
  },
  {
    id: 'royal-ocean-suite',
    name: 'Royal Ocean Suite',
    tagline: 'Private Terrace',
    description: 'The pinnacle of Stayora hospitality — a private terrace suite with an infinity plunge pool.',
    longDescription:
      'Reserved for those who seek the extraordinary, the Royal Ocean Suite occupies 145 square meters with an expansive private terrace and infinity plunge pool suspended above the shoreline. Interiors blend Italian marble with warm timber accents, and a dedicated concierge curates every moment of the stay — from private chef dinners to sunset sailing.',
    bed: 'King Bed',
    guests: 3,
    size: '145 m²',
    view: 'Panoramic Ocean View',
    pricePerNight: 1200,
    images: [
      img('photo-1520250497591-112f2f40a3f4'),
      img('photo-1445019980597-93fa8acb246c'),
      img('photo-1551882547-ff40c63fe5fa'),
      img('photo-1571003123894-1f0594d2b5d9'),
    ],
    amenities: ['Private Terrace', 'Infinity Plunge Pool', 'Dedicated Concierge', 'King Bed', 'Private Chef Available', 'Marble Bath', 'Panoramic View', 'Champagne Welcome'],
    rating: 5.0,
    reviews: 68,
    availability: 'limited',
    category: 'presidential',
  },
  {
    id: 'garden-suite',
    name: 'The Garden Suite',
    tagline: 'Garden View',
    description: 'A tranquil ground-floor suite opening onto Stayora\'s botanical gardens.',
    longDescription:
      'Set among manicured gardens, this ground-floor suite offers direct access to Stayora\'s botanical grounds. Natural light floods the 60 square meter interior, complemented by a private outdoor rain shower and reading nook — an ideal sanctuary for guests seeking calm.',
    bed: 'Queen Bed',
    guests: 2,
    size: '60 m²',
    view: 'Garden View',
    pricePerNight: 380,
    images: [
      img('photo-1591088398332-8a7791972843'),
      img('photo-1566665797739-1674de7a421a'),
      img('photo-1611892440504-42a792e24d32'),
    ],
    amenities: ['Garden Access', 'Outdoor Shower', 'Reading Nook', 'Queen Bed', 'Nespresso Bar', 'Smart Climate'],
    rating: 4.7,
    reviews: 96,
    availability: 'sold-out',
    category: 'deluxe',
  },
];

export const getRoomById = (id: string) => rooms.find((r) => r.id === id);
