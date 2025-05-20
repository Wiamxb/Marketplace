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

