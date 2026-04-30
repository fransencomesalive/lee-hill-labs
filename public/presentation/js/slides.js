if (!sessionStorage.getItem("lee_hill_labs_auth") && window.location.pathname.includes("lee-hill-labs-slides")) {
  window.location.replace("/lee-hill-labs-index");
}

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

const viewport = document.querySelector(".slide-viewport");
const deckNavEl = document.querySelector(".deck-nav");

function scaleViewport() {
  const navHeight = deckNavEl ? deckNavEl.offsetHeight : 0;
  const availableHeight = Math.max(window.innerHeight - navHeight, 1);
  const scale = Math.min(window.innerWidth / 1920, availableHeight / 1080);
  viewport.style.transform = "scale(" + scale + ")";
}

window.addEventListener("resize", scaleViewport);
scaleViewport();

const slides = Array.from(document.querySelectorAll(".slide"));
const btnHome = document.getElementById("nav-home");
const btnPrev = document.getElementById("nav-prev");
const btnNext = document.getElementById("nav-next");
const navStrip = document.getElementById("nav-strip");
const counterEl = document.getElementById("slide-counter-current");
const totalEl = document.getElementById("slide-counter-total");

let current = 0;
const total = slides.length;

function update() {
  counterEl.textContent = String(current + 1).padStart(2, "0");
  totalEl.textContent = String(total).padStart(2, "0");
  btnHome.classList.toggle("is-hidden", current === 0);
  btnPrev.classList.toggle("is-hidden", current === 0);
  btnNext.classList.toggle("is-hidden", current === total - 1);

  navStrip.querySelectorAll(".deck-nav__pip").forEach((pip, index) => {
    pip.classList.toggle("is-active", index === current);
  });
}

function goTo(index) {
  if (index < 0 || index >= total) return;
  slides[current].classList.remove("is-active");
  current = index;
  slides[current].classList.add("is-active");
  update();
}

function next() {
  goTo(current + 1);
}

function prev() {
  goTo(current - 1);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") {
    event.preventDefault();
    next();
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    prev();
  }
});

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const dx = event.changedTouches[0].clientX - touchStartX;
  const dy = event.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
  if (dx < 0) next();
  else prev();
}, { passive: true });

btnHome.addEventListener("click", () => goTo(0));
btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);

for (let index = 0; index < total; index++) {
  const btn = document.createElement("button");
  btn.className = "deck-nav__pip";
  btn.type = "button";
  btn.textContent = String(index + 1).padStart(2, "0");
  btn.setAttribute("aria-label", "Slide " + (index + 1));
  btn.addEventListener("click", () => goTo(index));
  navStrip.appendChild(btn);
}

update();
