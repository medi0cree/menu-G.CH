/**
 * Gold Chicken — одностраничное меню для QR-заказов.
 * Перед запуском замените PHONE_NUMBER на WhatsApp кафе (цифры без +).
 */

/** WhatsApp кафе: только цифры, без плюса и пробелов */
const PHONE_NUMBER = "79289580006";

const CART_KEY = "gc-cart-v1";

/** Полное меню по фото витрины. Две цены = две отдельные позиции. */
const menu = {
  "ШАУРМА": [
    { id: 1, name: "Шаурма (большая)", price: 240, desc: "Сочная курица, овощи и фирменный соус" },
    { id: 2, name: "Шаурма (средняя)", price: 200, desc: "Классический средний размер" },
    { id: 3, name: "Шаурма (маленькая)", price: 170, desc: "Компактный формат на один присест" },
    { id: 4, name: "Шаурма сырная", price: 250, desc: "С расплавленным сыром" },
    { id: 5, name: "Шаурма в булочке", price: 180, desc: "Курица в мягкой булочке" },
    { id: 6, name: "Шаурма в тандыре", price: 180, desc: "Выпечена в тандыре" },
    { id: 7, name: "Шаурма мексиканская (с холопенью)", price: 230, desc: "Острее обычной, с холопенью" }
  ],
  "ШАУРМА В КЛЯРЕ": [
    { id: 8, name: "Шаурма в кляре большая", price: 310, desc: "Хрустящий кляр, большой размер" },
    { id: 9, name: "Шаурма в кляре маленькая", price: 280, desc: "Хрустящий кляр, маленький размер" }
  ],
  "СОУСЫ": [
    { id: 10, name: "Сырно-острый", price: 50, desc: "К любому блюду" },
    { id: 11, name: "Красный-бешамель", price: 50, desc: "К шаурме и снекам" },
    { id: 12, name: "Сырный", price: 35, desc: "Нежный сырный соус" }
  ],
  "БУРГЕРЫ": [
    { id: 13, name: "Бургер", price: 320, desc: "Классический куриный бургер" },
    { id: 14, name: "Дубайский бургер", price: 510, desc: "Премиальная сборка" },
    { id: 15, name: "Турецкий бургер", price: 350, desc: "С восточными специями" },
    { id: 16, name: "Голландский бургер", price: 360, desc: "Сытный европейский вкус" }
  ],
  "НЕ ШАУРМА": [
    { id: 17, name: "Чикен бокс", price: 610, desc: "Большой набор с курицей" },
    { id: 18, name: "Острые крылышки (в сырно-остром соусе)", price: 370, desc: "Крылья в сырно-остром соусе" },
    { id: 19, name: "Буррито", price: 250, desc: "Курица, овощи, соус в лепёшке" },
    { id: 20, name: "Твистер большой", price: 240, desc: "Большой ролл" },
    { id: 21, name: "Твистер маленький", price: 210, desc: "Компактный ролл" },
    { id: 22, name: "Хот-дог датский (классика)", price: 190, desc: "Классический датский хот-дог" },
    { id: 23, name: "Хот-дог Мексика (острый)", price: 190, desc: "Острая мексиканская версия" },
    { id: 24, name: "Багет куриный", price: 340, desc: "Курица в хрустящем багете" }
  ],
  "СНЕКИ": [
    { id: 25, name: "Картофель фри (мал.)", price: 135, desc: "Маленькая порция" },
    { id: 26, name: "Картофель фри (бол.)", price: 165, desc: "Большая порция" },
    { id: 27, name: "Наггетсы (мал.)", price: 145, desc: "Маленькая порция" },
    { id: 28, name: "Наггетсы (бол.)", price: 185, desc: "Большая порция" }
  ],
  "КОФЕ С МОЛОКОМ": [
    { id: 29, name: "Капучино (мал.)", price: 150, desc: "Эспрессо с молочной пенкой" },
    { id: 30, name: "Капучино (бол.)", price: 200, desc: "Больший объём" },
    { id: 31, name: "Латте (мал.)", price: 150, desc: "Мягкий кофе с молоком" },
    { id: 32, name: "Латте (бол.)", price: 200, desc: "Больший объём" },
    { id: 33, name: "Флет Уайт", price: 160, desc: "Двойной эспрессо с молоком" },
    { id: 34, name: "Какао (мал.)", price: 100, desc: "Горячий шоколад" },
    { id: 35, name: "Какао (бол.)", price: 150, desc: "Больший объём" }
  ],
  "КОФЕ": [
    { id: 36, name: "Эспрессо", price: 140, desc: "Крепкий шот" },
    { id: 37, name: "Американо", price: 140, desc: "Эспрессо с водой" },
    { id: 38, name: "Лунго", price: 150, desc: "Более длинная экстракция" }
  ],
  "РАФ": [
    { id: 39, name: "Раф классический (мал.)", price: 160, desc: "Сливочный раф" },
    { id: 40, name: "Раф классический (бол.)", price: 210, desc: "Больший объём" },
    { id: 41, name: "Раф арахис (мал.)", price: 200, desc: "С арахисовой нотой" },
    { id: 42, name: "Раф арахис (бол.)", price: 250, desc: "Больший объём" },
    { id: 43, name: "Раф солёная карамель (мал.)", price: 200, desc: "Солёная карамель" },
    { id: 44, name: "Раф солёная карамель (бол.)", price: 250, desc: "Больший объём" },
    { id: 45, name: "Раф цитрусовый (мал.)", price: 200, desc: "Цитрусовый акцент" },
    { id: 46, name: "Раф цитрусовый (бол.)", price: 250, desc: "Больший объём" },
    { id: 47, name: "Раф урбеч (миндаль/арахис) (мал.)", price: 200, desc: "С урбечем" },
    { id: 48, name: "Раф урбеч (миндаль/арахис) (бол.)", price: 250, desc: "Больший объём" }
  ],
  "КОКТЕЙЛИ": [
    { id: 49, name: "Банановый", price: 220, desc: "Молочный коктейль с бананом" },
    { id: 50, name: "Молочный", price: 200, desc: "Классический молочный" },
    { id: 51, name: "Клубничный", price: 220, desc: "С клубникой" },
    { id: 52, name: "Шоколадный", price: 200, desc: "С шоколадом" }
  ],
  "ФРЕШИ": [
    { id: 53, name: "Апельсин", price: 300, desc: "Свежевыжатый апельсин" },
    { id: 54, name: "Грейпфрут", price: 300, desc: "Свежевыжатый грейпфрут" }
  ],
  "ДОБАВКИ": [
    { id: 55, name: "Сироп", price: 20, desc: "К кофе и коктейлям" },
    { id: 56, name: "Альтернативное молоко", price: 40, desc: "Замена обычного молока" }
  ]
};

