import type { Metadata } from "next";
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
import { annonceTnDetail, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "AnnonceTN | Mayssen Jemmali",
  description: annonceTnDetail.lead,
};

const project = projects.find((entry) => entry.id === "annoncetn")!;

export default function AnnonceTnPage() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <main className="case-page" id="content">
        <div className="case-shell">
          <div className="case-topbar">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink asChild><Link href="/#projects">Projects</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>AnnonceTN</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button asChild variant="outline" size="sm" className="case-back-button">
              <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
            </Button>
          </div>

          <article className="case-article">
            <header className="case-intro">
              <p className="case-eyebrow">Selected project / QantumShift internship · July–August 2025</p>
              <h1>AnnonceTN</h1>
              <p className="case-lead">{annonceTnDetail.lead}</p>
              <ul className="tag-list" aria-label="AnnonceTN technologies">
                {project.technologies.map((name) => (
                  <TechnologyTag key={name} name={name} iconName={project.technologyIcons?.[name]} />
                ))}
              </ul>
              <div className="case-actions">
                {project.githubUrl && (
                  <Button asChild className="neo-button">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <TechnologyIcon name="GitHub" /> GitHub project <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="neo-button">
                  <a href="#repositories">Explore the repositories <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              </div>
            </header>

            <section className="case-section" aria-labelledby="annoncetn-overview">
              <h2 id="annoncetn-overview">The marketplace</h2>
              <p>{annonceTnDetail.intro}</p>
              <ul className="case-bullets case-bullets-after-copy">
                {annonceTnDetail.journey.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="annoncetn-architecture">
              <h2 id="annoncetn-architecture">Three tiers and a recommender</h2>
              <p>The marketplace connects its Angular client, Spring API, and MongoDB data layer to a separate Python recommendation service.</p>
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
              <h2 id="annoncetn-recommendations">Recommendations from user activity</h2>
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
              <h2 id="annoncetn-gallery">Screens from the marketplace</h2>
              <p>These screenshots come from the AnnonceTN repositories and show the category landing page, listing browser, item detail, and publishing flow.</p>
              <ProjectGallery images={annonceTnDetail.gallery} label="AnnonceTN application screenshots" />
            </section>

            <section className="case-section" id="repositories" aria-labelledby="annoncetn-repositories">
              <h2 id="annoncetn-repositories">Project repositories</h2>
              <ul className="case-bullets">
                {annonceTnDetail.repositories.map((repository) => (
                  <li key={repository.url}>
                    <a href={repository.url} target="_blank" rel="noreferrer">
                      {repository.title} <ArrowUpRight aria-hidden="true" />
                    </a>
                    {" "}{repository.detail}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <footer className="case-footer">
            <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to all projects</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
