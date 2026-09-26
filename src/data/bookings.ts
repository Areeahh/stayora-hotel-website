import type { Booking } from '../types';
import { rooms } from './rooms';

export const bookings: Booking[] = [
  {
    id: 'STY-482913',
    roomName: rooms[2].name,
    roomImage: rooms[2].images[0],
    checkIn: '2026-11-14',
    checkOut: '2026-11-18',
    guests: 2,
    status: 'upcoming',
    total: 4800,
  },
  {
    id: 'STY-317204',
    roomName: rooms[0].name,
    roomImage: rooms[0].images[0],
    checkIn: '2026-03-02',
    checkOut: '2026-03-05',
    guests: 2,
    status: 'completed',
    total: 1260,
  },
  {
    id: 'STY-905112',
    roomName: rooms[1].name,
    roomImage: rooms[1].images[0],
    checkIn: '2025-12-20',
    checkOut: '2025-12-23',
    guests: 3,
    status: 'completed',
    total: 2550,
  },
];
