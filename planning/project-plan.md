# Aureveil — project and campaign plan

Planning date: 22 October 2026 (Singapore time).

This is repository documentation for a CS2024 student website. It records the choices agreed in the conversation and the proposed campaign. It is not an authorised SKIN1004 retail operation, a confirmed marketplace promotion, or a report of achieved sales.

## Agreed direction

- **Brand:** Aureveil, an independent student retail concept curating existing SKIN1004 products.
- **Hero product:** Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++, 50 ml.
- **Supporting product:** Madagascar Centella Hyalu-Cica Cloudy Mist, 120 ml.
- **Bundle concept:** Protect + Refresh Duo, containing one of each product.
- **Purchases:** product links lead to the existing Shopee listings supplied by the user. There is no cart, checkout, order processing, payment collection, inventory system, or claim of official partnership.
- **Audience:** young working adults in Singapore in their late twenties and early thirties, approximately 27–34, who care about appearance and are beginning to notice changes they associate with busy working life, stress and late nights.
- **Look:** spacious editorial layouts, pastel blue, warm gold accents, soft gradients and visuals that suggest freshness and confidence.
- **Technology:** responsive static HTML, CSS and JavaScript; professional libraries are permitted, but a framework is not a requirement.
- **Hosting recommendation:** GitHub Pages for this clearly labelled educational demonstration, subject to GitHub's terms and education requirements. Publishing is a separate step.
- **Deliverable now:** website and accompanying project documentation. A PowerPoint has not been commissioned in this implementation stage.

## Assignment checklist

These items reflect the assignment requirements discussed in the conversation; this document does not claim to replace or independently re-verify the NTULearn brief.

| Requirement | Implementation plan |
| --- | --- |
| Sales website for a Shopee/Lazada product | Two user-supplied Shopee listings, presented under original Aureveil campaign branding |
| At least nine pages, excluding Privacy Policy | Ten substantive pages, plus Privacy and Accessibility utility pages |
| Original content and research | Original audience-focused copy with a source register; reference sites inform hierarchy and storytelling |
| Call-to-action form | Interactive, browser-only Routine Finder with structured non-identifying choices |
| PDPA consideration | Data-minimising design, accurate privacy statement and explicit external-platform notice |
| Sales-growth objective | Proposed 20% sales growth within three months; no claim that this has been achieved |
| Lighthouse SEO score | Target 100/100; record actual test results and retest the published origin |
| Design-thinking/report topics | Persona, journey, sitemap, creative brief, typography, theme, page breakdown, SEO and marketing strategy below |

## Creative brief

**Campaign line:** Care for today. Glow into tomorrow.

**Brand proposition:** Thoughtful daily skincare for long days and full lives.

**Customer problem:** A busy professional wants a simple, comfortable routine that supports a healthy-looking complexion without adding complexity to the morning. They want to understand what the products do, how to use them together, and what they will pay before leaving for Shopee.

**Promise:** Make daily sun protection and refreshing hydration easy to understand and easy to fit into a working day.

**Reason to believe:** The manufacturer describes the Sun Serum as a lightweight hydrating sunscreen with SPF50+ PA++++ and the Cloudy Mist as a moisturising facial mist with a dewy finish. These descriptions support product education, not claims to reverse ageing or extend life. See [the source register](sources.md).

**Tone:** calm, encouraging, precise and informed. Speak to routine consistency and comfort. Avoid shaming visible ageing, implying the reader looks old, or promising to undo the effects of stress and sleep loss.

**Differentiation:** Aureveil's concept is the curation, explanation and routine experience around the two products. SKIN1004 remains the manufacturer. The website should not imply Aureveil developed the formulas, is an authorised stockist, or has a supply agreement.

## Proposed persona

This is a planning hypothesis for user research, not a participant interview or verified audience segment.

| Attribute | Proposed persona |
| --- | --- |
| Name for planning | The busy professional |
| Age and setting | 32, working in Singapore |
| Daily context | Commute, office air-conditioning, meetings, occasional late evenings and social plans |
| Desired outcome | Comfortable, hydrated, healthy-looking skin and a routine that feels manageable |
| Concerns | Early visible changes, heavy or sticky sunscreen, makeup compatibility and confusing product claims |
| Buying questions | What does each product do? How do they fit my day? What is the proposed price? Where do I buy? |
| Decision criteria | Clear product details, pleasant texture description, transparent prices, useful instructions and credible sources |
| Primary action | Read the Sun Serum details, then open its Shopee listing |
| Supporting action | Complete the Routine Finder and explore the Duo concept |

