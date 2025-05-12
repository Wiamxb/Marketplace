let allProducts = [];

const productList = document.getElementById('product-list');

async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
}
