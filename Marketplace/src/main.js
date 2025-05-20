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