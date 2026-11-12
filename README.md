# Nitya Nail Art & Academy — Website

Multi-page site for Nitya Nail Art & Academy, Vijay Nagar, Indore. Look and feel modelled on daisynailstudio.com, with Nitya's own content, photos, prices and course details.

Pages: `/` Home · `/about` · `/services` · `/menu` · `/academy` · `/gallery` · `/reviews` · `/contact`. Each page has its own title, description and structured data (NailSalon, plus Course on `/academy`). Each page is prerendered to its own HTML file (`about.html`, …) at build time.

Stack: Vite + React 19 + TypeScript + Tailwind v4 + React Router 7.

## Commands

```bash
npm install
npm run dev      # http://localhost:5177
npm run build    # type-check, build, prerender → dist/
npm run preview  # serve dist/
```

Deploy: import the repo into Vercel. `vercel.json` is included and the output is `dist/`.

## Where to edit

| What | File |
| --- | --- |
| Phone, WhatsApp, address, hours, rating, Instagram, map | `src/data/site.ts` → `BUSINESS` |
| Price list | `src/data/site.ts` → `MENU` |
| Course fee, perks, syllabus | `src/data/site.ts` → `COURSE` |
| Services, reviews, gallery, "Why clients return" | `src/data/site.ts` |
| Page titles and descriptions (SEO) | `src/data/site.ts` → `PAGE_META` |
| Colours and fonts | `src/index.css` → `@theme` |
| Live domain (canonical, sitemap, OG image) | `SITE_URL` env var at build, or `scripts/prerender.mjs` |

## Before launch

- [ ] Photos are temporary, taken from the studio's Google Business listing. Swap in originals in `public/images/`, keeping the same file names.
- [ ] Confirm the WhatsApp number. It is currently set to 88715 89233, the number on Google and Instagram. Posters also show 79749 39468.
- [ ] Confirm the prices. The menu uses the list the studio published on Google about 10 months ago. A recent Instagram reel mentions gel ₹899 and acrylic ₹1,199.
- [ ] Confirm the course fee: ₹10,000 offer (regular ₹12,000) + ₹300 registration.
- [ ] Confirm the address. Google says 19 GM, Scheme 54, but older posters say 247 FH, Scheme 54.
- [ ] Set the real domain via `SITE_URL`. It is currently `https://nityanailart.in`.
- [ ] Optional: replace the "N" monogram with the studio's real logo file.

`_raw/` holds the original downloads (git-ignored).
