const spanContainer = document.querySelector(".span-container");
const spanInfo = document.querySelector(".info");
const closeSpanInfo = document.querySelector("#close");

closeSpanInfo.addEventListener("click", () => {
  spanContainer.classList.add("off");
});

export { spanContainer, spanInfo, closeSpanInfo };
