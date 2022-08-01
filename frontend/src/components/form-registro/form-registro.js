import { EmailValidator } from "../../tools/email-validator.js";
import { PasswordValidator } from "../../tools/passwd-validator.js";

export class FormRegistro {
  constructor(selector) {
    this.selector = selector;
    this.id = selector;
    this.parentDiv = document.querySelector(selector);
  }
  render() {
    /**inyecta el archivo html */
    $(function () {
      $("#form-registro").load(
        "../../components/form-registro/form-registro.html"
      );
    });
    /**inyecta su css en el tag head */
    /*
    $("head").append(
      '<link rel="stylesheet" href="../../components/form-registro/form-registro.css" type="text/css" />'
    );*/
  }
  getFormData() {
    this.form = document.querySelector("#form");
    if (this.validaForm(this.form)) console.log("VALIDADO");
    else console.log("INCORRECTO FORM");
  }

  validaForm(form) {
    let errors = 0;
    let ev = new EmailValidator();
    let pv = new PasswordValidator();

    if (!ev.validate(this.form.elements["email"].value)) {
      console.log('email no cumple')
      errors++;
    }
    if (!pv.validate(this.form.elements["passwd"].value)) {
      console.log('password no cumple')
      errors++;
    }
    if (
      this.form.elements["passwd"].value !=
      this.form.elements["c-passwd"].value) {
      console.log('password no son iguales')
      errors++;
    }

    if (errors > 0) return false;
    else return true;
  }
}
