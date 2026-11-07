/* School progress reviewed against local coursework on 22 October 2026.
   Keep status and evidence together: source code is not a deployment record. */
Object.assign(projectData, {
  awssecurity: {
    title: "AWS EC2 Network Security Lab",
    category: "Cloud networking · BCLC2",
    overview: "Two Amazon Linux instances, one private web connection, and a security-group rule tested in both directions. A second-year lab about proving what a network allows.",
    objectives: "Connect to EC2 through SSH, serve an Apache page on port 8080, and restrict instance-to-instance traffic with a security group.",
    tech: "Amazon EC2, Amazon Linux, Apache, security groups, SSH from PowerShell, and curl over private addressing. The source report records a successful request, a timeout after removing the rule, and restored communication after adding it back.",
    results: "The completed lab report documents the allow → block → restore sequence. Checking the private addresses and terminal prompts resolved early confusion about which server and rule were being tested.",
    tags: ["AWS EC2", "Security groups", "Linux", "SSH", "curl"],
    img: "./assets/img/studies/aws-boundary.svg",
    evidence: [{ label: "Read the lab evidence", url: "./assets/evidence/aws-security-lab.md", kind: "Lab summary" }],
    details: {
      role: "Lab implementation and individual documentation", team: "Individual coursework", timeline: "BCLC2 · 2026–2027", duration: "Practical lab",
      context: "This builds on first-year Azure and networking work by applying the same isolation mindset in AWS.",
      outcome: "A documented positive connection test, negative connection test, and recovery test between the two instances.",
      challenges: "Using public addresses in an internal rule and switching between terminal sessions made the first tests confusing. Verifying the private addresses and the current host made the test repeatable.",
      lessonsLearned: "A rule is easier to understand when its effect is tested. A successful request alone does not establish that unwanted traffic is blocked.",
      futureWork: "Repeat the exercise with a versioned infrastructure definition and retain timestamped test output.",
      highlights: ["Restricted internal web traffic", "Tested an allowed request with curl", "Removed the rule and recorded a timeout", "Restored the rule and connectivity"],
      specs: [{ label: "Compute", value: "Two Amazon Linux EC2 instances" }, { label: "Service", value: "Apache on TCP 8080" }, { label: "Evidence", value: "Completed student lab report" }]
    }
  },
  mysqldocker: {
    title: "MySQL & Docker Database Lab",
    category: "Containers & databases · BCLC2",
    overview: "A MySQL and phpMyAdmin lab using Docker Compose. The useful part: deliberately breaking constraints and checking that data survives a container restart.",
    objectives: "Create a relational customer table, insert data through the UI and SQL, explain primary and unique keys, and verify persistent storage.",
    tech: "Docker Compose, MySQL, phpMyAdmin, an InnoDB customer table, AUTO_INCREMENT, PRIMARY KEY, UNIQUE and NOT NULL constraints, and a named database volume.",
    results: "The completed worksheet records four inserted customers, duplicate-key and null-value errors, and the same rows after compose down and up. A fourth length-limit error is recorded in the worksheet, but the supplied test string appears shorter than its stated limit; that result needs rechecking.",
    tags: ["Docker Compose", "MySQL", "SQL", "Volumes"],
    img: "./assets/img/studies/database.svg",
    evidence: [{ label: "Read the recorded checks", url: "./assets/evidence/mysql-docker-lab.md", kind: "Lab summary" }],
    details: {
      role: "Database setup, SQL exercises and worksheet answers", team: "Individual coursework", timeline: "BCLC2 · 2026–2027", duration: "Practical lab",
      context: "The course moves from spreadsheet-style data into a relational model. Containers make the database environment easy to restart while a named volume keeps its state.",
      outcome: "A documented customer schema, constraint checks and persistence check. The evidence summary identifies one test that still needs verification.",
      lessonsLearned: "Application checks and database constraints solve different problems. Containers can be disposable while their data needs a deliberate lifecycle.",
      futureWork: "Recheck the length-limit test with an actually oversized value, then extend the schema with related tables and foreign keys.",
      highlights: ["Primary key versus changeable email address", "Duplicate and null rejection recorded", "Data persisted across container recreation", "A questionable worksheet result identified for retest"],
      specs: [{ label: "Runtime", value: "Docker Compose" }, { label: "Database", value: "MySQL / InnoDB" }, { label: "Storage", value: "Named volume" }]
    }
  },
  chef: {
    title: "Chef Infrastructure as Code",
    category: "Technical communication · BCLC2",
    overview: "A joint presentation on configuration management: how a recipe describes a server, what idempotency means, and where Chef fits beside Terraform and Docker.",
    objectives: "Turn a configuration-management tool into a clear technical story, with an Nginx recipe, a client-run walkthrough, and a comparison of provisioning, configuration and application runtime.",
    tech: "Chef research, a Ruby DSL recipe for Nginx, cookbook structure, desired state and configuration drift. The presentation also introduces code checks and infrastructure verification as concepts.",
    results: "A 15-slide authored presentation with a worked recipe, diagrams and source references. This is research and presentation evidence; it does not establish that a Chef-managed environment was deployed.",
    tags: ["Chef", "IaC", "Ruby DSL", "Technical communication"],
    img: "./assets/img/studies/chef.svg",
    pdf: "./assets/downloads/Chef-Infrastructure-as-Code-Marios-Donovan.pdf",
    details: {
      role: "Co-author: research and technical presentation", team: "Marios Sarkis & Donovan Glodt", timeline: "ICODE · BCLC2 · October 2026", duration: "Course assignment",
      context: "Second-year IaC coursework adds configuration management to the infrastructure work from year one.",
      outcome: "An inspectable presentation explaining the lifecycle of a recipe and how a repeated run should behave.",
      lessonsLearned: "Creating a machine and keeping its configuration consistent are separate responsibilities. A small example makes that distinction easier to explain.",
      futureWork: "Run the recipe in a disposable VM and capture first-run, repeat-run and drift-repair results.",
      highlights: ["15-slide joint presentation", "Nginx package, file and service recipe", "Desired-state and drift diagrams", "Research sources included"],
      specs: [{ label: "Deliverable", value: "Authored presentation PDF" }, { label: "Evidence level", value: "Research / presentation" }, { label: "Module", value: "Infrastructure as Code (ICODE)" }]
    }
  },
  terraformazure: {
    title: "Azure Infrastructure with Terraform",
    category: "Infrastructure as code · BCLC1",
    overview: "Terraform coursework defining an Azure Linux web-server environment: resource group, VNet, subnet, security group, public IP, network interface and VM.",
    objectives: "Express the dependencies of a small Azure environment in code and separate its configuration values from resource definitions.",
    tech: "Terraform with the AzureRM provider, input variables, outputs, an SSH public key, and an Nginx bootstrap script. The original lab includes broad inbound rules; the published excerpt focuses on resource dependencies and is not a hardened deployment template.",
    results: "Source files are present for the environment and its variables and outputs. No apply log or deployed-resource record was found, so this case study demonstrates the configuration rather than a verified deployment.",
    tags: ["Terraform", "Azure", "AzureRM", "Linux", "Nginx"],
    img: "./assets/img/studies/terraform.svg",
    evidence: [{ label: "Inspect the Terraform excerpt", url: "./assets/evidence/azure-infrastructure.tf.txt", kind: "Source excerpt" }],
    details: {
      role: "Infrastructure configuration coursework", team: "BCLC1 coursework", timeline: "BCLC1 · 2025–2026 · Semester 2", duration: "Lab exercise",
      context: "The next step after configuring infrastructure through a portal is describing its intended shape in files that can be reviewed.",
      outcome: "A resource definition spanning networking and compute, with inputs and outputs in separate files.",
      lessonsLearned: "Code exposes the dependencies between resources. A configuration file and evidence of a successful deployment are different deliverables.",
      futureWork: "Narrow inbound access, validate the configuration, and capture plan, apply and teardown results in a disposable subscription.",
      highlights: ["Resource-group → network → VM dependencies", "Variable-based naming and configuration", "SSH public-key reference", "Nginx bootstrap defined in code"],
      specs: [{ label: "Provider", value: "AzureRM" }, { label: "Guest", value: "Ubuntu Linux" }, { label: "Evidence level", value: "Source code; deployment unverified" }]
    }
  },
  serverdashboard: {
    title: "Python Server Monitoring Dashboard",
    category: "Monitoring & scripting · BCLC1",
    overview: "A Streamlit client that fetches server metrics from a JSON API and presents CPU, memory and disk data with a short history.",
    objectives: "Make infrastructure metrics readable, handle failed API requests, and keep a bounded set of recent observations for charts.",
    tech: "Python, Streamlit, requests and pandas. The source handles HTTP and JSON failures, converts bytes to GiB, parses timestamps and stores up to 60 measurements in session state.",
    results: "The application source implements metric cards, history charts and API-error feedback. The public source copy uses an environment variable in place of the school API address. It was not connected to the school service during this portfolio review.",
    tags: ["Python", "Streamlit", "REST API", "pandas"],
    img: "./assets/img/studies/monitoring.svg",
    evidence: [{ label: "Inspect the dashboard source", url: "./assets/evidence/server-dashboard.py.txt", kind: "Source code" }],
    details: {
      role: "Python metrics-client coursework", team: "BCLC1 coursework", timeline: "BCLC1 · 2025–2026 · Semester 1", duration: "Python practical",
      context: "A bridge between Python programming and infrastructure operations: taking machine-readable metrics and making them useful to a person.",
      outcome: "An inspectable client with request handling, unit conversion and a rolling metrics history.",
      lessonsLearned: "Useful monitoring needs clear units and useful failure states. A chart is only as trustworthy as the data behind it.",
      futureWork: "Add schema validation and test the client against recorded API responses before reconnecting it to a live service.",
      highlights: ["CPU, RAM and disk presentation", "Request timeout and JSON-error handling", "Rolling 60-measurement history", "School endpoint omitted from public source"],
      specs: [{ label: "Interface", value: "Streamlit" }, { label: "Data", value: "JSON metrics API" }, { label: "Evidence level", value: "Application source" }]
    }
  },
  networkmonitoring: {
    title: "Zabbix Network Monitoring",
    category: "Infrastructure monitoring · BCLC2",
    overview: "A current two-person project planning Zabbix monitoring for two standalone Proxmox hosts, a test web service and a controlled incident demonstration.",
    objectives: "Inventory the infrastructure, choose checks that reflect service health, and define a repeatable problem → notification → recovery test.",
    tech: "Planned: Zabbix on a CyberLab VM, Proxmox API and ICMP checks, a disposable Linux service VM, agent metrics and an available SNMP target. Exact installation, connectivity and permissions remain to be verified.",
    results: "Scope, an initial inventory and a test matrix are documented. As of 22 October 2026, the project is in planning: installation, metric collection and all incident tests remain unverified.",
    tags: ["Zabbix", "Proxmox", "SNMP", "Incident testing"],
    img: "./assets/img/studies/zabbix.svg",
    evidence: [{ label: "Read the monitoring plan", url: "./assets/evidence/network-monitoring-plan.md", kind: "Project plan" }],
    details: {
      role: "Co-planning inventory, monitoring coverage and acceptance tests", team: "Marios & Donovan", timeline: "ITMOS · BCLC2 · October 2026", duration: "In progress", phase: "Planning · implementation pending",
      context: "First-year work built and backed up infrastructure. This project asks how to tell when that infrastructure, and the services inside it, stop working.",
      outcome: "A scoped plan for two standalone hosts and an evidence workbook. No working monitoring deployment is claimed.",
      challenges: "Host reachability does not establish that an application is healthy. The test plan separates hypervisor, guest and HTTP-service checks.",
      futureWork: "Verify inventory and connectivity, install the monitoring VM, add the first target, then execute the controlled incident and recovery tests.",
      highlights: ["Two-host scope agreed", "Inventory and monitoring matrix drafted", "Positive and negative test criteria defined", "Eight test scenarios planned; none executed yet"],
      specs: [{ label: "Phase", value: "Planning as of 22 October 2026" }, { label: "Targets", value: "Two standalone Proxmox hosts" }, { label: "Next milestone", value: "First verified metric" }]
    }
  }
});

