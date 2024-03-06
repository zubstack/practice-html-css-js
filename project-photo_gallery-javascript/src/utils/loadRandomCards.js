import { buildFigure } from "../components/buildFigure.js";
import { endpoints } from "../services/endpoints.js";
import { saveFavourite } from "./saveFavourite.js";

async function loadRandomCards() {
  const res = await fetch(endpoints.getRandomCats);
  const data = await res.json();

  const containerRandom = document.getElementById("ramdom-cats__gallery");

  let [m, n, o] = [0, 1, 2];
  const toColumns = [];

  let combinationIndex = 0;
  let combinations = [
    [3, 5, 4],
    [5, 4, 3],
    [4, 3, 5],
  ];
  for (let index = 0; index < 4; index++) {
    let combination = combinations[combinationIndex];
    const column = `
    <div class="gallery__column">
     ${buildFigure(data, "SAVE", m, combination[0])}
     ${buildFigure(data, "SAVE", n, combination[1])}
     ${buildFigure(data, "SAVE", o, combination[2])}
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

  const parser = new DOMParser();
  const html = parser.parseFromString(gallery, "text/html");
  const body = html.body;

  containerRandom.append(body);

  const buttons = Array.from(
    document.getElementsByClassName("card__button--save")
  );
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-image-id");
      saveFavourite(id);
    });
  });
}

export { loadRandomCards };
