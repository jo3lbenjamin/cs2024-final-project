const external=(url,label)=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;

const yesstyle2026='https://www.yesstyle.com/blog/2026-10-05/winners-of-the-yesstyle-awards-2026/';
const oliveyoung2025='https://www.oliveyoung.co.kr/store/amusement/award.do?awardedYear=2025';
const scope='Recognition for the original Water-Fit Sun Serum available through our sunscreen product link.';

export const verifiedAwards=[
  {
    id:'yesstyle-favorite-sun-care-2026',publisher:'YesStyle Awards',year:'2026',category:'Favorite Sun Care',result:'1st place',rank:1,
    description:'First place in the sun-care category of the 2026 community awards.',
    sourceURL:yesstyle2026,sourceLabel:'YesStyle 2026 winners',sourceDate:'2026-10-05',
    sourceType:'Official award results',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'yesstyle-viral-beauty-2026',publisher:'YesStyle Awards',year:'2026',category:'Viral Korean Beauty Product',result:'1st place',rank:1,
    description:'First place in the 2026 trend category celebrating viral Korean beauty products.',
    sourceURL:yesstyle2026,sourceLabel:'YesStyle 2026 winners',sourceDate:'2026-10-05',
    sourceType:'Official award results',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'olive-young-global-trend-2025',publisher:'Olive Young Awards',year:'2025',category:'Global Trend',result:'Best Performer',
    description:'Named a Best Performer in Global Trend, recognising strong international interest in Korean beauty.',
    sourceURL:oliveyoung2025,sourceLabel:'Olive Young 2025 award archive',
    sourceType:'Official award archive',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'yesstyle-favorite-sunscreen-2025',publisher:'YesStyle Awards',year:'2025',category:'Favorite Sunscreen',result:'Winner',
    description:'Selected as the Favorite Sunscreen in YesStyle’s 2025 awards.',
    sourceURL:'https://www.yesstyle.com/blog/2025-12-23/voting-begins-now-for-the-2025-yesstyle-awards/',sourceLabel:'YesStyle 2025 awards and results',
    sourceType:'Official award page',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'glowpick-first-half-2025',publisher:'Glowpick Awards',year:'2025 · First half',category:'Sun Essence / Serum',result:'1st place',rank:1,
    description:'The first-half 2025 awards place the sunscreen at number one in Sun Essence / Serum.',
    sourceURL:'https://www.glowpick.com/awards/v2/35?categoryIdFirst=4679&categoryIdSecond=4937&lang=en-US',sourceLabel:'Glowpick first-half 2025 results',
    sourceType:'Official category results',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'glowpick-annual-2025',publisher:'Glowpick Awards',year:'2025 · Annual',category:'Sun Essences / Serums',result:'3rd place',rank:3,
    description:'Third place in the full-year 2025 Sun Essences / Serums category.',
    sourceURL:'https://www.glowpick.com/awards/v2/36?categoryIdFirst=5053&categoryIdSecond=5350&lang=en-US',sourceLabel:'Glowpick annual 2025 results',
    sourceType:'Official category results',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'glowpick-annual-2024',publisher:'Glowpick Awards',year:'2024 · Annual',category:'Sun Essence / Serum',result:'2nd place',rank:2,
    description:'Second place in the full-year 2024 Sun Essence / Serum category.',
    sourceURL:'https://www.glowpick.com/awards/v2/34?categoryIdFirst=4239&categoryIdSecond=4544&lang=en-US',sourceLabel:'Glowpick annual 2024 results',
    sourceType:'Official category results',honours:1,scope:'Original Water-Fit Sun Serum'
  },
  {
    id:'daily-vanity-2024',publisher:'Daily Vanity Beauty Awards',year:'2024',category:'Sun Protection Serum',result:'Three honours',
    description:'Readers’ Choice, Gen Z’s Choice and Millennial’s Choice in the Sun Protection Serum category.',
    sourceURL:'https://uploads.dailyvanity.sg/wp-content/uploads/2024/03/DVBA-2024-Winners.pdf#page=11',sourceLabel:'Daily Vanity 2024 winners (PDF, page 11)',
    sourceType:'Official winners document',honours:3,scope:'Original Water-Fit Sun Serum'
  }
];

