# Demo Marae — Standalone Business Website

A public-facing demo website for a Marae, built to the MaraeBiz Booking Calendar
scope of work. **Frontend-only** with mock data (no backend integration).

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4**
- Fonts: Fraunces (display) + Geist (body)

## Project layout

The Next.js application lives in the [`web/`](./web) subdirectory.

```
web/
  src/app/        # routes: /, /bookings, /enquiry, /contact, /about, /services
  src/components/ # Navbar, Footer, BookingCalendar, forms, UI primitives
  src/data/       # mock bookings + site content
```

## Pages

| Page | Route | Notes |
|------|-------|-------|
| Home | `/` | Hero, highlights, services preview, calendar CTA |
| Bookings Calendar | `/bookings` | Interactive month calendar, confirmed bookings (date + time), enquiry button |
| Booking Enquiry | `/enquiry` | Validated enquiry form |
| Contact Us | `/contact` | General enquiry form |
| About Us | `/about` | Story, values, stats |
| Services | `/services` | Service cards |

## Local development

```bash
cd web
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deployment

Deployed on Vercel with Git auto-deploy:

- **Repository**: `AroshaEpitcore/web`
- **Production branch**: `main`
- **Root Directory**: `web`

Pushing to `main` triggers an automatic production deployment.

## Notes

- Content and images are placeholders — to be provided by the client.
- Booking data is mocked; in production it integrates with MaraeBiz Bookings.
- Forms validate client-side and show success states but do not submit anywhere.
