# Grain Background Presets

These are locked background references for future presentation and MTTL/Mettle-adjacent work. When Randall asks for a grain background from Mettle, MTTL, Wrenching 101, Lee Hill Labs, or similar phrasing, use one of these two presets and change only the hex color values unless he explicitly asks to alter motion, opacity, density, blur, node count, or radii.

## Original MTTL Grain Background

Use this when the request references the original Mettle/MTTL/Wrenching 101 background, the fuller Mettle glow, or the Wrenching 101 presentation background.

- Source references: Wrenching 101 presentation and Mettle background implementation.
- Static structure: two fixed full-screen canvases, `bg-canvas` and `grain-canvas`; background canvas sits under the slide stage; grain canvas uses screen blend.
- Mesh nodes: 8 locked nodes.
- Node radii and alpha locks:
  - Node 1: `rMin 0.55`, `rMax 0.75`, `a0 dd`
  - Node 2: `rMin 0.20`, `rMax 0.30`, `a0 66`
  - Node 3: `rMin 0.38`, `rMax 0.52`, `a0 99`
  - Node 4: `rMin 0.50`, `rMax 0.68`, `a0 cc`
  - Node 5: `rMin 0.52`, `rMax 0.70`, `a0 cc`
  - Node 6: `rMin 0.18`, `rMax 0.28`, `a0 55`
  - Node 7: `rMin 0.48`, `rMax 0.65`, `a0 cc`
  - Node 8: `rMin 0.15`, `rMax 0.25`, `a0 44`
- Motion: velocity multiplier `0.00025`; update mesh every 2 animation frames; bounce at `0.05` and `0.95`.
- Gradient stops: `0 = node hex + a0`, `0.55 = node hex + 55`, `1 = node hex + 00`.
- Canvas blur: `90px`.
- Grain: update every 3 animation frames; density `pixelWidth * pixelHeight * 0.02`; pixel RGBA `255, 225, 160, 90`.
- Grain CSS: `mix-blend-mode: screen`; no extra opacity reduction.
- Variable values: node hex colors and the base fill color may be changed to match the target palette.

## Presentation Grain Background

Use this when the request references the Lee Hill Labs presentation background, the subtler presentation grain, or a quieter investor/civic presentation atmosphere.

- Source references: Lee Hill Labs presentation and access gate background.
- Static structure: two fixed full-screen canvases, `bg-canvas` and `grain-canvas`; background canvas sits under the slide stage; grain canvas uses screen blend with reduced opacity.
- Mesh nodes: 6 locked nodes.
- Node radii and alpha locks:
  - Node 1: `rMin 0.55`, `rMax 0.75`, `a0 aa`
  - Node 2: `rMin 0.42`, `rMax 0.62`, `a0 bb`
  - Node 3: `rMin 0.34`, `rMax 0.50`, `a0 88`
  - Node 4: `rMin 0.34`, `rMax 0.54`, `a0 88`
  - Node 5: `rMin 0.32`, `rMax 0.48`, `a0 77`
  - Node 6: `rMin 0.26`, `rMax 0.40`, `a0 99`
- Motion: velocity multiplier `0.00022`; update mesh every 2 animation frames; bounce at `0.04` and `0.96`.
- Gradient stops: `0 = node hex + a0`, `0.55 = node hex + 44`, `1 = node hex + 00`.
- Canvas blur: `80px`.
- Grain: update every 3 animation frames; density `pixelWidth * pixelHeight * 0.015`; pixel RGBA `255, 238, 204, 70`.
- Grain CSS: `mix-blend-mode: screen`; opacity `0.42`.
- Variable values: node hex colors and the base fill color may be changed to match the target palette.

## Usage Rule

Do not tune these values during replication. A palette swap is not permission to change grain density, blur, motion speed, radii, alpha stops, node count, or canvas opacity. If a new variation is needed, document it as a third named preset before using it.
