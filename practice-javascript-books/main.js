const library = [];
class Book {
  constructor(title, author, pages, language, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.language = language),
      (this.read = read);
  }
}

const libraryElement = document.querySelector("#library-container");

//GET
const render = () => {
  for (let index = 0; index < library.length; index++) {
    let book = library[index];
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = ` 
        <div class="book-card-text">
          <h1>${book.title}</h1>
          <p>By: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <p>${book.language}</p>
        </div>
        <div class="book-card-inputs">
          <button type="button" onclick="removeCard(${index})" class="btn-close">✖</button>
          <label class="switch">
            <input id="input-switch" onclick="toggleRead(${index})" type="checkbox" ${
      book.read ? 'checked="checked"' : ""
    }/>
            <span class="slider round"></span>
          </label>
        </div> `;
    libraryElement.append(bookCard);
  }
};

//POST
const addBook = () => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let language = document.querySelector("#language").value;
  let read = document.querySelector("#read").checked;

  const newBook = new Book(title, author, pages, language, read);
  library.push(newBook);

  libraryElement.innerHTML = "";
  render();
  formContainer.style.display = "none";
};

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

//UPDATE
const toggleRead = (index) => {
  library[index].toggleRead();
  libraryElement.innerHTML = "";
  render();
};

//DELETE
const removeCard = (index) => {
  library.splice(index, 1);
  libraryElement.innerHTML = "";
  render();
};

const formContainer = document.querySelector("#form-container");
formContainer.addEventListener("submit", () => {
  event.preventDefault();
  addBook();
  console.log(library);
  document.querySelector("section").style.filter = "blur(0px)";
  formContainer.reset();
});

const btnOpenForm = document
  .querySelector("#open-form-btn")
  .addEventListener("click", () => {
    document.querySelector("section").style.filter = "blur(5px)";
    formContainer.style.display = "block";
  });

const btnCloseForm = document
  .querySelector("#close-form-btn")
  .addEventListener("click", () => {
    document.querySelector("section").style.filter = "blur(0px)";
    formContainer.style.display = "none";
    formContainer.reset();
  });
