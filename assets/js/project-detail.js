(() => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = id ? getProjectById(id) : null;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (!data) {
    renderNotFound();
    return;
  }

  document.title = `${data.title} · Marios M. Sarkis`;
  document.querySelector('meta[name="description"]').content = data.overview || data.title;

  setText("projectCategory", data.category || "Project");
  setText("projectTitle", data.title);
  setText("projectSummary", data.overview || "");

  const heroImg = document.getElementById("projectHeroImg");
  if (heroImg) {
    heroImg.src = data.img || "";
    heroImg.alt = data.imageAlt || data.title;
    const media = heroImg.closest(".project-hero-media");
    media?.classList.toggle("generated-cover", data.imagePresentation === "poster");
    media?.classList.toggle("logo-cover", data.imagePresentation === "logo");
  }
  const imageCredit = document.getElementById("projectImageCredit");
  if (imageCredit && data.imageCredit) {
    imageCredit.textContent = data.imageCredit;
    imageCredit.hidden = false;
  }

  renderTags(data.tags);
  renderActions(id, data.pdf, data.evidence);
  renderInfo(data.details);
  renderSpecs(data.details?.specs);
  renderResources(data.pdf, data.evidence);
  renderEvidence(data);
  renderBlock("projectContextBlock", "projectContext", data.details?.context || data.overview);
  renderBlock("projectObjectivesBlock", "projectObjectives", data.objectives);
  renderBlock("projectTechBlock", "projectTech", data.tech);
  renderBlock("projectResultsBlock", "projectResults", data.results);
  renderBlock("projectOutcomeBlock", "projectOutcome", data.details?.outcome);
  renderBlock("projectChallengesBlock", "projectChallenges", data.details?.challenges);
  renderBlock("projectLessonsBlock", "projectLessons", data.details?.lessonsLearned);
  renderBlock("projectFutureBlock", "projectFuture", data.details?.futureWork);
  renderHighlights(data.details?.highlights);
  renderGallery(data.details?.gallery, data.title);

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function renderTags(tags) {
    const container = document.getElementById("projectTags");
    if (!container || !Array.isArray(tags)) return;
    container.innerHTML = tags
      .map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`)
      .join("");
  }

  function renderActions(projectId, pdf, evidence = []) {
    const container = document.getElementById("projectActions");
    if (!container) return;
    const back = `<a class="btn btn-ghost" href="./index.html#projects">← All projects</a>`;
    const download = pdf
      ? `<a class="btn btn-primary" href="${pdf}" target="_blank" rel="noopener" download>Download PDF</a>`
      : "";
    const source = !pdf && evidence.length
      ? `<a class="btn btn-primary" href="${escapeHtml(evidence[0].url)}" target="_blank" rel="noopener">${escapeHtml(evidence[0].label)} ↗</a>`
      : "";
    container.innerHTML = `${back} ${download || source}`;
  }

  function renderSpecs(specs) {
    const card = document.getElementById("projectSpecsCard");
    const list = document.getElementById("projectSpecs");
    if (!card || !list || !Array.isArray(specs) || !specs.length) return;
    list.innerHTML = specs
      .map(
        (s) => `
          <div>
            <dt>${escapeHtml(s.label)}</dt>
            <dd>${escapeHtml(s.value)}</dd>
          </div>
        `
      )
      .join("");
    card.hidden = false;
  }

  function renderInfo(details) {
    const card = document.getElementById("projectInfoCard");
    const list = document.getElementById("projectInfo");
    if (!card || !list || !details) return;
    const items = [];
    if (details.role) items.push({ label: "My role", value: details.role });
    if (details.team) items.push({ label: "Team", value: details.team });
    if (details.timeline) items.push({ label: "Timeline", value: details.timeline });
    if (details.duration) items.push({ label: "Duration", value: details.duration });
    if (details.phase) items.push({ label: "Current phase", value: details.phase });
    if (!items.length) return;
    list.innerHTML = items
      .map(
        (s) => `
          <div>
            <dt>${escapeHtml(s.label)}</dt>
            <dd>${escapeHtml(s.value)}</dd>
          </div>
        `
      )
      .join("");
    card.hidden = false;
  }

  function renderResources(pdf, evidence = []) {
    const card = document.getElementById("projectResourcesCard");
    const list = document.getElementById("projectResources");
    if (!card || !list) return;
    const items = [];
    if (pdf) {
      items.push(`<li><a href="${pdf}" target="_blank" rel="noopener" download>Download documentation (PDF)</a></li>`);
    }
    evidence.forEach(item => items.push(`<li><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)} ↗</a></li>`));
    items.push(`<li><a href="./index.html#projects">Back to all projects</a></li>`);
    if (!items.length) return;
    list.innerHTML = items.join("");
    card.hidden = false;
  }

  function renderEvidence(project) {
    const box = document.getElementById("projectEvidence");
    const meta = project.portfolio;
    if (!box || !meta) return;
    const status = { documented: "Documented work", source: "Source available", research: "Research & presentation", planning: "Planning — implementation pending", ongoing: "In progress" }[meta.status];
    const note = {
      documented: "Explore the linked report, images or coursework, together with my role and the concrete project results below.",
      source: "Inspectable coursework source. Deployment verification is a next step.",
      research: "Research and technical communication, supported by an authored presentation. Practical deployment is a future step.",
      planning: "As of 22 October 2026, scope, inventory and acceptance tests are drafted. The next milestone is installation and a first verified metric.",
      ongoing: "An active personal project. The notes below describe its scope, current work and next steps."
    }[meta.status];
    box.innerHTML = `<strong>${escapeHtml(status)} · ${escapeHtml(meta.year)}</strong>${escapeHtml(project.progressNote || note)}`;
    box.hidden = false;
  }

  function renderBlock(blockId, textId, text) {
    const block = document.getElementById(blockId);
    const p = document.getElementById(textId);
    if (!block || !p || !text) return;
    p.textContent = text;
    block.hidden = false;
  }

  function renderHighlights(highlights) {
    const block = document.getElementById("projectHighlightsBlock");
    const list = document.getElementById("projectHighlights");
    if (!block || !list || !Array.isArray(highlights) || !highlights.length) return;
    list.innerHTML = highlights
      .map((h) => `<li>${escapeHtml(h)}</li>`)
      .join("");
    block.hidden = false;
  }

  function renderGallery(images, titlePrefix) {
    const section = document.getElementById("projectGallerySection");
    const container = document.getElementById("projectGallery");
    if (!section || !container || !Array.isArray(images) || !images.length) return;

    container.innerHTML = images
      .map((src, index) => {
        const caption = `Image ${index + 1}`;
        return `
          <figure>
            <img src="${src}" alt="${escapeHtml(titlePrefix)} — ${caption}" loading="lazy" data-lightbox="${src}" />
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      })
      .join("");

    section.hidden = false;
    initLightbox(container);
  }

  function initLightbox(container) {
    let lightbox = document.querySelector(".project-lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.className = "project-lightbox";
      lightbox.setAttribute("role", "dialog");
      lightbox.setAttribute("aria-modal", "true");
      lightbox.setAttribute("aria-label", "Image preview");
      lightbox.hidden = true;
      lightbox.innerHTML = `
        <button class="btn btn-ghost project-lightbox-close" type="button" aria-label="Close preview">Close</button>
        <img src="" alt="" />
      `;
      document.body.appendChild(lightbox);

      lightbox.querySelector(".project-lightbox-close").addEventListener("click", close);
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) close();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
      });
    }

    const img = lightbox.querySelector("img");
    let returnFocus;
    container.querySelectorAll("img[data-lightbox]").forEach((thumb) => {
      thumb.tabIndex = 0;
      thumb.setAttribute("role", "button");
      thumb.setAttribute("aria-label", `Enlarge ${thumb.alt}`);
      const open = () => {
        returnFocus = document.activeElement;
        img.src = thumb.dataset.lightbox;
        img.alt = thumb.alt;
        lightbox.hidden = false;
        lightbox.classList.add("is-open");
        document.querySelectorAll("body > header, body > main, body > footer").forEach(el => { el.inert = true; });
        document.body.style.overflow = "hidden";
        lightbox.querySelector("button").focus();
      };
      thumb.addEventListener("click", open);
      thumb.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
      });
    });
    lightbox.addEventListener("keydown", event => {
      if (event.key === "Tab") { event.preventDefault(); lightbox.querySelector("button").focus(); }
    });

    function close() {
      lightbox.classList.remove("is-open");
      lightbox.hidden = true;
      img.removeAttribute("src");
      img.alt = "";
      document.querySelectorAll("body > header, body > main, body > footer").forEach(el => { el.inert = false; });
      document.body.style.overflow = "";
      returnFocus?.focus();
    }
  }

  function renderNotFound() {
    const main = document.querySelector("main");
    if (!main) return;
    document.title = "Project not found · Marios M. Sarkis";
    main.innerHTML = `
      <section class="project-not-found">
        <h1>Project not found</h1>
        <p>The project you are looking for does not exist or the link is incorrect.</p>
        <a class="btn btn-primary" href="./index.html#projects">View all projects</a>
      </section>
    `;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
