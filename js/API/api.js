// SPECIALITER API 

const info = document.querySelector(".index__section__grid");
const url = "http://195.14.105.18:1337";
const enfant = document.querySelector(".Enfant");
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
    if (q.data[t].attributes.Sous_titre == undefined || null){
      q.data[t].attributes.Sous_titre = " ";
    }
    if (q.data[t].attributes.plat == false){
      q.data[t].attributes.prix_en_plat = " ";
    }else{
      q.data[t].attributes.prix_en_plat = `En plat: ${q.data[t].attributes.prix_en_plat} €`;
    }
    console.log(categorie)
    if (categorie == "Entrée") {
      const content = `
          <div class="item">
          <div class="ribbon-wrapper">
          <div id="${q.data[t].id}"></div>
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
    }
    else if (categorie == "Viandes"){
      const content = `
          <div class="item">
          <div class="ribbon-wrapper">
          <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Pate"){
      const content = `
          <div class="item">
          <div class="ribbon-wrapper">
          <div id="${q.data[t].id}"></div>
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
      <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Accompagnements"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Burger"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Formule du midi"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Menu Enfant"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
      enfant.innerHTML += content;
    }else if (categorie == "Dessert"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Cocktails"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
    }else if (categorie == "Boissons"){
      const content = `
      <div class="item">
      <div class="ribbon-wrapper">
      <div id="${q.data[t].id}"></div>
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
    }else{
      return;
    }
    if (q.data[t].attributes.special_exquis == true){
      document.getElementById(q.data[t].id).classList.add('ribbon');
      document.getElementById(q.data[t].id).innerHTML = 'Spécial';
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
