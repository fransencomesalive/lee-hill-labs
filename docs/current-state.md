# Current State - Lee Hill Labs

## Status

Full investor deck built and deployed on 2026-04-30. The presentation is 22 slides (19 core + 3 appendix) covering the Emergency Coordination App (ECA) angel pitch. Deck is interactive and content-complete except for use-of-funds dollar amounts and final naming.

## Stack

- Framework: Next.js App Router
- Language: TypeScript strict
- Presentation: static HTML/CSS/JS under `public/presentation`
- Package manager: npm
- Backend: none
- Deployment: Vercel production configured
- Production URL: `https://lee-hill-labs.vercel.app`
- Vercel project: `fransencomesalive-4748s-projects/lee-hill-labs`
- GitHub remote: `git@github.com:fransencomesalive/lee-hill-labs.git`
- Current pushed commit: `0c14b43 update Lee Hill Labs deck`
- Latest production deploy: 2026-05-01 via `npx vercel --prod`; `/`, `/lee-hill-labs-index`, and `/lee-hill-labs-slides` smoke-tested HTTP 200.

## Current Routes

- `/` - project landing page with deck links
- `/lee-hill-labs-index` - password gate rewrite
- `/lee-hill-labs-slides` - slide deck rewrite
- `/presentation/slides.html` - direct static deck file

## Current Deck

- 22 slides: slides 1-19 (core) + appendix A-C
- Keyboard, click, and touch swipe navigation
- Responsive proportional scaling (1920x1080 viewBox)
- Animated canvas blob/grain background (Lee Hill Labs palette)
- SessionStorage password gate (password: `leehill` — placeholder)
- Gotham font: Black 900 headlines, Medium 500 subheads, Light 300 body
- Presentation favicon: broadcast antenna emoji on gate and slides pages
- Full .card primitive with --panel background and --mist-border
- Section dividers and cover slides on bare animated background
- Headshots wired: JE-headshot.jpeg (John Elliot), RF-headshot.jpg (Randall Fransen)
- Region hazard map = 3x2 card grid (Mountain Towns, Midwest/Plains, Urban/Suburban, California WUI, Colorado Foothills, Gulf/Atlantic Coast)
- Generated image wired: hazard context map on slide 3
- Reusable iPhone mockup shell with ECA app screen mockups wired on slides 5, 9, 18, and 19
- App screen context: Boulder Heights, emergency partner tool tone, evac routes and hazard perimeter on map states
- Slide 5 dashboard updated to Escape Route Fire incident view with check-in count, requests, emergency feed, safe button, and offline-ready state
- Slide 9 app examples updated: Group Coordination / Escape Route Fire, My Household fields, and Open Requests examples
- Functionality log now distinguishes tasks from requests/answered requests and includes later-state preparedness drills/certification planning.
- Latest devlog adds private-group verified info escalation to a community aggregator and group leadership succession logic.
- Mobile deck smoke-tested in portrait and landscape; nav space is reserved during scaling and pips hide on short mobile landscape.

## Decisions

- Use a separate repo at `~/Sites/lee-hill-labs`.
- Use static deck files for presentation speed and portability.
- Keep Next.js as the deploy shell, matching Wrenching 101.
- Keep docs as shared memory between Codex and Claude.
- Use `docs/functionality-decision-log.md` to capture presentation-derived product behavior for the future app build.
- Avoid adding dependencies until the outline or design requires them.
- Use Gotham for all presentation typography.
- Use the Lee Hill Labs swatches as the source of truth for deck colors.
- Preserve the Wrenching 101 index/password page and animated background pattern.
- Dense slides compressed inline (no sidebars); roadmap as timeline; tables maintained for pricing/use-of-funds.
- Slide 10 regional map: card grid (not SVG map — SVG fabrication is unreliable).
- ECA is the current in-app placeholder name; find/replace when the final product name is chosen.
- Mock app screens should stay within the shared iPhone shell; future UX changes should update only the inner `.phone-screen` layer unless the device template itself changes.
- `devlog` is the capture keyword for saving functional rules, user-story seeds, data/logic notes, and open questions.
- Requests are group help objects with answer/assignment/location-update semantics; tasks remain pre-evacuation checklist items.
- Private group info may escalate into community verified reports; group leadership needs succession when mods/leaders are offline, unsafe, or on the move.
- Mobile deck scaling must reserve the deck nav height in JS so landscape phones do not overlap the slide viewport.

## Known Risks

- Gate password is placeholder: change before sharing with investors.
- Production Vercel project is configured and linked locally in `.vercel/`.
- `npm install` reports two moderate audit findings; no force fix applied.
- John Elliot's relevant experience bullets are placeholder text.
- Use-of-funds dollar amounts are all TBD.

## Find / Replace Reminders

- `Lee Hill Labs`: replace with final company name if changed.
- `Emergency Coordination App`: replace with final app name.
- `ECA`: replace with final app shorthand.
- `Boulder Heights`: replace with final demo community if changed.
- `John`: replace with full name when confirmed.
- `Randall Fransen`: confirm preferred display name.
- `Colorado Front Range / Foothill Communities`: refine first UAT geography.
- Use-of-funds TBDs: replace with real budget table when ready.

## Outstanding Visual Work

- Review generated slide 3 imagery for taste and investor-readiness
- Figma polish pass (future, before investor meetings)
- OG image: none yet

## Resume Here

1. Update gate password before sharing.
2. Review ECA app screen mockups for product accuracy and polish.
3. Review generated slide 3 imagery for taste and investor-readiness.
4. Fill in use-of-funds dollar amounts and John Elliot experience bullets.
5. Add OG image when share polish matters.
