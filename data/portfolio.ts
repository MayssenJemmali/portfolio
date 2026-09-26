export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  technologyIcons?: Record<string, string>;
  image: { src: string; alt: string; width?: number; height?: number; presentation?: "diagram" };
  video?: { src: string; poster: string; title: string; playbackRate?: number };
  gallery?: { src: string; alt: string; width?: number; height?: number }[];
  detailPath?: string;
  date: string;
  githubUrl?: string;
  sourceAvailability?: "closed";
  liveUrl?: string;
  liveLabel?: string;
  highlights: string[];
  award?: ProjectAward;
};

export type ProjectAward = {
  label: string;
  badge?: string;
  event?: string;
  category?: string;
  team?: string;
  date?: string;
  summary: string;
  detail: string;
  certificate: { src: string; alt: string; width: number; height: number };
  postUrl: string;
};

export type Experience = {
  role: string;
  organization: string;
  organizationUrl: string;
  period: string;
  location: string;
  logo: { src: string; alt: string; width: number; height: number };
  highlights: string[];
  awardLabel?: string;
  technologies: string[];
  project?: { label: string; href: string; external?: boolean };
};

export const profile = {
  name: "Jemmali Mohamed Mayssen",
  role: "Software Engineering Student",
  statement:
    "I build reliable software and AI-powered systems, working across application development, software architecture, and the engineering needed to take intelligent features from idea to production.",
  availability:
    "Seeking a 6-month end-of-studies internship · Available January 2027",
  portrait: {
    src: "/portrait-cutout.webp",
    alt: "Portrait of Jemmali Mohamed Mayssen",
  },
  email: "MohamedMayssen.Jemmali@esprit.tn",
  emailUrl: "mailto:MohamedMayssen.Jemmali@esprit.tn",
  githubUrl: "https://github.com/MayssenJemmali",
  linkedinUrl: "https://www.linkedin.com/in/mayssen-jemmali/",
  resumeUrl: "/resume-en.pdf",
};

const deepSkynDemo = {
  title: "DeepSkyn application walkthrough",
  posterSrc: "/projects/deepskyn-demo-poster.jpg",
  videoSrc: "/deepskyn-demo.mp4",
  watchUrl: "https://youtu.be/Cx03Uz-qliY",
};

const gazelleProDemo = {
  title: "GazellePro Tunisair application demo",
  posterSrc: "/projects/gazellepro-poster.svg",
  videoSrc: "/gazellepro-demo.mp4",
  watchUrl: "https://youtu.be/1i9RVXQIwSo",
};

const deepSkynAward: ProjectAward = {
  label: "1st Prize · Bal des Projets '26",
  badge: "1st Prize",
  event: "13th Bal des Projets 2026",
  category: "FullStack JavaScript Project",
  team: "SuperNova",
  date: "9 June 2026",
  summary: "Awarded 1st Prize (Premier Prix) for FullStack JavaScript at ESPRIT's 13th Bal des Projets in 2026.",
  detail: "DeepSkyn, built by the SuperNova team, won the Premier Prix for the FullStack JavaScript Project entry at ESPRIT's 13th Bal des Projets on 9 June 2026.",
  certificate: {
    src: "/projects/deepskyn-first-prize-certificate.jpg",
    alt: "ESPRIT Bal des Projets 2026 certificate awarding Premier Prix to SuperNova for the FullStack JavaScript Project entry",
    width: 3507,
    height: 2480,
  },
  postUrl: "https://www.linkedin.com/posts/mayssen-jemmali_deepskyn-ai-fullstack-ugcPost-7470530196916523008-_o2D/",
};

const smartPfeStack = ["React", "Express", "MongoDB", "Python", "Gemini API", "RAG"];
const annonceTnStack = ["Angular", "Spring Boot", "MongoDB", "Python", "Machine Learning"];
const gazelleProStack = ["Symfony", "PHP", "SQL Server", "Amadeus API"];

