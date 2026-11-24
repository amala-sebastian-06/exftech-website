# Excelfast Advanced Technologies: Next.js site

Next.js 16 (App Router, TypeScript, Tailwind v4, Framer Motion). The page content is
carried over from the original static `excelfast_site/index.html`; the visual language,
layout and motion are new.

## Run

```bash
npm install
npm run dev
```

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, marquee, Services, MRO, After-sales, Distribution, Core engineering, Process, Industries, Careers, Contact, team photo |
| `/about` | About us, the COO feature (Deepak Bidare), About the team, and the nine remaining team cards. Linked from the nav and footer. |

## Where things live

| What | File |
| --- | --- |
| All page copy (hero, services, MRO, industries, footer…) | `src/data/site.ts` |
| Team roster, roles, EMP IDs | `src/data/team.ts` |
| Tilt + click-to-flip 3D card | `src/components/FlipCard.tsx` |
| Service cards (front/back) | `src/components/Services.tsx` |
| COO feature card | `src/components/Leadership.tsx` |
| Auto-scrolling industries rail | `src/components/Industries.tsx` + `.ef-rail*` in `globals.css` |
| Closing team photo (full-bleed, B&W) | `src/components/TeamPhoto.tsx`, `public/team/team-group.jpg` |
| Logo mark (nav, hero watermark, section watermarks) | `src/components/Logo.tsx` |
| Brand tokens, fonts, marquee/float keyframes | `src/app/globals.css` |
| Photos | `public/team/*.jpg` |

## The flip card

`FlipCard` takes any `front` and `back` node, so the same pointer-tilt + flip motion is
reused by the five service cards, the COO card and the team cards. Adjust `tiltStrength`
and `aspect` per use.

## The industries rail

`.ef-rail` scrolls itself with a CSS marquee (46s) and pauses on hover or keyboard
focus. Its scrollbar is hidden and the card list is rendered twice so the loop is
seamless. Change the speed in `globals.css` (`.ef-rail-track`).

## Swapping a team photo

1. Drop a portrait into `public/team/`: 3:4 crop, head near the top, ~900×1200 px.
2. Point the matching entry in `src/data/team.ts` at it (`photo: "/team/<file>.jpg"`).

Two roster entries ship with `photo: null` and render a blank placeholder; the ID card
artwork only listed eight people. Fill in the last two when they're confirmed.

## Brand values

- Orange `#f96902`, ink `#0e0e0e`, bone `#eeebeb`, sampled from the ExcelFast artwork.
- Display face **Poppins**, body **Inter**, labels **JetBrains Mono**.

## Before launch

- Wire the contact form (`src/components/Contact.tsx`) to a mailer or CRM.
- Replace the Unsplash photography in `src/data/site.ts` with real Excelfast imagery,
  then drop `images.remotePatterns` from `next.config.ts`.
- Replace the traced mark in `src/components/Logo.tsx` with the official vector logo.
- Add a real LinkedIn URL in `src/data/site.ts` (`footer.columns`).
- The careers block links to the contact form. If you port the original `careers.html`
  into a `/careers` route, repoint `careers.ctaHref` in `src/data/site.ts`.
