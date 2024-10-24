import bread from "../images/bread-white.jpg"

export function loadPage (parent) {
  parent.innerHTML = "";

  const landingImg = document.createElement("img");
  const heroText = document.createElement("h1");
  const tagLine = document.createElement("p");

  heroText.innerHTML = "Resto d'Odin";
  tagLine.innerHTML = "clean, simple, brilliant";

  parent.style.background = `url(${bread})`;
  parent.style.backgroundSize = "100%";
  parent.style.height = "100vh";

  parent.appendChild(landingImg);
  parent.appendChild(heroText);
  parent.appendChild(tagLine);
  console.log("Content added");
}