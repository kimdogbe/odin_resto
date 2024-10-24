import bread from "../images/bread-dark.jpg"

export function loadPage () {
  const aboutContent = document.createElement("div");
  aboutContent.id = "about-content";

  const aboutImg = document.createElement("img");
  const heroText = document.createElement("h1");
  const tagLine = document.createElement("p");

  heroText.innerHTML = "About Resto d'Odin";
  tagLine.innerHTML = "We make everything fresh everyday and NEVER skimp on ingredients.";
  heroText.style.color = "white";

  aboutContent.appendChild(aboutImg);
  aboutContent.appendChild(heroText);
  aboutContent.appendChild(tagLine);

  console.log("Content added");
  return aboutContent;
}