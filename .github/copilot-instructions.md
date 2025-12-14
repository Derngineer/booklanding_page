## Quick orientation for AI coding agents

This is a small Next.js app using the App Router (app/), TypeScript, Tailwind CSS, and next/font.
Keep changes minimal and focused: edit files under `app/` for UI, `public/` for static assets, and `package.json` for scripts/deps.

Key files to inspect when changing behavior

- `app/page.tsx` — main entry page and a good example of Tailwind + `next/image` usage.
- `app/layout.tsx` — global layout and font setup (Geist fonts using `next/font`).
- `app/globals.css` — global styles and Tailwind utilities.
- `package.json` — scripts: `dev`, `build`, `start`, `lint`.
- `next.config.ts` and `tsconfig.json` — project config and path aliases (`@/*` -> project root).

Architecture and conventions (derived from code)

- App Router: the project uses the `app/` directory (server/components by default). Prefer making new routes under `app/` (e.g., `app/books/page.tsx`).
- Styling: Tailwind is installed (see `devDependencies`) and globals are imported in `app/layout.tsx`. Keep utility classes in JSX; reserve `globals.css` for base styles.
- Fonts: `next/font` is used in `layout.tsx` to expose CSS variables (e.g., `--font-geist-sans`). Preserve those variables when modifying layout.
- Static assets: images and svg are served from `public/` and referenced via `/...` paths in `next/image`.
- TypeScript: `tsconfig.json` is strict. New files should satisfy strict type checks and JSX runtime `react-jsx`.

Developer workflows and commands

- Development server: `npm run dev` (or `pnpm dev` / `yarn dev`).
- Build: `npm run build` produces the `.next/` output; `npm run start` serves the production build.
- Linting: `npm run lint` invokes `eslint` (project uses `eslint-config-next`).

Project-specific notes and patterns

- Next version: pinned to `next@16.0.10` and React `19.2.1` — avoid changes that assume different router semantics or older APIs.
- `package.json` lint script is `eslint` without args. If you run linting in CI or locally, pass paths or ensure the default eslint config is sufficient.
- There is a `pnpm-lock.yaml` present; contributors may prefer `pnpm` but README lists multiple package managers — prefer using the repo's lockfile (pnpm) when making dependency changes.
- No tests are present in the repo; changes that add behavior should include a minimal smoke check (manual run instructions) in the PR description.

Examples (explicit, copyable) — how to modify or add common artifacts

- Add a new page route: create `app/books/page.tsx` exporting a React component. Use server components by default.
- Add a static image: place `cover.jpg` in `public/images/cover.jpg` and reference it in JSX with `<Image src="/images/cover.jpg" width={600} height={400} />`.
- Change global font: edit `app/layout.tsx` and preserve the `variable` values so the CSS classes used across the app continue to work.

Integration points to be mindful of

- Vercel-friendly defaults: README suggests deployment to Vercel; avoid introducing platform-specific native code.
- `next/image` and static `public/` assets — keep sizes and `priority` usage consistent with existing examples.

When you propose edits in a PR

- Reference the exact file paths changed (e.g., `app/page.tsx`, `app/layout.tsx`).
- Note the command to run locally to validate your change (e.g., `pnpm dev` or `npm run dev`).
- If adding dependencies, update the lockfile using `pnpm install` (preferred) and include the resulting `pnpm-lock.yaml` changes.

If anything here looks incomplete or ambiguous, tell me which area you'd like expanded (build, routes, Tailwind usage, fonts, or path aliases) and I'll update this guidance.
