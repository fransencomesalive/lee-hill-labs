# Architecture - Lee Hill Labs

## Overview

Lee Hill Labs is a small Next.js project that hosts a static browser presentation. Next.js handles metadata, deployment, and route rewrites. The deck itself lives in `public/presentation` as plain HTML, CSS, and JavaScript so it is easy for Claude to edit quickly.

## App Layer

- `app/layout.tsx` - root metadata and noindex robots default
- `app/page.tsx` - local project landing page with deck links
- `app/page.module.css` - landing page styling
- `app/globals.css` - global reset and base app styles
- `next.config.ts` - rewrites clean route names to static presentation files

## Presentation Layer

- `public/presentation/index.html` - access gate
- `public/presentation/slides.html` - primary deck file
- `public/presentation/css/base.css` - shared tokens, reset, base font stack
- `public/presentation/css/gate.css` - gate styling
- `public/presentation/css/slides.css` - slide layouts, typography, nav
- `public/presentation/js/gate.js` - sessionStorage gate behavior
- `public/presentation/js/slides.js` - deck scaling, navigation, keyboard, swipe

## Routing

Next rewrites:

- `/lee-hill-labs-index` -> `/presentation/index.html`
- `/lee-hill-labs-slides` -> `/presentation/slides.html`

Direct static files remain available under `/presentation/*`.

## Slide System

The deck uses a fixed 1920x1080 viewport and scales it to fit the browser window. Each slide is a `section.slide` with one active slide at a time. This preserves the Wrenching 101 browser-deck model so Claude can focus on outline and visual design rather than navigation infrastructure.

Current supported slide patterns:

- `slide--cover`
- `slide--statement`
- `slide--section`
- `slide--two-column`
- `slide--image`

Claude can add more patterns in `slides.css` as the outline demands.

## State

No persistent state. Gate access is stored in `sessionStorage` under `lee_hill_labs_auth`.

## Assets

- Put deck imagery, diagrams, exports, and generated visuals in `public/assets/`.
- Gotham font files live in `public/fonts/`.
- Keep large source files out of the repo unless they are needed for deployment.

## Deployment

Expected path: Vercel project connected to this repo, auto-deploying from `main`.

No environment variables are required for the current scaffold.
