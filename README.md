# CSSU — Computer Science Student Union

A modern, production-quality rebuild of the [Computer Science Student Union](https://cssu.ca) website for the University of Toronto. Premium dark UI, fully responsive, accessible, and ready to deploy to Vercel

---

## Overview

The CSSU represents over 5,000 computer science students at UofT's St. George campus. This site is a complete redesign in a modern, minimal aesthetic — inspired by the polish of Vercel, Stripe, Linear, and Framer — while faithfully preserving all of the content, information architecture, and functionality of the existing cssu.ca.

**Highlights**

- Dark, premium design system with a muted accent palette and fluid typography
- Reusable, strongly-typed component library
- Scroll-reveal and stagger animations via Framer Motion (respecting `prefers-reduced-motion`)
- Accessible navigation with a focus-trapped mobile drawer
- Validated contact and sponsorship forms (React Hook Form + Zod)
- Full SEO: metadata, Open Graph, Twitter cards, JSON-LD structured data, sitemap, robots

## Architecture

The app uses the Next.js **App Router**. The root layout (`app/layout.tsx`) provides the shared navbar, footer, fonts, and global metadata. Pages live in a `(marketing)` route group; the home page is `app/page.tsx`.

A clean separation is enforced:

- **`data/`** — all content (executives, resources, events, sponsors, guides, etc.) lives here as typed modules. No content is hard-coded in components.
- **`types/`** — shared TypeScript interfaces consumed by both data and components.
- **`components/`** — presentational, reusable building blocks grouped by domain.
- **`lib/`** — framework-agnostic utilities (`cn`, accent class maps, mailto builder, SEO helper).
- **`styles/`** — the single source of truth for the design system (Tailwind v4 `@theme` tokens).

Most components are React Server Components; only interactive pieces (navbar, mobile drawer, motion primitives, forms, resource explorer) opt into `"use client"`, keeping the client bundle small.

## Folder structure

```text
app/
  (marketing)/          # route group for content pages
    about/  team/  events/  sponsorship/  join/
    guides/  guides/faq/  guides/first-year-guide/
    resources/  community/  ba2250/  contact/  constitution/
  layout.tsx            # root layout: fonts, navbar, footer, metadata
  page.tsx              # homepage
  sitemap.ts  robots.ts  not-found.tsx
  icon.svg  opengraph-image.tsx
components/
  navigation/  footer/  hero/  layout/  sections/
  cards/  sponsorship/  contact/  resources/  ui/
data/                   # typed content modules
hooks/                  # (reserved)
lib/                    # utils, accent maps, seo, mailto
styles/globals.css      # Tailwind v4 + design tokens
types/                  # shared interfaces
public/
```

## Technology stack

| Concern     | Choice                                   |
| ----------- | ---------------------------------------- |
| Framework   | Next.js 15 (App Router) + TypeScript     |
| Styling     | Tailwind CSS v4 (`@theme` tokens)        |
| Primitives  | Radix UI (Dialog, Accordion, Label, Slot)|
| Animation   | Framer Motion                            |
| Icons       | Lucide React                             |
| Forms       | React Hook Form + Zod                    |
| Fonts       | Geist Sans & Geist Mono (`geist`)        |

## Setup

```bash
npm install
```

## Development

```bash
npm run dev      # start the dev server at http://localhost:3000
npm run lint     # run ESLint
npm run build    # production build
npm run start    # serve the production build
```

## Deployment

The project deploys to **Vercel** with zero configuration:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Deploy — the framework preset, build command, and output are detected automatically.

No environment variables are required. The contact and sponsorship forms compose a pre-filled `mailto:` link, so the site works without a backend; swap `onSubmit` for an API route if server-side handling is desired.

## Performance

- Server Components by default; client JS limited to genuinely interactive code.
- `optimizePackageImports` for `lucide-react` and `framer-motion`.
- AVIF/WebP image formats configured for `next/image`.
- CSS-driven hover transitions (cheap) with Framer Motion reserved for scroll reveals.
- Route-based code splitting via the App Router.

## Accessibility

- Semantic landmarks, a skip-to-content link, and a logical heading hierarchy.
- Keyboard-navigable menus and forms with visible `:focus-visible` rings.
- Radix Dialog/Accordion provide focus trapping and Escape-to-close.
- ARIA labels on icon-only controls; `aria-invalid` wired to form validation.
- `prefers-reduced-motion` disables non-essential animation.

## Future improvements

- Connect forms to an API route or form provider (e.g. Resend) for server-side delivery.
- Add a CMS or MDX pipeline for events and guides so non-developers can publish.
- Real executive photography in place of the generated monogram avatars.
- Per-page Open Graph images and an events calendar (`.ics`) export.

---

Built for the CSSU @ UofT. Content sourced from [cssu.ca](https://cssu.ca).
