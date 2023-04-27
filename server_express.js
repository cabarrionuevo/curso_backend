const express = require('express');

const bodyParser = require('body-parser');

//a este objeto app luego se le pueden especificar rutas a las que va a responder
const app = express();

//le pedimos a express que como parte de la respuesta a una petición lea los datos del cuerpo de la misma
app.use( bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.send('Hola Mundo con express');
});

app.get('/saludo',function(req,res){
    res.send(`Hola ${req.query.name}`)
});

app.post('/saludo-post',function(req,res){
    res.send(`Hola ${req.body.name}`)
});

app.get('/prueba-variable',function(req,res){

    for(let p=0;p<10;p++){
        console.log("-",p);
    }
        
    console.log("Después: ",p);
    

});


app.get('/prueba-variable-var',function(req,res){

    for(var p = 0; p < 10; p++){
        console.log("-",p)
    }
    console.log("Despues",p)
});

app.listen(3000);