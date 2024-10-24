import bread from "../images/bread-white.jpg"

export function loadPage () {
  const homeContent = document.createElement("div");
  homeContent.id = "home-content";
  const landingImg = document.createElement("img");
  const heroText = document.createElement("h1");
  const tagLine = document.createElement("p");

  heroText.innerHTML = "Resto d'Odin";
  tagLine.innerHTML = "clean, simple, brilliant";

  homeContent.appendChild(landingImg);
  homeContent.appendChild(heroText);
  homeContent.appendChild(tagLine);
  
  console.log("Content Created");
  return homeContent;
}