/* =========================================================
   CUISINES.JS — Trang Ẩm thực + Máy quay xèng "Bất ngờ đi!"
   Hiệu ứng B:
   1. Bấm QUAY → khoá nút.
   2. Cuộn 1 (ẩm thực) quay 1,5s rồi dừng ở ẩm thực đã chọn sẵn.
      Khung máy đổi sang màu nhấn của nền ẩm thực đó.
   3. Cuộn 2 nạp các món của ẩm thực đó (ưu tiên hợp bữa hiện tại),
      quay 1,5s rồi dừng.
   4. Khung chọn nháy 2 lần (400ms), rồi chuyển sang result.html?dish=<id>.
   - Mỗi cuộn lặp danh sách 5 lần, đặt trong overflow: hidden.
   - Chỉ animate transform: translateY(...) với cubic-bezier(.15,.85,.25,1).
   - prefers-reduced-motion: reduce → hiện ngay kết quả 2 cuộn.
   ========================================================= */
(function () {
  'use strict';

  const { MEALS, CUISINES, DISHES } = window.FOOD;
  const App = window.App;

  const grid = document.getElementById('cuisine-grid');
  const modal = document.getElementById('slot-modal');
  const machine = document.getElementById('slot-machine');
  const stripCuisine = document.getElementById('strip-cuisine');
  const stripDish = document.getElementById('strip-dish');
  const btnSpin = document.getElementById('btn-slot-spin');
  const btnClose = document.getElementById('btn-slot-close');
  const slotStatus = document.getElementById('slot-status');

  const CUISINE_KEYS = Object.keys(CUISINES);
  const REPEATS = 5;          // Lặp danh sách 5 lần cho đủ dài
  const TARGET_ROUND = 3;     // Dừng ở vòng thứ 4 (index 3) để luôn có mục phía trên và dưới

  let isSpinning = false;

  /* ---------- 1. Vẽ lưới thẻ ẩm thực + thẻ Bất ngờ đi! ---------- */
  function renderGrid() {
    if (!grid) return;

    const cardsHTML = CUISINE_KEYS.map((key) => {
      const c = CUISINES[key];
      const count = DISHES.filter((d) => d.cuisine === key).length;
      return `
        <a class="cuisine-card" data-cuisine="${key}" href="result.html?cuisine=${key}">
          ${App.mediaHTML(`images/cuisines/${key}.jpg`, c.emoji, c.name, 'cuisine-card__media')}
          <div class="cuisine-card__body">
            <div class="cuisine-card__top">
              <h3>${App.escapeHTML(c.name)}</h3>
              <span class="cuisine-card__flag" aria-hidden="true">${c.flag}</span>
            </div>
            <p>${App.escapeHTML(c.desc)}</p>
            <div class="cuisine-card__foot">
              <span>${count} món</span>
              <span class="cuisine-card__cta">Chọn →</span>
            </div>
          </div>
        </a>`;
    }).join('');

    const surpriseHTML = `
      <button type="button" class="cuisine-card cuisine-card--surprise" id="btn-open-surprise">
        <span class="dice" aria-hidden="true">🎰</span>
        <div class="cuisine-card__surprise-text">
          <h3>BẤT NGỜ ĐI!</h3>
          <p>Mở máy quay xèng 2 cuộn: quay ẩm thực trước, quay món ăn sau!</p>
        </div>
        <span class="btn">Mở máy quay →</span>
      </button>`;

    grid.innerHTML = cardsHTML + surpriseHTML;
    App.initMedia(grid);

    const openBtn = document.getElementById('btn-open-surprise');
    if (openBtn) openBtn.addEventListener('click', openModal);
  }

  /* ---------- 2. Chuẩn bị các cuộn (Reels) ---------- */
  function getItemHeight() {
    const win = machine.querySelector('.slot-window');
    return win ? win.clientHeight / 3 : 52;
  }

  /** Tạo dải mục lặp REPEATS lần; trả về index của target ở vòng TARGET_ROUND */
  function buildStrip(stripEl, items, targetId, renderLabel) {
    const repeated = [];
    for (let r = 0; r < REPEATS; r++) {
      for (const item of items) repeated.push(item);
    }
    stripEl.innerHTML = repeated
      .map((item) => `<li class="slot-item" data-id="${App.escapeHTML(item.id)}">${renderLabel(item)}</li>`)
      .join('');

    const baseIdx = items.findIndex((x) => x.id === targetId);
    const targetIdx = TARGET_ROUND * items.length + (baseIdx >= 0 ? baseIdx : 0);
    return targetIdx;
  }

  /** Đặt vị trí cuộn sao cho mục ở index `idx` nằm ngay khung chọn giữa (hàng thứ 2 / 3) */
  function setStripIndex(stripEl, idx, animate) {
    const h = getItemHeight();
    const offset = -(idx - 1) * h; // Trừ 1 để mục idx nằm ở dòng giữa (dòng 0 ở trên, dòng 1 ở giữa, dòng 2 ở dưới)
    stripEl.style.transition = animate
      ? 'transform 1.5s cubic-bezier(.15, .85, .25, 1)'
      : 'none';
    stripEl.style.transform = `translateY(${offset}px)`;

    stripEl.querySelectorAll('.slot-item').forEach((li, i) => {
      li.classList.toggle('is-selected', i === idx);
    });
  }

  /** Trạng thái ban đầu khi mới mở máy xèng */
  function resetReels() {
    delete machine.dataset.cuisine;
    machine.classList.remove('is-blinking');

    const cuisineItems = CUISINE_KEYS.map((k) => ({
      id: k,
      name: CUISINES[k].name,
      flag: CUISINES[k].flag,
    }));
    buildStrip(stripCuisine, cuisineItems, cuisineItems[1].id, (c) => `${c.flag} ${App.escapeHTML(c.name)}`);
    setStripIndex(stripCuisine, 1, false);

    const sampleDishes = DISHES.slice(0, 6);
    buildStrip(stripDish, sampleDishes, sampleDishes[1].id, (d) => `${d.emoji} ${App.escapeHTML(d.name)}`);
    setStripIndex(stripDish, 1, false);

    slotStatus.textContent = 'Bấm QUAY để thử vận may!';
  }

  /* ---------- 3. Đóng / mở hộp thoại máy quay xèng ---------- */
  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    resetReels();
    btnSpin.disabled = false;
    btnSpin.focus();
  }

  function closeModal() {
    if (isSpinning || !modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  /* ---------- 4. Trình tự quay Hiệu ứng B ---------- */
  async function runSlotSpin() {
    if (isSpinning) return;
    isSpinning = true;
    btnSpin.disabled = true;
    btnClose.disabled = true;
    machine.classList.remove('is-blinking');
    delete machine.dataset.cuisine;

    // Chọn TRƯỚC ẩm thực và món ăn bằng Math.random()
    const meal = App.getMeal();
    const lastId = (() => { try { return sessionStorage.getItem(App.LAST_KEY); } catch { return null; } })();

    const chosenCuisine = App.randomItem(CUISINE_KEYS);
    const cuisineDishes = DISHES.filter((d) => d.cuisine === chosenCuisine);
    const mealFit = cuisineDishes.filter((d) => d.meals.includes(meal));

    // Ưu tiên món hợp bữa hiện tại và khác món vừa ra
    const pool =
      mealFit.filter((d) => d.id !== lastId).length ? mealFit.filter((d) => d.id !== lastId) :
      mealFit.length ? mealFit :
      cuisineDishes.filter((d) => d.id !== lastId).length ? cuisineDishes.filter((d) => d.id !== lastId) :
      cuisineDishes;
    const chosenDish = App.randomItem(pool);

    // Chuẩn bị cuộn 1 (ẩm thực)
    const cuisineItems = CUISINE_KEYS.map((k) => ({
      id: k,
      name: CUISINES[k].name,
      flag: CUISINES[k].flag,
    }));
    const targetCuisineIdx = buildStrip(
      stripCuisine,
      cuisineItems,
      chosenCuisine,
      (c) => `${c.flag} ${App.escapeHTML(c.name)}`
    );

    // Chuẩn bị cuộn 2 (các món của ẩm thực đó, đưa các món hợp bữa lên đầu)
    const orderedDishes = [
      ...mealFit,
      ...cuisineDishes.filter((d) => !d.meals.includes(meal)),
    ];
    const targetDishIdx = buildStrip(
      stripDish,
      orderedDishes,
      chosenDish.id,
      (d) => `${d.emoji} ${App.escapeHTML(d.name)}`
    );

    // Đặt cả 2 cuộn về vị trí đầu trước khi quay
    setStripIndex(stripCuisine, 1, false);
    setStripIndex(stripDish, 1, false);

    // Nếu bật prefers-reduced-motion: hiện ngay kết quả của 2 cuộn
    if (App.reduceMotion()) {
      machine.dataset.cuisine = chosenCuisine;
      setStripIndex(stripCuisine, targetCuisineIdx, false);
      setStripIndex(stripDish, targetDishIdx, false);
      slotStatus.textContent = `${CUISINES[chosenCuisine].name} · ${chosenDish.name}`;
      await App.wait(400);
      location.href = App.dishUrl(chosenDish);
      return;
    }

    // Bước 2: Cuộn 1 (ẩm thực) quay 1,5s rồi dừng
    slotStatus.textContent = 'Đang quay nền ẩm thực…';
    void stripCuisine.offsetHeight; // buộc trình duyệt nhận vị trí đầu trước khi animate
    setStripIndex(stripCuisine, targetCuisineIdx, true);
    await App.wait(1500);

    // Khung máy đổi sang màu nhấn của nền ẩm thực đó
    machine.dataset.cuisine = chosenCuisine;
    slotStatus.textContent = `${CUISINES[chosenCuisine].flag} ${CUISINES[chosenCuisine].name}! Đang chọn món (${MEALS[meal].label.toLowerCase()})…`;

    // Bước 3: Cuộn 2 quay 1,5s rồi dừng
    void stripDish.offsetHeight;
    setStripIndex(stripDish, targetDishIdx, true);
    await App.wait(1500);

    slotStatus.textContent = `🎉 ${chosenDish.name}!`;

    // Bước 4: Khung chọn nháy 2 lần (400ms) rồi chuyển sang result.html?dish=<id>
    machine.classList.add('is-blinking');
    await App.wait(400);

    location.href = App.dishUrl(chosenDish);
  }

  /* ---------- Gắn sự kiện ---------- */
  renderGrid();

  if (btnSpin) btnSpin.addEventListener('click', runSlotSpin);
  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  }
})();
