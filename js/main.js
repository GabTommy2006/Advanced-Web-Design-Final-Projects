/* =========================================================
   MAIN.JS — Dùng chung cho mọi trang
   - Vẽ header/footer (1 nguồn duy nhất)
   - Menu thu gọn [=] trên điện thoại
   - Tiện ích: bữa hiện tại, giảm chuyển động, ảnh + emoji thay thế
   - Trang chủ: lời chào theo giờ, đánh dấu bữa hiện tại
   ========================================================= */
(function () {
  'use strict';

  const { MEALS, CUISINES } = window.FOOD;

  /* ---------- Tiện ích ---------- */

  /** Trả về key bữa ăn theo giờ: sang | trua | toi | khuya */
  function getMeal(date = new Date()) {
    const h = date.getHours();
    if (h >= 5 && h < 10) return 'sang';
    if (h >= 10 && h < 14) return 'trua';
    if (h >= 14 && h < 21) return 'toi';
    return 'khuya';
  }

  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const dishUrl = (dish) => `result.html?dish=${encodeURIComponent(dish.id)}`;

  const mapsUrl = (dish) =>
    'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${dish.name} gần đây`);

  /** HTML khung ảnh: ảnh thật nếu có, nếu lỗi thì hiện emoji */
  function mediaHTML(src, emoji, alt, extraClass = '') {
    return `<div class="media ${extraClass}">
      <span class="media__emoji" aria-hidden="true">${emoji}</span>
      <img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy">
    </div>`;
  }

  /** Gắn xử lý lỗi ảnh → chuyển sang emoji */
  function initMedia(root = document) {
    root.querySelectorAll('.media img').forEach((img) => {
      const media = img.closest('.media');
      const fail = () => media.classList.add('is-fallback');
      if (!img.getAttribute('src')) return fail();
      if (img.complete && img.naturalWidth === 0) fail();
      else img.addEventListener('error', fail, { once: true });
    });
  }

  /* ---------- Header & footer dùng chung ---------- */
  const NAV = [
    { href: 'cuisines.html', label: 'Ẩm thực', page: 'cuisines' },
    { href: 'dishes.html', label: 'Tất cả món ăn', page: 'dishes' },
    { href: 'about.html', label: 'Giới thiệu', page: 'about' },
  ];

  const logoHTML = `
    <span class="logo__icon" aria-hidden="true">🍜</span>
    <span class="logo__text">Ăn gì <span>đây?</span></span>`;

  function renderChrome() {
    const page = document.body.dataset.page;
    const header = document.querySelector('[data-site-header]');
    const footer = document.querySelector('[data-site-footer]');

    if (header) {
      header.innerHTML = `
        <div class="container">
          <a class="logo" href="index.html" aria-label="Ăn gì đây? — Về Trang chủ">${logoHTML}</a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
            <span class="nav-toggle__bars" aria-hidden="true"></span>
            <span class="visually-hidden">Mở menu</span>
          </button>
          <nav class="main-nav" id="main-nav" aria-label="Menu chính">
            <ul>
              ${NAV.map((n) => `<li><a href="${n.href}"${n.page === page ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('')}
            </ul>
          </nav>
        </div>`;

      const toggle = header.querySelector('.nav-toggle');
      const setOpen = (open) => {
        header.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.querySelector('.visually-hidden').textContent = open ? 'Đóng menu' : 'Mở menu';
      };
      toggle.addEventListener('click', () => setOpen(!header.classList.contains('nav-open')));
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
      window.matchMedia('(min-width: 640px)').addEventListener('change', () => setOpen(false));
    }

    if (footer) {
      footer.innerHTML = `
        <div class="container">
          <div>
            <a class="logo" href="index.html">${logoHTML}</a>
            <p>Trang web chọn món giúp bạn khi không biết ăn gì. ${Object.keys(CUISINES).length} nền ẩm thực, ${window.FOOD.DISHES.length} món ngon.</p>
          </div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              ${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4>Nhóm</h4>
            <ul>
              <li><a href="about.html#nhom">Thành viên</a></li>
              <li><a href="about.html#nguon-anh">Nguồn ảnh</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">© 2026 Ăn gì đây? · Đồ án Thiết kế Web Nâng cao</div>`;
    }
  }

  /* ---------- Trang chủ ---------- */
  function initHome() {
    const greeting = document.getElementById('greeting');
    if (!greeting) return;
    const meal = getMeal();
    const m = MEALS[meal];
    greeting.querySelector('[data-greet]').textContent = m.greet;
    greeting.querySelector('[data-greet-sub]').textContent = m.sub;
    greeting.querySelector('[data-greet-icon]').textContent = m.icon;
    document.querySelectorAll('.meal[data-meal]').forEach((el) => {
      el.classList.toggle('is-now', el.dataset.meal === meal);
    });
  }

  /* ---------- Khởi chạy ---------- */
  renderChrome();
  initHome();
  initMedia();

  window.App = {
    getMeal, reduceMotion, wait, escapeHTML, randomItem,
    dishUrl, mapsUrl, mediaHTML, initMedia,
    LAST_KEY: 'angiday:last-dish',
  };
})();
