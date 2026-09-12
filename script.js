'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

// The mobile navigation stays usable without JavaScript and expands on demand.
(() => {
  const header = document.querySelector('.header');
  const button = header?.querySelector('.nav-toggle');
  const nav = header?.querySelector('nav');
  if (!button || !nav) return;
  const mobile = matchMedia('(max-width: 760px)');
  function setOpen(open, restoreFocus = false) {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.querySelector('.nav-toggle-label').textContent = open ? 'Close' : 'Menu';
    if (restoreFocus) button.focus();
  }
  header.classList.add('nav-ready');
  button.hidden = false;
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('pointerdown', event => { if (!header.contains(event.target)) setOpen(false); });
  mobile.addEventListener('change', () => { if (!mobile.matches) setOpen(false); });

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const section = entries.find(entry => entry.isIntersecting)?.target;
      if (!section) return;
      links.forEach(link => {
        if (link.hash === '#' + section.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -65% 0px' });
    for (const link of links) {
      const section = document.getElementById(link.hash.slice(1));
      if (section) observer.observe(section);
    }
    observer.observe(document.querySelector('.hero'));
  }
})();

// The portrait is a real button, so its reverse works on touch and keyboard.
const portrait = document.querySelector('.portrait-card');
portrait.addEventListener('click', () => {
  const flipped = portrait.getAttribute('aria-pressed') !== 'true';
  portrait.setAttribute('aria-pressed', String(flipped));
  if (flipped) portrait.setAttribute('aria-describedby', 'portrait-bio');
  else portrait.removeAttribute('aria-describedby');
  portrait.setAttribute('aria-label', flipped ? 'Flip back to Rahim’s portrait' : 'Flip portrait to read a little about Rahim');
  portrait.querySelector('.portrait-front').setAttribute('aria-hidden', String(flipped));
  portrait.querySelector('.portrait-back').setAttribute('aria-hidden', String(!flipped));
});

// Animate each section once as it arrives. Content is visible before enhancement.
if ('IntersectionObserver' in window) {
  const reveals = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!motionPreference.matches) entry.target.classList.add('arrived');
      reveals.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => reveals.observe(element));
}

// The case study retains an accessible, adjacent implementation walkthrough.
const systemTabs = [...document.querySelectorAll('.system-path [role="tab"]')];
function selectComponent(selected, focus = false) {
  systemTabs.forEach(tab => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
  if (focus) selected.focus();
}
systemTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectComponent(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % systemTabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + systemTabs.length - 1) % systemTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = systemTabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectComponent(systemTabs[next], true); }
  });
});
if (systemTabs.length) selectComponent(systemTabs[0]);

// The MRI pipeline is readable in full before its tab controls are enhanced.
(() => {
  const tablist = document.querySelector('.mri-tabs');
  if (!tablist) return;
  const tabs = [...tablist.querySelectorAll('button')];
  function selectStage(selected, focus = false) {
    tabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) selected.focus();
  }
  tablist.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    tab.addEventListener('click', () => selectStage(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectStage(tabs[next], true); }
    });
  });
  selectStage(tabs[0]);
  tablist.hidden = false;
})();

// Direct role links land immediately; disclosure links reveal their contents.
function revealHashTarget() {
  if (!location.hash) return;
  let target;
  try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
  if (!target) return;
  let parent = target;
  let shouldPosition = Boolean(target.closest('.timeline-card'));
  while (parent) {
    if (parent.tagName === 'DETAILS' && !parent.open) { parent.open = true; shouldPosition = true; }
    parent = parent.parentElement;
  }
  if (shouldPosition) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant', block: 'start' }));
}
window.addEventListener('hashchange', revealHashTarget);
revealHashTarget();

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let statusTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(statusTimer);
  try {
    await navigator.clipboard.writeText('rahim.askarov.2004@gmail.com');
    copyStatus.textContent = 'Copied. Say hello whenever you’re ready.';
  } catch {
    copyStatus.textContent = 'Select and copy the email address above.';
  }
  statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 5000);
});

