# Stayora — Luxury Hotel & Resort Booking Platform

A premium, cinematic hotel booking website built as a portfolio-grade React project.

## Tech Stack
- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- React Router v7
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## What's Included
- Cinematic animated home page (hero, floating booking search, editorial intro, rooms preview, experiences, testimonials, CTA)
- Rooms & Suites listing with filters + sorting + availability states
- Room details page with gallery, sticky booking card, live price calculation
- 5-step booking flow (room -> details -> stay -> payment (mock) -> confirmation)
- Guest dashboard with bookings, saved rooms, and loyalty stats
- Experiences, Dining, Gallery (filterable masonry + lightbox), Offers, Contact pages
- Login / Signup pages
- Fully responsive, with an elegant loading screen and scroll-based reveal animations throughout

## Notes
- All content (rooms, prices, amenities, bookings) is realistic mock data in `src/data/`.
- Images are sourced from Unsplash for demo purposes -- swap in your own photography for production use.
- The payment step is a visual mock only; no real payment gateway is connected.

## Folder Structure
```
src/
├── components/   # layout, home, rooms, booking, dashboard, ui
├── pages/        # route-level pages
├── data/         # mock content
├── hooks/        # custom hooks
├── types/        # shared TypeScript types
├── utils/        # helpers
└── App.tsx
```
