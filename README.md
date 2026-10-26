# Aureveil — CS2024 website project

A complete static website for an independent skincare brand presentation, featuring Aureveil Daily Sun Serum and Aureveil Cloud Mist in proposed Aureveil packaging. Purchase links open the existing SKIN1004 Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++ 50ml and Cloudy Mist 120ml listings on Shopee, supplied in their original SKIN1004 packaging. Aureveil-branded visuals are packaging mockups, not photographs of goods sold by those listings.

## Open the website

For a quick look, open `index.html` in your browser. For development and accurate Lighthouse checks, use Node.js:

```text
node scripts/server.mjs
```

Then open `http://localhost:4173`. Stop the preview with Ctrl+C.

The generated HTML, CSS, JavaScript, images and fonts work without npm dependencies, a build service or a backend. The optional Node scripts regenerate pages and check local links; visitors do not need Node.js.

## What is included

- Twenty main pages: Home, Sun Serum, Cloud Mist, Duo, Ingredients, Routine Finder, Journal, Our Story, FAQ, Help/Contact, Skin Guide, How to Use, Christmas Gifting, What to Expect, Reviews, Buying Guide, Shipping, Returns, Welcome Offers and the Welcome Kit.
- Privacy notice and Site Map complete the 22-page website.
- Original Aureveil identity, copy, editorial layout and pastel-blue/champagne-gold styling.
- Audience: working adults in Singapore in their late twenties and early thirties (approximately 27–34).
- Locally hosted Aureveil-branded packaging mockups, campaign imagery and fonts, including an original AI-generated editorial portrait. The customer-facing presentation uses standard brand and product language; generation provenance remains in the project documentation.
- Browser-only routine finder with no name/email collection, storage, analytics or network submission.
- Responsive navigation, product galleries, native FAQ disclosures, keyboard-accessible duo dialog and reduced-motion support.
- Existing Shopee product links. No cart, checkout, account or payment collection.
- Proposed retail pricing: Sun Serum S$39.90; Cloudy Mist S$59.90; proposed duo S$84.90, saving S$14.90 against the S$99.80 individual total. These are not enforceable prices or offers on the linked seller's checkout.

## Edit and rebuild

- Page content and shared HTML: `scripts/build.mjs`.
- Design and responsive layout: `assets/site.css`.
- Interactions: `assets/site.js`.
- Exact image/font provenance: `assets/sources.json`.
- Brand, persona, journey, strategy, pricing and project rationale: `planning/project-plan.md`.
- Evidence and citations: `planning/sources.md`.
- Campaign portrait prompt: `planning/image-prompts.md`.
- Five exact Aureveil packaging-image prompts, references and saved paths: `planning/aureveil-image-prompts.json`.

After editing the page source (the build defaults to your supplied GitHub Pages address):

```text
node scripts/build.mjs
node scripts/check.mjs
```

Editing a generated `.html` file directly works for quick changes, but the next build will replace those changes. Edit `scripts/build.mjs` for permanent page-content changes.

## GitHub Pages setup

The current presentation uses normal Aureveil brand copy without prototype notices. GitHub Pages supports HTTPS, but its usage limits restrict sites primarily facilitating commercial transactions. Its separate educational-copy disclaimer requirement specifically concerns copies of existing websites; it is not a blanket requirement for all original student projects. For this retail-style presentation, Cloudflare Pages Direct Upload is the suggested publishing route. GitHub can still hold the source code.

Intended repository: https://github.com/jo3lbenjamin/cs2024-final-project

Previously planned Pages address: https://jo3lbenjamin.github.io/cs2024-final-project/ (the local source build still defaults to this address; the portable upload ZIP removes host-specific metadata until the final URL is known).

To publish the student version yourself:

1. Open the repository above with an account that has write access. GitHub Free Pages requires a public repository; private repository Pages availability depends on the account plan.
2. Upload the contents of this folder so `index.html` is at the repository root. Exclude `reports/` and any `node_modules/`.
3. Open repository **Settings → Pages**.
4. Set the source to **Deploy from a branch**, select **main** and **/(root)**, then save.
5. GitHub will provide the published URL, expected to be `https://jo3lbenjamin.github.io/cs2024-final-project/`.
6. Set that exact URL before the final SEO build so canonical URLs and `sitemap.xml` are correct:

