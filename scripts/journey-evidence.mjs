import { homepageStarts, comparisonSection } from './journey-paths.mjs';
const preventionURL='https://pubmed.ncbi.nlm.nih.gov/23732711/';
const appearanceURL='https://pubmed.ncbi.nlm.nih.gov/27749441/';
const exposureURL='https://pmc.ncbi.nlm.nih.gov/articles/PMC3790843/';
const collagenURL='https://pmc.ncbi.nlm.nih.gov/articles/PMC1618600/';
const applicationURL='https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen';
const testURL='https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products';
const source=(url,text)=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${text}<span class="sr-only"> (opens in a new tab)</span></a>`;

function evidence(h) {
 return `<section class="section sunscreen-evidence" id="daily-sunscreen-evidence" aria-labelledby="sunscreen-evidence-heading"><div class="wrap"><div class="section-heading"><div>${h.eyebrow('Daily sunscreen. Published evidence.')}<h2 id="sunscreen-evidence-heading">Daily sunscreen.<br><em>The evidence.</em></h2></div><p>Daily sunscreen helps protect against premature skin aging caused by UV exposure. Here is what the research measured.</p></div><div class="evidence-columns"><div class="evidence-result"><p class="evidence-number">24<span>%</span></p><h3>Lower odds of increased skin aging</h3><p>Daily versus discretionary sunscreen use over <strong>4.5 years</strong>.</p><p class="evidence-context">Trial of 903 Australian adults under 55, assessed on the back of the hand. Another formula, not Aureveil; this is not 24% fewer facial wrinkles.</p><p class="source-note">${source(preventionURL,'Hughes et al., 2013: read the trial')}</p></div><div class="evidence-expectations"><h3>When can I see results?</h3><dl class="evidence-timeline"><div><dt>Your first week</dt><dd>Explore comfort and finish. A clearer complexion or fewer wrinkles in seven days has not been established for Aureveil.</dd></div><div><dt>12 weeks: a research checkpoint</dt><dd>A separate, uncontrolled 32-person study first assessed visible improvement at week 12 using another SPF30 formula. It does not establish an Aureveil results date.</dd></div></dl><p class="source-note">${source(appearanceURL,'Randhawa et al., 2016: study details')}</p><a class="text-link" href="what-to-expect.html#results-timeline">Explore realistic timelines ${h.arrow}</a></div></div><div class="sunscreen-quick-facts" aria-label="Sunscreen application reminders"><p><strong>At least 1 teaspoon</strong><span>for the face, per current AAD guidance</span></p><p><strong>15 minutes before outdoors</strong><span>apply before sun exposure</span></p><p><strong>Every 2 hours outdoors</strong><span>reapply, and after swimming or sweating</span></p></div><p class="evidence-application-link"><a class="text-link" href="how-to-use.html#before-sunscreen">Before sunscreen: preparation, amount and order ${h.arrow}</a> <span class="source-note">${source(applicationURL,'AAD application guidance')}</span></p></div></section>`;
}

function timeline(h) {
 return `<section class="section wrap" id="results-timeline" aria-labelledby="results-timeline-heading"><div class="section-heading"><div>${h.eyebrow('Results need a timescale')}<h2 id="results-timeline-heading">What changes now.<br><em>What takes time.</em></h2></div><p>Separate a product’s immediate finish from the longer-term role of UV protection.</p></div><div class="results-timeline"><article><p class="micro">FIRST APPLICATION</p><h3>Feel and finish</h3><p>You can assess texture, spreadability and the dewy finish. A comfortable first use cannot rule out a later reaction.</p></article><article><p class="micro">FIRST 7–10 DAYS</p><h3>Introduce thoughtfully</h3><p>Use a small-area test as directed before full use. Seven days is a routine checkpoint, not a proven clearer-skin or wrinkle-reduction deadline.</p><p class="source-note">${source(testURL,'AAD: testing new skincare')}</p></article><article><p class="micro">MONTHS</p><h3>Research on appearance</h3><p>One small, uncontrolled study first assessed improvements at 12 weeks and continued to 52 weeks. Its SPF30 formula and findings cannot be assumed for Aureveil.</p><p class="source-note">${source(appearanceURL,'Read the study')}</p></article><article><p class="micro">YEARS</p><h3>Consistent prevention</h3><p>Skin-aging prevention is a long-term habit. Explore the <a href="index.html#daily-sunscreen-evidence">4.5-year research context</a> and keep using shade and protective clothing.</p></article></div></section>`;
}

function preparation(h) {
 return `<section class="section wrap" id="before-sunscreen" aria-labelledby="before-sunscreen-heading"><div class="section-heading"><div>${h.eyebrow('Before your first full application')}<h2 id="before-sunscreen-heading">A prepared start.<br><em>A simpler morning.</em></h2></div><p>New product? First check the label and your skin’s known sensitivities.</p></div><ol class="prep-order"><li><h3>Check and test</h3><p>Read the <a href="skin-guide.html#ingredients">full ingredients</a>. For new skincare, AAD recommends a small-area test twice daily for 7–10 days. Stop if a reaction develops.</p></li><li><h3>Finish your skincare</h3><p>Cleanse, gently dry your skin and use your usual moisturiser as needed. Apply sunscreen next, then makeup once it settles.</p></li><li><h3>Plan your exposure</h3><p>Check outdoor plans and the label’s directions. Use additional shade and clothing. For swimming or heavy sweating, choose labelled water resistance.</p></li></ol><p class="source-note">${source(testURL,'AAD: testing skincare')} · <a href="skin-guide.html#skin-conditions">Existing skin condition? Find the right guidance</a>.</p><p>The included SPF sachets let you explore texture while your full-size item stays sealed. A sachet trial does not prove that a product will suit your skin.</p></section>`;
}

function conditions(h) {
 return `<section class="section wrap narrow" id="skin-conditions"><div>${h.eyebrow('Your skin, your considerations')}<h2>Will it work for<br><em>my skin condition?</em></h2><p>A skin type is a starting point, not a diagnosis. Daily Sun Serum provides labelled UV protection; the mist provides hydration. Neither is presented as a treatment for acne, eczema or rosacea.</p></div>${h.faqs([
 ['I have oily or acne-prone skin. What should I compare?', 'Consider the dewy finish, the full ingredients and your existing routine. A lightweight texture or an individual review does not establish a non-comedogenic guarantee.'],
 ['I have eczema, rosacea or a current flare. Can I use it?', 'Ask the clinician managing your condition about formula fit and your treatment plan before introducing something new. A routine quiz cannot assess a flare or diagnose a skin concern.'],
 ['What if it stings, itches or causes a rash?', 'Stop using the new product and seek medical advice if symptoms persist or concern you. Check the complete ingredient list with a professional if you suspect an allergy.'],
 ['Can the sample sachets guarantee suitability?', 'No. Samples help you explore texture. Delayed reactions are still possible. Read the <a href="#sensitivity">new-product testing guidance</a> and the <a href="returns.html#sample-first">sealed-product return policy</a>.']
 ])}</section>`;
}

function homepageQuestions(h) {
 return `<section class="section wrap narrow" aria-labelledby="sunscreen-answers-heading">${h.eyebrow('Before you choose')}<h2 id="sunscreen-answers-heading">Your sunscreen questions.<br><em>Clearer answers.</em></h2>${h.faqs([
 ['Does sunscreen prevent wrinkles?', 'Daily broad-spectrum sunscreen helps limit UV-related premature skin aging. It cannot prevent every wrinkle or every cause of aging. Read the <a href="#daily-sunscreen-evidence">published evidence and its limits</a>.'],
 ['What should I do before using sunscreen?', 'Read the label, check your ingredient sensitivities and introduce a new product carefully. Your usual skincare and moisturiser come before sunscreen, with makeup afterwards. Follow the <a href="how-to-use.html#before-sunscreen">preparation guide</a>.'],
 ['How much sunscreen should I apply?', 'Current AAD guidance advises at least 1 teaspoon for the face. Follow the label and cover other exposed areas too. See <a href="how-to-use.html#sun-serum">the application steps</a>.'],
 ['When will I see clearer skin or fewer wrinkles?', 'The first week is for exploring comfort and finish. We have no verified seven-day clearer-skin or wrinkle-reduction result for Aureveil. The <a href="what-to-expect.html#results-timeline">results timeline</a> separates immediate feel from longer-term research.'],
 ['Will it work for my skin condition?', 'Ingredient preferences and medical skin conditions need different decisions. For acne, eczema, rosacea or prescribed treatments, discuss formula fit with your clinician. Read the <a href="skin-guide.html#skin-conditions">skin-condition guidance</a>.'],
 ['Is this the right sunscreen for swimming or outdoor sport?', 'Check water resistance on the product label. A rating has not been established for this linked version. Our <a href="sun-serum.html#compare-sunscreens">comparison checklist</a> helps you check activity needs before choosing.']
 ])}<p class="source-note">${source(applicationURL,'AAD sunscreen guidance')} · <a href="faq.html">Explore all frequently asked questions</a></p></section>`;
}

export function applyJourneyEvidence(pages,h) {
 const wrap=(file,transform)=>{const p=pages.find(p=>p.file===file);if(!p)throw new Error('Missing page '+file);const old=p.content;p.content=()=>transform(old());};
 const replace=(html,a,b)=>{if(!html.includes(a))throw new Error('Journey anchor missing: '+a.slice(0,80));return html.replace(a,b);};
 wrap('index.html',html=>{
  const edit='<section class="section wrap"><div class="section-heading"><div>'+h.eyebrow('The daily edit');
  html=replace(html,edit,evidence(h)+homepageStarts(h)+edit);
  return html.replace(/<section class="section wrap narrow" aria-labelledby="sunscreen-answers-heading">[\s\S]*?<\/section>/,homepageQuestions(h));
 });
 wrap('sun-serum.html',html=>replace(html,'<section class="section wrap narrow">',comparisonSection(h)+'<section class="section wrap narrow">'));
 wrap('how-to-use.html',html=>{
  html=replace(html,'<nav class="guide-anchor-nav wrap"',preparation(h)+'<nav class="guide-anchor-nav wrap"');
  return html;
 });
 wrap('skin-guide.html',html=>replace(html,'<section class="section wrap narrow" id="ingredients">',conditions(h)+'<section class="section wrap narrow" id="ingredients">'));
 wrap('what-to-expect.html',html=>replace(html,'<section class="section wrap expectation-grid">',timeline(h)+'<section class="section wrap expectation-grid">'));
 wrap('journal.html',html=>{
  html=replace(html,'A randomized trial followed 903 adults and found less progression of visible skin ageing with daily sunscreen use over 4.5 years, compared with discretionary use. That supports a prevention story; it does not establish that a sunscreen reverses age or extends lifespan.','In a 903-person trial, daily sunscreen users had 24% lower odds of increased skin aging over 4.5 years than discretionary users. Researchers graded hand-skin impressions. This was another formula, not an Aureveil trial or a facial wrinkle count.');
  const extra=`<h3>UVA, UVB and your skin’s support</h3><p>Broad-spectrum sunscreen covers UVA and UVB. UV exposure can disrupt collagen support and contribute to photoaging. This does not establish that a sunscreen rebuilds collagen or reverses every cause of wrinkles.</p><p class="source-note">${source(collagenURL,'Human-skin research on UV exposure and collagen')}</p><h3>When could visible changes appear?</h3><p>A small uncontrolled study using another SPF30 formula first assessed improvement at 12 weeks and followed participants to 52 weeks. It cannot establish a seven-day promise or a results date for Aureveil.</p><p class="source-note">${source(appearanceURL,'Randhawa et al., 2016')}</p><h3>What about the “80–90% of aging” claim?</h3><p>One observational study estimated an 80% contribution from sun exposure in 298 white women aged 30–78. That population-specific estimate is not a universal percentage of aging, a sunscreen prevention rate or an Aureveil result.</p><p class="source-note">${source(exposureURL,'Flament et al., 2013')}</p>`;
  return replace(html,'<h3>Choose a texture you will use.</h3>',extra+'<h3>Choose a texture you will use.</h3>');
 });
}

