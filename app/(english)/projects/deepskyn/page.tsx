"use client";

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
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { getPortfolio } from "@/data/get-portfolio";
import { localeCopy } from "@/data/locale-copy";
import { useLocale } from "@/components/site/locale-provider";


export default function DeepSkynPage() {
  return <DeepSkynPageContent />;
}

export function DeepSkynPageContent() {
  const { locale } = useLocale();
  const { deepSkynDetail, projects } = getPortfolio(locale);
  const copy = localeCopy[locale];
  const pageCopy = copy.caseStudies.deepskyn;
  const sectionCopy = copy.casePage;
  const project = projects.find((entry) => entry.id === "deepskyn")!;
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
                <BreadcrumbItem><BreadcrumbPage>DeepSkyn</BreadcrumbPage></BreadcrumbItem>
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
            <header className="case-intro case-intro--with-award">
              <div className="case-intro-main">
                <p className="case-eyebrow">{sectionCopy.selectedProject} / {sectionCopy.caseStudy}</p>
                <h1>DeepSkyn</h1>
                <p className="case-lead">{deepSkynDetail.lead}</p>

                {deepSkynDetail.award && (
                  <div className="case-award-card">
                    <div className="case-award-card-header">
                      <span className="case-award-badge">
                        <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
                        {pageCopy.awardCategory}
                      </span>
                      <span className="case-award-category">{deepSkynDetail.award.category}</span>
                    </div>
                    <p className="case-award-text">
                      {pageCopy.awardText}
                    </p>
                    <a
                      href={deepSkynDetail.award.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="case-award-link"
                      aria-label={`${pageCopy.awardLink} (${locale === "fr" ? "s’ouvre dans un nouvel onglet" : "opens in a new tab"})`}
                    >
                      <TechnologyIcon name="LinkedIn" />
                      <span>{pageCopy.awardLink}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                <ul className="tag-list" aria-label={`DeepSkyn ${sectionCopy.technologies}`}>
                  {project.technologies.map((name) => (
                    <TechnologyTag key={name} name={name} iconName={project.technologyIcons?.[name]} />
                  ))}
                </ul>

                <div className="case-actions">
                  <Button asChild className="neo-button">
                    <a href="#demo"><Play aria-hidden="true" /> {locale === "fr" ? "Voir la démo de l’application" : "Watch app demo"}</a>
                  </Button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span tabIndex={0} className="inline-flex cursor-not-allowed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary">
                        <Button variant="outline" className="neo-button pointer-events-none" disabled>
                          <LockKeyhole aria-hidden="true" /> {copy.portfolio.closedSource}
                        </Button>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={6}>
                      {copy.portfolio.closedSourceExplanation}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {deepSkynDetail.award && (
                <aside className="case-intro-certificate">
                  <figure className="case-certificate-card">
                    <div className="case-certificate-header">
                      <span>{pageCopy.certificate}</span>
                      <span className="case-certificate-hint">{pageCopy.enlarge}</span>
                    </div>
                    <a
                      href={deepSkynDetail.award.certificate.src}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={pageCopy.certificateLink}
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
                      {pageCopy.certificateCaption}
                    </figcaption>
                  </figure>
                </aside>
              )}
            </header>

            <section className="case-section" aria-labelledby="deepskyn-overview">
              <h2 id="deepskyn-overview">{sectionCopy.idea}</h2>
              <p>{deepSkynDetail.intro}</p>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-journey">
              <h2 id="deepskyn-journey">{pageCopy.journey}</h2>
              <ul className="case-bullets">
                {deepSkynDetail.journey.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-search">
              <h2 id="deepskyn-search">{pageCopy.productSearch}</h2>
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
              <h2 id="deepskyn-models">{pageCopy.modelWork}</h2>
              <p>{deepSkynDetail.modelIntro}</p>
              <ul className="case-bullets case-bullets-after-copy">
                {deepSkynDetail.modelWork.map((result) => <li key={result}>{result}</li>)}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="deepskyn-architecture">
              <h2 id="deepskyn-architecture">{pageCopy.delivery}</h2>
              <p>{deepSkynDetail.architecture}</p>
              <ArchitectureViewer
                image={deepSkynDetail.architectureImage}
                title={locale === "fr" ? "Architecture de DeepSkyn" : "DeepSkyn architecture"}
                caption={pageCopy.architectureCaption}
                locale={locale}
              />
            </section>

            <section className="case-section" id="demo" aria-labelledby="deepskyn-demo">
              <h2 id="deepskyn-demo">{pageCopy.seeApp}</h2>
              <p>{pageCopy.demoIntro}</p>
              <VideoJsPlayer
                src={deepSkynDetail.demo.videoSrc}
                poster={deepSkynDetail.demo.posterSrc}
                title={deepSkynDetail.demo.title}
                locale={locale}
              />
              <a className="case-video-link" href={deepSkynDetail.demo.watchUrl} target="_blank" rel="noreferrer" aria-label={`DeepSkyn · ${sectionCopy.videoNewTab}`}>
                {sectionCopy.watchOnYouTube} <ArrowUpRight aria-hidden="true" />
              </a>
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
