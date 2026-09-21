"use client";

import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Navigation({ resumeUrl }: { resumeUrl: string }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(active === item.id && "is-active")}
            aria-current={active === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="resume-nav" href={resumeUrl} target="_blank" rel="noreferrer">
        <span>Resume</span> <FileText aria-hidden="true" />
      </a>
    </header>
  );
}
