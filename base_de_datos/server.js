const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
//implementación de method override p/ interpretación de verbos http PUT/PATCH/DELETE
const methodOverride = require('method-override');
const session = require('express-session');
const findUser = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

const app = express();

//Al manejar routas, se elimina del server el import del controlador. Se comentan (1),(2) y (3)
//(1)
//const tasks = require('./controllers/tasks');
//En su lugar se reemplaza por
const taskRoutes = require('./routes/task_routes');
//Se incluyen rutas de registration
const registrationRouter = require('./routes/registration_routes');
const sessionRouter = require('./routes/session_routes');

app.use(bodyParser.urlencoded({extended: true}));
//se pasa como parámetro la estrategia a implementar
app.use(methodOverride('_method'));

app.set('view engine','pug');
//Integración del middleware de sesiones
app.use(session({    
    secret: ['123123hasjhdjahdj','123hkjashdhakdhakjhdjbv'],//clave con la que firmaremos
    saveUninitialized:false, //Indican si se debe  guardar una sesion sin valor al ser inicializada
    resave:false //si debe guardar la sesion constantemente.
}));

//*******TEMA MIDDLEWARES*******
//Insertamos el nuevo middleware
//Es necesario que este middleware se llame luego del middleware de sesiones. El orden importa.
app.use(findUser);
//Middleware para validar acceso a rutas. El usuario debera tener una sesion iniciada para acceder a las mismas
app.use(authUser);
//******************************



//(2)
// app.get('/tasks',tasks.home);

app.use(taskRoutes);
app.use(registrationRouter);
app.use(sessionRouter);

app.get('/',function(req,res){
    //console.log("USUARIO LOGUEADO: ",req);
    res.render('home',{user:req.user});
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



