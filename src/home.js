import darkBread from "../images/bread-white.jpg"

export function loadPage (parent) {

  const landingImg = document.createElement("img");
  const heroText = document.createElement("h1");
  const tagLine = document.createElement("p");

  heroText.innerHTML = "Resto d'Odin";
  tagLine.innerHTML = "clean, simple, brilliant";
  // landingImg.src = darkBread;
  // landingImg.style.width = "100%"

  parent.style.backgroundImage = `url(${darkBread})`;
  parent.style.height = "100vh";
  parent.appendChild(landingImg);
  parent.appendChild(heroText);
  parent.appendChild(tagLine);
  console.log("Content added");
}