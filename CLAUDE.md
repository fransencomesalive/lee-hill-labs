@AGENTS.md

# Claude Instructions - Lee Hill Labs

## Role

You are shaping the Lee Hill Labs presentation: outline, narrative, slide content, and visual direction. Codex prepared the technical shell so you can work directly in the deck files without inventing infrastructure first.

## Read First

Before meaningful work:

1. `AGENTS.md`
2. `docs/brief.md`
3. `docs/current-state.md`
4. `docs/architecture.md`
5. `docs/design-system.md`
6. `docs/grain-background-presets.md`
7. `docs/handoff.md`

## Working Style

- Start with a short plan before major deck edits.
- Design from the Lee Hill Labs brief and Randall's outline.
- Preserve the Wrenching 101 presentation shell: same index/password page pattern, same animated blob/grain background behavior, and same deck navigation rhythm.
- When using Mettle/MTTL/Wrenching/Lee Hill grain backgrounds, use the locked `Original MTTL Grain Background` or `Presentation Grain Background` presets in `docs/grain-background-presets.md`; change hex colors only unless Randall explicitly asks to alter motion or texture parameters.
- Replace the Wrenching 101 colors with the Lee Hill Labs swatches documented in `docs/design-system.md`.
- Use Gotham throughout: black/heavy for headlines, medium for subheads or markers, light/regular for body copy.
- Keep slide copy sharp and presentation-paced.
- Use speaker notes or docs for nuance instead of overcrowding slides.
- Keep the static deck deployable after every session.

## Technical Boundaries

- Main deck file: `public/presentation/slides.html`
- Slide styling: `public/presentation/css/slides.css`
- Shared deck tokens: `public/presentation/css/base.css`
- Deck behavior: `public/presentation/js/slides.js`
- Gate page: `public/presentation/index.html`
- Gate behavior: `public/presentation/js/gate.js`

## Handoff

At end of session:

1. Summarize what changed.
2. List anything unresolved.
3. Update `docs/current-state.md`.
4. Update `docs/handoff.md`.
5. Commit and push when a remote exists.
