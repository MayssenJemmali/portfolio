import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, LockKeyhole, Play, Trophy } from "lucide-react";
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
import { ArchitectureViewer } from "@/components/site/architecture-viewer";
import { VideoJsPlayer } from "@/components/site/videojs-player";
import { TechnologyTag } from "@/components/site/portfolio-parts";
import { TechnologyIcon } from "@/components/site/technology-icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { deepSkynDetail, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "DeepSkyn | Mayssen Jemmali",
  description: deepSkynDetail.lead,
};

const project = projects.find((entry) => entry.id === "deepskyn")!;

export default function DeepSkynPage() {
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
                <BreadcrumbItem><BreadcrumbPage>DeepSkyn</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button asChild variant="outline" size="sm" className="case-back-button">
              <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
            </Button>
          </div>

          <article className="case-article">
            <header className="case-intro case-intro--with-award">
              <div className="case-intro-main">
                <p className="case-eyebrow">Selected project / Case study</p>
                <h1>DeepSkyn</h1>
                <p className="case-lead">{deepSkynDetail.lead}</p>

                {deepSkynDetail.award && (
                  <div className="case-award-card">
                    <div className="case-award-card-header">
                      <span className="case-award-badge">
                        <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
                        1st Prize · ESPRIT Bal des Projets 2026
                      </span>
                      <span className="case-award-category">{deepSkynDetail.award.category}</span>
                    </div>
                    <p className="case-award-text">
                      Won 1st place at ESPRIT&apos;s annual project fair (Bal des Projets), awarded by an academic &amp; industry jury to Team SuperNova.
                    </p>
                    <a
                      href={deepSkynDetail.award.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="case-award-link"
                      aria-label="View 1st Prize award post on LinkedIn, opens in a new tab"
                    >
                      <TechnologyIcon name="LinkedIn" />
                      <span>View award post on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                <ul className="tag-list" aria-label="DeepSkyn technologies">
                  {project.technologies.map((name) => (
                    <TechnologyTag key={name} name={name} iconName={project.technologyIcons?.[name]} />
                  ))}
                </ul>

                <div className="case-actions">
                  <Button asChild className="neo-button">
                    <a href="#demo"><Play aria-hidden="true" /> Watch app demo</a>
                  </Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span tabIndex={0} className="inline-flex cursor-not-allowed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary">
                        <Button variant="outline" className="neo-button pointer-events-none" disabled>
                          <LockKeyhole aria-hidden="true" /> Closed source
                        </Button>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={6}>
                      Source code is closed under contract and cannot be shared publicly.
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {deepSkynDetail.award && (
                <aside className="case-intro-certificate">
                  <figure className="case-certificate-card">
                    <div className="case-certificate-header">
                      <span>Official Certificate</span>
                      <span className="case-certificate-hint">Enlarge ↗</span>
                    </div>
                    <a
                      href={deepSkynDetail.award.certificate.src}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View the full resolution DeepSkyn award certificate in a new tab"
                      className="case-certificate-link"
                    >
                      <img
                        src={deepSkynDetail.award.certificate.src}
                        alt={deepSkynDetail.award.certificate.alt}
                        width={deepSkynDetail.award.certificate.width}
                        height={deepSkynDetail.award.certificate.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                    <figcaption>
                      1st Prize certificate awarded to Team SuperNova for DeepSkyn at ESPRIT&apos;s 13th Bal des Projets.
                    </figcaption>
                  </figure>
                </aside>
              )}
            </header>

            <section className="case-section" aria-labelledby="deepskyn-overview">
              <h2 id="deepskyn-overview">The idea</h2>
              <p>{deepSkynDetail.intro}</p>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-journey">
              <h2 id="deepskyn-journey">From analysis to routine</h2>
              <ul className="case-bullets">
                {deepSkynDetail.journey.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-search">
              <h2 id="deepskyn-search">Searching 19K skincare products</h2>
              <p>{deepSkynDetail.searchIntro}</p>
              <ol className="case-process">
                {deepSkynDetail.searchSteps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-models">
              <h2 id="deepskyn-models">The model work</h2>
              <p>{deepSkynDetail.modelIntro}</p>
              <ul className="case-bullets case-bullets-after-copy">
                {deepSkynDetail.modelWork.map((result) => <li key={result}>{result}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-architecture">
              <h2 id="deepskyn-architecture">How it was delivered</h2>
              <p>{deepSkynDetail.architecture}</p>
              <ArchitectureViewer
                image={deepSkynDetail.architectureImage}
                title="DeepSkyn architecture"
                caption="The application, delivery pipelines, cluster, GitOps, and monitoring in one view."
              />
            </section>

            <section className="case-section" id="demo" aria-labelledby="deepskyn-demo">
              <h2 id="deepskyn-demo">See the app in action</h2>
              <p>Watch the product walkthrough to see how DeepSkyn feels in use.</p>
              <VideoJsPlayer
                src={deepSkynDetail.demo.videoSrc}
                poster={deepSkynDetail.demo.posterSrc}
                title={deepSkynDetail.demo.title}
              />
              <a className="case-video-link" href={deepSkynDetail.demo.watchUrl} target="_blank" rel="noreferrer">
                Watch on YouTube <ArrowUpRight aria-hidden="true" />
              </a>
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
