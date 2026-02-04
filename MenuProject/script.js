const menuEl = document.getElementById("menu");
const summaryEl = document.getElementById("summary");
const searchEl = document.getElementById("search");
const vegOnlyEl = document.getElementById("vegOnly");
const saveBtn = document.getElementById("save");

let allItems = [];

// Fetch JSON file
async function fetchMenu() {
  const response = await fetch("menu.json");
  const data = await response.json();
  return data;
}

async function init() {
  const data = await fetchMenu();

  // Parse nested JSON
  allItems = data.categories.flatMap(category => category.items);

  restoreState();
  render();
}

function render() {
  const query = searchEl.value.toLowerCase();
  const vegOnly = vegOnlyEl.checked;

  const filtered = allItems
    .filter(item => !vegOnly || item.veg)
    .filter(item => item.name.toLowerCase().includes(query));

  const totalPrice = filtered.reduce(
    (sum, item) => sum + item.price,
    0
  );

  menuEl.innerHTML = filtered.map(item => `
    <div class="menu-item">
      <div>
        ${item.name}
        ${item.veg ? '<span class="veg">(Veg)</span>' : ''}
      </div>
      <div>$${item.price}</div>
    </div>
  `).join("");

  summaryEl.textContent =
    `Items: ${filtered.length} | Total: $${totalPrice}`;
}

function saveState() {
  const state = {
    search: searchEl.value,
    vegOnly: vegOnlyEl.checked
  };
  localStorage.setItem("menuState", JSON.stringify(state));
  alert("Menu state saved!");
}

function restoreState() {
  const saved = localStorage.getItem("menuState");
  if (!saved) return;

  const state = JSON.parse(saved);
  searchEl.value = state.search;
  vegOnlyEl.checked = state.vegOnly;
}

searchEl.addEventListener("input", render);
vegOnlyEl.addEventListener("change", render);
saveBtn.addEventListener("click", saveState);

init();
