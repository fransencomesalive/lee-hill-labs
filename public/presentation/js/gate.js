const PASS = "leehill";
const KEY = "lee_hill_labs_auth";

const MESH_DEFS = [
  { hex: "#00ADB3", rMin: 0.55, rMax: 0.75, a0: "aa" },
  { hex: "#252E65", rMin: 0.42, rMax: 0.62, a0: "bb" },
  { hex: "#ECC11C", rMin: 0.34, rMax: 0.50, a0: "88" },
  { hex: "#86813A", rMin: 0.34, rMax: 0.54, a0: "88" },
  { hex: "#98B8B6", rMin: 0.32, rMax: 0.48, a0: "77" },
  { hex: "#4F4F4F", rMin: 0.26, rMax: 0.40, a0: "99" },
];

function initNodes() {
  return MESH_DEFS.map((def) => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00022,
    vy: (Math.random() - 0.5) * 0.00022,
    hex: def.hex,
    a0: def.a0,
    r: def.rMin + Math.random() * (def.rMax - def.rMin),
  }));
}

function startBackground() {
  const bg = document.getElementById("bg-canvas");
  const grain = document.getElementById("grain-canvas");
  if (!bg || !grain) return;

  const bgCtx = bg.getContext("2d");
  const grainCtx = grain.getContext("2d");
  const nodes = initNodes();
  let width = 0;
  let height = 0;
  let pixelWidth = 0;
  let pixelHeight = 0;
  let grainData;
  let grainCount = 0;
  let frame = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    pixelWidth = Math.floor(width * dpr);
    pixelHeight = Math.floor(height * dpr);
    bg.width = width;
    bg.height = height;
    grain.width = pixelWidth;
    grain.height = pixelHeight;
    grain.style.width = width + "px";
    grain.style.height = height + "px";
    grainData = grainCtx.createImageData(pixelWidth, pixelHeight);
    grainCount = Math.floor(pixelWidth * pixelHeight * 0.015);
  }

  function drawMesh() {
    bgCtx.fillStyle = "#111312";
    bgCtx.fillRect(0, 0, width, height);
    nodes.forEach((node) => {
      const cx = node.x * width;
      const cy = node.y * height;
      const radius = node.r * Math.max(width, height);
      const gradient = bgCtx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, node.hex + node.a0);
      gradient.addColorStop(0.55, node.hex + "44");
      gradient.addColorStop(1, node.hex + "00");
      bgCtx.fillStyle = gradient;
      bgCtx.fillRect(0, 0, width, height);
    });
  }

  function tick() {
    frame++;
    if (frame % 2 === 0) {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.04 || node.x > 0.96) node.vx *= -1;
        if (node.y < 0.04 || node.y > 0.96) node.vy *= -1;
      });
      drawMesh();
    }

    if (frame % 3 === 0) {
      const data = grainData.data;
      data.fill(0);
      for (let i = 0; i < grainCount; i++) {
        const base = ((Math.random() * pixelHeight | 0) * pixelWidth + (Math.random() * pixelWidth | 0)) * 4;
        data[base] = 255;
        data[base + 1] = 238;
        data[base + 2] = 204;
        data[base + 3] = 70;
      }
      grainCtx.putImageData(grainData, 0, 0);
    }

    requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener("resize", resize);
  tick();
}

startBackground();

if (sessionStorage.getItem(KEY)) {
  window.location.replace("/lee-hill-labs-slides");
}

const form = document.getElementById("gate-form");
const input = document.getElementById("gate-input");
const error = document.getElementById("gate-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === PASS) {
    sessionStorage.setItem(KEY, "1");
    window.location.replace("/lee-hill-labs-slides");
  } else {
    error.textContent = "Incorrect code. Try again.";
    input.value = "";
    input.focus();
  }
});