// A living neural constellation: sparse topology, pearl nodes, and travelling signals.
// Decorative graph artwork; no model training runs on the page.
(() => {
  let canvas = document.getElementById('constellation-canvas');
  const stage = document.querySelector('.hero-art');
  const toggle = document.getElementById('ambient-toggle');
  if (!canvas || !stage || !toggle) return;

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const nodes = [], edges = [], adjacency = [];
  let seed = 8437;
  function random() {
    seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
    return (seed >>> 0) / 4294967296;
  }
  // A spherical shell and an inner cloud make the network volumetric.
  const shellCount = 144, innerCount = 36;
  for (let i = 0; i < shellCount + innerCount; i++) {
    const shell = i < shellCount;
    const k = shell ? i : i - shellCount;
    const count = shell ? shellCount : innerCount;
    const y = 1 - (k + .5) * 2 / count;
    const angle = k * Math.PI * (3 - Math.sqrt(5)) + (shell ? 0 : .8);
    const radial = Math.sqrt(1 - y * y);
    const radius = shell ? .96 + random() * .07 : .24 + random() * .53;
    nodes.push({
      p: [Math.cos(angle) * radial * radius * 1.26, y * radius, Math.sin(angle) * radial * radius],
      phase: random() * Math.PI * 2,
      size: 1.6 + random() * 1.5,
      hub: !shell && k % 5 === 0,
      brightness: .78 + random() * .22
    });
    adjacency.push([]);
  }
  const edgeKeys = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const neighbors = nodes.map((node, j) => ({
      j, distance: Math.hypot(...node.p.map((v, axis) => v - nodes[i].p[axis]))
    })).filter(entry => entry.j !== i).sort((a, b) => a.distance - b.distance);
    for (const { j, distance } of neighbors.slice(0, nodes[i].hub ? 5 : 3)) {
      if (distance > .63) continue;
      const a = Math.min(i, j), b = Math.max(i, j), key = a + ':' + b;
      if (edgeKeys.has(key)) continue;
      edgeKeys.add(key);
      edges.push({ a, b, distance });
      adjacency[a].push(b); adjacency[b].push(a);
    }
  }
  // Three quiet signals follow actual graph edges instead of arbitrary screen paths.
  const routes = [12, 71, 151].map(start => {
    const route = [start];
    for (let i = 0; i < 18; i++) {
      const current = route[route.length - 1];
      const choices = adjacency[current].filter(n => n !== route[route.length - 2]);
      const next = choices.length ? choices[Math.floor(random() * choices.length)] : route[route.length - 2];
      route.push(next ?? current);
    }
    return route.concat(route.slice(0, -1).reverse());
  });

  let width = 0, height = 0, dpr = 1, phase = 3.2;
  let intro = null;
  let frame = 0, previousTime = 0, visible = true;
  let paused = motionPreference.matches, manualPause = null;
  let aimX = 0, aimY = 0, turnX = 0, turnY = 0, velocityX = 0, velocityY = 0;
  let pointerX = 0, pointerY = 0, focused = false, focusStrength = 0;
  const pointData = new Float32Array((nodes.length + routes.length) * 7);
  const lineData = new Float32Array(edges.length * 2 * 7);

  function createGpuRenderer() {
    const gl = canvas.getContext('webgl', {
      alpha: true, antialias: true, premultipliedAlpha: true,
      powerPreference: 'low-power', preserveDrawingBuffer: true
    });
    if (!gl) return null;
    const vertexSource = `
      precision highp float;
      attribute vec2 aPosition;
      attribute vec4 aColor;
      attribute float aSize;
      uniform vec2 uResolution;
      uniform float uDpr;
      varying mediump vec4 vColor;
      void main() {
        vec2 p = aPosition / uResolution * 2. - 1.;
        gl_Position = vec4(p.x, -p.y, 0., 1.);
        gl_PointSize = aSize * uDpr;
        vColor = aColor;
      }
    `;
    const fragmentSource = `
      precision mediump float;
      uniform float uPoints;
      varying mediump vec4 vColor;
      void main() {
        if (uPoints < .5) {
          gl_FragColor = vec4(vColor.rgb * vColor.a, vColor.a);
          return;
        }
        vec2 p = gl_PointCoord * 2. - 1.;
        float d = length(p);
        if (d > 1.) discard;
        float body = 1. - smoothstep(.25, .34, d);
        float halo = exp(-d * d * 5.) * .16 * (1. - smoothstep(.65, 1., d));
        float lighting = clamp(.5 - p.x * .9 - p.y * .9, 0., 1.);
        float glint = exp(-dot(p + vec2(.095), p + vec2(.095)) * 160.);
        vec3 pearl = mix(vColor.rgb * .52, vec3(.94, .97, .96), lighting * .64);
        pearl = mix(pearl, vec3(1., .995, .96), glint * .85);
        vec3 color = mix(vColor.rgb, pearl, body);
        float alpha = vColor.a * (body + halo * (1. - body));
        gl_FragColor = vec4(color * alpha, alpha);
      }
    `;
    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const reason = gl.getShaderInfoLog(shader); gl.deleteShader(shader);
        throw new Error('Constellation shader unavailable: ' + reason);
      }
      return shader;
    }
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
    gl.deleteShader(vertex); gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const reason = gl.getProgramInfoLog(program); gl.deleteProgram(program);
      throw new Error('Constellation program unavailable: ' + reason);
    }
    gl.useProgram(program);
    const attributes = [['aPosition', 2, 0], ['aColor', 4, 8], ['aSize', 1, 24]].map(([name, size, offset]) => ({
      location: gl.getAttribLocation(program, name), size, offset
    }));
    const lineBuffer = gl.createBuffer(), pointBuffer = gl.createBuffer();
    // Keep GPU storage stable throughout the fullscreen-to-hero camera move.
    for (const [buffer, data] of [[lineBuffer, lineData], [pointBuffer, pointData]]) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data.byteLength, gl.DYNAMIC_DRAW);
    }
    const resolution = gl.getUniformLocation(program, 'uResolution');
    const density = gl.getUniformLocation(program, 'uDpr');
    const kind = gl.getUniformLocation(program, 'uPoints');
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
    function batch(buffer, data, type) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, data);
      for (const { location, size, offset } of attributes) {
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, size, gl.FLOAT, false, 28, offset);
      }
      gl.uniform1f(kind, type === gl.POINTS ? 1 : 0);
      gl.drawArrays(type, 0, data.length / 7);
    }
    return {
      resize() { gl.viewport(0, 0, canvas.width, canvas.height); },
      draw() {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(resolution, width, height); gl.uniform1f(density, dpr);
        batch(lineBuffer, lineData, gl.LINES);
        batch(pointBuffer, pointData, gl.POINTS);
      }
    };
  }
  let renderer = null, ctx = null;
  try { renderer = createGpuRenderer(); } catch (error) { console.warn(error.message); }
  function useCanvasFallback() {
    renderer = null;
    const replacement = canvas.cloneNode(false);
    canvas.replaceWith(replacement); canvas = replacement;
    ctx = canvas.getContext('2d', { alpha: true });
    stage.dataset.renderer = 'canvas';
  }
  if (!renderer) useCanvasFallback();
  else {
    stage.dataset.renderer = 'webgl';
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault(); cancelAnimationFrame(frame); frame = 0;
      finishIntro();
      useCanvasFallback(); resize(); sync();
    }, { once: true });
  }
  if (!renderer && !ctx) return;

  function rotate(p, rx, ry, rz) {
    const y = p[1] * Math.cos(rx) - p[2] * Math.sin(rx);
    const z = p[1] * Math.sin(rx) + p[2] * Math.cos(rx);
    const x = p[0] * Math.cos(ry) + z * Math.sin(ry);
    return [
      x * Math.cos(rz) - y * Math.sin(rz),
      x * Math.sin(rz) + y * Math.cos(rz),
      -p[0] * Math.sin(ry) + z * Math.cos(ry)
    ];
  }
  function setVertex(data, offset, point, color, alpha, size) {
    data.set([point.x, point.y, ...color, alpha, size], offset);
  }
  function draw() {
    if (!width || !height) return;
    let scale = Math.min(width * .33, height * .40);
    let centerX = width / 2, centerY = height * .46, nodeScale = 1;
    if (intro) {
      const home = intro.bounds;
      const progress = Math.max(0, Math.min(1, (intro.elapsed - 1000) / 1600));
      // Quintic smoothstep starts and ends at rest, without snapping at either end.
      const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
      const homeScale = Math.min(home.width * .33, home.height * .40);
      const fullScale = Math.max(width * .36, height * .42);
      scale = fullScale + (homeScale - fullScale) * eased;
      centerX = width / 2 + (home.left + home.width / 2 - width / 2) * eased;
      centerY = height / 2 + (home.top + home.height * .46 - height / 2) * eased;
      nodeScale = 1 + (Math.min(2.8, fullScale / homeScale) - 1) * (1 - eased);
      if (progress > 0 && intro.overlay.dataset.phase !== 'shrinking') {
        intro.overlay.dataset.phase = 'shrinking';
      }
    }
    const rx = .2 + Math.sin(phase * .1) * .10 + turnY * .22;
    const ry = phase * .035 + turnX * .3;
    const rz = -.12 + Math.sin(phase * .075) * .04;
    const projected = nodes.map(node => {
      const breath = 1 + .025 * Math.sin(phase * .4 + node.phase);
      const p = rotate(node.p.map((v, i) => v * breath + .014 * Math.sin(phase * .25 + node.phase + i)), rx, ry, rz);
      const perspective = 4.8 / (4.8 - p[2]);
      const x = centerX + p[0] * scale * perspective;
      const y = centerY + p[1] * scale * perspective;
      const distance = Math.hypot(x - pointerX, y - pointerY) / scale;
      return {
        x, y, z: p[2], perspective,
        activity: Math.exp(-distance * distance * 5) * focusStrength,
        depth: Math.max(.2, Math.min(1, (p[2] + 1.4) / 2.5))
      };
    });
    const signals = routes.map((route, i) => {
      const progress = (phase * .48 + i * 11.3) % (route.length - 1);
      const step = Math.floor(progress), t = progress - step;
      const a = projected[route[step]], b = projected[route[step + 1]];
      return {
        a: route[step], b: route[step + 1], t,
        x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t,
        z: a.z + (b.z - a.z) * t,
        alpha: .7 + .15 * Math.sin(Math.PI * t)
      };
    });
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i], a = projected[edge.a], b = projected[edge.b];
      const activity = Math.max(a.activity, b.activity);
      const signal = signals.some(s => (s.a === edge.a && s.b === edge.b) || (s.a === edge.b && s.b === edge.a));
      const depth = (a.depth + b.depth) * .5;
      const alpha = (.10 + depth * depth * .40) * (1 - edge.distance * .42) + activity * .32 + (signal ? .24 : 0);
      const color = signal ? [.58, .47, .29] : [.29 - activity * .06, .43, .46];
      setVertex(lineData, i * 14, a, color, alpha, 1);
      setVertex(lineData, i * 14 + 7, b, color, alpha, 1);
    }
    const points = projected.map((point, i) => {
      const node = nodes[i];
      const excitation = Math.max(...signals.map(signal =>
        signal.a === i ? Math.pow(1 - signal.t, 3) : signal.b === i ? Math.pow(signal.t, 3) : 0
      ));
      const hot = Math.max(point.activity, excitation * .8);
      const color = node.hub || excitation > .3 ? [.62, .50, .32] : [.20, .34 + hot * .08, .39 + hot * .06];
      const size = ((node.size + (node.hub ? 1.8 : 0)) * 6.5 + hot * 9) * point.perspective * nodeScale;
      return { ...point, color, alpha: Math.min(1, (.40 + point.depth * .60) * node.brightness + hot * .15), size };
    });
    signals.forEach(signal => points.push({
      ...signal, color: [.72, .56, .31], size: 23 * nodeScale, alpha: signal.alpha
    }));
    points.sort((a, b) => a.z - b.z);
    points.forEach((point, i) => setVertex(pointData, i * 7, point, point.color, point.alpha, point.size));
    if (renderer) renderer.draw();
    else if (ctx) {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = .65;
      for (let i = 0; i < lineData.length; i += 14) {
        const color = lineData.slice(i + 2, i + 5).map(v => Math.round(v * 255));
        ctx.strokeStyle = 'rgba(' + [...color, lineData[i + 5]].join(',') + ')';
        ctx.beginPath(); ctx.moveTo(lineData[i], lineData[i + 1]); ctx.lineTo(lineData[i + 7], lineData[i + 8]); ctx.stroke();
      }
      for (const point of points) {
        const rgb = point.color.map(v => Math.round(v * 255));
        const radius = point.size * .5;
        const halo = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
        halo.addColorStop(0, 'rgba(' + [...rgb, point.alpha * .25].join(',') + ')');
        halo.addColorStop(1, 'rgba(' + [...rgb, 0].join(',') + ')');
        ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(point.x, point.y, radius, 0, Math.PI * 2); ctx.fill();
        const pearl = ctx.createRadialGradient(point.x - radius * .09, point.y - radius * .09, 0, point.x, point.y, radius * .32);
        pearl.addColorStop(0, 'rgba(250,251,245,' + point.alpha + ')');
        pearl.addColorStop(1, 'rgba(' + [...rgb, point.alpha].join(',') + ')');
        ctx.fillStyle = pearl; ctx.beginPath(); ctx.arc(point.x, point.y, radius * .32, 0, Math.PI * 2); ctx.fill();
      }
    }
  }
  function resize(redraw = true) {
    if (intro) {
      intro.bounds = intro.home.getBoundingClientRect();
      const origin = stage.getBoundingClientRect();
      // Expand in place: keeping the same canvas in the same stacking context
      // avoids tearing down its compositor layer when the entrance finishes.
      canvas.style.left = -origin.left + 'px';
      canvas.style.top = -origin.top + 'px';
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
    }
    const r = canvas.getBoundingClientRect();
    width = r.width; height = r.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Assigning even the same dimensions clears and reallocates the drawing surface.
    const pixelWidth = Math.round(width * dpr), pixelHeight = Math.round(height * dpr);
    if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
    if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
    if (renderer) renderer.resize(); else ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (redraw) draw();
  }
  function tick(time) {
    frame = 0;
    if (paused || (!visible && !intro) || document.hidden) return;
    const elapsed = Math.max(0, time - previousTime);
    const dt = Math.min(elapsed / 1000, .05);
    if (intro) {
      intro.elapsed += elapsed;
      if (intro.elapsed >= 2600) finishIntro(false);
    }
    phase += dt; previousTime = Math.max(previousTime, time);
    const decay = Math.exp(-8 * dt);
    const xStep = (velocityX + 8 * (turnX - aimX)) * dt;
    const yStep = (velocityY + 8 * (turnY - aimY)) * dt;
    velocityX = (velocityX - 8 * xStep) * decay;
    velocityY = (velocityY - 8 * yStep) * decay;
    turnX = aimX + (turnX - aimX + xStep) * decay;
    turnY = aimY + (turnY - aimY + yStep) * decay;
    focusStrength += ((focused ? 1 : 0) - focusStrength) * (1 - Math.exp(-5 * dt));
    draw(); frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame); frame = 0;
    if (paused && intro) finishIntro();
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.querySelector('.motion-label').textContent = paused ? 'Resume motion' : 'Pause motion';
    toggle.querySelector('.motion-symbol').textContent = paused ? '▷' : 'Ⅱ';
    if (!paused && (visible || intro) && !document.hidden) {
      previousTime = performance.now(); frame = requestAnimationFrame(tick);
    }
  }
  toggle.hidden = false;
  toggle.addEventListener('click', () => { paused = !paused; manualPause = paused; sync(); });
  motionPreference.addEventListener('change', event => {
    paused = event.matches || manualPause === true; sync(); draw();
  });
  // Listen on the hero so the foreground title does not block network interaction.
  const interactionArea = stage.closest('.hero') || stage;
  interactionArea.addEventListener('pointermove', event => {
    if (!finePointer.matches || paused || intro) return;
    const r = canvas.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
      aimX = 0; aimY = 0; focused = false; return;
    }
    pointerX = event.clientX - r.left; pointerY = event.clientY - r.top;
    aimX = Math.max(-1, Math.min(1, (pointerX / r.width - .5) * 2));
    aimY = Math.max(-1, Math.min(1, (pointerY / r.height - .5) * 2));
    focused = true;
  });
  interactionArea.addEventListener('pointerleave', () => { aimX = 0; aimY = 0; focused = false; });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting; sync();
    }, { rootMargin: '80px' }).observe(stage);
  }
  new ResizeObserver(() => resize()).observe(stage);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) finishIntro();
    sync();
  });

  function startIntro() {
    const home = document.createElement('span');
    home.className = 'constellation-home';
    home.setAttribute('aria-hidden', 'true');
    canvas.before(home);
    const overlay = document.createElement('div');
    overlay.className = 'constellation-intro';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.dataset.phase = 'hold';
    interactionArea.prepend(overlay);
    intro = { overlay, home, bounds: null, elapsed: 0 };
    document.documentElement.dataset.constellationIntro = 'true';
    resize();
    document.documentElement.removeAttribute('data-intro-pending');
  }
  function finishIntro(redraw = true) {
    if (!intro) return;
    const { overlay, home } = intro;
    intro = null;
    home.remove();
    for (const property of ['left', 'top', 'width', 'height']) canvas.style.removeProperty(property);
    overlay.remove();
    document.documentElement.removeAttribute('data-constellation-intro');
    // The animation loop draws the settled geometry once, in the same frame as
    // the handoff. Avoid a second render with the previous frame's rotation.
    resize(redraw);
  }
  // Scrolling or keyboard navigation never has to wait for the introduction.
  addEventListener('scroll', () => { if (intro && scrollY > 24) finishIntro(); }, { passive: true });
  addEventListener('keydown', event => {
    if (intro && ['Escape', 'Tab', 'Enter', 'PageDown', 'ArrowDown', ' '].includes(event.key)) finishIntro();
  });
  addEventListener('resize', () => resize());
  if (document.documentElement.hasAttribute('data-intro-pending') && !paused && scrollY < 24 && !document.hidden) startIntro();
  else {
    document.documentElement.removeAttribute('data-intro-pending');
    resize();
  }
  sync();
})();

