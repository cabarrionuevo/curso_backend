const express = require('express')

const app = express();

//configuración del motor de vistas
app.set('view engine','ejs')

//archivos estáticos
app.use('/accesibles',express.static('assets',
{
    etag:false,
    maxAge:20000
}));

app.get('/',function(req,res){
    res.render('index')
});

app.listen(3000);