export const projects: Project[] = [
  {
    id: "smartpfe",
    title: "SmartPFE",
    description:
      "SmartPFE guides students through their final-year project, from defining requirements to writing the thesis report. Gemini-powered assistance and a simulated jury help them prepare for the defense.",
    technologies: smartPfeStack,
    image: {
      src: "/projects/smartpfe-overview.png",
      alt: "SmartPFE student workspace showing thesis progress and the guided project roadmap",
      width: 1861,
      height: 930,
    },
    gallery: [
      { src: "/projects/smartpfe-2.png", alt: "SmartPFE AI-assisted problem statement editor", width: 1863, height: 925 },
      { src: "/projects/smartpfe-3.png", alt: "SmartPFE UML diagram workspace", width: 1864, height: 931 },
      { src: "/projects/smartpfe-4.png", alt: "SmartPFE report structure editor", width: 1865, height: 926 },
      { src: "/projects/smartpfe-6.png", alt: "SmartPFE academic report writing workspace", width: 1868, height: 929 },
      { src: "/projects/smartpfe-7.png", alt: "SmartPFE jury simulation preparation", width: 1857, height: 928 },
    ],
    date: "2026",
    githubUrl: "https://github.com/orgs/SmartPfe/repositories",
    liveUrl: "https://pfeguide.tn",
    detailPath: "/projects/smartpfe",
    highlights: [],
  },
  {
    id: "deepskyn",
    title: "DeepSkyn",
    award: deepSkynAward,
    description:
      "DeepSkyn analyzes skin photos to create personalized reports and skincare routines. The platform brings AI guidance, product discovery, and progress tracking together, backed by an automated delivery pipeline.",
    technologies: ["React", "NestJS", "PostgreSQL", "Gemini API", "Docker", "CI/CD"],
    technologyIcons: { "CI/CD": "Jenkins" },
    image: {
      src: "/projects/deepskyn-architecture.jpg",
      alt: "DeepSkyn architecture diagram showing the React and NestJS application, PostgreSQL, Kubernetes, CI/CD, GitOps, and monitoring",
      width: 1280,
      height: 853,
      presentation: "diagram",
    },
    date: "2026",
    sourceAvailability: "closed",
    video: {
      src: deepSkynDemo.videoSrc,
      poster: deepSkynDemo.posterSrc,
      title: deepSkynDemo.title,
    },
    liveUrl: deepSkynDemo.watchUrl,
    liveLabel: "Video demo",
    detailPath: "/projects/deepskyn",
    highlights: [],
  },
  {
    id: "annoncetn",
    title: "AnnonceTN",
    description:
      "A three-tier marketplace built during my QantumShift internship, with personalized item recommendations informed by user activity.",
    technologies: annonceTnStack,
    image: {
      src: "/projects/annoncetn-landing.png",
      alt: "AnnonceTN category landing page showing categories for cars, land, furniture, animals, and multimedia",
      width: 1847,
      height: 876,
    },
    gallery: [
      { src: "/projects/annoncetn-listings.png", alt: "AnnonceTN listings page with search filters and classified cards", width: 1830, height: 879 },
      { src: "/projects/annoncetn-detail.png", alt: "AnnonceTN listing detail page with seller information and safety advice", width: 1820, height: 879 },
      { src: "/projects/annoncetn-post-form.png", alt: "AnnonceTN form for publishing a listing with price, category, city, and image fields", width: 1795, height: 880 },
    ],
    date: "2025",
    githubUrl: "https://github.com/MayssenJemmali/annonceTn-fullstack",
    detailPath: "/projects/annoncetn",
    highlights: [],
  },
  {
    id: "gazellepro",
    title: "GazellePro",
    description:
      "A Tunisair B2B portal for travel agencies, with Amadeus flight data and partner workflows.",
    technologies: gazelleProStack,
    technologyIcons: {
      Symfony: "Symfony",
      PHP: "PHP",
      "SQL Server": "SQL Server",
      "Amadeus API": "Amadeus API",
    },
    image: {
      src: gazelleProDemo.posterSrc,
      alt: "GazellePro Tunisair demo preview",
    },
    date: "2024",
    sourceAvailability: "closed",
    video: {
      src: gazelleProDemo.videoSrc,
      poster: gazelleProDemo.posterSrc,
      title: gazelleProDemo.title,
      playbackRate: 1.5,
    },
    liveUrl: gazelleProDemo.watchUrl,
    liveLabel: "Video demo",
    detailPath: "/projects/gazellepro",
    highlights: [],
  },
];

export const smartPfeDetail = {
  lead: "An AI-assisted workspace that takes engineering students from an early project idea to a written report and a rehearsed defense.",
  intro: "A final-year project is more than a report. Students have to define a problem, structure the work, design a system, document it, and explain it to a jury. SmartPFE puts those steps into one guided workspace so the next task builds on the work already done.",
  journey: [
    "Start with a project brief, then work through the problem statement, stakeholders, requirements, backlog, and UML preparation.",
    "Build a report structure, draft chapters with AI assistance, and keep control of the final text through manual editing and targeted refinements.",
    "Prepare a presentation and pitch, then rehearse with a jury simulation that analyzes the spoken defense and asks follow-up questions.",
  ],
  architecture: "The React client communicates with an Express API that manages project data in MongoDB and coordinates Gemini-powered assistance. A separate Python pipeline extracts structure and text from reference reports, creates multilingual embeddings, and stores searchable chunks for retrieval. The retrieval layer can reassess weak matches before supplying context for report generation.",
  cragIntro: "A plain vector search can return the closest passages even when they are only loosely related to a student's topic. For report structure and chapter drafting, we built a corrective retrieval step around the project context and the section being written.",
  cragSteps: [
    { title: "Prepare the references", detail: "A Python ingestion job extracts text and tables of contents from 31 PFE reports, splits them into section-aware passages, and stores 3,092 chunks with multilingual 384-dimensional embeddings in MongoDB." },
    { title: "Retrieve for this project", detail: "The backend builds a query from the student's title, domain, requirements, stack, and target report section, then searches the indexed chunks with MongoDB Atlas Vector Search." },
    { title: "Grade and correct", detail: "A relevance grader checks the retrieved context. When its score falls below 0.65, the service rewrites the query and makes one targeted retrieval retry; structure or keyword fallbacks keep generation available when vector search fails." },
    { title: "Generate with context", detail: "The selected references are condensed into the AI prompt alongside the student's own project data. Students can review, edit, and refine the resulting outline or chapter instead of accepting it blindly." },
  ],
  cragEvaluation: "In a 10-section bilingual report-builder benchmark, the corrective pass ran in 5 cases. RAGAS measured 0.800 context precision, while context recall (0.200) and strict faithfulness (0.368) exposed grounding gaps that still need work. We used the evaluation and Langfuse traces to inspect where retrieval or generation went wrong.",
  architectureImage: {
    src: "/projects/smartpfe-architecture.gif",
    alt: "Animated SmartPFE architecture showing the React client, Express API, Gemini, MongoDB vector search, corrective retrieval, and Python ingestion pipeline",
    width: 2000,
    height: 1125,
  },
  gallery: [
    { src: "/projects/smartpfe-overview.png", alt: "SmartPFE project overview and guided roadmap", caption: "A single workspace keeps the project roadmap visible.", width: 1861, height: 930 },
    { src: "/projects/smartpfe-2.png", alt: "AI-assisted problem statement editor", caption: "The problem statement can be drafted, refined, and edited.", width: 1863, height: 925 },
    { src: "/projects/smartpfe-3.png", alt: "UML preparation workspace", caption: "Architecture and UML preparation stay connected to the project context.", width: 1864, height: 931 },
    { src: "/projects/smartpfe-4.png", alt: "Report structure editor", caption: "Students shape an editable report outline before writing chapters.", width: 1865, height: 926 },
    { src: "/projects/smartpfe-5.png", alt: "Academic report builder", caption: "The report builder works chapter by chapter.", width: 1850, height: 938 },
    { src: "/projects/smartpfe-6.png", alt: "Targeted refinement in the report editor", caption: "Selected passages can be refined without rewriting the whole chapter.", width: 1868, height: 929 },
    { src: "/projects/smartpfe-7.png", alt: "Jury simulation preparation screen", caption: "Presentation and pitch work lead into a defense rehearsal.", width: 1857, height: 928 },
    { src: "/projects/smartpfe-8.png", alt: "Live defense rehearsal with slides and speech script", caption: "The rehearsal pairs live slides with a speech reference.", width: 1846, height: 925 },
    { src: "/projects/smartpfe-10.png", alt: "Jury follow-up question session", caption: "A jury Q&A session helps students practice follow-up answers.", width: 1862, height: 927 },
  ],
  repositories: [
    { title: "SmartPfe-Front", url: "https://github.com/SmartPfe/SmartPfe-Front", detail: "React and TypeScript client for the SmartPFE platform." },
    { title: "SmartPfe-Backend", url: "https://github.com/SmartPfe/SmartPfe-Backend", detail: "Express and MongoDB API with Gemini-powered assistance." },
    { title: "RAG ingestion pipeline", url: "https://github.com/SmartPfe/rag-ingestion", detail: "Python pipeline for report parsing, multilingual embeddings, and MongoDB storage." },
  ],
};

