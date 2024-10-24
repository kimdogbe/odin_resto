import bread from "../images/bread-dark.jpg"

export function loadPage (parent) {
  parent.innerHTML = "";
  
  const aboutImg = document.createElement("img");
  const heroText = document.createElement("h1");
  const tagLine = document.createElement("p");

  heroText.innerHTML = "About Resto d'Odin";
  tagLine.innerHTML = "We make everything fresh everyday and NEVER skimp on ingredients.";

  parent.style.background = `url(${bread})`;
  parent.style.backgroundSize = "100%";
  parent.style.height = "100vh";
  parent.style.color = "white";

  parent.appendChild(aboutImg);
  parent.appendChild(heroText);
  parent.appendChild(tagLine);
  console.log("Content added");
}