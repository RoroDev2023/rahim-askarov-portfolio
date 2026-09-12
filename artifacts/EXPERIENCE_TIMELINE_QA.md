# Experience timeline

Reference: https://rahim-askarov-portfolio.vercel.app/

Inspected the old site's alternating desktop cards and single-column mobile timeline. The local adaptation uses the current theme, three latest résumé roles, company banners, high-contrast dates, visible summaries and achievements, and scroll-driven progress with chapter highlights.

Verified in local Chrome:

- All three roles are available together; the old tab controls and hidden panels are removed.
- 1440 px and 1024 px layouts alternate around the central spine.
- 768 px, 390 px, and 320 px layouts use a single column.
- No horizontal overflow in the page, cards, date labels, or tags at these widths.
- Company artwork loads; Rightance remains dark blue.
- Scrolling down and back updates progress and the active chapter.
- Direct role links land below the fixed navigation.
- Reduced motion disables card entrance animations.
- All roles remain readable without JavaScript.
- No JavaScript exceptions during these checks.
- HTML before experience and after experience is unchanged; all three approved summary paragraphs match the previous version exactly.

The reference and updated desktop/mobile screenshots are saved beside this report. Syntax checks and the static production build pass.
