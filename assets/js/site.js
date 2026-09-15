(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });

  const cards = [...document.querySelectorAll('[data-project]')];
  if (!cards.length) return;
  const search = document.querySelector('#project-search');
  const year = document.querySelector('#project-year');
  const total = document.querySelector('#project-total');
  const pages = document.querySelector('#project-pages');
  const prev = document.querySelector('#project-prev');
  const next = document.querySelector('#project-next');
  const size = 10;
  let page = 1;
  let filtered = cards;
  function render() {
    const query = search.value.trim().toLowerCase();
    filtered = cards.filter(card => (!year.value || card.dataset.year === year.value) && card.dataset.search.includes(query));
    const pageCount = Math.max(1, Math.ceil(filtered.length / size));
    page = Math.min(page, pageCount);
    cards.forEach(card => card.hidden = true);
    filtered.slice((page - 1) * size, page * size).forEach(card => card.hidden = false);
    total.textContent = filtered.length;
    pages.innerHTML = '';
    for (let i = 1; i <= pageCount; i++) { const button = document.createElement('button'); button.textContent = i; button.className = i === page ? 'active' : ''; button.setAttribute('aria-label', `Halaman ${i}`); button.onclick = () => { page = i; render(); scrollToList(); }; pages.appendChild(button); }
    prev.disabled = page === 1; next.disabled = page === pageCount;
  }
  function scrollToList(){ document.querySelector('#project-list').scrollIntoView({behavior:'smooth',block:'start'}); }
  [search, year].forEach(control => control.addEventListener('input', () => { page = 1; render(); }));
  prev.onclick = () => { if (page > 1) { page--; render(); scrollToList(); } };
  next.onclick = () => { if (page < Math.ceil(filtered.length / size)) { page++; render(); scrollToList(); } };
  render();
})();

