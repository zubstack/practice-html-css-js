import { buildFigure } from "../components/buildFigure.js";
import { endpoints } from "../services/endpoints.js";
import { removeFavourite } from "./removeFavourite.js";

async function loadFavouriteCards() {
  const res = await fetch(endpoints.getFavouriteCats, {
    method: "GET",
    headers: {
      "X-API-KEY":
        "live_4K25xEWsSo7fAvZp0l0uJ8prsp4qUzvVI1OEp4rbhBWVjBW7liJ0gBYxgMQX14Db",
    },
  });
  const data = await res.clone().json();

  const favouritesContainer = document.getElementById(
    "favourite-cats__container"
  );

  const toColumns = [];
  const colums = Math.floor(data.length / 3) + (data.length % 3 !== 0 ? 1 : 0);

  let [m, n, o] = [0, 1, 2];

  let combinationIndex = 0;
  let combinations = [
    [3, 5, 4],
    [5, 4, 3],
    [4, 3, 5],
  ];
  for (let index = 0; index < colums; index++) {
    let combination = combinations[combinationIndex];
    const column = `
    <div class="gallery__column">
     ${buildFigure(data, "REMOVE", m, combination[0])}
     ${buildFigure(data, "REMOVE", n, combination[1])}
     ${buildFigure(data, "REMOVE", o, combination[2])}
    </div>`;
    toColumns.push(column);
    m += 3;
    n += 3;
    o += 3;
    if ((combinationIndex + 1) % 3 == 0) {
      combinationIndex = 0;
    } else {
      combinationIndex += 1;
    }
  }

  const gallery = `
  <div class="gallery">
  ${toColumns.join("")}
  </div>`;

  favouritesContainer.innerHTML = gallery;

  const buttons = Array.from(
    document.getElementsByClassName("card__button--remove")
  );
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-image-id");
      removeFavourite(id);
    });
  });
}

export { loadFavouriteCards };

// if (res.status !== 200) {
//   const data = await res.text();
//   spanContainer.classList.remove("off");
//   spanInfo.innerText = `Hubo un error ${res.status}: ${data}`;
// }
