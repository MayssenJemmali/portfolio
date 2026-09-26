# Portfolio Design System

Read this document before changing the portfolio UI. It records the approved visual direction and the decisions behind it. Preserve these principles unless the user explicitly asks to change them.

## Design thesis

This portfolio is an **editorial neobrutalist engineering dossier**: direct, structured, memorable, and recruiter-friendly. It should feel designed by a software engineer with strong visual judgment—not like a generic developer template, fake operating system, SaaS landing page, or AI-generated showcase.

The recruiter flow is:

**About / Identity → Selected Projects → Professional Experience → Leadership & Community → Contact**

Every element must either improve comprehension, hierarchy, navigation, or personality. Decoration without a clear purpose should be removed.

## Visual language

Use the centralized CSS tokens in `app/globals.css`:

- `--paper: #f4efe4` — warm off-white page background
- `--ink: #141412` — near-black text, borders, and shadows
- `--accent: #4d85ff` — the only signal color
- `--surface: #e8e1d4` — neutral secondary surface
- `--hard-shadow: 6px 6px 0 var(--ink)` — standard hard shadow

`--accent` is the single source of truth for the orange. Do not introduce competing accent colors, gradients, glow, glass effects, purple/blue AI styling, or decorative blobs.

Surfaces use crisp two-pixel borders, small practical corner radii, and selective hard shadows. Not every container needs a border or shadow. Empty space is intentional, but components should not feel inflated.

## Typography

- Display headings: `Arial Black`, `Helvetica Neue`, Arial, sans-serif.
- Body copy: `Helvetica Neue`, Arial, sans-serif.
- Technical metadata, dates, availability, and small labels: the existing monospace stack.
- Headings are compact, heavy, and tightly tracked.
- Body text must remain readable and generally at least `1rem`.
- Use monospace selectively; do not make the entire interface look like a terminal.

Visible copy must be plain and specific. Prefer headings such as “Selected Projects” and “Professional Experience.” Avoid vague slogans, numbered section labels, fake status text, filler copy, and clever phrases that make recruiters decode the page.

## Navigation

- Keep the sticky navigation compact.
- Main section links remain centered.
- About points to the hero and is active when the page first opens.
- Do not add a logo, initials, or the owner’s name to the navbar.
- The résumé action remains separate on the right.
- The active section uses the orange accent.
- Mobile navigation may scroll horizontally rather than hiding important sections.

## Hero

The hero is a compact top section, not a forced full-screen experience. Never restore `100vh`, `100svh`, or another minimum viewport height. The hero is the About section; do not add a second About section lower on the page.

Current content hierarchy:

1. “Hey, I’m Mayssen Jemmali.”
2. “Software Engineering Student.”
3. A concise description positioning Mayssen as a software engineer building reliable software and AI-powered systems without falsely claiming the formal title “AI Engineer.”
4. “Seeking a 6-month end-of-studies internship · Available January 2027.”
5. Icon-led GitHub, LinkedIn, and résumé buttons.
6. The transparent portrait cutout on the right.

The name should be prominent but not oversized. On desktop, the hero must fit comfortably with the beginning of the next section nearby. On mobile, prioritize the identity, description, availability, and links; use a smaller portrait treatment below them.

Use `public/portrait-cutout.webp`. Preserve its transparent background and natural crop.

## Buttons and actions

