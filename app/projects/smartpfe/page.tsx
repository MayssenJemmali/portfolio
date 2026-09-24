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
import { ArchitectureViewer } from "@/components/site/architecture-viewer";
import { TechnologyTag } from "@/components/site/portfolio-parts";
import { TechnologyIcon } from "@/components/site/technology-icon";
import { projects, smartPfeDetail } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "SmartPFE | Mayssen Jemmali",
  description: smartPfeDetail.lead,
};

const project = projects.find((entry) => entry.id === "smartpfe")!;

export default function SmartPfePage() {
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
                <BreadcrumbItem><BreadcrumbPage>SmartPFE</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button asChild variant="outline" size="sm" className="case-back-button">
              <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
            </Button>
          </div>

          <article className="case-article">
            <header className="case-intro">
              <p className="case-eyebrow">Selected project / Case study</p>
              <h1>SmartPFE</h1>
              <p className="case-lead">{smartPfeDetail.lead}</p>
              <ul className="tag-list" aria-label="SmartPFE technologies">
                {project.technologies.map((name) => <TechnologyTag key={name} name={name} />)}
              </ul>
              <div className="case-actions">
                {project.liveUrl && (
                  <Button asChild className="neo-button">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="neo-button">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"><TechnologyIcon name="GitHub" /> GitHub repositories <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                )}
              </div>
            </header>

            <section className="case-section" aria-labelledby="case-overview">
              <h2 id="case-overview">The idea</h2>
              <p>{smartPfeDetail.intro}</p>
            </section>

            <section className="case-section" aria-labelledby="case-journey">
              <h2 id="case-journey">From idea to defense</h2>
              <ul className="case-bullets">
                {smartPfeDetail.journey.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="case-architecture">
              <h2 id="case-architecture">How it works</h2>
              <p>{smartPfeDetail.architecture}</p>
              <ArchitectureViewer image={smartPfeDetail.architectureImage} title="SmartPFE architecture" caption="SmartPFE architecture, from the student interface to retrieval and AI assistance." />
            </section>

            <section className="case-section" aria-labelledby="case-crag">
              <h2 id="case-crag">The corrective RAG loop</h2>
              <p>{smartPfeDetail.cragIntro}</p>
              <ol className="case-process">
                {smartPfeDetail.cragSteps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="case-evaluation"><strong>What the tests showed.</strong> {smartPfeDetail.cragEvaluation}</p>
            </section>

            <section className="case-section" aria-labelledby="case-gallery">
              <h2 id="case-gallery">Inside the workspace</h2>
              <p>A few screens from the student journey, from planning through report writing and defense practice.</p>
              <ProjectGallery images={smartPfeDetail.gallery} />
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
