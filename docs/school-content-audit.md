# School content audit — 22 October 2026

Scope: compare the existing portfolio at `66ecc5f` with the supplied BCLC1 and
BCLC2 school folders. BCLC1 is the completed first year, 2025–2026. BCLC2 is
the current second year, 2026–2027. This audit reads existing files; it does
not independently rerun the original school environments.

## Added case studies

Paths below are relative to the indicated school-year folder. Local source
folders are not copied into this repository.

| Project | Source reviewed | What it supports | Public evidence |
| --- | --- | --- | --- |
| AWS security groups | BCLC2: `CLOSO1/SPAMA/AWS Lab01-Marios.docx` | Recorded allow, block and restore tests between two EC2 instances | Authored summary; addresses and access details omitted |
| MySQL + Docker | BCLC2: `CLOPR1/01-Bieren/01-From-Spreadsheet-to-Database/01_Worksheet_Your_first_MySQL_database-Marios.pdf` | Student answers for schema, constraints and volume persistence | Authored results summary; teacher worksheet not redistributed |
| Chef | BCLC2: `ICODE/presentation-Chef/Chef _ Infrastructure as code-DonnyMarios.pdf` and `Chef Presentation.md` | A co-authored 15-slide research presentation | Original authored presentation copied as PDF |
| Terraform on Azure | BCLC1: `S2/TUBUCO-AUTWO/Teraform/Main.tf`, `variables.tf`, `outputs.tf` | Resource configuration in source files | Resource dependency excerpt; no apply/deployment claim |
| Python dashboard | BCLC1: `S1/PYTWO/Python programms/Server_dashboard/app.py` | Streamlit client, error handling, conversions and short history | Source copy; school endpoint replaced by an environment variable |
| Zabbix planning | BCLC2: `ITMOS/Projects/Network monitoring sem1/README.md`, `inventory-and-tests.md` | Scope, inventory and drafted tests | Generalised public plan; installation and all tests pending |

One MySQL worksheet answer reports a length-limit error with a test string
that appears shorter than the stated column limit. The case study identifies
that discrepancy and calls for a retest instead of treating it as verified.

## Progress and capability updates

- BCLC1: Python, Bash and PowerShell coursework; Windows/Linux; switching and
  routing; NAS storage and virtualization. Scripting files and the retained
  NAS/VIRCL reports support these areas.
- BCLC2: AWS lab, Docker/MySQL exercises and Chef presentation have individual
  answers or authored deliverables.
- BCLC2 Ansible/playbooks/idempotency and OSPF appear in the supplied course
  worksheets. They are listed as current study, not completed deployments.
- BCLC2 SNMP, syslog and continuous monitoring appear in the ITMOS course files
  and project plan. Zabbix remains explicitly in planning.
- Azure AZ-900 and PL-900 entries remain training; no additional exam
  certification has been inferred. Existing Office certifications are retained.

## Retained projects and corrected claims

The previous 14 project URLs remain valid. Six additions bring the catalogue
to 20, with six selected projects shown initially.

- VIRCL: the two Proxmox nodes and the VMware environment are separate
  environments. Removed the misleading claim of a mixed-hypervisor cluster.
  Marios's Proxmox and backup focus remains explicit.
- NAS: replaced production-readiness, no-data-loss and completed monitoring
  claims with the documented lab setup and access tests. The report describes
  a separate BTRFS RAID 1 volume, not only mirrored metadata.
- Ongoing personal projects remain ongoing. Their retained notes were not
  independently audited as running services during this task.
- Existing English and French CV PDFs are preserved. They were not rewritten
  to imply new experience or certifications.

## Material not promoted to personal achievement

- The large spinning/bicycle project contains a team backend, collector,
  sensor processor and several frontends. The retained files do not clearly
  attribute Marios's individual scope. It is a candidate for a later case study
  once that scope is confirmed; team code is not presented as solely his work.
- Teacher slide decks and unanswered worksheets are evidence of curriculum,
  not completed personal implementations.
- Accounting worksheets, agreements, private SWOT documents, access guides,
  personal addresses and credentials are not portfolio evidence.

## Verification

Run `python scripts/validate-site.py` and `git diff --check` for reproducible
static checks. Browser layout, keyboard interactions, mobile presentation,
language switching and external service availability require browser review.
During this task the browser tool denied access to the local preview under its
URL policy; visual and browser interaction verification could not be completed.

Recommended manual review: desktop/mobile widths; dark/light palette; EN/FR/DE
narrative; project filters and year links; CV/training dialogs and Escape/focus;
both BCLC1 reflections; evidence links; galleries and their keyboard controls.

## Requested refinements

- Narrowed the shared maximum container width from 1320px to 1200px.
- Marked Zabbix **In progress**, while retaining its planning phase and pending
  implementation in the case study. The new progress filter includes the six
  unfinished projects already identified in the catalogue.
- Added **Homelab** to the interests list.
- Generated 13 matching editorial cover illustrations for school diagrams,
  logo-only and title-only cards. MiniCFL now has a train-and-cloud cover in
  place of the certification badge. Erasmus uses an existing project photo.
- Covers are conceptual artwork; reports, actual photographs and screenshots
  remain the evidence. Exact prompts and asset paths are recorded in
  `project-cover-prompts.json`. WebP exports total approximately 1.16 MiB.