export const additionalRecognition={
  publisher:'Stylevana',year:'2026 · Mid-year',category:'VANA Awards',result:'Winner-collection recognition',
  description:'The 50ml sunscreen appears in Stylevana’s 2026 Mid-Year VANA Awards winner collection.',
  sourceURL:'https://www.stylevana.com/en_US/vana-award.html?my_main_category=26049',
  sourceLabel:'Explore the Stylevana winner collection',sourceType:'Official winner collection',
  scope:'Collection listing; no individual category or placing stated'
};

export const awardSelectionSources={
  yesstyle:'https://www.yesstyle.com/blog/2026-09-15/voting-begins-now-for-the-2026-yesstyle-awards/',
  oliveyoung:'https://cjnews.cj.net/%EB%AA%A8%EB%91%90%EA%B0%80-%EC%82%AC%EB%9E%91%ED%95%9C-%EC%A0%9C%ED%92%88%EC%9D%84-%EB%AA%A8%EB%91%90%EA%B0%80-%EC%82%AC%EB%9E%91%ED%95%A0-%ED%98%9C%ED%83%9D%EC%9C%BC%EB%A1%9C-cj/'
};

const card=award=>`<article class="award-card" id="${award.id}"><p class="micro">${award.publisher} · ${award.year}</p><p class="award-result">${award.result}</p><h3>${award.category}</h3><p>${award.description}</p><p class="source-note">${external(award.sourceURL,award.sourceLabel)}</p></article>`;

export function awardsHomepage(h){
  const highlights=verifiedAwards.slice(0,3);
  return `<section class="section recognition-strip" aria-labelledby="recognition-home-heading"><div class="wrap"><div class="section-heading"><div>${h.eyebrow('Recognised. Loved. Reached for.')}<h2 id="recognition-home-heading">Celebrated daily<br><em>sun care.</em></h2></div><p>${scope}</p></div><div class="recognition-strip-grid">${highlights.map(award=>`<article><p class="micro">${award.publisher} · ${award.year}</p><h3>${award.result}</h3><p>${award.category}</p><a class="text-link" href="awards.html#${award.id}">Explore the recognition ${h.arrow}</a></article>`).join('')}</div><p class="recognition-more"><a class="text-link" href="awards.html">Discover the awards and their stories ${h.arrow}</a></p></div></section>`;
}

