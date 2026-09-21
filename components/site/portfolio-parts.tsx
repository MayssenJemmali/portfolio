import { ExternalLink, FileText } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Experience, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { TechnologyIcon } from "@/components/site/technology-icon";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <li className={cn("tag", className)}>{children}</li>;
}

export function TechnologyTag({ name }: { name: string }) {
  return (
    <Tag className="technology-tag">
      <TechnologyIcon name={name} />
      <span>{name}</span>
    </Tag>
  );
}

export function SectionHeading({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function ProfileActions({
  githubUrl,
  linkedinUrl,
  resumeUrl,
}: {
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}) {
  return (
    <div className="profile-actions" aria-label="Profile links">
      <Button asChild size="lg" className="neo-button">
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile, opens in a new tab">
          <TechnologyIcon name="GitHub" /> GitHub
        </a>
      </Button>
      <Button asChild size="lg" variant="secondary" className="neo-button">
        <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile, opens in a new tab">
          <TechnologyIcon name="LinkedIn" /> LinkedIn
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="neo-button">
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          <FileText aria-hidden="true" /> Resume
        </a>
      </Button>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image.src}
          alt={project.image.alt}
          width="1536"
          height="1024"
          loading="lazy"
          decoding="async"
        />
        <span>{project.date}</span>
      </div>
      <CardHeader>
        <CardTitle><h3>{project.title}</h3></CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <TechnologyTag key={technology} name={technology} />)}
        </ul>
        <p className="project-highlight">{project.highlights[0]}</p>
      </CardContent>
      <CardFooter className="project-links">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository, opens in a new tab`}>
            <TechnologyIcon name="GitHub" /> GitHub
          </a>
        ) : (
          <span aria-disabled="true" title="Add a repository URL in data/portfolio.ts">
            <TechnologyIcon name="GitHub" /> GitHub
          </span>
        )}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo, opens in a new tab`}>
            <ExternalLink aria-hidden="true" /> Live demo
          </a>
        ) : (
          <span aria-disabled="true" title="Add a demo URL in data/portfolio.ts">
            <ExternalLink aria-hidden="true" /> Live demo
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article className="experience-item">
      <div>
        <p className="experience-period">{experience.period}</p>
        <h3>{experience.role}</h3>
        <p className="experience-organization">{experience.organization}</p>
      </div>
      <div className="experience-detail">
        <p>{experience.summary}</p>
        <ul className="tag-list" aria-label={`${experience.role} technologies`}>
          {experience.technologies.map((technology) => <TechnologyTag key={technology} name={technology} />)}
        </ul>
      </div>
    </article>
  );
}
