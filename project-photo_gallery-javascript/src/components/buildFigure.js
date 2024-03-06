function buildFigure(data, action, index, height) {
  function setButtonAction() {
    if (action === "SAVE") {
      return ["card__button--save", "Save"];
    } else if (action === "REMOVE") {
      return ["card__button--remove", "Remove"];
    }
  }
  const buttonAction = setButtonAction();
  console.log("buttonAction", buttonAction);
  const url = data[index]
    ? data[index].url || data[index].image.url
    : "https://media.istockphoto.com/id/1487283582/photo/silver-tabby-cat-peeks-out-from-behind-a-white-wall.webp?b=1&s=170667a&w=0&k=20&c=JTxBT8h-xp0ByPKS9doMNrS2j4M6jYmjcnyrdzrMqt4=";
  const id = data[index] ? data[index].id : "123rewq";
  return `
    <figure class="gallery__thumb gallery__link">
    <img
    src="${url}"
    alt="cat_image"
    class="gallery__image"
    style="width: 100%; height: ${height * 100}px"
          />
          <figcaption class="gallery__caption">
            <buttton class="${buttonAction[0]}" data-image-id=${id} >${
    buttonAction[1]
  }</buttton>
            </figcaption>
  </figure>`;
}

// function buildFigure(index, height) {
//   if (data.length === 0) return `<p>Save more photos</p>`;
//   if (!data[index]) index = 4;
//   return `
//     <figure class="gallery__thumb gallery__link">
//     <img
//     src="${data[index].image.url}"
//     alt="cat_image"
//     class="gallery__image"
//     style="width: 100%; height: ${height * 100}px"
//           />
//           <figcaption class="gallery__caption">
//             <buttton class="card__button--remove" data-image-id=${
//               data[index].id
//             } >Remove</buttton>
//             </figcaption>
//   </figure>`;
// }

export { buildFigure };