Validate the hypothesis with short interviews or usability sessions, including participants in both their late twenties and early thirties. Ask about current sunscreen habits, reasons for skipping use, morning time constraints and purchasing concerns. Do not collect medical history or unnecessary personal details for this student site.

## User journey

| Stage | Customer question | Website response | Desired next action |
| --- | --- | --- | --- |
| Discover | Can this fit a busy day? | Home hero, simple promise, real product visual and visible Sun Serum CTA | Visit Sun Serum |
| Understand | Why sunscreen, and what will it feel like? | Benefits, size, finish, ingredient explanations and source-backed education | Read how to use |
| Evaluate | Do I need the mist too? | Product roles, transparent Duo comparison and FAQ | Compare the two products |
| Personalise | How could I fit this into my day? | Non-identifying Routine Finder form and immediate on-page result | View recommended routine |
| Act | Where do I buy and what will it cost? | Proposed price clearly labelled; external Shopee button and seller-price notice | Open existing Shopee listing |
| Continue | How do I maintain the habit? | Journal and routine tips, including sunscreen reapplication guidance | Return to guidance when useful |

The Routine Finder is educational navigation, not a diagnosis or personalised medical recommendation. It should not imply that hydration replaces UV protection.

## Sitemap and page breakdown

| File | Page purpose | Primary action |
| --- | --- | --- |
| `index.html` | Introduce Aureveil, hero product, supporting mist and the routine concept | Explore Sun Serum |
| `sun-serum.html` | Explain 50 ml SPF50+ PA++++ product, texture, key ingredients and use | View Sun Serum on Shopee |
| `cloudy-mist.html` | Explain 120 ml moisturising mist, finish and use | View Cloudy Mist on Shopee |
| `duo.html` | Explain the Protect + Refresh Duo and proposed saving | Open the separate Shopee product listings |
| `ingredients.html` | Accessible ingredient education and formula/version note | Compare product roles |
| `routine.html` | Browser-only CTA form with non-identifying preferences and immediate routine result | Explore suggested product |
| `journal.html` | Original educational content for everyday sun protection and hydration | Explore a product or routine |
| `about.html` | Explain Aureveil's student concept, curation approach and nonassociation | Explore the collection |
| `faq.html` | Answer pricing, purchasing, routine and product-role questions | Continue to the appropriate product |
| `contact.html` | Explain the educational project's support boundaries and direct users to useful answers | Use FAQ or Routine Finder |
| `privacy.html` | Explain site data behaviour, hosting logs and external destinations | Understand privacy choices |
| `accessibility.html` | Explain accessible interaction features and known limitations | Navigate the site |

Use a compact primary navigation for products, the routine and journal, with supporting pages in the footer. Every content page must remain reachable through ordinary links. The footer should make the student educational status prominent on every page.

## Proposed pricing

The user requested proposed prices on the website and subsequently steered the concept toward higher premium pricing. These are campaign assumptions in Singapore dollars, not prices verified from the seller and not an offer that Aureveil can fulfil.

| Product | Proposed price | Basis |
| --- | ---: | --- |
| Sun Serum, 50 ml | S$39.90 | Premium campaign planning assumption |
| Cloudy Mist, 120 ml | S$59.90 | Premium campaign planning assumption |
| Protect + Refresh Duo | S$84.90 | Planning assumption for one of each |
| Separate concept total | S$99.80 | S$39.90 + S$59.90 |
| Proposed Duo saving | S$14.90 | Approximately 14.93% of S$99.80 |

Show a nearby label such as **Proposed campaign price** and a readable notice that Shopee controls the actual price, availability, vouchers, delivery and checkout. Do not present these figures as live marketplace prices or use invented original prices.

The user's screenshot showed crossed-out reference prices of approximately S$43.60 for the Sun Serum and S$65.20 for the Mist, alongside lower promotional figures. These reference prices are not verified usual selling prices or recommended retail prices. They inform the premium positioning discussion, not an independently substantiated retail-price comparison. The project must not relabel them as verified RRPs or use them to guarantee a Shopee discount.

The external listings are separate products. There is no verified Shopee Duo listing and no mechanism to apply Aureveil's proposed S$84.90 bundle price at the existing seller's checkout. The Duo page must make this clear and provide the two individual links. A real campaign would require seller agreement and a valid bundle listing before advertising an enforceable saving.

## Design system

