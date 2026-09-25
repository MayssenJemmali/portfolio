"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProjectGallery } from "@/components/site/project-gallery";
import { ArchitectureViewer } from "@/components/site/architecture-viewer";
import { TechnologyTag } from "@/components/site/portfolio-parts";
import { TechnologyIcon } from "@/components/site/technology-icon";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { getPortfolio } from "@/data/get-portfolio";
import { localeCopy } from "@/data/locale-copy";
import { useLocale } from "@/components/site/locale-provider";


export default function SmartPfePage() {
  return <SmartPfePageContent />;
}

export function SmartPfePageContent() {
  const { locale } = useLocale();
  const { projects, smartPfeDetail } = getPortfolio(locale);
  const copy = localeCopy[locale];
  const project = projects.find((entry) => entry.id === "smartpfe")!;
  return (
    <>
      <a className="skip-link" href="#content">{copy.skipToContent}</a>
      <main className="case-page" id="content">
        <div className="case-shell">
          <div className="case-topbar">
            <Breadcrumb aria-label={copy.casePage.breadcrumb}>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link href={"/"}>{copy.casePage.home}</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink asChild><Link href={"/#projects"}>{copy.casePage.projects}</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>SmartPFE</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="case-topbar-actions">
              <LanguageSwitcher />
              <Button asChild variant="outline" size="sm" className="case-back-button">
                <Link href={"/#projects"}><ArrowLeft aria-hidden="true" /> {copy.casePage.backToProjects}</Link>
              </Button>
            </div>
          </div>

          <article className="case-article">
            <header className="case-intro">
              <p className="case-eyebrow">{copy.casePage.selectedProject} / {copy.casePage.caseStudy}</p>
              <h1>SmartPFE</h1>
              <p className="case-lead">{smartPfeDetail.lead}</p>
              <ul className="tag-list" aria-label={`SmartPFE ${copy.casePage.technologies}`}>
                {project.technologies.map((name) => <TechnologyTag key={name} name={name} />)}
              </ul>
              <div className="case-actions">
                {project.liveUrl && (
                  <Button asChild className="neo-button">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">{copy.casePage.liveDemo} <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="neo-button">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"><TechnologyIcon name="GitHub" /> {copy.casePage.githubRepositories} <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                )}
              </div>
            </header>

            <section className="case-section" aria-labelledby="case-overview">
              <h2 id="case-overview">{copy.casePage.idea}</h2>
              <p>{smartPfeDetail.intro}</p>
            </section>

            <section className="case-section" aria-labelledby="case-journey">
              <h2 id="case-journey">{copy.caseStudies.smartpfe.journey}</h2>
              <ul className="case-bullets">
                {smartPfeDetail.journey.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="case-architecture">
              <h2 id="case-architecture">{copy.casePage.howItWorks}</h2>
              <p>{smartPfeDetail.architecture}</p>
              <ArchitectureViewer image={smartPfeDetail.architectureImage} title={locale === "fr" ? "Architecture de SmartPFE" : "SmartPFE architecture"} caption={locale === "fr" ? "Architecture de SmartPFE, de l’interface étudiante à la recherche documentaire et à l’assistance IA." : "SmartPFE architecture, from the student interface to retrieval and AI assistance."} locale={locale} />
            </section>

            <section className="case-section" aria-labelledby="case-crag">
              <h2 id="case-crag">{copy.caseStudies.smartpfe.correctiveRag}</h2>
              <p>{smartPfeDetail.cragIntro}</p>
              <ol className="case-process">
                {smartPfeDetail.cragSteps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="case-evaluation"><strong>{copy.caseStudies.smartpfe.evaluationLead}</strong> {smartPfeDetail.cragEvaluation}</p>
            </section>

            <section className="case-section" aria-labelledby="case-gallery">
              <h2 id="case-gallery">{copy.caseStudies.smartpfe.gallery}</h2>
              <p>{copy.caseStudies.smartpfe.galleryIntro}</p>
              <ProjectGallery images={smartPfeDetail.gallery} locale={locale} />
            </section>

            <section className="case-section" aria-labelledby="smartpfe-repositories">
              <h2 id="smartpfe-repositories">{copy.casePage.projectRepositories}</h2>
              <ul className="case-repository-grid case-repository-grid-three">
                {smartPfeDetail.repositories.map((repository) => (
                  <li key={repository.url}>
                    <a className="case-repository-card" href={repository.url} target="_blank" rel="noreferrer" aria-label={`${repository.title} sur GitHub (${locale === "fr" ? "s’ouvre dans un nouvel onglet" : "opens in a new tab"})`}>
                      <span className="case-repository-copy">
                        <span className="case-repository-title">
                          <TechnologyIcon name="GitHub" />
                          {repository.title}
                        </span>
                        <span className="case-repository-detail">{repository.detail}</span>
                      </span>
                      <ArrowUpRight className="case-repository-arrow" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <footer className="case-footer">
            <Link href={"/#projects"}><ArrowLeft aria-hidden="true" /> {copy.casePage.backToAllProjects}</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
