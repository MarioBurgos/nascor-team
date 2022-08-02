// instanciamos un objeto mysql que va a conectarse con la base 
//de datos de xampp phpmyadmin
const mysql = require('mysql');
const { Usuario } = require('./model/usuario.model.js');
// la conexión se crea mediante el metodo createConnection del objeto
// anterior
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : '3123',
    database : 'proyecto'
    //estos datos ahora estan a la vista, pero habrá que hacerles facade.
    //Si esto no te funciona es porque tienes que crear un usuario en la
    // Base de DAtos y poner el login aqui.

});
// se abre una conexión 
connection.connect(err =>{
    if (err) throw err;
    else console.log('Conectado a la base de datos');
});

//Query de insert
const insert = "INSERT INTO usuarios (id, email, password) VALUES (NULL, 'email@emial.es', 'qwerty')";
connection.query(insert, (err, res) =>{
    if (err) throw err;
    console.log('Insertado correctamente');
});
// se manda una consulta mysql (query), el callback de la función es 
//o bien un error, que se muestra por consola, o las filas de la tabla 
//resultantes de la consulta (objeto json RowDataPacket)
connection.query('SELECT * from usuarios', (err, rows)=>{
    if (err) throw err;
    console.log('DATOS DE LA TABLA:');
    console.log(rows);
    //el resultado rows es un array de objetos
    rows.forEach(element => {
        let usuario = element;
        console.log(usuario.email);
    });
});



/**cerramos la conexión, ya que sino se quedaría abierta y consumiendo memoria,
 * ralentizando la aplicación y generando vulnerabilidades.
 */
connection.end();