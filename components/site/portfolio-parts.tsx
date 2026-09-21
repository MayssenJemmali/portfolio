import { ArrowUpRight, ExternalLink } from "lucide-react";
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
      <Button
        asChild
        size="lg"
        variant="outline"
        className="neo-button profile-icon-button"
      >
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile, opens in a new tab"
          title="GitHub"
        >
          <TechnologyIcon name="GitHub" />
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="neo-button profile-icon-button"
      >
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile, opens in a new tab"
          title="LinkedIn"
        >
          <TechnologyIcon name="LinkedIn" />
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="neo-button resume-action-button"
      >
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          <span>Resume</span>
          <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const hasValidHighlight =
    project.highlights &&
    project.highlights.length > 0 &&
    !project.highlights[0].startsWith("Replace with");

  return (
    <Card className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image.src}
          alt={project.image.alt}
          width="1536"
          height="864"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-card-body">
        <CardHeader className="p-0 mb-3">
          <CardTitle>
            <h3>{project.title}</h3>
          </CardTitle>
          <CardDescription className="mt-2 text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 mt-auto">
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <TechnologyTag key={technology} name={technology} />
            ))}
          </ul>
          {hasValidHighlight && (
            <p className="project-highlight">{project.highlights[0]}</p>
          )}
        </CardContent>
      </div>
      <CardFooter className="project-links">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository, opens in a new tab`}
          >
            <TechnologyIcon name="GitHub" />
            <span>GitHub</span>
          </a>
        ) : (
          <span aria-disabled="true" title="No repository URL provided yet">
            <TechnologyIcon name="GitHub" />
            <span>GitHub</span>
          </span>
        )}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo, opens in a new tab`}
          >
            <ExternalLink aria-hidden="true" />
            <span>Live demo</span>
          </a>
        ) : (
          <span aria-disabled="true" title="No demo URL provided yet">
            <ExternalLink aria-hidden="true" />
            <span>Live demo</span>
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
