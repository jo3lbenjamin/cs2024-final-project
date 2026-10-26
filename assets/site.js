(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const dropdowns=[...document.querySelectorAll('.shop-menu')].map(container=>({container,button:container.querySelector('button'),links:container.querySelector('.shop-links')}));
  const closeShop=()=>dropdowns.forEach(({button,links})=>{button.setAttribute('aria-expanded','false');links.hidden=true;});
  const closeMenu=()=>{menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');nav?.classList.remove('is-open');closeShop();};
  menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));menu.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');nav.classList.toggle('is-open',expanded);if(!expanded)closeShop();});
  dropdowns.forEach(({button,links})=>button.addEventListener('click',()=>{const expanded=button.getAttribute('aria-expanded')!=='true';closeShop();button.setAttribute('aria-expanded',String(expanded));links.hidden=!expanded;}));
  document.addEventListener('click',event=>{if(!event.target.closest('.shop-menu'))closeShop();if(!event.target.closest('.site-header'))closeMenu();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){const opened=dropdowns.find(({button})=>button.getAttribute('aria-expanded')==='true');if(opened){closeShop();opened.button.focus();}else if(menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}}});
  const dialog=document.querySelector('#duo-dialog');
  document.querySelectorAll('[data-open-duo]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
  dialog?.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});
  const form=document.querySelector('#routine-form');
  const result=document.querySelector('#routine-result');
  form?.classList.add('is-ready');
  form?.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const pairing=data.get('edit')==='duo'||data.get('priority')==='both';
    const mistFirst=data.get('priority')==='hydration'&&!pairing;
    const title=pairing?'Your Protect + Refresh ritual.':mistFirst?'Your little hydration reset.':'Your daily protection essential.';
    const product=pairing?'The Protect + Refresh Duo':mistFirst?'Cloud Mist':'Daily Sun Serum';
    const target=pairing?'duo.html':mistFirst?'cloudy-mist.html':'sun-serum.html';
    const desc=pairing?'Two different roles, one considered edit. Explore the Daily Sun Serum for labelled UV protection and the Cloud Mist for hydration.':mistFirst?'You are interested in hydration and a focused edit. Cloud Mist could be an optional refreshing step. It does not provide SPF, so keep labelled sun protection in your day.':'Start with our main product: a lightweight SPF50+ PA++++ sunscreen. Make it the last step of basic skincare and follow the label for application and reapplication.';
    result.innerHTML=`<p class="eyebrow">Your daily edit</p><h2>${title}</h2><p>${desc}</p>${data.get('morning')==='makeup'?'<p>On makeup mornings, finish skincare with sunscreen and let it settle before makeup. We suggest Cloud Mist for hydration; no makeup-fixing claim is made.</p>':'<p>Keep the steps comfortable and repeatable. Following product directions matters more than adding extra products.</p>'}<a class="btn btn-primary" href="${target}">Explore ${product} <span aria-hidden="true">→</span></a><button class="text-link reset-quiz" type="button">Start again <span aria-hidden="true">↻</span></button><p class="fine-print">This is product guidance, not a skin diagnosis. Your selections have not been saved or sent anywhere.</p>`;
    form.hidden=true;result.hidden=false;result.focus();
    result.querySelector('.reset-quiz').addEventListener('click',()=>{form.reset();form.hidden=false;result.hidden=true;result.innerHTML='';form.querySelector('input').focus();});
  });
})();

