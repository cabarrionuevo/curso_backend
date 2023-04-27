'use strict';

const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password_hash: DataTypes.STRING,
    //El tipo virtual es para aquello campos que tienen que estar en el modelo pero no en la base de datos.
    password: DataTypes.VIRTUAL
  }, 
  {
    sequelize,
    modelName: 'User',
  });
  User.login = function(email,password){
    //Buscar al usuario utilizando el correo. finOne retorna una promesa.
    return User.findOne({
      where: {
        //Se puede utilizar la sentencia de abajo o en su defecto short hands propertys, ya que la clave es igual al valor. De querer usar esta ultima la sentencia sería la sgte:
        //email
        email: email
      }
    }).then(user=> {      
      if(!user) return null;      
      //Si el resultado de authenticatePassword es valid, retorna valid sino retorna null
      return user.authenticatePassword(password).then(valid=> {        
        if(valid) {          
          return user;
        }else{
          return null;
        }
        
        
      });
    });
  };

  //Método de instancia que estará disponible para las intancias de la clase usuario NO PARA LA CLASE
  User.prototype.authenticatePassword = function(password){
    
    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.password_hash,function(err,valid){
        //err -> contiene los posibles errores
        //valid -> es un booleano que retorna el resultado de la comparación del texto de entrada hasheado con la contraseña hasheada que viene del usuario recuperado en bd
        if(err) return rej(err);

        res(valid);
      })
    })
    }
    
  

  User.beforeCreate(function(user,option){
    //************************************************************************************************* */
    // El método hash recibe 3 parámetros
    // 1) La cadena a encriptar
    // 2) La cantidad de rondas para encriptar la cadena (es algo propio del algoritmo)
    // 3) Una función mediante la cual vos le vas a indicar que mierda hacer con la cadena encriptada.
    // De esta forma una vez el método haya encriptado la cadena (que en este caso es una password) se lo 
    // va a pasar a tu función que va a hacer lo que a vos se te cante el ojete que haga. En este caso
    // simplemente asignarlo a otra propiedad del modelo que es password_hash
    // ¿Por que utilizamos una promesa? 
    // Porque al ser bcrypt un método asincrono es altamente posible que el
    // beforeCreate no espere la culminación del proceso que se ejecuta en otro hilo y retorne una respuesta
    // correcta, de esta forma puede pasar que se cree el registro del usuario en base de datos y recien
    // ahi termine la encriptación de la contraseña, lo que no nos sirve.
    //************************************************************************************************* */
    return new Promise((res,rej)=>{
      if(user.password){
        //bcrypt es un método asincrono.
        bcrypt.hash(user.password, 10, function(error,hash){
          user.password_hash = hash;
          res();
        })
      }
      });
    });
    
    
  return User;
};