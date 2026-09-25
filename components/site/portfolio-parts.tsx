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
import { localeCopy, type Locale } from "@/data/locale-copy";

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
  locale = "en",
}: {
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  locale?: Locale;
}) {
  const copy = localeCopy[locale];
  return (
    <div className="profile-actions" aria-label={copy.portfolio.profileLinks}>
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
          aria-label={copy.portfolio.githubProfileNewTab}
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
          aria-label={copy.portfolio.linkedinProfileNewTab}
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
          <span>{copy.home.resume}</span>
          <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}

export function ProjectCard({ project, locale = "en" }: { project: Project; locale?: Locale }) {
  const copy = localeCopy[locale];
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
          locale={locale}
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
                  title={copy.portfolio.awardNewTab}
                  aria-label={`${project.award.label} ${copy.portfolio.awardOnLinkedIn}`}
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
          <ul className="tag-list" aria-label={`${project.title} ${copy.portfolio.technologies}`}>
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
        <Link className="project-card-overlay" href={project.detailPath} aria-label={`${copy.portfolio.readProject}: ${project.title}`} />
      )}
      <CardFooter className="project-links">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} ${copy.portfolio.githubSourceNewTab}`}
          >
            <TechnologyIcon name="GitHub" />
            <span>GitHub</span>
          </a>
        ) : project.sourceAvailability === "closed" ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <span aria-disabled="true" tabIndex={0} className="focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-primary">
                <LockKeyhole aria-hidden="true" />
                <span>{copy.portfolio.closedSource}</span>
              </span>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={6}>
              {copy.portfolio.closedSourceExplanation}
            </TooltipContent>
          </Tooltip>
        ) : (
          <span aria-disabled="true" title={copy.portfolio.noRepository}>
            <TechnologyIcon name="GitHub" />
            <span>GitHub</span>
          </span>
        )}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} ${project.liveLabel ?? copy.portfolio.liveDemo}, ${copy.portfolio.opensNewTab}`}
          >
            <ExternalLink aria-hidden="true" />
            <span>{project.liveLabel ?? copy.portfolio.liveDemo}</span>
          </a>
        ) : (
          <span aria-disabled="true" title={copy.portfolio.noDemo}>
            <ExternalLink aria-hidden="true" />
            <span>{copy.portfolio.liveDemo}</span>
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

export function ExperienceItem({ experience, locale = "en" }: { experience: Experience; locale?: Locale }) {
  const copy = localeCopy[locale];
  return (
    <article className="experience-card">
      <div className="experience-card-header">
        <div className="experience-card-identity">
          <a
            className="experience-logo-box"
            href={experience.organizationUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={copy.portfolio.visitOrganization.replace("{organization}", experience.organization)}
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
              <a className="experience-org" href={experience.organizationUrl} target="_blank" rel="noreferrer" aria-label={copy.portfolio.visitOrganization.replace("{organization}", experience.organization)}>
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
        <ul className="experience-bullets" aria-label={`${experience.role} ${copy.portfolio.keyDeliverables} ${experience.organization}`}>
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
            aria-label={`${experience.project.label}, ${locale === "fr" ? "s’ouvre dans un nouvel onglet" : "opens in a new tab"}`}
          >
            <span>{experience.project.label}</span>
            <ArrowUpRight className="experience-btn-icon" aria-hidden="true" />
          </a>
        ) : experience.project ? (
          <Link
            className="experience-project-btn"
            href={experience.project.href}
            aria-label={`${experience.project.label} · ${copy.casePage.caseStudy}`}
          >
            <span>{experience.project.label}</span>
            <ArrowUpRight className="experience-btn-icon" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
