const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//ARG1 -> Nombre de la bd, ARG2 -> USERNAME, ARG3 -> CONTRASEÑA, ARG4 -> JSON DE CONFIGURACIÓN
const sequelize = new Sequelize('proyecto-backend',null,null,{
    //motor de base de datos
    dialect: 'sqlite',
    //ruta al archivo donde se almacenará la base de datos
    storage: './proyecto-backend'
});

// :memory, a la sgte instruccion se le puede pasar esta palabra para que cree una base de datos temporal en memoria ram
//Con la siguiente instrucción se abre la conexión a la base de datos
let db = new sqlite3.Database('proyecto-backend');

// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT,description varchar(255))');

app.post('/pendientes',function(req,res){
    
    //El código de la siguiente linea (1) es inseguro, ya que da lugar a posibles inyecciones SQL.
    //por eso se recomienda reemplazarlo por (2) que tiene funcionalidad de limpieza de datos.
    //(1)
    //db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`);
    //(2)
    db.run(`INSERT INTO tasks(description) VALUES($)`,req.body.description);
    res.send("Inserción finalizada");
})

app.listen(3000);

//con el objeto process podemos escuchar algunos eventos y realizar tareas acordes,
//SIGINT es el mensaje que ejecuta el proceso cuando presionamos CTRL+C
//El objetivo de las siguientes lineas es cerrar la base de datos cuando el servidor este cerrado.

/*******  EL SIGUIENTE CÓDIGO AL USAR ORM YA NO ES NECESARIO *******/
// process.on('SIGINT',function(){
//     console.log('Adios - atte. El servidor');
//     db.close();
//     process.exit();
// })



