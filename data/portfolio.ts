export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: { src: string; alt: string };
  date: string;
  githubUrl?: string;
  liveUrl?: string;
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
    id: "retrieval-engine",
    title: "Knowledge Retrieval Engine",
    description:
      "A placeholder case study for a retrieval system that indexes domain knowledge and returns grounded answers.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    image: {
      src: "/projects/ai-retrieval.webp",
      alt: "Abstract editorial diagram of documents flowing through an AI retrieval system",
    },
    date: "20XX",
    highlights: [],
  },
  {
    id: "service-platform",
    title: "Distributed Service Platform",
    description:
      "A placeholder backend platform organized around services, queues, resilient data flows, and observable operations.",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    image: {
      src: "/projects/backend-systems.webp",
      alt: "Abstract editorial diagram of services, queues, and databases",
    },
    date: "20XX",
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