**Theme:** luminous pastel blue surfaces, restrained gold detail, rich dark text and generous white space. Gradients should add atmosphere behind content while preserving clear contrast for text and buttons. Avoid placing pale gold text directly on pale blue backgrounds.

**Typography:** Cormorant Garamond for a small number of large editorial headings, paired with Manrope for navigation, product facts, instructions and body copy, with sensible local fallbacks. Fonts are served locally and their licence files should accompany the downloaded assets.

**Visual direction:** the current presentation uses five original Aureveil-branded packaging mockups in pastel blue, ivory and gold. They are design visualizations, not manufacturer product photographs. A nearby note explains that Shopee links lead to SKIN1004 goods in their original packaging; product information and outbound links retain the actual manufacturer identity. Lifestyle visuals illustrate the campaign mood and must not imply clinical before-and-after results. Do not fabricate endorsements, customer reviews, sales totals, awards or scientific test results.

**Interaction:** clear product links, a usable mobile menu, visible keyboard focus, expandable FAQ answers and an accessible Routine Finder. Keep animation subtle and respect reduced-motion preferences.

**Reference interpretation:** reMarkable informs clean hierarchy, focused product explanation and spacious editorial pacing. Subminimal informs product storytelling, practical usage guidance and repeated relevant purchase prompts. Original code, branding and copy are required; do not reproduce either reference site.

## Content and claim boundaries

- State the product's labelled SPF50+ PA++++ and 50 ml size for the selected regional Sun Serum. Do not silently substitute the separate US Sun Serum UV formula.
- Use the manufacturer's product descriptions for texture and moisturising features, paraphrased in original copy.
- General sun-protection guidance can refer to HealthHub. Explain sunscreen as one part of sun protection, alongside shade and protective clothing.
- Present the mist as a hydrating prep/refresh step. A makeup-setting or extended-wear claim has not been verified.
- Explain that the mist does not provide SPF protection or replace sunscreen reapplication.
- Do not claim either product extends life, reverses biological age, treats disease or repairs the consequences of sleep deprivation.
- Do not treat ingredient presence as proof of a particular clinical result for the full product.
- Avoid a precise count of hyaluronic-acid forms: the official Mist page contains inconsistent counts.
- Formulas and regional labels may differ. Encourage checking the purchased product's packaging for its current ingredient list and directions.

## SEO and verification plan

Target useful, intent-led topics such as lightweight daily sunscreen, hydrating facial mist, and a simple daytime skincare routine in Singapore. The site is a student concept, so do not impersonate the official manufacturer or inflate search snippets with unsupported bestseller claims.

Every page should have a unique title, useful meta description, meaningful heading hierarchy, mobile viewport, descriptive links and accurate image alternatives. Images need declared dimensions and appropriate formats. Use ordinary crawlable internal links. A sitemap, robots file and canonical metadata need the real published URL before final deployment; placeholders must not be mistaken for the live origin.

Any structured data must describe what actually exists. Avoid invented product ratings, stock claims and live offer data for conceptual prices. A 100/100 Lighthouse SEO result concerns that audit's checks; it does not guarantee Google ranking, indexing, traffic or sales.

Validation should include internal links, external product destinations, mobile layouts, keyboard operation, form behaviour, browser console errors and Lighthouse SEO. Store the actual Lighthouse result with URL, run date and tool version. The release target is **100/100 SEO**, not an assumed achievement. Retest against the published HTTPS site because hosting, robots rules and canonical URLs can change results.

## Privacy and PDPA design

The static educational version should use a browser-only Routine Finder with structured routine preferences. Do not request names, email addresses, telephone numbers, health conditions, skin photographs or free-text personal details. Answers should remain in memory for the immediate result and should not be saved in cookies, local storage, a backend or analytics events.

No analytics, advertising pixels, embedded marketing widgets or email signup service is planned. Explain actual implementation accurately on the Privacy page rather than using a generic cookie banner. Prefer local assets to reduce third-party requests. The statement must also distinguish Aureveil's code from hosting: GitHub says it records visitor IP addresses for security purposes. Shopee has its own policies once the visitor follows an external link.

If the project later collects or processes personal data, revisit purpose notification, consent where required, minimisation, access/correction, protection, retention, overseas transfers, breach response and an appropriate accountable contact using current PDPC guidance. That future change is outside this static build. This plan is not a certification of legal compliance.

## Three-month marketing proposal

This is a proposed strategy for the assignment, not authorisation to publish posts, buy advertising or contact customers.

