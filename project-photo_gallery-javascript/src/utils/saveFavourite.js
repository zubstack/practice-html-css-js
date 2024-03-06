import { endpoints } from "../services/endpoints.js";

async function saveFavourite(id) {
  const res = await fetch(endpoints.getFavouriteCats, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY":
        "live_4K25xEWsSo7fAvZp0l0uJ8prsp4qUzvVI1OEp4rbhBWVjBW7liJ0gBYxgMQX14Db",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  if (res.status !== 200) {
    const data = await res.text();
    spanContainer.classList.remove("off");
    spanInfo.innerText = `Hubo un error ${res.status}: ${data}`;
  } else {
    console.log("Michi GUARDADO");
  }
}

export { saveFavourite };