function awardsPage(h){
  return {
    file:'awards.html',nav:'shop',ogImage:'aureveil-recognition',
    title:'Sunscreen Awards & Recognition | Aureveil',
    description:'Explore documented sunscreen awards from YesStyle, Olive Young, Glowpick and Daily Vanity, with category results, dates and original sources.',
    content:()=>`${h.crumbs('Awards & recognition')}<header class="recognition-hero wrap"><div>${h.eyebrow('Recognition behind our sunscreen edit')}<h1>Celebrated daily<br><em>sun care.</em></h1><p>${scope}</p><p>From community favourites to global beauty trends, explore the honours and the stories behind them.</p><a class="text-link" href="#award-results">Explore the results ${h.arrow}</a></div><figure><img src="assets/images/aureveil-recognition.webp" srcset="assets/images/aureveil-recognition-600.webp 600w, assets/images/aureveil-recognition.webp 1200w" sizes="(max-width: 760px) calc(100vw - 40px), 50vw" alt="Aureveil Daily Sun Serum on an ivory stone plinth against a softly lit pastel-blue backdrop" width="1200" height="800" fetchpriority="high" decoding="async"></figure></header><section class="section wrap" id="award-results" aria-labelledby="award-results-heading"><div class="section-heading"><div>${h.eyebrow('A record of recognition')}<h2 id="award-results-heading">The category.<br><em>The moment.</em></h2></div><p>Ten category honours across eight documented award entries, with an original source for each.</p></div><div class="award-grid">${verifiedAwards.map(card).join('')}</div></section><section class="section wrap narrow"><div>${h.eyebrow('More to discover')}<h2>Another place<br><em>in the beauty edit.</em></h2></div><article class="award-card"><p class="micro">${additionalRecognition.publisher} · ${additionalRecognition.year}</p><h3>${additionalRecognition.category}</h3><p>${additionalRecognition.description}</p><p class="source-note">Listed here as collection recognition, with the individual category and placing left unspecified.</p><p>${external(additionalRecognition.sourceURL,additionalRecognition.sourceLabel)}</p></article></section><section class="section wrap narrow" id="selection-methods"><div>${h.eyebrow('Behind the recognition')}<h2>How the awards<br><em>are selected.</em></h2></div><h3>YesStyle · Community favourites</h3><p>The 2026 awards invited community votes across 107 nominees and 24 categories. Trend-category voting took place on Instagram; voting on the website covered the categories built from sales-based nominees.</p><p class="source-note">${external(awardSelectionSources.yesstyle,'Read the YesStyle voting process')}</p><h3>Olive Young · A year of shopping trends</h3><p>CJ’s 2025 awards announcement describes analysis of approximately 180 million purchase data points from July 2024 to June 2025, alongside category trends. The Global Trend recognition reflects a wider view of domestic and international shopping.</p><p class="source-note">${external(awardSelectionSources.oliveyoung,'Read CJ’s 2025 awards announcement')}</p><p>Each award brings its own perspective. Explore the category and year, then find the texture, routine and product details that matter to you.</p></section><section class="section wrap guide-signpost"><div><h2>Meet your daily<br><em>essential.</em></h2><p>Explore the lightweight finish, sunscreen research and a simple morning routine.</p></div><div class="inline-actions">${h.btn('sun-serum.html','Discover Daily Sun Serum')}${h.btn('evidence.html','Explore the research','btn btn-outline')}</div></section>`
  };
}

export const projectTeam=[
  {name:'Marcus Chan Sheng Tong',matriculation:'U2322126B',email:'MCHAN039@e.ntu.edu.sg'},
  {name:'Tan Shu Wen',matriculation:'U2321054C',email:'tans0429@e.ntu.edu.sg'},
  {name:'Joel Benjamin Surya',matriculation:'U2421205E',email:'joel007@e.ntu.edu.sg'}
];

function teamPage(h){
  return {
    file:'team.html',nav:'about',
    title:'Our Team | Aureveil',
    description:'Meet Marcus Chan Sheng Tong, Tan Shu Wen and Joel Benjamin Surya, the team behind the Aureveil website, with school contact details.',
    content:()=>`${h.crumbs('Our team')}<header class="page-heading wrap">${h.eyebrow('The people behind Aureveil')}<h1>Thoughtful work.<br><em>A shared vision.</em></h1><p>Meet the team behind the Aureveil website.</p></header><section class="section wrap" aria-label="Aureveil project team"><div class="team-grid">${projectTeam.map(member=>`<article class="team-card"><h2>${member.name}</h2><dl><div><dt>Matriculation number</dt><dd>${member.matriculation}</dd></div><div><dt>School email</dt><dd><a href="mailto:${member.email}">${member.email}</a></dd></div></dl></article>`).join('')}</div></section><section class="section wrap guide-signpost"><div><h2>Care for today.<br><em>Glow into tomorrow.</em></h2><p>Discover our approach to daily care and the essentials at the heart of Aureveil.</p></div><div class="inline-actions">${h.btn('about.html','Read our story')}${h.btn('index.html','Explore Aureveil','btn btn-outline')}</div></section>`
  };
}

export function createRecognitionPages(h){return [awardsPage(h),teamPage(h)];}
