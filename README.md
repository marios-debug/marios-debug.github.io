# Marios M. Sarkis — portfolio

A buildless GitHub Pages portfolio connecting cloud and infrastructure skills to
case studies, source files and school progress. HTML, CSS and vanilla JavaScript;
no installation or build step is needed.

## Preview

From this directory, run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/ in a browser. Stop the server with Ctrl+C.

## Check

Requires Python and Node.js, with no third-party packages:

```powershell
python scripts/validate-site.py
git diff --check
```

These checks cover HTML nesting, local links and anchors, JavaScript syntax,
project destinations, evidence files and the refresh translation keys. They do
not replace visual or browser interaction testing.

## Content

- `index.html`: static project cards, landing page, school journey and original
  first-year reflections. The selected work remains visible without JavaScript.
- `assets/js/projects-data.js`: retained case-study content.
- `assets/js/school-progress.js`: new school case studies, evidence/status metadata,
  corrections to retained claims, project order and EN/FR/DE refresh copy.
- `project.html` and `assets/js/project-detail.js`: shared case-study page.
- `assets/css/portfolio.css`: the refresh design system, shared by both pages.
- `assets/evidence/`: curated public summaries and source excerpts. Teacher
  worksheets, credentials and school management addresses are excluded.
- `assets/img/covers/`: 12 active matching illustrated project posters, following the
  existing Homelab and RejectionGym covers, exported as WebP for cards and
  case-study headers. Existing evidence
  photographs and screenshots remain in their original galleries. NAS uses the
  existing OpenMediaVault image; Zabbix uses its unaltered official SVG logo.
- `docs/project-cover-prompts.json`: exact prompts, style reference, alt text,
  saved paths and official-logo provenance. The superseded generated Zabbix
  poster is marked inactive.
- `docs/school-content-audit.md`: sources, evidence limits and review notes.

When adding a project, update its case-study data, the `portfolioEntries` metadata
and the static card in `index.html`. Keep the evidence level explicit. A code
file alone does not establish a successful deployment.

Unfinished projects use the `ongoing` status and appear in the **In progress**
filter. An implementation phase, such as Zabbix's current planning work, is
recorded separately in the case study.

The navigation and refreshed narrative support English, French and German.
Technical case studies, original documents, retained course descriptions and
personal reflections keep their source language.

## Review workflow

The 2026 school-progress refresh is on `portfolio/school-progress-2026`, based on
`main` at `66ecc5f`. Review the branch before merging. No live-site deployment
or merge is part of the refresh.
