# Handoff - Lee Hill Labs

## Latest Handoff - 2026-05-01

Slide 17 headshot polish: RF crop adjusted, both headshots doubled in size.

- RF headshot object-position tuned to `center 65%` (portrait; face centered in circle)
- Both headshot circles increased from 88x88px to 176x176px
- docs/current-state.md updated to reflect headshot state
- GitHub auto-deploy connected via `vercel git connect`; pushing to main now triggers production deploys automatically

## Previous Handoff - 2026-05-02

Claude built the full investor deck from Randall's outline. Headshots cropped and wired. Region map replaced with card grid after SVG fabrication failed.

Codex reviewed the handoff, verified the build, and deployed production on Vercel.

Codex codified two locked grain background presets for future work: `Original MTTL Grain Background` and `Presentation Grain Background`. Lee Hill uses the subtler presentation preset; do not alter animation/static parameters during palette swaps.

Codex redeployed production on 2026-05-01 via `npx vercel --prod`; public alias `https://lee-hill-labs.vercel.app` smoke-tested HTTP 200 for `/`, `/lee-hill-labs-index`, and `/lee-hill-labs-slides`.

Codex created/pushed the GitHub remote `git@github.com:fransencomesalive/lee-hill-labs.git`; `main` tracks `origin/main` at `0c14b43 update Lee Hill Labs deck`.

## What Changed (2026-05-02 session)

- Deck is currently 22 slides (19 core + appendix A-C); Appendix D was removed and find/replace reminders live in docs.
- Built full CSS design system: .card primitive, all layout types, founder cards, region grid, roadmap timeline, flow steps, tables, closing section
- Wired JE-headshot.jpeg and RF-headshot.jpg as circular crops in the team slide
- Fixed RF headshot crop: changed object-position from center 14% to center 0% so full head is visible
- Replaced attempted SVG map with 3x2 region hazard card grid (Mountain Towns, Midwest/Plains, Urban/Suburban, California WUI, Colorado Foothills, Gulf/Atlantic highlighted)
- Updated docs/current-state.md with full project state
- Linked Vercel project: `fransencomesalive-4748s-projects/lee-hill-labs`
- Deployed production: `https://lee-hill-labs.vercel.app`
- Smoke-tested `/`, `/lee-hill-labs-index`, and `/lee-hill-labs-slides` with HTTP 200 responses

## Important Files

- `public/presentation/slides.html` - Claude's main deck workspace (22 slides, 900+ lines)
- `public/presentation/css/slides.css` - slide layout and full design system (1100+ lines)
- `public/presentation/js/slides.js` - scaling and navigation
- `public/assets/JE-headshot.jpeg` - John Elliot headshot (800x800 square)
- `public/assets/RF-headshot.jpg` - Randall Fransen headshot (1365x2048 portrait)
- `public/assets/us.svg` - Simplemaps US states SVG (available but not yet used)
- `docs/current-state.md` - full project state, outstanding work, resume steps
- `docs/functionality-decision-log.md` - functionality rules and user-story seeds discovered through deck work
- `docs/grain-background-presets.md` - locked MTTL/Wrenching and Lee Hill grain background parameters
- `.vercel/project.json` - local Vercel project linkage, ignored by git

## Open Items

- Gate password placeholder: `leehill` — change before sharing
- John Elliot experience bullets: placeholder text
- Use-of-funds dollar amounts: all TBD
- Reusable iPhone mockup shell with ECA app screen mockups wired on slides 5, 9, 18, and 19
- App screen decisions: ECA is placeholder name for future find/replace; Boulder Heights demo community; emergency partner tool tone; maps show evac routes and hazard perimeter
- Slide 5 dashboard updated to Escape Route Fire incident view with check-in count, requests, emergency feed, safe button, and offline-ready state
- Slide 9 updates: screen 2 now Group Coordination / Escape Route Fire with requests and news; map-context screen became My Household; tasks screen became Open Requests
- Functionality decision log created; use `devlog` to capture product rules for user-story/dev-planning export
- Latest devlog: separate tasks from requests/answered requests; add later-state preparedness drills and possible certification/insurance-discount concepts.
- Latest devlog: private group verified info can escalate to community aggregator; leadership succession handles non-response, not online, not safe, and on-the-move statuses.
- Appendix D removed from the deck; find/replace reminders now live only in docs/memory.
- Mobile portrait/landscape smoke test completed; fixed landscape nav overlap by reserving nav height in `slides.js` and hiding pips on short screens.
- AI-generated image wired: slide 3 hazard context map
- OG image: none yet

## Next Best Steps

1. Change gate password
2. Fill in JE experience bullets and use-of-funds amounts
3. Review ECA app screen mockups for product accuracy and polish
4. Review generated slide 3 imagery for taste and investor-readiness
5. Add OG image when share polish matters
