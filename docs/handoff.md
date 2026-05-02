# Handoff - Lee Hill Labs

## Latest Handoff - 2026-04-30

Claude built the full investor deck from Randall's outline. Headshots cropped and wired. Region map replaced with card grid after SVG fabrication failed.

Codex reviewed the handoff, verified the build, and deployed production on Vercel.

Codex redeployed production on 2026-05-01 via `npx vercel --prod`; public alias `https://lee-hill-labs.vercel.app` smoke-tested HTTP 200 for `/`, `/lee-hill-labs-index`, and `/lee-hill-labs-slides`.

## What Changed This Session

- Replaced 5 placeholder slides with 23 real slides (19 core + 4 appendix)
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
- `.vercel/project.json` - local Vercel project linkage, ignored by git

## Open Items

- No remote GitHub repo yet — needs to be created and initial commit pushed
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

1. Create GitHub repo and push current commits
2. Change gate password
3. Fill in JE experience bullets and use-of-funds amounts
4. Review ECA app screen mockups for product accuracy and polish
5. Add custom domain if needed
