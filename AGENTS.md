# Shared Instructions - Lee Hill Labs

## Read First

Before any work:

1. `docs/brief.md`
2. `docs/current-state.md`
3. `docs/architecture.md`
4. `docs/design-system.md`
5. `docs/grain-background-presets.md`
6. `docs/functionality-decision-log.md`
7. `docs/handoff.md`

## Project Goal

Build a standalone presentation project for Lee Hill Labs. Keep the technical foundation stable while Claude develops the outline, slide content, and visual language.

## Rules

- Keep the repo deployable at all times.
- Keep edits small and reviewable.
- Do not add dependencies unless clearly justified.
- Preserve the static presentation architecture unless the task explicitly changes it.
- Keep visual assets in `public/assets/`.
- Keep presentation shell files in `public/presentation/`.
- Call out assumptions instead of silently making them.
- When the user says `devlog`, capture the functional product rule in `docs/functionality-decision-log.md` for future user-story/dev-planning export.

## Frontend Expectations

- Strong hierarchy, clean alignment, and intentional responsive behavior.
- Presentation slides are 16:9 and scale proportionally in browser.
- Preserve the Wrenching 101 presentation interaction model: same index/password page pattern, same animated blob/grain background behavior, same browser-deck navigation approach.
- Grain backgrounds must use the locked presets in `docs/grain-background-presets.md`: `Original MTTL Grain Background` or `Presentation Grain Background`; palette swaps may change hex colors only.
- Use the Lee Hill Labs swatch palette in `docs/design-system.md` across all presentation colors.
- Use Gotham for all typography: black/heavy for headlines, medium for subheads and markers, light/regular for body copy.
- Avoid in-slide instructional text about controls or implementation details.
- Verify mobile and desktop behavior before calling presentation work complete.

## Output

At the end of every task:

- Summarize files changed.
- Note risks or regressions.
- Update `docs/current-state.md` when state or decisions change.
- Update `docs/handoff.md` before switching tools or ending a substantial session.
