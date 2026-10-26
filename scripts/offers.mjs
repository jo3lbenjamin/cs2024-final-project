export const PRICING = {
  sun: {name:'Daily Sun Serum',size:'50ml',cents:3990,individualCents:3990},
  mist: {name:'Cloud Mist',size:'120ml',cents:5990,individualCents:5990},
  duo: {name:'Protect + Refresh Duo',size:'50ml + 120ml',cents:8490,individualCents:9980}
};
export const money = cents => 'S$'+(cents/100).toFixed(2);
export function priceFor(kind, firstPurchase=true) {
  const product=PRICING[kind];
  const discount=firstPurchase?Math.round(product.cents/10):0;
  return {base:product.cents,discount,total:product.cents-discount,pairingSaving:product.individualCents-product.cents,totalSaving:product.individualCents-product.cents+discount};
}
export function welcomeQuestions() {
  return [
    ['How does the first-purchase offer work?', 'Enjoy 10% off your first Aureveil purchase. Choose your essential and select the first-purchase option in our <a href="offers.html">welcome offer calculator</a> to see your price. Delivery is excluded from the product saving.'],
    ['Can I use the welcome offer on the duo?', 'Yes. The duo is S$84.90, saving S$14.90 against the S$99.80 individual total. The 10% first-purchase saving takes the duo product total to S$76.41.'],
    ['Can I combine welcome savings with another promotion?', 'The welcome offer includes the duo’s built-in pairing saving, but is not combined with another Aureveil promotional discount. Read the <a href="offers.html#offer-terms">offer terms</a>.']
  ];
}
export function welcomeLine(h,kind) {
  return `<p class="welcome-price"><strong>First purchase: ${money(priceFor(kind).total)}</strong><a href="offers.html#${kind}">Explore your 10% welcome saving ${h.arrow}</a></p>`;
}
export function textureSection(h) {
  return `<section class="section wrap texture-editorial"><img src="assets/images/aureveil-textures.webp" srcset="assets/images/aureveil-textures-600.webp 600w, assets/images/aureveil-textures.webp 1200w" sizes="(max-width: 760px) calc(100vw - 40px), 48vw" alt="Aureveil Sun Serum and Cloud Mist in an editorial still life beside cream and clear droplet textures" width="1200" height="900" loading="lazy" decoding="async"><div>${h.eyebrow('A cream. A cloud.')}<h2>Different textures.<br><em>Different little rituals.</em></h2><p>A serum-like cream for daily protection. A fine mist for optional hydration. Choose the role and finish that suit your routine.</p><a class="text-link" href="duo.html">Compare the essentials ${h.arrow}</a></div></section>`;
}
function offerPage(h) {
  const sunPrice=priceFor('sun');
  return `${h.crumbs('Your welcome offer')}<header class="page-heading wrap">${h.eyebrow('A little welcome, from Aureveil')}<h1>Your first ritual.<br><em>A thoughtful saving.</em></h1><p>Enjoy 10% off your first purchase. Explore your essential, your pairing and the price that fits your first step.</p></header><section class="section wrap welcome-offer" id="welcome-offer"><div class="offer-selection"><div class="offer-controls" hidden><fieldset class="offer-products"><legend>Choose your daily edit</legend>${Object.entries(PRICING).map(([kind,p])=>`<label class="offer-choice" id="${kind}"><input type="radio" name="offer-product" value="${kind}" data-price="${p.cents}" data-individual="${p.individualCents}" ${kind==='sun'?'checked':''}><span><strong>${p.name}</strong><small>${p.size}</small></span><span>${money(p.cents)}</span></label>`).join('')}</fieldset><label class="offer-first"><input type="checkbox" id="offer-first-purchase" checked><span>This is my first Aureveil purchase.<small>Include the 10% welcome saving.</small></span></label></div><div class="offer-table-wrap"><table class="offer-price-table"><caption>Your first-purchase prices</caption><thead><tr><th scope="col">Your essential</th><th scope="col">Price</th><th scope="col">First purchase</th></tr></thead><tbody>${Object.entries(PRICING).map(([kind,p])=>`<tr><th scope="row"><a href="${kind==='sun'?'sun-serum.html':kind==='mist'?'cloudy-mist.html':'duo.html'}">${p.name}</a></th><td>${money(p.cents)}</td><td>${money(priceFor(kind).total)}</td></tr>`).join('')}</tbody></table></div></div><section class="offer-result" aria-labelledby="offer-result-title"><p class="micro">YOUR CONSIDERED EDIT</p><h2 id="offer-result-title">Daily Sun Serum</h2><p id="offer-size">50ml</p><dl><div><dt>Product price</dt><dd id="offer-base">${money(sunPrice.base)}</dd></div><div id="offer-pairing-row" hidden><dt>Duo saving already included</dt><dd id="offer-pairing">S$0.00</dd></div><div><dt>Welcome saving · 10%</dt><dd id="offer-discount">−${money(sunPrice.discount)}</dd></div><div class="offer-total-row"><dt>Product total</dt><dd id="offer-total">${money(sunPrice.total)}</dd></div></dl><p id="offer-savings" class="offer-savings">You save ${money(sunPrice.totalSaving)}.</p><p class="fine-print">Product totals exclude delivery.</p><div id="offer-purchase-single">${h.link(h.sunURL,'View Daily Sun Serum on Shopee')}</div><button type="button" class="btn btn-primary" id="offer-purchase-duo" data-open-duo hidden>Explore the duo on Shopee ${h.external}</button><p id="offer-result-status" class="sr-only" role="status" aria-live="polite"></p><a class="text-link" href="buying-guide.html">Your next step, explained ${h.arrow}</a></section></section>${textureSection(h)}<section class="section wrap narrow" id="offer-terms">${h.eyebrow('A clear little offer')}<h2>The details.<br><em>Beautifully simple.</em></h2><ul class="offer-terms"><li>10% off the product price for your first Aureveil purchase.</li><li>Available for Daily Sun Serum, Cloud Mist and the Protect + Refresh Duo.</li><li>The duo’s S$14.90 pairing saving is included before the welcome saving is calculated.</li><li>Delivery charges are excluded from the product discount.</li><li>The welcome saving is not combined with another Aureveil promotional discount.</li></ul>${h.faqs(welcomeQuestions())}</section>`;
}
export function applyOfferImprovements(pages,h) {
  for(const [file,kind] of [['sun-serum.html','sun'],['cloudy-mist.html','mist']]){
    const page=pages.find(p=>p.file===file),original=page.content;
    page.content=()=>{let content=original();const start=content.indexOf('<div class="price">'),end=content.indexOf('</div>',start);if(start<0||end<0)throw new Error('Price marker missing: '+file);content=content.slice(0,end+6)+welcomeLine(h,kind)+content.slice(end+6);return content;};
  }
  const duo=pages.find(p=>p.file==='duo.html'),oldDuo=duo.content;
  duo.content=()=>oldDuo().replace('<div class="duo-includes">',welcomeLine(h,'duo')+'<div class="duo-includes">');
  const guide=pages.find(p=>p.file==='buying-guide.html'),oldGuide=guide.content;
  guide.content=()=>oldGuide().replace('Only discounts shown in your Shopee order total are applied.','Explore your welcome saving on our <a href="offers.html">offer page</a>.').replace('<section class="section wrap buying-checklist">',textureSection(h)+'<section class="section wrap buying-checklist">');
  pages.push({file:'offers.html',nav:'offers',ogImage:'aureveil-textures',title:'Your First-Purchase Offer | 10% Welcome Saving | Aureveil',description:'Explore Aureveil first-purchase prices with 10% off Daily Sun Serum, Cloud Mist and the Protect + Refresh Duo. Calculate your welcome and pairing savings.',content:()=>offerPage(h)});
}
