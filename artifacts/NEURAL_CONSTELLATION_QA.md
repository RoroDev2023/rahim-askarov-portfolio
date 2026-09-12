# Neural constellation verification

Replaced the top knot with an original volumetric network of 180 nodes. Sparse nearest-neighbor connections, pearl shading, three signals following graph edges, and pointer-local illumination create the visual. Motion uses elapsed time and damped pointer easing.

Verified in local Chrome:
- WebGL initializes without errors.
- Sampled 40 frames: median interval 16.7 ms (approximately 60 fps), maximum 17.7 ms. This is a local measurement, not a guarantee on every device.
- Pointer input brightens nearby links; highlights settle after leaving.
- Keyboard pause freezes nodes, links, and signals; resume works.
- Offscreen rendering stops.
- Hero fits 1440, 768, 390, and 320 pixel viewports.
- Reduced-motion preferences pause the constellation.
- Simulated GPU context loss activates the canvas fallback and preserves pause.
- Fallback animation resumes and works when WebGL is unavailable at startup.
- No JavaScript exceptions during these checks.
- Desktop and mobile screenshots visually inspected.

## Size and title layering refinement

- Enlarged node diameters by approximately 20% and the constellation by approximately 25–30% across desktop/mobile layouts.
- Applied z-index: -1 inside an isolated hero stacking context, with the name in front and overlapping the network.
- Checked 1440, 768, 390, and 320 pixel widths: no overflow or GPU errors.
- Confirmed the foreground title receives pointer hits while the constellation still responds through the hero's pointer handler.
- Confirmed highlights settle when leaving the art and keyboard pause still freezes the animation.
- No JavaScript exceptions.