// A light navigation surface and a drawn connecting thread track native scroll.
(() => {
  const thread = document.querySelector('.flow-thread path');
  const length = thread?.getTotalLength();
  if (thread && length) thread.style.strokeDasharray = length;
  let queued = false;
  function update() {
    queued = false;
    document.body.dataset.scrolled = String(window.scrollY > 40);
    if (!thread || !length) return;
    const rect = thread.getBoundingClientRect();
    const progress = motionPreference.matches ? 1 : Math.min(1, Math.max(.12, (innerHeight - rect.top) / (innerHeight * .65)));
    thread.style.strokeDashoffset = length * (1 - progress);
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  motionPreference.addEventListener('change', schedule);
  update();
})();

// Follow the visible chapter without hiding any of the career history.
(() => {
  const journey = document.querySelector('.experience-journey');
  const progress = journey?.querySelector('.timeline-progress');
  const entries = [...document.querySelectorAll('.timeline-entry')];
  if (!journey || !progress || !entries.length) return;
  let queued = false;
  function update() {
    queued = false;
    const rect = journey.getBoundingClientRect();
    const readingLine = innerHeight * .65;
    const positions = entries.map(entry => entry.offsetTop + 44);
    const amount = motionPreference.matches ? 1 : Math.max(0, Math.min(1, (readingLine - rect.top - 44) / Math.max(1, rect.height - 44)));
    let current = -1;
    positions.forEach((top, index) => { if (rect.top + top <= readingLine) current = index; });
    progress.style.transform = `scaleY(${amount})`;
    entries.forEach((entry, index) => {
      entry.classList.toggle('is-reached', motionPreference.matches || index <= current);
      entry.classList.toggle('is-active', index === current && rect.bottom > 115);
    });
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  motionPreference.addEventListener('change', schedule);
  new ResizeObserver(schedule).observe(journey);
  update();
})();