The shared `Button` primitive in `components/ui/button.tsx` follows the [Neobrutalism button recipe](https://neobrutalism.com/docs/components/button):

- two-pixel near-black border
- small clean radius
- hard `4px 4px` shadow
- `200ms` transition
- hover moves slightly up and left and increases the shadow
- active/pressed moves down and right and removes the shadow
- clear keyboard focus outline
- icons are functional and placed next to concise labels

Use this behavior for standalone actions throughout the site. Do not create one-off button styles with different motion, pill radii, glow, or soft shadows. Segmented card actions may remain flatter, but they must retain clear hover, active, focus, and disabled states.

The hero must not include a separate résumé download button. GitHub, LinkedIn, and résumé are the only hero profile actions unless the user requests otherwise.

## Project cards

Project cards are compact information cards, not feature-page panels.

Each card exposes:

- image
- date
- project title
- short description
- technology tags with recognizable icons
- one concise highlight
- GitHub and Live Demo actions

Desktop at approximately `1180px` and above uses four columns so all four projects can be scanned together. Medium layouts use two columns; mobile uses one. Avoid large internal gaps, fixed oversized heights, and excessive description length.

When a GitHub or demo URL is absent, keep the action visible but disabled. Never invent or link to fake destinations. Real URLs belong in `data/portfolio.ts` and should activate automatically.

## Icons

- Use Lucide for functional interface actions.
- Use authentic open-source brand icons for GitHub, LinkedIn, and named technologies.
- Existing brand assets live in `public/icons/tech`.
- `components/site/technology-icon.tsx` maps technology names to brand icons and uses restrained Lucide fallbacks for concepts such as architecture, testing, cloud, APIs, and AI.
- Keep icons small and paired with text. Do not create a technology-logo wall.

## Sections

- Section titles are direct: “Selected Projects,” “Professional Experience,” “Leadership & Community,” and “Contact.” The hero serves as About.
- Do not restore labels such as `00 / Introduction`, numeric section prefixes, or numeric skill/experience decorations.
- Use consistent content width (`76rem`), section rhythm, and border alignment.
- Experience remains a readable timeline/list rather than cards.
- Leadership & Community uses simple editorial rows, distinct from the Professional Experience cards.
- Contact remains a strong orange closing panel with direct links.

## Motion

- Sections reveal once with the existing short fade-and-rise behavior.
- Keep important content readable without interaction.
- Do not add continuous animation, marquees, parallax, cursor effects, or decorative motion.
- Preserve the `prefers-reduced-motion` behavior.
- Button hover and pressed motion is intentional and should remain quick and tactile.

## Responsive behavior

Verify approximately `360px`, `768px`, `1024px`, and `1440px` widths.

- No horizontal page overflow.
- The compact hero should not be artificially stretched.
- Profile actions remain usable and fit in one row on narrow mobile screens.
- Cards switch from four to two to one column.
- Text, tags, links, and focus outlines remain usable at 200% zoom.
- Images reserve dimensions and retain their intended crops.

## Accessibility and implementation invariants

- Preserve semantic landmarks and heading order.
- Keep the skip link, visible keyboard focus, active navigation state, descriptive image alt text, and accessible external-link labels.
- External profile/project links open in a new tab with `rel="noreferrer"`.
- The résumé preview uses `/resume-en.pdf`; do not add an embedded PDF modal.
- Project images remain lazy-loaded with asynchronous decoding and explicit dimensions.
- Do not hide core content behind JavaScript; the existing no-script and reduced-motion fallbacks must remain functional.
- Centralize replaceable content and URLs in `data/portfolio.ts` rather than hardcoding them into layout components.

## Avoid

- gradients and glowing effects
- glassmorphism
- purple/blue “AI” aesthetics
- fake terminals, operating-system windows, dashboards, or system statistics
- skill meters and giant logo grids
- huge rounded containers or pill-shaped everything
- oversized hero slogans
- vague section copy
- unnecessary badges, arrows, decorative icons, and animation
- fabricated metrics, clients, achievements, links, or testimonials

## Before finishing a UI change

Check:

1. Does the change help a recruiter understand who Mayssen is, what he builds, what he has worked on, what he uses, or how to contact him?
2. Does it preserve the off-white, near-black, and signal-orange system?
3. Does it follow the shared button interaction rather than introducing a new one?
4. Does it remain compact and readable on desktop and mobile?
5. Is every new visual element useful rather than merely decorative?
6. Are all claims and links real or clearly marked as placeholders?
