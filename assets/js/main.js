const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Theme toggle */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const applyTheme = (theme) => {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
    themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  }
};

const savedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

themeToggle?.addEventListener("click", () => {
  const isLight = root.hasAttribute("data-theme");
  const newTheme = isLight ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

/* Internationalization */
const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.viewWork": "View work",
    "nav.getInTouch": "Get in touch",
    "nav.closeMenu": "Close",
    "nav.mobileNav": "Mobile navigation",
    "hero.label": "Hello, I'm",
    "hero.role": "BTS Cloud Computing Student · Infrastructure Focus",
    "hero.tagline": "BTS Cloud Computing student focused on cloud infrastructure, networking, virtualization, and reliable IT operations.",
    "hero.viewProjects": "View Projects",
    "hero.getInTouch": "Get in Touch",
    "about.title": "About Me",
    "about.background": "Background",
    "about.approach": "Approach",
    "about.languages": "Languages",
    "about.interests": "Interests",
    "about.backgroundText": "BTS Cloud Computing student at Lycée Guillaume Kroll, Luxembourg, completing a two-year program focused on cloud infrastructure, virtualization, IP networking, and server administration. Previously trained as an industrial electrician and automation technician, bringing strong systems thinking, disciplined troubleshooting, and extensive hands-on technical experience.",
    "about.approachText": "I build iteratively, validate outcomes, and document everything so setups stay clear, reliable, and repeatable.",
    "education.title": "Education & Experience",
    "education.education": "Education",
    "education.experience": "Experience",
    "education.electricalInternships": "Electrical Technician Internships",
    "education.automotiveInternships": "Automotive Technician Internships",
    "skills.title": "Skills",
    "skills.soft": "Soft Skills",
    "skills.hard": "Hard Skills",
    "projects.title": "Projects",
    "projects.viewDetails": "View details",
    "projects.viewMore": "View more projects",
    "projects.showLess": "Show less",
    "certifications.title": "Certifications & Training",
    "certifications.certifications": "Certifications",
    "certifications.training": "Training",
    "training.viewMore": "View more trainings",
    "training.showLess": "Show less",
    "progress.title": "BTS Cloud Computing Progress",
    "progress.summary": "Currently focused on cloud infrastructure fundamentals and independent lab work, with an emphasis on documentation, repeatable deployments, and clear communication. I'm building skills step by step, validating outcomes, and turning complex topics into structured, organized work.",
    "progress.readFull": "Read full BTS reflection",
    "progress.hide": "Hide BTS reflection",
    "progress.loading": "Loading...",
    "progress.loadError": "Could not load reflection.",
    "progress.empty": "Reflection is empty.",
    "contact.title": "Get in Touch",
    "contact.text": "Open to opportunities in cloud, IT infrastructure, and networking. Have a project, internship, or role in mind? Let's talk.",
    "contact.sayHello": "Say Hello",
    "footer.certifications": "Certifications",
    "footer.progress": "BTS Progress",
    "footer.backToTop": "Back to top",
    "modal.overview": "Overview",
    "modal.objectives": "Objectives",
    "modal.tech": "Technical Implementation",
    "modal.results": "Results & Key Outcomes",
    "modal.keyTakeaways": "Key Takeaways",
    "modal.keySkills": "Key Skills",
    "modal.close": "Close",
    "modal.downloadPdf": "Download PDF",
    "badge.inProgress": "In Progress",
    "badge.learning": "Currently learning",
    "profile.label": "From Wiring to Cloud",
    "profile.headline": "Physical → Connected → Cloud",
    "profile.text": "From cabling and PLCs to code and cloud. I bring a field-tested reliability mindset to digital infrastructure.",
    "cv.title": "View CV",
    "cv.download": "Download CV",
    "cv.hint": "Choose the version you would like to view:",
    "cv.english": "English",
    "cv.french": "French"
  },
  fr: {
    "nav.about": "À propos",
    "nav.experience": "Parcours",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.viewWork": "Voir les projets",
    "nav.getInTouch": "Me contacter",
    "nav.closeMenu": "Fermer",
    "nav.mobileNav": "Navigation mobile",
    "hero.label": "Bonjour, je suis",
    "hero.role": "Étudiant BTS Cloud Computing · Infrastructure",
    "hero.tagline": "Étudiant en BTS Cloud Computing, spécialisé dans l'infrastructure cloud, les réseaux, la virtualisation et les opérations IT fiables.",
    "hero.viewProjects": "Voir les projets",
    "hero.getInTouch": "Me contacter",
    "about.title": "À propos",
    "about.background": "Parcours",
    "about.approach": "Approche",
    "about.languages": "Langues",
    "about.interests": "Intérêts",
    "about.backgroundText": "Étudiant en BTS Cloud Computing au Lycée Guillaume Kroll au Luxembourg, dans un programme de deux ans axé sur l'infrastructure cloud, la virtualisation, les réseaux IP et l'administration de serveurs. Formé auparavant comme électricien industriel et technicien en automatisation, j'apporte une solide pensée systémique, un dépannage rigoureux et une grande expérience technique pratique.",
    "about.approachText": "Je construis de manière itérative, je valide les résultats et je documente tout pour que les configurations restent claires, fiables et reproductibles.",
    "education.title": "Formation & Expérience",
    "education.education": "Formation",
    "education.experience": "Expérience",
    "education.electricalInternships": "Stages technicien électricien",
    "education.automotiveInternships": "Stages technicien automobile",
    "skills.title": "Compétences",
    "skills.soft": "Compétences douces",
    "skills.hard": "Compétences techniques",
    "projects.title": "Projets",
    "projects.viewDetails": "Voir les détails",
    "projects.viewMore": "Voir plus de projets",
    "projects.showLess": "Voir moins",
    "certifications.title": "Certifications & Formations",
    "certifications.certifications": "Certifications",
    "certifications.training": "Formations",
    "training.viewMore": "Voir plus de formations",
    "training.showLess": "Voir moins",
    "progress.title": "Progression BTS Cloud Computing",
    "progress.summary": "Actuellement concentré sur les fondamentaux de l'infrastructure cloud et le travail de laboratoire autonome, avec un accent sur la documentation, les déploiements reproductibles et la communication claire. Je développe mes compétences étape par étape, en validant les résultats et en transformant les sujets complexes en travail structuré et organisé.",
    "progress.readFull": "Lire la réflexion complète",
    "progress.hide": "Masquer la réflexion",
    "progress.loading": "Chargement...",
    "progress.loadError": "Impossible de charger la réflexion.",
    "progress.empty": "La réflexion est vide.",
    "contact.title": "Contact",
    "contact.text": "Ouvert aux opportunités dans le cloud, l'infrastructure IT et les réseaux. Vous avez un projet, un stage ou un poste en tête ? Parlons-en.",
    "contact.sayHello": "Dire bonjour",
    "footer.certifications": "Certifications",
    "footer.progress": "Progression BTS",
    "footer.backToTop": "Retour en haut",
    "modal.overview": "Aperçu",
    "modal.objectives": "Objectifs",
    "modal.tech": "Implémentation technique",
    "modal.results": "Résultats",
    "modal.keyTakeaways": "Points clés",
    "modal.keySkills": "Compétences clés",
    "modal.close": "Fermer",
    "modal.downloadPdf": "Télécharger le PDF",
    "badge.inProgress": "En cours",
    "badge.learning": "En cours d'apprentissage",
    "profile.label": "Du câblage au cloud",
    "profile.headline": "Physique → Connecté → Cloud",
    "profile.text": "Du câblage et des automates au code et au cloud. J'apporte une mentalité de fiabilité éprouvée sur le terrain à l'infrastructure numérique.",
    "cv.title": "Voir le CV",
    "cv.download": "Télécharger le CV",
    "cv.hint": "Choisissez la version que vous souhaitez consulter :",
    "cv.english": "Anglais",
    "cv.french": "Français"
  },
  de: {
    "nav.about": "Über mich",
    "nav.experience": "Werdegang",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "nav.viewWork": "Projekte ansehen",
    "nav.getInTouch": "Kontakt aufnehmen",
    "nav.closeMenu": "Schließen",
    "nav.mobileNav": "Mobile Navigation",
    "hero.label": "Hallo, ich bin",
    "hero.role": "BTS Cloud Computing Student · Infrastruktur",
    "hero.tagline": "BTS Cloud Computing Student mit Fokus auf Cloud-Infrastruktur, Netzwerke, Virtualisierung und zuverlässige IT-Betriebsabläufe.",
    "hero.viewProjects": "Projekte ansehen",
    "hero.getInTouch": "Kontakt aufnehmen",
    "about.title": "Über mich",
    "about.background": "Hintergrund",
    "about.approach": "Ansatz",
    "about.languages": "Sprachen",
    "about.interests": "Interessen",
    "about.backgroundText": "BTS Cloud Computing Student am Lycée Guillaume Kroll in Luxemburg, in einem zweijährigen Programm mit Schwerpunkt auf Cloud-Infrastruktur, Virtualisierung, IP-Netzwerken und Serveradministration. Zuvor als Industrieelektriker und Automatisierungstechniker ausgebildet, mit starkem systemischem Denken, diszipliniertem Troubleshooting und umfangreicher praktischer technischer Erfahrung.",
    "about.approachText": "Ich arbeite iterativ, validiere Ergebnisse und dokumentiere alles, damit Setups klar, zuverlässig und reproduzierbar bleiben.",
    "education.title": "Ausbildung & Erfahrung",
    "education.education": "Ausbildung",
    "education.experience": "Erfahrung",
    "education.electricalInternships": "Praktika als Elektrotechniker",
    "education.automotiveInternships": "Praktika als Kfz-Techniker",
    "skills.title": "Fähigkeiten",
    "skills.soft": "Soziale Kompetenzen",
    "skills.hard": "Technische Fähigkeiten",
    "projects.title": "Projekte",
    "projects.viewDetails": "Details ansehen",
    "projects.viewMore": "Weitere Projekte",
    "projects.showLess": "Weniger anzeigen",
    "certifications.title": "Zertifizierungen & Schulungen",
    "certifications.certifications": "Zertifizierungen",
    "certifications.training": "Schulungen",
    "training.viewMore": "Weitere Schulungen",
    "training.showLess": "Weniger anzeigen",
    "progress.title": "BTS Cloud Computing Fortschritt",
    "progress.summary": "Derzeit fokussiert auf Cloud-Infrastruktur-Grundlagen und unabhängige Laborarbeit, mit Schwerpunkt auf Dokumentation, reproduzierbaren Bereitstellungen und klarer Kommunikation. Ich baue meine Fähigkeiten Schritt für Schritt auf, validiere Ergebnisse und verwandle komplexe Themen in strukturierte, organisierte Arbeit.",
    "progress.readFull": "Vollständige Reflexion lesen",
    "progress.hide": "Reflexion ausblenden",
    "progress.loading": "Laden...",
    "progress.loadError": "Reflexion konnte nicht geladen werden.",
    "progress.empty": "Reflexion ist leer.",
    "contact.title": "Kontakt",
    "contact.text": "Offen für Möglichkeiten in den Bereichen Cloud, IT-Infrastruktur und Netzwerke. Sie haben ein Projekt, ein Praktikum oder eine Rolle im Sinn? Lassen Sie uns reden.",
    "contact.sayHello": "Hallo sagen",
    "footer.certifications": "Zertifizierungen",
    "footer.progress": "BTS Fortschritt",
    "footer.backToTop": "Zurück nach oben",
    "modal.overview": "Übersicht",
    "modal.objectives": "Ziele",
    "modal.tech": "Technische Umsetzung",
    "modal.results": "Ergebnisse",
    "modal.keyTakeaways": "Wichtige Erkenntnisse",
    "modal.keySkills": "Wichtige Fähigkeiten",
    "modal.close": "Schließen",
    "modal.downloadPdf": "PDF herunterladen",
    "badge.inProgress": "In Bearbeitung",
    "badge.learning": "Aktuell am Lernen",
    "profile.label": "Vom Kabel zum Cloud",
    "profile.headline": "Physisch → Vernetzt → Cloud",
    "profile.text": "Von Kabeln und SPS zu Code und Cloud. Ich bringe eine praxiserprobte Zuverlässigkeitsmentalität in die digitale Infrastruktur ein.",
    "cv.title": "Lebenslauf ansehen",
    "cv.download": "Lebenslauf herunterladen",
    "cv.hint": "Wählen Sie die Version, die Sie ansehen möchten:",
    "cv.english": "Englisch",
    "cv.french": "Französisch"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value === undefined) return;
    const attr = el.dataset.i18nAttr;
    if (attr) {
      el.setAttribute(attr, value);
    } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
};

