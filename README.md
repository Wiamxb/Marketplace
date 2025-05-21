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
  
3. Personalisatie:
   - Favorieten: gebruikers kunnen producten markeren als favoriet door op het hart-icoon te klikken. Deze favorieten worden opgeslagen in localStorage, zodat ze ook na het herladen van de pagina beschikbaar blijven. Er is een aparte knop voorzien om enkel de favorieten te bekijken.
   - Winkelmandje: producten kunnen worden toegevoegd aan het winkelmandje. Gebruikers kunnen met een aparte knop het winkelmandoverzicht openen om hun geselecteerde aankopen te bekijken. Elke productkaart in het winkelmandje bevat een verwijderknop, waarmee gebruikers eenvoudig producten uit hun mandje kunnen verwijderen. Ook het winkelmandje blijft behouden tussen sessies dankzij localStorage.
   - Beoordelingen: gebruikers kunnen bij elk product de beoordeling (rating) bekijken, zodat ze beter kunnen inschatten of het product aan hun verwachtingen zal voldoen. Daarnaast kunnen gebruikers ook zelf een beoordeling toevoegen via een formulier op de productpagina. Zo ontstaat er een interactieve en persoonlijke gebruikerservaring waarin men zijn mening kan delen met anderen. De beoordelingen worden visueel weergegeven met sterren, en zijn bedoeld om gebruikers te helpen bij hun aankoopbeslissingen.





        