const categories = Object.keys(menu);
/** Плоский индекс id → товар */
const itemsById = {};
categories.forEach((cat) => menu[cat].forEach((item) => { itemsById[item.id] = item; }));

let cart = loadCart();
let activeCategory = categories[0];

const els = {
  nav: document.getElementById("category-nav"),
  menu: document.getElementById("menu"),
  badge: document.getElementById("cart-badge"),
  drawer: document.getElementById("cart-drawer"),
  backdrop: document.getElementById("cart-backdrop"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  goCheckout: document.getElementById("go-checkout"),
  viewMenu: document.getElementById("view-menu"),
  viewCheckout: document.getElementById("view-checkout"),
  viewSuccess: document.getElementById("view-success"),
  checkoutSummary: document.getElementById("checkout-summary"),
  checkoutTotal: document.getElementById("checkout-total"),
  form: document.getElementById("checkout-form"),
  formError: document.getElementById("form-error"),
  phone: document.getElementById("field-phone"),
  orderNumber: document.getElementById("order-number"),
  waRetry: document.getElementById("wa-retry")
};

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function money(n) {
  return `${n} ₽`;
}

function cartCount() {
  return cart.reduce((sum, row) => sum + row.qty, 0);
}

function cartSum() {
  return cart.reduce((sum, row) => {
    const item = itemsById[row.id];
    return sum + (item ? item.price * row.qty : 0);
  }, 0);
}

function renderNav() {
  els.nav.innerHTML = categories.map((cat) => (
    `<button type="button" class="cat-btn${cat === activeCategory ? " is-active" : ""}" data-cat="${escapeAttr(cat)}">${escapeHtml(cat)}</button>`
  )).join("");
}

function renderMenu() {
  const items = menu[activeCategory] || [];
  els.menu.innerHTML = `<div class="menu-grid">${items.map((item) => `
    <article class="card">
      <h3>${escapeHtml(item.name)}</h3>
      <p class="desc">${escapeHtml(item.desc)}</p>
      <div class="card-foot">
        <span class="price">${money(item.price)}</span>
        <button type="button" class="add-btn" data-add="${item.id}">В корзину</button>
      </div>
    </article>
  `).join("")}</div>`;
}

function renderCart() {
  const count = cartCount();
  els.badge.hidden = count === 0;
  els.badge.textContent = String(count);
  els.goCheckout.disabled = count === 0;

  if (!cart.length) {
    els.cartItems.innerHTML = `<p class="cart-empty">Корзина пуста. Добавьте блюда из меню.</p>`;
    els.cartTotal.textContent = money(0);
    return;
  }

  els.cartItems.innerHTML = cart.map((row) => {
    const item = itemsById[row.id];
    if (!item) return "";
    return `
      <div class="cart-row">
        <div>
          <div class="name">${escapeHtml(item.name)}</div>
          <div class="meta">${money(item.price)} × ${row.qty} = ${money(item.price * row.qty)}</div>
        </div>
        <div class="qty">
          <button type="button" data-dec="${item.id}" aria-label="Уменьшить">−</button>
          <span>${row.qty}</span>
          <button type="button" data-inc="${item.id}" aria-label="Увеличить">+</button>
        </div>
      </div>`;
  }).join("");
  els.cartTotal.textContent = money(cartSum());
}

function renderCheckoutSummary() {
  els.checkoutSummary.innerHTML = cart.map((row) => {
    const item = itemsById[row.id];
    if (!item) return "";
    return `<li><span>${escapeHtml(item.name)} × ${row.qty}</span><span>${money(item.price * row.qty)}</span></li>`;
  }).join("");
  els.checkoutTotal.textContent = money(cartSum());
}

function addToCart(id) {
  const row = cart.find((r) => r.id === id);
  if (row) row.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  flash("Добавлено в корзину");
}

function changeQty(id, delta) {
  const row = cart.find((r) => r.id === id);
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) cart = cart.filter((r) => r.id !== id);
  saveCart();
  renderCart();
}

