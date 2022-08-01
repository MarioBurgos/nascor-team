export class PasswordValidator{

    constructor()   {}
    
/*Valida minimo una MAYUSCULA, una MINUSCULA, un NUMERO y un CARACTER ESPECIAL*/
    validate(pass){
        let regex = new RegExp(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          );
          if (regex.test(pass)) {
            return true;
          } else {
            return false;
          }

    }
}