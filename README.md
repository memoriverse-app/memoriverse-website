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
Expected GitHub Pages address: https://memoriverse-app.github.io/memoriverse-website/

GitHub Settings → Pages → Build and deployment → Deploy from a branch → `codex/website` → `/ (root)` → Save. `.nojekyll` keeps the site buildless. No custom domain is configured. The expected address is not evidence that deployment has completed; inspect Pages status and load the live pages.

Official configuration instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Publish the final policy

The detailed review draft is deliberately outside this public repository. Merge the owner's policy draft with the verified V1 behaviour before replacing the holding page.

Confirm the legal controller/person or company and contact details; purposes and lawful bases (including religious learning data); exact collected/synced fields and provider arrangements; hosting regions and international transfers; logs, telemetry, cookies/SDK inventory; retention and backup expiry; tested account/child-save deletion and support procedures; speech/notification behaviour; and applicable rights/complaint information. Confirm the effective/publication date. Do not invent these facts from source code.

Support/privacy contact confirmed by the owner on 30 October 2026: memoriverseapp@gmail.com.

After approving the final text, replace only the main policy content, remove `noindex` from that page, update its description and add `privacy.html` to `sitemap.xml`. Keep the same public policy URL. Do not supply the holding notice to app stores as a finished policy. App links and store disclosures are separate release work; this website job does not change the app.

## Store links

Replace the coming-soon copy with real App Store / Google Play links only after official listings exist. There are deliberately no simulated store buttons.

## Optional custom domain

Choose and confirm an owned domain/subdomain and verify it is not already serving iDesignApps or another project. Add it only to this repository's Pages settings, then set the matching DNS records at the provider following GitHub's current documentation. For a subdomain, the DNS CNAME target is `memoriverse-app.github.io` (no repository path). Preserve all unrelated DNS and existing sites. Enable HTTPS after verification and certificate provisioning. Update canonical/OG URLs, sitemap, robots and the absolute 404 home path if the site moves to the domain root.

Official instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Local preview

From this directory: `python3 -m http.server 4177 --bind 127.0.0.1` then open http://127.0.0.1:4177/ . No dependencies are needed. All links work beneath a GitHub project subpath.
