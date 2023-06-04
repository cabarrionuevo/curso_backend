const Category = require('../models').Category;

module.exports = {
    index: function (req, res) {
        Category.findAll().then((categories) => {
            res.render('categories/index', { categories: req.user.categories });
        })
    },
    new: function (req, res) {
        //redirección a formulario de creación        
        res.render('categories/new');
    },
    create: function (req, res) {
        //orden de creación de registro en base de datos
        Category.create({
            title: req.body.title,
            color: req.body.color
        }).then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    edit: function (req, res) {
        Category.findByPk(req.params.id).then(function (category) {
            res.render('categories/edit', {category});
        })
    },
    update:function(req,res){
        Category.update({title:req.body.title},{
            where: {
                id: req.params.id
            }
        }).then(function(response){
            res.redirect('/categories/'+req.params.id);
        })
    },
    show: function(req,res){
        Category.findByPk(req.params.id).then(
            function(category){
                res.render('categories/show',{category});
            }
        )
    },
    destroy: function(req,res){
        Category.destroy({
            where: {id: req.params.id}
        }).then(function(elementosAfectados){
            res.redirect('/categories/')
        })
    }


};