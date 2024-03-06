import data from "../data/menu.json";

function pageMenu() {
  console.log("data", data);
  const section = document.createElement("section");
  section.setAttribute("id", "menu");
  const title = document.createElement("h2");
  title.classList.add("section__title");
  title.textContent = "Los mejores platillos de la gatronomia ecuatoriana";
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards__container");

  //   Menu Cards
  const menuCards = [];
  data.map((item) => {
    let card = `
    <div class="dish__card">
    <img class="dish__image" src="${item.imagen}" alt="Nombre del Platillo" />
    <div class="dish__info">
    <h2>${item.nombre}</h2>
      <p class="dish__description">
       ${item.descripcion}
      </p>
      <p class="dish__description"><strong>Incluye: </strong> ${item.acompaniados}</p>
      <p class="price">${item.precio_comercial}</p>
    </div>
  </div>`;
    menuCards.push(card);
  });
  cardsContainer.innerHTML = menuCards.join(" ");

  section.appendChild(title);
  section.appendChild(cardsContainer);

  return section;
}

export default pageMenu;

//   <section id="contact">
//     <h2>Contacto</h2>
//     <p>
//       Puedes contactarnos en:
//       <strong>info@restaurante-ecuatoriano.com</strong>
//     </p>
//   </section>
