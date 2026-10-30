# MemoriVerse public website

A standalone static GitHub Pages site, separate from the private mobile app. No build or package installation is needed. These website files use local assets and a small scroll-reveal script, with no remote fonts, forms, analytics or browser storage. GitHub hosting may process request data under its own policies; this README makes no claims about GitHub's retention.

## Pages

- `index.html` — app introduction, current release status, learning overview and existing Gabe artwork.
- `privacy.html` — owner-authorised Privacy Policy, effective 30 October 2026. Describes the first invited-tester release and its privacy commitments. Development blockers are tracked privately in the app repository, not presented as public feature descriptions.
- `support.html` — confirmed support/privacy email, basic help and deletion enquiry contact.
- `404.html` — page-not-found recovery.

All assets are local. The green gradient uses colours sampled from the app logo (#2d5a38, #285535, #0d2a20 and #041e15). `app-welcome.jpg`, `app-learn.jpg` and `app-lesson.jpg` are actual captures of the existing local web app preview at 390×844, showing a guest journey without personal account information; they are labelled as web-preview screenshots on the site. The mobile layout shows the Learn and lesson screens. Smooth native anchor scrolling and progressively enhanced section reveals respect reduced-motion preferences and do not take over wheel or touch scrolling. `assets/memoriverse-logo.png` is copied unchanged from the app's configured `assets/brand/launcher-icon.png`. The guide section uses `assets/angel-guides-v2.png`, a 1536×1024 group pose variation generated with the built-in image tool at the owner's request. Its character/style reference is the existing Canva group asset `MAHZNl_C4jQ` (“MemoriVerse — Gabe Mike Raph — Friends Group — REVIEW”). Mike waves, Gabe holds an open Bible, and Raph rests his hands over his heart. It replaces the single-guide website artwork. No app source, environment files, keys, user data or backend configuration belong in this repository.

## Hosting

Target: `memoriverse-app/memoriverse-website` (PUBLIC), branch `codex/website`, root `/`.
Public website: https://memoriverse.app/

GitHub Settings → Pages → Build and deployment → Deploy from a branch → `codex/website` → `/ (root)` → Save. `.nojekyll` keeps the site buildless. The configured custom domain is `memoriverse.app`, preserved in `CNAME`. Inspect Pages deployment status and verify HTTPS on the custom domain after publishing.

Official configuration instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Privacy publication

Publication of the approved policy was explicitly authorised on 30 October 2026.
The operator is Yolanda King; the contact is memoriverseapp@gmail.com.
Scripture memorisation is learning activity; the app does not infer or profile
religious beliefs. The public page contains no internal reviewer notes or project
identifiers. Its retention targets and unfinished family/cleanup capabilities are
labelled accurately, rather than presented as operating guarantees.

The effective date is 30 October 2026. The custom domain was checked by DNS and
valid HTTPS before publication. Privacy is linked in navigation and footers and
included in the sitemap. Website publication does not authorise app deployments,
database migrations, KWS production activation or real-child data migration.

## Store links

Replace the coming-soon copy with real App Store / Google Play links only after official listings exist. There are deliberately no simulated store buttons.

## Custom domain

`memoriverse.app` is configured in GitHub Pages and `CNAME`. Public canonical URLs, Open Graph page/image URLs, sitemap locations and the robots sitemap address use `https://memoriverse.app/`. The 404 home link points to `/`. Preserve the existing domain and DNS configuration.

Once GitHub has provisioned the domain certificate, enable **Enforce HTTPS** in Settings → Pages. Certificate issuance is managed by GitHub and is separate from these source changes.

Official HTTPS instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Local preview

From this directory: `python3 -m http.server 4177 --bind 127.0.0.1` then open http://127.0.0.1:4177/ . No dependencies are needed. Public URLs target the custom domain root; normal navigation and assets use relative paths.
