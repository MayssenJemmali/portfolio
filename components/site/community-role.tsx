import type { CommunityRole as CommunityRoleData } from "@/data/portfolio";

export function CommunityRole({ role }: { role: CommunityRoleData }) {
  return (
    <article className="community-role">
      <div className="community-heading">
        <a
          className="experience-logo-box community-logo-box"
          href={role.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${role.organization} on Instagram, opens in a new tab`}
        >
          <img
            src={role.logo.src}
            alt={role.logo.alt}
            width={role.logo.width}
            height={role.logo.height}
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className="community-identity">
          <h3>
            <a href={role.url} target="_blank" rel="noreferrer" aria-label={`Visit ${role.organization} on Instagram, opens in a new tab`}>
              {role.organization}
            </a>
          </h3>
          <p className="community-position">{role.role}</p>
          <p className="community-location">{role.location}</p>
        </div>
        <p className="community-period">{role.period}</p>
      </div>
      <ul className="community-highlights" aria-label={`${role.organization} highlights`}>
        {role.highlights.map((highlight) => (
          <li key={typeof highlight === "string" ? highlight : highlight.linkText}>
            <span className="experience-bullet-marker" aria-hidden="true" />
            <span>
              {typeof highlight === "string" ? highlight : <>
                {highlight.before}
                <a className="community-highlight-link" href={highlight.url} target="_blank" rel="noreferrer" aria-label={`${highlight.linkText}, view LinkedIn post, opens in a new tab`}>
                  {highlight.linkText}
                </a>
                {highlight.after}
              </>}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
