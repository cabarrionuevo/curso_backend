const { json } = require("body-parser");
const User = require('../models').User;

module.exports = {
    //new es la función controladora
    new: function(req,res){
        //la vista por convención debería coincidir con el nombre la función controladora
        res.render('registrations/new');
    },
    create: function(req,res){
        let data = {
            email: req.body.email,
            password: req.body.password
        }
        
        User.create(data).then(result=>{
            res.json(result);            
        }).catch(err=>{
            res.json(err);
        });
    },

    
};