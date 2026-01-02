<!-- Short, focused instructions for AI coding agents working on this repo -->
# Copilot / AI agent instructions — Saint-Mary

Purpose
- Help an AI quickly become productive in this single-page React app (Create React App + HashRouter).

Big picture
- Single-page React site (CRA) with client-side routing using `HashRouter` in `src/App.js`.
- No backend in repo — site is shipped as static files under `build/` and deployed to GitHub Pages (see `package.json`).

Key files & directories (start here)
- `src/` — app source. Pages live in `src/components` (e.g. `Home`, `Courses`, `Contact`, `Biblioteca`, `Trip`).
- `src/App.js` — Router setup; add routes here. Example: add component import and a `<Route path="/new" element={<New/>} />`.
- `src/index.js` — SPA entry point (ReactDOM root render).
- `src/img/` — static images imported into components (see `src/components/Biblioteca.js` for the import pattern).
- `public/` — static files copied to build; `build/` contains production output.
- `package.json` — scripts and dependencies; important scripts: `start`, `build`, `deploy` (gh-pages).

Build / dev / deploy commands
- Local dev: `npm start` (runs `react-scripts start`).
- Production build: `npm run build`.
- Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages` and `homepage` field in `package.json`).
- Tests: `npm test` (standard CRA test runner).

Conventions & patterns specific to this repo
- Routing: uses `HashRouter as Router` in `src/App.js`. Use hash paths (`#/home`) in links during dev and after deploy.
- UI: Bootstrap v5 CSS is imported globally from `App.js`. Components rely on Bootstrap classes (grid, cards, spacing).
- Icons: `@fortawesome/react-fontawesome` usage — follow existing import style in `Header`/`Footer` if adding icons.
- Images: store under `src/img/`, import at top of component, then use as `src={img}` on `<img>` (see `Biblioteca.js`).
- Components as pages: components under `src/components` are used as full-page views (not tiny widgets). Keep page-level state inside those components.

Integrations / dependencies to be aware of
- `react-router-dom` (v6): routes use element prop (`element={<X/>}`) and `Routes` container.
- `emailjs-com` used for contact forms — check `Contact.js` before changing mail logic.
- `gh-pages` used for publishing; `homepage` in `package.json` points to GitHub Pages URL.

Editing & testing guidance for agents
- When adding a new page:
  - create `src/components/MyPage.js`, import it in `src/App.js`, add a `<Route>` entry.
  - If it needs images, add them to `src/img/` and import at top.
- Use `npm start` to validate routing and UI locally; CRA hot reloads component changes.
- Keep CSS changes minimal; global Bootstrap is used and project has `src/App.css` for overrides.

Examples from repo
- `src/components/Biblioteca.js`: imports many images from `src/img/`, constructs `niveles` with `useMemo`, and renders Bootstrap cards. Follow this style for image-heavy pages.
- `src/App.js`: uses `HashRouter`, `Routes`, `Route`, and a `Navigate` fallback to `/home`.

What not to assume
- There is no server-side API in this repository; do not try to call internal backend endpoints unless added.

If something is unclear
- Ask for the expected behavior (route URLs, deploy target). If changes touch deployment, confirm whether to update `homepage` or the `gh-pages` workflow.

After edits
- Run `npm run build` and scan `build/` for expected files; run `npm run deploy` only after user confirms.

— End of file
