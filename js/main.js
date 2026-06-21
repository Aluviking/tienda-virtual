/* =====================================================
   BLVD — Main JavaScript
   ===================================================== */

/* -------------------- PRODUCTOS -------------------- */
const PRODUCTS = [
  {
    id: 1, brand: "Nike", name: "Air Max Pulse", price: 489000,
    sizes: [36,37,38,39,40,41,42], tags: ["Running","Premium","Bestseller"],
    imgs: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d0a4ea610e?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 2, brand: "Nike", name: "Pegasus 41", price: 420000,
    sizes: [37,38,39,40,41,42,43], tags: ["Road","Diario"],
    imgs: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 3, brand: "Jordan", name: "Jordan 1 Retro High", price: 750000,
    sizes: [38,39,40,41,42,43,44], tags: ["Basketball","Icon","Limited"],
    imgs: [
      "https://images.unsplash.com/photo-1600185365483-26d0a4ea610e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 4, brand: "Jordan", name: "Jordan 4 Black Cat", price: 890000,
    sizes: [39,40,41,42,43,44], tags: ["Lifestyle","Exclusivo","Limited"],
    imgs: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d0a4ea610e?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 5, brand: "Adidas", name: "Ultraboost 24", price: 560000,
    sizes: [36,37,38,39,40,41,42,43], tags: ["Running","Boost","Premium"],
    imgs: [
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 6, brand: "Adidas", name: "Samba OG", price: 360000,
    sizes: [36,37,38,39,40,41,42], tags: ["Lifestyle","Classic","Bestseller"],
    imgs: [
      "https://images.unsplash.com/photo-1556906781-9a414e2a9c86?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 7, brand: "New Balance", name: "Fresh Foam 1080v13", price: 620000,
    sizes: [38,39,40,41,42,43,44,45], tags: ["Running","Cushion","Performance"],
    imgs: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 8, brand: "New Balance", name: "NB 574", price: 280000,
    sizes: [36,37,38,39,40,41,42], tags: ["Lifestyle","Classic"],
    imgs: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 9, brand: "Puma", name: "RS-X Efekt", price: 320000,
    sizes: [36,37,38,39,40,41,42], tags: ["Lifestyle","Retro","Chunky"],
    imgs: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d0a4ea610e?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 10, brand: "Puma", name: "Suede Classic XXI", price: 240000,
    sizes: [36,37,38,39,40,41,42,43], tags: ["Classic","Lifestyle","Urban"],
    imgs: [
      "https://images.unsplash.com/photo-1556906781-9a414e2a9c86?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 11, brand: "Vans", name: "Old Skool Pro", price: 240000,
    sizes: [36,37,38,39,40,41,42,43], tags: ["Skate","Lifestyle","Classic"],
    imgs: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556906781-9a414e2a9c86?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 12, brand: "Vans", name: "Era 59 Skate", price: 210000,
    sizes: [36,37,38,39,40,41,42], tags: ["Skate","Diario","Street"],
    imgs: [
      "https://images.unsplash.com/photo-1518894781321-630e638d0742?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 13, brand: "Converse", name: "Chuck Taylor All Star", price: 220000,
    sizes: [36,37,38,39,40,41,42,43,44], tags: ["Lifestyle","Icon","Atemporal"],
    imgs: [
      "https://images.unsplash.com/photo-1518894781321-630e638d0742?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 14, brand: "Etnies", name: "Marana Skate", price: 280000,
    sizes: [38,39,40,41,42,43,44], tags: ["Skate","Street","Performance"],
    imgs: [
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80",
    ]
  },
  {
    id: 15, brand: "DC Shoes", name: "Court Graffik", price: 260000,
    sizes: [37,38,39,40,41,42,43], tags: ["Skate","Urban","Street"],
    imgs: [
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556906781-9a414e2a9c86?auto=format&fit=crop&w=900&q=80",
    ]
  },
];

function formatPrice(p) {
  return '$' + p.toLocaleString('es-CO') + ' COP';
}

/* -------------------- CURSOR — mix-blend-mode:difference (visible en cualquier fondo) ---- */
function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorFollower');
  if (!dot || !ring) return;

  /* Ocultar en móvil (sin puntero) */
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });

  (function track() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(track);
  })();

  /* Escala al hover sobre elementos interactivos */
  document.querySelectorAll('a,button,.product-card,.s3d-angle,.h-thumb,.tri-panel,.why-card,.cg-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform   = 'translate(-50%,-50%) scale(3)';
      ring.style.transform  = 'translate(-50%,-50%) scale(1.5)';
      ring.style.opacity    = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity   = '1';
    });
  });
}

