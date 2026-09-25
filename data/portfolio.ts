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
