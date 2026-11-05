const external = (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;

export const ingredientResearchSources = [
  {
    ingredient: 'Centella asiatica extract',
    title: 'Moisturizing and Antiinflammatory Properties of Cosmetic Formulations Containing Centella asiatica Extract',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4852572/',
    type: 'Human ingredient study',
    study: 'Ratz-Łyko et al., 2016: 25 healthy volunteers; 2.5% and 5% extract creams/gels, twice daily on forearms for four weeks.',
    finding: 'The tested preparations improved hydration and reduced the response to experimentally induced irritation.',
    limit: 'Different extract preparations and concentrations; healthy forearm skin, not an acne or rosacea treatment trial and not a trial of this sunscreen.'
  },
  {
    ingredient: 'Hyaluronic acid',
    title: 'Efficacy of cream-based novel formulations of hyaluronic acid of different molecular weights in anti-wrinkle treatment',
    url: 'https://pubmed.ncbi.nlm.nih.gov/22052267/',
    type: 'Human ingredient study',
    study: 'Pavicic et al., 2011: 76 women; 0.1% HA creams at five molecular weights, twice daily for 60 days, compared with vehicle around the other eye.',
    finding: 'The tested HA creams improved hydration and elasticity; two lower molecular weights also improved wrinkle-depth measurements at day 60.',
    limit: 'Specific creams and known molecular weights; the sunscreen’s HA concentrations and molecular weights are not verified by this study.'
  },
  {
    ingredient: 'Niacinamide',
    title: 'Niacinamide: A B vitamin that improves aging facial skin appearance',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16029679/',
    type: 'Human ingredient study',
    study: 'Bissett et al., 2005: 50 women; randomized, double-blind split-face comparison of 5% niacinamide and vehicle, twice daily for 12 weeks.',
    finding: 'The tested preparation improved several measures of photoaged skin appearance, including fine lines and uneven pigmentation.',
    limit: 'A 5% test preparation, not this sunscreen; its niacinamide concentration and equivalent outcomes cannot be inferred.'
  },
  {
    ingredient: 'Glycerin',
    title: 'The influence of a cream containing 20% glycerin and its vehicle on skin barrier properties',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18498456/',
    type: 'Human ingredient study',
    study: 'Lodén and Wessman, 2001: 17 healthy volunteers; bilateral, double-blind comparison of 20% glycerin cream and vehicle for ten days.',
    finding: 'Hydration measurements increased with the glycerin cream.',
    limit: 'The study did not show improved water loss or resistance to detergent irritation. Different concentration and finished formula.'
  },
  {
    ingredient: 'Adenosine',
    title: 'Evaluation of anti-wrinkle efficacy of adenosine-containing products using the FOITS technique',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18489289/',
    fullTextUrl: 'https://magistralbr.caldic.com/storage/product-files/1582866893.pdf',
    type: 'Human ingredient study',
    study: 'Abella, 2006: 126 women aged 45–65; controlled study of a 0.1% adenosine cream or 1% dissolvable film; assessments at three and eight weeks.',
    finding: 'The tested adenosine preparations improved measurements of facial lines.',
    limit: 'Different dose and delivery systems, not this sunscreen; not evidence of a seven-day sunscreen result.'
  },
  {
    ingredient: 'Diethylamino Hydroxybenzoyl Hexyl Benzoate (DHHB)',
    title: 'DSM-Firmenich PARSOL DHHB',
    url: 'https://www.dsm-firmenich.com/en/businesses/perfumery-beauty/beauty-care/products/parsol-dhhb.html',
    type: 'Supplier technical reference',
    finding: 'UVA absorber.',
    limit: 'Raw-material function, not a finished-product SPF test or confirmation of the supplier used.'
  },
  {
    ingredient: 'Ethylhexyl Triazone',
    title: 'BASF Uvinul T 150',
    url: 'https://my.basf.com/de-DE/pdp/30035119',
    technicalDocumentUrl: 'https://promo.basf.com/campaign/Projetos/CaringForYou/Documentos/Geral/Uvinul%C2%AE%20T%20150.pdf',
    type: 'Supplier technical reference',
    finding: 'UVB filter.',
    limit: 'Raw-material function, not a finished-product SPF test or confirmation of the supplier used.'
  },
  {
    ingredient: 'Methylene Bis-Benzotriazolyl Tetramethylbutylphenol (MBBT)',
    title: 'BASF Tinosorb M',
    url: 'https://care360.basf.com/global/en/Product-Finder/30482916',
    type: 'Supplier technical reference',
    finding: 'Broad-spectrum UV filter.',
    limit: 'Raw-material function, not a finished-product SPF test or confirmation of the supplier used.'
  },
  {
    ingredient: 'Diethylhexyl Butamido Triazone',
    title: '3V Sigma UVASORB HEB',
    url: 'https://www.3vsigma.com/en/products/85/uvasorb-heb',
    type: 'Supplier technical reference',
    finding: 'UV-filter ingredient reference; detailed technical download requires supplier login.',
    limit: 'Public product listing, not a publicly accessible finished-sunscreen laboratory report or confirmation of the supplier used.'
  }
];

export function ingredientResearchContent(h) {
  const studies = ingredientResearchSources.filter(item => item.type === 'Human ingredient study');
  const filters = ingredientResearchSources.filter(item => item.type === 'Supplier technical reference');
  return `<section class="section wrap" id="ingredient-research" aria-labelledby="ingredient-research-heading">
    <div class="section-heading"><div>${h.eyebrow('Ingredient research library')}<h2 id="ingredient-research-heading">What is inside.<br><em>What research tells us.</em></h2></div><p>Human studies help explain why ingredients are used. Their findings belong to the tested preparations, concentrations and timescales.</p></div>
    <div class="research-intro"><h3>Centella and three forms of hyaluronic acid</h3><p>The ingredient reference for Daily Sun Serum lists <strong>Centella asiatica extract</strong>, alongside <strong>sodium hyaluronate, hydrolyzed hyaluronic acid and hyaluronic acid</strong>. These are three INCI forms; the list does not specify three molecular weights. The studies below explore hydration and appearance using other preparations.</p><p>For persistent redness, acne, eczema or rosacea, use the <a href="skin-guide.html#skin-conditions">skin-condition guidance</a> to help discuss formula fit with your clinician.</p></div>
    <div class="research-grid">${studies.map(item => `<article class="research-card"><p class="micro">HUMAN INGREDIENT STUDY</p><h3>${item.ingredient}</h3><p>${item.study}</p><p>${item.finding}</p><p class="evidence-context"><strong>How to read it:</strong> ${item.limit}</p><p class="source-note">${external(item.url, 'Read the study')}${item.fullTextUrl ? ` · ${external(item.fullTextUrl, 'Published paper (PDF)')}` : ''}</p></article>`).join('')}</div>
    <div class="research-intro"><h3>The UV-filter reference shelf</h3><p>These supplier references explain raw-material functions. They are separate from human ingredient studies and finished-sunscreen tests. A supplier’s technical page does not confirm which supplier made an ingredient in the linked product, or establish the finished formula’s SPF.</p></div>
    <div class="research-grid research-filter-grid">${filters.map(item => `<article class="research-card"><p class="micro">SUPPLIER TECHNICAL REFERENCE</p><h3>${item.ingredient}</h3><p>${item.finding}</p><p class="source-note">${external(item.url, item.title)}${item.technicalDocumentUrl ? ` · ${external(item.technicalDocumentUrl, 'Technical document (PDF)')}` : ''}</p></article>`).join('')}</div>
    <p><a class="text-link" href="skin-guide.html#ingredients">Read the complete ingredient reference ${h.arrow}</a></p>
  </section>`;
}
