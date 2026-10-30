/* =========================================================
   DISHES.JS — Trang Tất cả món ăn
   - Bộ lọc ẩm thực: dropdown <select> trên điện thoại + các nút pill trên máy tính
   - Bộ lọc bữa ăn: các nút bật/tắt (bấm lần nữa để bỏ chọn)
   - Cập nhật số lượng trên tiêu đề: "Tất cả món ăn (36)"
   - Khi lọc ra 0 món: hiện "Chưa có món nào như vậy" và nút "Bỏ lọc"
   ========================================================= */
(function () {
  'use strict';

  const { MEALS, CUISINES, DISHES } = window.FOOD;
  const App = window.App;

  const countEl = document.getElementById('dish-count');
  const cuisinePills = document.getElementById('cuisine-pills');
  const cuisineSelect = document.getElementById('cuisine-select');
  const mealPills = document.getElementById('meal-pills');
  const grid = document.getElementById('dish-grid');
  const emptyBox = document.getElementById('dishes-empty');
  const btnReset = document.getElementById('btn-reset-filter');

  let activeCuisine = 'all';
  let activeMeal = 'all';

  /* ---------- 1. Tạo nút lọc ---------- */
  function renderFilters() {
    const cuisineOptions = [
      { key: 'all', label: 'Tất cả' },
      ...Object.keys(CUISINES).map((k) => ({
        key: k,
        label: `${CUISINES[k].flag} ${CUISINES[k].name}`,
      })),
    ];

    if (cuisinePills) {
      cuisinePills.innerHTML = cuisineOptions.map((c) => `
        <button type="button" class="filter-pill${c.key === activeCuisine ? ' is-active' : ''}"
                data-cuisine-filter="${c.key}" aria-pressed="${c.key === activeCuisine}">
          ${App.escapeHTML(c.label)}
        </button>`).join('');
    }

    if (cuisineSelect) {
      cuisineSelect.innerHTML = cuisineOptions.map((c) => `
        <option value="${c.key}">${App.escapeHTML(c.label)}</option>`).join('');
    }

    const mealOptions = [
      { key: 'all', label: 'Tất cả bữa' },
      ...Object.keys(MEALS).map((k) => ({
        key: k,
        label: `${MEALS[k].icon} ${MEALS[k].label}`,
      })),
    ];

    if (mealPills) {
      mealPills.innerHTML = mealOptions.map((m) => `
        <button type="button" class="filter-pill${m.key === activeMeal ? ' is-active' : ''}"
                data-meal-filter="${m.key}" aria-pressed="${m.key === activeMeal}">
          ${App.escapeHTML(m.label)}
        </button>`).join('');
    }
  }

  /* ---------- 2. Đồng bộ trạng thái nút lọc ---------- */
  function syncFilterUI() {
    if (cuisineSelect) cuisineSelect.value = activeCuisine;

    if (cuisinePills) {
      cuisinePills.querySelectorAll('[data-cuisine-filter]').forEach((btn) => {
        const on = btn.dataset.cuisineFilter === activeCuisine;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }

    if (mealPills) {
      mealPills.querySelectorAll('[data-meal-filter]').forEach((btn) => {
        const on = btn.dataset.mealFilter === activeMeal;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
  }

  /* ---------- 3. Vẽ lưới món ăn ---------- */
  function renderDishes() {
    const filtered = DISHES.filter((d) => {
      const matchCuisine = activeCuisine === 'all' || d.cuisine === activeCuisine;
      const matchMeal = activeMeal === 'all' || d.meals.includes(activeMeal);
      return matchCuisine && matchMeal;
    });

    if (countEl) countEl.textContent = `(${filtered.length})`;

    if (!filtered.length) {
      grid.innerHTML = '';
      grid.hidden = true;
      emptyBox.hidden = false;
      return;
    }

    emptyBox.hidden = true;
    grid.hidden = false;

    grid.innerHTML = filtered.map((d) => {
      const c = CUISINES[d.cuisine];
      const mealLabels = d.meals.map((m) => MEALS[m].label).join(' · ');
      return `
        <li>
          <a class="dish-card" data-cuisine="${d.cuisine}" href="${App.dishUrl(d)}">
            ${App.mediaHTML(`images/dishes/${d.id}.jpg`, d.emoji, d.name, 'dish-card__media')}
            <div class="dish-card__body">
              <h3>${App.escapeHTML(d.name)}</h3>
              <p class="dish-card__meta">${c.flag} ${App.escapeHTML(c.name)} · ${App.escapeHTML(mealLabels)}</p>
            </div>
          </a>
        </li>`;
    }).join('');

    App.initMedia(grid);
  }

  /* ---------- 4. Sự kiện ---------- */
  renderFilters();
  renderDishes();

  if (cuisinePills) {
    cuisinePills.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cuisine-filter]');
      if (!btn) return;
      const val = btn.dataset.cuisineFilter;
      // Bấm lại nút đang bật thì trả về 'all'
      activeCuisine = (activeCuisine === val && val !== 'all') ? 'all' : val;
      syncFilterUI();
      renderDishes();
    });
  }

  if (cuisineSelect) {
    cuisineSelect.addEventListener('change', () => {
      activeCuisine = cuisineSelect.value;
      syncFilterUI();
      renderDishes();
    });
  }

  if (mealPills) {
    mealPills.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-meal-filter]');
      if (!btn) return;
      const val = btn.dataset.mealFilter;
      activeMeal = (activeMeal === val && val !== 'all') ? 'all' : val;
      syncFilterUI();
      renderDishes();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      activeCuisine = 'all';
      activeMeal = 'all';
      syncFilterUI();
      renderDishes();
    });
  }
})();