// Progressive enhancements: no storage, network submission, scroll interception or external libraries.
(() => {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const prefersStill = () => reducedMotion?.matches === true;
  const header = document.querySelector('.site-header');
  let scrollPending = false;
  const updateHeader = () => { header?.classList.toggle('is-scrolled', window.scrollY > 12); scrollPending = false; };
  window.requestAnimationFrame(() => window.requestAnimationFrame(updateHeader));
  window.addEventListener('scroll', () => {
    if (!scrollPending) { scrollPending = true; window.requestAnimationFrame(updateHeader); }
  }, { passive: true });

  // Reveal only content below the initial viewport. A missing observer leaves everything visible.
  let revealObserver;
  const showAll = () => {
    revealObserver?.disconnect();
    document.documentElement.classList.remove('motion-ready');
    document.querySelectorAll('.reveal,.image-reveal').forEach(element => element.classList.add('is-visible'));
    document.querySelectorAll('.gallery-incoming').forEach(element => { element.getAnimations?.().forEach(animation => animation.cancel()); element.remove(); });
  };
  if (!prefersStill() && 'IntersectionObserver' in window) {
    const blocks = document.querySelectorAll('.section-heading,.product-card,.editorial-copy,.story-panel,.values article,.help-grid article,.ingredient-list article,.journal-card,.quiz-aside,.routine-form,.duo-copy');
    const revealPlans = new WeakMap();
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight - 16) {
          entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target);
        } else {
          const plan = revealPlans.get(entry.target);
          entry.target.classList.add(plan.className);
          entry.target.style.setProperty('--reveal-delay', `${plan.delay}ms`);
        }
      });
    }, { threshold: 0.08 });
    const prepare = (element, className, delay = 0) => {
      revealPlans.set(element, {className, delay});
      revealObserver.observe(element);
    };
    blocks.forEach(element => {
      const siblings = element.parentElement?.matches('.product-grid,.journal-grid,.values,.help-grid') ? [...element.parentElement.children].indexOf(element) : 0;
      prepare(element, 'reveal', Math.min(siblings, 2) * 90);
    });
    document.querySelectorAll('.editorial-image,.journal-image,.image-story>div:first-child,.ingredient-visual').forEach(element => prepare(element, 'image-reveal'));
    document.documentElement.classList.add('motion-ready');
    // Keyboard navigation must never land on visually hidden content.
    document.addEventListener('focusin', event => event.target.closest?.('.reveal,.image-reveal')?.classList.add('is-visible'));
    reducedMotion?.addEventListener?.('change', event => { if (event.matches) showAll(); });
    window.addEventListener('pageshow', event => { if (event.persisted) showAll(); });
  }

  document.querySelectorAll('.product-gallery').forEach(gallery => {
    const stage = gallery.querySelector('.gallery-main');
    const main = stage.querySelector('img');
    const buttons = [...gallery.querySelectorAll('.thumb')];
    const status = document.createElement('p');
    status.className = 'gallery-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    gallery.append(status);
    let sequence = 0;
    const describe = button => button.querySelector('img').alt.replace(' thumbnail', '');
    const setStatus = button => { status.textContent = `${String(buttons.indexOf(button) + 1).padStart(2, '0')} / ${String(buttons.length).padStart(2, '0')} · ${describe(button)}`; };
    setStatus(buttons[0]);
    buttons.forEach(button => button.addEventListener('click', async () => {
      const request = ++sequence;
      const nextSrc = `assets/images/${button.dataset.gallery}.webp`;
      if (main.getAttribute('src') === nextSrc) { stage.removeAttribute('aria-busy'); return; }
      const preload = new Image();
      preload.src = nextSrc;
      stage.setAttribute('aria-busy', 'true');
      try {
        if (preload.decode) await preload.decode();
        else if (!preload.complete) await new Promise((resolve, reject) => { preload.onload = resolve; preload.onerror = reject; });
        if (request !== sequence) return;
        stage.querySelectorAll('.gallery-incoming').forEach(element => element.remove());
        const outgoing = main.cloneNode();
        outgoing.classList.add('gallery-incoming'); outgoing.alt = ''; outgoing.setAttribute('aria-hidden', 'true');
        main.src = nextSrc; main.alt = describe(button);
        main.classList.toggle('cutout', ['aureveil-sun-serum', 'aureveil-cloudy-mist'].includes(button.dataset.gallery));
        main.width = Number(button.dataset.imageWidth) || (button.dataset.gallery.includes('campaign') ? 960 : 800);
        main.height = Number(button.dataset.imageHeight) || (button.dataset.gallery.includes('campaign') ? 1200 : 800);
        buttons.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
        setStatus(button);
        if (!prefersStill() && typeof outgoing.animate === 'function') {
          stage.append(outgoing);
          const animation = outgoing.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 340, easing: 'ease-out', fill: 'forwards' });
          animation.finished.catch(() => {}).finally(() => outgoing.remove());
        }
      } catch {
        if (request === sequence) status.textContent = 'This image could not load. Please try another view.';
      } finally { if (request === sequence) stage.removeAttribute('aria-busy'); }
    }));
  });

  const story = document.querySelector('.ritual-story');
  if (story && 'IntersectionObserver' in window) {
    const steps = [...story.querySelectorAll('.ritual-step')];
    const progress = story.querySelector('.story-progress>span');
    const count = story.querySelector('.story-index');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const index = steps.indexOf(entry.target);
        steps.forEach(step => step.classList.toggle('is-active', step === entry.target));
        progress.style.width = `${(index + 1) / steps.length * 100}%`;
        count.textContent = `${String(index + 1).padStart(2, '0')} / 03`;
      });
    }, { rootMargin: '-24% 0px -34% 0px', threshold: 0 });
    steps.forEach(step => observer.observe(step));
  }
})();

