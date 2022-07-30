import { NavHeaderComponent } from "../components/nav-header/nav-header.component.js";
import { Usuario } from "../model/usuario.model.js";
/*
document.addEventListener("click", (evt) => {
  let parentDiv = document.querySelector("#nav-header");
  let navHeader = new NavHeaderComponent("#nav-header", "hola mundo");
  parentDiv = navHeader.render();
});
*/
// selecciona el formulario usuario y añade su contenido creado en la funcion render()
let userLogin = new Usuario();
userLogin.render("user-login");

//activa la escucha y define la funcion para cada button
document.getElementById("signIn").addEventListener("click", signIn);
document.getElementById("logIn").addEventListener("click", logIn);
document.getElementById("logOut").addEventListener("click", logOut);

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
