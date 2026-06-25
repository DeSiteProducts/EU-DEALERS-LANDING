# DeSite Products Landing

One-page media kit and product landing page for DeSite Products compact
portable vibratory screeners.

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

- Main entry point: `app/page.tsx`
- DeSite components: `app/components/desite/`
- Shared content data: `app/lib/desiteData.ts`
- Placeholder media paths are visible in the UI and are ready to replace with
  real product, jobsite, customer, video, and social proof assets.
