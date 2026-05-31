# Architecture Overview

This document provides a high‑level view of the project's structure and runtime flow.

---

## Folder Layout

```text
/webapp-Design_&_Development-static/
├─ src/                     # Source files (HTML, Sass, TypeScript, assets)
│   ├─ index.html           # Main entry point
│   ├─ about.html           # About page
│   ├─ animations.html      # Animations showcase
│   ├─ form/                # Form markup (now only container HTML)
│   │   └─ form.html        # Minimal container for TS component
│   ├─ assets/              # Media assets, Sass, and TS modules
│   │   ├─ media/           # Images, videos, animations
│   │   │   ├─ images/…
│   │   │   ├─ video/…
│   │   │   └─ animation/…
│   │   ├─ sass/            # Design‑system styles (Sass)
│   │   └─ ts/              # TypeScript modules (organized by concern)
│   │       ├─ components/  # UI components (e.g., formComponent.ts)
│   │       ├─ utils/       # Utility scripts (skillbar.ts, video.ts, lightbox.ts, etc.)
│   │       └─ data/        # Static data files (news.ts)
│   └─ ninjajs/             # Interactive tutorial scripts
├─ scripts/                # Build and tooling scripts (e.g., build.ts)
├─ node_modules/           # NPM packages (generated, not part of core architecture)
├─ docs/                   # Documentation
│   ├─ architecture.md      # This file
│   └─ diagram/             # Architectural diagrams (draw.io)
└─ README.md               # Project overview and tech stack
```

---

## Runtime Flow (Client‑Side)
3. **Main JavaScript module (`main.js`)** bootstraps the app, registers event listeners, and initializes any UI components.
4. **Component interactions** (e.g., navigation, modals) are handled via vanilla JS modules that import shared utilities from `scripts/`.
5. **Responsive adjustments** are performed using CSS media queries and JavaScript `matchMedia` listeners.

---

## Visual Diagrams

The following diagrams provide visual insights into the system's design (viewable with [draw.io](https://app.diagrams.net/)):

- **[Context Diagram](./diagram/context.drawio):** High-level view of system boundaries and actor interactions.
- **[Architecture Diagram](./diagram/architecture.drawio):** Technical breakdown of the build pipeline and component relationships.
- **[Runtime Flow](./diagram/architecture.drawio):** (Tab 2) Detailed view of how the browser executes the application code.

---

## Build / Deployment (Future)
- If a build tool (Vite, Next.js, etc.) is introduced, source files will be compiled into a `dist/` folder.
- Deployment can be performed via static hosting (GitHub Pages, Netlify) or a containerised server.

---

*This architecture is intentionally simple to accommodate a vanilla stack while remaining extensible for future tooling.*