/* Correct two overstatements in the inherited copy. */
projectData.vircl.details.context = "A team lab comparing Proxmox and VMware on physical HP servers. My work focused on the two Proxmox nodes; the VMware environment was a separate deployment led by my teammate.";
projectData.nas.overview = "A school team project turning a bare-metal rack server into network-attached storage, with redundant disks, cross-platform shares and documented access tests.";
projectData.nas.results = "The team report records hardware setup, RAID configuration, OpenMediaVault installation and shared access from mixed clients. Health alerts and additional recovery work remain follow-up tasks.";
projectData.nas.tech = "OpenMediaVault manages the NAS. The documented work covers hardware RAID, BTRFS configuration, SMB/NFS/SFTP shares and user/group permissions. This is a school lab, with further work planned on automated backups and health alerts.";
projectData.nas.details.highlights = ["Bare-metal hardware setup and RAID configuration", "OpenMediaVault installation", "SMB, NFS and SFTP share configuration", "Cross-platform access testing", "Day-by-day team documentation"];
projectData.nas.details.specs = projectData.nas.details.specs.filter(s => s.label !== "Monitoring");
projectData.nas.objectives = "Configure redundant lab storage, cross-platform file sharing and user/group permissions, and document the setup and access tests.";
projectData.nas.details.specs.find(s => s.label === "Filesystem").value = "EXT4 on hardware RAID; separate BTRFS RAID 1 volume";

