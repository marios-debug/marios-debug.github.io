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

const trainingData = {
  "az040": {
    title: "Automating Administration with PowerShell (AZ-040) Training — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · 5-day course · Mar 23–27, 2026",
    desc: "Attended a 5-day advanced training course on automating Windows Server administration with PowerShell. Covered scripting fundamentals, pipeline usage, remote management, and task automation for administrator roles. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["PowerShell Scripting", "Task Automation", "Remote Administration", "Azure PowerShell"],
    img: "./assets/img/powershell-logo.webp"
  },
  "luxembourg-army": {
    title: "Visit to the Luxembourg Army — Armée du Luxembourg",
    meta: "Armée du Luxembourg · Site visit · Half-day · Mar 13, 2026",
    desc: "Visited the Luxembourg Army as part of our BTS Cloud Computing class at LGK. The visit covered how the military operates and its career paths, but what stood out most from a technical perspective was their satellite capabilities — Luxembourg's investment in space and defense communication is impressive. We also got insight into their cybersecurity operations and IT infrastructure. It was a good look at how national defense intersects with the kind of tech and infrastructure work we study.",
    skills: ["Defense IT Infrastructure", "Satellite Communications", "Cybersecurity Operations", "National Security Systems"],
    img: "./assets/img/luxembourg-army-logo.webp"
  },
  "aws-recap": {
    title: "AWS re:Invent re:Cap 2026 — ARHS Group",
    meta: "ARHS Group · Half-day session · Mar 4, 2026 · Belval, Luxembourg",
    desc: "Attended the afternoon AWS re:Invent re:Cap 2026 recap hosted and presented by ARHS Group in Belval, Luxembourg. Their team shared takeaways and demos from the event, covering Amazon Connect, security topics, the Kiro coding IDE, Model Context Protocol (MCP), and AI models and demonstrations they are working on. I attended as part of the Lycée Guillaume Kroll student group, representing the school through the BTS Cloud Computing program.",
    skills: ["Amazon Connect", "Cloud Security", "Kiro IDE", "Model Context Protocol", "Enterprise AI Models"],
    img: "./assets/img/aws-logo.webp"
  },
  "quantum": {
    title: "Introduction to Quantum Computing — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Presentation · 2 hours · Mar 3, 2026",
    desc: "Attended a presentation introducing quantum computing concepts, covering the fundamentals of how quantum computers work, their potential applications, and what they mean for the future of computing and cloud infrastructure. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Quantum Computing Fundamentals", "Quantum vs Classical Computing", "Emerging Technologies"],
    img: "./assets/img/deep-logo.webp"
  },
  "blockchain": {
    title: "Blockchain Introduction — The Blockchain Academy",
    meta: "The Blockchain Academy · Workshop series · 3 hours × 3 sessions · Jan–Feb 2026",
    desc: "A proper introduction to blockchain: what it is, how it works, and why it matters. We set up Metamask, got to know the Sepolia testnet and faucets, and were asked to mine some Sepolia ETH at home. The presenter explained mining and the ethics around it. Everyone received their NFT; we sold it to the person next to us to experience a real peer-to-peer trade. He showed how to create an NFT, used IPFS to explain where they live and how the tech works, and demonstrated a Metamask-based voting app where NFT holders could vote. The Blockchain Academy at Lycée Guillaume Kroll (LGK), BTS Cloud Computing.",
    skills: ["Blockchain Fundamentals", "Distributed Ledger Technology", "Cryptocurrency Concepts", "Blockchain Applications"],
    img: "./assets/img/blockchain-academy-logo.webp"
  },
  "phishing": {
    title: "Phishing Workshop — Fondation Restena",
    meta: "Fondation Restena · Workshop · 3 hours · Dec 16, 2025",
    desc: "Attended a 3-hour presentation/workshop on Phishing, focusing on various phishing methods, prevention techniques, and social engineering. Hosted by Fondation Restena and conducted by a representative from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Phishing Methods", "Social Engineering", "Security Awareness", "Prevention Techniques"],
    img: "./assets/img/restena.png"
  },
  "sustainable-cloud": {
    title: "Sustainable Cloud — Arηs Group",
    meta: "Arηs Group · Workshop · 3 hours · Jan 6, 2026",
    desc: "Attended a 3-hour presentation/workshop on Sustainable Cloud, focusing on environmental impact and sustainable practices in cloud computing. Hosted by Arηs Group and conducted by a representative from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Sustainable Cloud", "Environmental Impact", "Cloud Best Practices", "Green IT"],
    img: "./assets/img/arns.png"
  },
  "luxconnect": {
    title: "LuxConnect Tier IV Data Center Visit (Bettembourg)",
    meta: "LuxConnect · Site visit · 4 hours · Jan 9, 2026",
    desc: "Visited the Tier IV LuxConnect data center in Bettembourg with my Cloud Computing class (both 1st and 2nd year students), organized by the 2nd year students through LGK. What stood out most was the incredible level of organization—everything is color-coded and labeled, from power lines to cooling systems. The redundancy is impressive: dual power paths, UPS systems, generators that kick in within seconds, and the facility can run autonomously for days. Efficiency metrics are excellent (PUE ~1.5, WUE ~0.2), and they even reuse waste heat.",
    skills: ["Tier IV Data Center", "Infrastructure Redundancy", "Power Systems", "Cooling Efficiency", "Data Center Operations"],
    img: "./assets/img/luxconnect.png"
  },
  "pluralsight-az900": {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    meta: "Pluralsight · Completed · 100% · Dec 18, 2025",
    desc: "Finished the full Microsoft Certified: Azure Fundamentals (AZ-900) learning path on Pluralsight. Total time spent: ~19h. This preparation contributed to passing the AZ-900 certification exam.",
    skills: ["Cloud Concepts", "Azure Services", "Security & Compliance", "Azure Pricing"],
    img: "./assets/img/pluralsight.jpg"
  },
  "azure-deep": {
    title: "Azure Fundamentals (AZ-900) Training — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Full-day session · 09:00–17:00",
    desc: "Full-day training course covering cloud concepts, Azure services, security & compliance, and Azure pricing. Hosted by DEEP (POST Luxembourg Group) and conducted by a trainer from their team, as part of the BTS Cloud Computing program at LGK.",
    skills: ["Cloud Concepts", "Azure Services", "Security & Compliance", "Azure Pricing"],
    img: "./assets/img/azure-az900.png"
  },
  "pl900": {
    title: "Power Platform Fundamentals (PL-900) Training — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Full-day session · 09:00–17:00 · Dec 5, 2025",
    desc: "Attended a full-day training course (9h-17h) covering PL-900 concepts and Power Platform fundamentals. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Power Platform", "Power Apps", "Power Automate", "Power BI"],
    img: "./assets/img/Power Platform Fundamentals (PL-900)png.png"
  }
};

