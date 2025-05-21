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

   - Favorieten en winkelmandje: naast de filter- en zoekfunctionaliteit is er ondersteuning voor personalisatie:
     1. Favorieten: Gebruikers kunnen producten markeren als favoriet door op het hart-icoon te klikken. De favorieten worden opgeslagen zodat deze tussen sessies bewaard blijven en met een speciale knop kunnen worden getoond.
     2. Winkelmandje: Gebruikers kunnen producten toevoegen aan hun winkelmandje. Met de winkelmandknop kunnen ze het overzicht opvragen van alle producten die ze willen kopen.
        
