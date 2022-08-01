export class Usuario {
  constructor() {}

  set passwd(e) {
    this.email = e;
  }
  get passwd() {
    return this.passwd;
  }

  render(selector) {
    let parentForm = document.createElement("div"); //creamos un div
    parentForm.id = `${selector}`; //y le agregamos el selector
    // crea los campos a utilizar
    let labelUser = document.createElement("label");
    let labelPass = document.createElement("label");

    //creamos un div y le añadimos 3 input submit
    let divButtons = document.createElement("div");

    // creamos y modificamos el contenido de los botones
    divButtons.innerHTML = "<a href='#' id='signIn'>signIn</a>";
    divButtons.innerHTML += "<a href='#' id='logIn'>logIn</a>";
    divButtons.innerHTML += "<a href='#'  id='logOut'>logOut</a>";

    // agrega el contenido a los campos creados
    labelUser.innerHTML =
      "Usuario<input type='text' name='user' placeholder='name'>";
    labelPass.innerHTML =
      "Password<input type='password' name='password' placeholder='password'>";
    // añadimos al padre los campos
    parentForm.appendChild(labelUser);
    parentForm.appendChild(labelPass);
    parentForm.appendChild(divButtons);
    document.body.append(parentForm); // con prepend lo agregamos al body como primer hijo
  }
}