/* -------------------- NAVBAR -------------------- */
function initNavbar() {
  const nav  = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  if (!nav) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      nav.classList.remove('scrolled');
      document.body.classList.add('hero-active');
    } else {
      nav.classList.add('scrolled');
      document.body.classList.remove('hero-active');
    }
  }, { threshold: 0.1 });
  if (hero) obs.observe(hero); else nav.classList.add('scrolled');

  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('mobileMenu');
  const close  = document.getElementById('mobileClose');
  if (burger && menu && close) {
    burger.addEventListener('click', () => menu.classList.add('open'));
    close.addEventListener('click',  () => menu.classList.remove('open'));
    menu.querySelectorAll('.m-link').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
}

/* -------------------- HERO ANGLE THUMBNAILS -------------------- */
function initHeroAngles() {
  const thumbs = document.querySelectorAll('.h-thumb');
  const bgImg  = document.getElementById('heroBgImg');
  if (!thumbs.length || !bgImg) return;
  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      bgImg.style.opacity = '0';
      setTimeout(() => { bgImg.src = btn.dataset.hero; bgImg.style.opacity = '1'; }, 380);
      thumbs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* -------------------- SHOE EXPERIENCE — Estático, sin animación -------------------- */
function initShoe3D() {
  const canvas  = document.getElementById('shoe3dCanvas');
  const wrap    = document.getElementById('shoe3dImgWrap');
  const mainImg = document.getElementById('shoe3dImg');
  const angles  = document.querySelectorAll('.s3d-angle');
  if (!wrap || !mainImg) return;

  /* Hover suave — solo levanta el tenis un poco al pasar el mouse */
  if (canvas) {
    canvas.addEventListener('mouseenter', () => {
      wrap.style.transform = 'rotate(-12deg) translateX(-2%) scale(1.13) translateY(-8px)';
    });
    canvas.addEventListener('mouseleave', () => {
      wrap.style.transform = 'rotate(-12deg) translateX(-2%) scale(1.08)';
    });
  }

  /* Angle thumbnails — con fallback si la imagen local no existe */
  angles.forEach(btn => {
    btn.addEventListener('click', () => {
      const src      = btn.dataset.img;
      const fallback = btn.dataset.fallback;
      if (!src) return;
      mainImg.classList.add('changing');
      setTimeout(() => {
        mainImg.src = src;
        if (fallback) mainImg.onerror = () => { mainImg.src = fallback; };
        mainImg.classList.remove('changing');
      }, 200);
      angles.forEach(a => a.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* -------------------- SCROLL ANIMATIONS -------------------- */
function initScrollAnimations() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
}

/* -------------------- CREAR CARD — Solo imagen + overlay hover -------------------- */
function createCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const img = product.imgs?.[0] ||
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=70';

  card.innerHTML = `
    <div class="pc-img-wrap">
      <img
        src="${img}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=70'"
      >
      <div class="pc-hover-overlay">
        <span class="pcr-brand">${product.brand}</span>
        <span class="pcr-name">${product.name}</span>
        <span class="pcr-cta">Ver →</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(product));
  return card;
}

function renderGrid(container, products) {
  if (!container) return;
  container.innerHTML = '';
  products.forEach(p => container.appendChild(createCard(p)));
}

/* -------------------- BESTSELLERS -------------------- */
function initBestSellers() {
  const grid = document.getElementById('bestSellersGrid');
  if (!grid) return;
  const best = PRODUCTS.filter(p =>
    p.tags.includes('Bestseller') || p.tags.includes('Limited') || p.tags.includes('Icon')
  ).slice(0, 4);
  renderGrid(grid, best.length ? best : PRODUCTS.slice(0, 4));
}

/* -------------------- FILTROS V2 + LOAD MORE -------------------- */
function initFiltersV2() {
  const brandsBtn   = document.getElementById('fv2BrandsBtn');
  const sizesBtn    = document.getElementById('fv2SizesBtn');
  const brandsPanel = document.getElementById('fv2BrandsPanel');
  const sizesPanel  = document.getElementById('fv2SizesPanel');
  const activeLbl   = document.getElementById('fv2ActiveLbl');
  const grid        = document.getElementById('productsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!brandsBtn || !sizesBtn || !grid) return;

  const PAGE = 6;
  let activeBrand = 'all', activeSize = 'all';
  let currentFiltered = PRODUCTS;
  let visibleCount = PAGE;

  const brands = [...new Set(PRODUCTS.map(p => p.brand))];
  const sizes  = [...new Set(PRODUCTS.flatMap(p => p.sizes))].sort((a,b) => a - b);

  function makePill(label, value, type, isActive) {
    const btn = document.createElement('button');
    btn.className = 'fpill' + (isActive ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => {
      if (type === 'brand') activeBrand = value;
      else activeSize = value;
      const parent = type === 'brand' ? brandsPanel : sizesPanel;
      parent.querySelectorAll('.fpill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateActiveLbl();
      applyFilters();
    });
    return btn;
  }

  brandsPanel.appendChild(makePill('Todas', 'all', 'brand', true));
  brands.forEach(b => brandsPanel.appendChild(makePill(b, b, 'brand', false)));
  sizesPanel.appendChild(makePill('Todas', 'all', 'size', true));
  sizes.forEach(s => sizesPanel.appendChild(makePill(s, s, 'size', false)));

  function togglePanel(panel, btn, otherPanel, otherBtn) {
    const isOpen = panel.classList.contains('open');
    otherPanel.classList.remove('open'); otherBtn.classList.remove('active');
    if (isOpen) { panel.classList.remove('open'); btn.classList.remove('active'); }
    else         { panel.classList.add('open');    btn.classList.add('active'); }
  }

  brandsBtn.addEventListener('click', () => togglePanel(brandsPanel, brandsBtn, sizesPanel, sizesBtn));
  sizesBtn.addEventListener('click',  () => togglePanel(sizesPanel, sizesBtn, brandsPanel, brandsBtn));

  function updateActiveLbl() {
    const parts = [];
    if (activeBrand !== 'all') parts.push(activeBrand);
    if (activeSize  !== 'all') parts.push('T. ' + activeSize);
    if (activeLbl) activeLbl.textContent = parts.join(' · ');
  }

  function renderPaged() {
    grid.innerHTML = '';
    currentFiltered.slice(0, visibleCount).forEach(p => grid.appendChild(createCard(p)));

    if (!loadMoreBtn) return;
    const allShown = visibleCount >= currentFiltered.length;

    if (currentFiltered.length <= PAGE) {
      /* Si hay pocas referencias, ocultar el botón */
      loadMoreBtn.classList.add('hidden');
    } else if (allShown) {
      /* Ya se muestran todas — mostrar "Recoger" */
      loadMoreBtn.classList.remove('hidden');
      loadMoreBtn.textContent = 'Recoger ↑';
      loadMoreBtn.dataset.mode = 'collapse';
    } else {
      /* Quedan más por mostrar */
      loadMoreBtn.classList.remove('hidden');
      loadMoreBtn.textContent = 'Ver más →';
      loadMoreBtn.dataset.mode = 'expand';
    }
  }

  function applyFilters() {
    currentFiltered = PRODUCTS.filter(p => {
      const brandOk = activeBrand === 'all' || p.brand === activeBrand;
      const sizeOk  = activeSize  === 'all' || p.sizes.includes(+activeSize);
      return brandOk && sizeOk;
    });
    visibleCount = PAGE;
    renderPaged();
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      if (loadMoreBtn.dataset.mode === 'collapse') {
        /* Recoger — volver a las primeras 6 */
        visibleCount = PAGE;
        renderPaged();
        document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        /* Expandir — mostrar 6 más */
        visibleCount += PAGE;
        renderPaged();
        setTimeout(() => {
          grid.children[visibleCount - PAGE]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 80);
      }
    });
  }

  renderPaged();
}

/* -------------------- MODAL OSCURO (imagen 1 reference) -------------------- */
function openModal(product) {
  const overlay  = document.getElementById('modalOverlay');
  const mainImg  = document.getElementById('modalMainImg');
  const thumbRow = document.getElementById('modalThumbs');
  if (!overlay || !mainImg || !thumbRow) return;

  document.getElementById('mdBrand').textContent = product.brand;
  document.getElementById('mdName').textContent  = product.name;
  document.getElementById('mdPrice').textContent = formatPrice(product.price);

  /* Imagen principal — desbordada, angled (imagen 1 style) */
  mainImg.src = product.imgs?.[0] || '';
  mainImg.alt = product.name;
  mainImg.classList.add('entering');
  setTimeout(() => mainImg.classList.remove('entering'), 600);

  /* Thumbnails 360° */
  thumbRow.innerHTML = '';
  (product.imgs || []).forEach((src, i) => {
    const btn = document.createElement('button');
    btn.className = 'modal-thumb-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<img src="${src}" alt="">`;
    btn.addEventListener('click', () => {
      mainImg.classList.add('entering');
      setTimeout(() => { mainImg.src = src; mainImg.classList.remove('entering'); }, 350);
      thumbRow.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    thumbRow.appendChild(btn);
  });

  /* Tallas */
  const sizesEl = document.getElementById('mdSizes');
  sizesEl.innerHTML = '';
  (product.sizes || []).forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'md-size-btn'; btn.textContent = s;
    btn.addEventListener('click', () => {
      sizesEl.querySelectorAll('.md-size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    sizesEl.appendChild(btn);
  });

  /* Tags */
  document.getElementById('mdTags').innerHTML =
    (product.tags || []).map(t => `<span class="md-tag">${t}</span>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openProductById(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (p) openModal(p);
}

function initModal() {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* -------------------- COUNTDOWN -------------------- */
function initCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  function tick() {
    const diff = target - new Date();
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const f = n => String(n).padStart(2,'0');
    const cd = document.getElementById('countDays');
    const ch = document.getElementById('countHours');
    const cm = document.getElementById('countMins');
    const cs = document.getElementById('countSecs');
    if (cd) cd.textContent = f(d);
    if (ch) ch.textContent = f(h);
    if (cm) cm.textContent = f(m);
    if (cs) cs.textContent = f(s);
  }
  tick(); setInterval(tick, 1000);
}

/* -------------------- STATS COUNTER -------------------- */
function animateCounter(el, target) {
  const start = Date.now(), dur = 1800;
  const ease  = t => 1 - Math.pow(1 - t, 3);
  (function tick() {
    const prog = Math.min((Date.now() - start) / dur, 1);
    el.textContent = Math.round(ease(prog) * target).toLocaleString('es-CO');
    if (prog < 1) requestAnimationFrame(tick);
  })();
}

function initStats() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target.querySelector('.stat-count');
      const t  = +e.target.dataset.target;
      if (el && t) animateCounter(el, t);
      io.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.stat[data-target]').forEach(el => io.observe(el));
}

/* -------------------- INIT -------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initHeroAngles();
  initShoe3D();
  initScrollAnimations();
  initBestSellers();
  initFiltersV2();
  initModal();
  initCountdown();
  initStats();
});
