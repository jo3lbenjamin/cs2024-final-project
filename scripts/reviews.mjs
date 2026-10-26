// Exact excerpts from Shopee text supplied by the user on 26 October 2026.
// Preserve spelling, masked names and dates; do not infer stars or buyer verification.
export const sunReviews = [
  { name: 'traveller2021', date: '2023-02-12', label: '12 February 2023', topic: 'A dewy daily finish', quote: 'Easily absorbed & leaves my skin hydrated with dewy finish.' },
  { name: 'w*****_', date: '2022-06-15', label: '15 June 2022', topic: 'Light on the skin', quote: "Super nice lightweight sunscreen!! Rubs in effortlessly and doesn't leave any white cast, not too greasy as well!" },
  { name: 'karengadsabout', date: '2022-11-03', label: '3 November 2022', topic: 'An easy everyday texture', quote: "I'm happy with this lightweight suncare with no whitecast." },
  { name: 'w*****6', date: '2022-08-15', label: '15 August 2022', topic: 'Moisture, without a white cast', quote: 'Moisturising texture but no white cast, worth trying!' }
];
export const mistReviews = [
  { name: 'b*****y', date: '2024-04-22', label: '22 April 2024', topic: 'An everyday hydration pause', quote: 'very convenient and clean way to moisturise my face through the day.' },
  { name: 's*****e', date: '2025-05-28', label: '28 May 2025', topic: 'A finer little refresh', quote: 'Mist is very fine, each spray amount is perfect and ample (very satisfying).' },
  { name: 'pinqielee', date: '2024-08-17', label: '17 August 2024', topic: 'Part of a night-time ritual', quote: 'I use this at night time to give extra hydration to my skin, especially when u sleep with Aircon on.' },
  { name: 'joycengyl', date: '2026-05-30', label: '30 May 2026', topic: 'A moment of hydration', quote: 'The mist works as a toner or hydration mist.' }
];
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function card(h, review, product, home) {
  const url = product === 'sun' ? h.sunURL : h.mistURL;
  const productName = product === 'sun' ? 'Daily Sun Serum' : 'Cloud Mist';
  const level = home ? 'h3' : 'h4';
  return `<article class="customer-review-card" data-review-product="${product}"><p class="micro">${productName.toUpperCase()} · SHOPEE REVIEW</p><${level} class="customer-review-title">${escape(review.topic)}</${level}><blockquote cite="${url}"><p>“${escape(review.quote)}”</p></blockquote><div class="customer-review-author"><span>${escape(review.name)}</span><time datetime="${review.date}">${review.label}</time></div><a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">View reviews on Shopee ${h.external}<span class="sr-only"> (opens ${productName} reviews in a new tab)</span></a></article>`;
}
export function reviewExcerpts(h, { home = false } = {}) {
  const content = home
    ? `<div class="customer-review-grid">${card(h,sunReviews[0],'sun',true)}${card(h,sunReviews[1],'sun',true)}${card(h,mistReviews[1],'mist',true)}</div>`
    : `<nav class="review-category-nav" aria-label="Customer reviews by product"><a class="text-link" href="#sun-reviews">Daily Sun Serum ${h.arrow}</a><a class="text-link" href="#mist-reviews">Cloud Mist ${h.arrow}</a></nav>${[['sun',sunReviews,'Daily Sun Serum'],['mist',mistReviews,'Cloud Mist']].map(([product,reviews,title])=>`<section class="customer-review-group" id="${product}-reviews" aria-labelledby="${product}-reviews-heading"><h3 id="${product}-reviews-heading" class="customer-review-group-title">${title}</h3><div class="customer-review-grid customer-review-grid-full">${reviews.map(review=>card(h,review,product,false)).join('')}</div></section>`).join('')}`;
  return `<section class="section customer-voices" id="${home ? 'customer-reviews' : 'review-excerpts'}" aria-labelledby="customer-voices-title"><div class="wrap"><div class="section-heading"><div>${h.eyebrow('In their own words')}<h2 id="customer-voices-title">Little moments.<br><em>Shared experiences.</em></h2></div><p>Selected Sun Serum and Cloud Mist review excerpts from Shopee.</p></div>${content}<div class="customer-review-bottom"><p class="fine-print">Excerpts from individual experiences. Skin preferences and results vary.</p>${home ? `<a class="text-link" href="reviews.html">Explore more customer experiences ${h.arrow}</a>` : `<a class="text-link" href="duo.html">Discover the daily pairing ${h.arrow}</a>`}</div></div></section>`;
}
