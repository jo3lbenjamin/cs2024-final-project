// Illustrative planning personas. These journeys are hypotheses to validate,
// not findings from customer interviews or observed conversion data.
export const personaJourneyPlan = [
  {
    persona: 'Rachel Tan',
    awareness: 'Problem-aware, still learning about solutions',
    startingPoint: 'Notices tired-looking skin after busy weeks and wants to know which everyday care steps matter.',
    stages: [
      { stage: 'Discover', question: 'What could help me care for my skin over time?', pages: ['index.html#daily-sunscreen-evidence', 'journal.html#sun-protection'], action: 'Understand the role of daily sun protection and realistic timelines.' },
      { stage: 'Understand', question: 'What should I do before sunscreen, and how much do I apply?', pages: ['how-to-use.html#sun-serum', 'how-to-use.html#your-order'], action: 'Check preparation, application amount, morning order and reapplication.' },
      { stage: 'Evaluate', question: 'Will it feel comfortable under makeup?', pages: ['sun-serum.html', 'reviews.html#sun-reviews', 'routine.html'], action: 'Review the finish and build a manageable daily routine.' },
      { stage: 'Purchase', question: 'What will it cost, and how do I order?', pages: ['sun-serum.html', 'shipping.html', 'buying-guide.html'], action: 'Check the full order details and follow the Shopee link for the 50ml option.' }
    ],
    afterPurchase: { question: 'How do I keep the routine going?', pages: ['how-to-use.html', 'what-to-expect.html', 'welcome-kit.html'], action: 'Follow the application guide and use the optional tracker or calendar reminder.' }
  },
  {
    persona: 'Aisha Rahman',
    awareness: 'Solution-aware, comparing sunscreens',
    startingPoint: 'Already wants daily sunscreen and compares ingredients, finish, price and suitability before choosing.',
    stages: [
      { stage: 'Compare', question: 'How does this sunscreen compare with my other options?', pages: ['sun-serum.html#compare-sunscreens', 'duo.html'], action: 'Compare protection, texture, product size, activity needs and cost.' },
      { stage: 'Research', question: 'Will the formula fit my skin and existing routine?', pages: ['skin-guide.html#ingredients', 'skin-guide.html#sensitivity', 'faq.html'], action: 'Read the full ingredient reference and suitability guidance.' },
      { stage: 'Reassure', question: 'Can I explore the texture before opening the full-size tube?', pages: ['welcome-kit.html#discovery-samples', 'returns.html#sample-first', 'reviews.html#sun-reviews'], action: 'Read the sample-first process and sealed-product return conditions.' },
      { stage: 'Purchase', question: 'Do the price and conditions work for me?', pages: ['sun-serum.html', 'shipping.html', 'buying-guide.html'], action: 'Confirm the selected item and full order total before paying on Shopee.' }
    ],
    afterPurchase: { question: 'How should I introduce a new product?', pages: ['skin-guide.html#sensitivity', 'how-to-use.html', 'returns.html#sample-first'], action: 'Follow new-product testing and packaging directions, keeping the full-size tube sealed while trying the sachets.' }
  },
  {
    persona: 'Daniel Lim',
    awareness: 'Product-category aware, comparing gifts',
    startingPoint: 'Wants a skincare gift and compares presentation, usefulness, price and delivery.',
    stages: [
      { stage: 'Discover', question: 'Which gift fits the person and my budget?', pages: ['christmas.html#gift-edit'], action: 'Browse by budget and consider the recipient’s preferences.' },
      { stage: 'Compare', question: 'Should I choose one product or the Duo?', pages: ['duo.html', 'sun-serum.html', 'cloudy-mist.html'], action: 'Compare the separate protection and hydration roles, contents and prices.' },
      { stage: 'Confirm', question: 'What is included, and when will it arrive?', pages: ['welcome-kit.html', 'shipping.html', 'skin-guide.html'], action: 'Check gift presentation, included extras, ingredient preferences and delivery information.' },
      { stage: 'Purchase', question: 'How do I order the right items?', pages: ['buying-guide.html', 'duo.html'], action: 'Open the relevant Shopee listings and confirm the complete order.' }
    ],
    afterPurchase: { question: 'How can the recipient get started?', pages: ['shipping.html', 'how-to-use.html', 'welcome-kit.html'], action: 'Track the order and share the application guide and care resources.' }
  }
];

export function homepageStarts(h) {
  return `<section class="section wrap journey-starts" aria-labelledby="journey-starts-heading">${h.eyebrow('A little clarity, at your pace')}<h2 id="journey-starts-heading">Start where<br><em>you are.</em></h2><nav class="journey-start-links" aria-label="Choose your skincare starting point"><a href="sunscreen-benefits.html"><strong>New to daily sunscreen?</strong><span>Understand what it can do and when to expect change.</span></a><a href="sun-serum.html#compare-sunscreens"><strong>Comparing sunscreens?</strong><span>Check protection, texture, ingredients and everyday fit.</span></a><a href="christmas.html"><strong>Choosing a thoughtful gift?</strong><span>Explore the essentials by budget and occasion.</span></a></nav></section>`;
}

export function comparisonSection(h) {
  return `<section class="section wrap journey-comparison" id="compare-sunscreens" aria-labelledby="compare-sunscreens-heading"><div class="section-heading"><div>${h.eyebrow('When you are comparing your options')}<h2 id="compare-sunscreens-heading">The details that<br><em>help you choose.</em></h2></div><p>Compare the product with your needs and the labels on other sunscreens you are considering.</p></div><div class="comparison-wrap" role="region" aria-label="Sunscreen comparison checklist" tabindex="0"><table class="comparison journey-comparison-table"><caption class="sr-only">Daily Sun Serum facts and a checklist for comparing sunscreen options</caption><thead><tr><th scope="col">What to compare</th><th scope="col">Daily Sun Serum</th><th scope="col">What to check in any option</th></tr></thead><tbody><tr><th scope="row">Protection</th><td>SPF50+ PA++++. A daily UVA/UVB protection step.</td><td>Read both the UVB and UVA protection information, then follow the application directions.</td></tr><tr><th scope="row">Feel and makeup</th><td>A lightweight, serum-like texture with a dewy finish.</td><td>Choose a finish you enjoy. Check how it settles with your own skincare and makeup.</td></tr><tr><th scope="row">Ingredients and skin</th><td>Full <a href="skin-guide.html#ingredients">Ingredient Reference</a> and <a href="skin-guide.html#sensitivity">suitability guidance</a>.</td><td>Check known sensitivities and introduce a new product carefully. Texture alone cannot establish suitability.</td></tr><tr><th scope="row">Your activity</th><td>A water-resistance rating has not been established for the linked version.</td><td>For swimming or heavy sweating, choose a sunscreen with a water-resistance claim on its label.</td></tr><tr><th scope="row">Size and price</th><td>50ml at S$39.90. View current welcome pricing beside the purchase link.</td><td>Compare the amount you receive and the complete order cost, including delivery.</td></tr><tr><th scope="row">Trying it first</th><td>Two complimentary SPF sachets. Explore <a href="welcome-kit.html#discovery-samples">the samples</a> and <a href="returns.html#sample-first">sealed-product return conditions</a>.</td><td>Check what a sample includes and the return deadline before opening a full-size product.</td></tr></tbody></table></div><div class="inline-actions"><a class="text-link" href="how-to-use.html#sun-serum">Check the application steps</a><a class="text-link" href="skin-guide.html#ingredients">Read the full ingredients</a></div></section>`;
}
