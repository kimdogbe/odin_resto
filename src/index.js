import { loadPage as homePage } from "./home.js";
import { loadPage as aboutPage } from "./about.js";
import { loadPage as menuPage } from "./menu.js";

console.log("Bienvenu a le restaurant d'Odin. Le pere de Thor et spagetthi meatballs.");

const content = document.querySelector("#content");
homePage(content);

addEventListener("click", (event) => {
  let btnClicked = event.target.id

  switch (btnClicked){
    case "homeBtn":
      homePage(content);
      break;
    case "aboutBtn":
      aboutPage(content);
      break;
    case "menuBtn":
      menuPage(content);
      break;
  }
});