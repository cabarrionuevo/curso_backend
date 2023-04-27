const express = require('express');
//Objeto con métodos capaces de manejar peticiones http
let TasksController = require('../controllers/tasks');

let router = express.Router();

//Sobre una misma URI se pueden ejecutar diferentes verbos http y por consiguiente definir distintas acciones.
// router.route('/tasks').get(function(req,res){
//     res.send('Hola Mundo desde una subruta');
// }).post(TasksController.create)


router.route('/tasks').post(TasksController.create);
//¿Por que es get? porque esta ruta simplemente mostrará un formulario
router.route('/tasks/new').get(TasksController.new);
router.route('/tasks/index').get(TasksController.index);
//
router.route('/tasks/:id/edit').get(TasksController.edit);
//Manejo individual de registros. verbo http put para actualizar registros.
router.route('/tasks/:id')
    .get(TasksController.show)
    .put(TasksController.update)
    .delete(TasksController.destroy);//el ':' indica un comodín o un wildcard


module.exports = router;
