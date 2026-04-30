# Handoff - Lee Hill Labs

## Latest Handoff - 2026-04-30

Claude built the full 23-slide investor deck from Randall's outline. Headshots cropped and wired. Region map replaced with card grid after SVG fabrication failed.

## What Changed This Session

- Replaced 5 placeholder slides with 23 real slides (19 core + 4 appendix)
- Built full CSS design system: .card primitive, all layout types, founder cards, region grid, roadmap timeline, flow steps, tables, closing section
- Wired JE-headshot.jpeg and RF-headshot.jpg as circular crops in the team slide
- Fixed RF headshot crop: changed object-position from center 14% to center 0% so full head is visible
- Replaced attempted SVG map with 3x2 region hazard card grid (Mountain Towns, Midwest/Plains, Urban/Suburban, California WUI, Colorado Foothills, Gulf/Atlantic highlighted)
- Updated docs/current-state.md with full project state

## Important Files

- `public/presentation/slides.html` - Claude's main deck workspace (23 slides, 859+ lines)
- `public/presentation/css/slides.css` - slide layout and full design system (1100+ lines)
- `public/presentation/js/slides.js` - scaling and navigation
- `public/assets/JE-headshot.jpeg` - John Elliot headshot (800x800 square)
- `public/assets/RF-headshot.jpg` - Randall Fransen headshot (1365x2048 portrait)
- `public/assets/us.svg` - Simplemaps US states SVG (available but not yet used)
- `docs/current-state.md` - full project state, outstanding work, resume steps

## Open Items

- No remote GitHub repo yet — needs to be created and initial commit pushed
- No Vercel deployment configured
- Gate password placeholder: `leehill` — change before sharing
- John Elliot experience bullets: placeholder text
- Use-of-funds dollar amounts: all TBD
- iPhone wireframe screens: slides 5, 6, 9, 18, 19
- AI-generated images: slide 3 (background), slide 18 (civic coordination)
- OG image: none yet

## Next Best Steps

1. Create GitHub repo, push initial commit
2. Configure Vercel, get production URL
3. Change gate password
4. Fill in JE experience bullets and use-of-funds amounts
5. Add iPhone wireframe screens (CSS pass)
