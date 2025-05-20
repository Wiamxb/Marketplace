/*basisvariabelen*/
let allProducts = [];
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const showCartButton = document.getElementById('show-cart');
const cartContainer = document.getElementById('cart-container');

/*Producten ophalen van API*/
async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
}

/*render producten met fav- en winkelmand-knoppen*/
function renderProducts(products) {
  productList.innerHTML = '';

  products.forEach((product) => {
    const isFav = favourites.includes(product.id);
    const inCart = cart.some(item => item.id === product.id);

    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>💰 ${product.price} €</p>
      <p>${product.category}</p>
      <div class="product-actions">
        <button class="fav-btn" data-id="${product.id}">${isFav ? '❤️' : '🤍'}</button>
        <button class="cart-btn" data-id="${product.id}">${inCart ? 'In winkelmand' : '🛒 Voeg toe aan winkelmand'}</button>
      </div>
    `;
    productList.appendChild(card);
  });

  initFavButtons();
  initCartButtons();
}

/*code: favoriete producten*/
function initFavButtons() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      if (favourites.includes(id)) {
        favourites = favourites.filter(fid => fid !== id);
      } else {
        favourites.push(id);
      }
      localStorage.setItem('favourites', JSON.stringify(favourites));
      updateFavoritesCount();
      renderProducts(allProducts);
    });
  });
}
/*code: winkelmand*/
function initCartButtons() {
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const product = allProducts.find(p => p.id === id);
      if (!cart.some(item => item.id === id)) {
        cart.push(product);
      } else {
        cart = cart.filter(item => item.id !== id);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      renderProducts(allProducts);
    });
  });
}

/*Aantal favorieten en producten*/
function updateFavoritesCount() {
  document.getElementById('favorites-count').textContent = favourites.length;
}

function updateCartCount() {
  showCartButton.textContent = `Winkelmandje (${cart.length})`;
}

/*Winkelmand renderen en producten laten verwijderen*/
function renderCart() {
  cartContainer.innerHTML = '';
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Je winkelmand is leeg.</p>';
    return;
  }

  cart.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <div class="cart-item-details">
        <h3>${product.title}</h3>
        <p>💰 ${product.price} €</p>
      </div>
      <button class="remove-cart-btn" data-id="${product.id}">✖</button>
    `;
    cartContainer.appendChild(item);
  });

  document.querySelectorAll('.remove-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      cart = cart.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartCount();
      renderProducts(allProducts);
    });
  });
}  
/*producten landen*/
async function init() {
  allProducts = await fetchProducts();
  renderProducts(allProducts);
  updateCartCount();
  updateFavoritesCount();
}

init();

/*zoekfunctionaliteit*/
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
 
/*Producten filteren per categorie*/ 
document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    const filtered = category === 'all'
      ? allProducts
      : allProducts.filter(p => p.category === category);
    renderProducts(filtered);
  });
});

/* Alleen favorieten tonen*/
document.getElementById('show-favorites').addEventListener('click', () => {
  const favProducts = allProducts.filter(p => favourites.includes(p.id));
  renderProducts(favProducts);
});

/*Winkelmandje verbergen/tonen"*/
showCartButton.addEventListener('click', () => {
  const cartPage = document.getElementById('cart-page');
  cartPage.classList.toggle('hidden');
  renderCart();
});