setLanguage(currentLang);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

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
  "aws-architecture": {
    title: "AWS Architecture Workshop — ARHS Group",
    meta: "ARHS Group · 28-hour workshop · May 2026",
    desc: "Completed a 28-hour AWS Architecture workshop delivered by Arnaud Charlier from ARHS Group. The course walked us through AWS core services, architecture principles, and hands-on labs, all as part of my BTS Cloud Computing program at LGK.",
    skills: ["AWS Architecture", "AWS Services", "Cloud Fundamentals", "Hands-on Labs"],
    takeaway: "Built a practical foundation in AWS architecture and core services through guided labs and architecture discussions. The hands-on format helped connect cloud concepts to real service configuration.",
    img: "./assets/img/aws-logo.webp"
  },
  "az040": {
    title: "Automating Administration with PowerShell (AZ-040) Training — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · 5-day course · Mar 23–27, 2026",
    desc: "Took part in a 5-day advanced course on automating Windows Server administration with PowerShell. We covered scripting basics, pipeline usage, remote management, and day-to-day task automation for administrators. The training was hosted by Deep (POST Luxembourg Group) and led by one of their trainers, as part of my BTS Cloud Computing program at LGK.",
    skills: ["PowerShell Scripting", "Task Automation", "Remote Administration", "Azure PowerShell"],
    takeaway: "Gained solid exposure to PowerShell scripting for Windows administration, including pipelines, remote sessions, and task automation cmdlets. While these approaches are not yet part of my regular workflow, the training built a practical foundation I can apply in future server management and scripting tasks.",
    img: "./assets/img/powershell-logo.webp"
  },
  "luxembourg-army": {
    title: "Visit to the Luxembourg Army — Armée du Luxembourg",
    meta: "Armée du Luxembourg · Site visit · Half-day · Mar 13, 2026",
    desc: "Visited the Luxembourg Army with my BTS Cloud Computing class at LGK. The tour covered military operations and career paths, but the technical highlight was their satellite capabilities — Luxembourg's investment in space and defense communication is impressive. We also learned about their cybersecurity operations and IT infrastructure, which showed how national defense overlaps with the infrastructure work we study.",
    skills: ["Defense IT Infrastructure", "Satellite Communications", "Cybersecurity Operations", "National Security Systems"],
    takeaway: "Saw firsthand how national defense relies on satellite and cybersecurity infrastructure at scale. It shifted my perspective on how critical uptime and secure comms are in high-stakes environments.",
    img: "./assets/img/luxembourg-army-logo.webp"
  },
  "aws-recap": {
    title: "AWS re:Invent re:Cap 2026 — ARHS Group",
    meta: "ARHS Group · Half-day session · Mar 4, 2026 · Belval, Luxembourg",
    desc: "Joined the afternoon AWS re:Invent re:Cap 2026 session hosted by ARHS Group in Belval, Luxembourg. Their team shared key takeaways and demos from the event, including Amazon Connect, cloud security, the Kiro coding IDE, Model Context Protocol (MCP), and AI models they are developing. I attended with the Lycée Guillaume Kroll student group as part of the BTS Cloud Computing program.",
    skills: ["Amazon Connect", "Cloud Security", "Kiro IDE", "Model Context Protocol", "Enterprise AI Models"],
    takeaway: "Learned that AWS is pushing heavily into AI-integrated developer tools and contact-center automation. The Model Context Protocol demo showed me how enterprise AI will reshape cloud service architecture.",
    img: "./assets/img/aws-logo.webp"
  },
  "quantum": {
    title: "Introduction to Quantum Computing — DEEP (POST Luxembourg Group)",
    meta: "Deep (POST Luxembourg Group) · Presentation · 2 hours · Mar 3, 2026",
    desc: "Attended an introductory presentation on quantum computing. It covered the basics of how quantum computers work, possible use cases, and what they could mean for the future of computing and cloud infrastructure. The session was hosted by Deep (POST Luxembourg Group) and presented by one of their trainers, as part of my BTS Cloud Computing program at LGK.",
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


const cvModal = document.getElementById("cvModal");
const cvModalBackdrop = document.getElementById("cvModalBackdrop");
const cvModalClose = document.getElementById("cvModalClose");

const openCvModal = () => {
  if (!cvModal) return;
  cvModal.hidden = false;
  cvModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const closeCvModal = () => {
  if (!cvModal) return;
  cvModal.classList.remove("is-open");
  cvModal.hidden = true;
  document.body.style.overflow = "";
};

document.querySelectorAll(".cv-modal-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openCvModal();
  });
});

