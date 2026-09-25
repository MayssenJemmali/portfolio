import { createElement } from "react";
import {
  Braces,
  BrainCircuit,
  Boxes,
  Cloud,
  CodeXml,
  Database,
  GitPullRequestArrow,
  Network,
  Search,
  TestTube2,
  Workflow,
} from "lucide-react";
const brandIcons: Record<string, string> = {
  Angular: "/icons/tech/angular-original.svg",
  React: "/icons/tech/react.svg",
  NestJS: "/icons/tech/nestjs-original.svg",
  Kubernetes: "/icons/tech/kubernetes-original.svg",
  Jenkins: "/icons/tech/jenkins-original.svg",
  Express: "/icons/tech/express.svg",
  MongoDB: "/icons/tech/mongodb.svg",
  "Gemini API": "/icons/tech/googlegemini.svg",
  Python: "/icons/tech/python-devicon.svg",
  FastAPI: "/icons/tech/fastapi.svg",
  PostgreSQL: "/icons/tech/postgresql.svg",
  Docker: "/icons/tech/docker.svg",
  Java: "/icons/tech/openjdk.svg",
  "Spring Boot": "/icons/tech/springboot.svg",
  Kafka: "/icons/tech/apachekafka.svg",
  "CI/CD": "/icons/tech/githubactions.svg",
  Linux: "/icons/tech/linux.svg",
  TypeScript: "/icons/tech/typescript-devicon.svg",
  "Node.js": "/icons/tech/nodedotjs.svg",
  Symfony: "/icons/tech/symfony-original.svg",
  PHP: "/icons/tech/php-original.svg",
  MySQL: "/icons/tech/mysql-original.svg",
  "SQL Server": "/icons/tech/microsoftsqlserver-original.svg",
  JavaScript: "/icons/tech/javascript-original.svg",
  Bootstrap: "/icons/tech/bootstrap-original.svg",
  "Amadeus API": "/icons/tech/amadeus-logo.svg",
  GitHub: "/icons/tech/github.svg",
  LinkedIn: "/icons/tech/linkedin.svg",
};

const conceptIcons = {
  AI: BrainCircuit,
  search: Search,
  data: Database,
  architecture: Boxes,
  workflow: Workflow,
  network: Network,
  testing: TestTube2,
  cloud: Cloud,
  delivery: GitPullRequestArrow,
  code: CodeXml,
  api: Braces,
};

function conceptFor(name: string) {
  const value = name.toLowerCase();
  if (value === "ai" || value.includes("machine learning") || value.includes("apprentissage automatique") || value.includes("recommend")) return conceptIcons.AI;
  if (value.includes("rag") || value.includes("embedding") || value.includes("evaluation")) return conceptIcons.AI;
  if (value.includes("search")) return conceptIcons.search;
  if (value.includes("database") || value.includes("data model")) return conceptIcons.data;
  if (value.includes("architect") || value.includes("system design")) return conceptIcons.architecture;
  if (value.includes("messag") || value.includes("collaboration")) return conceptIcons.network;
  if (value.includes("test")) return conceptIcons.testing;
  if (value.includes("cloud")) return conceptIcons.cloud;
  if (value.includes("devops") || value.includes("delivery")) return conceptIcons.delivery;
  if (value.includes("api") || value.includes("backend")) return conceptIcons.api;
  return conceptIcons.code;
}

export function TechnologyIcon({ name }: { name: string }) {
  if (name === "RAG") return null;
  const brand = brandIcons[name];

  if (brand) {
    return (
      <img
        className={`technology-icon${name === "Amadeus API" ? " technology-icon--wordmark" : ""}`}
        src={brand}
        alt=""
        width="18"
        height="18"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
    );
  }


  return createElement(conceptFor(name), { className: "technology-icon", "aria-hidden": true });
}
