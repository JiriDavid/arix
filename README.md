# Arix Innovations — Next.js Portfolio

A production-ready marketing site for the Arix Innovations digital agency, built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern hero with motion-driven storytelling
- 🧭 App Router navigation with smooth page transitions
- 💼 Services and portfolio showcase powered by reusable components
- 📸 Optimized imagery via `next/image` with remote image support
- 📬 Contact form with client-side validation and API route stub
- 🎨 Tailwind design system with custom gradients and typography

## Getting Started

```powershell
# install dependencies
npm install

# start the development server
npm run dev

# create a production build
npm run build
```

Open <http://localhost:3000> to explore the experience locally.

## Project Structure

- `app/` — App Router layouts, pages, loading states, and API routes
- `components/` — Reusable UI primitives (Navbar, Footer, Button, Cards, etc.)
- `lib/projects.js` — Centralized portfolio project data
- `public/` — Static assets including the favicon

## Deployment

Deploy seamlessly to Vercel:

1. Push this repository to GitHub.
2. Import the project in Vercel and connect the repo.
3. Vercel automatically installs dependencies, runs `next build`, and provisions edge caching.

## Environment Variables

No environment variables are required for the dummy contact endpoint. Replace `/api/contact` with your preferred email/CRM integration before launch.
