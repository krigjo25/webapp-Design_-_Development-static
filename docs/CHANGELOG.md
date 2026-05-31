# Changelog

All notable changes to this project will be documented in this file.

## [2.5.2] - 2026-05-31
### Fixed
- Fixed 404 error for `overlay.js` by removing the legacy reference from `ninja-script.html`.
- Updated `rainbow.html` to follow the project's standard page structure (header/footer includes, centered layout).

### Changed
- Standardized lesson pages to use the global design system (Flexbox, centralized containers).
- Refined navigation between Ninja scripts and lessons.

## [2.5.1] - 2026-05-31
### Changed
- Refactored and simplified `ninja.ts` game logic for better readability.

## [2.5.0] - 2026-05-31
### Added
- Moved `ninja.ts` game logic into the centralized `src/assets/ts/` directory for better structural consistency.
- Updated `src/ninjajs/ninja-script.html` to reference the new compiled location of the Ninja script.

### Changed
- Finalized project-wide TypeScript type centralization, ensuring all logic imports shared types from `src/types/`.
- Optimized folder structure by removing `ninja-quiz` sub-directory in favor of the main TypeScript assets folder.

## [2.4.0] - 2026-05-31
...
