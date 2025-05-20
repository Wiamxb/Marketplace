let allProducts = [];
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const showCartButton = document.getElementById('show-cart');
const cartContainer = document.getElementById('cart-container');
