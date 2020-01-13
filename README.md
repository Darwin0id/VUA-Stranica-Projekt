<p align="center">
  <img alt="AlgebraLogo" width="200px" src="https://www.algebra.hr/visoko-uciliste/wp-content/themes/visoko-uciliste/assets/images/svg/algebra-znak.svg" />
</p>

# Visoko učilište Algebra - Web stranica

Projektni zadatak nalaže da se kreira internetska stranica koja prezentira Visoko učilište Algebru.

---

# Instalacija

## Zahtjevi sustava
* "browserify": "^16.2.2"
* "jquery": "^3.4.1"
* "navigo": "^7.1.2"
* "sweetalert2": "^9.5.4"
* "tippy.js": "^5.1.2"
* "typewriter-effect": "^2.12.2"
* "watchify": "^3.11.1"
* "babel-core": "^6.26.3"
* "babel-preset-es2015": "^6.24.1"
* "babelify": "^8.0.0"
* "micromodal": "^0.4.2"

## Pokretanje projekta
1. Postavljanje okruženja
  `$ npm install`

2. Pokretanje web servera
  `$ npm run server`

3. U slučaju izmjena automatsko buildanje projekta
  `$ npm run watch`

4. U slučaju buildanja projekta
  `$ npm run build`
---

# Zadaci

### ROOT
- [X] Kreirati strukturu foldera
- [X] Podesiti: browserify, jquery, navigo, typewriter, tippy, watchify, babel, babelify
- [X] Kreirati router (Početna stranica, O nama, Novosti, Nastavni plan)
- [X] Kreirati dokumentaciju

### GLOBAL
- [X] Izbornik traka (Početna stranica, O nama, Novosti, Nastavni plan) **#imati na umu da je traka position: fixed**
- [X] Kreirati jednostavan footer
- [X] Dodati Animte.css i napisati skriptu za primjenu na vidljive elemente tijekom scroll-a
- [X] Dodati gradiente koje koristi Algebra
- [X] Dodati novosti u JSON
- [X] Kreirati prikaz novosti na footer-u

### NASLOVNA STRANICA
- [X] Dodati video
- [X] Dodati efekt pisanja na naslovnu
- [X] Dodati basic opise o Algebri
- [X] Dodati efekte animate.css

### O NAMA STRANICA
- [X] Dodati pod-menu
- [X] Dodati sekcije: naše vrijednosti, povijest, algebra grupa, kako do nas
- [X] Dodati google maps

### NOVOSTI STRANICA
- [X] Napraviti JSON sa novostima
- [X] Dohvaćanje novosti iz JSON-a

### NOVOST STRANICA
- [X] Proslijediti na frontend naslov, tekst, datum, slika, videa

### NASTAVNI PLAN STRANICA
- [X] Dodati pretragu
- [X] Dodati tablicu
- [X] Omogućiti autocomplete
- [X] Dohvatiti podatke (GET API)
- [X] Dodavanje kolegija
- [X] Brisanje kolegija

### KONTAKT MODAL
- [X] Dodati modal plugin
- [X] Slanje forme
- [X] Post na API
