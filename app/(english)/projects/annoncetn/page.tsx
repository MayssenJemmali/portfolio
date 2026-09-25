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
import { TechnologyTag } from "@/components/site/portfolio-parts";
import { TechnologyIcon } from "@/components/site/technology-icon";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { getPortfolio } from "@/data/get-portfolio";
import { localeCopy } from "@/data/locale-copy";
import { useLocale } from "@/components/site/locale-provider";


export default function AnnonceTnPage() {
  return <AnnonceTnPageContent />;
}

export function AnnonceTnPageContent() {
  const { locale } = useLocale();
  const { annonceTnDetail, projects } = getPortfolio(locale);
  const copy = localeCopy[locale];
  const pageCopy = copy.caseStudies.annonceTn;
  const sectionCopy = copy.casePage;
  const project = projects.find((entry) => entry.id === "annoncetn")!;
  return (
    <>
      <a className="skip-link" href="#content">{copy.skipToContent}</a>
      <main className="case-page" id="content">
        <div className="case-shell">
          <div className="case-topbar">
            <Breadcrumb aria-label={sectionCopy.breadcrumb}>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link href={"/"}>{sectionCopy.home}</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink asChild><Link href={"/#projects"}>{sectionCopy.projects}</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>AnnonceTN</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="case-topbar-actions">
              <LanguageSwitcher />
              <Button asChild variant="outline" size="sm" className="case-back-button">
                <Link href={"/#projects"}><ArrowLeft aria-hidden="true" /> {sectionCopy.backToProjects}</Link>
              </Button>
            </div>
          </div>

          <article className="case-article">
            <header className="case-intro">
              <p className="case-eyebrow">{pageCopy.internship}</p>
              <h1>AnnonceTN</h1>
              <p className="case-lead">{annonceTnDetail.lead}</p>
              <ul className="tag-list" aria-label={`AnnonceTN ${sectionCopy.technologies}`}>
                {project.technologies.map((name) => (
                  <TechnologyTag key={name} name={name} iconName={project.technologyIcons?.[name]} />
                ))}
              </ul>
              <div className="case-actions">
                {project.githubUrl && (
                  <Button asChild className="neo-button">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${sectionCopy.githubRepositories} (${locale === "fr" ? "s’ouvre dans un nouvel onglet" : "opens in a new tab"})`}>
                      <TechnologyIcon name="GitHub" /> {sectionCopy.githubRepositories} <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                )}
              </div>
            </header>

            <section className="case-section" aria-labelledby="annoncetn-overview">
              <h2 id="annoncetn-overview">{pageCopy.marketplace}</h2>
              <p>{annonceTnDetail.intro}</p>
              <ul className="case-bullets case-bullets-after-copy">
                {annonceTnDetail.journey.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="annoncetn-architecture">
              <h2 id="annoncetn-architecture">{pageCopy.architecture}</h2>
              <p>{pageCopy.architectureIntro}</p>
              <ol className="case-process">
                {annonceTnDetail.architecture.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-section" aria-labelledby="annoncetn-recommendations">
              <h2 id="annoncetn-recommendations">{pageCopy.recommendations}</h2>
              <p>{annonceTnDetail.recommendationIntro}</p>
              <ol className="case-process">
                {annonceTnDetail.recommendationSteps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-section" aria-labelledby="annoncetn-gallery">
              <h2 id="annoncetn-gallery">{pageCopy.gallery}</h2>
              <p>{pageCopy.galleryIntro}</p>
              <ProjectGallery images={annonceTnDetail.gallery} label={`AnnonceTN ${sectionCopy.screenshots}`} locale={locale} />
            </section>

            <section className="case-section" id="repositories" aria-labelledby="annoncetn-repositories">
              <h2 id="annoncetn-repositories">{sectionCopy.projectRepositories}</h2>
              <ul className="case-repository-grid">
                {annonceTnDetail.repositories.map((repository) => (
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
            <Link href={"/#projects"}><ArrowLeft aria-hidden="true" /> {sectionCopy.backToAllProjects}</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
