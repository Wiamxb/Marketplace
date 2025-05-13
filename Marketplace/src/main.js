const productLijst = document.getElementById('product-lijst');
const zoekInvoer = document.getElementById('zoek');
const toonWinkelmandKnop = document.getElementById('toon-winkelmand');
const toonFavorietenKnop = document.getElementById('toon-favorieten');

let alleProducten = [];

// Haalt producten op van de API
async function haalProductenOp() {
  const antwoord = await fetch('https://dummyjson.com/products');
  const gegevens = await antwoord.json();
  return gegevens.products;
}

// Toont de producten op de pagina
function toonProducten(producten) {
  productLijst.innerHTML = '';
  producten.forEach((product) => {
    const kaart = document.createElement('div');
    kaart.classList.add('product-kaart');
    kaart.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>💰 ${product.price} €</p>
      <p>${product.category}</p>
      <button>Toevoegen aan winkelmandje</button>
    `;
    productLijst.appendChild(kaart);
  });
}

// Start het ophalen en tonen van producten
haalProductenOp().then(producten => {
  alleProducten = producten;
  toonProducten(alleProducten);
});

/*-------------------------*/
