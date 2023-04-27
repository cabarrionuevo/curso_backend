const User = require('../models').User;

module.exports = {
    new: function(req,res){
        res.render('sessions/new');
    },
    create: function(req,res){        
        User.login(req.body.email, req.body.password).then(user => {            
            //***Manejo de sesiones***/
            if(user){
                req.session.userId = user.id; //Si hay un usuario, guardamos el usuario autenticado en una sesion
            }
            console.log("Consulta user:****",user);
            //********************** */
            res.json(user);
        })
        .catch(err=>{            
            res.json(err);
        })
    },
    destroy: function(req,res){
        //Elimina todos los datos de la sesión
        req.session.destroy(function(){
            //Todos los redireccionamientos se hacen con GET
            res.redirect('/sessions')
        });
    }
};