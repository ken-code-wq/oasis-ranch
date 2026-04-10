# Project Guidelines

## Code Style
- Treat each project area as independent. Do not move code between folders unless explicitly requested.
- Prefer small, targeted edits and preserve existing file style.
- For static pages, keep markup semantic and preserve existing Tailwind utility conventions.
- For the React app, keep component logic in JSX files and styles in CSS files as currently structured.

## Architecture
- This workspace has three separate deliverables:
  - `farm_showcase_mobile_light/code.html`: standalone static Tailwind page.
  - `heritage_tech_expansion_light/code.html`: standalone static Tailwind page.
  - `oasis-ranch-react/`: Vite + React app.
- The canonical visual direction for the estate pages is documented in `emerald_estate/DESIGN.md`.
- Do not assume shared runtime, build pipeline, or shared components across these folders.

## Build and Test
- React app commands (run from `oasis-ranch-react/`):
  - `npm install`
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run preview`
- There is currently no automated test script in `oasis-ranch-react/package.json`.
- Static HTML folders do not have a package/toolchain. Validate by opening the HTML files in a browser.

## Conventions
- Link, do not duplicate: reference `emerald_estate/DESIGN.md` for design rules and `oasis-ranch-react/README.md` for Vite template notes.
- For static estate pages, keep Tailwind CDN + inline `tailwind.config` approach unless migration is explicitly requested.
- Avoid introducing new workspace-wide tooling at repository root unless asked.
- Check external asset links when editing static pages (Google Fonts, Material Symbols, remote images).
- Keep accessibility in mind when touching UI (alt text, button labels, focus states).

## Mobile Responsiveness
All deliverables must be highly responsive across mobile, tablet, and desktop viewports.

### Static Estate Pages (HTML)
- Use Tailwind's mobile-first breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px).
- Test on real mobile devices or browser dev tools at: 320px, 375px, 768px, 1024px, 1440px viewports.
- Stacked layouts (single column) by default; use `md:` and `lg:` to expand grids and Bento layouts.
- Ensure Bento card asymmetry adapts: reduce col-span and heights proportionally on smaller screens.
- Hero sections: scale images and text fluidly using `text-xl md:text-3xl lg:text-4xl` patterns and responsive image heights.
- Forms: full-width inputs on mobile, multi-column on tablet/desktop.
- Navigation and bottom sheets: hide redundant elements on small screens; show persistent nav only on `md:` and up.
- Test horizontal scrollers (e.g., Growth Metrics) on mobile by verifying no horizontal overflow on viewport.

### React App
- Use Tailwind utility classes with responsive prefixes in JSX (`className="w-full md:w-1/2 lg:w-1/3"`).
- CSS modules or inline styles should not hardcode fixed widths; use Tailwind's intrinsic sizing (`min-w-max`, `w-fit`) and Flexbox/Grid.
- Container queries: use `@container` for component-level responsiveness independent of viewport (requires Tailwind container-queries plugin).
- Prefer CSS Grid with `auto-fit` or `auto-fill` over fixed column counts for card layouts.
- Test at dev server viewport breakpoints and in production build with `npm run preview`.

### Common Patterns
- **Fluid typography**: use `clamp()` or Tailwind size scales (`text-sm md:text-base lg:text-lg`).
- **Flexible images**: always set `max-w-full` and aspect ratios; use `object-cover` for images in fixed containers.
- **Padding & gaps**: scale with screen size (`px-4 md:px-6 lg:px-8`) to maintain visual rhythm.
- **Stack vs. grid**: default to flexbox column; transition to grid on `md:` or `lg:`.
- **Touch targets**: buttons and interactive elements should be ≥48px tall on all breakpoints.

## Agent Pitfalls
- `farm_showcase_mobile_light/code.html` and `heritage_tech_expansion_light/code.html` are not React files.
- `oasis-ranch-react/` is a separate app with its own lint/build workflow.
- Do not treat generated or installed folders (for example `oasis-ranch-react/node_modules/`) as sources for edits.