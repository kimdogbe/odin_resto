import { loadPage as homePage } from "./home.js";
import { loadPage as aboutPage } from "./about.js";
import { loadPage as menuPage } from "./menu.js";
import "./style.css"

console.log("Bienvenu a le restaurant d'Odin. Le pere de Thor et spagetthi meatballs.");

const content = document.querySelector("#content");
content.appendChild(homePage());

addEventListener("click", (event) => {
  let btnClicked = event.target.id

  switch (btnClicked){
    case "homeBtn":
      content.innerHTML = "";
      content.appendChild(homePage(content));
      break;
    case "aboutBtn":
      content.innerHTML = "";
      content.appendChild(aboutPage());
      break;
    case "menuBtn":
      content.innerHTML = "";
      content.appendChild(menuPage());
      break;
  }
});