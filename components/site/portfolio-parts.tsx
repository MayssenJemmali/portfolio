import { ArrowUpRight, ExternalLink, LockKeyhole, MapPin, Trophy } from "lucide-react";
import Link from "next/link";
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
import { ProjectCover } from "@/components/site/project-cover";
import { ProjectVideoPreview } from "@/components/site/project-video-preview";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <li className={cn("tag", className)}>{children}</li>;
}

export function TechnologyTag({ name, iconName }: { name: string; iconName?: string }) {
  return (
    <Tag className="technology-tag">
      <TechnologyIcon name={iconName ?? name} />
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

  const mainContent = (
    <>
      {project.video ? (
        <ProjectVideoPreview
          src={project.video.src}
          poster={project.video.poster}
          title={project.video.title}
          playbackRate={project.video.playbackRate}
        />
      ) : project.gallery?.length ? (
        <ProjectCover images={[project.image, ...project.gallery]} />
      ) : (
        <div className={cn("project-image-wrap", project.image.presentation === "diagram" && "project-image-wrap--diagram")}>
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width ?? 1536}
            height={project.image.height ?? 864}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="project-card-body">
        <CardHeader className="p-0 mb-3">
          <CardTitle>
            <div className="project-title-row">
              <h3 id={`${project.id}-title`}>{project.title}</h3>
              {project.award && (
                <a
                  href={project.award.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-award-badge"
                  title="View 1st Prize award post on LinkedIn, opens in a new tab"
                  aria-label={`${project.award.label} on LinkedIn`}
                >
                  <Trophy className="project-award-icon" aria-hidden="true" />
                  <span>{project.award.label}</span>
                  <ArrowUpRight className="project-award-arrow" aria-hidden="true" />
                </a>
              )}
            </div>
          </CardTitle>
          <CardDescription className="mt-2 text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <TechnologyTag key={technology} name={technology} iconName={project.technologyIcons?.[technology]} />
            ))}
          </ul>
          {hasValidHighlight && (
            <p className="project-highlight">{project.highlights[0]}</p>
          )}
        </CardContent>
      </div>
    </>
  );

  return (
    <Card className="project-card">
      <div className="project-card-main">{mainContent}</div>
      {project.detailPath && (
        <Link className="project-card-overlay" href={project.detailPath} aria-label={`Read ${project.title} project details`} />
      )}
      <CardFooter className="project-links">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub source, opens in a new tab`}
          >
            <TechnologyIcon name="GitHub" />
            <span>GitHub</span>
          </a>
        ) : project.sourceAvailability === "closed" ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <span aria-disabled="true" tabIndex={0} className="focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-primary">
                <LockKeyhole aria-hidden="true" />
                <span>Closed source</span>
              </span>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={6}>
              Source code is closed under contract and cannot be shared publicly.
            </TooltipContent>
          </Tooltip>
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
            aria-label={`${project.title} ${project.liveLabel ?? "live demo"}, opens in a new tab`}
          >
            <ExternalLink aria-hidden="true" />
            <span>{project.liveLabel ?? "Live demo"}</span>
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
    <article className="experience-card">
      <div className="experience-card-header">
        <div className="experience-card-identity">
          <a
            className="experience-logo-box"
            href={experience.organizationUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${experience.organization}, opens in a new tab`}
          >
            <img
              src={experience.logo.src}
              alt={experience.logo.alt}
              width={experience.logo.width}
              height={experience.logo.height}
              loading="lazy"
              decoding="async"
            />
          </a>
          <div className="experience-title-group">
            <h3 className="experience-role">{experience.role}</h3>
            <div className="experience-meta-row">
              <a className="experience-org" href={experience.organizationUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${experience.organization}, opens in a new tab`}>
                {experience.organization}
              </a>
              <span className="experience-meta-sep" aria-hidden="true">
                •
              </span>
              <span className="experience-location">
                <MapPin className="experience-location-icon" aria-hidden="true" />
                {experience.location}
              </span>
            </div>
          </div>
        </div>

        <div className="experience-period-badge">
          <span>{experience.period}</span>
        </div>
      </div>

      <div className="experience-card-body">
        <ul className="experience-bullets" aria-label={`${experience.role} key deliverables at ${experience.organization}`}>
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="experience-bullet">
              <span className="experience-bullet-marker" aria-hidden="true" />
              <span className="experience-bullet-text">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="experience-card-footer">
        <div className="experience-tech-group">
          <ul className="tag-list" aria-label={`${experience.role} technologies`}>
            {experience.technologies.map((technology) => (
              <TechnologyTag key={technology} name={technology} />
            ))}
          </ul>
        </div>

        {experience.project?.external ? (
          <a
            className="experience-project-btn"
            href={experience.project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${experience.project.label}, opens in a new tab`}
          >
            <span>{experience.project.label}</span>
            <ArrowUpRight className="experience-btn-icon" aria-hidden="true" />
          </a>
        ) : experience.project ? (
          <Link
            className="experience-project-btn"
            href={experience.project.href}
            aria-label={`${experience.project.label} case study`}
          >
            <span>{experience.project.label}</span>
            <ArrowUpRight className="experience-btn-icon" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
