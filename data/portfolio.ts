export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  technologyIcons?: Record<string, string>;
  image: { src: string; alt: string; width?: number; height?: number; presentation?: "diagram" };
  gallery?: { src: string; alt: string; width?: number; height?: number }[];
  detailPath?: string;
  date: string;
  githubUrl?: string;
  sourceAvailability?: "closed";
  liveUrl?: string;
  liveLabel?: string;
  highlights: string[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  technologies: string[];
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
  linkedinUrl: "https://www.linkedin.com/in/mayssen-jemmali-a1509b283/",
  resumeUrl: "/resume-en.pdf",
};

export const projects: Project[] = [
  {
    id: "smartpfe",
    title: "SmartPFE",
    description:
      "SmartPFE guides students through their final-year project, from defining requirements to writing the thesis report. Gemini-powered assistance and a simulated jury help them prepare for the defense.",
    technologies: ["React", "Express", "MongoDB", "Python", "Gemini API", "RAG"],
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
    liveUrl: "https://youtu.be/Cx03Uz-qliY",
    liveLabel: "Video demo",
    detailPath: "/projects/deepskyn",
    highlights: [],
  },
  {
    id: "delivery-pipeline",
    title: "Delivery Automation Pipeline",
    description:
      "A placeholder infrastructure project for repeatable builds, container delivery, and environment-aware deployment.",
    technologies: ["Docker", "CI/CD", "Linux", "Cloud"],
    image: {
      src: "/projects/devops-pipeline.webp",
      alt: "Abstract editorial diagram of containers moving through a deployment pipeline",
    },
    date: "20XX",
    highlights: [],
  },
  {
    id: "semantic-search",
    title: "Semantic Archive Search",
    description:
      "A placeholder search experience for navigating structured documents with semantic retrieval and focused filtering.",
    technologies: ["TypeScript", "Embeddings", "Vector Search", "REST API"],
    image: {
      src: "/projects/knowledge-search.webp",
      alt: "Abstract editorial illustration of a structured archive being searched",
    },
    date: "20XX",
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
};

export const deepSkynDetail = {
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
    title: "DeepSkyn application walkthrough",
    posterSrc: "/projects/deepskyn-demo-poster.jpg",
    videoSrc: "/deepskyn-demo.mp4",
    watchUrl: "https://youtu.be/Cx03Uz-qliY",
  },
};

export const experiences: Experience[] = [
  {
    role: "AI Engineering Internship",
    organization: "Organization Name",
    period: "20XX - 20XX",
    summary:
      "Replace with a concise account of the system, your ownership, and the technical problem you solved.",
    technologies: ["Python", "RAG", "APIs"],
  },
  {
    role: "Software Engineering Internship",
    organization: "Organization Name",
    period: "20XX - 20XX",
    summary:
      "Replace with the backend, product, or infrastructure work that best supports your target roles.",
    technologies: ["Backend", "Databases", "Testing"],
  },
  {
    role: "Engineering Project",
    organization: "University / Team",
    period: "20XX",
    summary:
      "Replace with a collaborative project that demonstrates architecture, delivery, or technical leadership.",
    technologies: ["Architecture", "DevOps", "Collaboration"],
  },
];

export const skillGroups = [
  { title: "AI / ML", skills: ["Python", "RAG", "Embeddings", "Evaluation"] },
  { title: "Backend", skills: ["REST APIs", "Java", "Node.js", "Databases"] },
  { title: "Architecture", skills: ["System Design", "Data Modeling", "Messaging", "Testing"] },
  { title: "DevOps", skills: ["Docker", "CI/CD", "Linux", "Cloud"] },
];
