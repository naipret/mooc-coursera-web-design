# Capstone Design Specification and Technical Architecture

This document establishes the architectural, structural, and visual specifications for the personal portfolio website developed for the University of Michigan Web Design for Everybody Capstone course.

| Attribute              | Specification                                                                   |
| ---------------------- | ------------------------------------------------------------------------------- |
| Author                 | Nguyen Van Phu                                                                  |
| Academic Affiliation   | Software Engineering, FPT University                                            |
| Specialization         | Web Design for Everybody, University of Michigan                                |
| Live Site Address      | https://naipret.github.io/mooc-coursera-web-design/course-5-capstone/index.html |
| Source Code Repository | https://github.com/naipret/mooc-coursera-web-design                             |

## 1. Project Objectives and Scope

The portfolio consolidates front-end development competencies acquired across five specialization courses. It functions as a public showcase for verified software repositories, academic coursework, and club contributions.

The site targets academic peer evaluators on Coursera and technical reviewers examining software repositories. Peer evaluators assess compliance with W3C HTML5 recommendations, CSS3 layout rules, multi-platform responsive adaptation, and WCAG 2.1 Level AA accessibility. Technical reviewers inspect code quality, architecture, and technology proficiencies.

## 2. Information Architecture

The website uses a multi-page structure to separate distinct informational concerns into independent documents:

| Document        | Primary Function                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `index.html`    | Entry point displaying software engineering summary, commit metrics, and specialization milestones.                 |
| `about.html`    | Educational background at FPT University, membership in F-Code Club, and maintainer responsibilities at NAF Studio. |
| `skills.html`   | Structured tables detailing programming languages, backend frameworks, DevOps utilities, and build tools.           |
| `projects.html` | Filterable catalog of verified GitHub repositories and specialization demonstrations.                               |
| `gallery.html`  | Photography exhibition presenting original images captured during academic training and city excursions.            |
| `contact.html`  | Directory of verified communication channels including direct email and GitHub organization profiles.               |
| `css/style.css` | Global stylesheet defining custom properties, responsive breakpoints, and print media rules.                        |
| `js/main.js`    | Client-side script handling theme persistence, navigation menu toggling, and project filtering.                     |

## 3. Responsive Breakpoint Strategy

Layout configurations adapt dynamically across three target screen categories without relying on third-party frameworks.

### Mobile Devices

Screen widths strictly below 600px operate in a single-column layout. The navigation menu collapses into a toggleable drawer to conserve vertical space. Cards and data tables adjust to full container width, and tap targets maintain a minimum dimension of 44 pixels by 44 pixels.

### Tablet Devices

Screen widths from 600px to 991px render cards and contact channels in a two-column CSS Grid. The site header transitions to an inline horizontal navigation bar, and the hero section presents introductory text alongside summary metrics.

### Desktop Devices

Screen widths at or above 992px utilize a three-column CSS Grid for project cards and gallery figures. The root container applies a maximum width constraint of 1120px to prevent excessive line length on wide monitors.

## 4. Visual Design System and Contrast Ratios

The color system uses CSS custom properties to switch between light and dark themes while maintaining WCAG 2.1 Level AA contrast compliance.

| Token          | Light Theme Value | Dark Theme Value | Contrast Ratio                     |
| -------------- | ----------------- | ---------------- | ---------------------------------- |
| Background     | `#f8fafc`         | `#0b1120`        | Not applicable                     |
| Surface Card   | `#ffffff`         | `#182234`        | Not applicable                     |
| Primary Text   | `#0f172a`         | `#f8fafc`        | Greater than 12:1 against surface  |
| Muted Text     | `#334155`         | `#cbd5e1`        | Greater than 7:1 against surface   |
| Primary Accent | `#1d4ed8`         | `#3b82f6`        | Greater than 4.5:1 against surface |

Typography relies on native system font stacks (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`) to eliminate external web font network requests. Heading levels scale fluidly using CSS `clamp()` functions.

## 5. Web Accessibility Implementation

The codebase adheres to the W3C Web Content Accessibility Guidelines 2.1 Level AA through the following mechanisms:

1. A skip-link element positioned before header landmarks allows keyboard users to bypass navigation menus.
2. Focus states apply a distinct three-pixel solid outline with three-pixel offset on active interactive elements.
3. Interactive elements provide descriptive `aria-label`, `aria-expanded`, and `aria-pressed` attributes.
4. Screen readers receive live filtering updates through an announcement region assigned the `aria-live="polite"` attribute.
5. All images provide contextual `alt` attributes corresponding to the actual subject depicted.
6. The `prefers-reduced-motion` media query neutralizes all animation durations and transitions when requested by the operating system.