export const deepSkynDetail = {
  award: deepSkynAward,
  lead: "An AI-assisted skincare platform that connects photo-based skin analysis, personalized routines, and product discovery.",
  intro: "DeepSkyn gives people one place to understand their skin profile, review analysis reports, and build a routine they can keep using. The team built it under contract, so the source and live application are private.",
  journey: [
    "Upload skin photos and receive an analysis report that can be revisited through scan history.",
    "Turn the findings and skin profile into a skincare routine, then track habits and refine the plan over time.",
    "Explore relevant products and ingredients through the catalog and a personal virtual shelf.",
  ],
  searchIntro: "We imported a dataset of about 19,000 skincare products into PostgreSQL so the routine builder could search by intent, not only by product name. A request such as “my skin is dry” can surface products associated with hydration even when the user does not know a specific brand or ingredient.",
  searchSteps: [
    { title: "Prepare the catalog", detail: "The ingestion job builds a text representation from each product’s name, category, description, and ingredients, then generates an embedding with all-MiniLM-L6-v2." },
    { title: "Store vectors with products", detail: "Embeddings live beside product records in PostgreSQL through pgvector, keeping the searchable catalog connected to the application database." },
    { title: "Search by meaning", detail: "The API embeds the user’s query with the same model and orders products by vector distance. The routine builder can show the closest matches alongside ordinary catalog and ingredient search." },
  ],
  modelIntro: "The analysis work combined Gemini-powered photo analysis with separately evaluated machine-learning and vision models. The benchmarks helped us choose models for distinct tasks rather than treating one model as the whole product.",
  modelWork: [
    "A comparison of five supervised models on 10,000 records selected Random Forest, with about 81% accuracy, 0.73 macro-F1, and 0.91 macro-AUC.",
    "A MobileNetV2 transfer-learning model trained on 14,839 skin images reached 90.4% validation accuracy across four skin-type classes.",
  ],
  architecture: "The React client talks to a NestJS API backed by PostgreSQL and Prisma. Docker images are built and delivered through four connected Jenkins pipelines for backend and frontend CI/CD. SonarQube quality gates, Kubernetes deployments, Argo CD synchronization, and Prometheus/Grafana monitoring support the release path.",
  architectureImage: {
    src: "/projects/deepskyn-architecture.jpg",
    alt: "DeepSkyn architecture showing React and NestJS, PostgreSQL, Jenkins pipelines, Docker images, Kubernetes, Argo CD, and monitoring",
    width: 1280,
    height: 853,
  },
  demo: {
    ...deepSkynDemo,
  },
};

export const annonceTnDetail = {
  lead: "A three-tier marketplace with personalized item discovery, built during my QantumShift internship.",
  intro: "I developed AnnonceTN during a two-month internship at QantumShift in July and August 2025. The platform brings together an Angular marketplace, a Spring Boot REST API backed by MongoDB, and a Python recommendation engine.",
  journey: [
    "Browse classified listings by category, search and filter results, and open detailed listing pages.",
    "Publish listings, manage favorites, and record user interactions through authenticated API routes.",
    "Use browsing and favorite activity to make recommendations more relevant to each user.",
  ],
  architecture: [
    { title: "Angular marketplace", detail: "The Angular 20 and TypeScript frontend provides category discovery, listing search and filters, detail pages, favorites, and a form for publishing listings." },
    { title: "Spring Boot API", detail: "Spring Boot REST endpoints handle listings, accounts, categories, favorites, and view tracking. JWT authentication protects user-specific operations." },
    { title: "MongoDB data layer", detail: "The backend stores marketplace and interaction data in MongoDB, which the recommendation service reads for model input." },
    { title: "Python recommender", detail: "A Python service uses scikit-learn, NMF, and cosine similarity to produce personalized suggestions from user activity." },
  ],
  recommendationIntro: "The recommender treats user activity as implicit feedback: favorited listings receive a stronger signal than viewed listings. NMF finds preference patterns across the user-item matrix, while cosine similarity helps surface related users or items. A cold-start fallback handles users without enough interaction history.",
  recommendationSteps: [
    { title: "Collect interactions", detail: "The system uses listing views and favorites as recommendation signals." },
    { title: "Weight feedback", detail: "Favorites are assigned a weight of 5 and views a weight of 2; repeated interactions retain the stronger signal." },
    { title: "Find relevant items", detail: "NMF extracts latent preference patterns, and cosine similarity supports personalized and similar-item recommendations." },
    { title: "Handle new users", detail: "A cold-start fallback provides a path for users whose interaction history is not yet sufficient." },
  ],
  gallery: [
    { src: "/projects/annoncetn-landing.png", alt: "AnnonceTN category landing page", caption: "The landing page opens with the marketplace's main categories.", width: 1847, height: 876 },
    { src: "/projects/annoncetn-listings.png", alt: "AnnonceTN listing browser with search filters", caption: "Search and filters narrow the listing cards by user needs.", width: 1830, height: 879 },
    { src: "/projects/annoncetn-detail.png", alt: "AnnonceTN listing detail and seller information", caption: "A listing detail page brings item information and seller details together.", width: 1820, height: 879 },
    { src: "/projects/annoncetn-post-form.png", alt: "AnnonceTN listing publication form", caption: "Sellers can enter item details, price, location, and a primary image.", width: 1795, height: 880 },
  ],
  repositories: [
    { title: "Full-stack project overview", url: "https://github.com/MayssenJemmali/annonceTn-fullstack", detail: "Architecture notes and application screenshots." },
    { title: "Angular frontend", url: "https://github.com/MayssenJemmali/annonceTn-frontend", detail: "Angular 20 marketplace interface." },
    { title: "Spring Boot backend", url: "https://github.com/MayssenJemmali/annonceTn-backend", detail: "REST API, JWT authentication, and marketplace services." },
    { title: "Recommendation engine", url: "https://github.com/MayssenJemmali/annonceTn-recommender", detail: "Python notebook for interaction-based recommendations." },
  ],
};