/* The order is intentional: practical infrastructure evidence first. */
const portfolioEntries = [
  { id: "vircl", group: "infrastructure", year: "BCLC1", status: "documented", title: "VIRCL — Server Virtualization", summary: "Two Proxmox nodes, shared NAS storage and a documented VM lifecycle. My focus: VM and hypervisor backups.", proof: "Technical report · PDF", featured: true },
  { id: "awssecurity", group: "cloud", year: "BCLC2", status: "documented", title: "AWS EC2 Network Security Lab", summary: "AWS security groups tested through a successful request, a blocked connection and restored access.", proof: "Completed lab · recorded tests", featured: true },
  { id: "nas", group: "infrastructure", year: "BCLC1", status: "documented", title: "NAS Server Setup & Configuration", summary: "Hardware, RAID and OpenMediaVault shares. A team build with documented access from different operating systems.", proof: "Team report · hardware photos", featured: true },
  { id: "mysqldocker", group: "code", year: "BCLC2", status: "documented", title: "MySQL & Docker Database Lab", summary: "MySQL constraints, deliberate failures and persistent data across container recreation.", proof: "Completed worksheet · checks", featured: true },
  { id: "chef", group: "code", year: "BCLC2", status: "research", title: "Chef Infrastructure as Code", summary: "A joint Chef presentation: recipes, desired state and the difference between provisioning and configuration.", proof: "15-slide authored presentation", featured: true },
  { id: "networkmonitoring", group: "infrastructure", year: "BCLC2", status: "ongoing", title: "Zabbix Network Monitoring", summary: "Current Zabbix project: two Proxmox hosts, a monitoring matrix and a controlled incident test plan.", proof: "Project plan · tests not yet run", featured: true },
  { id: "terraformazure", group: "cloud", year: "BCLC1", status: "source", title: "Azure Infrastructure with Terraform", summary: "Networking and a Linux web-server VM described as resources, variables and outputs.", proof: "Inspectable Terraform excerpt" },
  { id: "serverdashboard", group: "code", year: "BCLC1", status: "source", title: "Python Server Monitoring Dashboard", summary: "A Python metrics client with readable units, request-error handling and a bounded history.", proof: "Inspectable Python source" },
  { id: "minicflaz104", group: "cloud", year: "BCLC1", status: "documented", title: "MiniCFL — Azure Train Simulator", summary: "A team train-simulator project. My role: the VNet, security groups and private PostgreSQL VM.", proof: "Architecture & simulator images" },
  { id: "lab8", group: "infrastructure", year: "BCLC1", status: "documented", title: "Windows Server VPN & DirectAccess", summary: "VPN and DirectAccess in a documented Windows Server lab with AD DS and supporting network services.", proof: "Lab documentation · PDF" },
  { id: "linuxloganalyser", group: "code", year: "BCLC1", status: "documented", title: "Linux Log Analyser", summary: "Python and regex for structured Linux syslog analysis, statistics and suspicious-activity checks.", proof: "Project document · PDF" },
  { id: "grademanagement", group: "code", year: "BCLC1", status: "documented", title: "Grade Management System", summary: "A course project around role-based access for students, professors and administrators.", proof: "Planning document · PDF" },
  { id: "weekflow", group: "code", year: "BCLC1", status: "documented", title: "WeekFlow — Weekly Task Planner", summary: "PowerApps, SharePoint and Power Automate for weekly tasks and reminders.", proof: "Project document · PDF" },
  { id: "pif", group: "industrial", year: "2024–2025", status: "documented", title: "Smart Coffee Fermentation System", summary: "Sensor integration and automation control, with the customer documentation that makes a system maintainable.", proof: "Customer documentation · PDF" },
  { id: "erasmus", group: "industrial", year: "Erasmus+", status: "documented", title: "Erasmus+ — Autonomous Car", summary: "An autonomous-car team challenge at Carl Benz Schule, combining modelling, Arduino and communication.", proof: "Project photos" },
  { id: "openclaw", group: "personal", year: "Personal", status: "ongoing", title: "OpenClaw — Home AI Agent Lab", summary: "An ongoing home VM experiment with agent skills, Telegram and a language-model backend.", proof: "Project notes" },
  { id: "homelab", group: "personal", year: "Personal", status: "ongoing", title: "Secure Family Private Cloud + Learning Lab", summary: "An ongoing private-cloud project for family storage, backups and isolated experiments.", proof: "Project proposal · PDF" },
  { id: "autovault", group: "personal", year: "Personal", status: "ongoing", title: "AutoVault — Used-Car Marketplace", summary: "An ongoing React and TypeScript marketplace project exploring inventory, admin tools and multilingual UX.", proof: "Project notes" },
  { id: "rejectiongym", group: "personal", year: "Personal", status: "ongoing", title: "RejectionGym — Challenge & Progress Platform", summary: "An application project exploring daily challenges, progress tracking and proof uploads.", proof: "Project document · PDF" },
  { id: "portfolio", group: "personal", year: "2026", status: "ongoing", title: "Portfolio Website — GitHub Pages", summary: "A buildless GitHub Pages site connecting capabilities to case studies and school progress.", proof: "Public GitHub repository" }
];

