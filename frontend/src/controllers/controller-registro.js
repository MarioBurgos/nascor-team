import { FormRegistro } from "../components/form-registro/form-registro.js";
import { NavHeaderComponent } from "../components/nav-header/nav-header.js";

let navHeader;
let formRegistro;


/***Listener de carga de la ventana/componentes */
window.addEventListener('load', (evt) => {
  /**
   * crea el header
   */
  let parentDiv = document.querySelector("#nav-header");
  navHeader = new NavHeaderComponent("#nav-header");
  parentDiv = navHeader.render();

  /**crea el formulario de registro */
  let parentMain = document.querySelector("#form-registro");
  formRegistro = new FormRegistro("#form-registro");
  parentMain = formRegistro.render();
});

/**listener de evento click */
document.addEventListener('click', evento => {
  if(evento.target.id == 'btn-registro'){
  formRegistro.getFormData();
  }
});
