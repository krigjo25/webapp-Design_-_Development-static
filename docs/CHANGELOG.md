# Changelog

All notable changes to this project will be documented in this file.

## [2.5.0] - 2026-05-31
### Added
- Moved `ninja.ts` game logic into the centralized `src/assets/ts/` directory for better structural consistency.
- Updated `src/ninjajs/ninja-script.html` to reference the new compiled location of the Ninja script.

### Changed
- Finalized project-wide TypeScript type centralization, ensuring all logic imports shared types from `src/types/`.
- Optimized folder structure by removing `ninja-quiz` sub-directory in favor of the main TypeScript assets folder.

## [2.4.0] - 2026-05-31
### Added
- Centralized all TypeScript interfaces and declarations into the `src/types/` directory for better project organization.
- Extracted `LightboxState` interface to `src/types/lightbox.ts`.
- Created `src/types/skillbar.ts` to define `ProgressOptions` and `CircularSkillBarOptions`.
- Created `src/types/template.ts` for `TemplateFunction` and `MetadataOptions`.
- Created `src/types/ninja.ts` for quiz-related types (`QuizQuestion`, `QuizData`).
- Created `src/types/video.ts` for `VideoState` and `TimeFormatter`.
- Created `src/types/generator.ts` for title generation script types.
- Established `src/types/globals.d.ts` as the primary source for global type definitions (jQuery, $).

### Changed
- Refactored all functional logic in `src/assets/ts` to import and utilize centralized types.
- Improved type safety across all utility and component scripts.
- Optimized the mobile navigation and news feed logic with robust TypeScript implementations.

## [2.3.0] - 2026-05-31
### Added
- Created `src/types/globals.d.ts` to provide robust global type definitions for **jQuery** and **$**, resolving persistent editor and compiler errors.

### Fixed
- Fixed TypeScript "cannot find name JQueryStatic" and "cannot find name jQuery" errors in `menu.ts`.
- Refined `menu.ts` with a safe IIFE and proper type safety.
- Resolved build failures caused by redundant type declarations in `news.ts` and `menu.ts`.

### Changed
- **Documentation Refinement:** Updated `README.md` and `CHANGELOG.md` to reflect the latest technical stabilization and versioning milestones.
- **Enhanced Build Pipeline:** Optimized the TypeScript compilation step in the build script for better reliability.

## [2.2.0] - 2026-05-31
### Added
- Consolidated all project diagrams into a single, high-quality colored Draw.io file (`docs/diagrams.drawio`).
- Implemented a second tab in the diagrams for **Runtime Flow**, providing a detailed map of browser execution.

### Fixed
- Resolved persistent stacking context issues where the site header and logo would overlap the high-resolution lightbox.
- Applied the maximum possible integer `z-index` (2147483647) with `!important` to the modal and its close button to guarantee they are the topmost elements.
- Fixed TypeScript "redeclaration" errors in `menu.ts` and `news.ts` by refining global jQuery type declarations.

### Changed
- **Final Codebase Purge:** Removed all redundant and empty source files (`figure.ts`, `logo.ts`, `slideshow.ts`, `offlineStylesheets.ts`) to maintain a lean architecture.
- **Refined Styling:** Removed all unnecessary `z-index` properties from main content containers to ensure a clean, modern stacking order.

## [2.1.0] - 2026-05-31
### Added
- Integrated the **K-Design 3D version** as the primary site header logo.
- Enhanced the high-resolution overlay with an **absolute topmost z-index** to ensure it always covers the header and navigation.
- Implemented a **fixed-position close button** for the modal, ensuring it remains accessible even when scrolling.
- Added **Keyboard Navigation** support (Esc key) to close active lightboxes.
- Improved Profile Card on the "Om meg" page with **Flexbox row layout** and **25% strict scaling**.
- Unified all branding and image captions to include **creation years (2014)** and consistent Norwegian labeling.

### Fixed
- Resolved stacking context conflicts between the site header and the portfolio overlays.
- Fixed the "head-cropping" issue on the About page by allowing the portrait to scale naturally with `auto` height.
- Corrected TypeScript compilation errors caused by redundant global declarations in `menu.ts` and `news.ts`.

### Changed
- **Technical Cleanup:** Purged redundant and empty source files to streamline the architecture.
- **Enhanced Overlay Visuals:** Increased the modal viewport size for desktop inspection and enforced robust centering and italics for all captions.

## [2.0.0] - 2026-05-31
### Added
- Created comprehensive `CHANGELOG.md` to document project evolution.
- Developed a modular Sass design system with global variables (`_variables.sass`) and reusable mixins (`_mixins.sass`).
- Implemented a 3-column responsive news grid on the landing page.
- Created `src/assets/sass/components/_animations.sass` for centralized animation gallery styling.
- Added "Gå tilbake" (Go Back) buttons to all sub-portfolio pages for improved navigation.
- Added comprehensive Context and Architecture diagrams in `docs/diagrams.drawio`.
- Re-added the **K-Design Previous Version** logo and grouped it with the **3D version** in a dedicated collection.
- Added **E-Media** logo to the gallery with its own high-resolution overlay.
- Created `src/photoshoot.html` to showcase photography work with grouped collection lightboxes.
- Installed **"Christmas Time"** font for perfect SVG rendering.

### Fixed
- Resolved all text overlay issues in the article body by removing chaotic global rules and fixing line-height bugs.
- Fixed circular skill bar rendering by correcting canvas drawing logic and adding background tracks.
- Improved modal close button functionality (fixed positioning, larger hit area, and keyboard navigation).
- Standardized all captions to be centered and italicized across the entire site.
- Corrected various broken image paths and CSS links after asset reorganization.

### Changed
- **Major Modernization:** Orchestrated by **Antigravity-cli** & **Gemini-cli**.
- **Localization:** Entire application translated to **Norwegian** (Nyheter, Om meg, Portefølje).
- **CSS Standards:** Converted all physical properties to **Logical Properties** and units to **rem**.
- **Gallery Redesign:** Transformed vector and logo pages into flat Flexbox galleries with 25% scale previews.
- **README Update:** Rewrote `README.md` in Intermediate English with detailed installation and build instructions.

## [1.1.0] - 2026-05-30
### Added
- Initial modernization effort: Migrated core logic to TypeScript and implemented Sass.
- Restructured news feed and about us layouts with glassmorphic cards.

## [1.0.0] - 2014-05-30
### Added
- Original release of the web application built with plain JavaScript and traditional CSS.