```powershell
$env:SITE_URL = 'https://jo3lbenjamin.github.io/cs2024-final-project/'
node scripts/build.mjs
node scripts/check.mjs
```

7. Upload or commit the regenerated HTML, `robots.txt` and `sitemap.xml`.
8. Run Lighthouse again against the final published URL, then capture the result for the assignment. If GitHub provides a different URL, replace `SITE_URL` and rebuild. No GitHub account, repository or deployment has been created by this local project.

Local verification on 22 October 2026: all twelve pages scored **100/100 for Lighthouse SEO** using Lighthouse 13.5.0. The structure/link check reported zero issues, and 21 DOM interaction checks passed. Desktop and mobile screenshots were inspected. The interaction report records its browser-dialog simulation limits.

Full reports, screenshots and JSON summaries are saved in `reports/`. These results cover the local preview; repeat the audit after GitHub Pages is published. Lighthouse SEO 100/100 is a technical audit result, not a guarantee of search ranking or 20% sales growth.

Primary hosting references:

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## What remains user-specific

The intended repository is supplied, but access and publication have not yet been verified. The assignment's PowerPoint pitch was not requested as part of this local website build; the planning documents provide its source material. Any real sales measurement requires authorised seller data; this website cannot observe completed purchases on an external Shopee store.

## Educational disclosure

Aureveil is an original independent student concept. It is not affiliated with, endorsed by or authorised by SKIN1004 or Shopee. Original manufacturer references and trademarks remain with their owners. Aureveil-branded packaging visuals are AI-generated mockups; the linked SKIN1004 products are supplied in their original packaging. Proposed prices and bundle savings are illustrative. The AI-generated portrait is atmospheric campaign imagery, not a customer or proof of results. Academic context is recorded here and in the planning files rather than shown in the customer-facing copy.

## Brand presentation

Public pages use Aureveil branding and the display names Daily Sun Serum and Cloud Mist. The original marketplace URLs are retained. Manufacturer references remain in research/provenance documentation rather than promotional page text. Prototype and unconfirmed-offer notices have been removed from the public presentation at the user’s request. Product buttons still open the original external Shopee listings, with the duo dialog offering separate links to its two items. This wording does not establish an actual manufactured Aureveil product line.

## Publish with HTTPS using Cloudflare Pages

Use `aureveil-publish.zip` and follow `PUBLISH.txt`. The upload ZIP contains only the twelve pages and active website assets, including font licences. It excludes private project documentation, reports and unused reference photography. Cloudflare Pages provides a free plan and SSL; Direct Upload accepts a folder or ZIP and creates a `pages.dev` address.

The ZIP is portable and omits the earlier GitHub canonical/social URLs and sitemap. Once the final public URL is available, regenerate those values for the actual host and audit that published URL. Regenerate the ZIP after any later website changes before deploying again.

Official references:
- https://www.cloudflare.com/en-gb/developer-platform/products/pages/
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Premium design and motion — 25 October 2026

The editorial refresh uses warm ivory, ice blue and restrained champagne accents, a simplified rectangular hero, larger body text and two matching original Aureveil campaign images. Shared refinements live in `assets/luxury.css`, loaded after the original layout stylesheet.

Progressive enhancements in `assets/site.js` provide staggered hero entrances, below-fold image reveals, product-card image swaps on hover or keyboard focus, preloaded product-gallery crossfades with race/error handling, a scrolled glass header and a sticky Sun Serum ritual story. The story stacks on phones and when reduced motion is requested. Native cross-document view transitions enhance supported browsers; normal links work elsewhere. No Bootstrap, GSAP, remote JavaScript, analytics or video dependency is required.

All content remains visible without animation support. Reduced-motion preferences disable entrances/reveals and transitions; keyboard focus reveals its containing content immediately. Gallery status updates are announced politely.

Exact built-in image-generation prompts and original output paths are recorded in `planning/luxury-image-prompts.json`. Local responsive WebP exports are in `assets/images/aureveil-sun-campaign*.webp` and `assets/images/aureveil-mist-campaign*.webp`; the originals are retained. These are campaign illustrations, not product results or customer testimonials.

The preview server accepts an optional PORT environment variable and defaults to 4173. Run `node scripts/check.mjs` after rebuilding. Local browser and Lighthouse checks cover the homepage on desktop/mobile; DOM integration checks cover navigation, quiz branches, galleries, reduced motion and the scroll story. The public site is hosted at https://jo3lbenjamin.github.io/cs2024-final-project/.

