import { loadRandomCards } from "./utils/loadRandomCards.js";

window.addEventListener("load", () => {
  loadRandomCards();
});

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 25 && loadRandomCards());
  },
  { passive: true }
);

/*
UTILIZANDO PROMESAS

//Nos devuelve una promesa
fetch(URL)
    //Cargamos la respuesta en algo entendible para JS
    .then(res => res.json())
    
    //Una vez hecho eso, tenemos lista la 'data'
    .then(data => {
        //Esa info la pasamos a 'src' de img
        const img = document.querySelector('img');
        img.src = data[0].url;
    })
*/
