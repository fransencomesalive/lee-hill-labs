# Current State - Lee Hill Labs

## Status

Full investor deck built on 2026-04-30. The presentation is 23 slides (19 core + 4 appendix) covering the Emergency Coordination App (ECA) angel pitch. Deck is interactive and content-complete except for placeholder wireframes, two AI-generated images, and use-of-funds dollar amounts.

## Stack

- Framework: Next.js App Router
- Language: TypeScript strict
- Presentation: static HTML/CSS/JS under `public/presentation`
- Package manager: npm
- Backend: none
- Deployment: Vercel planned, not configured

## Current Routes

- `/` - project landing page with deck links
- `/lee-hill-labs-index` - password gate rewrite
- `/lee-hill-labs-slides` - slide deck rewrite
- `/presentation/slides.html` - direct static deck file

## Current Deck

- 23 slides: slides 1-19 (core) + appendix A-D
- Keyboard, click, and touch swipe navigation
- Responsive proportional scaling (1920x1080 viewBox)
- Animated canvas blob/grain background (Lee Hill Labs palette)
- SessionStorage password gate (password: `leehill` — placeholder)
- Gotham font: Black 900 headlines, Medium 500 subheads, Light 300 body
- Full .card primitive with --panel background and --mist-border
- Section dividers and cover slides on bare animated background
- Headshots wired: JE-headshot.jpeg (John Elliot), RF-headshot.jpg (Randall Fransen)
- Region hazard map = 3x2 card grid (Mountain Towns, Midwest/Plains, Urban/Suburban, California WUI, Colorado Foothills, Gulf/Atlantic Coast)

## Decisions

- Use a separate repo at `~/Sites/lee-hill-labs`.
- Use static deck files for presentation speed and portability.
- Keep Next.js as the deploy shell, matching Wrenching 101.
- Keep docs as shared memory between Codex and Claude.
- Avoid adding dependencies until the outline or design requires them.
- Use Gotham for all presentation typography.
- Use the Lee Hill Labs swatches as the source of truth for deck colors.
- Preserve the Wrenching 101 index/password page and animated background pattern.
- Dense slides compressed inline (no sidebars); roadmap as timeline; tables maintained for pricing/use-of-funds.
- Slide 10 regional map: card grid (not SVG map — SVG fabrication is unreliable).

## Known Risks

- Gate password is placeholder: change before sharing with investors.
- No production Vercel project configured.
- No remote GitHub repo exists yet.
- `npm install` reports two moderate audit findings; no force fix applied.
- John Elliot's relevant experience bullets are placeholder text.
- Use-of-funds dollar amounts are all TBD.

## Outstanding Visual Work

- iPhone wireframe screens for slides 5, 6, 9, 18, 19 (CSS/HTML mockups)
- Slide 3: background photo (user generates via AI, then wire in)
- Slide 18: civic coordination image (user generates via AI, then wire in)
- Figma polish pass (future, before investor meetings)
- OG image: none yet

## Resume Here

1. Set up remote GitHub repo and push initial commit.
2. Configure Vercel deployment and production URL.
3. Update gate password before sharing.
4. Add iPhone wireframe screens to placeholder slides.
5. Wire in AI-generated images for slides 3 and 18 when ready.
6. Fill in use-of-funds dollar amounts and John Elliot experience bullets.
