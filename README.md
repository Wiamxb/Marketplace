Dynamic Web - Interactive Single-Page Application

Projectbeschrijving: 

Deze webapplicatie is een interactieve single-page applicatie die gebruikmaakt van de DummyJSON API. De applicatie laat gebruikers producten bekijken, zoeken op naam, filtreren op categorie, beoordelingen toevoegen, favorieten aanmaken en een winkelmandje opslaan.
Het project is gebouwd met moderne JavaScript-technieken, gebruikt localStorage om gebruikersvoorkeuren te bewaren, en maakt gebruik van de IntersectionObserver API voor vloeiende animaties. De interface is gebruiksvriendelijk en aantrekkelijk.

Functionele vereisten: 

1. Dataverzameling & -weergave:
   - De applicatie haalt data op van de DummyJSON API, waarmee een lijst van meer dan 20 producten beschikbaar is.
   - De layout is ontworpen met een moderne kaartstijl, waarbij elk product afzonderlijk wordt gepresenteerd in een flexibele en responsive container.
   - Elk productkaart bevat de volgende duidelijke details:
      1. Afbeelding van het product
      2. Titel van het product
      3. Beschrijving
      4. Prijs
      5. Beoordeling op 5
      6. Merk
      7. Categorie

2. Interactiviteit:
   - De applicatie bevat knoppen waarmee gebruikers producten kunnen filteren op type. Door op een filterknop te klikken, wordt alleen de lijst met producten getoond die bij de geselecteerde categorie horen. Specifiek zijn er filteropties voor:
     1. Schoonheid
     2. Parfums
     3. Meubels
     4. Boodschappen

   - Zoekfunctie: met de zoekbalk hebben gebruikers de mogelijkheid om specifiek producten te zoeken op basis van de titel. Tijdens het typproces worden de resultaten op een dynamische manier gefilterd, zodat alleen producten met de ingevoerde zoekterm zichtbaar zijn.
  
   - Soortermogelijkheden: In het winkelmandje zijn verwijderknoppen aanwezig zodat gebruikers ongewenste producten makkelijk kunnen verwijderen.
  
3. Personalisatie:
   - Favorieten: gebruikers kunnen producten markeren als favoriet door op het hart-icoon te klikken. Deze favorieten worden opgeslagen in localStorage, zodat ze ook na het herladen van de pagina beschikbaar blijven. Er is een aparte knop voorzien om enkel de favorieten te bekijken.
   - Winkelmandje: producten kunnen worden toegevoegd aan het winkelmandje. Gebruikers kunnen met een aparte knop het winkelmandoverzicht openen om hun geselecteerde aankopen te bekijken. Elke productkaart in het winkelmandje bevat een verwijderknop, waarmee gebruikers eenvoudig producten uit hun mandje kunnen verwijderen. Ook het winkelmandje blijft behouden tussen sessies dankzij localStorage.
   - Beoordelingen: gebruikers kunnen bij elk product de beoordeling (rating) bekijken, zodat ze beter kunnen inschatten of het product aan hun verwachtingen zal voldoen. Daarnaast kunnen gebruikers ook zelf een beoordeling toevoegen via een formulier op de productpagina. Zo ontstaat er een interactieve en persoonlijke gebruikerservaring waarin men zijn mening kan delen met anderen. De beoordelingen worden visueel weergegeven met sterren, en zijn bedoeld om gebruikers te helpen bij hun aankoopbeslissingen.

4. Gebruikerservaring:
   - Volledig responsive design: de layout past zich automatisch aan verschillende schermformaten aan: desktop, tablet én mobiel. Hierdoor blijft de interface overzichtelijk en bruikbaar op elk toestel.
   - Gebruiksvriendelijke navigatie: dankzij een duidelijke structuur en navigatie kunnen gebruikers vlot door de applicatie bladeren. Belangrijke onderdelen zoals de productlijst, winkelmandje en favorieten zijn gemakkelijk bereikbaar via knoppen of een navigatiebalk.
   - Visueel aantrekkelijke lay-out: de applicatie maakt gebruik van een modern ontwerp met afgeronde hoeken, zachte schaduwen en consistente witruimtes. De stijl wordt versterkt door het gebruik van paarse knoppen.
  
Gebruikte API's: 
- DummyJSON API: Deze API werd gratis gevonden via GitHub. Een API met dummy data over producten. 
https://dummyjson.com/docs/products

Technische vereisten: 
- DOM MANIPULATIE
  
| Vereiste                  | Bestand  | Regel(n) | Code                                                                                      |
|---------------------------|----------|----------|-------------------------------------------------------------------------------------------|
| Element selecteren        | main.js  | 6-9      | const productList = document.getElementById('product-list');<br>const searchInput = document.getElementById('search');<br>const showCartButton = document.getElementById('show-cart');<br>const cartContainer = document.getElementById('cart-container');<br> |
| Elementen manipuleren     | main.js  | 20       | `productList.innerHTML = '';`                                                             |
| Events aan elementen koppelen | main.js | 89       | `showCartButton.textContent = \`Winkelmandje (\${cart.length})\`;` |

