const productLijst = document.getElementById('product-lijst');
const zoekInvoer = document.getElementById('zoek');
const toonWinkelmandKnop = document.getElementById('toon-winkelmand');
const toonFavorietenKnop = document.getElementById('toon-favorieten');

let alleProducten = [];
let favorieten = JSON.parse(localStorage.getItem('favorieten')) || [];
let winkelmand = [];
/*API*/
async function haalProductenOp() {
  const antwoord = await fetch('https://dummyjson.com/products');
  const gegevens = await antwoord.json();
  return gegevens.products;
}
/*Producten tonen*/
function toonProducten(producten) {
  const productLijst = document.getElementById('productLijst');
  productLijst.innerHTML = '';
  producten.forEach(product => {
    const isFavoriet = favorieten.includes(product.id);
    const inWinkelmand = winkelmand.some(item => item.id === product.id);
    productLijst.innerHTML += `
    <div class="product-kaart">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>💰 ${product.price} €</p>
      <p>${product.category}</p>
      <button class="favoriet-knop" data-id="${product.id}">
          ${isFavoriet ? '❤️ Verwijder uit favorieten' : '🤍 Voeg toe aan favorieten'}
        </button>
        <button class="winkelmand-knop" data-id="${product.id}">
          Toevoegen aan winkelmandje
        </button>
      </div>
    `;
  });
  initFavorietenKnoppen ();
}

haalProductenOp().then(producten => {
  alleProducten = producten;
  toonProducten(alleProducten);
});


/*---------------------------------------------------------------------------------------------------------------*/
/*code: zoekbalk*/
zoekInvoer.addEventListener('input', () => {
  const zoekterm = zoekInvoer.value.toLowerCase();
  const gevondenProducten = alleProducten.filter(product =>
    product.title.toLowerCase().includes(zoekterm) ||
    product.description.toLowerCase().includes(zoekterm)
  );
  toonProducten(gevondenProducten);
});

/*code: filtreren*/ 
document.querySelectorAll('.filter-knop').forEach(knop => {
  knop.addEventListener('click', () => {
    const categorie = knop.dataset.filter; 
    const gefilterdeProducten = categorie === 'all' 
    ? alleProducten
    : alleProducten.filter(product => product.category === categorie); 
    toonProducten(gefilterdeProducten); 
  })
})
/*code: favorietenknop*/ 
function initFavorietenKnoppen() {
  document.querySelectorAll('.favoriet-knop').forEach(knop => {
    knop.addEventListener('click', () => {
      const id = parseInt(knop.dataset.id); 
      if (favorieten.includes(id)) {
        favorieten = favorieten.filter(fid => fid !== id);
      } else {
        favorieten.push(id);
      }
      localStorage.setItem('favorieten', JSON.stringify(favorieten));
      updateFavorietenAantal(); 
      toonProducten(alleProducten); 
    });
  });
}


