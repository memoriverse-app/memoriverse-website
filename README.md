# MemoriVerse public website

A standalone static GitHub Pages site, separate from the private mobile app. No build or package installation is needed. These website files use local assets and a small scroll-reveal script, with no remote fonts, forms, analytics or browser storage. GitHub hosting may process request data under its own policies; this README makes no claims about GitHub's retention.

## Pages

- `index.html` — app introduction, current release status, learning overview and existing Gabe artwork.
- `privacy.html` — clearly labelled publication holding notice. **Not a completed Privacy Policy.** Excluded from the sitemap and marked noindex until the policy is ready.
- `support.html` — confirmed support/privacy email, basic help and deletion enquiry contact.
- `404.html` — page-not-found recovery.

All assets are local. The green gradient uses colours sampled from the app logo (#2d5a38, #285535, #0d2a20 and #041e15). `app-welcome.jpg`, `app-learn.jpg` and `app-lesson.jpg` are actual captures of the existing local web app preview at 390×844, showing a guest journey without personal account information; they are labelled as web-preview screenshots on the site. The mobile layout shows the Learn and lesson screens. Smooth native anchor scrolling and progressively enhanced section reveals respect reduced-motion preferences and do not take over wheel or touch scrolling. `assets/memoriverse-logo.png` is copied unchanged from the app's configured `assets/brand/launcher-icon.png`. Gabe is the approved original 1254×1254 transparent PNG downloaded directly from Canva, asset `MAHZJBBtH_E` (“MemoriVerse — Angel Welcome — Approved Character · High-resolution Transparent PNG”), in MemoriVerse — Brand Identity → 02 — Angel Mascots. It replaces the app-sized 200px copy so the larger website image remains sharp. No app source, environment files, keys, user data or backend configuration belong in this repository.

## Hosting

Target: `memoriverse-app/memoriverse-website` (PUBLIC), branch `codex/website`, root `/`.
Public website: https://memoriverse.app/

GitHub Settings → Pages → Build and deployment → Deploy from a branch → `codex/website` → `/ (root)` → Save. `.nojekyll` keeps the site buildless. The configured custom domain is `memoriverse.app`, preserved in `CNAME`. Inspect Pages deployment status and verify HTTPS on the custom domain after publishing.

Official configuration instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Publish the final policy

The detailed review draft is deliberately outside this public repository. Merge the owner's policy draft with the verified V1 behaviour before replacing the holding page.

Confirm the legal controller/person or company and contact details; purposes and lawful bases (including religious learning data); exact collected/synced fields and provider arrangements; hosting regions and international transfers; logs, telemetry, cookies/SDK inventory; retention and backup expiry; tested account/child-save deletion and support procedures; speech/notification behaviour; and applicable rights/complaint information. Confirm the effective/publication date. Do not invent these facts from source code.

Support/privacy contact confirmed by the owner on 30 October 2026: memoriverseapp@gmail.com.

After approving the final text, replace only the main policy content, remove `noindex` from that page, update its description and add `privacy.html` to `sitemap.xml`. Keep the same public policy URL. Do not supply the holding notice to app stores as a finished policy. App links and store disclosures are separate release work; this website job does not change the app.

## Store links

Replace the coming-soon copy with real App Store / Google Play links only after official listings exist. There are deliberately no simulated store buttons.

## Custom domain

`memoriverse.app` is configured in GitHub Pages and `CNAME`. Public canonical URLs, Open Graph page/image URLs, sitemap locations and the robots sitemap address use `https://memoriverse.app/`. The 404 home link points to `/`. Preserve the existing domain and DNS configuration.

Once GitHub has provisioned the domain certificate, enable **Enforce HTTPS** in Settings → Pages. Certificate issuance is managed by GitHub and is separate from these source changes.

Official HTTPS instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Local preview

From this directory: `python3 -m http.server 4177 --bind 127.0.0.1` then open http://127.0.0.1:4177/ . No dependencies are needed. Public URLs target the custom domain root; normal navigation and assets use relative paths.
