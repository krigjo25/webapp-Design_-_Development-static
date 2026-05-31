# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2026-05-31
### Added
- Integrated the **K-Design 3D version** as the primary site header logo.
- Enhanced the high-resolution overlay with an **absolute topmost z-index (2147483647)** to ensure it always covers the header and navigation.
- Implemented a **fixed-position close button** for the modal, ensuring it remains accessible even when scrolling.
- Added **Keyboard Navigation** support (Esc key) to close active lightboxes.
- Improved Profile Card on the "Om meg" page with **Flexbox row layout** and **25% strict scaling**.
- Unified all branding and image captions to include **creation years (2014)** and consistent Norwegian labeling.

### Fixed
- Resolved stacking context conflicts between the site header and the portfolio overlays.
- Fixed the "head-cropping" issue on the About page by allowing the portrait to scale naturally with `auto` height.
- Corrected TypeScript compilation errors caused by redundant global declarations in `menu.ts` and `news.ts`.

### Changed
- **Technical Cleanup:** Purged redundant and empty source files (`figure.ts`, `logo.ts`, `slideshow.ts`, etc.) to streamline the architecture.
- **Enhanced Overlay Visuals:** Increased the modal viewport size for desktop inspection and enforced robust centering and italics for all captions.

## [2.0.0] - 2026-05-31
### Added
- Created comprehensive `CHANGELOG.md` to document project evolution.
- Developed a modular Sass design system with global variables (`_variables.sass`) and reusable mixins (`_mixins.sass`).
- Implemented a 3-column responsive news grid on the landing page.
- Created `src/assets/sass/components/_animations.sass` for centralized animation gallery styling.
- Added "Gå tilbake" (Go Back) buttons to all sub-portfolio pages for improved navigation.
- Added comprehensive Context and Architecture diagrams in `docs/diagrams.drawio` (colored and multi-tabbed).
- Re-added the **K-Design Previous Version** logo and grouped it with the **3D version** in a dedicated collection.
- Added **E-Media** logo to the gallery with its own high-resolution overlay.
- Created `src/photoshoot.html` to showcase photography work with grouped collection lightboxes.
- Installed **"Christmas Time"** font for perfect SVG rendering.

### Fixed
- Resolved all text overlay issues in the article body by removing chaotic global rules and fixing line-height bugs.
- Fixed circular skill bar rendering by correcting canvas drawing logic and adding background tracks.
- Improved modal close button functionality (fixed positioning, larger hit area, and keyboard navigation).
- Standardized all captions to be centered and italicized across the entire site.
- Resolved TypeScript redeclaration errors for jQuery and $ globals.
- Corrected various broken image paths and CSS links after asset reorganization.

### Changed
- **Major Modernization:** Orchestrated by **Antigravity-cli** & **Gemini-cli**.
- **Localization:** Entire application translated to **Norwegian** (Nyheter, Om meg, Portefølje).
- **CSS Standards:** Converted all physical properties to **Logical Properties** (inline-size, block-size) and units to **rem**.
- **Gallery Redesign:** Transformed vector and logo pages into flat Flexbox galleries with 25% scale previews.
- **Header Update:** Updated site header to use the 3D version of the K-Design logo.
- **README Update:** Rewrote `README.md` in Intermediate English with detailed installation and build instructions.
- **Build System:** Refined `build.ts` to include explicit directory cleaning and better logging.

## [1.1.0] - 2026-05-30
### Added
- Initial modernization effort: Migrated core logic to TypeScript and implemented Sass.
- Restructured news feed and about us layouts with glassmorphic cards.
- Integrated header and footer templates into all primary HTML pages.
- Converted main navigation to SVG icons.

### Fixed
- Corrected skillbar selector queries and portfolio image paths.
- Fixed template import paths for the build script.

## [1.0.0] - 2014-05-30
### Added
- Original release of the web application built with plain JavaScript and traditional CSS.
- Core portfolio sections for vectors, logos, and animations.
