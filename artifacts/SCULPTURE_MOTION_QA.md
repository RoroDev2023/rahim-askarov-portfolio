# Sculpture motion refinement

The top sculpture now uses a GPU-resident mesh and interpolated lighting instead of sorting and drawing individual faces on every CPU frame. Added a subtle travelling filament glint, gentle surface breathing, and critically damped pointer easing. No layout or portfolio content changes.

Verified in local Chrome:
- WebGL initialized and reported no rendering errors.
- Median frame interval: 16.7 ms (approximately 60 fps); longest interval in the sampled 40-frame window: 26.3 ms. These measurements describe this local browser session, not every device.
- Pointer input steers the form and settles back to rest.
- Keyboard pause freezes both geometry and lighting; resume works.
- Rendering stops offscreen.
- Desktop, tablet, and mobile layouts fit at 1440, 768, 390, and 320 pixels.
- Reduced-motion preferences freeze animation.
- Simulated GPU context loss switches to the canvas fallback and retains paused state.
- Fallback resumes animation and also works when WebGL is unavailable on initial load.
- No JavaScript exceptions during the checks.