export const gazelleProDetail = {
  lead: "A B2B portal built during my Tunisair internship to support travel-agency partners.",
  intro: "GazellePro centralizes key workflows for Tunisair’s travel agency partners, combining flight data with account and service management.",
  journey: [
    { title: "Contracts and claims", detail: "Manage agency contracts and submit or follow claims through the portal." },
    { title: "Financial and credit workflows", detail: "Review financial reports and credit workflows in one partner workspace." },
    { title: "Flight search and booking", detail: "Use Amadeus flight data to support flight search and booking workflows." },
  ],
  architecture: [
    { title: "Web application", detail: "The portal was built with Symfony and PHP." },
    { title: "Data layer", detail: "SQL Server supports the portal’s business data." },
    { title: "Access and accountability", detail: "JWT authentication, role-based access control, and audit logging secure and record user activity." },
    { title: "Amadeus API integration", detail: "The Amadeus API supports the portal’s search and booking flow." },
  ],
  demo: {
    ...gazelleProDemo,
  },
};

export const experiences: Experience[] = [
  {
    role: "AI & Software Engineering Intern",
    organization: "BeeCoders",
    organizationUrl: "https://www.beecoders.tn",
    period: "Jun - Aug 2026",
    location: "Tunis, Tunisia",
    logo: { src: "/logos/beecoders.png", alt: "BeeCoders logo", width: 165, height: 151 },
    highlights: [
      "Built SmartPFE with React, Express, and MongoDB to guide students from requirements and UML through thesis writing and defense preparation.",
      "Engineered a Corrective RAG pipeline over 3,092 thesis sections from 31 reports, with hybrid retrieval, relevance grading, and query rewriting.",
      "Integrated Gemini for report generation and jury simulations in French and English, with model fallback when requests fail.",
      "Evaluated retrieval with RAGAS, traced AI workflows with Langfuse, and implemented a transactional AI credit system.",
    ],
    technologies: smartPfeStack,
    project: { label: "Explore SmartPFE", href: "/projects/smartpfe" },
  },
  {
    role: "ML & Software Engineering Intern",
    organization: "QantumShift",
    organizationUrl: "https://www.linkedin.com/company/qantumshift/",
    period: "Jul - Aug 2025",
    location: "Tunis, Tunisia",
    logo: { src: "/logos/qantumshift.png", alt: "QantumShift logo", width: 200, height: 200 },
    highlights: [
      "Built the Angular interface for publishing, browsing, and managing AnnonceTN marketplace listings.",
      "Developed Spring Boot REST APIs with JWT authentication and MongoDB collections for listings, favorites, and activity.",
      "Created a Python recommendation engine using user interactions, NMF, and cosine similarity, with a cold-start fallback.",
      "Connected personalized suggestions to the marketplace and tested API endpoints with Postman.",
    ],
    technologies: annonceTnStack,
    project: { label: "Explore AnnonceTN", href: "/projects/annoncetn" },
  },
  {
    role: "Full-Stack Intern",
    organization: "Tunisair",
    organizationUrl: "https://www.tunisair.com/en",
    period: "Jan - Jun 2024",
    location: "Tunis, Tunisia",
    logo: { src: "/logos/tunisair.png", alt: "Tunisair logo", width: 320, height: 320 },
    highlights: [
      "Built GazellePro, a B2B travel-agency platform for flight search and reservation workflows.",
      "Integrated Amadeus flight data and a real-time airport suggestion API.",
      "Designed interactive dashboards and the relational schema in SQL Server.",
      "Implemented JWT authentication and role-based access control with Symfony and PHP.",
    ],
    technologies: gazelleProStack,
    project: { label: "Explore GazellePro", href: "/projects/gazellepro" },
  },
  {
    role: "Full-Stack Developer Intern",
    organization: "Tunisair",
    organizationUrl: "https://www.tunisair.com/en",
    period: "Jul - Aug 2023",
    location: "Tunis, Tunisia",
    logo: { src: "/logos/tunisair.png", alt: "Tunisair logo", width: 320, height: 320 },
    highlights: [
      "Developed a retiree portal for flight offers, reservation requests, and medical contribution workflows.",
      "Built authentication and session management for retiree accounts.",
      "Designed the MySQL schema and prepared the architecture for online payment integration.",
      "Prototyped the interface in Figma and built the responsive PHP and Bootstrap demo.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    project: { label: "View retiree portal repo", href: "https://github.com/MayssenJemmali/tunisair-retirement-portal", external: true },
  },
];

export type CommunityRole = {
  organization: string;
  role: string;
  period: string;
  location: string;
  url: string;
  logo: { src: string; alt: string; width: number; height: number };
  highlights: Array<string | { before: string; linkText: string; url: string; after: string }>;
};

export const communityRoles: CommunityRole[] = [
  {
    organization: "Enactus ESPRIT",
    role: "Project Member, Project Department",
    period: "2025 – 2026",
    location: "Tunis, Tunisia",
    url: "https://www.instagram.com/enactors.esb/",
    logo: { src: "/logos/enactus-esprit.png", alt: "Enactus ESB logo", width: 1080, height: 1080 },
    highlights: [
      "Core member of BlightX, an initiative helping Tunisian pear farmers combat destructive bacterial disease.",
      {
        before: "Ranked among the ",
        linkText: "top 10 teams nationally",
        url: "https://lnkd.in/p/eA5GYGsR",
        after: ", advancing to the 2026 Enactus Tunisia National Exposition's Advanced Stage.",
      },
      "Conducted field testing and farmer outreach in agricultural communities.",
    ],
  },
  {
    organization: "Rotaract Manar Evo",
    role: "Community Service Volunteer",
    period: "2025 – 2026",
    location: "Tunis, Tunisia",
    url: "https://www.instagram.com/rotaract_manar_evo/",
    logo: { src: "/logos/rotaract-manar-evo.png", alt: "Rotaract Manar Evo logo", width: 824, height: 824 },
    highlights: [
      "Co-organized a Ramadan Iftar initiative providing meals and support to families in need.",
      "Helped coordinate food and clothing collections and logistics for nationwide solidarity drives.",
    ],
  },
  {
    organization: "FUTURA ESPRIT",
    role: "Marketing & Event Organizing Team",
    period: "2022 – 2024",
    location: "Tunis, Tunisia",
    url: "https://www.instagram.com/futuraesprit/",
    logo: { src: "/logos/futura-esprit.png", alt: "FUTURA ESPRIT logo", width: 566, height: 566 },
    highlights: [
      "Co-organized entrepreneurship workshops and student tech events on campus.",
      "Created multimedia promotional materials, managed video communication, and supported ESPRIT's 20th anniversary events.",
    ],
  },
];

const frenchAward: ProjectAward = {
  ...deepSkynAward,
  label: "1er prix · Bal des Projets '26",
  badge: "1er prix",
  category: "Projet JavaScript full stack",
  summary: "DeepSkyn a remporté le Premier Prix dans la catégorie JavaScript full stack lors du 13e Bal des Projets d’ESPRIT en 2026.",
  detail: "Réalisé par l’équipe SuperNova, DeepSkyn a remporté le Premier Prix dans la catégorie Projet JavaScript full stack au 13e Bal des Projets d’ESPRIT, le 9 juin 2026.",
  certificate: {
    ...deepSkynAward.certificate,
    alt: "Certificat du Bal des Projets 2026 d’ESPRIT décernant le Premier Prix à l’équipe SuperNova dans la catégorie projet JavaScript full stack",
  },
};

/** French reader-facing copy; factual links, dates, images, and technology names remain shared. */
export const portfolioFr = {
  profile: {
    ...profile,
    role: "Étudiant en génie logiciel",
    statement: "Je conçois des logiciels fiables et des systèmes intégrant l’IA, du développement d’applications à l’architecture logicielle, jusqu’à la mise en production de fonctionnalités intelligentes.",
    availability: "À la recherche d’un stage de fin d’études de 6 mois · Disponible dès janvier 2027",
    resumeUrl: "/resume-fr.pdf",
    portrait: { ...profile.portrait, alt: "Portrait de Jemmali Mohamed Mayssen" },
  },
  projects: projects.map((project) => {
    const localized: Record<string, Partial<Project>> = {
      smartpfe: {
        description: "SmartPFE accompagne les étudiants tout au long de leur projet de fin d’études, de la définition des besoins à la rédaction du mémoire. Une assistance propulsée par Gemini et un jury simulé les aident à préparer leur soutenance.",
        image: { ...project.image, alt: "Espace étudiant SmartPFE présentant l’avancement du mémoire et les étapes guidées du projet" },
        gallery: project.gallery?.map((image, index) => ({
          ...image,
          alt: ["Éditeur de problématique assisté par l’IA", "Espace de modélisation UML", "Éditeur de structure du mémoire", "Espace de rédaction du mémoire", "Préparation à la simulation du jury"][index] ?? image.alt,
        })),
      },
      deepskyn: {
        award: frenchAward,
        description: "DeepSkyn analyse des photos de peau pour créer des bilans personnalisés et des routines de soin. La plateforme réunit conseils par IA, découverte de produits et suivi des progrès au sein d’un processus de déploiement automatisé.",
        image: { ...project.image, alt: "Architecture de DeepSkyn : application React et NestJS, PostgreSQL, Kubernetes, CI/CD, GitOps et supervision" },
        video: project.video ? { ...project.video, title: "Présentation de l’application DeepSkyn" } : undefined,
        liveLabel: "Démo vidéo",
      },
      annoncetn: {
        description: "Une marketplace à trois niveaux développée pendant mon stage chez QantumShift, avec des recommandations personnalisées basées sur l’activité des utilisateurs.",
        technologies: project.technologies.map((name) => name === "Machine Learning" ? "Apprentissage automatique" : name),
        image: { ...project.image, alt: "Page d’accueil par catégories d’AnnonceTN : automobile, immobilier, mobilier, animaux et multimédia" },
        gallery: project.gallery?.map((image, index) => ({
          ...image,
          alt: ["Liste des annonces avec filtres et cartes de résultats", "Détail d’une annonce avec les informations du vendeur et des conseils de sécurité", "Formulaire de publication avec prix, catégorie, ville et photos"][index] ?? image.alt,
        })),
      },
      gazellepro: {
        description: "Un portail B2B pour les agences de voyages, développé chez Tunisair avec les données de vol Amadeus et les outils nécessaires aux partenaires.",
        image: { ...project.image, alt: "Aperçu vidéo de GazellePro pour Tunisair" },
        video: project.video ? { ...project.video, title: "Démo de l’application GazellePro pour Tunisair" } : undefined,
        liveLabel: "Démo vidéo",
      },
    };
    return { ...project, ...localized[project.id] };
  }),
  smartPfeDetail: {
    ...smartPfeDetail,
    lead: "Un espace de travail assisté par l’IA qui accompagne les étudiants en ingénierie de leur idée de projet à la rédaction du mémoire et à la préparation de la soutenance.",
    intro: "Un projet de fin d’études ne se résume pas à un mémoire. Il faut définir un problème, organiser le travail, concevoir un système, le documenter et le présenter à un jury. SmartPFE réunit ces étapes dans un espace guidé où chaque tâche s’appuie sur le travail déjà réalisé.",
    journey: [
      "Partir d’un brief, puis préciser la problématique, les parties prenantes, les besoins, le backlog et les diagrammes UML.",
      "Structurer le mémoire et rédiger les chapitres avec l’aide de l’IA, tout en gardant la maîtrise du texte grâce à l’édition manuelle et aux retouches ciblées.",
      "Préparer la présentation et le pitch, puis s’entraîner avec un jury simulé qui analyse la soutenance orale et pose des questions complémentaires.",
    ],
    architecture: "Le client React échange avec une API Express qui gère les données de projet dans MongoDB et coordonne l’assistance Gemini. Un pipeline Python distinct extrait la structure et le texte de mémoires de référence, crée des représentations vectorielles multilingues et stocke des passages consultables. La couche de recherche peut réévaluer les correspondances faibles avant de fournir du contexte à la génération du rapport.",
    cragIntro: "Une recherche vectorielle classique peut renvoyer les passages les plus proches même s’ils correspondent peu au sujet de l’étudiant. Pour structurer le mémoire et rédiger ses chapitres, nous avons ajouté une étape de recherche corrective qui tient compte du projet et de la section en cours.",
    cragSteps: [
      { title: "Préparer les références", detail: "Un traitement Python extrait le texte et les tables des matières de 31 mémoires de PFE, les découpe en passages par section et stocke 3 092 extraits avec des vecteurs multilingues de 384 dimensions dans MongoDB." },
      { title: "Rechercher pour ce projet", detail: "Le backend construit une requête à partir du titre, du domaine, des besoins, des technologies utilisées et de la section visée, puis recherche dans les extraits indexés avec MongoDB Atlas Vector Search." },
      { title: "Évaluer et corriger", detail: "Un évaluateur mesure la pertinence du contexte récupéré. Si le score est inférieur à 0,65, le service reformule la requête et effectue une nouvelle recherche ciblée. Des solutions de repli par structure ou mots-clés maintiennent la génération disponible en cas d’échec de la recherche vectorielle." },
      { title: "Générer avec le contexte", detail: "Les références retenues sont synthétisées dans la consigne envoyée à l’IA avec les données du projet. Les étudiants peuvent relire, modifier et améliorer le plan ou le chapitre proposé." },
    ],
    cragEvaluation: "Sur un test bilingue du générateur de mémoire couvrant 10 sections, l’étape corrective s’est déclenchée dans 5 cas. RAGAS a mesuré une précision contextuelle de 0,800 ; le rappel contextuel (0,200) et la fidélité stricte (0,368) ont révélé des lacunes d’ancrage à corriger. Nous avons étudié les traces Langfuse pour repérer les échecs de recherche ou de génération.",
    architectureImage: { ...smartPfeDetail.architectureImage, alt: "Architecture animée de SmartPFE : client React, API Express, Gemini, recherche vectorielle MongoDB, recherche corrective et pipeline Python" },
    gallery: smartPfeDetail.gallery.map((image, index) => ({
      ...image,
      alt: ["Vue d’ensemble du projet SmartPFE et parcours guidé", "Éditeur de problématique assisté par l’IA", "Espace de préparation UML", "Éditeur de structure du mémoire", "Rédaction du mémoire universitaire", "Retouche ciblée dans l’éditeur de rapport", "Préparation de la simulation du jury", "Répétition orale avec diapositives et script", "Session de questions complémentaires du jury"][index],
      caption: ["Le parcours du projet reste visible dans un espace unique.", "La problématique peut être rédigée, améliorée et modifiée.", "La préparation de l’architecture et des diagrammes UML reste liée au projet.", "Les étudiants organisent un plan modifiable avant la rédaction.", "Le mémoire se rédige chapitre par chapitre.", "Des passages sélectionnés peuvent être améliorés sans réécrire tout le chapitre.", "La présentation et le pitch ouvrent la voie à une répétition de soutenance.", "La répétition associe les diapositives au texte de référence.", "Les questions du jury aident à préparer les réponses complémentaires."][index],
    })),
    repositories: [
      { title: "SmartPfe-Front", url: "https://github.com/SmartPfe/SmartPfe-Front", detail: "Client React et TypeScript de la plateforme SmartPFE." },
      { title: "SmartPfe-Backend", url: "https://github.com/SmartPfe/SmartPfe-Backend", detail: "API Express et MongoDB avec assistance Gemini." },
      { title: "Pipeline d’ingestion RAG", url: "https://github.com/SmartPfe/rag-ingestion", detail: "Pipeline Python pour analyser les mémoires, créer des vecteurs multilingues et les stocker dans MongoDB." },
    ],
  },
  deepSkynDetail: {
    ...deepSkynDetail,
    award: frenchAward,
    lead: "Une plateforme de soin de la peau qui associe analyse photo, routines personnalisées et découverte de produits grâce à l’IA.",
    intro: "DeepSkyn réunit au même endroit le profil de peau, les bilans d’analyse et la création d’une routine à suivre. Le projet a été réalisé sous contrat ; son code source et son application restent privés.",
    journey: [
      "Importer des photos de peau et consulter un bilan d’analyse conservé dans l’historique des scans.",
      "Créer une routine à partir du profil et des résultats, suivre ses habitudes et ajuster le programme au fil du temps.",
      "Découvrir des produits et des ingrédients adaptés dans le catalogue et sur une étagère virtuelle personnelle.",
    ],
    searchIntro: "Nous avons importé environ 19 000 produits de soin dans PostgreSQL afin que la routine puisse les rechercher selon le besoin, et pas seulement par nom. Une demande comme « j’ai la peau sèche » peut faire ressortir des produits hydratants même sans connaître une marque ou un ingrédient précis.",
    searchSteps: [
      { title: "Préparer le catalogue", detail: "Le traitement d’ingestion rassemble le nom, la catégorie, la description et les ingrédients de chaque produit, puis génère un vecteur avec all-MiniLM-L6-v2." },
      { title: "Associer les vecteurs aux produits", detail: "Les vecteurs sont stockés avec les produits dans PostgreSQL grâce à pgvector, en reliant le catalogue consultable à la base de l’application." },
      { title: "Rechercher par sens", detail: "L’API transforme la requête avec le même modèle et classe les produits selon la distance vectorielle. Le générateur de routine affiche les meilleures correspondances avec les recherches classiques par catalogue et ingrédient." },
    ],
    modelIntro: "L’analyse associe l’analyse photo par Gemini à des modèles d’apprentissage automatique et de vision évalués séparément. Les comparaisons ont permis de choisir des modèles adaptés à chaque tâche, plutôt que de tout confier à un seul modèle.",
    modelWork: [
      "Une comparaison de cinq modèles supervisés sur 10 000 enregistrements a retenu Random Forest : environ 81 % de précision, 0,73 de macro-F1 et 0,91 de macro-AUC.",
      "Un modèle MobileNetV2 entraîné sur 14 839 images de peau a atteint 90,4 % de précision en validation pour quatre catégories de types de peau.",
    ],
    architecture: "Le client React communique avec une API NestJS adossée à PostgreSQL et Prisma. Quatre pipelines Jenkins coordonnent la construction et la livraison des images Docker du backend et du frontend. Les contrôles de qualité SonarQube, les déploiements Kubernetes, la synchronisation Argo CD et la supervision Prometheus/Grafana accompagnent les mises en production.",
    architectureImage: { ...deepSkynDetail.architectureImage, alt: "Architecture de DeepSkyn : React et NestJS, PostgreSQL, pipelines Jenkins, images Docker, Kubernetes, Argo CD et supervision" },
    demo: { ...deepSkynDetail.demo, title: "Présentation de l’application DeepSkyn" },
  },
  annonceTnDetail: {
    ...annonceTnDetail,
    lead: "Une marketplace à trois niveaux avec découverte personnalisée d’annonces, développée lors de mon stage chez QantumShift.",
    intro: "J’ai développé AnnonceTN pendant un stage de deux mois chez QantumShift, en juillet et août 2025. La plateforme associe une marketplace Angular, une API REST Spring Boot adossée à MongoDB et un moteur de recommandation Python.",
    journey: [
      "Parcourir les annonces par catégorie, rechercher et filtrer les résultats, puis consulter chaque fiche détaillée.",
      "Publier des annonces, gérer ses favoris et enregistrer les interactions via des routes API authentifiées.",
      "Exploiter les recherches et les favoris pour rendre les recommandations plus pertinentes.",
    ],
    architecture: [
      { title: "Marketplace Angular", detail: "Le frontend Angular 20 et TypeScript gère la découverte par catégorie, la recherche et les filtres, les fiches, les favoris et le formulaire de publication." },
      { title: "API Spring Boot", detail: "Les routes REST gèrent les annonces, les comptes, les catégories, les favoris et le suivi des consultations. L’authentification JWT protège les opérations liées aux utilisateurs." },
      { title: "Données MongoDB", detail: "Le backend stocke les annonces et les interactions dans MongoDB ; le service de recommandation les exploite comme données d’entrée." },
      { title: "Moteur Python", detail: "Un service Python utilise scikit-learn, NMF et la similarité cosinus pour proposer des annonces à partir de l’activité des utilisateurs." },
    ],
    recommendationIntro: "Le moteur traite l’activité comme un retour implicite : une annonce ajoutée aux favoris pèse davantage qu’une simple consultation. NMF repère les préférences dans la matrice utilisateurs-annonces ; la similarité cosinus rapproche les profils ou les annonces. Un mécanisme de démarrage à froid prend le relais quand l’historique est insuffisant.",
    recommendationSteps: [
      { title: "Collecter les interactions", detail: "Les consultations d’annonces et les favoris servent de signaux pour les recommandations." },
      { title: "Pondérer les retours", detail: "Les favoris reçoivent un poids de 5 et les consultations un poids de 2 ; les interactions répétées conservent le signal le plus fort." },
      { title: "Repérer les annonces pertinentes", detail: "NMF extrait les préférences latentes et la similarité cosinus permet des recommandations personnalisées ou des annonces similaires." },
      { title: "Accompagner les nouveaux utilisateurs", detail: "Le mécanisme de démarrage à froid propose une solution aux utilisateurs dont l’historique est encore insuffisant." },
    ],
    gallery: annonceTnDetail.gallery.map((image, index) => ({
      ...image,
      alt: ["Page d’accueil des catégories AnnonceTN", "Liste des annonces avec filtres de recherche", "Détail d’une annonce et informations du vendeur", "Formulaire de publication d’une annonce"][index],
      caption: ["La page d’accueil présente les principales catégories de la marketplace.", "Les filtres affinent les annonces selon les besoins.", "La fiche réunit les informations sur l’article et le vendeur.", "Les vendeurs renseignent l’article, son prix, sa localisation et une photo principale."][index],
    })),
    repositories: [
      { title: "Présentation du projet full stack", url: "https://github.com/MayssenJemmali/annonceTn-fullstack", detail: "Notes d’architecture et captures de l’application." },
      { title: "Frontend Angular", url: "https://github.com/MayssenJemmali/annonceTn-frontend", detail: "Interface marketplace développée avec Angular 20." },
      { title: "Backend Spring Boot", url: "https://github.com/MayssenJemmali/annonceTn-backend", detail: "API REST, authentification JWT et services marketplace." },
      { title: "Moteur de recommandation", url: "https://github.com/MayssenJemmali/annonceTn-recommender", detail: "Notebook Python pour les recommandations basées sur les interactions." },
    ],
  },
  gazelleProDetail: {
    ...gazelleProDetail,
    lead: "Un portail B2B développé durant mon stage chez Tunisair pour accompagner les agences de voyages partenaires.",
    intro: "GazellePro centralise les principaux parcours des agences partenaires de Tunisair, en réunissant les données de vol et la gestion des comptes et des services.",
    journey: [
      { title: "Contrats et réclamations", detail: "Gérer les contrats des agences et déposer ou suivre des réclamations depuis le portail." },
      { title: "Finance et crédit", detail: "Consulter les rapports financiers et les opérations de crédit dans un espace partenaire unique." },
      { title: "Recherche et réservation de vols", detail: "Exploiter les données de vol Amadeus pour les parcours de recherche et de réservation." },
    ],
    architecture: [
      { title: "Application web", detail: "Le portail a été développé avec Symfony et PHP." },
      { title: "Données", detail: "SQL Server gère les données métier du portail." },
      { title: "Accès et traçabilité", detail: "L’authentification JWT, le contrôle d’accès par rôle et les journaux d’audit sécurisent et retracent l’activité des utilisateurs." },
      { title: "Intégration de l’API Amadeus", detail: "L’API Amadeus alimente la recherche et le parcours de réservation." },
    ],
    demo: { ...gazelleProDetail.demo, title: "Démo de l’application GazellePro pour Tunisair" },
  },
  experiences: experiences.map((experience, index) => {
    const localized = [
      {
        role: "Stagiaire en génie logiciel et IA",
        period: "Juin – août 2026",
        location: "Tunis, Tunisie",
        highlights: [
          "Développé SmartPFE avec React, Express et MongoDB pour accompagner les étudiants des besoins et diagrammes UML jusqu’à la rédaction du mémoire et la préparation de la soutenance.",
          "Conçu un pipeline RAG correctif sur 3 092 sections issues de 31 mémoires, avec recherche hybride, évaluation de la pertinence et reformulation des requêtes.",
          "Intégré Gemini pour la génération de rapports et les simulations de jury en français et en anglais, avec un modèle de secours en cas d’échec.",
          "Évalué la recherche avec RAGAS, suivi les flux de travail IA avec Langfuse et mis en place un système transactionnel de crédits IA.",
        ],
        project: { label: "Découvrir SmartPFE", href: "/projects/smartpfe" },
        logo: { ...experience.logo, alt: "Logo BeeCoders" },
      },
      {
        role: "Stagiaire en ML et génie logiciel",
        period: "Juillet – août 2025",
        location: "Tunis, Tunisie",
        highlights: [
          "Développé l’interface Angular pour publier, parcourir et gérer les annonces de la marketplace AnnonceTN.",
          "Créé des API REST Spring Boot avec authentification JWT et collections MongoDB pour les annonces, favoris et activités.",
          "Conçu un moteur de recommandation Python à partir des interactions, avec NMF, similarité cosinus et prise en charge du démarrage à froid.",
          "Intégré les recommandations personnalisées à la marketplace et testé les routes API avec Postman.",
        ],
        technologies: annonceTnStack.map((name) => name === "Machine Learning" ? "Apprentissage automatique" : name),
        project: { label: "Découvrir AnnonceTN", href: "/projects/annoncetn" },
        logo: { ...experience.logo, alt: "Logo QantumShift" },
      },
      {
        role: "Stagiaire full stack",
        period: "Janvier – juin 2024",
        location: "Tunis, Tunisie",
        highlights: [
          "Développé GazellePro, une plateforme B2B pour les agences de voyages, dédiée à la recherche de vols et aux réservations.",
          "Intégré les données de vol Amadeus et une API de suggestion d’aéroports en temps réel.",
          "Conçu des tableaux de bord interactifs et le schéma relationnel dans SQL Server.",
          "Mis en place l’authentification JWT et le contrôle d’accès par rôle avec Symfony et PHP.",
        ],
        project: { label: "Découvrir GazellePro", href: "/projects/gazellepro" },
        logo: { ...experience.logo, alt: "Logo Tunisair" },
      },
      {
        role: "Stagiaire développeur full stack",
        period: "Juillet – août 2023",
        location: "Tunis, Tunisie",
        highlights: [
          "Développé un portail pour les retraités : offres de vol, demandes de réservation et suivi des cotisations médicales.",
          "Mis en place l’authentification et la gestion des sessions des comptes retraités.",
          "Conçu le schéma MySQL et préparé l’architecture pour l’intégration du paiement en ligne.",
          "Prototypé l’interface dans Figma et développé une démo responsive en PHP et Bootstrap.",
        ],
        project: { label: "Voir le dépôt du portail retraités", href: "https://github.com/MayssenJemmali/tunisair-retirement-portal", external: true },
        logo: { ...experience.logo, alt: "Logo Tunisair" },
      },
    ][index];
    return { ...experience, ...localized };
  }),
  communityRoles: communityRoles.map((role, index) => {
    const localized = [
      {
        role: "Membre du pôle projets",
        location: "Tunis, Tunisie",
        logo: { ...role.logo, alt: "Logo Enactus ESB" },
        highlights: [
          "Membre de BlightX, une initiative qui aide les producteurs de poires tunisiens à lutter contre une maladie bactérienne destructrice.",
          { before: "Classée parmi les ", linkText: "10 meilleures équipes du pays", url: "https://lnkd.in/p/eA5GYGsR", after: ", l’équipe a accédé à l’étape avancée de l’Exposition nationale Enactus Tunisie 2026." },
          "Mené des essais sur le terrain et échangé avec des agriculteurs dans des communautés rurales.",
        ],
      },
      {
        role: "Bénévole en action communautaire",
        location: "Tunis, Tunisie",
        logo: { ...role.logo, alt: "Logo Rotaract Manar Evo" },
        highlights: [
          "Coorganisé une initiative de ftour pendant le Ramadan, avec des repas et du soutien pour des familles dans le besoin.",
          "Contribué à organiser les collectes de nourriture et de vêtements ainsi que la logistique de campagnes nationales de solidarité.",
        ],
      },
      {
        role: "Équipe marketing et organisation d’événements",
        location: "Tunis, Tunisie",
        logo: { ...role.logo, alt: "Logo FUTURA ESPRIT" },
        highlights: [
          "Coorganisé des ateliers d’entrepreneuriat et des événements technologiques étudiants sur le campus.",
          "Créé des supports promotionnels multimédias, coordonné la communication vidéo et contribué aux événements du 20e anniversaire d’ESPRIT.",
        ],
      },
    ][index];
    return { ...role, ...localized };
  }),
};
