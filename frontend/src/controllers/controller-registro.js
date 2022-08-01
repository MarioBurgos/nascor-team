import { NavHeaderComponent } from "../components/nav-header/nav-header.js";

window.addEventListener('load', (evt) => {
  /**
   * crea el header
   */
  let parentDiv = document.querySelector("#nav-header");
  let navHeader = new NavHeaderComponent("#nav-header", "hola mundo");
  parentDiv = navHeader.render();

});


