/* =========================================================
   RESULT.JS — Trang Kết quả
   ?mode=any       → chọn món hợp bữa hiện tại (có hiệu ứng quay)
   ?cuisine=viet   → chọn theo ẩm thực, ưu tiên hợp bữa (có hiệu ứng quay)
   ?dish=pho-bo    → hiện thẳng món, không quay

   Hiệu ứng A: món được chọn TRƯỚC bằng Math.random(); phần quay chỉ để trình diễn.
   Tên món đổi mỗi 60ms rồi chậm dần 120 → 200 → 320ms, tổng ≈ 1,6s.
   ========================================================= */
(function () {
  'use strict';

  const { MEALS, CUISINES, DISHES } = window.FOOD;
  const App = window.App;
  const $ = (id) => document.getElementById(id);

  // 12 × 60 + 3 × 120 + 200 + 320 = 1600ms
  const SCHEDULE = [...Array(12).fill(60), 120, 120, 120, 200, 320];

  const params = new URLSearchParams(location.search);
  const qDish = params.get('dish');
  const qCuisine = params.get('cuisine');
  const meal = App.getMeal();

  const els = {
    card: $('result-card'),
    media: $('dish-media'),
    emoji: document.querySelector('#dish-media .media__emoji'),
    img: document.querySelector('#dish-media img'),
    meta: $('dish-meta'),
    name: $('dish-name'),
    desc: $('dish-desc'),
    facts: $('dish-facts'),
    maps: $('btn-maps'),
    again: $('btn-again'),
    indicator: $('mode-indicator'),
    empty: $('empty-state'),
    emptyTitle: $('empty-title'),
    emptyText: $('empty-text'),
    related: $('related'),
    relatedTitle: $('related-title'),
    relatedList: $('related-list'),
    live: $('result-live'),
  };

  let mode = 'any';      // 'any' | 'cuisine' | 'dish'
  let spinToken = 0;     // huỷ lượt quay cũ nếu bấm quay lại

  /* ---------- Lưu món vừa ra để không lặp lại ---------- */
  const getLast = () => { try { return sessionStorage.getItem(App.LAST_KEY); } catch { return null; } };
  const setLast = (id) => { try { sessionStorage.setItem(App.LAST_KEY, id); } catch { /* bỏ qua */ } };

  const basePool = () => (mode === 'cuisine' ? DISHES.filter((d) => d.cuisine === qCuisine) : DISHES);

  /** Chọn món: ưu tiên hợp bữa, không trùng món vừa ra */
  function pickDish() {
    const last = getLast();
    const base = basePool();
    const fit = base.filter((d) => d.meals.includes(meal));
    const tiers = [
      fit.filter((d) => d.id !== last),
      base.filter((d) => d.id !== last),
      base,
    ];
    return App.randomItem(tiers.find((t) => t.length));
  }

  const mealOf = (dish) => (dish.meals.includes(meal) ? meal : dish.meals[0]);

  const metaText = (dish) =>
    `${CUISINES[dish.cuisine].name} · ${MEALS[mealOf(dish)].label}`;

  /* ---------- Hiển thị ---------- */
  function renderIndicator() {
    const m = MEALS[meal];
    const chips = {
      any: [`🎰 Chọn bất kỳ`, `${m.icon} ${m.full}`],
      cuisine: [`🌏 Theo ẩm thực`, `${CUISINES[qCuisine]?.flag || ''} ${CUISINES[qCuisine]?.name || ''}`, `${m.icon} ${m.full}`],
      dish: [`🍽️ Món đã chọn`],
    }[mode];
    els.indicator.innerHTML = chips.map((c) => `<span class="tag">${App.escapeHTML(c)}</span>`).join('');
  }

  function setImage(dish) {
    els.media.classList.remove('is-fallback');
    els.img.alt = dish.name;
    els.img.onerror = () => els.media.classList.add('is-fallback');
    els.img.src = `images/dishes/${dish.id}.jpg`;
  }

  function render(dish) {
    document.body.dataset.cuisine = dish.cuisine;
    document.title = `${dish.name} — Kết quả | Ăn gì đây?`;

    els.emoji.textContent = dish.emoji;
    setImage(dish);
    els.meta.textContent = metaText(dish);
    els.name.textContent = dish.name;
    els.desc.textContent = dish.desc;
    els.facts.innerHTML = `
      <li><strong>${dish.price}</strong>Giá tham khảo</li>
      <li><strong>${dish.meals.map((k) => MEALS[k].label).join(', ')}</strong>Hợp bữa</li>
      <li><strong>${CUISINES[dish.cuisine].flag} ${CUISINES[dish.cuisine].name}</strong>Ẩm thực</li>`;
    els.maps.href = App.mapsUrl(dish);
    els.live.textContent = `Hôm nay bạn ăn: ${dish.name}`;

    renderRelated(dish);
  }

  function renderRelated(dish) {
    const others = DISHES.filter((d) => d.cuisine === dish.cuisine && d.id !== dish.id);
    els.relatedTitle.textContent = `Món ${CUISINES[dish.cuisine].name} khác`;
    els.relatedList.innerHTML = others.map((d) =>
      `<li><a href="${App.dishUrl(d)}"><span aria-hidden="true">${d.emoji}</span> ${App.escapeHTML(d.name)}</a></li>`).join('');
    els.related.hidden = false;
  }

  function showEmpty(title, text) {
    els.card.hidden = true;
    els.related.hidden = true;
    els.indicator.hidden = true;
    els.emptyTitle.textContent = title;
    els.emptyText.textContent = text;
    els.empty.hidden = false;
  }

  /* ---------- Hiệu ứng A: quay tên món ---------- */
  async function spin() {
    const token = ++spinToken;
    const final = pickDish();
    setLast(final.id);

    // Giảm chuyển động: hiện kết quả ngay
    if (App.reduceMotion()) {
      render(final);
      return;
    }

    const card = els.card;
    const hadFocus = document.activeElement === els.again;
    card.classList.remove('is-bounce');
    card.classList.add('is-spinning');
    card.setAttribute('aria-busy', 'true');
    if (mode === 'any') delete document.body.dataset.cuisine;   // chưa biết ẩm thực

    els.media.classList.add('is-fallback');   // chỉ hiện emoji khi đang quay
    els.img.removeAttribute('src');
    els.meta.textContent = 'Đang quay…';
    els.desc.textContent = 'Đang chọn món cho bạn, chờ chút nhé!';
    els.live.textContent = 'Đang quay…';

    const pool = basePool();
    let shown = null;
    const tick = (dish) => {
      shown = dish;
      els.name.textContent = dish.name;
      els.emoji.textContent = dish.emoji;
    };
    const randomOther = () => {
      const c = pool.filter((d) => d !== shown && d !== final);
      return App.randomItem(c.length ? c : pool);
    };

    tick(randomOther());
    for (let i = 0; i < SCHEDULE.length; i++) {
      await App.wait(SCHEDULE[i]);
      if (token !== spinToken) return;                 // đã có lượt quay mới
      tick(i === SCHEDULE.length - 1 ? final : randomOther());
    }

    card.classList.remove('is-spinning');
    card.removeAttribute('aria-busy');
    render(final);
    void card.offsetWidth;                // khởi động lại animation
    card.classList.add('is-bounce');      // nảy nhẹ 0.96 → 1.03 → 1
    if (hadFocus) els.again.focus();
  }

  /* ---------- Khởi chạy ---------- */
  function init() {
    if (qDish) {
      const dish = DISHES.find((d) => d.id === qDish);
      if (!dish) {
        return showEmpty('Ơ, món này chưa có trong thực đơn',
          'Có thể đường dẫn bị sai. Để vòng quay chọn giúp bạn một món khác nhé!');
      }
      mode = 'dish';
      setLast(dish.id);
      renderIndicator();
      render(dish);
    } else if (qCuisine) {
      if (!CUISINES[qCuisine]) {
        return showEmpty('Chưa có nền ẩm thực này',
          'Tụi mình đang bổ sung thêm. Trong lúc chờ, thử chọn bất kỳ món nào nhé!');
      }
      mode = 'cuisine';
      document.body.dataset.cuisine = qCuisine;
      renderIndicator();
      spin();
    } else {
      mode = 'any';
      renderIndicator();
      spin();
    }

    els.again.addEventListener('click', () => {
      if (mode === 'dish') {             // xem món trực tiếp → quay bất kỳ
        mode = 'any';
        history.replaceState(null, '', 'result.html?mode=any');
        renderIndicator();
      }
      spin();
    });
  }

  init();
})();
