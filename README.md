# D-Sight Screeners Landing

Accessible landing page for comparing three D-Sight screener models and
requesting more information or a quote.

## Stack

- vinext
- Next.js
- React
- Tailwind CSS
- Cloudflare Worker-compatible Sites output

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Validation

```bash
npm run lint
npm run build
```

The production build writes deployable Sites output to `dist/`.

## Project Notes

- Main page code lives in `app/page.tsx`.
- Reusable landing components live in `app/components/`.
- Shared placeholder copy and model data live in `app/lib/landingData.ts`.
- The hero asset lives in `public/images/d-sight-screener-hero.jpg`.
- The canonical Sites preview is `public/screenshot.jpeg`.