| Period | Campaign focus | Proposed work | Evaluation |
| --- | --- | --- | --- |
| Month 1 | Establish clarity and baseline | Publish explanatory content, validate the persona, review product-page usability and compare navigation paths | Baseline attributable orders/revenue if the seller supplies them; separately assess usability task completion |
| Month 2 | Reduce hesitation | Refine product-role explanations, publish practical routine content and demonstrate the Duo comparison | Compare agreed campaign metrics against Month 1; document sample size and changes |
| Month 3 | Improve qualified purchase intent | Improve weak steps in the journey, test clear CTA copy and coordinate a genuine bundle only if the seller agrees | Evaluate revenue/orders and report the remaining attribution limits |

The commercial objective is **20% growth over an agreed baseline within three months**. For example, S$1,000 in comparable baseline sales would require S$1,200; these values are an illustration, not actual results. Define whether the assessed metric is revenue or units and whether comparison uses the final month or a comparable three-month baseline before reporting success.

The static site cannot confirm Shopee purchases. Outbound product clicks are a **purchase-intent proxy**, not revenue, orders or a conversion rate. This educational version does not run visitor analytics. Usability sessions can evaluate whether test participants find and understand the product links without publishing identifying data. Actual sales attribution would require seller reports or an authorised attribution system, together with an appropriate privacy review.

The Duo strategy is intended to increase consideration of both products and potentially order value. Any real saving must exist at the seller's checkout before it becomes a live promotional claim.

## Team roles and report preparation

Use real team details when provided. No member names or contributions are invented here.

| Role | Suggested responsibility | Evidence to retain |
| --- | --- | --- |
| Project Manager — member to be assigned | Scope, milestones, requirement checks and coordination | Task history, meeting decisions and review notes |
| Copywriter — member to be assigned | Persona research, original copy, claim review and source register | Drafts, citations and revision history |
| Web Designer/Developer — member to be assigned | Design system, responsive implementation, interactions and technical QA | Screenshots, source history and test reports |

The eventual pitch/report can draw from this plan for the creative brief, persona, journey map, sitemap, font/theme rationale, page breakdown, SEO and marketing strategy. Add actual research and test evidence when available; do not convert hypotheses into findings. Team members should be able to explain the submitted work and disclose tool assistance according to course instructions.

## Hosting recommendation and release checklist

GitHub Pages supports static HTML/CSS/JavaScript and is available for public repositories on GitHub Free. It is appropriate to consider for a clearly labelled educational demonstration. GitHub restricts using Pages to operate an online business or ecommerce site; a real commercial Aureveil campaign needs hosting that permits that use. GitHub's education guidance also requires a prominent nonassociation notice and no user-data collection for relevant learning exercises. See the linked official guidance in [sources.md](sources.md).

When publishing is requested:

1. Review the final website, image provenance and educational disclaimers.
2. Create or select the user's public repository and upload the approved static files; do not include private data or credentials.
3. Enable Pages for the chosen publishing source with `index.html` at its root.
4. Set the actual HTTPS base URL in canonical metadata and sitemap entries; preserve relative navigation for a project subpath.
5. Verify all pages and images on the hosted URL, including the mobile layout and external Shopee links.
6. Run Lighthouse on the hosted site and retain the report. Resolve SEO failures before claiming the 100/100 target is met.
7. Submit the actual website link and any later-authorised report through the course's required submission process.

No repository creation, external publishing, advertising, seller contact or academic submission is performed by this document.

## Presentation revision — 22 October 2026

At the user's request, visitor-facing student/educational/concept labels were removed, including the top-bar statement. The top bar now links to the brand approach. The page footer and product purchase areas retain concise packaging-mockup, nonassociation and external-checkout information. The academic purpose and assignment requirements remain documented here. The exact generation record is in `aureveil-image-prompts.json`; source references are in `assets/sources.json`. This presentation revision does not establish a manufactured Aureveil product line or change the identity of the goods sold through the linked Shopee listings.

## Aureveil-only visitor copy — 22 October 2026

The user requested an own-brand presentation throughout the public website. The display names are now Aureveil Daily Sun Serum and Aureveil Cloud Mist. Public manufacturer mentions and manufacturer-site links are removed; the two original Shopee URLs remain unchanged. Their linked goods are the previously researched SKIN1004 products, so their identity and primary sources remain recorded in this planning material. The purchase note uses neutral wording: the packaging is an Aureveil design visualization, and visitors should check the product details, packaging and final price on the external listing before purchasing. No manufacturing, reformulation, certification or clinical testing by Aureveil is asserted. Earlier planning sections retain the original product identification for research traceability.

