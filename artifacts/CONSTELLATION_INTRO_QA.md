# Fullscreen constellation entrance

On an eligible top-of-page load, the live constellation fills the viewport, holds for 1 second, and shrinks into the current hero position over 1.6 seconds. The title appears in front as the network settles. No duplicate network or replay loop is used.

Local Chrome checks:
- Desktop 1440 × 1050: hold 1031.7 ms; total entrance 2651.6 ms; starting network approximately 2.55× the settled width.
- Mobile 390 × 844: hold 1010.4 ms; total entrance 2611.4 ms; starting network approximately 2.79× the settled width.
- Handoff displacement under 0.08 px, including the continuing ambient rotation. The canvas now remains in its original hero parent throughout the introduction.
- No leftover overlay/probe nodes; title fully visible; settled constellation remains at z-index -1.
- No layout overflow or GPU errors after the move.
- Scrolling and keyboard navigation end the intro immediately.
- Deep links skip the introduction.
- Reduced motion displays the settled layout immediately; changing the preference mid-intro ends and pauses it.
- Canvas fallback completes the same entrance.
- The page stays visible with JavaScript disabled.
- No JavaScript exceptions during the checks.
- Fullscreen, intermediate, and settled screenshots inspected on desktop and mobile.

## Rendering follow-up

Removed per-frame root custom-property writes and layout measurements; opacity now uses a CSS animation. GPU buffers are allocated once and updated in place. Canvas dimensions only reset when they change, and the final handoff renders once instead of twice.

Measured at device pixel ratio 2 in local headless Chrome:

| During the entrance | Desktop before → after | Mobile before → after |
| --- | --- | --- |
| Style-processing time | 172.7 → 31.0 ms | 201.9 → 28.1 ms |
| Geometry reads | 152 → 2 | 155 → 2 |
| Root style writes | 151 → 0 | 154 → 0 |
| GPU storage reallocations | 302 → 0 | 308 → 0 |
| Redundant canvas resets | 2 → 0 | 2 → 0 |

Final median frame interval was 16.7 ms on both viewports; maximum interval around the start of shrinking was 17.5 ms. Cold-start outliers elsewhere in the entrance still occurred, so these measurements describe the local transition rather than guaranteeing a fixed frame rate on every device. Raw measurements are in `intro-rendering-before.json` and `intro-rendering-after.json`.

Syntax checks and the static production build pass. Motion-preference changes, scroll/keyboard interruption, deep links, the 2D fallback, and the page without JavaScript were rechecked after the fix.
