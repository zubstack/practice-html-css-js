import { spanContainer, spanInfo } from "../components/InfoSpan.js";
import { endpoints } from "../services/endpoints.js";
import { loadFavouriteCards } from "./loadFavouriteCards.js";

async function removeFavourite(id) {
  const res = await fetch(endpoints.deleteFavouriteCat(id), {
    method: "DELETE",
    headers: {
      "X-API-KEY":
        "live_4K25xEWsSo7fAvZp0l0uJ8prsp4qUzvVI1OEp4rbhBWVjBW7liJ0gBYxgMQX14Db",
    },
  });

  if (res.status !== 200) {
    const data = await res.text();
    spanContainer.classList.remove("off");
    spanInfo.innerText = `Hubo un error ${res.status}: ${data}`;
  } else {
    console.log("Michi ELIMINADO");
    loadFavouriteCards();
  }
  const data = await res.json();
  console.log(data);
}

export { removeFavourite };
