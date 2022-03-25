'use strict'; 

// Modificar clase CSS 

const newForm = document.querySelector('.js-new-form');
// newForm.classList.remove('collapsed');
if (newForm.classList.contains('collapsed')) {
  newForm.classList.remove("collapsed");
} else {
  newForm.classList.add("collapsed");
}


// Variables e interpolaciones (aplicadas en la parte inferior)

const kittenOneImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName = "Anastacio";
const capitalizedOne = kittenOneName.toUpperCase();
const kittenOneDesc = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenOneRace = "British Shorthair";

const kittenTwoImage = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName = "Fiona";
const capitalizedTwo = kittenTwoName.toUpperCase();
const kittenTwoDesc = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenTwoRace = "British Shorthair";


const kittenThreeImage = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName = "Cielo";
const capitalizedThree = kittenThreeName.toUpperCase();
const kittenThreeDesc = "Carácter tranquilo, equilibrado, sociable y, sobre todo, cariñoso y apegado a los seres humanos. Son inteligentes y les encanta estar acompañados.";
const kittenThreeRace = "British Shorthair";

// Guardar <li> en variables (añadidas interpolaciones)

/* ¿Añadir estilos para poner en línea la lista? */

const catList = document.querySelector(".js-list");

const searchDesc = document.querySelector('.js_in_search_desc');
searchDesc.value = 'cariñoso';
const descSearchText = searchDesc.value;

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title">${capitalizedOne}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">${kittenOneDesc}</p>
</article>
</li>`;

if( kittenOneDesc.includes(descSearchText) ) {
  catList.innerHTML += `${kittenOne}`;
 }

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenTwoImage}
  alt="gatito"
/>
<h3 class="card_title">${capitalizedTwo}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDesc}</p>
</li>`;

if( kittenTwoDesc.includes(descSearchText) ) {
  catList.innerHTML += `${kittenTwo}`;
 }

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenThreeImage}
  alt="gatito"
/>
<h3 class="card_title">${capitalizedThree}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDesc}</p>
</li>`;

if( kittenThreeDesc.includes(descSearchText) ) {
  catList.innerHTML += `${kittenThree}`;
 }