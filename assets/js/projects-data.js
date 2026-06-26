const projectData = {
  rejectiongym: {
    title: "RejectionGym — Challenge & Progress Platform",
    category: "Full-Stack Web App",
    overview:
      "A full-stack web platform built to gamify personal growth through daily challenge packs. The project was developed as part of the BTS Cloud Computing curriculum to demonstrate full-stack development skills from database design to deployment.",
    objectives:
      "Create a habit-forming platform that encourages consistency through gamification. The system needed to handle user authentication, file uploads for proof of completion, streak tracking with visual dashboards, and social sharing of progress reports.",
    tech: "Frontend built with React and modern CSS for responsive design. Backend API powered by Node.js and Express with RESTful endpoints. PostgreSQL handles relational data including users, challenges, streaks, and upload metadata. Docker containers ensure consistent environments across development and production. CI/CD pipeline automates testing and deployment.",
    results:
      "Delivered a functional platform with user registration, challenge pack selection, daily task completion with proof upload, streak calculation, and shareable progress reports. The architecture is modular and ready for scaling.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker + CI/CD"],
    pdf: "./assets/downloads/RejectionGym \u2014 Challenge & Progress Platform.pdf",
    img: "./assets/img/rejectiongym_logo.png",
    details: {
      context:
        "RejectionGym turns uncomfortable daily challenges into a game: users pick a pack, complete the task, upload proof, and keep a streak alive. It was built to practice the full lifecycle of a modern web product.",
      role: "Full-stack developer & cloud deployment lead",
      team: "Solo project",
      timeline: "BTS Cloud Computing module",
      duration: "One semester",
      outcome:
        "A working 3-tier cloud web application with secure authentication, challenge packs, streak tracking, proof uploads, and a shareable progress report page. The project plan covers architecture, deployment, CI/CD, and risk mitigation.",
      challenges:
        "Keeping the MVP strict was essential because the scope naturally grows with features like social sharing or AI coaching. File uploads also introduced security concerns around type validation, size limits, and storage. Deployment reproducibility was addressed with Docker Compose and a rollback strategy.",
      lessonsLearned:
        "Planning beats guessing: defining personas, functional requirements, and a clear project plan before coding made the architecture decisions easier. A reproducible Docker-based environment saves time and avoids \"works on my machine\" problems.",
      futureWork:
        "Possible next steps include real-time social features, mobile app packaging, AI-generated coaching hints, and deeper analytics on difficulty progression and completion rates.",
      highlights: [
        "User registration and secure authentication",
        "Challenge pack selection with daily tasks",
        "Proof-of-completion uploads",
        "Streak calculation and shareable progress reports",
        "Docker + CI/CD deployment pipeline",
      ],
      specs: [
        { label: "Frontend", value: "React + modern CSS" },
        { label: "Backend", value: "Node.js / Express REST API" },
        { label: "Database", value: "PostgreSQL" },
        { label: "File storage", value: "S3-compatible / MinIO" },
        { label: "Deployment", value: "Docker + GitHub Actions CI/CD" },
        { label: "Hosting", value: "Linux cloud VM + Nginx + Let's Encrypt" },
        { label: "Focus", value: "Gamified habit building" },
      ],
      gallery: [],
    },
  },
  homelab: {
    title: "Secure Family Private Cloud + Learning Lab",
    category: "Infrastructure & Homelab",
    overview:
      "A personal infrastructure project designing and deploying a private cloud for secure family data storage and a dedicated learning lab for testing IT and networking concepts. Built from consumer and enterprise hardware to simulate real-world infrastructure at home.",
    objectives:
      "Build reliable, secure, self-hosted infrastructure with automated backups, remote access, network segmentation, and power resilience. The lab needed to support both production family services and experimental environments without cross-contamination.",
    tech: "Proxmox VE provides the virtualization layer with ZFS-backed storage pools. TrueNAS handles file serving and snapshot-based backups. WireGuard and Tailscale provide encrypted remote access. Docker runs containerized services in isolated network segments. UPS integration ensures graceful shutdowns during power events. Monitoring covers CPU, RAM, disk usage, and SMART health. All configurations are documented for reproducibility.",
    results:
      "Production-ready homelab serving family data with 99%+ uptime. Isolated VLANs separate production services from experimental workloads. Remote access works from any device. Backup strategy covers both local snapshots and off-site replication.",
    tags: ["Private Cloud", "Backups", "Self-Hosting", "Network Security"],
    pdf: "./assets/downloads/Secure Family Private Cloud + Learning Lab.pdf",
    img: "./assets/img/Homelab.png",
    details: {
      context:
        "This homelab is a live production environment for family services and a safe sandbox for learning. Every component is documented so the setup can be rebuilt or extended without guessing.",
      role: "Infrastructure architect, administrator, and sole maintainer",
      team: "Personal project",
      timeline: "Built in five incremental phases",
      duration: "Ongoing",
      outcome:
        "A five-layer home infrastructure: NAS/storage, app hosting, monitoring, security/remote access, and an isolated learning lab. The setup follows the 3-2-1 backup rule and strict separation between stable family services and experimental environments.",
      challenges:
        "The biggest design challenge was enforcing isolation between production family services and the lab side so a broken VM or bad configuration can never touch family data. Power resilience and remote access from school or travel also required careful planning.",
      lessonsLearned:
        "Stable services and experimental labs must never share the same network or storage. Documenting every step makes the setup reproducible and reduces panic when something breaks. Incremental builds are safer than big-bang deployments.",
      futureWork:
        "Next phases include adding Grafana + Prometheus or Uptime Kuma for full monitoring, hardening firewall rules with pfSense/OPNsense, adding DNS filtering with Pi-hole/AdGuard, and building reusable VM templates for BTS coursework.",
      highlights: [
        "Self-hosted private cloud for family data",
        "Automated backups with local snapshots and off-site replication",
        "Encrypted remote access via WireGuard and Tailscale",
        "Network segmentation isolates lab experiments from production",
        "UPS integration for graceful shutdowns",
        "Five-phase incremental build plan",
      ],
      specs: [
        { label: "Virtualization", value: "Proxmox VE + ZFS pools" },
        { label: "Storage", value: "TrueNAS + snapshot backups" },
        { label: "Remote Access", value: "WireGuard + Tailscale" },
        { label: "Containers", value: "Docker in isolated segments" },
        { label: "Monitoring", value: "Grafana / Prometheus / Uptime Kuma" },
        { label: "Power", value: "UPS graceful shutdown" },
      ],
      gallery: [],
    },
  },
  vircl: {
    title: "VIRCL — Server Virtualization in the Cloud",
    category: "Virtualization Lab",
    overview:
      "A BTS VIRCL module project documenting the implementation of server virtualization infrastructure using Proxmox VE 9.1.1 on two HP ProLiant servers (HP01 and HP03) and VMware ESXi/vSphere on two additional HP ProLiant servers (HP02 and HP04). The project covers the full virtualization lifecycle from hypervisor deployment to advanced operations including live migration, remote storage integration, user management, and patching.",
    objectives:
      "Deploy two Proxmox VE nodes and two VMware ESXi/vSphere nodes on physical hardware, then implement sixteen required virtualization features: VM creation via GUI and CLI, OS installation, VM configuration changes, cloning, exporting, backups and restores, snapshots, templates, remote storage integration, live migrations, user management, and hypervisor patching. Compare both platforms and produce technical documentation.",
    tech: "Proxmox VE 9.1.1 with KVM and LXC on HP ProLiant DL360 Gen9 servers; VMware ESXi 8.0 U2 with vCenter Server Appliance (VCSA) on HP ProLiant servers; OpenMediaVault NAS providing NFS and SMB/CIFS shared storage; Ubuntu Server 24.04.3 LTS and Windows 11 Enterprise Evaluation guest systems; vzdump, qm, pvecm, and Bash scripts for Proxmox operations; Veeam Backup & Replication for VMware backups; HP iLO for remote ISO mounting and out-of-band management.",
    results:
      "All sixteen required features were successfully implemented on both Proxmox nodes, which were then clustered for centralized management. The CLOIF2 NAS was integrated via NFS and SMB for VM disks, backups, and ISO images. VM and hypervisor backup strategies were implemented using built-in tools, custom scripts, and scheduled jobs. The final report serves as both a technical reference and a comparative analysis between Proxmox VE and VMware ESXi/vSphere.",
    tags: ["Proxmox VE", "VMware vSphere", "KVM", "ESXi"],
    pdf: "./assets/downloads/VIRCL_Documentation_marios_christophe.pdf",
    img: "./assets/img/vircl-thumb.png",
    details: {
      context:
        "VIRCL is a deep dive into enterprise virtualization. We built a heterogeneous cluster mixing Proxmox and VMware to compare real-world operations on identical HP hardware.",
      role: "Proxmox specialist focused on VM and hypervisor backup; comparative analysis co-author",
      team: "Marios Sarkis & Christophe Thill",
      timeline: "VIRCL module, June 2026",
      duration: "Several weeks",
      outcome:
        "Two Proxmox nodes clustered and two VMware ESXi nodes managed by vCenter. All 16 required features documented with screenshots, CLI commands, and a comparative analysis. Custom backup script, scheduled vzdump jobs, and hypervisor configuration archive implemented.",
      challenges:
        "Exporting VMs from Proxmox using LVM storage required qemu-img convert because LVM disks are block devices. Live migration initially failed when snapshots contained CD/DVD hardware configurations. HP03 also failed apt updates due to a missing /etc/resolv.conf file.",
      lessonsLearned:
        "Always test restores, not just backups. Snapshot mode with ZSTD compression gives excellent space efficiency. VMware's polished vSphere Client and PowerCLI are powerful, but Proxmox's built-in web UI and free licensing make it very accessible for labs.",
      futureWork:
        "Explore Proxmox Backup Server for incremental backups, Ceph for distributed storage, and VMware DRS/HA clusters. Document template customization with cloud-init for faster guest OS deployment.",
      highlights: [
        "Deployed and clustered Proxmox VE nodes",
        "Implemented all 16 required virtualization features",
        "Integrated OpenMediaVault NAS for shared storage",
        "Compared Proxmox and VMware backup strategies",
        "Documented every step for reproducibility",
      ],
      specs: [
        { label: "Proxmox", value: "VE 9.1.1 (KVM + LXC)" },
        { label: "VMware", value: "ESXi 8.0 U2 + VCSA" },
        { label: "Hardware", value: "HP ProLiant DL360 Gen9" },
        { label: "Guests", value: "Ubuntu Server 24.04, Windows 11" },
        { label: "Shared Storage", value: "OpenMediaVault NFS/SMB" },
        { label: "Backups", value: "vzdump / Veeam + scripts" },
      ],
      gallery: [],
    },
  },
  nas: {
    title: "NAS Server Setup & Configuration",
    category: "Storage & Network Services",
    overview:
      "A BTS team project converting a bare-metal rack server into a production-ready network-attached storage solution. The goal was to design enterprise-grade storage with redundancy, cross-platform access, and automated monitoring using open-source tools.",
    objectives:
      "Design and configure redundant storage with hardware RAID for performance, BTRFS for metadata integrity, cross-platform file sharing, granular user permissions, automated snapshots, and health monitoring with alerting.",
    tech: "OpenMediaVault 8 serves as the management layer. Hardware RAID 5 provides striped parity across three disks for performance and fault tolerance. BTRFS RAID 1 mirrors metadata for additional integrity. SMB handles Windows clients, NFS serves Linux/macOS, and SFTP provides secure remote file transfer. User and group permissions are mapped consistently across all protocols. Snapshots run on a scheduled basis with retention policies.",
    results:
      "Fully operational NAS serving mixed Windows, macOS, and Linux clients with no data loss events. Disk health is monitored continuously with email alerts for temperature and SMART anomalies. Snapshot restore has been tested and verified.",
    tags: ["OpenMediaVault", "RAID 5", "BTRFS RAID 1", "SMB/NFS/SFTP"],
    pdf: "./assets/downloads/NAS_Project_Team2.pdf",
    img: "./assets/img/OpenMediaVault-Logo.webp",
    details: {
      context:
        "This project turned a bare-metal server into a reliable NAS that the whole team could trust for shared storage, backups, and cross-platform collaboration.",
      role: "Team member responsible for hardware staging, RAID configuration, shared folder design, and documentation",
      team: "Team 2: Marios Sarkis & Christophe Thill",
      timeline: "CLOIF2 module",
      duration: "One week (day-by-day work log)",
      outcome:
        "Server MR3S01 fully assembled, RAID 5 array created on an Areca controller, OpenMediaVault 8 installed on a rear USB stick, shared folders configured for a realistic family scenario, and SMB/NFS/SFTP access tested from Windows, Linux, and macOS clients.",
      challenges:
        "The RAID initialization took longer than expected. OpenMediaVault booted from USB but the network needed manual static configuration because DHCP was unavailable. The RMM remote management port also needed correct IP settings before out-of-band access worked.",
      lessonsLearned:
        "Hardware staging is critical: a mistake during RAM, disk, or controller installation can cause subtle instability later. RAID 5 gives good balance of capacity and fault tolerance for three disks. Always verify backups and restores, not just configuration.",
      futureWork:
        "Add automated backup jobs to external storage, configure SMART email alerts, test iSCSI block-level access, and document a recovery runbook for disk replacement.",
      highlights: [
        "Hardware RAID 5 for performance and parity",
        "BTRFS RAID 1 for metadata integrity",
        "SMB, NFS, and SFTP access for mixed clients",
        "Granular user and group permissions",
        "Scheduled snapshots with retention policies",
        "Rack mounting with cable management",
      ],
      specs: [
        { label: "OS", value: "OpenMediaVault 8" },
        { label: "RAID", value: "Hardware RAID 5 (Areca ARC-1880)" },
        { label: "Filesystem", value: "BTRFS RAID 1 metadata" },
        { label: "Protocols", value: "SMB / NFS / SFTP" },
        { label: "Hardware", value: "2U rack server, dual Intel, 16 GB DDR3 ECC" },
        { label: "Monitoring", value: "SMART + email alerts" },
      ],
      gallery: [
        "./assets/img/projects/nas/nas-rack.jpg",
        "./assets/img/projects/nas/nas-server.jpg",
      ],
    },
  },
  lab8: {
    title: "Lab 8 Windows Services: VPN + DirectAccess",
    category: "Windows Server & Remote Access",
    overview:
      "A comprehensive Windows Server lab exercise developed for the OSYCL-Windows module at Lycée Guillaume Kroll. Team project with Donovan Glodt under teacher Maurizio Spagnuolo. The client company was Flowdesk and the consultant company was DON&SAR IT.",
    objectives:
      "Deploy a secure remote access infrastructure that supports both traditional VPN for legacy clients and DirectAccess for modern always-on connectivity. The solution needed to integrate with Active Directory, enforce network access policies, and support roaming user profiles.",
    tech: "Windows Server 2022 hosts Active Directory Domain Services with integrated DNS and DHCP. SSTP VPN provides encrypted remote access over HTTPS. DirectAccess delivers seamless always-on connectivity using IPv6 transition technologies and certificate-based machine authentication. Network Access Protection enforces health policies. File Server hosts departmental shares with DFS namespace. Roaming Profiles synchronize user data across devices.",
    results:
      "Complete remote access lab with full network topology diagrams, step-by-step configuration documentation, and troubleshooting guides. Both VPN and DirectAccess tested successfully from external clients. Group Policy enforces consistent security settings across all domain-joined machines.",
    tags: ["Windows Server", "VPN", "DirectAccess", "AD DS"],
    pdf: "./assets/downloads/Lab8.WindowsServices.MariosDonovan.pdf",
    img: "./assets/img/lab8.png",
    details: {
      context:
        "Lab 8 simulates an IT consultancy delivering remote access for a fictional client. The lab covers both legacy VPN and modern DirectAccess with full AD integration.",
      role: "Windows Server administrator & remote-access co-designer",
      team: "Marios Sarkis & Donovan Glodt",
      timeline: "OSYCL-Windows module",
      duration: "Lab project",
      outcome:
        "A working Windows Server remote-access environment with AD DS, DNS/DHCP, SSTP VPN, DirectAccess, NPS policy enforcement, file shares with NTFS permissions, and roaming profiles. Tested from VPN and DirectAccess clients on a simulated WAN.",
      challenges:
        "DirectAccess requires domain-joined clients and correct IPv6 transition configuration. Separating employee access (always-on DirectAccess) from external client access (manual VPN limited to specific shares) needed careful AD group and NPS policy design.",
      lessonsLearned:
        "Centralized identity and policy management through Active Directory simplifies access control. DirectAccess is seamless for users but requires precise client and server configuration. NPS is a clean way to authorize VPN connections by group membership.",
      futureWork:
        "Add multi-site replication, certificate-based VPN with a proper internal CA, and monitoring of remote access logs. Document a client onboarding runbook for domain join and DirectAccess provisioning.",
      highlights: [
        "Deployed AD DS with DNS and DHCP on Windows Server 2022",
        "Configured SSTP VPN for encrypted remote access",
        "Implemented DirectAccess with IPv6 transition technologies",
        "Enforced health policies via Network Access Protection",
        "Synchronized user data with Roaming Profiles and DFS",
      ],
      specs: [
        { label: "Server", value: "Windows Server 2022" },
        { label: "Directory", value: "AD DS + DNS/DHCP" },
        { label: "VPN", value: "SSTP over HTTPS" },
        { label: "DirectAccess", value: "IPv6 + certificates" },
        { label: "Policy", value: "NAP + Group Policy" },
        { label: "Storage", value: "DFS namespace + shares" },
      ],
      gallery: [],
    },
  },
  grademanagement: {
    title: "Grade Management System",
    category: "Web Application",
    overview:
      "A secure web application for managing academic grades, developed for the BTSCC Project Management module at Lycée Guillaume Kroll. Team project with Mustafa Murtadha and Yona Yarvis under teacher Sam Hoffman.",
    objectives:
      "Design and build a grade management platform with role-based access control. Students must view their own grades. Professors must manage courses and enter grades. Administrators must oversee users, audit activity, and configure the system.",
    tech: "FastAPI powers the backend with asynchronous request handling and automatic OpenAPI documentation. JWT tokens provide stateless authentication with expiration and refresh logic. PostgreSQL stores users, courses, grades, and audit logs with foreign key constraints. Docker containers run the API and database with Docker Compose for local development. Role-based access control middleware verifies permissions on every endpoint. Jinja2 templates render the UI.",
    results:
      "Functional web application with secure login, student grade viewing, professor grade management, and admin dashboards. API endpoints are documented and tested. The system handles concurrent users and maintains an audit trail of all grade modifications.",
    tags: ["FastAPI", "JWT", "Docker"],
    pdf: "./assets/downloads/Planning document-GradingManagementSystem.pdf",
    img: "./assets/img/Grademanagmentsystem.png",
    details: {
      context:
        "The Grade Management System is a role-aware academic application that keeps grade data accurate, auditable, and accessible only to the right users.",
      role: "Backend developer, authentication/authorization lead, and documentation co-author",
      team: "Marios Sarkis, Mustafa Murtadha, Yona Yarvis",
      timeline: "PROMA1 module (4 weeks)",
      duration: "4 weeks",
      outcome:
        "A deployable grade management application with secure JWT login, role-based dashboards, grade CRUD operations, audit logging, and Docker Compose packaging. Deliverables included planning and research documents, MS Planner board, and a live demo.",
      challenges:
        "The team had a slow start because of different interpretations of the project and conflicting ideas about frameworks. Environment setup differences made it hard to work on code together outside school. Connecting the Python app to the database inside Docker required troubleshooting.",
      lessonsLearned:
        "Early alignment on architecture and user stories prevents wasted effort. MS Planner and regular stand-ups improved collaboration. Docker Compose gives a consistent environment, but only if everyone uses the same configuration files.",
      futureWork:
        "Add password recovery via email, head-teacher read-only overview, API Bash scripting examples, and exportable audit logs for compliance reporting.",
      highlights: [
        "Secure login with JWT-based authentication",
        "Role-based access for students, professors, and admins",
        "Student grade dashboard",
        "Professor course and grade management",
        "Audit trail of all grade modifications",
        "Docker Compose one-command startup",
      ],
      specs: [
        { label: "Backend", value: "FastAPI (async)" },
        { label: "Auth", value: "JWT tokens + refresh" },
        { label: "Database", value: "PostgreSQL" },
        { label: "DevOps", value: "Docker Compose" },
        { label: "UI", value: "Jinja2 templates" },
        { label: "Security", value: "RBAC middleware + password hashing" },
      ],
      gallery: [],
    },
  },
  linuxloganalyser: {
    title: "Linux Log Analyser",
    category: "System Administration Tool",
    overview:
      "A Python-based log analyser for Linux log files that reads real system logs, extracts structured information using regular expressions, and generates a monitoring summary. The project simulates real-world work in cloud infrastructure, system administration, and cybersecurity where logs are used to detect problems and incidents.",
    objectives:
      "Build a parser that extracts at least 3 fields from each log entry including timestamp, hostname, program or service name, PID, message text, and IP address or username when present. Design a monitoring system with at least 2 statistics or counters and 1 time-based metric. Implement at least one alert rule that triggers a warning when suspicious activity exceeds defined thresholds.",
    tech: "Python with regular expressions for log parsing. The analyser processes /var/log/syslog to extract structured data including timestamps, hostnames, service names, PIDs, and message text. Custom monitoring logic counts events, tracks top services producing log messages, and measures events per minute. Alert rules trigger on thresholds such as failed login spikes or excessive error messages.",
    results:
      "Functional log analyser that parses syslog entries, generates statistics on top services and common error keywords, tracks events per minute, and triggers alerts when suspicious patterns are detected. Clear terminal output shows total parsed lines, unparsed lines, chosen statistics, time-based metric results, and any triggered alerts.",
    tags: ["Python", "Regex", "Linux", "Syslog", "Monitoring"],
    pdf: "./assets/downloads/Log-Analyser.pdf",
    img: "./assets/img/pytwo_log_analyzer.png",
    details: {
      context:
        "This CLI tool reads real Linux syslog files and turns raw log lines into actionable metrics and alerts — the kind of work system administrators do every day.",
      role: "Solo developer",
      team: "Solo project",
      timeline: "PYTWO module",
      duration: "Short lab project",
      outcome:
        "A Python CLI that parses /var/log/syslog, extracts timestamp, hostname, service, PID, and message, reports top services and common error keywords, measures events per minute, and triggers threshold-based alerts for suspicious activity.",
      challenges:
        "Syslog formats vary, so the regex had to be tolerant but accurate. Deciding which statistics and time-based metrics are actually useful required balancing teacher requirements with real-world relevance.",
      lessonsLearned:
        "Regular expressions are powerful but easy to over-engineer. Starting with a clear output format helps guide parser design. Logs are only useful if you turn them into metrics and alerts that someone can act on.",
      futureWork:
        "Add support for /var/log/auth.log and /var/log/kern.log, output results to JSON or a simple web dashboard, and add configurable alert thresholds via a config file.",
      highlights: [
        "Parses /var/log/syslog with regex",
        "Extracts timestamp, hostname, service, PID, and message",
        "Tracks top services and common error keywords",
        "Measures events per minute",
        "Triggers alerts on suspicious thresholds",
      ],
      specs: [
        { label: "Language", value: "Python 3" },
        { label: "Parsing", value: "Regular expressions" },
        { label: "Source", value: "/var/log/syslog" },
        { label: "Metrics", value: "Events/min, top services" },
        { label: "Alerts", value: "Threshold-based rules" },
      ],
      gallery: [],
    },
  },
  weekflow: {
    title: "WeekFlow — PowerApps Week Planner",
    category: "Low-Code Business App",
    overview:
      "A low-code weekly planner application built with the Microsoft Power Platform. Designed for team coordination with task tracking, status updates, and automated notifications without writing traditional application code.",
    objectives:
      "Create an intuitive weekly planner that allows team members to create tasks, track status changes, and receive automated reminders. The solution needed to integrate with existing Microsoft 365 infrastructure and work on mobile and desktop.",
    tech: "PowerApps Canvas App provides the user interface with custom galleries and forms. SharePoint lists serve as the relational data backend with versioning enabled. Power Automate flows trigger email reminders when tasks approach deadlines or when status changes. Role-based views filter tasks by owner and team. The app is responsive and works offline with sync on reconnect.",
    results:
      "Deployed application used for team task coordination with real-time synchronization across devices. Automated reminders reduced missed deadlines. Managers gained visibility into team workload through summary dashboards.",
    tags: ["PowerApps", "SharePoint", "Automation"],
    pdf: "./assets/downloads/weekplanner.pdf",
    img: "./assets/img/Weekflow.logo.png",
    details: {
      context:
        "WeekFlow proves that complex team coordination can be built with low-code tools, leveraging SharePoint and Power Automate behind a clean PowerApps interface.",
      role: "PowerApps developer & automation designer",
      team: "Solo project",
      timeline: "BTS Cloud Computing project",
      duration: "One module",
      outcome:
        "A working PowerApps week planner with task creation/editing, weekly and all-tasks views, search and sort, status tracking, priority levels, and Power Automate reminders. Delivered with presentation and documentation.",
      challenges:
        "Balancing a clean UI with fast data entry in a canvas app required several layout iterations. SharePoint list relationships are simpler than a relational database, so some data modeling had to be adapted.",
      lessonsLearned:
        "Low-code does not mean no planning: data model, user flows, and automation triggers still need design. Power Automate makes reminders trivial once the data structure is clean.",
      futureWork:
        "Add a mobile-optimized layout, push notifications, analytics dashboard, AI task suggestions, and team collaboration features such as task delegation.",
      highlights: [
        "Quick task creation with predefined blocks",
        "Weekly and all-tasks overview screens",
        "Search and sort for productivity",
        "Automated reminders via Power Automate",
        "Offline support with sync on reconnect",
      ],
      specs: [
        { label: "Platform", value: "PowerApps Canvas" },
        { label: "Data", value: "SharePoint lists / Dataverse" },
        { label: "Automation", value: "Power Automate" },
        { label: "Views", value: "Role-based filtering" },
        { label: "Offline", value: "Sync on reconnect" },
      ],
      gallery: [],
    },
  },
  portfolio: {
    title: "Portfolio Website — GitHub Pages",
    category: "Static Website",
    overview:
      "A personal portfolio website designed and built to document BTS Cloud Computing progress, projects, certifications, and professional reflection. The site serves as both a showcase and a learning journal.",
    objectives:
      "Build a fast, accessible, visually consistent portfolio following GRAP design principles: Grid structure, Rhythm in spacing, Alignment of elements, and Proportion in typography. The site needed to be maintainable without a backend and deploy automatically on push.",
    tech: "Static HTML5 with semantic structure for accessibility. CSS custom properties define the dark theme with consistent colors and spacing. Vanilla JavaScript handles mobile navigation, scroll-triggered reveal animations via Intersection Observer, modals, theme toggle, and language switching. GitHub Pages hosts the site. All assets are optimized for performance with lazy loading.",
    results:
      "Live portfolio deployed at marios-debug.github.io with clean chapter-based navigation, responsive layouts, and smooth scroll animations. The site scores well on Lighthouse accessibility and performance metrics. Content is updated regularly as new projects and certifications are completed.",
    tags: ["GitHub Pages", "Documentation", "Design"],
    pdf: null,
    img: "./assets/img/github.logo.png",
    details: {
      context:
        "This portfolio is the project you're looking at now. It was built to be fast, accessible, and easy to update as my BTS journey progresses.",
      role: "Designer, developer, and content author",
      team: "Solo project",
      timeline: "BTS Portfolio / exam project",
      duration: "Ongoing",
      outcome:
        "A public, responsive portfolio hosted on GitHub Pages with sections for about me, education and experience, skills, certifications, projects, hobbies, CV downloads, reflection, and a teacher checklist. Includes dark/light theme and EN/FR/DE language switching.",
      challenges:
        "Keeping the design consistent across many sections while staying maintainable required a strong CSS custom-property system. Adding theme and language switching later meant refactoring the DOM and JS without breaking existing layout.",
      lessonsLearned:
        "GRAP principles (Grid, Repetition, Alignment, Proximity) make a multi-section site feel cohesive. Semantic HTML and lazy loading improve both accessibility and performance. GitHub Pages is ideal for static portfolios because deployment is automatic.",
      futureWork:
        "Continue adding projects and certifications, improve SEO with structured data, add a blog/reflection feed, and optimize images further for Core Web Vitals.",
      highlights: [
        "Semantic HTML5 structure",
        "CSS custom properties for consistent theming",
        "Scroll-triggered animations via Intersection Observer",
        "Mobile-first responsive layout",
        "Deployed automatically on GitHub Pages",
        "Theme and language switching with localStorage",
      ],
      specs: [
        { label: "Hosting", value: "GitHub Pages" },
        { label: "Markup", value: "Semantic HTML5" },
        { label: "Styling", value: "CSS custom properties" },
        { label: "Animation", value: "Intersection Observer" },
        { label: "Performance", value: "Lazy-loaded assets" },
      ],
      gallery: [],
    },
  },
  pif: {
    title: "PIF Smart Technologies (Coffee Fermentation)",
    category: "Industrial Automation",
    overview:
      "A BTS Smart Technologies E-Controls capstone project at Lycée Privé Émile Metz. Team project with Ayena Ezechiele under teacher Gilles Krantz. The project automated a coffee-bean fermentation process for Kaffeefabrik, integrating sensors, PLC control, and HMI visualization.",
    objectives:
      "Design and build an automated coffee-bean fermentation system with real-time sensor monitoring, precise motor and valve control, safety device integration, and complete customer documentation including electrical schematics and operator manuals.",
    tech: "Siemens TIA Portal programmed the S7-1200 PLC with ladder logic for discrete control and structured text for complex sequences. HMI panels built in WinCC provide process visualization, alarm handling, and manual override. Temperature and humidity sensors feed analog inputs for closed-loop control. Motor contactors, frequency drives, and pneumatic valves execute physical actions. Emergency stops, safety relays, and light curtains protect operators. Risk assessment documentation covers all hazards.",
    results:
      "Complete automated system commissioned and tested. The PLC controls the entire fermentation cycle from loading through drying with automatic fault handling. HMI screens display real-time values and trend history. Customer received full documentation including electrical schematics, PLC code printouts, HMI backups, and maintenance schedules.",
    tags: ["Smart Tech", "Sensors", "PLC/HMI", "Documentation"],
    pdf: "./assets/downloads/Kundenordner.pdf",
    img: "./assets/img/PIF.png",
    details: {
      context:
        "PIF is an industrial automation project: a coffee-bean fermentation cell controlled by a Siemens PLC, monitored through HMI panels, and protected by safety devices.",
      role: "PLC programmer, HMI designer, electrical wiring, and documentation co-author",
      team: "Marios Sarkis & Ayena Ezechiele",
      timeline: "Smart Technologies E-Controls 2024/25",
      duration: "Full school year",
      outcome:
        "A working automated coffee processing cell covering fermentation, drying, and quality control. The Siemens S7-1200 PLC manages temperature regulation, motor speeds via frequency drive, pneumatic cylinders, and safety interlocks. HMI screens provide operator control and status feedback.",
      challenges:
        "Coordinating mechanical, electrical, and software work on a tight schedule was demanding. The 3D-printed simulation parts needed several iterations to work reliably with sensors. Ensuring selectivity and safety-device coverage required careful schematic review.",
      lessonsLearned:
        "Industrial automation is a systems discipline: PLC code, wiring, sensors, and safety devices must be designed together. Good documentation and schematics are as important as the running program because they are what the customer keeps.",
      futureWork:
        "Add data logging and trend export, integrate a recipe management system for different coffee batches, and explore remote monitoring via a secure industrial gateway.",
      highlights: [
        "S7-1200 PLC programmed in TIA Portal",
        "WinCC HMI for visualization and alarms",
        "Closed-loop control with temp/humidity sensors",
        "Motor drives, valves, and pneumatic actuators",
        "Safety relays, E-stops, and light curtains",
        "Complete customer documentation package",
      ],
      specs: [
        { label: "PLC", value: "Siemens S7-1200 / S7-1512C" },
        { label: "Software", value: "TIA Portal (LAD + SCL)" },
        { label: "HMI", value: "WinCC panels (TP700 Comfort)" },
        { label: "I/O", value: "Sensors, motors, valves, DC motor + ESP32" },
        { label: "Safety", value: "E-stops, relays, light curtains" },
        { label: "Docs", value: "Schematics + operator manuals" },
      ],
      gallery: [],
    },
  },
  erasmus: {
    title: "Erasmus+",
    category: "Exchange Project",
    overview:
      "Smart Technologies exchange program at Carl Benz Schule in Germany. A two-week intensive where teams designed, built, and raced autonomous line-following cars.",
    objectives:
      "Build an autonomous line-following car as a team challenge, optimize it for speed and reliability, and present the technical approach and results to faculty and students.",
    tech: "Arduino Uno programmed in C++ with PID control for line following. IR sensor arrays detect the track boundary and feed analog values to the microcontroller. Motor driver shields control DC motors with PWM for speed regulation. Chassis and wheel mounts designed in Fusion 360 and 3D-printed in PLA. Battery management ensures consistent power delivery during runs.",
    results:
      "Best team time of 32 seconds on the competition track. The presentation covered design iterations, sensor calibration, PID tuning, and lessons learned. Audience of approximately 40 students and faculty. Emphasis on rapid prototyping, iterative testing, and cross-cultural teamwork.",
    tags: ["3D Modeling", "C++ Programming", "Arduino"],
    pdf: null,
    img: "./assets/img/eu-flag-erasmus-logo.jpg",
    details: {
      context:
        "Erasmus+ brought together students from different countries to design, build, and race autonomous line-following cars in just two weeks.",
      role: "Team member focused on chassis design, 3D printing, and PID tuning",
      team: "International student team",
      timeline: "Erasmus+ exchange at Carl Benz Schule",
      duration: "Two weeks",
      outcome:
        "An autonomous line-following car built from a custom 3D-printed chassis, Arduino Uno, IR sensor array, and PWM motor control. Achieved the best team time of 32 seconds on the competition track and presented the project to around 40 students and faculty.",
      challenges:
        "Working in an international team meant bridging language and workflow differences. The car needed many rapid iterations: sensor height, wheel alignment, PID constants, and chassis weight all affected performance.",
      lessonsLearned:
        "Rapid prototyping and frequent track testing beat over-planning. A small, lightweight chassis with a low center of gravity handles better. Cross-cultural teamwork improves when roles are clear and communication is frequent.",
      futureWork:
        "Experiment with faster microcontrollers, add encoders for odometry, and try more advanced line-detection algorithms for sharper turns.",
      highlights: [
        "Designed and 3D-printed chassis in Fusion 360",
        "Programmed Arduino Uno with PID line-following logic",
        "Calibrated IR sensor arrays for track detection",
        "Achieved best team time of 32 seconds",
        "Presented results to ~40 students and faculty",
      ],
      specs: [
        { label: "Controller", value: "Arduino Uno (C++)" },
        { label: "Sensors", value: "IR line-following array" },
        { label: "CAD", value: "Fusion 360 + 3D print" },
        { label: "Drive", value: "DC motors + PWM" },
        { label: "Result", value: "Best time 32s" },
      ],
      gallery: [
        "./assets/img/projects/erasmus/erasmus-car-1.jpg",
        "./assets/img/projects/erasmus/erasmus-car-2.jpg",
      ],
    },
  },
  openclaw: {
    title: "OpenClaw — Home AI Agent Lab",
    category: "AI & Automation Lab",
    overview:
      "A personal AI-agent testing environment running OpenClaw inside an isolated virtual machine on a home PC. The lab is used to safely customize an agent with skills, integrate remote communication via Telegram, and explore agent workflows backed by a Kimi subscription.",
    objectives:
      "Build a sandboxed, isolated environment where an AI agent can be extended with custom skills and remote-control capabilities. The setup must keep experimental agent code separate from the host system and daily tools, while enabling remote interaction through Telegram.",
    tech: "OpenClaw runs inside an isolated virtual machine on a home PC. Custom skills extend the agent's capabilities. Telegram Bot API provides remote command and notification delivery. A Kimi subscription supplies the underlying language-model backend for reasoning and responses.",
    results:
      "A working isolated test environment where the agent accepts skills, sends and receives Telegram messages, and is backed by Kimi. The setup is documented so the VM can be rebuilt or extended without affecting the host machine.",
    tags: ["OpenClaw", "AI Agents", "Telegram", "Kimi", "VM Isolation"],
    pdf: null,
    img: "./assets/img/openclaw-thumb.png",
    details: {
      context:
        "This is a live learning lab for AI-agent tooling. Running everything inside an isolated VM means I can break, rebuild, and extend the agent without risking my main PC or data.",
      role: "Solo researcher, agent customizer, and integration developer",
      team: "Solo project",
      timeline: "In progress",
      duration: "Ongoing",
      outcome:
        "OpenClaw agent running in an isolated home VM, extended with custom skills, connected to Telegram for remote communication, and using Kimi as the language model backend.",
      challenges:
        "Isolating the agent in a VM while keeping remote access smooth required careful network and resource planning. Custom skills needed clear input/output contracts to work reliably with the agent loop, and Telegram webhook or polling setup had to be robust against home-network changes.",
      lessonsLearned:
        "Isolation is essential when experimenting with agent tooling. Starting with a clean VM snapshot makes iteration faster. Telegram is a surprisingly practical remote-control interface for headless agents.",
      futureWork:
        "Add more skills for file operations, system monitoring, and cloud-service queries. Experiment with persistent memory and multi-step task planning. Document the setup as a reproducible template.",
      highlights: [
        "OpenClaw agent in an isolated home VM",
        "Custom skill development and integration",
        "Telegram remote command and notification channel",
        "Kimi subscription as language-model backend",
        "Documented, rebuildable test environment",
      ],
      specs: [
        { label: "Agent platform", value: "OpenClaw" },
        { label: "Isolation", value: "Virtual machine on home PC" },
        { label: "Remote comms", value: "Telegram Bot API" },
        { label: "LLM backend", value: "Kimi subscription" },
        { label: "Focus", value: "Skill customization & remote control" },
      ],
      gallery: [],
    },
  },
  autovault: {
    title: "AutoVault — Used-Car Marketplace",
    category: "Full-Stack Web App",
    overview:
      "A premium used-car marketplace built for the Luxembourg market. AutoVault connects buyers and sellers with a curated inventory, advanced filtering, detailed car pages, a trade-in valuation tool, and a full admin panel for inventory and lead management.",
    objectives:
      "Deliver a production-ready SaaS-style marketplace with multi-language support (French, English, German, Arabic), mobile-first responsive design, SEO-optimized pages, secure admin authentication, and a complete CRUD dashboard for managing listings and inquiries.",
    tech: "Frontend built with React 19, TypeScript, Vite 7, and Tailwind CSS 3.4. UI components from shadcn/ui and Radix UI. Routing via React Router v7. Animations with Framer Motion and GSAP ScrollTrigger. Forms handled by React Hook Form and Zod. Backend uses Supabase for PostgreSQL, authentication, and image storage. Resend sends transactional emails. hCaptcha provides conditional spam protection.",
    results:
      "Feature-complete application with 12+ public and admin routes, multi-language and RTL support, dynamic car detail pages with JSON-LD structured data, image galleries with drag-to-reorder admin uploads, CSV export, analytics cards, and a build-time generated sitemap.",
    tags: ["React 19", "TypeScript", "Supabase", "Tailwind CSS"],
    pdf: null,
    img: "./assets/img/autovault-thumb.png",
    details: {
      context:
        "AutoVault is a portfolio-grade full-stack project demonstrating modern marketplace functionality: listings, inquiries, admin workflows, image storage, and production considerations like SEO, security, and performance.",
      role: "Full-stack developer, UI/UX designer, and deployment lead",
      team: "Solo project",
      timeline: "Portfolio full-stack build",
      duration: "Several months",
      outcome:
        "A working React + TypeScript + Supabase marketplace with advanced inventory filtering, TikTok-style mobile feed, trade-in valuation, multi-step seller form, secure admin dashboard, image compression/reorder, CSV export, and multi-language SEO.",
      challenges:
        "Supporting four languages including Arabic RTL required a robust translation system and careful layout testing. Admin image uploads needed client-side compression and drag-to-reorder. Public forms required rate limiting and conditional hCaptcha to prevent abuse.",
      lessonsLearned:
        "Modern React tooling with Vite and TypeScript makes large apps manageable. Supabase covers a surprising amount of backend needs. SEO and structured data should be planned from the start, not bolted on later.",
      futureWork:
        "Deploy to Vercel with environment variables, add real analytics, finalize branding and logo, and continue mobile refinements. Consider adding payment hold/escrow features for seller verification.",
      highlights: [
        "React 19 + TypeScript + Vite 7 frontend",
        "Supabase auth, PostgreSQL, and image storage",
        "Multi-language support with Arabic RTL",
        "Advanced inventory filtering and TikTok-style feed",
        "Admin dashboard with CRUD, CSV export, and analytics",
        "SEO with JSON-LD, Open Graph, and dynamic sitemap",
      ],
      specs: [
        { label: "Frontend", value: "React 19, TypeScript, Vite 7" },
        { label: "Styling", value: "Tailwind CSS 3.4 + shadcn/ui" },
        { label: "Backend", value: "Supabase (Auth, PostgreSQL, Storage)" },
        { label: "Routing", value: "React Router v7" },
        { label: "Animations", value: "Framer Motion + GSAP ScrollTrigger" },
        { label: "Forms", value: "React Hook Form + Zod" },
        { label: "Email", value: "Resend" },
        { label: "Spam protection", value: "hCaptcha" },
      ],
      gallery: [],
    },
  },
  minicflaz104: {
    title: "MiniCFL — Azure AZ-104 Demonstration",
    category: "Cloud Infrastructure",
    overview:
      "A three-person AZ-104 (Azure Administrator) demonstration project built for the BTS Cloud Computing course. The visible part is a CFL train simulator that moves one train along the real Petange \u2192 Luxembourg line, showing live position, next stop, delay and timetable. The simulator exists to give every Azure resource a concrete reason to be there: around it the team built and administered a complete environment covering the five AZ-104 skill areas, deployed across development and production in two different Azure regions.",
    objectives:
      "Demonstrate real Azure administration skills across identity, governance, compute, networking, and monitoring. Deploy a working containerised web application backed by a private PostgreSQL database, a timer-driven Azure Function, segmented VNets with NSGs, and Azure Monitor alerts, all duplicated across dev and prod environments in separate regions.",
    tech: "Microsoft Entra ID and RBAC for identity; management groups, Azure Policy, tags and budget alerts for governance; Azure Container Registry and App Service (Web App for Containers) for the simulator UI; an Azure VM with managed disk hosting PostgreSQL; an Azure Function timer that recalculates train state every minute; a VNet with web and database subnets protected by NSGs; Azure Monitor, Log Analytics, Application Insights, alerts and action groups for operations; Network Watcher for connectivity verification; Docker for containerisation.",
    results:
      "A working train simulator web app served from Azure App Service, with a private PostgreSQL VM, minute-by-minute state updates from an Azure Function, and full monitoring. The environment spans two regions (France Central dev, Sweden Central prod), uses least-privilege RBAC at resource-group scope, and enforces governance through management groups, policy, tags and budgets. Every layer maps back to an AZ-104 skill area with evidence documented in the final report.",
    tags: ["Azure", "AZ-104", "Entra ID", "RBAC", "App Service", "PostgreSQL"],
    pdf: null,
    img: "./assets/img/minicfl-thumb.png",
    details: {
      context:
        "MiniCFL uses a familiar CFL train route as a realistic scenario. The simulator is deliberately small, but the Azure environment around it is full-scale: identity, governance, compute, networking and monitoring all have a concrete job to do.",
      role: "Networking & database lead (VNet, NSGs, PostgreSQL VM)",
      team: "Donnny (identity & governance), Marios (networking & database), Guilherme (compute, app & monitoring)",
      timeline: "BTS Cloud Computing AZ-104 demonstration",
      duration: "Course project",
      outcome:
        "A deployed, multi-environment Azure architecture with a live train simulator web app, private database tier, timer-driven simulation, NSG-protected VNet, and Azure Monitor dashboards and alerts across dev and prod regions.",
      challenges:
        "Splitting the VNet into web and database subnets and proving with NSGs that the database is unreachable from the internet required careful rule design and verification. Least-privilege RBAC had to be tested by confirming what a Reader could not do. Student credit limits made budgets, tags and cost alerts essential rather than optional.",
      lessonsLearned:
        "Least-privilege permissions become real only when you test them. Network security is best learned by doing subnet segmentation and proving isolation. Budgets and tags are critical on real subscriptions. Knowing what to cut under pressure is itself a valuable skill.",
      futureWork:
        "Rebuild the environment with Terraform or Bicep, add a CI/CD pipeline for the container image, introduce a load balancer and scale set for the web tier, and run backup and recovery drills.",
      highlights: [
        "Management-group hierarchy with two student subscriptions",
        "Dev (France Central) and prod (Sweden Central) environments",
        "Least-privilege RBAC at resource-group scope",
        "Containerised web UI from ACR on App Service",
        "PostgreSQL VM kept private by NSGs",
        "Azure Function timer updates train state every minute",
        "Azure Monitor dashboards, alerts and action groups",
        "Azure Policy, tags and budget alerts",
      ],
      specs: [
        { label: "Cloud", value: "Microsoft Azure" },
        { label: "Identity", value: "Microsoft Entra ID + RBAC" },
        { label: "Governance", value: "Management groups, Policy, Tags, Budgets" },
        { label: "Compute", value: "App Service (Web App for Containers), Azure VM" },
        { label: "Container", value: "Docker + Azure Container Registry" },
        { label: "Database", value: "PostgreSQL on Azure VM" },
        { label: "Serverless", value: "Azure Functions (timer trigger)" },
        { label: "Networking", value: "VNet + Subnets + NSGs + Network Watcher" },
        { label: "Monitoring", value: "Azure Monitor + Log Analytics + Alerts" },
        { label: "Regions", value: "France Central (dev), Sweden Central (prod)" },
      ],
      gallery: [
        "./assets/img/projects/minicfl-az104/minicfl-architecture.webp",
        "./assets/img/projects/minicfl-az104/minicfl-simulator.webp",
      ],
    },
  },
};

const getProjectById = (id) => projectData[id] || null;
