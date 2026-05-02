# Design System - Lee Hill Labs

## Source Pattern

Preserve the Wrenching 101 presentation structure:

- Same index/password page pattern.
- Same animated blob background, grain texture, and slow ambient motion.
- Same browser-based 16:9 deck and proportional scaling behavior.
- Same general navigation rhythm: arrows, space, pips, previous/next buttons, swipe.

Replace the Wrenching 101 palette with the Lee Hill Labs swatches below.

## Visual Principles

- Presentation first: every slide should be readable from a room.
- Strong hierarchy: one dominant idea per slide whenever possible.
- Clean alignment: preserve consistent margins and slide rhythm.
- Responsive by scaling: 1920x1080 artboard, proportionally scaled to viewport.
- Avoid visual clutter: keep speaker nuance out of slide text.
- Preserve the Wrenching 101 sense of atmosphere and pacing, but do not preserve its cycling-specific visuals or copy.

## Palette

Use these swatches as the source of truth. Values are matched from Randall's screenshot.

| Role | Hex | RGB | Use |
| --- | --- | --- | --- |
| Warm highlight | `#F5D772` | `245, 215, 114` | Bright emphasis, small highlights, active nav |
| Gold | `#ECC11C` | `236, 193, 28` | Primary accent, labels, rules |
| Olive | `#86813A` | `134, 129, 58` | Secondary accent, muted fills |
| Mist | `#98B8B6` | `152, 184, 182` | Cool highlight, body accents, borders |
| Teal | `#00ADB3` | `0, 173, 179` | Motion blobs, interactive accents |
| Deep blue | `#252E65` | `37, 46, 101` | Deep contrast, shadow fields, alternate panels |
| Charcoal | `#4F4F4F` | `79, 79, 79` | Neutral grounding, background texture |
| Ink | `#111312` | `17, 19, 18` | Main dark background |
| Paper | `#F7F3EA` | `247, 243, 234` | Primary readable text |

## Color Rules

- Use the screenshot palette across all colors, just like Wrenching 101 used the Mettle palette.
- Keep backgrounds dark and textured so the swatches glow without becoming candy-colored.
- Use gold and warm highlight sparingly for hierarchy.
- Use mist and teal for cool contrast, diagrams, and interactive states.
- Use deep blue for depth and high-contrast panels.
- Use charcoal as a neutral support color, not the only background.

## Typography

Use Gotham for all deck typography.

- Headlines: Gotham Black or the heaviest available Gotham weight.
- Subheads, labels, markers: Gotham Medium.
- Body copy: Gotham Light or Gotham Regular if a regular file is added later.
- Avoid mixing in other display fonts unless Randall explicitly asks for a new identity direction.

## Slide Rules

- Keep titles short and decisive.
- Keep body copy large enough for presentation use.
- Prefer fewer words and stronger structure over dense paragraphs.
- Use presenter notes in docs when a slide needs supporting context.
- Do not add instructional UI copy inside the deck unless it is part of the presentation.

## App Screen Mockups

- Use the shared CSS iPhone shell for every app screen; keep device geometry identical across slides.
- Treat the shell and the app UI as separate layers: change `.phone-screen` content/styles for UX states, not the frame.
- Current UI placeholder name is ECA; replace when the final app name and shorthand are chosen.
- Current demo community is Boulder Heights; replace if the first test community changes.
- Screen tone should feel like an emergency partner tool: calm, operational, legible, and trusted.
- Map states should show evacuation routes and a hazard perimeter without overpromising official precision.

## Responsive Rules

- Deck viewport remains 1920x1080.
- JavaScript scales the deck into the available browser area.
- Mobile hides the pip strip and keeps navigation tappable.
- Verify both portrait and landscape if the deck will be viewed on phones.
