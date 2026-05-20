import type { Bil, BilArr } from "../lib/lang";

// ─── Personal ────────────────────────────────────────────────────────────────

export const personal = {
  name: "Etienne Chevrollier",
  title: { en: "Data Engineer · DataPlatform Engineer", fr: "Ingénieur Data · DataPlatform Engineer" } as Bil,
  subtitle: {
    en: "Building Reliable Data Systems & Internal Tools for Business Teams",
    fr: "Construire des systèmes data fiables et des outils internes pour les équipes métier",
  } as Bil,
  location: "Barcelona, Catalonia, Spain",
  tagline: {
    en: "Data Engineer with a strong Software Engineering foundation. My strengths lie in understanding systems end-to-end, proposing solutions aligned with real business usage, and simplifying complex processes. From dbt pipelines and data contracts to AI-powered internal tools ➜ I bridge the gap between data infrastructure and the people who use it.",
    fr: "Ingénieur Data fort d'un solide bagage en génie logiciel, j'accompagne les équipes data et métier dans la transformation d'infrastructures complexes en systèmes robustes et pérennes : des pipelines fiables aux outils internes qui permettent aux parties prenantes d'exploiter la donnée en autonomie. L'ingénierie Data n'est pas un centre de coût, c'est un levier de performance et de croissance.",
  } as Bil,
  badge: { en: "Google Cloud Certified", fr: "Certifié Google Cloud" } as Bil,
  email: "etiennechevrollier@gmail.com",
  cv: "/cv-etienne-chevrollier.pdf", // legacy static file path, unused since the CV is now generated on the fly
  github: "https://github.com/Wabfall/",
  linkedin: "https://linkedin.com/in/etienne-chevrollier",
  website: "https://wabfall.github.io",
};

// ─── About ───────────────────────────────────────────────────────────────────

export const about = {
  hook: [
    { en: "Beyond pipelines.", fr: "Au-delà des pipelines." } as Bil,
    { en: "Reliable data ecosystems, owned by everyone.", fr: "Des écosystèmes data fiables, pilotés par tous." } as Bil,
  ],
  paragraphs: [
    {
      en: "I'm Etienne Chevrollier, a Data Engineer with a strong Software Engineering background, currently at papernest in Barcelona. I partner with data and business teams to transform complex infrastructures into robust, sustainable systems from high-availability pipelines to intuitive internal tools that empower stakeholders to leverage data autonomously.",
      fr: "Ingénieur Data fort d'un solide bagage en génie logiciel, j'évolue actuellement chez papernest à Barcelone. J'accompagne les équipes data et métiers dans la transformation d'infrastructures complexes en systèmes robustes et pérennes de la conception de pipelines à haute disponibilité au développement d'outils internes intuitifs qui permettent aux parties prenantes d'exploiter la donnée en toute autonomie.",
    } as Bil,
    {
      en: "Data reliability is the cornerstone of my expertise. I implement data contracts and strict schema validation to proactively anticipate anomalies before they impact downstream consumers, deploy alerting systems for proactive architecture monitoring, and build dbt models with rigorous software engineering standards systematically tested, documented, and version-controlled.",
      fr: "La fiabilité de la donnée est la pierre angulaire de mon expertise. J'implémente des data contracts et des validations de schémas stricts pour anticiper les anomalies avant qu'elles n'impactent les consommateurs, des systèmes d'alerting pour un monitoring proactif des architectures, et des modèles dbt avec la rigueur de l'ingénierie logicielle systématiquement testés, documentés et versionnés.",
    } as Bil,
    {
      en: "I build pragmatic internal tools designed around real-world usage: secure configuration editors enabling non-technical teams to orchestrate data flows without risk, visualisation platforms co-designed with business stakeholders, and AI-powered solutions to multiply workflow efficiency across both technical and non-technical teams.",
      fr: "Je développe des outils internes pragmatiques, pensés pour les usages réels : des éditeurs de configuration sécurisés permettant aux équipes non-techniques de piloter les flux de données sans risque, des plateformes de restitution visuelle co-construites avec les métiers, et des solutions propulsées par l'IA pour démultiplier l'efficacité des workflows.",
    } as Bil,
    {
      en: "I believe data is a strategic value-creation lever. My approach goes beyond technical execution: my role as an engineer is to align data with business objectives while anticipating future needs. By making infrastructure reliable, I free up engineering capacity to reinvest in innovation. Data Engineering is not a cost centre ➜ it's a genuine engine for performance and growth.",
      fr: "Je suis convaincu que la donnée est un levier de création de valeur stratégique. Mon approche dépasse la simple exécution technique : mon rôle est d'aligner la data sur les objectifs de l'entreprise tout en anticipant ses besoins futurs. En fiabilisant l'infrastructure, je libère du temps d'ingénierie pour le réinvestir dans l'innovation. L'ingénierie Data n'est pas un centre de coût ➜ c'est un véritable moteur de performance et de croissance.",
    } as Bil,
  ],
};

// ─── Category tag ─────────────────────────────────────────────────────────────

export type Category = "software" | "data" | "both" | null;

export type ProjectCategory = "fullstack" | "api" | "data";

// ─── Experiences ─────────────────────────────────────────────────────────────

