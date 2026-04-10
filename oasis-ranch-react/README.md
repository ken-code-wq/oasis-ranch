# Oasis Ranch React Website

Modern farm showcase website built with React + Vite, based on the design language from the estate references while keeping implementation fully componentized and easy to edit.

## Run Locally

From this folder:

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run build
npm run lint
```

## Project Structure

- `src/App.jsx`: page composition order
- `src/components/TopBar.jsx`: glass-style top navigation
- `src/components/HeroSection.jsx`: landing hero and quick stats
- `src/components/StorySection.jsx`: heritage/brand narrative
- `src/components/GallerySection.jsx`: asymmetric bento gallery
- `src/components/MetricsSection.jsx`: horizontal growth metric cards
- `src/components/ContactSection.jsx`: contact cards + inquiry form
- `src/components/SiteFooter.jsx`: footer area
- `src/components/MobileDock.jsx`: mobile bottom navigation
- `src/data/siteData.js`: centralized editable content and links
- `src/index.css`: visual system, layout, and responsive styles

## Contact Data Included

- Location (DMS): `5°51'22.9"N 0°16'58.9"W`
- Location (decimal): `5.856348, -0.283023`
- Maps link: `https://www.google.com/maps?q=5.8563480,-0.2830230`
- Email: `oasisranch5@gmail.com`

## Editing Notes

- Update text, metrics, links, and images in `src/data/siteData.js`.
- Keep section-level logic in `src/components/` and styling in `src/index.css`.
- The inquiry form is currently UI-only and intentionally does not send to a backend.
