import {createEvidencePage} from './product-evidence.mjs';
import {createSunscreenBenefitsPage} from './sunscreen-benefits.mjs';

const readMore=(h)=>`<section class="section wrap research-signpost"><div>${h.eyebrow('New to sunscreen? Start here.')}<h2>The benefits of sunscreen.<br><em>Made clear.</em></h2><p>Does sunscreen prevent wrinkles? What does SPF50 mean, and how does it compare with SPF100? Explore the answers before choosing your daily essential.</p></div><div class="inline-actions">${h.btn('sunscreen-benefits.html','Understand sunscreen benefits')}${h.btn('evidence.html','Explore testing and research','btn btn-outline')}</div></section>`;

export function applyResearchUpdate(pages,h){
  pages.push(createEvidencePage(h),createSunscreenBenefitsPage(h));
  const edit=(file,transform)=>{const p=pages.find(p=>p.file===file);if(!p)throw new Error('Missing research page '+file);const old=p.content;p.content=()=>transform(old());};
  const replace=(html,before,after)=>{if(!html.includes(before))throw new Error('Research anchor missing: '+before.slice(0,100));return html.replace(before,after);};
  edit('index.html',html=>{
    html=replace(html,'<div class="sunscreen-quick-facts"',`<div class="testing-preview"><p class="micro">PUBLISHED PRODUCT TESTING</p><h3>Protection and comfort.<br><em>Backed by testing.</em></h3><p>Published testing for the linked Korean/global sunscreen reports <strong>SPF 50.5 ± 7.1</strong>, <strong>PFA 16.56 ± 2.69</strong> and a <strong>0.00 mean skin-irritation score</strong> in a 30-adult patch assessment. Explore the methods and hydration measurements.</p><a class="text-link" href="evidence.html#product-testing">Explore the testing ${h.arrow}</a><p class="source-note">Manufacturer-reported results · individual responses vary · <a href="evidence.html#study-details">Study details &amp; sources</a>.</p></div><div class="sunscreen-quick-facts"`);
    return replace(html,'<section class="section wrap journey-starts"',readMore(h)+'<section class="section wrap journey-starts"');
  });
  edit('sun-serum.html',html=>replace(html.replace('A water-resistance rating has not been established for the linked version.','Daily sun protection for your regular routine. Match labelled protection to your activity.'),'<section class="section wrap journey-comparison"',`<section class="section wrap research-signpost"><div>${h.eyebrow('Behind the daily essential')}<h2>Meet the formula.<br><em>Explore the evidence.</em></h2><p>Comparing a lightweight sunscreen under makeup? Start with finish and ingredients, then explore the published protection and hydration testing.</p></div><div class="inline-actions">${h.btn('evidence.html#product-testing','Read product-testing summaries')}${h.btn('evidence.html#ingredient-research','Explore ingredient research','btn btn-outline')}</div></section><section class="section wrap journey-comparison"`));
  edit('ingredients.html',html=>html+`<section class="section wrap research-signpost"><div>${h.eyebrow('Sunscreen ingredients explained')}<h2>From ingredient roles.<br><em>To the published research.</em></h2><p>Centella extract, three forms of hyaluronic acid, niacinamide and glycerin complement the UV filters. Read human ingredient studies and supplier references with their tested concentrations and timescales.</p></div>${h.btn('evidence.html#ingredient-research','Open the ingredient research library')}</section>`);
  edit('skin-guide.html',html=>replace(html,'<h2>Will it work for<br><em>my skin condition?</em></h2>','<h2>Sunscreen for sensitive skin?<br><em>Start with your skin’s needs.</em></h2>'));
  edit('journal.html',html=>replace(html,'<article class="journal-article wrap" id="sun-protection">',readMore(h)+'<article class="journal-article wrap" id="sun-protection">'));
  edit('duo.html',html=>replace(html,'<div class="duo-includes">','<p>A sunscreen and face mist set for everyday care. Exploring skincare gifts under S$100? Compare the S$84.90 Duo, included extras and delivery information.</p><div class="duo-includes">'));
  edit('christmas.html',html=>replace(html,'<h1>','<p class="micro">SKINCARE GIFT SETS IN SINGAPORE</p><h1>'));
  edit('returns.html',html=>replace(html,'<h1>','<p class="micro">SKINCARE SAMPLES AND RETURNS</p><h1>'));
  edit('faq.html',html=>{
    const entries=[
      ['What are the benefits of sunscreen?','Sunscreen helps prevent sunburn and UV-related premature skin aging. Broad-spectrum protection covers UVA and UVB. Read the <a href="sunscreen-benefits.html#benefits">sunscreen benefits guide</a>.'],
      ['SPF50 vs SPF100: which should I choose?','SPF50 filters approximately 98% of UVB and SPF100 approximately 99% under test conditions. Higher SPF can help, but both need correct application and reapplication. Compare <a href="sunscreen-benefits.html#spf50-vs-spf100">SPF50 and SPF100</a>.'],
      ['Does higher-SPF sunscreen clog pores?','Choose pore compatibility by the finished formula, label and your skin’s needs. Read the <a href="sunscreen-benefits.html#skin-fit">pore-clogging and skin-fit explanation</a>.'],
      ['Where are the sunscreen laboratory testing results?','Our <a href="evidence.html#product-testing">product-testing library</a> links manufacturer-published SPF and hydration summaries for the original Korean/global formula. It explains the tested product, methods and sample sizes.'],
      ['Are ingredient studies the same as product tests?','No. Ingredient studies test specific preparations and concentrations. The <a href="evidence.html#ingredient-research">ingredient research library</a> distinguishes those from finished-product testing and UV-filter technical references.']
    ];
    html=replace(html,'<nav class="faq-nav" aria-label="Question topics">','<nav class="faq-nav" aria-label="Question topics"><a href="#research">Sunscreen &amp; research</a>');
    return replace(html,'<p class="faq-empty"',`<section id="research" data-faq-group><h2 class="buyer-faq-heading">Sunscreen &amp; research</h2>${h.faqs(entries)}</section><p class="faq-empty"`);
  });
}
