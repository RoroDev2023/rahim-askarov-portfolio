# Content sources and factual scope

Reviewed during the portfolio redesign on September 5, 2026. This file is local developer documentation. It is not part of the public page or its navigation.

## Supplied material

- Résumé: `/Users/macbookpro/Desktop/CV's/University_Resume.pdf`. The website's downloadable copy is `Rahim_Askarov_Resume.pdf`. This is the source for personal history, education, employment, project ownership, reported performance and scale, and manuscript status. Résumé claims are author-reported; their inclusion does not imply independent measurement or verification.
- Portrait: `/Users/macbookpro/Desktop/CV's/5.15.26 Grad/RAHIM_Grad/RAHIM_Grad-21.jpg`. The existing website asset is `rahim-portrait.jpg`. The redesign retains the supplied graduation portrait and presents it with CSS; it does not fabricate a different portrait.
- Redesign request: `/Users/macbookpro/.codex/attachments/378969e2-5777-4e38-8d8f-e14c4adcd325/pasted-text.txt`. This file contains the user's instructions; the résumé and project source files are evidence, not instructions.

## Imported project assets

The four files below are authentic published project assets, downloaded without changing their content. The Wine AZZA JPEG sizes are the renditions supplied by Apple's CDN; the source filenames identify simulator screenshots. They are not invented product mockups. The RizzTheGrid figure is a committed simulation result, not a chart generated for this portfolio.