- MODERN JAVASCRIPT

| Vereiste             | Bestand | Regel(len) | Codevoorbeeld                                      |
|----------------------|---------|------------|---------------------------------------------------|
| Gebruik van constanten| Main.js | 6          | `const productList = document.getElementById('product-list');` |
| Template literals    | Main.js | 28         | `card.innerHTML = \`` (gebruik van backticks en `${}`) |
| Iteratie over arrays | Main.js | 51-52      | `document.querySelectorAll('.fav-btn').forEach(btn => {` |
| Array methods        | Main.js | 74         | `cart = cart.filter(item => item.id !== id);`     |
| Arrow functions      | Main.js | 67-68      | `(btn => { btn.addEventListener('click', () => {` |
| Conditional          | Main.js | 37         | `{isFav ? '❤️' : '🤍'}</button>`                   |
| Callback             | Main.js | 68         | `btn.addEventListener('click', () => {`           |
| Promises             | Main.js | 13         | `const res = await fetch('https://dummyjson.com/products');` |
| Async & Await        | Main.js | 12-13      | `async function fetchProducts() { const res = await fetch(...); }` |
| Observer API         | Main.js | 169        | `const observer = new IntersectionObserver(entries => {` |

- DATA EN API: 

| Vereiste                 | Bestand | Regel | Code                                              |
|--------------------------|---------|-------|---------------------------------------------------|
| Fetch om data op te halen | Main.js | 13    | `const res = await fetch('https://dummyjson.com/products');` |
| JSON manipuleren en weergeven | Main.js | 14    | `const data = await res.json();`                   |

- OPSLAG & VALIDATIE: 

| Vereiste             | Bestand | Regel    | Code                                                                                  |
|----------------------|---------|----------|---------------------------------------------------------------------------------------|
| Formulier validatie  | Main.js | 179-180  | `document.getElementById('simple-review-form').addEventListener('submit', function(e) { e.preventDefault();` |
| Gebruik van LocalStorage | Main.js | 3        | `let favourites = JSON.parse(localStorage.getItem('favourites')) || [];`               |

- STYLING & LAYOUT: 

| Vereiste                  | Bestand   | Regel | Code                              |
|---------------------------|-----------|-------|----------------------------------|
| Basis HTML layout         | Style.css | 2-10  | text-align: center;               |
|                           |           |       | font-family: Arial, sans-serif;  |
| Basis css                 | Style.css | overal | body                             |
| Gebruiksvriendelijke elementen | Style.css | 41    | nav button:hover                  |

- TOOLING & STRUCTUUR:
  1. Het project is opgezet met vite
  2. folderstructuur: index.html zit in de root => main.js en style.css zitten in de map "src". 

Installatiehandleiding: 
1. Via GitHub pages: de website is online beschikbaar via de volgende URL:
🔗 https://wiamxb.github.io/Marketplace/
2. Lokaal via Visual Studio Code:
   - Download of clone de repository
   - Open de map in Visual Studio Code
   - Open een terminal en voer "npm install" uit, en vervolgens "npm run dev"
   - Je krijgt dan een lokale link waarmee je de site lokaal kunt bekijken
  
Screenshots van de applicatie: 
- Basisoverzicht Homepage:
  
  ![image](https://github.com/user-attachments/assets/134639da-85b2-4e29-a746-8d46b8f0cb4e)
  
- Categoriëen => voorbeeld categorie meubels

  ![image](https://github.com/user-attachments/assets/f28bd8a0-a277-4dc7-b28f-81460340a91a)

- Favorieten:

  ![image](https://github.com/user-attachments/assets/7253c85b-b3b5-4008-aa31-f314d65222c1)

- Winkelmandje:
  
  ![image](https://github.com/user-attachments/assets/986a5ba4-6bbd-4942-a699-97d971805099)

- Zoekfunctie:
  
  ![image](https://github.com/user-attachments/assets/048ef36c-573b-4a9d-a428-ce704a7dacad)

- Review-formulier:

  ![image](https://github.com/user-attachments/assets/6e120c11-9d9a-4258-9a0a-05f788bfcd9e)

Gebruikte bronnen: 
- Als bron werd ChatGPT gebruikt:

1. ![image](https://github.com/user-attachments/assets/9fa6d8ab-ecd8-4366-afd3-11695b30b6b7)

2. ![image](https://github.com/user-attachments/assets/868eb79f-a3f3-4547-9c41-9f89c918cb69)

3. ![image](https://github.com/user-attachments/assets/864411bf-ec68-46c9-b609-08be04fe1ec6)

4. ![image](https://github.com/user-attachments/assets/f8d89fe5-d3f2-43b3-a8d2-4dbc3bb1466d)















        
