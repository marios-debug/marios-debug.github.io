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

  setText("projectCategory", data.category || "Project");
  setText("projectTitle", data.title);
  setText("projectSummary", data.overview || "");

  const heroImg = document.getElementById("projectHeroImg");
  if (heroImg) {
    heroImg.src = data.img || "";
    heroImg.alt = data.title;
  }

  renderTags(data.tags);
  renderActions(id, data.pdf);
  renderInfo(data.details);
  renderSpecs(data.details?.specs);
  renderResources(data.pdf);
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

  function renderActions(projectId, pdf) {
    const container = document.getElementById("projectActions");
    if (!container) return;
    const back = `<a class="btn btn-ghost" href="./index.html#projects">← All projects</a>`;
    const download = pdf
      ? `<a class="btn btn-primary" href="${pdf}" target="_blank" rel="noopener" download>Download PDF</a>`
      : "";
    container.innerHTML = `${back}${download ? " " + download : ""}`;
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

  function renderResources(pdf) {
    const card = document.getElementById("projectResourcesCard");
    const list = document.getElementById("projectResources");
    if (!card || !list) return;
    const items = [];
    if (pdf) {
      items.push(`<li><a href="${pdf}" target="_blank" rel="noopener" download>Download documentation (PDF)</a></li>`);
    }
    items.push(`<li><a href="./index.html#projects">Back to all projects</a></li>`);
    if (!items.length) return;
    list.innerHTML = items.join("");
    card.hidden = false;
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
    container.querySelectorAll("img[data-lightbox]").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        img.src = thumb.dataset.lightbox;
        img.alt = thumb.alt;
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    function close() {
      lightbox.classList.remove("is-open");
      img.src = "";
      img.alt = "";
      document.body.style.overflow = "";
    }
  }

  function renderNotFound() {
    const main = document.querySelector("main");
    if (!main) return;
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
