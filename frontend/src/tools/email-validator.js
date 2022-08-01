export class EmailValidator{

    constructor()   {}
    

    validate(email){
        let regex = new RegExp(
            "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
          );
          if (regex.test(email)) {
            return true;
          } else {
            return false;
          }

    }
}