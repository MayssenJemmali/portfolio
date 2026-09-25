import { ArrowUpRight, Mail } from "lucide-react";

import { Navigation } from "@/components/site/navigation";
import { CommunityRole } from "@/components/site/community-role";
import {
  ExperienceItem,
  ProjectCard,
  ProfileActions,
  SectionHeading,
} from "@/components/site/portfolio-parts";
import { Reveal } from "@/components/site/reveal";
import { communityRoles, experiences, profile, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <Navigation resumeUrl={profile.resumeUrl} />

      <main id="content">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Hey, I&apos;m <span>Mayssen Jemmali.</span></h1>
              <p className="hero-role">Software Engineering Student.</p>
              <p className="hero-statement">{profile.statement}</p>
              <p className="availability"><span aria-hidden="true" />{profile.availability}</p>
              <div className="hero-actions" aria-label="Introduction actions">
                <ProfileActions
                  githubUrl={profile.githubUrl}
                  linkedinUrl={profile.linkedinUrl}
                  resumeUrl={profile.resumeUrl}
                />
              </div>
            </div>
            <figure className="portrait-panel">
              <div className="portrait-accent" aria-hidden="true" />
              <img
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                width="1247"
                height="1261"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <Reveal>
            <SectionHeading
              title="Selected Projects"
              id="projects-title"
            />
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <Reveal>
            <SectionHeading
              title="Professional Experience"
              id="experience-title"
            />
          </Reveal>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <Reveal key={`${experience.role}-${index}`} delay={index * 65}>
                <ExperienceItem experience={experience} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section community-section" id="community" aria-labelledby="community-title">
          <Reveal>
            <SectionHeading
              title="Leadership & Community"
              id="community-title"
            />
          </Reveal>
          <div className="community-list">
            {communityRoles.map((role, index) => (
              <Reveal key={role.organization} delay={index * 60}>
                <CommunityRole role={role} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <Reveal>
            <SectionHeading title="Contact" id="contact-title" />
            <div className="contact-panel">
              <div>
                <p className="eyebrow">Available January 2027</p>
                <h3>Let&apos;s talk.</h3>
              </div>
              <div className="contact-actions">
                {profile.emailUrl ? (
                  <a className="contact-primary" href={profile.emailUrl}>
                    <Mail aria-hidden="true" /> Email me <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span className="contact-primary is-placeholder" aria-disabled="true">
                    <Mail aria-hidden="true" /> {profile.email}
                  </span>
                )}
                <div className="contact-secondary">
                  {profile.githubUrl ? <a href={profile.githubUrl}>GitHub <ArrowUpRight aria-hidden="true" /></a> : <span aria-disabled="true">GitHub</span>}
                  {profile.linkedinUrl ? <a href={profile.linkedinUrl}>LinkedIn <ArrowUpRight aria-hidden="true" /></a> : <span aria-disabled="true">LinkedIn</span>}
                  <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>{profile.name} / {profile.role}</p>
        <a href="#about">Back to top <ArrowUpRight aria-hidden="true" /></a>
      </footer>

      <noscript>
        <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
    </>
  );
}