const trainingModal = document.getElementById("trainingModal");
const trainingModalBackdrop = document.getElementById("trainingModalBackdrop");
const trainingModalClose = document.getElementById("trainingModalClose");
const trainingModalImg = document.getElementById("trainingModalImg");
const trainingModalTitle = document.getElementById("trainingModalTitle");
const trainingModalMeta = document.getElementById("trainingModalMeta");
const trainingModalDesc = document.getElementById("trainingModalDesc");
const trainingModalSkills = document.getElementById("trainingModalSkills");

const openTrainingModal = (id) => {
  const data = trainingData[id];
  if (!data || !trainingModal) return;
  trainingModalImg.src = data.img;
  trainingModalImg.alt = data.title;
  trainingModalTitle.textContent = data.title;
  trainingModalMeta.textContent = data.meta;
  trainingModalDesc.textContent = data.desc;
  trainingModalSkills.innerHTML = data.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("");
  trainingModal.hidden = false;
  trainingModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const closeTrainingModal = () => {
  if (!trainingModal) return;
  trainingModal.classList.remove("is-open");
  trainingModal.hidden = true;
  document.body.style.overflow = "";
};

document.querySelectorAll(".training-modal-btn").forEach((btn) => {
  const row = btn.closest(".training-row");
  const id = row?.dataset.trainingId;
  if (id) {
    btn.addEventListener("click", () => openTrainingModal(id));
  }
});

trainingModalClose?.addEventListener("click", closeTrainingModal);
trainingModalBackdrop?.addEventListener("click", closeTrainingModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && trainingModal?.classList.contains("is-open")) {
    closeTrainingModal();
  }
});

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

const trainingMoreBtn = document.querySelector('.training-more-btn');
const collapsibleTrainingRows = document.querySelectorAll('.training-row[data-collapsible]');

if (trainingMoreBtn && collapsibleTrainingRows.length > 0) {
  trainingMoreBtn.addEventListener('click', () => {
    const isExpanded = trainingMoreBtn.classList.contains('is-expanded');
    collapsibleTrainingRows.forEach((row) => {
      row.classList.toggle('is-visible', !isExpanded);
    });
    trainingMoreBtn.classList.toggle('is-expanded', !isExpanded);
    trainingMoreBtn.setAttribute('aria-expanded', String(!isExpanded));
    trainingMoreBtn.textContent = isExpanded ? 'View more trainings' : 'Show less';
  });
}

const projectsMoreBtn = document.querySelector('.projects-more-btn');
const collapsibleProjectCards = document.querySelectorAll('.projects-grid .card[data-collapsible]');

if (projectsMoreBtn && collapsibleProjectCards.length > 0) {
  projectsMoreBtn.addEventListener('click', () => {
    const isExpanded = projectsMoreBtn.classList.contains('is-expanded');
    collapsibleProjectCards.forEach((card) => {
      card.classList.toggle('is-visible', !isExpanded);
    });
    projectsMoreBtn.classList.toggle('is-expanded', !isExpanded);
    projectsMoreBtn.setAttribute('aria-expanded', String(!isExpanded));
    projectsMoreBtn.textContent = isExpanded ? 'View more projects' : 'Show less';
  });
}
