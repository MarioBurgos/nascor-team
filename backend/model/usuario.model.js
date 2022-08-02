class Usuario{
   constructor(json){
    this.id = json.id;
    this.email = json.email;
    this.password = json.password
   }

   getId(){
    return this.id;
   }
   getPassword(){
    return this.password;
   }
   getEmail(){
    return this.email;
   }
}

