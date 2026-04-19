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
    takeaway: "Gained practical confidence in writing reusable PowerShell scripts for real administrative tasks. The pipeline approach and remote session management are now part of my regular workflow.",
    img: "./assets/img/powershell-logo.webp"
  },
  "luxembourg-army": {
    title: "Visit to the Luxembourg Army — Armée du Luxembourg",
    meta: "Armée du Luxembourg · Site visit · Half-day · Mar 13, 2026",
    desc: "Visited the Luxembourg Army as part of our BTS Cloud Computing class at LGK. The visit covered how the military operates and its career paths, but what stood out most from a technical perspective was their satellite capabilities — Luxembourg's investment in space and defense communication is impressive. We also got insight into their cybersecurity operations and IT infrastructure. It was a good look at how national defense intersects with the kind of tech and infrastructure work we study.",
    skills: ["Defense IT Infrastructure", "Satellite Communications", "Cybersecurity Operations", "National Security Systems"],
    takeaway: "Saw firsthand how national defense relies on satellite and cybersecurity infrastructure at scale. It shifted my perspective on how critical uptime and secure comms are in high-stakes environments.",
    img: "./assets/img/luxembourg-army-logo.webp"
  },
  "aws-recap": {
    title: "AWS re:Invent re:Cap 2026 — ARHS Group",
    meta: "ARHS Group · Half-day session · Mar 4, 2026 · Belval, Luxembourg",
    desc: "Attended the afternoon AWS re:Invent re:Cap 2026 recap hosted and presented by ARHS Group in Belval, Luxembourg. Their team shared takeaways and demos from the event, covering Amazon Connect, security topics, the Kiro coding IDE, Model Context Protocol (MCP), and AI models and demonstrations they are working on. I attended as part of the Lycée Guillaume Kroll student group, representing the school through the BTS Cloud Computing program.",
    skills: ["Amazon Connect", "Cloud Security", "Kiro IDE", "Model Context Protocol", "Enterprise AI Models"],
    takeaway: "Learned that AWS is pushing heavily into AI-integrated developer tools and contact-center automation. The Model Context Protocol demo showed me how enterprise AI will reshape cloud service architecture.",
    img: "./assets/img/aws-logo.webp"
  },
  "quantum": {
    title: "Introduction to Quantum Computing — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Presentation · 2 hours · Mar 3, 2026",
    desc: "Attended a presentation introducing quantum computing concepts, covering the fundamentals of how quantum computers work, their potential applications, and what they mean for the future of computing and cloud infrastructure. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Quantum Computing Fundamentals", "Quantum vs Classical Computing", "Emerging Technologies"],
    takeaway: "Understood that quantum computing is not a replacement for classical systems but a specialized accelerator for specific problem classes. It will impact cryptography and optimization long before general workloads.",
    img: "./assets/img/deep-logo.webp"
  },
  "blockchain": {
    title: "Blockchain Introduction — The Blockchain Academy",
    meta: "The Blockchain Academy · Workshop series · 3 hours × 3 sessions · Jan–Feb 2026",
    desc: "A proper introduction to blockchain: what it is, how it works, and why it matters. We set up Metamask, got to know the Sepolia testnet and faucets, and were asked to mine some Sepolia ETH at home. The presenter explained mining and the ethics around it. Everyone received their NFT; we sold it to the person next to us to experience a real peer-to-peer trade. He showed how to create an NFT, used IPFS to explain where they live and how the tech works, and demonstrated a Metamask-based voting app where NFT holders could vote. The Blockchain Academy at Lycée Guillaume Kroll (LGK), BTS Cloud Computing.",
    skills: ["Blockchain Fundamentals", "Distributed Ledger Technology", "Cryptocurrency Concepts", "Blockchain Applications"],
    takeaway: "Going through a full hands-on cycle—wallet setup, testnet mining, minting an NFT, and peer-to-peer trading—made the abstract concepts concrete. I now understand where blockchain adds real value versus hype.",
    img: "./assets/img/blockchain-academy-logo.webp"
  },
  "phishing": {
    title: "Phishing Workshop — Fondation Restena",
    meta: "Fondation Restena · Workshop · 3 hours · Dec 16, 2025",
    desc: "Attended a 3-hour presentation/workshop on Phishing, focusing on various phishing methods, prevention techniques, and social engineering. Hosted by Fondation Restena and conducted by a representative from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Phishing Methods", "Social Engineering", "Security Awareness", "Prevention Techniques"],
    takeaway: "Realized that technical defenses are only half the battle. Human behavior and awareness training are equally critical because most breaches start with a single convincing email.",
    img: "./assets/img/restena.png"
  },
  "sustainable-cloud": {
    title: "Sustainable Cloud — Arηs Group",
    meta: "Arηs Group · Workshop · 3 hours · Jan 6, 2026",
    desc: "Attended a 3-hour presentation/workshop on Sustainable Cloud, focusing on environmental impact and sustainable practices in cloud computing. Hosted by Arηs Group and conducted by a representative from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Sustainable Cloud", "Environmental Impact", "Cloud Best Practices", "Green IT"],
    takeaway: "Learned that sustainability in cloud is measurable through PUE and WUE metrics. Efficient cooling and renewable energy sourcing are becoming competitive differentiators for data center operators.",
    img: "./assets/img/arns.png"
  },
  "luxconnect": {
    title: "LuxConnect Tier IV Data Center Visit (Bettembourg)",
    meta: "LuxConnect · Site visit · 4 hours · Jan 9, 2026",
    desc: "Visited the Tier IV LuxConnect data center in Bettembourg with my Cloud Computing class (both 1st and 2nd year students), organized by the 2nd year students through LGK. What stood out most was the incredible level of organization—everything is color-coded and labeled, from power lines to cooling systems. The redundancy is impressive: dual power paths, UPS systems, generators that kick in within seconds, and the facility can run autonomously for days. Efficiency metrics are excellent (PUE ~1.5, WUE ~0.2), and they even reuse waste heat.",
    skills: ["Tier IV Data Center", "Infrastructure Redundancy", "Power Systems", "Cooling Efficiency", "Data Center Operations"],
    takeaway: "Walking through a live Tier IV facility showed me what true redundancy looks like—every system has a backup with autonomous failover. The level of operational discipline and labeling precision was eye-opening.",
    img: "./assets/img/luxconnect.png"
  },
  "pluralsight-az900": {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    meta: "Pluralsight · Completed · 100% · Dec 18, 2025",
    desc: "Finished the full Microsoft Certified: Azure Fundamentals (AZ-900) learning path on Pluralsight. Total time spent: ~19h. This preparation contributed to passing the AZ-900 certification exam.",
    skills: ["Cloud Concepts", "Azure Services", "Security & Compliance", "Azure Pricing"],
    takeaway: "Self-paced learning reinforced that cloud fundamentals are best retained through repetition and hands-on labs. Completing the full path gave me the foundation to pass AZ-900 with confidence.",
    img: "./assets/img/pluralsight.jpg"
  },
  "azure-deep": {
    title: "Azure Fundamentals (AZ-900) Training — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Full-day session · 09:00–17:00",
    desc: "Full-day training course covering cloud concepts, Azure services, security & compliance, and Azure pricing. Hosted by DEEP (POST Luxembourg Group) and conducted by a trainer from their team, as part of the BTS Cloud Computing program at LGK.",
    skills: ["Cloud Concepts", "Azure Services", "Security & Compliance", "Azure Pricing"],
    takeaway: "The instructor-led format helped me ask questions in real time and clarify concepts I had missed during self-study. Having structured time to focus on fundamentals accelerated my understanding.",
    img: "./assets/img/azure-az900.png"
  },
  "pl900": {
    title: "Power Platform Fundamentals (PL-900) Training — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Full-day session · 09:00–17:00 · Dec 5, 2025",
    desc: "Attended a full-day training course (9h-17h) covering PL-900 concepts and Power Platform fundamentals. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.",
    skills: ["Power Platform", "Power Apps", "Power Automate", "Power BI"],
    takeaway: "Discovered how quickly business problems can be solved with low-code tools. Power Automate especially stood out as a way to eliminate repetitive manual tasks without writing full applications.",
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
const trainingModalTakeaway = document.getElementById("trainingModalTakeaway");

const openTrainingModal = (id) => {
  const data = trainingData[id];
  if (!data || !trainingModal) return;
  trainingModalImg.src = data.img;
  trainingModalImg.alt = data.title;
  trainingModalTitle.textContent = data.title;
  trainingModalMeta.textContent = data.meta;
  trainingModalDesc.textContent = data.desc;
  trainingModalTakeaway.textContent = data.takeaway || "";
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

const projectData = {
  "rejectiongym": {
    title: "RejectionGym — Challenge & Progress Platform",
    desc: "A full-stack web platform built to gamify personal growth through daily challenge packs. Users select themed challenges, complete tasks daily, upload proof of completion, and maintain streaks. Progress is visualized through dashboards and shareable reports. The system handles user authentication, file uploads, streak calculation, and social sharing. Built with React for the frontend, Node.js and Express for the API, PostgreSQL for data persistence, and Docker with CI/CD for deployment.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker + CI/CD"],
    pdf: "downloads/RejectionGYM.pdf",
    img: "./assets/img/rejectiongym-thumb.png"
  },
  "homelab": {
    title: "Secure Family Private Cloud + Learning Lab",
    desc: "Designed and deployed a private cloud infrastructure for secure family data storage and a dedicated lab environment for testing IT concepts. The setup runs on Proxmox VE with virtualized TrueNAS for storage, automated backup routines, and network-segmented self-hosted services. Includes VPN access for remote connectivity, UPS integration for power resilience, and comprehensive documentation for reproducibility.",
    tags: ["Private Cloud", "Backups", "Self-Hosting", "Network Security"],
    pdf: "downloads/HomeLab-project.pdf",
    img: "./assets/img/homelab-project-thumb.png"
  },
  "nas": {
    title: "NAS Server Setup & Configuration",
    desc: "Transformed a bare-metal rack server into a production-ready network-attached storage solution using OpenMediaVault 8. Configured hardware RAID 5 for performance and BTRFS RAID 1 for metadata redundancy. Set up cross-platform access via SMB, NFS, and SFTP with granular user permissions. Implemented automated snapshot-based backups and monitoring alerts for data integrity and disk health.",
    tags: ["OpenMediaVault", "RAID 5", "BTRFS RAID 1", "SMB/NFS/SFTP"],
    pdf: "downloads/NAS_Project_Team2.pdf",
    img: "./assets/img/openmediavault.png"
  },
  "lab8": {
    title: "Lab 8 Windows Services: VPN + DirectAccess",
    desc: "A comprehensive Windows Server lab exercise deploying secure remote access solutions. Built an Active Directory Domain Services infrastructure with integrated DNS and DHCP. Configured both traditional VPN (SSTP) and DirectAccess for always-on connectivity. Implemented certificate-based authentication and network access protection. Fully documented with network topology diagrams, configuration steps, and troubleshooting guides.",
    tags: ["Windows Server", "VPN", "DirectAccess", "AD DS"],
    pdf: "downloads/Lab8.WindowsServices.MariosDonovan.pdf",
    img: "./assets/img/lab8.png"
  },
  "grademanagement": {
    title: "Grade Management System",
    desc: "A secure web application for managing academic grades with role-based access control. Students can view their grades and track performance over time. Professors can create courses, enter grades, and publish results. Administrators manage users, audit logs, and system configuration. Built with FastAPI for the backend, JWT for stateless authentication, and Docker for consistent deployment across environments.",
    tags: ["FastAPI", "JWT", "Docker"],
    pdf: "downloads/Planning document-GradingManagementSystem.pdf",
    img: "./assets/img/Grademanagmentsystem.png"
  },
  "weekflow": {
    title: "WeekFlow — PowerApps Week Planner",
    desc: "A low-code weekly planner application built with Microsoft PowerApps and integrated with SharePoint as the data backend. Features include quick task creation, drag-and-drop status tracking, and automated email reminders via Power Automate. Designed for team coordination with role-based views and real-time synchronization across devices.",
    tags: ["PowerApps", "SharePoint", "Automation"],
    pdf: null,
    img: "./assets/img/Weekflow.logo.png"
  },
  "portfolio": {
    title: "Portfolio Website — GitHub Pages",
    desc: "A personal portfolio website designed and built to document BTS Cloud Computing progress, projects, and professional reflection. Follows GRAP design principles for consistent grid, rhythm, alignment, and proportion. Deployed on GitHub Pages with a fully static architecture. Features responsive layouts, scroll-triggered animations, accessible navigation, and semantic HTML structure.",
    tags: ["GitHub Pages", "Documentation", "Design"],
    pdf: null,
    img: "./assets/img/github.logo.png"
  },
  "pif": {
    title: "PIF Smart Technologies (Coffee Fermentation)",
    desc: "An automated coffee-bean fermentation system designed as a capstone industrial automation project. Integrated temperature and humidity sensors for real-time process monitoring. Programmed control logic in Siemens TIA Portal using ladder logic and structured text. Designed HMI operator panels for process visualization and manual override. Delivered complete technical documentation including electrical schematics, PLC code, and customer handover manuals.",
    tags: ["Smart Tech", "Sensors", "PLC/HMI", "Documentation"],
    pdf: "downloads/Kundenordner.pdf",
    img: "./assets/img/PIF.png"
  },
  "erasmus": {
    title: "Erasmus+",
    desc: "Participated in a Smart Technologies exchange program at Carl Benz Schule in Germany. As part of a team, built an autonomous line-following car programmed with Arduino C++. Designed and 3D-printed custom chassis components. Achieved the best team time of 32 seconds on the competition track. Presented the project and technical approach to an audience of approximately 40 students and faculty. Emphasis on rapid prototyping, iterative testing, and cross-cultural teamwork.",
    tags: ["3D Modeling", "C++ Programming", "Arduino"],
    pdf: null,
    img: "./assets/img/eu-flag-erasmus-logo.jpg"
  }
};

const projectModal = document.getElementById("projectModal");
const projectModalBackdrop = document.getElementById("projectModalBackdrop");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalImg = document.getElementById("projectModalImg");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalTags = document.getElementById("projectModalTags");
const projectModalDesc = document.getElementById("projectModalDesc");
const projectModalFooter = document.getElementById("projectModalFooter");

const openProjectModal = (id) => {
  const data = projectData[id];
  if (!data || !projectModal) return;
  projectModalImg.src = data.img;
  projectModalImg.alt = data.title;
  projectModalTitle.textContent = data.title;
  projectModalTags.innerHTML = data.tags.map((t) => `<span class="mini-tag">${t}</span>`).join("");
  projectModalDesc.textContent = data.desc;
  if (data.pdf) {
    projectModalFooter.innerHTML = `<a class="btn btn-primary" href="${data.pdf}" target="_blank" rel="noopener" download>Download PDF</a>`;
  } else {
    projectModalFooter.innerHTML = "";
  }
  projectModal.hidden = false;
  projectModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const closeProjectModal = () => {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.hidden = true;
  document.body.style.overflow = "";
};

document.querySelectorAll(".project-modal-btn").forEach((btn) => {
  const id = btn.dataset.projectId;
  if (id) {
    btn.addEventListener("click", () => openProjectModal(id));
  }
});

projectModalClose?.addEventListener("click", closeProjectModal);
projectModalBackdrop?.addEventListener("click", closeProjectModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal?.classList.contains("is-open")) {
    closeProjectModal();
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
    if (el.getAttribute("data-tooltip")) return;
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
