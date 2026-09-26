export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  bed: string;
  guests: number;
  size: string;
  view: string;
  pricePerNight: number;
  images: string[];
  amenities: string[];
  rating: number;
  reviews: number;
  availability: 'available' | 'limited' | 'sold-out';
  category: 'deluxe' | 'suite' | 'presidential';
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  hours: string;
}

export interface Offer {
  id: string;
  name: string;
  description: string;
  discount: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'Hotel' | 'Rooms' | 'Dining' | 'Spa' | 'Experiences';
  alt: string;
}

export interface BookingDetails {
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  specialRequests?: string;
}

export interface Booking {
  id: string;
  roomName: string;
  roomImage: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  total: number;
}
