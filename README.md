# Mayssen Jemmali — Portfolio

Personal portfolio of **Mayssen Jemmali**, a final-year Software Engineering student at ESPRIT in Tunis. I build reliable software and practical AI-powered applications, with experience across AI engineering, backend development, and full-stack systems.

I am seeking a **6-month end-of-studies internship starting January 2027**.

[GitHub](https://github.com/MayssenJemmali) · [LinkedIn](https://www.linkedin.com/in/mayssen-jemmali-a1509b283/) · [Email](mailto:MohamedMayssen.Jemmali@esprit.tn) · [Résumé](public/resume-en.pdf)

## About this repository

This repository contains the source code for my responsive portfolio. It introduces my background, presents selected projects and case studies, and provides links to project demos and source repositories where available.

The site includes a compact profile hero, section navigation, project cards with image galleries and video previews, detailed project pages, grouped technical skills, and contact links. Project content and replaceable URLs are kept in `data/portfolio.ts`.

## Featured projects

### SmartPFE

An AI-assisted workspace that guides engineering students through a final-year project, from requirements and UML preparation to report writing and defense practice. Its corrective retrieval pipeline searches 3,092 passages from 31 project reports and evaluates retrieved context before generation.

[Live platform](https://pfeguide.tn) · [Frontend](https://github.com/SmartPfe/SmartPfe-Front) · [Backend](https://github.com/SmartPfe/SmartPfe-Backend) · [RAG ingestion](https://github.com/SmartPfe/rag-ingestion)

### DeepSkyn

An AI skincare platform combining Gemini-powered photo analysis, personalized routines, product discovery, and progress tracking. Supporting machine-learning work included model comparisons and a MobileNetV2 skin-type classifier. The project won first place at the ESPRIT Project Fair.

[Application demo](https://youtu.be/Cx03Uz-qliY)

### AnnonceTN

A marketplace developed during my QantumShift internship in 2025. It combines an Angular frontend, Spring Boot REST API, MongoDB data layer, and a Python recommendation service using user activity, NMF, and cosine similarity.

[Project overview](https://github.com/MayssenJemmali/annonceTn-fullstack) · [Frontend](https://github.com/MayssenJemmali/annonceTn-frontend) · [Backend](https://github.com/MayssenJemmali/annonceTn-backend) · [Recommender](https://github.com/MayssenJemmali/annonceTn-recommender)

### GazellePro

A B2B portal built during my Tunisair internship. It brings travel-agency workflows for contracts, claims, financial reporting, and credit together with Amadeus flight data. The application uses Symfony, PHP, and MySQL, with JWT authentication, role-based access control, and audit logging.

[Video demo](https://youtu.be/1i9RVXQIwSo)

## Experience

- **AI & Software Engineering Intern — BeeCoders** · Tunis · Jun–Aug 2026
- **ML & Software Engineering Intern — QantumShift** · Tunis · Jul–Aug 2025
- **Full-Stack Developer Intern — Tunisair** · Tunis · Jan–Jun 2024

## Education

- **Engineering Degree in Software Engineering**, ESPRIT · 2024–2027 (expected)
- **Bachelor of Science in Computer Science**, Faculty of Sciences of Tunis · 2021–2024

## Built with

- **Application:** React 19, TypeScript, Next.js App Router APIs, and Vinext
- **Build and preview:** Vite, Cloudflare Workers, and Wrangler
- **Interface:** CSS, Tailwind CSS 4, and Lucide icons

Vinext runs the Next.js-style application with Vite. The local production preview runs the built Worker through Wrangler.

## Run locally

### Requirements

- Node.js `>=22.13.0`
- Git

### Development server

```bash
git clone https://github.com/MayssenJemmali/portfolio.git
cd portfolio
npm run install:ci
npm run dev
```

Open the local URL printed by the development server. The portable development script uses port `5173` by default.

### Build and preview

```bash
npm run build
npm run start
```

The start command serves the built site locally through Wrangler; it does not publish the site. Use the URL printed in the terminal.

## Project structure

```text
app/
  page.tsx                 Portfolio homepage
  projects/                Project case study pages
components/site/           Navigation, cards, galleries, and media previews
data/portfolio.ts          Profile, project, experience, and skill content
public/                    Résumé, icons, images, and demo media
```

To update profile or project details, edit `data/portfolio.ts`. Project case study layouts live under `app/projects/`, and their images and other static files live under `public/`.

## Contact

**Mayssen Jemmali** · Tunis, Tunisia
[Email](mailto:MohamedMayssen.Jemmali@esprit.tn) · [LinkedIn](https://www.linkedin.com/in/mayssen-jemmali-a1509b283/) · [GitHub](https://github.com/MayssenJemmali)