// Ingredient role explorer and skin-preference guide: entirely within the current page.
(() => {
  const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  function keyboardChoices(buttons, select) {
    buttons.forEach((button, index) => button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      else return;
      event.preventDefault(); buttons[next].focus(); select(buttons[next]);
    }));
  }
  const explorer = document.querySelector('.ingredient-explorer');
  if (explorer) {
    const buttons = [...explorer.querySelectorAll('[data-ingredient]')];
    const panels = [...explorer.querySelectorAll('[data-ingredient-panel]')];
    const scene = explorer.querySelector('.ingredient-scene');
    const replay = explorer.querySelector('.ingredient-replay');
    const canAnimate = typeof scene.querySelector('[data-motion]')?.animate === 'function';
    const stopMotion = () => scene.querySelectorAll('[data-motion]').forEach(node => node.getAnimations?.().forEach(animation => animation.cancel()));
    const play = () => {
      stopMotion();
      if (motion?.matches || !canAnimate) return;
      const mode = explorer.dataset.mode;
      scene.querySelectorAll(`[data-motion="${mode}"]`).forEach((node, index) => {
        const frames = mode === 'refresh'
          ? [{ opacity: 0, transform: 'translateX(-15px)' }, { opacity: 1, transform: 'translateX(0)' }]
          : mode === 'hydration'
            ? [{ opacity: 0.25, transform: 'translateY(-14px)' }, { opacity: 1, transform: 'translateY(0)' }]
            : [{ opacity: 0.25 }, { opacity: 1 }];
        node.animate(frames, { duration: 1400, delay: index * 100, easing: 'ease-out', iterations: 1 });
      });
    };
    const choose = button => {
      explorer.dataset.mode = button.dataset.ingredient;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      panels.forEach(panel => { panel.hidden = panel.dataset.ingredientPanel !== button.dataset.ingredient; });
      play();
    };
    explorer.classList.add('is-ready');
    explorer.querySelector('.ingredient-controls').hidden = false;
    panels.forEach(panel => { panel.hidden = panel.dataset.ingredientPanel !== explorer.dataset.mode; });
    const syncMotion = () => { replay.hidden = !!motion?.matches || !canAnimate; if (motion?.matches) stopMotion(); };
    syncMotion(); motion?.addEventListener?.('change', syncMotion);
    buttons.forEach(button => button.addEventListener('click', () => choose(button)));
    keyboardChoices(buttons, choose);
    replay.addEventListener('click', play);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { play(); observer.disconnect(); }
      }, { threshold: 0.25 });
      observer.observe(scene);
    }
  }
  const fitSection = document.querySelector('.skin-fit-section');
  if (fitSection) {
    const controls = fitSection.querySelector('.skin-fit-controls');
    const buttons = [...controls.querySelectorAll('[data-skin-fit]')];
    const panels = [...fitSection.querySelectorAll('[data-fit-panel]')];
    const choose = button => {
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      panels.forEach(panel => { panel.hidden = panel.dataset.fitPanel !== button.dataset.skinFit; });
    };
    controls.hidden = false; fitSection.querySelector('.skin-fit-panels').classList.add('is-ready');
    choose(buttons[0]);
    buttons.forEach(button => button.addEventListener('click', () => choose(button)));
    keyboardChoices(buttons, choose);
  }
})();

