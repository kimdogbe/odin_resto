import bread from "../images/bread-white.jpg"

export function loadPage () {
  const menuContent = document.createElement("div");
  menuContent.id = "menu-content";

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

  menuContent.appendChild(heroText);
  menuContent.appendChild(menu);

  return menuContent;
}