/* Project covers; original photos and evidence are retained. */
const projectCovers = {
  "awssecurity": {
    "path": "./assets/img/covers/awssecurity.svg",
    "alt": "Official AWS logo on a white background",
    "presentation": "brand"
  },
  "mysqldocker": {
    "path": "./assets/img/covers/mysqldocker.webp",
    "alt": "Illustrated project poster showing a persistent database on modular container infrastructure"
  },
  "chef": {
    "path": "./assets/img/covers/chef.svg",
    "alt": "Official Progress Chef logo on a white background",
    "presentation": "brand"
  },
  "networkmonitoring": {
    "path": "./assets/img/covers/networkmonitoring.svg",
    "alt": "Official Zabbix logo",
    "presentation": "brand"
  },
  "terraformazure": {
    "path": "./assets/img/covers/terraformazure.svg",
    "alt": "Official Azure and Terraform logos side by side on a white background",
    "presentation": "brand"
  },
  "serverdashboard": {
    "path": "./assets/img/covers/serverdashboard.webp",
    "alt": "Illustrated project poster showing a server-metrics client presenting charts and a short data history"
  },
  "minicflaz104": {
    "path": "./assets/img/covers/minicflaz104.webp",
    "alt": "Illustrated project poster showing a train simulator backed by cloud compute and a private database"
  },
  "vircl": {
    "path": "./assets/img/covers/vircl.webp",
    "alt": "Illustrated project poster showing virtual machines hosted by servers and connected to backup storage"
  },
  "lab8": {
    "path": "./assets/img/covers/lab8.webp",
    "alt": "Illustrated project poster showing a remote laptop linked securely to a Windows Server environment"
  },
  "grademanagement": {
    "path": "./assets/img/covers/grademanagement.webp",
    "alt": "Illustrated project poster showing student records, database storage and role-based access"
  },
  "weekflow": {
    "path": "./assets/img/covers/weekflow.webp",
    "alt": "Illustrated project poster showing a weekly task planner and connected workflow steps"
  },
  "pif": {
    "path": "./assets/img/covers/pif.webp",
    "alt": "Illustrated project poster showing a coffee fermentation vessel with sensors and industrial controls"
  },
  "portfolio": {
    "path": "./assets/img/covers/portfolio.webp",
    "alt": "Illustrated project poster connecting electrical, network and cloud elements to a portfolio website"
  },
  "autovault": {
    "path": "./assets/img/covers/autovault.svg",
    "alt": "Complete AutoVault wordmark on a black background",
    "presentation": "brand"
  }
};
Object.entries(projectCovers).forEach(([id, cover]) => {
  projectData[id].img = cover.path;
  projectData[id].imageAlt = cover.alt;
  projectData[id].imagePresentation = cover.presentation || "poster";
});
projectData.nas.imageAlt = "OpenMediaVault logo";
projectData.nas.imagePresentation = "logo";
projectData.networkmonitoring.imageCredit = "Zabbix is a registered trademark of Zabbix LLC.";
projectData.erasmus.img = "./assets/img/projects/erasmus/erasmus-car-1.jpg";
projectData.networkmonitoring.progressNote = "In progress — planning phase. Scope, inventory and acceptance tests are drafted. Installation and the first verified metric are next.";

