const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlayMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const overlayLinks = Array.from(document.querySelectorAll(".overlay-link"));

const openMenu = () => {
  if (!overlay || !menuBtn) return;
  overlay.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  if (!overlay || !menuBtn) return;
  overlay.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};

menuBtn?.addEventListener("click", () => {
  const isOpen = overlay?.classList.contains("open");
  isOpen ? closeMenu() : openMenu();
});

closeMenuBtn?.addEventListener("click", closeMenu);

overlay?.addEventListener("click", (event) => {
  if (event.target === overlay) closeMenu();
});

overlayLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay?.classList.contains("open")) closeMenu();
});

const revealEls = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

const trainingToggles = Array.from(document.querySelectorAll(".training-toggle"));
trainingToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const details = toggle.nextElementSibling;
    if (!details) return;
    const isOpen = details.classList.contains("is-open");
    details.classList.toggle("is-open", !isOpen);
    details.hidden = isOpen;
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.textContent = isOpen ? "View details" : "Hide details";
  });
});

const reflectionToggle = document.querySelector(".reflection-toggle");
const reflectionPanel = document.querySelector(".reflection-panel");
const reflectionStatus = document.querySelector(".reflection-status");
const reflectionContent = document.querySelector(".reflection-content");

const loadReflection = async () => {
  if (!reflectionStatus || !reflectionContent) return;
  reflectionStatus.textContent = "Loading...";

  // Prefer inline template to avoid fetch/CORS issues
  const inlineSource = document.getElementById("reflection-md");
  let markdown = "";
  if (inlineSource) {
    markdown = inlineSource.innerHTML.trim();
  } else {
    try {
      const response = await fetch("Reflexion.md");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      markdown = await response.text();
    } catch (error) {
      reflectionStatus.textContent = "Could not load reflection.";
      return;
    }
  }

  if (!markdown) {
    reflectionStatus.textContent = "Reflection is empty.";
    return;
  }
  reflectionContent.innerHTML = window.marked ? window.marked.parse(markdown) : markdown;
  reflectionStatus.textContent = "";
};

if (reflectionToggle && reflectionPanel) {
  let loaded = false;
  reflectionToggle.addEventListener("click", async () => {
    const isOpen = !reflectionPanel.hidden;
    reflectionPanel.hidden = isOpen;
    reflectionToggle.setAttribute("aria-expanded", String(!isOpen));
    reflectionToggle.textContent = isOpen ? "Read full BTS reflection" : "Hide BTS reflection";
    if (!loaded && !isOpen) {
      loaded = true;
      await loadReflection();
    }
  });
}

const formatDate = (isoDate) => {
  if (!isoDate) return null;
  const [year, month, day] = isoDate.split("-");
  return `${day}.${month}.${year}`;
};

const fallbackExperienceDates = {
  "Administration des Ponts et Chaussées": { start: "2025-02-03", end: "2025-02-28" },
  "La Provençale Sàrl": { start: "2024-01-29", end: "2024-02-23" },
  "Hoffmann et Fils Sàrl": { start: "2023-01-30", end: "2023-02-24" },
  "Commune de Mondercange": { start: "2022-03-28", end: "2022-04-22" },
  "Creos – Luxembourg City Center": { start: "2021-07-05", end: "2021-07-30" },
  "Creos - Luxembourg City Center": { start: "2021-07-05", end: "2021-07-30" },
  "Merbag S.A. Hollerich": { start: "2020-05-25", end: "2020-06-19" },
  "Automotive Mechanic": { start: "2020-01-22", end: "2020-05-18" },
};

const setTooltips = (durationEls, mapping) => {
  durationEls.forEach((el) => {
    const company = el.dataset.company;
    const entry = company ? mapping[company] : null;
    const start = entry?.start ? formatDate(entry.start) : null;
    const end = entry?.end ? formatDate(entry.end) : null;
    const tooltip = start && end ? `${start} – ${end}` : "Dates: TBD";
    el.setAttribute("data-tooltip", tooltip);
  });
};

const applyExperienceTooltips = async () => {
  const durationEls = Array.from(document.querySelectorAll(".duration"));
  if (!durationEls.length) return;

  try {
    const response = await fetch("./data/experience-dates.json");
    if (!response.ok) throw new Error("Failed to load experience dates");
    const mapping = await response.json();
    setTooltips(durationEls, { ...fallbackExperienceDates, ...mapping });
  } catch (error) {
    setTooltips(durationEls, fallbackExperienceDates);
  }
};

applyExperienceTooltips();
