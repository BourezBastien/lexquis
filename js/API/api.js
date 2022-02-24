// SPECIALITER API 

const info = document.querySelector(".index__section__grid");
const url = "http://195.14.105.18:1337";

const entree = document.querySelector(".Entree");
const viandes = document.querySelector(".Viandes");

const pate = document.querySelector(".Pate");
const sauces = document.querySelector(".Sauces");
const accompagnements = document.querySelector(".Accompagnements");
const burger = document.querySelector(".Burger");
const midi = document.querySelector(".midi");
const Dessert = document.querySelector(".Dessert");
const cocktails = document.querySelector(".Cocktails");
const boissons = document.querySelector(".Boissons");

let Produits = [];

let dataResult = [];

init();

function init() {
  getNews();
  renderData();
  getProduct();
  renderProduct();
}


function renderData(data) {
  r = Object(data);
  for (let n in r.data) {
    const content = `
        <div class="index__items">
            <img src="${url}${r.data[n].attributes.image.data.attributes.url}" alt="image de présentation menu">
            <h1>${r.data[n].attributes.Titre}</h1>
            <p>${r.data[n].attributes.description}</p>
            <div class="index__more">
                <a href="#">En savoir plus</a>
            </div>
        </div>
    `;

    info.innerHTML += content;
  }
}

function getNews() {
  fetch(`${url}/api/speciality-lexquis?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      dataResult = result;
      console.log("dataResult", dataResult);
      renderData(dataResult);
    });
}
// RECUPERATION DES PRODUITS
// q.data[t].attributes.categories.data[0].attributes.nom
function renderProduct(data) {
  q = Object(data);
  for (let t in q.data) {
    categorie = q.data[t].attributes.category.data.attributes.nom;
    console.log(q.data[t].attributes.Sous_titre)
    if (q.data[t].attributes.Sous_titre == undefined || null){
      q.data[t].attributes.Sous_titre = " ";
    }
    if (q.data[t].attributes.plat == false){
      q.data[t].attributes.prix_en_plat = " ";
    }else{
      q.data[t].attributes.prix_en_plat = `En plat: ${q.data[t].attributes.prix_en_plat} €`;
    }
    if (categorie == "Entrée") {
      const content = `
          <div class="item">
          <div class="ribbon-wrapper">
          <div id="Entrée"></div>
          <div class="item_annexe1">
            <h2>${q.data[t].attributes.Titre_produit}</h2>
            <p>${q.data[t].attributes.prix} €</p>
          </div>
              <div class="item_annexe2">
                <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
                <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
            </div>
          </div>
      `;
      entree.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }
    else if (categorie == "Viandes"){
      const content = `
          <div class="item">
          <div class="ribbon-wrapper">
          <div id="Viandes"></div>
          <div class="item_annexe1">
            <h2>${q.data[t].attributes.Titre_produit}</h2>
            <p>${q.data[t].attributes.prix} €</p>
          </div>
              <div class="item_annexe2">
                <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
                <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
            </div>
          </div>
      `;
      viandes.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Pate"){
      const content = `
          <div class="item">
          <div class="ribbon-wrapper">
          <div id="Pate"></div>
          <div class="item_annexe1">
            <h2>${q.data[t].attributes.Titre_produit}</h2>
            <p>${q.data[t].attributes.prix} €</p>
          </div>
              <div class="item_annexe2">
                <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
                <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
            </div>
          </div>
      `;
      pate.innerHTML += content;
    }else if (categorie == "Sauces"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="Sauces"></div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      sauces.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Accompagnements"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="Accompagnements"></div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      accompagnements.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Burger"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="Burger"></div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      burger.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Formule du midi"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="Formule du midi"></div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      midi.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Dessert"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="Dessert">Spécial</div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      Dessert.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Cocktails"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div  id="Cocktails"></div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      cocktails.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else if (categorie == "Boissons"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="Boissons"></div>
      <div class="item_annexe1">
        <h2>${q.data[t].attributes.Titre_produit}</h2>
        <p>${q.data[t].attributes.prix} €</p>
      </div>
          <div class="item_annexe2">
            <h4 class="subtitle">${q.data[t].attributes.Sous_titre}</h4>
            <h4 class="plat_prix">${q.data[t].attributes.prix_en_plat}</h4>
        </div>
      </div>
      `;
      
      boissons.innerHTML += content;
      if (q.data[t].attributes.special_exquis == true){
        document.getElementById(categorie).classList.add('ribbon');
        document.getElementById(categorie).innerHTML = 'Spécial';
      }
    }else{
      return;
    }
  }
}



function getProduct() {
  fetch(`${url}/api/entrees?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      Produits = result;
      console.log("Produits", Produits);
      renderProduct(Produits);
    });
}
