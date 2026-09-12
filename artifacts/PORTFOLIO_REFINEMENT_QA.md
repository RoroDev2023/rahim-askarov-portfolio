# Portfolio refinement

Removed the neural-network training game, its JavaScript, model-specific tests, styles, and stale built output. The decorative hero constellation remains and its lines and nodes have slightly stronger contrast.

The old portfolio informed hero role badges, grouped skills linked to actual work, visible technology badges, a prominent résumé download, and compact mobile navigation. Updated education and research cards use clearer boundaries and dates. Existing résumé, employment, education, project, and research claims are retained.

## Verification

- Desktop and mobile layouts checked at 1440, 1024, 768, 390, and 320 px with no horizontal overflow in key content.
- No game markup or game JavaScript download; no game file in the static export.
- All local page assets exist in the export and every in-page link resolves.
- Hero renders without GPU errors; project disclosures and component tabs remain interactive.
- Skills cards navigate to relevant projects or experience.
- Mobile menu opens by pointer and keyboard; Escape closes it and restores focus; selecting a section closes it; active navigation follows the visible section.
- Résumé button uses white text on dark green at desktop and mobile sizes and downloads the current PDF.
- Reduced-motion preferences disable card transitions. Mobile navigation and content remain usable without JavaScript.
- No JavaScript exceptions during browser checks.
- JavaScript syntax checks and static build pass.

## Sampled text contrast

Computed text/background ratios on the relevant solid surfaces: hero description 7.64:1; heading accent 5.74:1; project description 7.79:1; project badges 7.67:1; employment date 8.79:1; experience description and highlights 8.42:1; year marker 4.83:1; experience tags 7.66:1; education date 8.09:1; research date 6.71:1; research status 7.24:1; skills description 7.53:1; skills tags 7.84:1. This is a targeted contrast check, not a complete accessibility audit.

Final desktop and mobile screenshots were visually inspected and saved beside this report.
