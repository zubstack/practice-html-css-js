import pageContact from "./pageContact";
import pageHome from "./pageHome";
import pageMenu from "./pageMenu";
import "./style.css";

let CONTAINER_VIEW = "home";

const container = document.querySelector("#content");
const btnLoaders = document.querySelectorAll(".button__loader");
btnLoaders.forEach((item) => {
  item.addEventListener("click", () => {
    container.innerHTML = "";
    CONTAINER_VIEW = item.dataset.page;
    loadView();
  });
});

const componentHome = pageHome();
const componentMenu = pageMenu();
const componentContact = pageContact();

loadView();
function loadView() {
  switch (CONTAINER_VIEW) {
    case "home":
      container.appendChild(componentHome);
      break;
    case "menu":
      container.appendChild(componentMenu);

      break;
    case "contact":
      container.appendChild(componentContact);
      break;
    default:
      container.appendChild(componentHome);
  }
}
