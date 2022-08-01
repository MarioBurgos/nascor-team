import { NavHeaderComponent } from "../components/nav-header/nav-header.js";
import { Usuario } from "../model/usuario.model.js";

window.addEventListener('load', (evt) => {
  /**
   * crea el header
   */
  
  
  let parentDiv = document.querySelector("#nav-header");
  let navHeader = new NavHeaderComponent("#nav-header", "hola mundo");
  parentDiv = navHeader.render();

  /**
   * formulario de login de nico
   */
  // selecciona el formulario usuario y añade su contenido creado en la funcion render()
let userLogin = new Usuario();
userLogin.render("user-login");

//activa la escucha y define la funcion para cada button
document.getElementById("signIn").addEventListener("click", signIn);
document.getElementById("logIn").addEventListener("click", logIn);
document.getElementById("logOut").addEventListener("click", logOut);

});


/**
 * TODO:  Pienso que estas funciones pertenecen a otra clase que sea LoginForm, igual que el render que está en la clase del model Usuario.  El controller solo debería tener código de eventos o carga de componentes.
 */
function signIn() {
  //code...
  console.log(this);
}
function logIn() {
  //code...
  console.log(this);
}
function logOut() {
  //code...
  console.log(this);
}
