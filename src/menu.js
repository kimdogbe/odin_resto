import bread from "../images/bread-white.jpg"

export function loadPage (parent) {
  parent.innerHTML = "";
  
  const heroText = document.createElement("h1");
  const menu = document.createElement("ul");
  const itemOne = document.createElement("li");
  const itemTwo = document.createElement("li");
  const itemThree = document.createElement("li");

  heroText.innerHTML = "Menu";
  itemOne.innerHTML = "Bread - 4.30";
  itemTwo.innerHTML = "Butter - 3.10";
  itemThree.innerHTML = "Coffee - 3.50";

  menu.appendChild(itemOne);
  menu.appendChild(itemTwo);
  menu.appendChild(itemThree);

  parent.style.background = `url(${bread})`;
  parent.style.backgroundSize = "100%";
  parent.style.height = "100vh";
  
  parent.appendChild(heroText);
  parent.appendChild(menu);
}