function openCart() {
  els.drawer.classList.add("is-open");
  els.drawer.setAttribute("aria-hidden", "false");
  els.backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  els.drawer.classList.remove("is-open");
  els.drawer.setAttribute("aria-hidden", "true");
  els.backdrop.hidden = true;
  document.body.style.overflow = "";
}

function showView(name) {
  const map = { menu: els.viewMenu, checkout: els.viewCheckout, success: els.viewSuccess };
  Object.values(map).forEach((el) => {
    el.classList.remove("is-active");
    el.hidden = true;
  });
  map[name].classList.add("is-active");
  map[name].hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function flash(text) {
  const n = document.createElement("div");
  n.className = "toast";
  n.textContent = text;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 1400);
}

/** Маска +7 (___) ___-__-__ */
function maskPhone(value) {
  const digits = value.replace(/\D/g, "").replace(/^8/, "7").replace(/^7/, "");
  const d = digits.slice(0, 10);
  let out = "+7";
  if (d.length === 0) return out + " ";
  out += " (" + d.slice(0, 3);
  if (d.length >= 3) out += ")";
  if (d.length > 3) out += " " + d.slice(3, 6);
  if (d.length > 6) out += "-" + d.slice(6, 8);
  if (d.length > 8) out += "-" + d.slice(8, 10);
  return out;
}

function phoneValid(value) {
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
}

function orderId() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rnd = String(Math.floor(Math.random() * 900) + 100);
  return `GC-${ymd}-${rnd}`;
}

function buildWhatsAppUrl(id, name, phone, comment) {
  const lines = cart.map((row) => {
    const item = itemsById[row.id];
    return item ? `${item.name} × ${row.qty} = ${item.price * row.qty} ₽` : "";
  }).filter(Boolean);
  const text = [
    `Новый заказ #${id}`,
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Состав:`,
    ...lines,
    `Сумма: ${cartSum()} ₽`,
    `Комментарий: ${comment || "—"}`
  ].join("\n");
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(s) {
  return escapeHtml(s);
}

/* События */
els.nav.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  activeCategory = btn.getAttribute("data-cat");
  renderNav();
  renderMenu();
});

els.menu.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  addToCart(Number(btn.getAttribute("data-add")));
});

els.cartItems.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  if (inc) changeQty(Number(inc.getAttribute("data-inc")), 1);
  if (dec) changeQty(Number(dec.getAttribute("data-dec")), -1);
});

document.getElementById("cart-open").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
els.backdrop.addEventListener("click", closeCart);

document.getElementById("go-checkout").addEventListener("click", () => {
  if (!cart.length) return;
  closeCart();
  renderCheckoutSummary();
  showView("checkout");
});

document.getElementById("back-to-menu").addEventListener("click", () => showView("menu"));

els.phone.addEventListener("input", () => {
  els.phone.value = maskPhone(els.phone.value);
});
els.phone.addEventListener("focus", () => {
  if (!els.phone.value) els.phone.value = "+7 ";
});

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const phone = els.phone.value.trim();
  const comment = document.getElementById("field-comment").value.trim();
  els.formError.hidden = true;

  if (!name) {
    els.formError.textContent = "Укажите имя.";
    els.formError.hidden = false;
    return;
  }
  if (!phoneValid(phone)) {
    els.formError.textContent = "Телефон в формате +7 (999) 123-45-67.";
    els.formError.hidden = false;
    return;
  }
  if (!cart.length) {
    els.formError.textContent = "Корзина пуста.";
    els.formError.hidden = false;
    return;
  }

  const id = orderId();
  const wa = buildWhatsAppUrl(id, phone, comment);
  els.orderNumber.textContent = `#${id}`;
  els.waRetry.href = wa;
  cart = [];
  saveCart();
  renderCart();
  showView("success");
  window.open(wa, "_blank");
});

document.getElementById("new-order").addEventListener("click", () => {
  els.form.reset();
  showView("menu");
});

function openPrivacy() {
  privacy.hidden = false;
  privacy.classList.add("is-open");
}
function closePrivacy() {
  privacy.classList.remove("is-open");
  privacy.hidden = true;
}

const privacy = document.getElementById("privacy-modal");
document.getElementById("privacy-open").addEventListener("click", openPrivacy);
document.getElementById("privacy-close").addEventListener("click", closePrivacy);
privacy.addEventListener("click", (e) => { if (e.target === privacy) closePrivacy(); });

renderNav();
renderMenu();
renderCart();