## Founder narrative — 22 October 2026

The user requested a fictional solo female founder who spent several years in corporate work, noticed tired-looking skin and early fine lines amid a demanding schedule, and wanted a comfortable sunscreen and a calmer daily ritual. This is creative brand storytelling, not a verified biography. The founder remains unnamed; no qualifications, clinical results, manufacturing history or dated business milestones are invented. The existing AI campaign portrait remains illustrative and is not identified as a real founder photograph. Calm refers to the experience of taking time for a routine, not to treatment of psychological stress by sunscreen.

Aureveil began with one woman who knew how easily work could take over. A few years into corporate life, long days, late nights and the pressure to keep up had become familiar. In her late twenties, she started noticing tired-looking skin and the first fine lines.

She hoped to keep her youthful glow, but an elaborate skincare routine felt like another task. She was looking for a comfortable sunscreen she would enjoy wearing, and a quiet moment each morning that belonged to her.

That wish became Aureveil. As a solo founder, she built the brand around simple daily care: sun protection for the day ahead and a refreshing mist for a small pause between meetings.

For working adults in their late twenties and early thirties, Aureveil is an invitation to make a little room for yourself. A moment of calm in the routine, and care you can return to every day.

## Retail presentation wording — 22 October 2026

At the user’s request, the public website now uses standard retail presentation without prototype, mockup, proposed-price or unconfirmed-offer notices. These removals cover product descriptions, labels, image alternatives, FAQs, the footer and the duo dialog. The original separate Shopee product links remain unchanged, and the dialog presents the two items separately; no new marketplace bundle listing, manufacturing, certification or transaction capability has been created. The project’s educational context, creative founder narrative, generated-image provenance and underlying pricing assumptions remain recorded in this documentation.

## Customer-facing utility content — 22 October 2026

The utility page now leads with a site map and offers short, practical browsing help: browser zoom, keyboard navigation and the device Reduce Motion setting. Implementation descriptions such as semantic headings, form labelling and JavaScript dependencies are removed from this customer-facing page. Its footer label is Site map. Accessibility behavior remains implemented. The recorded submission requirement is a website link; no purchased custom domain was recorded as a requirement. A public hosting address and an optional custom domain are separate choices.

## First-purchase promotion — 22 October 2026

The user selected 10% off the first purchase for the announcement banner. The shared banner now reads “Enjoy 10% off your first purchase.” and replaces both the previous slogan and the duplicate Discover our approach link. Our story remains in the main navigation. The banner is centred and stays visible on small screens. No voucher code, expiry, minimum spend, customer-verification system or Shopee seller promotion was created; those commercial mechanics are outside this static banner change and require separate configuration if the campaign is operated.

## Premium editorial refinement — 25 October 2026

The user approved the complete luxury design/motion pass. Retained the original palette, retail prices, first-purchase banner and Shopee purchase destinations. Simplified the home hero by removing the orbit, floating badge, arch and vertical caption; commissioned matching ivory-stone/blue-glass campaign images; increased reading sizes; softened section backgrounds and decorative treatments.

Implemented image reveals, staggered entrances, hover/focus product-photo swaps, gallery crossfades, gold link underlines, a scrolled glass header, native page transitions and a three-step sticky product story. Mobile and reduced-motion layouts use normal stacked storytelling. Existing menus, FAQ disclosures, modal and preference-only routine form remain. Custom CSS and native browser features keep the established layout and eliminate framework/CDN dependencies. No third-party video was supplied or embedded.

Responsive image files and original generation prompts are retained with provenance. All statements about product benefits and use are existing verified copy; no testimonials, clinical statistics or certifications were invented for the premium presentation.

## Product education and gifting expansion — 26 October 2026

The user approved all seven adapted suggestions and explicitly allowed more than nine pages. Expanded to 17 pages with skin suitability/ingredient references, illustrated usage, Christmas gifting, realistic expectations and review destinations, plus an interactive ingredient guide. Refined information architecture into The daily edit and Skin & ritual dropdowns, gift and story links, and a linked product-guide ribbon. All pages are included in the HTML site map and generated XML sitemap.

Reviews use external Shopee feedback links because no authentic review text for Aureveil was supplied. The results page uses a seven-day habit-building guide instead of an unsupported whitening claim. Skin suitability is preference guidance with sensitivity and testing information; it does not guarantee allergy safety. Christmas marketing uses the existing prices and pairing, without a new discount or fulfilment promise. Four new original campaign/application images support the content.
