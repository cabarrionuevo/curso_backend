//Importamos el modelo Task
const Task = require('../models').Task;
const User = require('../models').User;

module.exports = {
  index: function(req,res){
    Task.findAll().then((tasks)=>{
      res.render('tasks/index',{tasks: req.user.tasks});
    })
  },
  show: function(req,res){
    Task.findByPk(req.params.id,{
      //EAGERLOADING - P/INDICAR CARGA DE MODELOS RELACIONADOS
      include: [
        {
          model: User,
          as:'user'
        },
        'categories'
      ]
    }).then(function(task){      
      //Opción 1
      // res.render('tasks/show',{task:task});
      //Opción 2 usando short hand property, cuando la clave es igual al valor
      res.render('tasks/show',{task});
    })
  },
  edit: function(req,res){
    Task.findByPk(req.params.id).then(function(task){            
      //Opción 1
      // res.render('tasks/show',{task:task});
      //Opción 2 usando short hand property, cuando la clave es igual al valor      
      res.render('tasks/edit',{task});
    })
  },
  destroy: function(req,res){
    Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(contadorElementosEliminados){
      res.redirect('/tasks/');
    })
  },
  create: function(req,res){
      Task.create({
        description: req.body.description,
        userId:req.user.id
      }).then(result =>{ 
        res.json(result);
    }).catch(err=>
      {
        console.log(err);
        res.json(err);
      })
    },
    update: function(req,res){
      let task = Task.findByPk(req.params.id).then(task=>{
        task.description = req.body.description;
        task.save().then(()=>{
          //viene una cadena separada por coma, individulizo los elementos
          let categoryIds = req.body.categories.split(",");
          
          task.addCategories(categoryIds).then(()=>{
            //Redirecciono
            res.redirect(`/tasks/${task.id}`);
          })
        })
      })      
    },      
    new: function(req,res){
      res.render('tasks/new');
    }
};