function pageContact() {
  const section = document.createElement("section");
  section.setAttribute("id", "contact");
  const title = document.createElement("h2");
  title.textContent = "Contactanos";
  const paragraph = document.createElement("p");
  paragraph.textContent = "Puedes contactarnos en:";
  const strong = document.createElement("strong");
  strong.textContent = "info@restaurante-ecuatoriano.com";
  section.appendChild(title);
  paragraph.appendChild(strong);
  section.appendChild(paragraph);

  return section;
}

export default pageContact;
