function pageHome() {
  const section = document.createElement("section");
  section.setAttribute("id", "home");
  const title = document.createElement("h2");
  title.textContent = "Bienvenido a nuestro restaurante ecuatoriano";
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Descubre la auténtica gastronomía ecuatoriana en un ambiente acogedor.";
  const img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTgTMt-EU1PjUV-45h1vQ1FeL3rCFMIq9Ng&usqp=CAU";
  img.classList.add("home__img");
  section.appendChild(title);
  section.appendChild(paragraph);
  section.appendChild(img);

  return section;
}

export default pageHome;
{
  /* <section id="home">
      <h2>Bienvenido a nuestro restaurante ecuatoriano</h2>
      <p>
        Descubre la auténtica gastronomía ecuatoriana en un ambiente acogedor.
      </p>
    </section>

    <section id="menu">
      <!-- Repite la estructura de platillos aquí -->
      <div class="dish__card">
        <img src="URL_IMAGEN_PLATILLO" alt="Nombre del Platillo" />
        <div class="dish__info">
          <h2>Nombre del Platillo</h2>
          <p>
            Descripción del platillo. Puedes agregar detalles y destacar los
            ingredientes.
          </p>
          <p class="price">$X.XX</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contacto</h2>
      <p>
        Puedes contactarnos en:
        <strong>info@restaurante-ecuatoriano.com</strong>
      </p>
    </section> */
}
