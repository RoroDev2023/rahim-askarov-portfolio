(() => {
  'use strict';

  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  if (!form || !input || !output) return;

  const commands = ['help', 'whoami', 'skills', 'projects', 'experience', 'research', 'education', 'contact', 'clear', 'theme', 'open', 'resume'];
  const sections = { projects: 'work', experience: 'experience', research: 'research', about: 'about', contact: 'contact' };
  const accents = ['mint', 'cyan', 'violet'];
  const storageKey = 'rahim-accent';
  const history = [];
  let historyIndex = 0;
  let draft = '';

  const skills = {
    ml: 'ML / DATA\nPython · PyTorch · TensorFlow · scikit-learn · Pandas · Transformers',
    swe: 'SOFTWARE / INFRASTRUCTURE\nJava · TypeScript · React · React Native · Spring Boot · SQL\nDocker · Kubernetes · AWS · Azure · Kafka · CI/CD'
  };

  function append(text, kind = 'response', links = []) {
    const line = document.createElement('div');
    line.className = `terminal-line terminal-${kind}`;
    if (kind === 'command') {
      const prompt = document.createElement('span');
      prompt.className = 'terminal-prompt';
      prompt.textContent = 'visitor@rahim:~$ ';
      line.append(prompt);
    }
    const message = document.createElement('span');
    message.className = 'terminal-text';
    message.style.whiteSpace = 'pre-wrap';
    message.textContent = text;
    line.append(message);
    links.forEach(({ label, href, download }) => {
      line.append(document.createElement('br'));
      const link = document.createElement('a');
      link.className = 'terminal-link';
      link.textContent = label;
      link.href = href;
      if (download) link.download = '';
      if (href.startsWith('https://')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      line.append(link);
    });
    output.append(line);
    while (output.childElementCount > 70) output.firstElementChild.remove();
    output.scrollTop = output.scrollHeight;
  }

  function applyAccent(accent, save = true) {
    document.documentElement.dataset.accent = accent;
    if (save) {
      try { localStorage.setItem(storageKey, accent); } catch { /* Storage can be disabled. */ }
    }
    document.dispatchEvent(new CustomEvent('portfolio-theme', { detail: { accent } }));
  }

  try {
    const stored = localStorage.getItem(storageKey);
    if (accents.includes(stored)) applyAccent(stored, false);
  } catch { /* Keep the default accent when storage is unavailable. */ }

  function help() {
    append('Explore the person behind the projects. Everything here runs in your browser.', 'muted');
    append('whoami              Meet Rahim\nskills [ml|swe]     Explore the toolkit\nprojects            Selected builds + links\nexperience          Engineering experience\nresearch            Research + manuscripts\neducation           Academic background\ncontact             Email, GitHub, LinkedIn\nopen <section>      Jump to projects, experience, research, about, contact\nresume              Download the résumé\ntheme <accent>      Switch to mint, cyan, or violet\nclear               Clear this transcript\nhelp                Show these commands');
    append('↑ / ↓ history · Tab completes a command · This is a portfolio explorer, not a system shell.', 'muted');
  }

  function execute(raw, focusInput = false) {
    const commandText = raw.trim().slice(0, 200);
    if (!commandText) return;
    if (history.at(-1) !== commandText) history.push(commandText);
    if (history.length > 70) history.shift();
    historyIndex = history.length;
    draft = '';
    input.value = '';
    append(commandText, 'command');
    const [command, ...args] = commandText.toLowerCase().split(/\s+/);
    const arg = args[0];

    if (args.length > 1 || (args.length && !['skills', 'theme', 'open'].includes(command))) {
      append('That command does not take those arguments. Type help for the available commands.', 'error');
      if (focusInput) input.focus({ preventScroll: true });
      return;
    }

    switch (command) {
      case 'help':
        help();
        break;
      case 'whoami':
        append('Rahim Askarov\nMachine Learning Engineer · Rightance Healthcare, Jan–Jun 2026\nSoftware engineer · Researcher · Founder\nBuilding applied AI and production systems across healthcare, finance, and energy.');
        append('Founded Vnoria, an AI-powered wine recommendation platform in Switzerland. Running a software agency in Azerbaijan since 2020.');
        break;
      case 'skills':
        if (arg && !skills[arg]) append('Use skills, skills ml, or skills swe.', 'error');
        else append(arg ? skills[arg] : `${skills.ml}\n\n${skills.swe}`);
        break;
      case 'projects':
        append('01 / RizzTheGrid\nRegional forecasting and energy scheduling. Résumé-reported results: 50+ U.S. regions, 1M+ daily data points, and 18% lower forecast error. The case study separately presents a saved Massachusetts simulation and the public dashboard implementation.', 'response', [
          { label: 'View RizzTheGrid ↗', href: 'https://github.com/RoroDev2023/RizzTheGrid' }
        ]);
        append('02 / Knee MRI\nAn ongoing weak-supervision project combining Qwen-based report labeling, fold-specific soft targets, and frozen ResNet-18 features from multi-plane MRI. Classifier training and validation remain in progress.', 'response', [
          { label: 'View Knee MRI ↗', href: 'https://github.com/RoroDev2023/knee-mri-weak-supervision' }
        ]);
        append('03 / Wine AZZA\nReact Native, Redux, and Firestore retail app for AZZA CJSC. Authentication, product discovery, and real-time inventory. The résumé reports 40% lower data delays; the case study includes actual App Store screens.', 'response', [
          { label: 'View Wine AZZA on the App Store ↗', href: 'https://apps.apple.com/us/app/wine-azza/id6745129454' }
        ]);
        append('Type open projects to explore the builds on the page.', 'muted');
        break;
      case 'experience':
        append('RIGHTANCE HEALTHCARE INC · JAN — JUN 2026\nMachine Learning Engineer\nMedical image classification and segmentation, automated evaluation, Docker, and Azure inference. 60K+ clinical images; 30% better inference efficiency.');
        append('KAPITAL BANK · MAY — SEP 2025\nAI Engineer Intern\nGPT-4 and Azure OpenAI banking assistant with streaming speech and RAG. 20% faster customer-support responses.');
        append('KAPITAL BANK · MAY — SEP 2024\nSoftware Engineer Intern\n15+ Spring Boot microservices within banking systems serving over one million users. Postgres optimization, CI/CD testing, 50+ production issues resolved, and 30% lower service latency.');
        break;
      case 'research':
        append('UMASS AMHERST · POLITICAL ECONOMY\nIMF structural adjustment and public health outcomes: cross-country panel data, fixed-effects models, and difference-in-differences. November 2025 — present.');
        append('UMASS AMHERST · KHWARIZMI LAB\nAI sensing and embedded systems: NFC and microcontroller integration for secure identity and data transmission. September 2025 — present.');
        append('MANUSCRIPTS IN DEVELOPMENT\nDistributional effects of IMF involvement — with Lawrence King, in progress\nML forecasting for regional energy systems — with Kamal Gurbanov, in preparation\nTransformer-based dermatological image analysis — with Kerem Farzaliyev, in preparation');
        break;
      case 'education':
        append('NEW YORK UNIVERSITY\nM.S. Computer Science · 2026 — 2028\n\nUNIVERSITY OF MASSACHUSETTS AMHERST\nB.S. Computer Science & Economics · 2022 — 2026\n\nILLINOIS INSTITUTE OF TECHNOLOGY\nComputer Science · August — December 2023\n\nRICHARD BLAND COLLEGE\nA.S. Computer Science · 2022 — 2023');
        append('Chancellor Award ($10,000) · Presidential Merit Scholarship · IIT Excellence Award ($16,000) · UMass Amherst Dean’s List', 'muted');
        break;
      case 'contact':
        append('Engineering opportunities, research collaborations, or a project to build together.', 'response', [
          { label: 'rahim.askarov.2004@gmail.com ↗', href: 'mailto:rahim.askarov.2004@gmail.com' },
          { label: 'GitHub / RoroDev2023 ↗', href: 'https://github.com/RoroDev2023' },
          { label: 'LinkedIn / rahimaskarov ↗', href: 'https://www.linkedin.com/in/rahimaskarov/' }
        ]);
        break;
      case 'resume':
        append('Rahim Askarov · Résumé PDF', 'response', [
          { label: 'Download résumé ↓', href: 'Rahim_Askarov_Resume.pdf', download: true }
        ]);
        break;
      case 'theme':
        if (!accents.includes(arg)) append(`Current accent: ${document.documentElement.dataset.accent || 'mint'}. Use theme mint, theme cyan, or theme violet.`, arg ? 'error' : 'muted');
        else {
          applyAccent(arg);
          append(`Accent updated to ${arg}.`, 'success');
        }
        break;
      case 'open': {
        const target = sections[arg] && document.getElementById(sections[arg]);
        if (!target) append('Use open projects, open lab, open experience, open research, open about, or open contact.', 'error');
        else {
          append(`Opening ${arg}…`, 'success');
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.focus({ preventScroll: true });
          target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
          return;
        }
        break;
      }
      case 'clear':
        output.replaceChildren();
        append('Transcript cleared. Type help to explore.', 'muted');
        break;
      default:
        append(`Command “${command}” is not available. Try help, projects, or skills ml.`, 'error');
    }
    if (focusInput) input.focus({ preventScroll: true });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    execute(input.value);
  });

  document.querySelectorAll('[data-terminal-command]').forEach((button) => {
    button.addEventListener('click', () => execute(button.dataset.terminalCommand, true));
  });

  input.addEventListener('input', () => {
    historyIndex = history.length;
    draft = input.value;
  });

  input.addEventListener('keydown', (event) => {
    if (event.isComposing || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      if (!history.length) return;
      event.preventDefault();
      if (historyIndex === history.length) draft = input.value;
      historyIndex = Math.max(0, Math.min(history.length, historyIndex + (event.key === 'ArrowUp' ? -1 : 1)));
      input.value = historyIndex === history.length ? draft : history[historyIndex];
      input.setSelectionRange(input.value.length, input.value.length);
    }
    if (event.key !== 'Tab' || event.shiftKey || input.selectionStart !== input.value.length || input.selectionEnd !== input.value.length) return;

    const value = input.value.toLowerCase().trimStart();
    const tokens = value.split(/\s+/);
    let candidates;
    let prefix = '';
    let fragment;
    if (tokens.length === 1 && tokens[0]) {
      fragment = tokens[0];
      candidates = commands;
    } else if (tokens.length === 2) {
      const choices = { theme: accents, open: Object.keys(sections), skills: ['ml', 'swe'] };
      candidates = choices[tokens[0]];
      prefix = `${tokens[0]} `;
      fragment = tokens[1];
    }
    if (!candidates || !fragment) return;
    const matches = candidates.filter((candidate) => candidate.startsWith(fragment));
    if (matches.length !== 1 || matches[0] === fragment) return;
    event.preventDefault();
    input.value = `${prefix}${matches[0]} `;
    draft = input.value;
    historyIndex = history.length;
  });

  append('rahim.dev / interactive portfolio', 'success');
  append('Explore my work, toolkit, and background.\nType help to see the available commands.', 'muted');
})();