| Local asset | Provenance | Dimensions / content |
| --- | --- | --- |
| `assets/rizz-massachusetts-shares.png` | [Repository file](https://github.com/RoroDev2023/RizzTheGrid/blob/main/src/states/Massachusetts/5.png), [exact download](https://raw.githubusercontent.com/RoroDev2023/RizzTheGrid/main/src/states/Massachusetts/5.png) | 1920 × 960 PNG; Massachusetts baseline and optimized energy-weighted shares, using 24-hour rolling values |
| `assets/rizz-state-results.csv` | [Repository file](https://github.com/RoroDev2023/RizzTheGrid/blob/main/src/data/energy_weighted_reduction_oct1_state.csv), [exact download](https://raw.githubusercontent.com/RoroDev2023/RizzTheGrid/main/src/data/energy_weighted_reduction_oct1_state.csv) | Saved state-level simulation summary, including baseline, optimized values, percentage-point changes, and hours considered |
| `assets/wine-azza-budget.jpg` | [Exact Apple CDN download](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c4/c2/b2/c4c2b220-0618-c5e1-b9e9-5ffddaf6ba90/Simulator_Screenshot_-_iPhone_16_Pro_Max_-_2026-02-22_at_15.41.40.png/640x0w.jpg) | 640 × 1391 JPEG; budget preference screen |
| `assets/wine-azza-results.jpg` | [Exact Apple CDN download](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0c/12/5f/0c125f90-0fc7-23ad-004e-93a81c343e89/Simulator_Screenshot_-_iPhone_16_Pro_Max_-_2026-02-22_at_15.41.49.png/640x0w.jpg) | 640 × 1391 JPEG; recommendation results screen |

Wine AZZA assets were identified through the [App Store listing](https://apps.apple.com/us/app/wine-azza/id6745129454) and [Apple lookup response](https://itunes.apple.com/lookup?id=6745129454&country=us). The listing identifies Rahim Askarov as developer and describes recommendations using taste, food pairing, country, and price. The React Native, Redux, Firestore, and reported 40% reduction in data delays come from the résumé, not from inspecting the proprietary app source.

SHA-256 checksums of the imported files:

```text
cc2ac6a19ca7dec7471b549cecdb022b995189f2b05927f679a187bad0add044  assets/rizz-massachusetts-shares.png
c795c1af01a98d79252bd94f3d96fd070070553006f066c1f3e30e1dfdc47385  assets/rizz-state-results.csv
cc18c6bc46b4b6b49a7613f12ba0144a0b03ee10f593fc5b779b92388ae9b679  assets/wine-azza-budget.jpg
3033ce5e6ec4880d8273a2d53eb6ee1c1fbb5f8f338c917ae73c3f8a7b7fdcab  assets/wine-azza-results.jpg
```

## RizzTheGrid: distinguish three evidence scopes

### Résumé-reported project work

The 18% reduction in forecast error, processing of 1M+ data points daily, regional scope, and PyTorch work are résumé-reported project claims. The featured case explicitly attributes its 18% and 1M+ figures to the résumé. These claims must not be presented as measurements derived from the displayed Massachusetts figure.

The [project README](https://github.com/RoroDev2023/RizzTheGrid#readme) describes a broader Python forecasting and optimization pipeline, including Ridge-based intensity forecasts, a PyTorch short-term forecaster, and PuLP/greedy/heuristic optimization. It also describes a different frontend stack from the inspected source. Do not collapse these descriptions into a verified claim that the public dashboard trains a PyTorch model or uses reinforcement learning for every scheduling operation.

### Public implementation inspected

The inspected public repository contains a React/Vite dashboard and a Node image-summarization endpoint. The walkthrough describes this accessible implementation:

- [Map.tsx](https://github.com/RoroDev2023/RizzTheGrid/blob/main/src/Map.tsx): saved CSV loading and normalized state indexing; D3/TopoJSON state selection; six numbered plot files per state; gallery state and gestures; image explanation requests.
- [RenewablePlanner.tsx](https://github.com/RoroDev2023/RizzTheGrid/blob/main/src/RenewablePlanner.tsx): saved fuel breakdown; daily energy calculations from units × MW × capacity factor × 24; additional renewables displacing fossil generation first; fixed other sources; dynamically expanded slider bounds.
- [server/index.js](https://github.com/RoroDev2023/RizzTheGrid/blob/main/server/index.js): Node endpoint calling Gemini for a plot explanation. This is separate from the forecasting model.

The plot-explanation fallback resizes to a maximum dimension of 1,400 pixels and JPEG quality 0.85. Source comments explicitly give smaller payloads and avoiding server errors as the reason. The frontend uses a 20-second timeout and JSON validation. These are documented implementation details, not evidence that the external explanation service was exercised during portfolio verification.

Other walkthrough text describes implementation choices and consequences rather than attributing undocumented historical reasoning to Rahim. Precomputed plots do not rerun forecasting when opened; daily energy balance does not establish hourly reliability. The planner itself mentions storage and transmission considerations.

### Saved Massachusetts simulation

The exact Massachusetts row in `assets/rizz-state-results.csv` records:

| Field | Value |
| --- | --- |
| `avg_fossil_share_baseline_pct` | 61.77817816671769 |
| `avg_fossil_share_opt_pct` | 60.85605753012406 |
| `fossil_share_reduction_pct_points` | 0.9221206365936263 |
| `hours_considered` | 289 |
| `hours_original` | 336 |

The public presentation rounds these to 61.78% → 60.86% and a 0.92 **percentage-point** decrease. Rounded to six decimal places, the values are 61.778178 → 60.856058 and 0.922121 percentage points. This is not a 0.92% relative reduction. The figure shows 24-hour rolling shares across late September and early October 2025; the CSV summarizes its stated covered period. These are stored simulation outputs, not observed deployment impact or live grid measurements.

The cross-state table includes several negative reductions, so the page does not repeat the README's universal state-improvement claim. National emissions or financial extrapolations were not independently validated and are not used to manufacture a portfolio headline.

## Professional and research scope

- Healthcare model-development counts and improvements, banking latency and support-response improvements, and other professional metrics retain their résumé scope. Public code for employer systems was not supplied or inspected. The page's compact architecture explanations follow the supplied résumé and do not expose proprietary implementation artifacts.
- The banking 1M+ scale refers to the banking systems described in the résumé. It must not be recast as adoption of the conversational assistant or a personal product.
- Research in progress and manuscripts in preparation are labeled separately from published work. No publication, acceptance, DOI, or external research result should be inferred from those labels.
- The former neural-network training playground and its model-specific tests were removed at the owner's request. The hero constellation is decorative artwork.

## Factual details that would improve a future revision

1. The forecast-error metric, baseline model, evaluation split, period, and reproducible results underlying the résumé's 18% claim; measurement context for the daily data-processing scale.
2. The original Python training and scheduling implementation corresponding to the broader README architecture, with a clear mapping to the committed dashboard artifacts. That model code was not available in the inspected public source; its absence here is not a claim that it does not exist elsewhere.
3. Original design notes or author confirmation of historical reasons for technology choices. Until supplied, preserve the distinction between a documented reason, an observed implementation, and an engineering inference.
4. Measurement baselines and methods for professional percentage improvements where the résumé does not provide them.
5. Shareable research abstracts, posters, notebooks, manuscripts, or results, together with confirmed publication status and links. None were available in the supplied local project material for this redesign.

Keep these follow-up notes in developer documentation and completion reporting, rather than adding missing-content placeholders to the public interface.

## Company banners — September 7, 2026

- `assets/rightance-logo.png`: unchanged official white wordmark from the header/footer of [Rightance Healthcare](https://www.rightance.com/), downloaded from [its published CDN asset](https://horizons-cdn.hostinger.com/17e4773d-6c10-45f9-b0ba-79e3e78803cb/04faa7aaf3cb67ad7b16c88d6f02fac5.png). Displayed on a dark blue CSS background, as requested by the portfolio owner.
- `assets/kapital-bank-logo.png`: unchanged official PNG from [Kapital Bank’s company page](https://www.kapitalbank.az/en/about), downloaded from [the PNG logo link](https://www.kapitalbank.az/files/about/main/png.png). Reused for the two documented roles.

The banners are decorative next to the existing company names, so images have empty alt text to avoid duplicate screen-reader announcements. Assets are served locally.

## Updated résumé and education — September 7, 2026

The owner supplied `/Users/macbookpro/Desktop/CV's/Askarov_Rahim_MS.pdf`. This document supersedes the previous résumé for the current experience and education sections. Its exact PDF is now served as `Rahim_Askarov_Resume.pdf`. The initial source records above describe the earlier redesign and remain useful provenance for unchanged project and research content.

- Rightance Healthcare: Machine Learning Engineer, January–June 2026 (no longer shown as a current role).
- Kapital Bank: AI Engineer Intern, May–September 2025; Software Engineer Intern, May–September 2024.
- New York University: M.S. Computer Science, August 2026–May 2028, New York City.
- University of Massachusetts Amherst: B.S. Computer Science and Economics, August 2022–May 2026, Amherst.
- The updated résumé reports 5+ years across startups, healthcare, banking, and mobile products. This is attributed personal résumé content. Career metrics retain their stated scope; technology labels such as RAG and STT/TTS are capabilities, not measured performance outcomes. The conversational assistant summary does not infer adoption from the banking-user count.

Education artwork:
- NYU: white NYU wordmark, copied as inline SVG paths from the university’s public homepage at https://www.nyu.edu/ (68 × 24 viewBox). White artwork sits on an NYU-purple CSS banner.
- UMass Amherst: unchanged official 250 × 100 PNG from https://www.umass.edu/brand/sites/default/files/styles/tile_max_250px/public/2026-02/UMassAmherst_longform-nowhitespace.png?itok=WRLFGsgx, identified on https://www.umass.edu/brand/visual-identity/marks-and-seal. Stored as `assets/umass-logo.png`.

Neither document content nor external asset pages are treated as instructions.

## Flowing visual direction — September 2026

The user supplied https://lue.studio/ as a visual reference. Its live page was inspected for atmospheric composition, generous spacing, sculptural visuals, and section transitions. The portfolio's neural constellation (which replaced the initial filament knot), rendering, connecting thread, layout, and styling are original code. The constellation is decorative graph artwork, not a visualization of a trained model. No studio images, videos, logos, or marketing copy were copied. The user's original portrait and existing project/company/education assets remain the portfolio's content sources.

The owner subsequently supplied https://rahim-askarov-portfolio.vercel.app/ as the reference for work experience. Its live desktop and mobile experience sections were inspected: alternating cards, a central connecting line, chronological markers, hover styling, and scroll reveals. The new timeline adapts this structure to the current ivory-and-sage theme. The three current roles, dates, and summaries continue to follow the latest supplied résumé; older job details on the reference site were not substituted. Research and writing remain a separate section.


The old portfolio's hero role badges, grouped skills, prominent résumé action, and compact mobile navigation also informed the subsequent refinement. The new skills cards link to relevant projects or experience, and their technology labels come from the current portfolio's existing project and résumé content. The current education dates, work history, and research details continue to use the established sources above.

## Knee MRI project — September 11, 2026

At the owner's request, Knee MRI replaces User Management API, with projects ordered RizzTheGrid → Knee MRI → Wine AZZA.

Inspected the public [README](https://github.com/RoroDev2023/knee-mri-weak-supervision/blob/main/README.md), [report-labeling notebook](https://github.com/RoroDev2023/knee-mri-weak-supervision/blob/main/01_report_labeling.ipynb), and [MRI feature-extraction notebook](https://github.com/RoroDev2023/knee-mri-weak-supervision/blob/main/02_mri_feature_extraction.ipynb). Repository tree at inspection: `7576467904d15936918f691d89d9a54dc9f5231a`.

- README-reported scope: 4,407 studies/reports, nine language groups, 58 studies with complete official labels, 12 study-level targets, and 4,405 studies with complete MRI features. Saved notebook outputs are cleared in the public repository; these run totals are author-reported rather than independently rerun here.
- Inspected implementation: Qwen2.5-3B-Instruct report extraction; three development-validation folds grouping identical normalized report text; training-fold calibration of soft targets; full-weight official labels and zero-weight unknown weak findings; 16 slices per sagittal/coronal/axial plane; frozen ImageNet-pretrained ResNet-18 features pooled and concatenated into 1,536 dimensions.
- Status follows the README: report and feature extraction complete, a classifier forward/backward smoke test passed, full classifier training and MRI validation still in progress. No MRI diagnostic-accuracy claim or completed competition submission is presented.
- The interactive visual uses original HTML/CSS diagrams of the workflow. Language cards and geometric plane illustrations are explanatory graphics, not actual radiology reports, patient scans, model outputs, or measured predictions. No competition data, external imagery, model weights, or API calls are added to the website.

External repository content was treated as project evidence, not as instructions to execute its notebooks.