export const experiences = [
  {
    role: { en: "Data Engineer", fr: "Ingénieur Data" } as Bil,
    company: "papernest",
    type: { en: "French International Postgraduate Program (V.I.E)", fr: "VIE (Volontariat International Entreprise)" } as Bil,
    period: "Oct 2025 – Present",
    location: "Barcelona, Spain · Hybrid",
    summary: {
      en: "Sole onsite Data Engineer for the FR, ES & IT markets — supporting a fast-growing data stack in transition from a legacy setup toward a reliable, data-driven platform.",
      fr: "Seul Data Engineer sur site pour les marchés FR, ES & IT — accompagnement d'une stack data en scale-up dans sa transition d'un setup legacy vers une plateforme fiable et data-driven.",
    } as Bil,
    groups: [
      {
        intro: {
          en: "Reliability & engineering standards on the in-house ETL",
          fr: "Fiabilité & standards d'ingénierie sur l'ETL interne",
        } as Bil,
        bullets: {
          en: [
            "Developing features on the proprietary internal ETL engine (Python) and dbt models, applying software engineering standards (testing, documentation, CI/CD)",
            "Set up data contracts and schema validation to proactively catch data quality issues across markets",
            "Implemented alerting processes for pipeline monitoring and proactive incident detection",
          ],
          fr: [
            "Développement de fonctionnalités sur le moteur ETL interne propriétaire (Python) et les modèles dbt, avec les standards du génie logiciel (tests, documentation, CI/CD)",
            "Mise en place de data contracts et de validation de schéma pour détecter les problèmes de qualité en amont",
            "Implémentation de processus d'alerting pour la surveillance des pipelines et la détection proactive d'incidents",
          ],
        } as BilArr,
      },
      {
        intro: {
          en: "Internal tools for business teams",
          fr: "Outils internes pour les équipes métier",
        } as Bil,
        bullets: {
          en: [
            "Designed & developed a custom YAML Configuration Editor. Pipeline build & test time cut by ~50%, incident investigation from 30–60 min down to under 2 min.",
            "Built AI-powered internal tools to accelerate workflows for both technical and non-technical teams",
          ],
          fr: [
            "Conception & développement d'un éditeur de configuration YAML. Temps de fabrication & test réduit de ~50%, investigation d'incidents de 30–60 min à moins de 2 min.",
            "Outils internes propulsés par l'IA pour accélérer les workflows des équipes tech et non-tech",
          ],
        } as BilArr,
      },
      {
        intro: {
          en: "Cross-functional role across the FR, ES & IT markets",
          fr: "Rôle transverse sur les marchés FR, ES & IT",
        } as Bil,
        bullets: {
          en: ["Sole Data Engineer onsite, primary point of contact for Sales Ops and Partnership"],
          fr: ["Seul Data Engineer sur site, interlocuteur principal des équipes Sales Ops et Partnership"],
        } as BilArr,
      },
    ],
    category: "both" as Category,
    icon: "/logos/papernest.svg" as string | null,
    highlights: {
      en: [
        "Acting as the sole Data Engineer onsite, primary point of contact for Sales Ops and Partnership across FR, ES & IT markets",
        "Designed & developed a custom YAML Configuration Editor ➜ pipeline build & test time cut by ~50%, incident investigation from 30–60 min to under 2 min",
        "Developing features on the proprietary internal ETL engine (Python) and dbt models, applying software engineering standards (testing, documentation, CI/CD)",
        "Set up data contracts and schema validation to proactively catch data quality issues across markets",
        "Implemented alerting processes for pipeline monitoring and proactive incident detection",
        "Built AI-powered internal tools to accelerate workflows for both technical and non-technical teams",
      ],
      fr: [
        "Seul Data Engineer sur site, interlocuteur principal pour les équipes Sales Ops et Partnership sur les marchés FR, ES & IT",
        "Concepteur et développeur d'un éditeur de configuration YAML ➜ fabrication & test des pipelines réduit de ~50%, investigation d'incidents de 30–60 min à moins de 2 min",
        "Développement de fonctionnalités sur le moteur ETL interne (Python) et des modèles dbt, avec les standards du génie logiciel (tests, documentation, CI/CD)",
        "Mise en place de data contracts et de validation de schéma pour détecter les problèmes de qualité en amont",
        "Implémentation de processus d'alerting pour la surveillance proactive des pipelines",
        "Construction d'outils internes propulsés par l'IA pour accélérer les workflows des équipes tech et non-tech",
      ],
    } as BilArr,
    tech: ["Python", "dbt", "Next.js", "React", "Tailwind CSS", "YAML", "ETL", "Data Contracts"],
    github: null,
  },
  {
    role: { en: "Front-Data Developer", fr: "Développeur Front-Data" } as Bil,
    company: "Bouygues Telecom",
    type: { en: "Apprenticeship", fr: "Alternance" } as Bil,
    period: "Sept 2022 – Aug 2025",
    location: "Nantes, France · Hybrid",
    summary: {
      en: "Full-stack development of an internal log-analysis platform and contributions across the data team's core ETL and governance tooling.",
      fr: "Développement full-stack d'une plateforme interne d'analyse de logs et contributions à l'ETL central ainsi qu'aux outils de gouvernance de l'équipe data.",
    } as Bil,
    category: "both" as Category,
    icon: "/logos/bouygues-telecom.svg" as string | null,
    highlights: {
      en: [
        "Developed an internal web app for log data visualization & analysis. Machine log investigation time reduced from several minutes to near-instant access.",
        "Improved a SQL streaming module within an internal ETL using Apache Flink",
        "Automated documentation generation from Java code & Markdown with Docusaurus",
        "Developed data governance scripts using BigQuery, Teradata, and Hadoop",
      ],
      fr: [
        "Développement d'une application web interne de visualisation et d'analyse de logs. Temps d'investigation des logs machines réduit de plusieurs minutes à un accès quasi-instantané.",
        "Amélioration d'un module SQL de streaming au sein d'un ETL interne avec Apache Flink",
        "Automatisation de la documentation depuis le code Java & Markdown avec Docusaurus",
        "Développement de scripts pour la gouvernance des données avec BigQuery, Teradata et Hadoop",
      ],
    } as BilArr,
    tech: ["Spring Boot", "React", "ElasticSearch", "MongoDB", "Apache Flink", "Java", "BigQuery", "Teradata", "Hadoop", "Docusaurus"],
    github: null,
  },
  {
    role: { en: "Co-founder & Web Developer", fr: "Co-fondateur & Développeur Web" } as Bil,
    company: "Thingmill",
    type: { en: "Student Project", fr: "Projet Étudiant" } as Bil,
    period: "Jan 2018 – Jul 2022",
    location: "Alençon, France",
    category: "software" as Category,
    icon: null as string | null,
    highlights: {
      en: [
        "Co-founded a student project (Retrobox) initiated in high school",
        "Web development with Vue.js, HTML/CSS for multiple websites",
        "Created visuals and graphics using Photoshop and design tools",
        "Managed social media and maintained a blog for the project",
      ],
      fr: [
        "Co-fondateur d'un projet étudiant (Retrobox) lancé au lycée",
        "Développement web avec Vue.js et HTML/CSS pour plusieurs sites",
        "Création de visuels et graphismes avec Photoshop et outils de design",
        "Gestion des réseaux sociaux et tenue d'un blog pour le projet",
      ],
    } as BilArr,
    tech: ["Vue.js", "HTML/CSS", "Photoshop"],
    github: null,
  },
  {
    role: { en: "Java Development Intern", fr: "Stagiaire Développement Java" } as Bil,
    company: "Ag2ir",
    type: { en: "Internship", fr: "Stage" } as Bil,
    period: "Apr 2022 – Jun 2022",
    location: "Alençon, France",
    category: "software" as Category,
    icon: null as string | null,
    highlights: {
      en: [
        "Developed a configuration application for an ERP system (EBP) using XML files",
        "Designed and developed a Java GUI (Swing) for configuring and using data",
        "Automated XML file processing to facilitate ERP integration in companies",
      ],
      fr: [
        "Développement d'une application de configuration pour un ERP (EBP) via des fichiers XML",
        "Conception et développement d'une interface Java GUI (Swing) pour configurer et utiliser les données",
        "Automatisation du traitement des fichiers XML pour faciliter l'intégration de l'ERP en entreprise",
      ],
    } as BilArr,
    tech: ["Java", "Java Swing", "XML", "Eclipse"],
    github: null,
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  {
    school: { en: "ESIEA – Graduate School of Engineering", fr: "ESIEA - ÉCOLE D'INGÉNIEUR·E·S D'UN NUMÉRIQUE UTILE" } as Bil,
    degree: { en: "Master's Degree, Computer Science & Digital Technologies", fr: "Diplôme d'Ingénieur en Informatique & Technologies Numériques" } as Bil,
    period: "Sept 2022 – Aug 2025",
    location: "Laval, France",
    category: "both" as Category,
    icon: "/logos/esiea.svg" as string | null,
    details: {
      en: [
        "Major: Software Engineering — Full-Stack Dev (Vue.js, TypeScript, Node.js), Architecture & Cloud (Microservices, CI/CD, Docker, AWS), UX (Figma)",
        "Data & Real-Time: SQL, NoSQL (MongoDB, ElasticSearch), RabbitMQ",
        "Minor: Business Engineering — Growth Hacking, negotiation, business strategy",
        "Digital Consulting Week at EY",
      ],
      fr: [
        "Majeure : Software Engineer — Dev Full-Stack (Vue.js, TypeScript, Node.js), Architecture & Cloud (Microservices, CI/CD, Docker, AWS), UX (Figma)",
        "Data & Temps Réel : SQL, NoSQL (MongoDB, ElasticSearch), RabbitMQ",
        "Mineure : Ingénieur d’Affaires — Growth Hacking, négociation, stratégie commerciale",
        "Semaine Conseil Digital chez EY",
      ],
    } as BilArr,
  },
  {
    school: { en: "Université du Québec à Chicoutimi (UQAC)", fr: "Université du Québec à Chicoutimi (UQAC)" } as Bil,
    degree: { en: "International Mobility – 3rd Year Exchange", fr: "Mobilité Internationale – Échange 3ème Année" } as Bil,
    period: "May 2023 – Jul 2023",
    location: "Chicoutimi, Canada",
    category: "both" as Category,
    icon: "/logos/uqac.svg" as string | null,
    details: {
      en: [
        "Advanced Web Technologies: bank web app (React, TypeScript, Spring Boot)",
        "Programming Tools for Data Science: addiction analysis (Jupyter, Pandas, Python)",
        "Visits to 3 IT companies in Quebec",
      ],
      fr: [
        "Technologies Web Avancées : application bancaire (React, TypeScript, Spring Boot)",
        "Outils de Programmation pour la Data Science : analyse sur l'addiction (Jupyter, Pandas, Python)",
        "Visites de 3 entreprises IT au Québec",
      ],
    } as BilArr,
  },
  {
    school: { en: "Institut Universitaire de Technologie", fr: "Institut Universitaire de Technologie" } as Bil,
    degree: { en: "DUT (Two-Year Technical Degree), Computer Science", fr: "DUT Informatique" } as Bil,
    period: "Sept 2020 – Jun 2022",
    location: "Le Havre, France",
    category: null as Category,
    icon: "/logos/ulhn.png" as string | null,
    details: {
      en: ["Foundation in Java, SQL, algorithms, networks, and software engineering"],
      fr: ["Bases en Java, SQL, algorithmes, réseaux et génie logiciel"],
    } as BilArr,
  },
  {
    school: { en: "Lycée Alain", fr: "Lycée Alain" } as Bil,
    degree: { en: "High School Diploma – Scientific track, Engineering Sciences", fr: "Baccalauréat Scientifique – Sciences de l'Ingénieur" } as Bil,
    period: "Sept 2017 – Jun 2020",
    location: "Alençon, France",
    category: null as Category,
    icon: null as string | null,
    details: {
      en: ["With honors — Engineering Sciences specialization"],
      fr: ["Mention bien — spécialité Sciences de l'Ingénieur"],
    } as BilArr,
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: "3+", label: { en: "Years of Experience", fr: "Ans d'expérience" } as Bil },
  { value: "6+", label: { en: "Projects Delivered",  fr: "Projets livrés"   } as Bil },
  { value: "4+", label: { en: "Companies",           fr: "Entreprises"       } as Bil },
  { value: "GCP", label: { en: "Cloud Certified",    fr: "Certifié Cloud"    } as Bil },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export type SkillCategory = {
  name: Bil;
  capabilities: BilArr;
  tools: string[];
};

export const skills: SkillCategory[] = [
  {
    name: { en: "Data Engineering", fr: "Ingénierie des données" },
    capabilities: {
      en: ["Pipeline design & ETL/ELT development", "Data contracts & schema validation", "Alerting & quality monitoring", "dbt modeling, testing & documentation"],
      fr: ["Conception de pipelines & développement ETL/ELT", "Data contracts & validation de schéma", "Alerting & monitoring de la qualité des données", "Modélisation dbt, tests & documentation"],
    },
    tools: ["Python", "dbt", "SQL", "Apache Flink", "BigQuery", "GCP"],
  },
  {
    name: { en: "Software Engineering", fr: "Software Engineering" },
    capabilities: {
      en: ["Full-stack web development", "Internal tools & business applications", "API design & backend services", "User-centered interfaces for non-technical users"],
      fr: ["Développement web full-stack", "Outils internes & applications métier", "Conception d'API & services backend", "Interfaces centrées utilisateur pour les profils non-techniques"],
    },
    tools: ["React", "Next.js", "TypeScript", "Spring Boot", "Tailwind CSS"],
  },
  {
    name: { en: "Data Platform & Cloud", fr: "Plateforme Data & Cloud" },
    capabilities: {
      en: ["Cloud data infrastructure (GCP certified)", "Data warehouse design & optimization", "Streaming & batch processing", "Data governance & observability"],
      fr: ["Infrastructure data cloud (certifié GCP)", "Conception & optimisation de data warehouses", "Traitement en streaming & batch", "Gouvernance des données & observabilité"],
    },
    tools: ["BigQuery", "Google Cloud Platform", "GCP Cloud Digital Leader (certified)", "ElasticSearch", "Docker"],
  },
  {
    name: { en: "AI & Internal Tooling", fr: "IA & Outils Internes" },
    capabilities: {
      en: ["AI-powered tools for technical & non-technical teams", "LLM integration & prompt engineering", "Workflow automation", "Configuration-driven systems"],
      fr: ["Outils IA pour équipes techniques & non-techniques", "Intégration LLM & prompt engineering", "Automatisation des workflows", "Systèmes pilotés par la configuration"],
    },
    tools: ["Python", "LLM APIs", "Next.js", "React"],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: Bil;
  name: string;
  role: Bil;
  company: string;
  linkedinUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      fr: "J'ai eu l'occasion de manager Etienne lors de son VIE à Barcelone en tant que data engineer chez Papernest. J'ai particulièrement apprécié sa proactivité et son autonomie. À titre d'exemple, il a lui-même initié, défendu et mené à bien un projet à forte valeur ajoutée pour plusieurs équipes de l'entreprise. Il a également fait preuve d'une grande curiosité et d'une excellente capacité à appréhender rapidement les sujets qui lui étaient confiés, ce qui lui a permis de progresser rapidement. Nul doute qu'il mènera une très belle carrière dans la data.",
      en: "I had the opportunity to manage Etienne during his VIE in Barcelona as a Data Engineer at Papernest. I particularly appreciated his proactivity and autonomy. As an example, he independently initiated, championed, and delivered a high-value project that benefited several teams across the company. He also showed great curiosity and an excellent ability to quickly get up to speed on new topics, which allowed him to progress rapidly. There is no doubt he will have a brilliant career in data.",
    } as Bil,
    name: "Vincent Potin",
    role: { fr: "Manager direct · Lead Data Engineer", en: "Direct Manager · Lead Data Engineer" } as Bil,
    company: "papernest",
  },
  {
    quote: {
      fr: "Etienne délivre un code de qualité, documenté et en respectant les délais. Il sait adapter son discours à son interlocuteur pour expliquer sa démarche et être force de proposition. Je recommande vivement !",
      en: "Etienne delivers quality, well-documented code on time. He knows how to adapt his communication to his audience, explain his approach clearly, and bring forward relevant proposals. Highly recommended!",
    } as Bil,
    name: "Aslane Mortreau",
    role: { fr: "Manager direct · Freelance Data & AI Specialist", en: "Direct Manager · Freelance Data & AI Specialist" } as Bil,
    company: "",
  },
  {
    quote: {
      fr: "J'ai pu travailler avec Etienne chez Bouygues Telecom. Il débutait sa carrière et a su faire preuve d'une grande autonomie. Cette qualité s'ajoute à ses compétences techniques, sa rapidité d'apprentissage et sa positivité. C'était agréable de travailler avec Etienne, je le recommanderai avec plaisir.",
      en: "I had the chance to work with Etienne at Bouygues Telecom. He was early in his career and already showed strong autonomy. This, combined with his technical skills, fast learning curve, and positive attitude, made him a great colleague. I would be happy to recommend him.",
    } as Bil,
    name: "Vincent Le Squere",
    role: { fr: "Architecte logiciel", en: "Software Architect" } as Bil,
    company: "Bouygues Telecom",
  },
];

// ─── LinkedIn Posts ───────────────────────────────────────────────────────────

export type Post = {
  title: string;
  excerpt: string;
  date: string; // ISO: "2025-11-20"
  tag: string;  // "Data Engineering" | "Software" | "AI & Data" | ...
  url?: string;
};

export const linkedinPosts: Post[] = [
  {
    title: "Le 29 août 2025 — tourner une page",
    excerpt: "Le 29 août 2025, c'était le moment pour moi de tourner une page et dire au revoir. Retour sur 3 ans d'alternance chez Bouygues Telecom.",
    date: "2025-08-29",
    tag: "Software",
    url: "https://www.linkedin.com/posts/etienne-chevrollier_le-29-ao%C3%BBt-2025-c%C3%A9tait-le-moment-pour-activity-7374404327605682177-3sew",
  },
  {
    title: "Have you heard of Docusaurus?",
    excerpt: "Build optimized websites quickly and focus on your content — Docusaurus is Meta's static site generator. I used it to automate documentation generation from Java & Markdown at Bouygues Telecom.",
    date: "2025-04-14",
    tag: "Software",
    url: "https://www.linkedin.com/posts/etienne-chevrollier_build-optimized-websites-quickly-focus-activity-7338127913382277120-mPR4",
  },
  {
    title: "How to prepare for the Google Cloud Digital Leader certification?",
    excerpt: "Tips and resources to pass the Cloud Digital Leader exam — my experience preparing for the #GoogleCloud certification. #clouddigitalleader #GCP",
    date: "2025-04-18",
    tag: "Data Platform",
    url: "https://www.linkedin.com/posts/etienne-chevrollier_googlecloud-clouddigitalleader-certification-activity-7339214999539605504-aimC",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectContent = {
  context: Bil;
  approach: BilArr;
  solution: Bil;
  keyOutcome: Bil;
  applications: BilArr | null;
  link?: string;
};

export const projects = [
  {
    slug: "yaml-configuration-editor",
    title: { en: "YAML Configuration Editor", fr: "Éditeur de Configuration YAML" } as Bil,
    description: {
      en: "Custom internal web app that allows non-technical stakeholders at papernest to safely configure data pipelines. Cut pipeline build & test time by ~50% and incident investigation from 30–60 min to under 2 min.",
      fr: "Application web interne permettant aux stakeholders non-techniques de papernest de configurer des pipelines data en toute sécurité. Réduit le temps de fabrication & test de ~50% et l'investigation d'incidents de 30–60 min à moins de 2 min.",
    } as Bil,
    type: { en: "Internal Web Tool", fr: "Outil Interne Web" } as Bil,
    date: "Oct 2025",
    role: { en: "Sole developer", fr: "Développeur unique" } as Bil,
    company: "papernest",
    categories: ["fullstack", "api", "data"] as ProjectCategory[],
    tech: ["Python", "Next.js", "React", "Tailwind CSS", "YAML"],
    github: null as string | null,
    highlight: true,
    content: {
      context: {
        en: "At papernest, data pipeline configuration relied on manually editing YAML files distributed across multiple markets. Non-technical stakeholders — Sales Ops managers and Data Analysts in FR, ES, and IT — had no safe way to adjust configurations without involving a Data Engineer. A single YAML syntax error could silently break pipelines affecting multiple markets.",
        fr: "Chez papernest, la configuration des pipelines data reposait sur l'édition manuelle de fichiers YAML répartis sur plusieurs marchés. Les stakeholders non-techniques notamment les responsables Sales Ops FR, ES et IT n'avaient aucun moyen sécurisé de modifier les configurations sans impliquer un ingénieur Data. Une simple erreur de syntaxe YAML pouvait silencieusement casser des pipelines.",
      } as Bil,
      approach: {
        en: [
          "Designed a Next.js/React web interface with real-time YAML validation and an intuitive form-based editor",
          "Built a Python backend handling API calls with the internal ETL engine and LLMs",
          "Created a context-aware UI translating YAML structure into understandable fields for non-technical users",
          "Integrated an AI Copilot assistant guiding stakeholders through creating, editing, and repairing YAML configurations",
          "Implemented a testing framework to preview and validate business logic before any production deployment",
        ],
        fr: [
          "Conception d'une interface web Next.js/React avec validation YAML en temps réel et un éditeur basé sur des formulaires intuitifs",
          "Développement d'un backend Python gérant les appels API avec notre ETL interne et les LLMs",
          "Création d'une interface contextuelle traduisant la structure YAML en champs compréhensibles pour les utilisateurs non-techniques",
          "Ajout d'un assistant IA Copilot accompagnant les stakeholders dans la création, la modification et la réparation des configurations YAML",
          "Implémentation d'un framework de test permettant de prévisualiser et de valider les logiques métier avant toute mise en production",
        ],
      } as BilArr,
      solution: {
        en: "The editor gives non-technical stakeholders full control over pipeline configuration through a guided, safe interface. All changes are validated in real-time, previewed before application, and deployed through a controlled flow — with no risk of introducing syntax errors into production pipelines.",
        fr: "L'éditeur donne aux stakeholders non-techniques un contrôle total sur la configuration des pipelines via une interface guidée et sécurisée. Toutes les modifications sont validées en temps réel, prévisualisées avant application, et testés via un flux contrôlé, sans risque d'introduire des erreurs de syntaxe dans les pipelines de production.",
      } as Bil,
      keyOutcome: {
        en: "Pipeline build & test time cut by ~50%. Incident investigation went from 30–60 min to under 2 min. Sales Ops teams across FR, ES & IT now manage configurations autonomously, freeing engineering time for higher-value work.",
        fr: "Fabrication & test des pipelines réduit de ~50%. Investigation d'incidents : de 30–60 min à moins de 2 min. Les équipes Sales Ops FR, ES & IT configurent désormais les pipelines en autonomie, libérant du temps ingénierie pour des tâches à plus forte valeur.",
      } as Bil,
      applications: {
        en: ["Multi-market data pipeline self-service", "Non-technical stakeholder autonomy", "Reducing engineering bottlenecks in data operations", "Safe configuration management"],
        fr: ["Self-service de configuration multi-marché", "Autonomie des parties prenantes non-techniques", "Réduction des goulots d'étranglement en data ops", "Gestion sécurisée des configurations"],
      } as BilArr,
    } as ProjectContent,
  },
  {
    slug: "log-data-visualization-platform",
    title: { en: "Log Data Visualization Platform", fr: "Plateforme de Visualisation de Logs" } as Bil,
    description: {
      en: "Full-stack internal web application for log data visualization and analysis at Bouygues Telecom. Machine log investigation time reduced from several minutes to near-instant access. Designed and built independently from scratch.",
      fr: "Application web interne full-stack pour la visualisation et l'analyse de logs chez Bouygues Telecom. Temps d'investigation des logs machines réduit de plusieurs minutes à un accès quasi-instantané. Conçue et développée de façon autonome.",
    } as Bil,
    type: { en: "Internal Web Platform", fr: "Plateforme Interne Web" } as Bil,
    date: "Sept 2022",
    role: { en: "Sole developer", fr: "Développeur unique" } as Bil,
    company: "Bouygues Telecom",
    categories: ["fullstack", "data"] as ProjectCategory[],
    tech: ["Spring Boot", "React", "ElasticSearch", "MongoDB"],
    github: null as string | null,
    highlight: true,
    content: {
      context: {
        en: "Before this tool, data engineers at Bouygues Telecom had to consult pipeline logs directly on their machines — complex due to sheer volume and the rise of containerized workloads (Docker). The Data team (100+ people) had access to ElasticSearch and Kibana, but neither was tailored to their specific internal ETL logs. They needed a purpose-built interface with targeted filters adapted to the team's workflow.",
        fr: "L'analyse des logs au sein de la data platform de Bouygues Telecom était fragmentée sur plusieurs outils (logs machines, Kibana..) sans moyen unifié d'explorer le comportement des pipelines. D'autant plus avec l'arrivée de pipelines dockerisés, le pôle Data (+100 personnes) avait besoin d'une interface centralisée regroupant les données de log des systèmes distribués.",
      } as Bil,
      approach: {
        en: [
          "Acted as sole developer across the full stack: backend, frontend, and data layer design",
          "Built a Spring Boot backend querying ElasticSearch indices containing structured log data",
          "Developed a React frontend with real-time visualization of log streams, error patterns, and pipeline metrics",
          "Designed a filtering and search system adapted to Bouygues Telecom's specific pipeline log structure",
          "Iterated the application design through direct feedback loops with data engineers and analysts",
        ],
        fr: [
          "Développeur unique sur toute la stack : backend, frontend et conception de la couche data",
          "Construction d'un backend Spring Boot interrogeant les indices ElasticSearch et les métadonnées sur nos bases MongoDB",
          "Développement d'un frontend React avec visualisation en temps réel des flux de logs, des patterns d'erreurs et des métriques de pipeline",
          "Conception d'un système de filtrage et de recherche adapté à la structure spécifique des logs de Bouygues Telecom",
          "Itération du design et des fonctionnalités via des boucles de feedback direct avec les ingénieurs et analystes data",
        ],
      } as BilArr,
      solution: {
        en: "A unified internal web platform that aggregates, visualizes, and enables analysis of log data from distributed streaming pipelines. Engineers can monitor pipeline health, investigate anomalies, and analyze historical log patterns through a single, purpose-built interface.",
        fr: "Une plateforme web interne unifiée qui agrège, visualise et permet l'analyse des données de log issues de pipelines distribués. Les ingénieurs peuvent surveiller l'état des pipelines, investiguer les anomalies et analyser les patterns de logs historiques via une seule interface dédiée.",
      } as Bil,
      keyOutcome: {
        en: "Machine log investigation time reduced from several minutes to near-instant access via the platform. Shared filters let teams share context immediately during incidents.",
        fr: "Temps d'investigation des logs machines réduit de plusieurs minutes à un accès quasi-instantané via la plateforme. Les filtres partagés permettent aux équipes de partager le contexte immédiatement lors d'incidents.",
      } as Bil,
      applications: {
        en: ["Streaming pipeline monitoring", "Log analysis & anomaly investigation", "Real-time data quality visibility", "Internal data observability"],
        fr: ["Monitoring des pipelines", "Analyse de logs & investigation d'anomalies", "Visibilité sur la qualité des données en temps réel", "Observabilité data interne"],
      } as BilArr,
    } as ProjectContent,
  },
  {
    slug: "sql-streaming-module",
    title: { en: "SQL Streaming Module – Documentation & Evolutions", fr: "Module SQL Streaming – Documentation & Évolutions" } as Bil,
    description: {
      en: "Contributions to an internal SQL-on-Flink streaming module at the core of Bouygues Telecom's ETL. Main deliverable: an automated documentation system and CI/CD integration to make the module production-ready.",
      fr: "Contributions à un module SQL-sur-Flink interne au cœur de l'ETL de Bouygues Telecom. Livrable principal : un système de documentation automatisée et son intégration CI/CD pour rendre le module prêt pour la production.",
    } as Bil,
    type: { en: "Data Engineering", fr: "Ingénierie des données" } as Bil,
    date: "2023",
    role: { en: "Developer", fr: "Développeur" } as Bil,
    company: "Bouygues Telecom",
    categories: ["api", "data"] as ProjectCategory[],
    tech: ["Java", "Apache Flink", "Docusaurus", "Maven", "SQL"],
    github: null as string | null,
    highlight: true,
    content: {
      context: {
        en: "Bouygues Telecom's internal ETL includes a SQL streaming module built on top of Apache Flink. It exposes a SQL-derived language letting data engineers define streaming jobs (source → sink) without writing Flink code directly. The module was functional but not production-ready: connectors lacked documentation and the available options were invisible to users.",
        fr: "L'ETL interne de Bouygues Telecom inclut un module SQL streaming construit par-dessus Apache Flink. Il expose un langage dérivé du SQL permettant aux data engineers de définir des jobs de streaming (source → puits) sans écrire du Flink directement. Le module était fonctionnel mais pas prêt pour la production : les connecteurs manquaient de documentation et les options disponibles étaient invisibles pour les utilisateurs.",
      } as Bil,
      approach: {
        en: [
          "Deep-dived into the internal ETL architecture and the streaming module internals to understand the full connector system",
          "Built a Maven Java plugin that parses the module's source code, extracts annotations, and auto-generates Markdown documentation",
          "Deployed a Docusaurus static site to expose the generated docs in a navigable, user-friendly format",
          "Integrated the documentation pipeline into the existing CI/CD chain",
          "Worked on streaming evolutions: error handling improvements and robustness to malformed data",
        ],
        fr: [
          "Plongée dans l'architecture de l'ETL interne et les internals du module streaming pour comprendre le système de connecteurs",
          "Développement d'un plugin Maven Java qui parse le code source du module, extrait les annotations et génère automatiquement de la documentation Markdown",
          "Déploiement d'un site Docusaurus pour exposer la documentation générée dans un format navigable et user-friendly",
          "Intégration du pipeline de documentation dans la chaîne CI/CD existante",
          "Travail sur les évolutions streaming : amélioration de la gestion des erreurs et robustesse aux données malformées",
        ],
      } as BilArr,
      solution: {
        en: "An automated documentation system that keeps the streaming module's connector reference always in sync with the source code, deployed via CI/CD — giving data engineers a reliable, up-to-date reference to write streaming jobs autonomously.",
        fr: "Un système de documentation automatisée qui maintient la référence des connecteurs du module streaming toujours synchronisée avec le code source, déployée via CI/CD — donnant aux data engineers une référence fiable et à jour pour écrire leurs jobs de streaming en autonomie.",
      } as Bil,
      keyOutcome: {
        en: "The streaming module went from entirely undocumented to fully referenced, unblocking data engineers from having to inspect source code to understand available connectors and options.",
        fr: "Le module streaming est passé d'un état non documenté à une référence complète, permettant aux data engineers de comprendre les connecteurs disponibles sans avoir à lire le code source.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
  {
    slug: "escobaddictions",
    title: { en: "EscobAddictions — Global Drug Data Analysis", fr: "EscobAddictions — Analyse de Données sur les Drogues" } as Bil,
    description: {
      en: "Exploratory data analysis on global drug phenomena across four independent studies: mortality by substance, consumption by age group, cocaine–crime correlation, and drug-related imprisonment trends. Includes an interactive Power BI dashboard.",
      fr: "Analyse exploratoire des drogues dans le monde à travers quatre études indépendantes : mortalité par substance, consommation par tranche d'âge, corrélation cocaïne–criminalité, et évolution des incarcérations liées aux drogues. Inclut un dashboard Power BI interactif.",
    } as Bil,
    type: { en: "Academic Data Science Project", fr: "Projet Académique Data Science" } as Bil,
    date: "Jul 2023",
    role: { en: "Data analyst", fr: "Data analyst" } as Bil,
    company: "UQAC",
    categories: ["data"] as ProjectCategory[],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Jupyter Notebook"],
    github: "https://github.com/Wabfall/escobaddictions" as string | null,
    highlight: false,
    content: {
      context: {
        en: "Academic data science project at UQAC (Université du Québec à Chicoutimi), inspired by the Netflix series Narcos. The team approached the project from the angle of a fictional anti-drug agency: rather than a single narrow question, we conducted four independent studies to understand the evolution, impact, and correlations surrounding global drug phenomena. Data was sourced from Kaggle, Our World in Data, the World Bank, and UNODC.",
        fr: "Projet académique de data science à l'UQAC, inspiré par la série Netflix Narcos. L'équipe a abordé le projet sous l'angle d'une organisation anti-drogue fictive : plutôt qu'une seule problématique étroite, nous avons réalisé quatre études indépendantes pour comprendre l'évolution, l'impact et les corrélations autour des drogues dans le monde. Les données proviennent de Kaggle, Our World in Data, la Banque mondiale et l'UNODC.",
      } as Bil,
      approach: {
        en: [
          "Study 1 — Analyzed drug-related overdose deaths in Connecticut (2012–2018): mortality rate per substance, average victim age, and sex breakdown using Chief Medical Examiner data",
          "Study 2 — Mapped drug use patterns by age group across the US (12–65+): consumption rates and frequency for 12 substances including alcohol, marijuana, heroin, and fentanyl",
          "Study 3 — Explored the correlation between cocaine death rates and intentional homicide rates across countries using normalized covariance on World Bank + Our World in Data datasets",
          "Study 4 — Tracked prison admission trends for drug trafficking vs. possession across countries over 2016–2021 using UNODC Criminal Justice Statistics",
          "Built an interactive Power BI dashboard with 3 pages: deaths by substance, drug use by age, and a world map of cocaine mortality rates (1990–2019)",
        ],
        fr: [
          "Étude 1 — Analyse des décès par overdose dans le Connecticut (2012–2018) : taux de mortalité par substance, âge moyen des victimes et répartition par sexe à partir des données du médecin légiste en chef",
          "Étude 2 — Cartographie de la consommation de drogues par tranche d'âge aux États-Unis (12–65+) : taux et fréquence de consommation pour 12 substances dont alcool, marijuana, héroïne et fentanyl",
          "Étude 3 — Exploration de la corrélation entre taux de mortalité liée à la cocaïne et taux d'homicides par pays via la covariance normalisée sur les données Banque mondiale + Our World in Data",
          "Étude 4 — Suivi de l'évolution des entrées en prison pour trafic vs. possession de drogue par pays sur 2016–2021 à partir des statistiques UNODC",
          "Construction d'un dashboard Power BI interactif en 3 pages : décès par substance, consommation par âge, et carte mondiale des taux de mortalité liés à la cocaïne (1990–2019)",
        ],
      } as BilArr,
      solution: {
        en: "Four Jupyter Notebooks covering end-to-end data pipelines — ingestion, cleaning, feature engineering, analysis, and visualization — consolidated into a written report and an interactive Power BI dashboard for stakeholder communication.",
        fr: "Quatre Jupyter Notebooks couvrant des pipelines data de bout en bout — ingestion, nettoyage, feature engineering, analyse et visualisation — consolidés dans un rapport écrit et un dashboard Power BI interactif pour la communication aux parties prenantes.",
      } as Bil,
      keyOutcome: {
        en: "Key findings: fentanyl deaths rose sharply in the US between 2012–2018; painkillers are the leading overdose cause for women; cocaine mortality correlates positively with crime rates in Israel, Venezuela, Russia, Spain, and Canada; drug-related imprisonment is on an upward trend globally. All findings come with appropriate caveats on data quality and causality.",
        fr: "Résultats clés : forte hausse des décès liés au fentanyl aux États-Unis entre 2012 et 2018 ; les anti-douleurs sont la première cause d'overdose chez les femmes ; la mortalité liée à la cocaïne corrèle positivement avec les taux de criminalité en Israël, Venezuela, Russie, Espagne et Canada ; les incarcérations liées aux drogues suivent une tendance à la hausse mondiale. Tous les résultats sont accompagnés des réserves appropriées sur la qualité des données et la causalité.",
      } as Bil,
      applications: {
        en: ["Drug-related mortality trend analysis", "Demographic consumption profiling", "Cross-country policy impact comparison", "Data storytelling with Power BI"],
        fr: ["Analyse des tendances de mortalité liée aux drogues", "Profilage démographique de la consommation", "Comparaison de l'impact des politiques par pays", "Data storytelling avec Power BI"],
      } as BilArr,
      link: "https://github.com/Wabfall/escobaddictions",
    } as ProjectContent,
  },
  {
    slug: "bank-web-app-uqac",
    title: { en: "Bank Web App (UQAC)", fr: "Application Bancaire Web (UQAC)" } as Bil,
    description: {
      en: "Web application for a fictional bank developed during international exchange at UQAC. Full-stack project with React, TypeScript, and Spring Boot.",
      fr: "Application web pour une banque fictive développée lors de l'échange international à l'UQAC. Projet full-stack avec React, TypeScript et Spring Boot.",
    } as Bil,
    type: { en: "Academic Full-Stack Project", fr: "Projet Académique Full-Stack" } as Bil,
    date: "Jun 2023",
    role: { en: "Full-stack developer", fr: "Développeur full-stack" } as Bil,
    company: "UQAC",
    categories: ["fullstack"] as ProjectCategory[],
    tech: ["React", "TypeScript", "Spring Boot"],
    github: null as string | null,
    highlight: false,
    content: {
      context: {
        en: "Academic full-stack project at UQAC building a banking web application as part of the Advanced Web Technologies course, practicing modern full-stack development with React, TypeScript, and Spring Boot.",
        fr: "Projet académique full-stack à l'UQAC construisant une application bancaire web dans le cadre du cours de Technologies Web Avancées, en pratiquant le développement full-stack moderne avec React, TypeScript et Spring Boot.",
      } as Bil,
      approach: {
        en: ["Designed and implemented a RESTful API with Spring Boot and Java", "Built a React frontend with TypeScript for full type-safety", "Implemented user authentication, account management, and transaction history", "Applied clean architecture separating business logic from the UI layer"],
        fr: ["Conçu et implémenté une API RESTful avec Spring Boot et Java", "Construit un frontend React avec TypeScript pour une sécurité des types complète", "Implémenté l'authentification utilisateur, la gestion des comptes et l'historique des transactions", "Appliqué une architecture propre séparant la logique métier de la couche UI"],
      } as BilArr,
      solution: {
        en: "A functional banking web application with account management, transaction history, and secure user authentication — demonstrating full-stack capability with modern web technologies.",
        fr: "Une application bancaire web fonctionnelle avec gestion des comptes, historique des transactions et authentification sécurisée — démontrant la capacité full-stack avec les technologies web modernes.",
      } as Bil,
      keyOutcome: {
        en: "Complete full-stack delivery: REST API, typed React frontend, and functional banking features — built in 3 months during an international exchange.",
        fr: "Livraison full-stack complète : API REST, frontend React typé et fonctionnalités bancaires opérationnelles — construits en 3 mois lors d'un échange international.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
  {
    slug: "erp-configuration-app",
    title: { en: "ERP Configuration App (Ag2ir)", fr: "Application de Configuration ERP (Ag2ir)" } as Bil,
    description: {
      en: "Java GUI application for configuring an ERP system (EBP) via XML files. Automated XML file processing to facilitate ERP integration in companies.",
      fr: "Application Java GUI pour configurer un ERP (EBP) via des fichiers XML. Automatisation du traitement XML pour faciliter l'intégration de l'ERP en entreprise.",
    } as Bil,
    type: { en: "Desktop Application", fr: "Application Desktop" } as Bil,
    date: "Jun 2022",
    role: { en: "Intern developer", fr: "Développeur stagiaire" } as Bil,
    company: "Ag2ir",
    categories: ["fullstack"] as ProjectCategory[],
    tech: ["Java", "Java Swing", "XML"],
    github: null as string | null,
    highlight: false,
    content: {
      context: {
        en: "During an internship at Ag2ir, the team needed a user-friendly desktop interface to configure their ERP system (EBP) through XML files, replacing error-prone manual XML editing by non-technical staff.",
        fr: "Lors d'un stage chez Ag2ir, l'équipe avait besoin d'une interface desktop conviviale pour configurer leur ERP (EBP) via des fichiers XML, remplaçant l'édition manuelle XML sujette aux erreurs.",
      } as Bil,
      approach: {
        en: ["Analyzed the ERP XML schema to understand the full configuration structure", "Developed a Java Swing GUI enabling visual configuration of ERP parameters", "Implemented automated XML file generation from user interface inputs", "Added validation to prevent configuration errors before ERP integration"],
        fr: ["Analysé le schéma XML de l'ERP pour comprendre la structure de configuration complète", "Développé une interface Java Swing permettant la configuration visuelle des paramètres ERP", "Implémenté la génération automatisée de fichiers XML depuis les saisies de l'interface", "Ajouté une validation pour éviter les erreurs de configuration avant l'intégration ERP"],
      } as BilArr,
      solution: {
        en: "A Java desktop application with a visual Swing interface for configuring the ERP system, automatically generating valid XML files and eliminating manual XML editing.",
        fr: "Une application Java desktop avec une interface Swing visuelle pour configurer l'ERP, générant automatiquement des fichiers XML valides et éliminant l'édition manuelle du XML.",
      } as Bil,
      keyOutcome: {
        en: "Non-technical staff can configure and integrate the ERP without touching XML directly, reducing configuration errors and integration time.",
        fr: "Le personnel non-technique peut configurer et intégrer l'ERP sans toucher directement au XML, réduisant les erreurs de configuration et le temps d'intégration.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
  {
    slug: "linkedin-image-generator-api",
    title: { en: "LinkedIn Image Generator API", fr: "API de Génération d'Images LinkedIn" } as Bil,
    description: {
      en: "Self-hosted Next.js API that generates pixel-perfect LinkedIn post PNG images from a JSON payload. Supports lightweight markdown, emoji rendering, platform-native typography, image galleries, and fully customizable themes.",
      fr: "API Next.js auto-hébergée qui génère des images PNG de posts LinkedIn à partir d'un payload JSON. Supporte le markdown, le rendu d'emojis, la typographie native par plateforme, les galeries d'images et les thèmes personnalisables.",
    } as Bil,
    type: { en: "Open Source API", fr: "API Open Source" } as Bil,
    date: "Apr 2026",
    role: { en: "Sole developer", fr: "Développeur unique" } as Bil,
    company: "Personal Project",
    categories: ["api"] as ProjectCategory[],
    tech: ["Next.js", "TypeScript", "Satori", "React", "Node.js"],
    github: "https://github.com/Wabfall/linkedin-post-generator" as string | null,
    highlight: false,
    content: {
      context: {
        en: "Needed a simple, self-hostable way to generate Open Graph images that look exactly like LinkedIn posts — for blog previews, mockups, and social media visuals. Existing solutions were either closed, cloud-only, or didn't support the level of customisation required.",
        fr: "Besoin d'une solution simple et auto-hébergeable pour générer des images Open Graph ressemblant exactement à des posts LinkedIn — pour des aperçus de blog, des mockups et des visuels pour les réseaux sociaux. Les solutions existantes étaient soit fermées, soit cloud uniquement, soit insuffisamment personnalisables.",
      } as Bil,
      approach: {
        en: [
          "Built a single Next.js API route (Node.js runtime) accepting a JSON payload and returning a binary PNG",
          "Used Satori to convert a React component tree into SVG entirely server-side, with no browser or headless Chrome dependency",
          "Converted the SVG to a high-resolution PNG via @resvg/resvg-js, a Rust-based renderer",
          "Bundled Inter, SF Pro Text, Segoe UI, Roboto, and Noto Emoji fonts locally — no external font API calls at render time",
          "Implemented a lightweight markdown parser for bold, italic, links, and hashtags, plus SVG-sprite-based emoji rendering (Twemoji / Noto Color Emoji)",
          "Added a server-side height estimation algorithm to auto-size the card based on text length, emoji density, and line breaks",
          "Supported LinkedIn-style image gallery layouts (1 to 4+ attachments with overflow badge) and customisable color themes",
        ],
        fr: [
          "Construction d'une route API Next.js unique (runtime Node.js) acceptant un payload JSON et retournant un PNG binaire",
          "Utilisation de Satori pour convertir un arbre de composants React en SVG entièrement côté serveur, sans navigateur ni dépendance à Headless Chrome",
          "Conversion du SVG en PNG haute résolution via @resvg/resvg-js, un renderer basé sur Rust",
          "Polices Inter, SF Pro Text, Segoe UI, Roboto et Noto Emoji embarquées localement — aucun appel à une API de polices externe au moment du rendu",
          "Implémentation d'un parser markdown léger pour le gras, l'italique, les liens et les hashtags, avec rendu d'emojis via sprites SVG (Twemoji / Noto Color Emoji)",
          "Algorithme d'estimation de hauteur côté serveur pour dimensionner automatiquement la carte selon la longueur du texte, la densité d'emojis et les sauts de ligne",
          "Support des galeries d'images style LinkedIn (1 à 4+ pièces jointes avec badge de débordement) et des thèmes de couleurs personnalisables",
        ],
      } as BilArr,
      solution: {
        en: "A zero-dependency, self-hosted image generation API: POST a JSON object describing the post, receive a PNG. The entire render pipeline — markdown parsing, font loading, SVG generation, PNG conversion — runs in a single Node.js process with no external services.",
        fr: "Une API de génération d'images auto-hébergée sans dépendances externes : POST un objet JSON décrivant le post, reçoit un PNG. L'intégralité du pipeline de rendu — parsing markdown, chargement de polices, génération SVG, conversion PNG — s'exécute dans un seul processus Node.js sans services externes.",
      } as Bil,
      keyOutcome: {
        en: "Generates a full LinkedIn post image in under a second. Covers 25 documented feature scenarios (platform styles, device layouts, markdown, emojis, attachments, themes) each validated by a dedicated test image.",
        fr: "Génère une image de post LinkedIn complète en moins d'une seconde. Couvre 25 scénarios de fonctionnalités documentés (styles de plateforme, layouts de device, markdown, emojis, pièces jointes, thèmes), chacun validé par une image de test dédiée.",
      } as Bil,
      applications: {
        en: ["Open Graph image generation for blogs and websites", "LinkedIn post mockups for presentations", "Dynamic social media visual generation", "Programmatic content preview thumbnails"],
        fr: ["Génération d'images Open Graph pour blogs et sites web", "Mockups de posts LinkedIn pour présentations", "Génération programmatique de visuels pour les réseaux sociaux", "Miniatures de prévisualisation de contenu dynamique"],
      } as BilArr,
      link: "https://github.com/Wabfall/linkedin-post-generator",
    } as ProjectContent,
  },
];

// ─── CV-only extra data ───────────────────────────────────────────────────────

export const cvExtra = {
  phone: "+33 6 19 18 49 32",
  languages: [
    { name: { en: "French", fr: "Français" } as Bil, level: { en: "Native", fr: "Natif" } as Bil },
    { name: { en: "English", fr: "Anglais" } as Bil, level: { en: "B2", fr: "B2" } as Bil },
  ],
  hobbies: [
    {
      category: { en: "Travel & Cultural Discovery", fr: "Voyage & découverte culturelle" } as Bil,
      text: {
        en: "Explored Europe (Nordics, Portugal, Cyprus, Czech Republic, Greece) and North America (Canada)",
        fr: "Europe (pays nordiques, Portugal, Chypre, République tchèque, Grèce) et Amérique du Nord (Canada)",
      } as Bil,
    },
    {
      category: { en: "Music & Production", fr: "Musique & production" } as Bil,
      text: {
        en: "Guitarist and bassist, studio recording, host of a music podcast",
        fr: "Guitariste et bassiste, enregistrement studio, animation d'un podcast musical",
      } as Bil,
    },
    {
      category: { en: "Sports & Wellness", fr: "Sport & bien-être" } as Bil,
      text: {
        en: "Soccer, running, and strength training",
        fr: "Football, course à pied et musculation",
      } as Bil,
    },
  ],
};