// Search local FAQs without storing or transmitting the search.
(() => {
 const panel=document.querySelector('.faq-search-panel');
 if(panel){
  const input=panel.querySelector('#faq-search'),clear=panel.querySelector('#faq-search-clear'),status=panel.querySelector('#faq-search-status');
  const groups=[...document.querySelectorAll('[data-faq-group]')],empty=document.querySelector('.faq-empty');
  const entries=groups.flatMap(group=>[...group.querySelectorAll('details')].map(detail=>({group,detail,text:detail.textContent.toLowerCase()})));
  const filter=()=>{const query=input.value.trim().toLowerCase();let count=0;for(const item of entries){item.detail.hidden=!!query&&!item.text.includes(query);if(!item.detail.hidden)count++;}for(const group of groups){group.hidden=![...group.querySelectorAll('details')].some(detail=>!detail.hidden);const jump=document.querySelector('.faq-nav a[href="#'+group.id+'"]');if(jump)jump.hidden=group.hidden;}empty.hidden=count>0;status.textContent=query?count+' matching '+(count===1?'answer':'answers'):entries.length+' questions to explore';};
  panel.hidden=false;input.addEventListener('input',filter);clear.addEventListener('click',()=>{input.value='';filter();input.focus();});filter();
 }
 const buttons=[...document.querySelectorAll('[data-copy-question]')],status=document.querySelector('.copy-question-status');
 if(navigator.clipboard?.writeText){for(const button of buttons){button.hidden=false;button.addEventListener('click',async()=>{const text=document.getElementById(button.dataset.copyQuestion)?.textContent;if(!text)return;try{await navigator.clipboard.writeText(text);status.textContent='Question copied. Open your chosen listing and paste it into seller chat.';}catch{status.textContent='Please select and copy the question text above.';}});}}
})();

// The welcome calculator updates only on-site display. It does not submit an order or change Shopee checkout.
(() => {
 const offer=document.querySelector('.welcome-offer');if(!offer)return;
 const controls=offer.querySelector('.offer-controls'),radios=[...offer.querySelectorAll('[name="offer-product"]')],first=offer.querySelector('#offer-first-purchase');
 const single=offer.querySelector('#offer-purchase-single'),link=single.querySelector('a'),duo=offer.querySelector('#offer-purchase-duo');
 const sunLink=document.querySelector('#duo-dialog .dialog-products>div:first-child a').href,mistLink=document.querySelector('#duo-dialog .dialog-products>div:last-child a').href;
 const format=cents=>'S$'+(cents/100).toFixed(2);
 const update=()=>{
  const selected=radios.find(radio=>radio.checked),kind=selected.value,base=Number(selected.dataset.price),individual=Number(selected.dataset.individual),discount=first.checked?Math.round(base/10):0,total=base-discount;
  const name=kind==='sun'?'Daily Sun Serum':kind==='mist'?'Cloud Mist':'Protect + Refresh Duo';
  offer.querySelector('#offer-result-title').textContent=name;offer.querySelector('#offer-size').textContent=kind==='sun'?'50ml':kind==='mist'?'120ml':'Daily Sun Serum 50ml + Cloud Mist 120ml';
  offer.querySelector('#offer-base').textContent=format(base);offer.querySelector('#offer-discount').textContent='−'+format(discount);offer.querySelector('#offer-total').textContent=format(total);
  offer.querySelector('#offer-pairing-row').hidden=kind!=='duo';offer.querySelector('#offer-pairing').textContent=format(individual-base);
  offer.querySelector('#offer-savings').textContent=individual>total?'You save '+format(individual-total)+'.':'Your everyday essential, at its regular price.';
  single.hidden=kind==='duo';duo.hidden=kind!=='duo';
  if(kind!=='duo'){link.href=kind==='sun'?sunLink:mistLink;link.innerHTML='View '+name+' on Shopee <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" stroke-width="1.5"/></svg><span class="sr-only"> (opens in a new tab)</span>';}
  offer.querySelector('#offer-result-status').textContent=name+': '+format(total)+', '+(first.checked?'including the first-purchase saving':'without the first-purchase saving')+'. Delivery excluded.';
 };
 const fromHash=()=>{const requested=location.hash.slice(1);const matched=radios.find(radio=>radio.value===requested);if(matched)matched.checked=true;update();};
 controls.hidden=false;offer.classList.add('offer-enhanced');radios.forEach(radio=>radio.addEventListener('change',update));first.addEventListener('change',update);window.addEventListener('hashchange',fromHash);fromHash();
})();
