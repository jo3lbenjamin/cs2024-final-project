(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const shop = document.querySelector('.nav-shop');
  const shopLinks = document.querySelector('#shop-links');
  const closeShop = () => {shop?.setAttribute('aria-expanded','false'); if(shopLinks) shopLinks.hidden=true;};
  const closeMenu = () => {menu?.setAttribute('aria-expanded','false'); menu?.setAttribute('aria-label','Open navigation'); nav?.classList.remove('is-open'); closeShop();};
  menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));menu.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');nav.classList.toggle('is-open',expanded);});
  shop?.addEventListener('click',()=>{const expanded=shop.getAttribute('aria-expanded')!=='true';shop.setAttribute('aria-expanded',String(expanded));shopLinks.hidden=!expanded;});
  document.addEventListener('click',event=>{if(!event.target.closest('.shop-menu'))closeShop();if(!event.target.closest('.site-header'))closeMenu();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(shop?.getAttribute('aria-expanded')==='true'){closeShop();shop.focus();}else if(menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}}});
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
        main.width = button.dataset.gallery.includes('campaign') ? 960 : 800;
        main.height = button.dataset.gallery.includes('campaign') ? 1200 : 800;
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
