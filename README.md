# Lee Hill Labs

Standalone Next.js presentation workspace for the Lee Hill Labs deck.

## Setup

```bash
cd ~/Sites/lee-hill-labs
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` - project landing and local links
- `/lee-hill-labs-index` - password gate
- `/lee-hill-labs-slides` - static deck
- `/presentation/slides.html` - direct static deck file

## Stack

- Next.js App Router
- TypeScript strict
- Static HTML/CSS/JS presentation under `public/presentation`
- No app database or backend yet

## Project Structure

```text
app/                  # Next.js landing page and metadata
docs/                 # Brief, current state, architecture, handoff notes
public/presentation/  # Static presentation shell
public/assets/        # Deck imagery, diagrams, exports
public/fonts/         # Gotham font files used by the deck
```

## Fonts

Gotham font files are included for this presentation scaffold:

```text
public/fonts/
  Gotham-Light.otf
  Gotham-Medium.otf
  Gotham-Bold.otf
  Gotham-Black.otf
```

Use Gotham for all deck typography. Heavy/black weights are for headlines, medium is for subheads and markers, and light is for body copy. If a true Gotham regular file is added later, wire it as weight `400`.

## AI Workflow

Read in this order before any meaningful work:

1. `CLAUDE.md` or `AGENTS.md`
2. `docs/brief.md`
3. `docs/current-state.md`
4. `docs/architecture.md`
5. `docs/design-system.md`
6. `docs/handoff.md`

## Working Split

- Claude: outline, slide content, visual direction, deck design
- Codex: repo structure, technical architecture, implementation support, responsive polish, build fixes

## Handoff Rhythm

At the end of every session:

1. Update `docs/current-state.md`
2. Update `docs/handoff.md` with what changed and what is next
3. Commit and push once the repo has a remote