cvModalClose?.addEventListener("click", closeCvModal);
cvModalBackdrop?.addEventListener("click", closeCvModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cvModal?.classList.contains("is-open")) {
    closeCvModal();
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
const reflectionTabs = document.querySelectorAll(".reflection-tab");

const loadReflection = async (semester = 1) => {
  if (!reflectionStatus || !reflectionContent) return;
  reflectionStatus.textContent = translations[currentLang]?.["progress.loading"] || "Loading...";

  const templateId = semester === 2 ? "reflection-md-s2" : "reflection-md";
  const inlineSource = document.getElementById(templateId);
  let markdown = "";
  if (inlineSource) {
    markdown = inlineSource.innerHTML.trim();
  } else {
    reflectionStatus.textContent = translations[currentLang]?.["progress.loadError"] || "Could not load reflection.";
    return;
  }

  if (!markdown) {
    reflectionStatus.textContent = translations[currentLang]?.["progress.empty"] || "Reflection is empty.";
    return;
  }

  reflectionContent.innerHTML = window.marked ? window.marked.parse(markdown) : markdown;
  reflectionStatus.textContent = "";

  reflectionTabs.forEach((tab) => {
    const isSelected = Number(tab.dataset.semester) === semester;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });
};

if (reflectionToggle && reflectionPanel) {
  let loaded = false;

  const openPanel = async (semester = 1) => {
    reflectionPanel.hidden = false;
    reflectionToggle.setAttribute("aria-expanded", "true");
    reflectionToggle.textContent = translations[currentLang]?.["progress.hide"] || "Hide BTS reflection";
    if (!loaded) {
      loaded = true;
      await loadReflection(semester);
    }
  };

  const closePanel = () => {
    reflectionPanel.hidden = true;
    reflectionToggle.setAttribute("aria-expanded", "false");
    reflectionToggle.textContent = translations[currentLang]?.["progress.readFull"] || "Read full BTS reflection";
  };

  reflectionToggle.addEventListener("click", () => {
    reflectionPanel.hidden ? openPanel(1) : closePanel();
  });

  reflectionTabs.forEach((tab) => {
    tab.addEventListener("click", async () => {
      const semester = Number(tab.dataset.semester);
      if (reflectionPanel.hidden) {
        loaded = false; // ensure content loads when opening directly to a tab
        await openPanel(semester);
      } else {
        await loadReflection(semester);
      }
    });
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
    trainingMoreBtn.textContent = isExpanded
      ? (translations[currentLang]?.["training.viewMore"] || 'View more trainings')
      : (translations[currentLang]?.["training.showLess"] || 'Show less');
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
    projectsMoreBtn.textContent = isExpanded
      ? (translations[currentLang]?.["projects.viewMore"] || 'View more projects')
      : (translations[currentLang]?.["projects.showLess"] || 'Show less');
  });
}
