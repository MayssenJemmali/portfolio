"use client";

import { ArrowLeft, ArrowUpRight, LockKeyhole, Play } from "lucide-react";
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
import { TechnologyTag } from "@/components/site/portfolio-parts";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { VideoJsPlayer } from "@/components/site/videojs-player";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { getPortfolio } from "@/data/get-portfolio";
import { localeCopy } from "@/data/locale-copy";
import { useLocale } from "@/components/site/locale-provider";


export default function GazelleProPage() {
  return <GazelleProPageContent />;
}

export function GazelleProPageContent() {
  const { locale } = useLocale();
  const { gazelleProDetail, projects } = getPortfolio(locale);
  const copy = localeCopy[locale];
  const pageCopy = copy.caseStudies.gazellepro;
  const sectionCopy = copy.casePage;
  const project = projects.find((entry) => entry.id === "gazellepro")!;
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
                <BreadcrumbItem><BreadcrumbPage>GazellePro</BreadcrumbPage></BreadcrumbItem>
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
              <h1>GazellePro</h1>
              <p className="case-lead">{gazelleProDetail.lead}</p>
              <ul className="tag-list" aria-label={`GazellePro ${sectionCopy.technologies}`}>
                {project.technologies.map((name) => (
                  <TechnologyTag key={name} name={name} iconName={project.technologyIcons?.[name]} />
                ))}
              </ul>
              <div className="case-actions">
                <Button asChild className="neo-button">
                  <a href="#demo"><Play aria-hidden="true" /> {pageCopy.watchDemo}</a>
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
            </header>

            <section className="case-section" aria-labelledby="gazellepro-overview">
              <h2 id="gazellepro-overview">{pageCopy.portal}</h2>
              <p>{gazelleProDetail.intro}</p>
            </section>

            <section className="case-section" aria-labelledby="gazellepro-workflows">
              <h2 id="gazellepro-workflows">{pageCopy.workflows}</h2>
              <ol className="case-process">
                {gazelleProDetail.journey.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-section" aria-labelledby="gazellepro-implementation">
              <h2 id="gazellepro-implementation">{pageCopy.implementation}</h2>
              <p>{pageCopy.implementationIntro}</p>
              <ol className="case-process">
                {gazelleProDetail.architecture.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-section" id="demo" aria-labelledby="gazellepro-demo">
              <h2 id="gazellepro-demo">{pageCopy.seeInAction}</h2>
              <p>{pageCopy.demoIntro}</p>
              <VideoJsPlayer
                src={gazelleProDetail.demo.videoSrc}
                poster={gazelleProDetail.demo.posterSrc}
                title={gazelleProDetail.demo.title}
                locale={locale}
              />
              <a className="case-video-link" href={gazelleProDetail.demo.watchUrl} target="_blank" rel="noreferrer" aria-label={`GazellePro · ${sectionCopy.videoNewTab}`}>
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