## Expanded product guidance — 26 October 2026

The site now contains 21 pages (19 main pages plus Privacy and Site Map). New pages are `skin-guide.html`, `how-to-use.html`, `christmas.html`, `what-to-expect.html` and `reviews.html`. The existing ingredients page was rebuilt as an interactive, illustrated ingredient-role guide. Expanded page templates, navigation and footer are in `scripts/expansion.mjs`, imported by the main build script. Existing page source remains in `scripts/build.mjs`; shared styles and browser interactions remain in the local assets.

- Skin guide: texture-based starting points, ingredient references, sensitivity considerations and a link to AAD new-product testing guidance. Ingredient lists are dated references, not confirmation of the current Shopee batch. Product packaging remains the final reference.
- Ingredient explorer: four selectable roles with a native SVG illustration and finite, replayable Web Animations. Buttons support click, Tab and arrow/Home/End keys. Reduced-motion preferences cancel animation and leave the information usable. The diagram illustrates roles; it is not a clinical simulation.
- Application guide: original application photographs and numbered steps for sunscreen and mist, with AAD sunscreen guidance.
- Christmas edit: a seasonal gift campaign with three budget anchors and existing product prices. No additional discount, delivery deadline, gift-wrap inclusion or seller promotion was invented.
- What to expect: texture, finish, routine-building and realistic expectations. No seven-day whitening or anti-ageing promise, before/after result or clinical statistic was added.
- Customer reviews: clear links to actual buyer feedback on the supplied Shopee listings. No reviews, stars, customer identities or review schema were fabricated or copied.

New editorial/application images were generated with built-in image_gen. Original PNGs are retained locally; local WebP exports have 1200px, 600px and thumbnail variants. Exact prompts, reference roles and output paths are in `planning/expansion-image-prompts.json`; provenance is in `assets/sources.json`. Application photographs depict illustrative models, not customers or treatment results.

New interactions process preferences only within the current page. No submission, storage, tracking or external JavaScript was introduced. The original Shopee purchase destinations remain unchanged.

Buyer guidance now includes product-level facts and reviews, mobile purchase shortcuts, searchable FAQs, seller-question copying, a Buying Guide, Shipping and Returns pages. Source notes are in planning/buying-guide-sources.json.

## Buyer confidence and welcome pricing update

New pages: `offers.html`, `buying-guide.html`, `shipping.html` and `returns.html`. Product pages include decision facts, unit pricing, dated review excerpts, welcome prices, application/product-care questions and mobile purchase shortcuts. The FAQ has browser-only search; help includes optional clipboard copying of seller questions. The welcome calculator uses integer cents and supports the three products with or without first-purchase eligibility. Base prices remain S$39.90, S$59.90 and S$84.90; welcome prices are S$35.91, S$53.91 and S$76.41. The duo saves S$14.90 before the welcome saving.

These are assignment frontend prices. The website does not issue a Shopee voucher, validate customer eligibility, create an order or change Shopee checkout. The user requested retaining the own-brand presentation. No new payment integration or on-site checkout has been introduced. Official research and generated image provenance are in `planning/buying-guide-sources.json` and `planning/buying-image-prompt.json`.

## Complimentary Welcome Kit

Every product includes two Sun Serum discovery sachets and a printed ritual card. The duo also includes an Everyday Pouch and pocket mirror, with gift bag, tissue and blank message card on request. The Welcome Kit page includes three original printable PDFs and a browser-generated optional calendar reminder.

The approved assignment policy allows a sample-first return requested within 14 days of delivery for an unopened, sealed full-size product. Reusable gifts and unused samples accompany the return; used sachets are exempt. Customer-paid change-of-mind return postage and excluded original delivery charges are stated clearly. Actual linked seller fulfilment and return approval are not integrated or established by this website. Copy buttons only copy text; they do not send requests or place orders.

Sources: `scripts/welcome-kit.mjs`, `scripts/generate-gift-pdfs.py`, `planning/welcome-kit-sources.json` and `planning/welcome-kit-image-prompts.json`. PDFs are committed static assets; regenerating them requires ReportLab, fontTools and Pillow. No Python dependency is needed to visit or deploy the site.
