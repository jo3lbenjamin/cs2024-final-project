// Search-focused copy stays in visible, server-rendered HTML.
// Suggested search intents are editorial choices, not verified search-volume findings.
export function applySearchCopy(pages, h) {
  const edit = (file, title, description, transform) => {
    const page = pages.find(item => item.file === file);
    if (!page) throw new Error('Missing search-copy page: ' + file);
    page.title = title;
    page.description = description;
    const previous = page.content;
    page.content = () => transform(previous());
  };
  const replace = (html, before, after) => {
    if (!html.includes(before)) throw new Error('Search-copy anchor missing: ' + before.slice(0, 90));
    return html.replace(before, after);
  };
  const sunCareAnswers = `<section class="section wrap narrow" aria-labelledby="sunscreen-answers-heading">${h.eyebrow('Daily sunscreen, explained')}<h2 id="sunscreen-answers-heading">Sunscreen and<br><em>premature skin aging.</em></h2>${h.faqs([
    ['Can sunscreen help prevent premature skin aging?', 'Yes. Consistent broad-spectrum sunscreen use helps prevent early signs of skin aging caused by UV exposure. Make it part of sun protection alongside shade and protective clothing. Read our <a href="journal.html#sun-protection">guide to sunscreen and skin aging</a>.'],
    ['How does sunscreen fit everyday life in Singapore?', 'A commute, a walk for lunch and time outdoors can all involve sun exposure. Daily Sun Serum is a lightweight SPF50+ PA++++ sunscreen with a dewy finish. Follow its application and reapplication directions.'],
    ['Can I wear sunscreen under makeup?', 'Apply sunscreen as the last step of skincare, let it settle, then apply makeup gently. See <a href="how-to-use.html">how to apply sunscreen before makeup</a> for the routine order.']
  ])}<p class="source-note">Sun-care guidance: <a href="https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-select-sunscreen" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: choosing sunscreen</a>.</p></section>`;
  edit('index.html', 'Aureveil | Lightweight SPF50+ Sunscreen Singapore',
    'Discover lightweight SPF50+ PA++++ sunscreen and hydrating facial mist from Aureveil. Daily sun protection and comfortable hydration for life in Singapore.',
    html => {
      html = replace(html, 'Daily care. Quietly extraordinary.', 'Lightweight sunscreen. Everyday care.');
      html = replace(html, 'Daily protection. A moment of calm.<br>Thoughtful skincare for the life you live.', 'A lightweight SPF50+ PA++++ sunscreen for daily UV protection.<br>Comfortable hydration for full days in Singapore.');
      html = replace(html, 'Discover the Sun Serum', 'Discover our sunscreen');
      html = replace(html, 'alt="Aureveil Daily Sun Serum on ivory stone beside pale-blue glass in morning light"', 'alt="Aureveil Daily Sun Serum sunscreen on ivory stone beside pale-blue glass in morning light"');
      html = replace(html, 'Skincare doesn’t have to ask more of your day.<br>Meet two essentials that make room for you.', 'Daily sunscreen for UV protection.<br>Hydrating facial mist for a refreshing reset.');
      html = replace(html, 'Lightweight protection. A fresh, dewy finish.', 'A lightweight daily sunscreen with a fresh, dewy finish.');
      html = replace(html, 'A fine cloud of hydration. A moment for you.', 'A hydrating facial mist for a refreshing, dewy feel.');
      html = replace(html, 'Aureveil is a considered skincare edit for full lives: daily protection and comfortable hydration, without turning your routine into another to-do list.', 'Aureveil pairs daily sunscreen with comfortable hydration for full lives. Consistent sun protection helps prevent premature skin aging caused by UV exposure, without turning your routine into another to-do list.');
      html = replace(html, '<section class="section wrap"><div class="section-heading"><div>' + h.eyebrow('Care, made clearer'), sunCareAnswers + '<section class="section wrap"><div class="section-heading"><div>' + h.eyebrow('Care, made clearer'));
      return replace(html, 'Why your daily SPF deserves a permanent place.', 'How daily sunscreen helps prevent premature skin aging.');
    });
  edit('sun-serum.html', 'Daily Sun Serum SPF50+ Sunscreen 50ml | Aureveil',
    'Meet Aureveil Daily Sun Serum, a lightweight SPF50+ PA++++ sunscreen with hydrating ingredients and a dewy finish. Explore application before makeup.',
    html => {
      html = replace(html, 'Daily protection.<br><em>Beautifully light.</em>', 'Daily sunscreen.<br><em>Beautifully light.</em>');
      html = replace(html, 'For your morning commute, lunch outdoors and plans after work, make sun protection a considered part of your day.', 'For your morning commute, lunch outdoors and plans after work, make daily sunscreen part of your sun-care routine. Consistent broad-spectrum sun protection helps prevent premature skin aging caused by UV exposure. <a href="journal.html#sun-protection">Read how sunscreen supports your skin over time</a>.');
      return replace(html, 'Get to know <em>your SPF.</em>', 'Get to know <em>your sunscreen.</em>');
    });
  edit('cloudy-mist.html', 'Hydrating Facial Mist 120ml | Aureveil Cloud Mist',
    'Explore Aureveil Cloud Mist, a hydrating facial mist for dry-feeling skin and air-conditioned days. Discover its fine spray, dewy finish and routine role.',
    html => replace(html, '<p class="product-name">Cloud Mist</p>', '<p class="product-name">Cloud Mist<br>Hydrating facial mist</p>'));
  edit('duo.html', 'Sunscreen & Hydrating Mist Duo | Aureveil',
    'Compare Aureveil Daily Sun Serum SPF50+ sunscreen and Cloud Mist hydrating facial spray. Explore the Protect + Refresh Duo, prices and included extras.',
    html => html);
  edit('journal.html', 'Sunscreen & Premature Skin Aging Guide | Aureveil',
    'Can sunscreen help prevent premature skin aging? Explore daily SPF, sunscreen before makeup and hydrating facial mist in Aureveil’s skincare guides.',
    html => {
      html = replace(html, 'A little knowledge.<br><em>A gentler routine.</em>', 'Sunscreen, skin aging<br><em>and everyday care.</em>');
      html = replace(html, '>Daily SPF</a>', '>Sunscreen and skin aging</a>');
      html = replace(html, 'Why your daily SPF deserves<br><em>a permanent place.</em>', 'Can daily sunscreen help<br><em>prevent premature skin aging?</em>');
      html = replace(html, '<p class="lead">A useful skincare routine begins with things you can repeat.</p>', '<p class="lead">Yes. Consistent sunscreen use, alongside shade and protective clothing, helps prevent early signs of skin aging caused by UV exposure.</p>');
      html = replace(html, 'The Aureveil daily edit begins with Daily Sun Serum: lightweight hydration, SPF50+ PA++++ protection and a dewy finish.', 'The Aureveil daily edit begins with Daily Sun Serum: a lightweight SPF50+ PA++++ sunscreen with hydrating ingredients and a dewy finish.');
      html = replace(html, 'Give SPF its own step.', 'Sunscreen before makeup');
      return replace(html, 'Use sunscreen as the last step of basic skincare, following its packaging directions.', 'Apply sunscreen as the last step of basic skincare, following its packaging directions, and let it settle before makeup.');
    });
  edit('how-to-use.html', 'How to Apply Sunscreen Before Makeup | Aureveil',
    'Learn how to apply sunscreen before makeup, follow reapplication guidance and use hydrating facial mist. A simple morning routine from Aureveil.',
    html => html.replace(/<h1>[\s\S]*?<\/h1>/, '<h1>How to apply sunscreen.<br><em>Make room for your ritual.</em></h1>'));
  edit('skin-guide.html', 'Sunscreen & Facial Mist for Your Skin Type | Aureveil',
    'Compare sunscreen and facial mist textures for oily, dry, combination or sensitive skin. Read Aureveil ingredient lists and guidance before trying new skincare.',
    html => html);
}

