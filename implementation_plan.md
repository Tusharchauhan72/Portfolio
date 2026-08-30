# Portfolio Rebranding Plan: Leo Ashcraft → Tushar Chauhan

Rebrand the Astro portfolio codebase to feature **Tushar Chauhan**. Content, metadata, social links, project highlights, skills, experience, and assets will be updated across the data layer without breaking component layouts.

## User Review Required

> [!IMPORTANT]
> The rebranding requires updating 6 core data files and public assets. Please provide the requested profile information below so we can accurately customize every section of your portfolio.

## Information Requested from User

Please provide details for the following 10 items (or let us know if you want placeholders/defaults generated for any of them):

1. **Full Name** (e.g., *Tushar Chauhan*)
2. **Professional Title** (e.g., *Full Stack Web Developer / Software Engineer*)
3. **Short Bio & Summary** (A brief description of your background, experience, location, and focus areas)
4. **Skills & Tech Stack** (Languages, Frameworks, Tools, and proficiency levels/categories)
5. **Projects** (Titles, descriptions, tech tags, live URLs, and GitHub repository links for featured/other projects)
6. **Education** (Degree/Diploma, Institution, Location, and Graduation Year)
7. **Certifications** (Name, Issuer, Year, and Optional Credential URL)
8. **GitHub URL** (e.g., `https://github.com/tusharchauhan`)
9. **LinkedIn URL** (e.g., `https://linkedin.com/in/tusharchauhan`)
10. **Resume PDF File** (Path to your resume PDF or text content to include)

---

## Proposed Data Changes

### 1. Profile Data
#### [MODIFY] [profile.ts](file:///c:/Users/Tushar/Portfolio/src/data/profile.ts)
* Update `name` to **Tushar Chauhan**.
* Update `title`, `location`, `tagline`, `description`, and `bio`.
* Update `contact` object (phone & email user/domain reversed strings for anti-spam decoding).
* Update `social.linkedin` and `social.github`.
* Update `stats` array (years experience, products launched, etc.).
* Update `resumeUrl`, `photoUrl`, and `avatarUrl`.

### 2. Hero Section
#### [MODIFY] [hero.ts](file:///c:/Users/Tushar/Portfolio/src/data/hero.ts)
* Replace `heroTitles` with custom rotating titles (e.g., *Full Stack Developer*, *Frontend Engineer*, *Backend Developer*).

### 3. Projects Showcase
#### [MODIFY] [projects.ts](file:///c:/Users/Tushar/Portfolio/src/data/projects.ts)
* Replace featured and secondary project lists (`projects`) with Tushar's real projects, metrics, tags, live URLs, and GitHub links.

### 4. Technical Skills & Services
#### [MODIFY] [skills.ts](file:///c:/Users/Tushar/Portfolio/src/data/skills.ts)
* Replace skill categories (`skills`: Languages, Frameworks, Tools), technology tags (`technologies`), and service offerings (`services`).

### 5. Work Experience & Education
#### [MODIFY] [experience.ts](file:///c:/Users/Tushar/Portfolio/src/data/experience.ts)
* Update work history (`experience`), education (`education`), and certifications (`certifications`).

### 6. SEO & Meta Schemas
#### [MODIFY] [seo.ts](file:///c:/Users/Tushar/Portfolio/src/data/seo.ts)
* Update `siteTitle`, `siteDescription`, `keywords`, and JSON-LD `schema` (`personId`, `jobTitle`, `worksFor`, `address`, `knowsAbout`, `sameAs`).

---

## Verification Plan

### Automated Verification
- Run `npm run build` or `npx astro check` to verify TypeScript types across data imports.

### Manual Verification
- Launch local development server (`npm run dev`) and inspect:
  - Hero banner title and intro bio text.
  - Social media icon destinations.
  - Projects grid and modal dialog content.
  - Skills bars and experience timeline.
  - Page head meta tags and SEO output.