portfolioEntries.forEach(entry => {
  const project = projectData[entry.id];
  project.portfolio = entry;
});
projectData.portfolio.evidence = [{ label: "Browse the portfolio repository", url: "https://github.com/marios-debug/marios-debug.github.io", kind: "Source repository" }];

const portfolioTranslations = {
  en: {
    "nav.progress": "Journey", "nav.skills": "Capabilities", "hero.label": "Marios M. Sarkis · Luxembourg",
    "hero.line1": "From wiring", "hero.line2": "to the cloud.", "hero.role": "BTS Cloud Computing · Year 2 of 2",
    "hero.tagline": "I bring an industrial electrician’s eye for detail to cloud infrastructure. I build, troubleshoot and document systems — from the physical rack to the virtual machine.",
    "hero.viewProjects": "Explore my work", "hero.cv": "View my CV", "hero.availability": "Open to internships & junior IT opportunities",
    "hero.caption": "A practical background. A cloud direction.", "hero.year": "2026 / 2027 · BCLC2", "hero.journey": "Follow the journey",
    "rail.hardware": "Physical systems", "rail.network": "Connected systems", "rail.cloud": "Cloud infrastructure",
    "rail.hardwareNote": "Electrical · PLC · HMI", "rail.networkNote": "Networking · servers · storage", "rail.cloudNote": "Azure · AWS · automation",
    "projects.title": "The work behind the skills", "projects.intro": "A selection of labs, builds and technical decisions. Open a case study to see my role, the result and the evidence.",
    "projects.note": "Technical case studies and original evidence are in English.", "filter.featured": "Selected", "filter.all": "All work", "filter.cloud": "Cloud", "filter.infrastructure": "Systems & networks", "filter.code": "Code & automation", "filter.industrial": "Industrial", "filter.personal": "Personal labs", "filter.ongoing": "In progress",
    "status.documented": "Documented", "status.source": "Source available", "status.research": "Research", "status.planning": "Planning", "status.ongoing": "In progress",
    "projects.caseStudy": "Read case study", "projects.showing": "projects shown", "skills.title": "What I can bring to a team", "skills.intro": "Practical skills with work you can inspect. My second year is adding depth in automation, public cloud and operations.",
    "skill.systems": "Build & maintain", "skill.systemsText": "Proxmox, Windows Server, Linux and shared storage. I care about the recovery path as much as the initial setup.",
    "skill.cloud": "Connect & isolate", "skill.cloudText": "Azure VNets and AWS security groups. Testing which traffic is allowed, which is blocked, and why.",
    "skill.code": "Automate & explain", "skill.codeText": "Python, Bash, PowerShell and Terraform coursework. Clear source files and documentation that someone else can follow.",
    "skill.proof": "See the evidence", "skill.learning": "Now studying", "skill.learningText": "Ansible playbooks & idempotency · OSPF · SNMP & syslog · relational modelling · Docker workflows",
    "progress.title": "Same mindset. New layers.", "progress.summary": "BCLC1 is my completed first year (2025–2026). BCLC2 is my current second year (2026–2027). Here is how the work is progressing.",
    "journey.first": "01 / Foundations", "journey.firstTitle": "Learn it. Build it. Document it.", "journey.firstText": "Python and scripting, Windows and Linux, switching and routing, NAS storage and virtualization. First-year projects made the fundamentals tangible.",
    "journey.second": "02 / Current year", "journey.secondTitle": "Make the setup repeatable.", "journey.secondText": "AWS network tests, Docker and MySQL labs, Chef research, plus ongoing study in Ansible and OSPF. The focus is shifting toward infrastructure as code and operations.",
    "journey.next": "03 / Current project", "journey.nextTitle": "Make failure visible.", "journey.nextText": "Plan Zabbix coverage for two Proxmox hosts, then prove a service incident, a notification and recovery. The inventory and tests are drafted; implementation is next.",
    "journey.view": "Explore second-year work", "journey.plan": "Read the current plan", "journey.date": "Progress reviewed · 22 October 2026",
    "about.title": "The person behind the projects", "about.backgroundText": "Before the cloud, there were cables, control cabinets and PLCs. I trained as an industrial electrician, then specialised in Smart Technologies. Now, in my second year of BTS Cloud Computing at Lycée Guillaume Kroll, I’m applying the same careful troubleshooting to networks, servers and cloud infrastructure.",
    "about.approachText": "Understand the system. Make one change. Check the result. Write down what worked — and what didn’t. My industrial background taught me that someone else has to maintain what I build.",
    "education.current": "Current · BCLC2 / second year", "contact.title": "Let’s build something that holds up.", "contact.text": "Looking for a curious, practical junior teammate? I’m open to internships and opportunities in cloud infrastructure, systems administration and networking in Luxembourg.", "contact.sayHello": "Start a conversation", "contact.email": "Or write to me directly", "contact.cv": "View CV · EN / FR", "cv.download": "View CV"
  },
  fr: {
    "nav.progress": "Progression", "nav.skills": "Compétences", "hero.label": "Marios M. Sarkis · Luxembourg",
    "hero.line1": "Du câblage", "hero.line2": "au cloud.", "hero.role": "BTS Cloud Computing · 2e année sur 2",
    "hero.tagline": "J’apporte la rigueur d’un électricien industriel à l’infrastructure cloud. Je construis, dépanne et documente les systèmes, du rack physique à la machine virtuelle.",
    "hero.viewProjects": "Explorer mes projets", "hero.cv": "Voir mon CV", "hero.availability": "Ouvert aux stages et aux postes IT juniors",
    "hero.caption": "Un parcours pratique. Une direction cloud.", "hero.year": "2026 / 2027 · BCLC2", "hero.journey": "Découvrir le parcours",
    "rail.hardware": "Systèmes physiques", "rail.network": "Systèmes connectés", "rail.cloud": "Infrastructure cloud",
    "rail.hardwareNote": "Électricité · PLC · IHM", "rail.networkNote": "Réseaux · serveurs · stockage", "rail.cloudNote": "Azure · AWS · automatisation",
    "projects.title": "Les projets derrière les compétences", "projects.intro": "Des labs, des réalisations et des choix techniques. Chaque étude présente mon rôle, les résultats et les éléments à consulter.",
    "projects.note": "Les études techniques et les documents originaux sont en anglais.", "filter.featured": "Sélection", "filter.all": "Tous les projets", "filter.cloud": "Cloud", "filter.infrastructure": "Systèmes et réseaux", "filter.code": "Code et automatisation", "filter.industrial": "Industrie", "filter.personal": "Labs personnels", "filter.ongoing": "En cours",
    "status.documented": "Documenté", "status.source": "Code disponible", "status.research": "Recherche", "status.planning": "Planification", "status.ongoing": "En cours",
    "projects.caseStudy": "Lire l’étude", "projects.showing": "projets affichés", "skills.title": "Ce que je peux apporter à une équipe", "skills.intro": "Des compétences pratiques appuyées par des réalisations consultables. Ma deuxième année approfondit l’automatisation, le cloud public et les opérations.",
    "skill.systems": "Construire et maintenir", "skill.systemsText": "Proxmox, Windows Server, Linux et stockage partagé. La restauration compte autant que l’installation.",
    "skill.cloud": "Connecter et isoler", "skill.cloudText": "VNets Azure et groupes de sécurité AWS. Vérifier les flux autorisés, les flux bloqués et les raisons.",
    "skill.code": "Automatiser et expliquer", "skill.codeText": "Travaux en Python, Bash, PowerShell et Terraform. Du code lisible et une documentation que d’autres peuvent suivre.",
    "skill.proof": "Voir les éléments", "skill.learning": "En cours d’étude", "skill.learningText": "Playbooks Ansible et idempotence · OSPF · SNMP et syslog · modélisation relationnelle · Docker",
    "progress.title": "La même rigueur. De nouvelles couches.", "progress.summary": "BCLC1 est ma première année terminée (2025–2026). BCLC2 est ma deuxième année actuelle (2026–2027). Voici la progression de mes travaux.",
    "journey.first": "01 / Fondamentaux", "journey.firstTitle": "Apprendre. Construire. Documenter.", "journey.firstText": "Python et scripts, Windows et Linux, commutation et routage, NAS et virtualisation. Les projets de première année ont concrétisé les bases.",
    "journey.second": "02 / Année actuelle", "journey.secondTitle": "Rendre la configuration reproductible.", "journey.secondText": "Tests réseau AWS, labs Docker et MySQL, recherche sur Chef, et cours Ansible et OSPF. L’accent se déplace vers l’infrastructure as code et les opérations.",
    "journey.next": "03 / Projet actuel", "journey.nextTitle": "Rendre les pannes visibles.", "journey.nextText": "Planifier la supervision Zabbix de deux hôtes Proxmox, puis démontrer un incident, une notification et la reprise. L’inventaire et les tests sont rédigés ; l’implémentation suit.",
    "journey.view": "Voir les travaux de deuxième année", "journey.plan": "Lire le plan actuel", "journey.date": "Progression vérifiée · 22 octobre 2026",
    "about.title": "La personne derrière les projets", "about.backgroundText": "Avant le cloud, il y avait les câbles, les armoires électriques et les automates. Formé comme électricien industriel puis en Smart Technologies, je suis maintenant en deuxième année du BTS Cloud Computing au Lycée Guillaume Kroll. J’applique la même rigueur aux réseaux, aux serveurs et au cloud.",
    "about.approachText": "Comprendre le système. Faire un changement. Vérifier le résultat. Noter ce qui fonctionne et ce qui échoue. Mon parcours industriel m’a appris que quelqu’un d’autre devra maintenir ce que je construis.",
    "education.current": "Actuellement · BCLC2 / deuxième année", "contact.title": "Construisons quelque chose de solide.", "contact.text": "Vous cherchez un collègue junior curieux et pratique ? Je suis ouvert aux stages et aux opportunités en infrastructure cloud, administration système et réseaux au Luxembourg.", "contact.sayHello": "Prendre contact", "contact.email": "Ou écrivez-moi directement", "contact.cv": "Voir le CV · EN / FR", "cv.download": "Voir le CV"
  },
  de: {
    "nav.progress": "Lernweg", "nav.skills": "Kompetenzen", "hero.label": "Marios M. Sarkis · Luxemburg",
    "hero.line1": "Von der Verkabelung", "hero.line2": "in die Cloud.", "hero.role": "BTS Cloud Computing · 2. von 2 Jahren",
    "hero.tagline": "Ich bringe die Sorgfalt eines Industrieelektrikers in die Cloud-Infrastruktur ein. Ich baue, prüfe und dokumentiere Systeme — vom physischen Rack bis zur virtuellen Maschine.",
    "hero.viewProjects": "Projekte entdecken", "hero.cv": "Lebenslauf ansehen", "hero.availability": "Offen für Praktika und IT-Einstiegspositionen",
    "hero.caption": "Praktische Erfahrung. Richtung Cloud.", "hero.year": "2026 / 2027 · BCLC2", "hero.journey": "Meinen Weg entdecken",
    "rail.hardware": "Physische Systeme", "rail.network": "Vernetzte Systeme", "rail.cloud": "Cloud-Infrastruktur",
    "rail.hardwareNote": "Elektrotechnik · SPS · HMI", "rail.networkNote": "Netzwerke · Server · Speicher", "rail.cloudNote": "Azure · AWS · Automatisierung",
    "projects.title": "Die Arbeit hinter den Kompetenzen", "projects.intro": "Labs, Projekte und technische Entscheidungen. Jede Fallstudie zeigt meine Rolle, das Ergebnis und die Belege.",
    "projects.note": "Technische Fallstudien und Originalbelege sind auf Englisch.", "filter.featured": "Auswahl", "filter.all": "Alle Projekte", "filter.cloud": "Cloud", "filter.infrastructure": "Systeme & Netzwerke", "filter.code": "Code & Automatisierung", "filter.industrial": "Industrie", "filter.personal": "Eigene Labs", "filter.ongoing": "In Arbeit",
    "status.documented": "Dokumentiert", "status.source": "Quellcode verfügbar", "status.research": "Recherche", "status.planning": "Planung", "status.ongoing": "In Arbeit",
    "projects.caseStudy": "Fallstudie lesen", "projects.showing": "Projekte angezeigt", "skills.title": "Was ich in ein Team einbringe", "skills.intro": "Praktische Kompetenzen mit einsehbaren Arbeiten. Mein zweites Jahr vertieft Automatisierung, Public Cloud und IT-Betrieb.",
    "skill.systems": "Aufbauen & betreiben", "skill.systemsText": "Proxmox, Windows Server, Linux und gemeinsamer Speicher. Die Wiederherstellung zählt für mich genauso wie die Einrichtung.",
    "skill.cloud": "Verbinden & isolieren", "skill.cloudText": "Azure-VNets und AWS-Sicherheitsgruppen. Prüfen, welcher Datenverkehr erlaubt oder blockiert ist und warum.",
    "skill.code": "Automatisieren & erklären", "skill.codeText": "Kursarbeiten mit Python, Bash, PowerShell und Terraform. Lesbarer Code und nachvollziehbare Dokumentation.",
    "skill.proof": "Belege ansehen", "skill.learning": "Aktueller Lernstoff", "skill.learningText": "Ansible-Playbooks & Idempotenz · OSPF · SNMP & Syslog · relationale Modellierung · Docker",
    "progress.title": "Gleiche Sorgfalt. Neue Ebenen.", "progress.summary": "BCLC1 ist mein abgeschlossenes erstes Jahr (2025–2026). BCLC2 ist mein aktuelles zweites Jahr (2026–2027). So entwickelt sich meine Arbeit.",
    "journey.first": "01 / Grundlagen", "journey.firstTitle": "Lernen. Bauen. Dokumentieren.", "journey.firstText": "Python und Skripte, Windows und Linux, Switching und Routing, NAS und Virtualisierung. Projekte im ersten Jahr machten die Grundlagen greifbar.",
    "journey.second": "02 / Aktuelles Jahr", "journey.secondTitle": "Setups wiederholbar machen.", "journey.secondText": "AWS-Netzwerktests, Docker- und MySQL-Labs, Chef-Recherche sowie laufender Unterricht in Ansible und OSPF. Der Fokus geht Richtung Infrastructure as Code und Betrieb.",
    "journey.next": "03 / Aktuelles Projekt", "journey.nextTitle": "Ausfälle sichtbar machen.", "journey.nextText": "Zabbix für zwei Proxmox-Hosts planen, dann Störung, Benachrichtigung und Wiederherstellung nachweisen. Inventar und Tests sind entworfen; die Umsetzung folgt.",
    "journey.view": "Arbeiten aus dem zweiten Jahr", "journey.plan": "Aktuellen Plan lesen", "journey.date": "Fortschritt geprüft · 22. Oktober 2026",
    "about.title": "Die Person hinter den Projekten", "about.backgroundText": "Vor der Cloud kamen Kabel, Schaltschränke und SPS. Nach meiner Ausbildung zum Industrieelektriker spezialisierte ich mich auf Smart Technologies. Jetzt bin ich im zweiten Jahr des BTS Cloud Computing am Lycée Guillaume Kroll und wende dieselbe Sorgfalt auf Netzwerke, Server und Cloud an.",
    "about.approachText": "Das System verstehen. Eine Änderung machen. Das Ergebnis prüfen. Aufschreiben, was funktioniert hat und was nicht. Aus der Industrie weiß ich: Jemand anderes muss meine Systeme später warten können.",
    "education.current": "Aktuell · BCLC2 / zweites Jahr", "contact.title": "Lassen Sie uns etwas Solides bauen.", "contact.text": "Sie suchen einen neugierigen, praktisch orientierten Berufseinsteiger? Ich bin offen für Praktika und Möglichkeiten in Cloud-Infrastruktur, Systemadministration und Netzwerken in Luxemburg.", "contact.sayHello": "Kontakt aufnehmen", "contact.email": "Oder schreiben Sie mir direkt", "contact.cv": "Lebenslauf · EN / FR", "cv.download": "Lebenslauf ansehen"
  }
};
