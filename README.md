# Rahim Askarov — Software & ML Portfolio

A personal software and ML portfolio with a continuous ivory and sage palette, oversized editorial typography, an original interactive neural constellation, and softly connected sections. Built with HTML, CSS, JavaScript, and Node's built-in tools; no application dependencies or API keys.

## Run and build

```sh
npm run dev
npm run check
npm run build
```

Open http://localhost:3000. The static website is exported to `dist/`. Google Fonts provides DM Sans and Instrument Serif, with local system fallbacks. The site has not been deployed.

## Design and interaction

- Navigation links for projects, experience, education, research, and contact, with active-section indicators, a résumé download, and a keyboard-accessible mobile menu.
- A supplied graduation portrait that flips and expands into a readable personal note by click, touch, or keyboard.
- On a fresh top-of-page load, the constellation fills the viewport for one second, then eases into its existing position over 1.6 seconds as the page appears. The live canvas stays in its original hero layer throughout; cached geometry, reusable GPU buffers, and a CSS opacity animation keep the shrink lightweight. Reduced-motion settings, deep links, and history restoration skip the entrance; scrolling or keyboard navigation ends it immediately.
- An original neural constellation rendered with WebGL: 180 pearl-like nodes, sparse connections, three travelling signals, depth, and smooth pointer response. Nearby connections brighten as the pointer approaches. This artwork is decorative. GPU rendering follows the display refresh rate; a canvas fallback supports unavailable or lost graphics contexts. A keyboard-accessible pause control, reduced-motion support, and automatic suspension offscreen or in a hidden tab keep movement optional.
- Native scrolling, a scroll-drawn connecting thread, gentle section reveals, large project showcases, and animated disclosure indicators. Content stays visible if JavaScript fails.
- Role badges and three linked skills groups connect machine learning, backend systems, and product development to the relevant work.
- Stronger text, date, border, and marker contrast throughout the ivory-and-sage design.
- Short project summaries with technology badges, actual app screenshots and simulation output. Native disclosures reveal the supporting evidence, implementation choices, and engineering walkthrough.
- Projects appear as RizzTheGrid → Knee MRI → Wine AZZA. Knee MRI replaces User Management API with a three-stage, keyboard-accessible pipeline explorer. Its diagrams illustrate report labeling, soft targets, and MRI features; the project is labeled work in progress. All stages remain readable without JavaScript.
- An alternating career timeline inspired by the owner's previous portfolio. All three roles remain visible, with company banners, clear dates, résumé-based summaries, outcomes, responsibilities, and tools. Scroll reveals, a filling central line, and chapter highlights follow the reading position; narrow screens use a single column. Direct role links, reduced motion, and reading without JavaScript are supported.
- NYU and UMass Amherst education cards with official institution artwork and dates from the updated résumé.
- Separate Research & Writing with visible research topics and manuscript statuses.
- Direct downloads of the updated Askarov_Rahim_MS résumé, email, clipboard copy, GitHub, and LinkedIn links.

The previous terminal, command palette, theme switching, and dense dashboard presentation are no longer part of the interface. `terminal.js` remains as unused legacy source; the page does not load it.

## Verification

Run `npm run check` for JavaScript syntax and `npm run build` for the static export. Browser checks cover navigation, keyboard use, responsive layouts, text contrast, project disclosures, the career timeline, and reduced motion. Reports and screenshots are kept outside the static export in `artifacts/`.

The neural-network training game, its script, controls, styles, and model-specific tests have been removed. The build removes its obsolete `dist/ml.js` file from earlier exports.

## Content provenance

[CONTENT_SOURCES.md](CONTENT_SOURCES.md) records the supplied résumé and portrait, exact public asset URLs, metric scope, and remaining factual gaps. Résumé-reported outcomes stay distinct from independently inspectable project artifacts. Real research abstracts, original evaluation baselines, and author decision notes could strengthen future case studies.
# rahim-askarov-portfolio
