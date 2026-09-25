import type { Metadata } from "next";
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
import { gazelleProDetail, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "GazellePro | Mayssen Jemmali",
  description: gazelleProDetail.lead,
};

const project = projects.find((entry) => entry.id === "gazellepro")!;

export default function GazelleProPage() {
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
                <BreadcrumbItem><BreadcrumbPage>GazellePro</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button asChild variant="outline" size="sm" className="case-back-button">
              <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
            </Button>
          </div>

          <article className="case-article">
            <header className="case-intro">
              <p className="case-eyebrow">Selected project / Tunisair internship · January–June 2024</p>
              <h1>GazellePro</h1>
              <p className="case-lead">{gazelleProDetail.lead}</p>
              <ul className="tag-list" aria-label="GazellePro technologies">
                {project.technologies.map((name) => (
                  <TechnologyTag key={name} name={name} iconName={project.technologyIcons?.[name]} />
                ))}
              </ul>
              <div className="case-actions">
                <Button asChild className="neo-button">
                  <a href="#demo"><Play aria-hidden="true" /> Watch demo</a>
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
            </header>

            <section className="case-section" aria-labelledby="gazellepro-overview">
              <h2 id="gazellepro-overview">The B2B portal</h2>
              <p>{gazelleProDetail.intro}</p>
            </section>

            <section className="case-section" aria-labelledby="gazellepro-workflows">
              <h2 id="gazellepro-workflows">Partner workflows</h2>
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
              <h2 id="gazellepro-implementation">Implementation</h2>
              <p>The full-stack project connected the partner-facing workflows to flight data and access controls.</p>
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
              <h2 id="gazellepro-demo">See GazellePro in action</h2>
              <p>Watch the recorded walkthrough of the Tunisair B2B portal.</p>
              <VideoJsPlayer
                src={gazelleProDetail.demo.videoSrc}
                poster={gazelleProDetail.demo.posterSrc}
                title={gazelleProDetail.demo.title}
              />
              <a className="case-video-link" href={gazelleProDetail.demo.watchUrl} target="_blank" rel="noreferrer" aria-label="Watch the GazellePro demo on YouTube (opens in a new tab)">
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
